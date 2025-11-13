const fs = require('fs');

console.log('=== CONSOLIDATING AND FILTERING PUBLIC APIs ===\n');

// Load template swagger for reference
const templateSwagger = JSON.parse(fs.readFileSync('../source/templates/Public Swagger/public-v2.json', 'utf8'));
console.log(`Loaded template swagger: ${Object.keys(templateSwagger.paths || {}).length} paths\n`);

// Extract operation IDs from template swagger (for "On Portal" tracking)
const portalOperationIds = new Set();
const paths = templateSwagger.paths || {};
Object.keys(paths).forEach(path => {
  Object.keys(paths[path]).forEach(method => {
    const operation = paths[path][method];
    if (operation.operationId) {
      portalOperationIds.add(operation.operationId);
    }
  });
});
console.log(`Portal operation IDs: ${portalOperationIds.size}\n`);

// Load GitHub [PublicApi] operations
let githubPublicApiOps = [];
if (fs.existsSync('../source/github/github-publicapi-operations.json')) {
  githubPublicApiOps = JSON.parse(fs.readFileSync('../source/github/github-publicapi-operations.json', 'utf8'));
  console.log(`GitHub [PublicApi] operations: ${githubPublicApiOps.length}`);
} else {
  console.log(`GitHub [PublicApi] operations: 0 (file not found)`);
}

// Load API Gateway whitelists (v1 and v2)
const whitelistV2Ops = fs.readFileSync('../source/config/api_white_list.txt', 'utf8')
  .split('\n')
  .map(line => line.trim())
  .filter(op => op && op.length > 0);
console.log(`API Gateway v2 whitelist operations: ${whitelistV2Ops.length}`);

let whitelistV1Ops = [];
if (fs.existsSync('../source/config/api_white_list_v1.txt')) {
  whitelistV1Ops = fs.readFileSync('../source/config/api_white_list_v1.txt', 'utf8')
    .split('\n')
    .map(line => line.trim())
    .filter(op => op && op.length > 0);
  console.log(`API Gateway v1 whitelist operations: ${whitelistV1Ops.length}`);
} else {
  console.log(`API Gateway v1 whitelist operations: 0 (file not found)`);
}
console.log(`API Gateway total whitelist operations: ${whitelistV2Ops.length + whitelistV1Ops.length}\n`);

// Create sets for version-specific filtering
const whitelistV1Set = new Set(whitelistV1Ops);
const whitelistV2Set = new Set(whitelistV2Ops);
const githubPublicApiSet = new Set(githubPublicApiOps);

// Load all swagger batch files
const batchFiles = [];
for (let i = 0; i <= 100; i++) {
  const dualFilename = `../source/swagger-batch/swagger-results-dual-version-batch-${i}.json`;
  if (fs.existsSync(dualFilename)) {
    const data = JSON.parse(fs.readFileSync(dualFilename, 'utf8'));
    batchFiles.push({ batch: i, type: 'dual-version', data });
    continue;
  }

  const fallbackFilename = `../source/swagger-batch/swagger-results-fallback-batch-${i}.json`;
  if (fs.existsSync(fallbackFilename)) {
    const data = JSON.parse(fs.readFileSync(fallbackFilename, 'utf8'));
    batchFiles.push({ batch: i, type: 'fallback', data });
  }
}

console.log(`Loaded ${batchFiles.length} batch files\n`);

// Consolidate all swagger operations
const allSwaggerOps = new Map();
let totalServicesProcessed = 0;
let totalSuccessful = 0;
let totalOpsFound = 0;

batchFiles.forEach(batchFile => {
  batchFile.data.forEach(result => {
    totalServicesProcessed++;
    if (!result.error && result.operations && result.operations.length > 0) {
      totalSuccessful++;
      totalOpsFound += result.operations.length;

      result.operations.forEach(op => {
        // Use operationId + version as unique key to support same operationId in v1 and v2
        const key = `${op.operationId}__${result.version}`;
        if (!allSwaggerOps.has(key)) {
          allSwaggerOps.set(key, {
            operationId: op.operationId,
            method: op.method,
            path: op.path,
            description: op.description,
            tags: op.tags || [],
            scopes: op.scopes,
            service: result.service,
            swaggerVersion: result.version || 'unknown',
            source: `Service Swagger (${result.service})`
          });
        }
      });
    }
  });
});

console.log(`Services processed: ${totalServicesProcessed}`);
console.log(`Successful: ${totalSuccessful}`);
console.log(`Total swagger operations found: ${totalOpsFound}`);
console.log(`Unique operations: ${allSwaggerOps.size}\n`);

// Filter operations: use version-specific whitelists
const filteredOps = [];
const includedOps = new Set();
const excludedOps = new Set();
const statsV1Allowed = { github: 0, gateway: 0, total: 0 };
const statsV2Allowed = { github: 0, gateway: 0, total: 0 };

allSwaggerOps.forEach((op, key) => {
  const opId = op.operationId;
  const version = op.swaggerVersion;
  let isAllowed = false;

  // Check GitHub [PublicApi] (version agnostic)
  if (githubPublicApiSet.has(opId)) {
    isAllowed = true;
    if (version === 'v1') statsV1Allowed.github++;
    else statsV2Allowed.github++;
  }

  // Check version-specific API Gateway whitelist
  if (version === 'v1' && whitelistV1Set.has(opId)) {
    isAllowed = true;
    statsV1Allowed.gateway++;
  } else if (version === 'v2' && whitelistV2Set.has(opId)) {
    isAllowed = true;
    statsV2Allowed.gateway++;
  }

  if (isAllowed) {
    filteredOps.push({
      ...op,
      onPortal: portalOperationIds.has(opId)
    });
    includedOps.add(key);
    if (version === 'v1') statsV1Allowed.total++;
    else statsV2Allowed.total++;
  } else {
    excludedOps.add(key);
  }
});

console.log('=== FILTERING RESULTS ===\n');
console.log(`Operations before filtering: ${allSwaggerOps.size}`);
console.log(`Operations after filtering: ${filteredOps.length}`);
console.log(`Excluded operations: ${excludedOps.size}\n`);

console.log(`Breakdown:`);
console.log(`  - From [PublicApi] GitHub: ${statsV1Allowed.github + statsV2Allowed.github}`);
console.log(`  - From API Gateway v1 whitelist: ${statsV1Allowed.gateway}`);
console.log(`  - From API Gateway v2 whitelist: ${statsV2Allowed.gateway}`);
console.log(`  - V1 operations allowed: ${statsV1Allowed.total}`);
console.log(`  - V2 operations allowed: ${statsV2Allowed.total}`);
console.log(`  - On Developer Portal: ${filteredOps.filter(op => op.onPortal).length}\n`);

// Sort by operation ID
filteredOps.sort((a, b) => a.operationId.localeCompare(b.operationId));

// Ensure consolidated directory exists
if (!fs.existsSync('../source/consolidated')) {
  fs.mkdirSync('../source/consolidated', { recursive: true });
}

// Save filtered operations
fs.writeFileSync(
  '../source/consolidated/filtered-public-apis.json',
  JSON.stringify(filteredOps, null, 2)
);

console.log('=== CONSOLIDATION COMPLETE ===\n');
console.log(`File saved: source/consolidated/filtered-public-apis.json`);
console.log(`Total filtered public APIs: ${filteredOps.length}`);
