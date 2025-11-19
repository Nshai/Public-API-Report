const fs = require('fs');
const path = require('path');

console.log('=== EXTRACTING [PublicApi] FROM LOCAL REPOSITORIES ===\n');

// Load service repos
const serviceRepos = JSON.parse(fs.readFileSync('../source/config/service-repos.json', 'utf8'));
const servicesDir = 'C:/work/public-apis/services';

console.log(`Services to scan: ${serviceRepos.length}\n`);

const publicApiOperations = new Set();
const serviceOperations = [];
let scannedRepos = 0;
let skippedRepos = 0;

// Recursively find all .cs files in a directory
function findCSharpFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip common directories that don't contain controllers
      if (!['node_modules', '.git', 'bin', 'obj', 'packages'].includes(file)) {
        findCSharpFiles(filePath, fileList);
      }
    } else if (file.endsWith('Controller.cs')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Extract operation IDs from a controller file
function extractOperationIds(filePath, repo) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const operations = [];

  // Check if controller has [PublicApi] attribute
  const controllerHasPublicApi = /\[PublicApi\]\s*(?:\r?\n\s*)*(?:public\s+)?(?:class|partial\s+class)\s+\w+Controller/i.test(fileContent);

  // Find all operation IDs from both HTTP method attributes and SwaggerOperation
  const httpMethodRegex = /\[Http(?:Get|Post|Put|Delete|Patch|Head|Options)\s*\([^)]*Name\s*=\s*"([^"]+)"[^\]]*\]/g;
  const swaggerOpRegex = /\[SwaggerOperation\s*\(\s*OperationId\s*=\s*"([^"]+)"\s*\)/g;

  let match;
  const allMatches = [];

  // Extract from HTTP method attributes
  while ((match = httpMethodRegex.exec(fileContent)) !== null) {
    if (match[1]) {
      allMatches.push({
        operationId: match[1],
        index: match.index
      });
    }
  }

  // Extract from SwaggerOperation attributes
  while ((match = swaggerOpRegex.exec(fileContent)) !== null) {
    if (match[1]) {
      allMatches.push({
        operationId: match[1],
        index: match.index
      });
    }
  }

  // For each match, check if it has [PublicApi] or if controller has it
  allMatches.forEach(matchInfo => {
    let hasPublicApi = false;

    // Check both before AND after the match for [PublicApi]
    // Some operations have [PublicApi] before HTTP attributes, some after SwaggerOperation

    // Search backwards (for HTTP method attributes)
    const startPosBefore = Math.max(0, matchInfo.index - 2000);
    const textBefore = fileContent.substring(startPosBefore, matchInfo.index);
    const linesBefore = textBefore.split('\n');

    for (let i = linesBefore.length - 1; i >= 0; i--) {
      const line = linesBefore[i].trim();
      if (line === '}' || line.startsWith('} ')) {
        break;
      }
      if (line.includes('[PublicApi]')) {
        hasPublicApi = true;
        break;
      }
    }

    // If not found before, search forwards (for SwaggerOperation attributes)
    if (!hasPublicApi) {
      const endPosAfter = Math.min(fileContent.length, matchInfo.index + 1000);
      const textAfter = fileContent.substring(matchInfo.index, endPosAfter);
      const linesAfter = textAfter.split('\n');

      for (let i = 0; i < linesAfter.length; i++) {
        const line = linesAfter[i].trim();

        // Stop if we hit the method signature (public/private/protected followed by return type)
        if (/^\s*(?:public|private|protected|internal)\s+/.test(line) && /\s+\w+\s*\(/.test(line)) {
          break;
        }

        if (line.includes('[PublicApi]')) {
          hasPublicApi = true;
          break;
        }
      }
    }

    // Include if controller OR action has [PublicApi]
    if (controllerHasPublicApi || hasPublicApi) {
      operations.push({
        operationId: matchInfo.operationId,
        repository: repo,
        file: path.relative(path.join(servicesDir, repo), filePath),
        scope: controllerHasPublicApi ? 'controller' : 'action'
      });
    }
  });

  return operations;
}

// Scan each repository
serviceRepos.forEach((repo, index) => {
  const repoPath = path.join(servicesDir, repo);

  console.log(`[${index + 1}/${serviceRepos.length}] Scanning ${repo}...`);

  // Check if repo exists
  if (!fs.existsSync(repoPath)) {
    console.log(`  ⏭️  Repository not found, skipping...`);
    skippedRepos++;
    return;
  }

  try {
    // Find all controller files
    const controllerFiles = findCSharpFiles(repoPath);

    if (controllerFiles.length === 0) {
      console.log(`  No controller files found`);
      scannedRepos++;
      return;
    }

    let repoOperations = [];

    // Process each controller file
    controllerFiles.forEach(filePath => {
      const ops = extractOperationIds(filePath, repo);
      repoOperations = repoOperations.concat(ops);
    });

    // Add to global collections
    repoOperations.forEach(op => {
      publicApiOperations.add(op.operationId);
      serviceOperations.push(op);
    });

    if (repoOperations.length > 0) {
      console.log(`  ✅ Found ${repoOperations.length} [PublicApi] operations in ${controllerFiles.length} controllers`);
    } else {
      console.log(`  No [PublicApi] operations found (scanned ${controllerFiles.length} controllers)`);
    }

    scannedRepos++;
  } catch (err) {
    console.log(`  ❌ Error: ${err.message}`);
    skippedRepos++;
  }
});

// Ensure github directory exists
if (!fs.existsSync('../source/github')) {
  fs.mkdirSync('../source/github', { recursive: true });
}

// Save results
const operationsArray = Array.from(publicApiOperations).sort();
fs.writeFileSync(
  '../source/github/github-publicapi-operations.json',
  JSON.stringify(operationsArray, null, 2)
);

fs.writeFileSync(
  '../source/github/github-publicapi-operations-detailed.json',
  JSON.stringify(serviceOperations, null, 2)
);

console.log('\n=== EXTRACTION COMPLETE ===\n');
console.log(`Total repositories: ${serviceRepos.length}`);
console.log(`Successfully scanned: ${scannedRepos}`);
console.log(`Skipped: ${skippedRepos}`);
console.log(`Total unique [PublicApi] operations found: ${publicApiOperations.size}`);
console.log(`\nFiles saved:`);
console.log(`  - source/github/github-publicapi-operations.json (${operationsArray.length} operations)`);
console.log(`  - source/github/github-publicapi-operations-detailed.json (${serviceOperations.length} detailed entries)`);
