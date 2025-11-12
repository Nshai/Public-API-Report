const { execSync } = require('child_process');
const fs = require('fs');
const { extractScopeFromAttribute } = require('./scope-utils');

console.log('=== MAPPING OPERATION IDS TO CONTROLLERS ===\n');

// Load all APIs
const allApis = JSON.parse(fs.readFileSync('../source/consolidated/all-public-apis-with-fallback.json', 'utf8'));

// Get list of all unique services that need scope mapping
const servicesNeedingScopes = new Set();
allApis.forEach(api => {
  if (!api.scopes || api.scopes.length === 0) {
    if (api.service && api.service !== 'Unknown' && api.service !== 'N/A') {
      servicesNeedingScopes.add(api.service);
    }
  }
});

console.log(`Services needing scope mapping: ${servicesNeedingScopes.size}`);
console.log(Array.from(servicesNeedingScopes).sort().join('\n'));
console.log('');

// For each service, we'll search GitHub for controllers that contain [PublicApi]
// and extract both the operation IDs and the controller-level [Scope] attribute

const batchSize = parseInt(process.argv[2]) || 5;
const startIndex = parseInt(process.argv[3]) || 0;
const services = Array.from(servicesNeedingScopes).sort();
const batch = services.slice(startIndex, startIndex + batchSize);

console.log(`Processing batch ${startIndex} to ${Math.min(startIndex + batchSize - 1, services.length - 1)}`);
console.log(`Services in this batch: ${batch.join(', ')}\n`);

const results = [];

function searchControllerFiles(repo) {
  try {
    // Search for C# controller files with v2 in the path
    const searchCmd = `gh api "search/code?q=repo:Intelliflo/${repo}+path:/v2/+filename:Controller.cs"`;
    const result = execSync(searchCmd, { encoding: 'utf8', timeout: 30000 });
    const data = JSON.parse(result);

    if (!data.items) {
      return [];
    }

    return data.items.map(item => item.path);
  } catch (error) {
    console.error(`  ✗ Error searching ${repo}: ${error.message}`);
    return [];
  }
}

function getFileContent(repo, filePath) {
  try {
    const cmd = `gh api "repos/Intelliflo/${repo}/contents/${filePath}"`;
    const result = execSync(cmd, { encoding: 'utf8', timeout: 15000 });
    const data = JSON.parse(result);

    if (!data.download_url) {
      return null;
    }

    const contentCmd = `curl -s "${data.download_url}"`;
    const content = execSync(contentCmd, { encoding: 'utf8', timeout: 15000 });

    return content;
  } catch (error) {
    return null;
  }
}

function extractOperationIdsAndScope(content, controllerName) {
  if (!content) return null;

  const lines = content.split('\n');
  const operations = [];
  let controllerScope = null;

  // First, find the controller-level [Scope] attribute
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Look for [Scope] before class definition
    if (line.match(/\[Scope\s*\(/i)) {
      for (let j = i + 1; j < Math.min(i + 5, lines.length); j++) {
        const nextLine = lines[j].trim();
        if (nextLine.includes('class') && nextLine.includes('Controller')) {
          controllerScope = extractScopeFromAttribute(line);
          break;
        }
      }
    }

    if (controllerScope) break;
  }

  // Now find all [PublicApi] operations
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line === '[PublicApi]') {
      let operationId = null;

      // Look ahead for operation ID
      for (let j = i + 1; j < Math.min(i + 20, lines.length); j++) {
        const nextLine = lines[j].trim();

        const opMatch = nextLine.match(/OperationId\s*=\s*"([^"]+)"/);
        if (opMatch) {
          operationId = opMatch[1];
          break;
        }

        // Stop if we hit a method definition
        if (nextLine.match(/(public|private|protected|internal)\s+(async\s+)?(Task|ActionResult|IActionResult)/)) {
          break;
        }
      }

      if (operationId) {
        operations.push(operationId);
      }
    }
  }

  return {
    controllerScope,
    operations,
    controllerName
  };
}

async function processService(service) {
  console.log(`\n=== Processing ${service} ===`);

  const controllerPaths = searchControllerFiles(service);
  console.log(`  Found ${controllerPaths.length} controller files`);

  if (controllerPaths.length === 0) {
    return null;
  }

  const serviceResults = {
    service,
    controllers: []
  };

  for (const path of controllerPaths) {
    const controllerName = path.split('/').pop().replace('.cs', '');
    process.stdout.write(`  ${controllerName}... `);

    const content = getFileContent(service, path);
    if (!content) {
      console.log('✗ Failed to fetch');
      continue;
    }

    const extracted = extractOperationIdsAndScope(content, controllerName);
    if (extracted && extracted.operations.length > 0) {
      console.log(`✓ ${extracted.operations.length} ops, scope: ${extracted.controllerScope || 'none'}`);
      serviceResults.controllers.push({
        controller: controllerName,
        filePath: path,
        scope: extracted.controllerScope,
        operations: extracted.operations
      });
    } else {
      console.log('- No public operations');
    }

    // Small delay
    await new Promise(resolve => setTimeout(resolve, 200));
  }

  return serviceResults;
}

async function main() {
  for (const service of batch) {
    try {
      const result = await processService(service);
      if (result && result.controllers.length > 0) {
        results.push(result);
      }
    } catch (error) {
      console.error(`Error processing ${service}:`, error.message);
    }

    // Delay between services
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  // Save results
  const outputFile = `../source/operation-to-controller-map-batch-${startIndex}.json`;
  fs.writeFileSync(outputFile, JSON.stringify(results, null, 2));

  // Calculate statistics
  let totalControllers = 0;
  let controllersWithScopes = 0;
  let totalOperations = 0;

  results.forEach(service => {
    service.controllers.forEach(controller => {
      totalControllers++;
      if (controller.scope) controllersWithScopes++;
      totalOperations += controller.operations.length;
    });
  });

  console.log('\n=== BATCH SUMMARY ===\n');
  console.log(`Services processed: ${results.length}`);
  console.log(`Controllers found: ${totalControllers}`);
  console.log(`Controllers with scopes: ${controllersWithScopes}`);
  console.log(`Total operations mapped: ${totalOperations}`);
  console.log(`\nFile saved: ${outputFile}`);
}

main().catch(console.error);
