const fs = require('fs');

// Load all batch files
const batchFiles = [];
for (let i = 0; i <= 25; i++) {
  const filename = `swagger-results-batch-${i}.json`;
  if (fs.existsSync(filename)) {
    const data = require(`./${filename}`);
    batchFiles.push({ batch: i, data });
  }
}

console.log(`Loaded ${batchFiles.length} batch files\n`);

// Load existing data
const publicV2Data = JSON.parse(fs.readFileSync('Public Swagger/public-v2.json', 'utf8'));
const publicV2Ops = require('./public-v2-operations.json');
const githubOps = require('./github-publicapi-search.json');
const ignoreOps = fs.readFileSync('./documentation_ignore.txt', 'utf8')
  .split('\n')
  .map(line => line.trim())
  .filter(op => op && op.length > 0);

// Create operation ID to tags map from public v2
const opIdToTags = new Map();
const paths = publicV2Data.paths || {};
Object.keys(paths).forEach(path => {
  Object.keys(paths[path]).forEach(method => {
    const operation = paths[path][method];
    if (operation.operationId) {
      opIdToTags.set(operation.operationId, operation.tags || []);
    }
  });
});

// Consolidate all swagger operations
const allSwaggerOps = new Map();
let totalServicesProcessed = 0;
let totalSuccessful = 0;
let totalOpsFound = 0;

batchFiles.forEach(batchFile => {
  batchFile.data.forEach(result => {
    totalServicesProcessed++;
    if (!result.error && result.operations.length > 0) {
      totalSuccessful++;
      totalOpsFound += result.operations.length;

      result.operations.forEach(op => {
        if (!allSwaggerOps.has(op.operationId)) {
          allSwaggerOps.set(op.operationId, {
            operationId: op.operationId,
            method: op.method,
            path: op.path,
            description: op.description,
            tags: op.tags,
            service: result.service,
            isInIgnoreList: op.isInIgnoreList
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

// Match operations from documentation_ignore with swagger data
console.log('=== MATCHING DOCUMENTATION_IGNORE OPERATIONS ===\n');

const matchedIgnoreOps = [];
const unmatchedIgnoreOps = [];

ignoreOps.forEach(opId => {
  if (allSwaggerOps.has(opId)) {
    const swaggerOp = allSwaggerOps.get(opId);
    matchedIgnoreOps.push({
      operationId: opId,
      method: swaggerOp.method,
      path: swaggerOp.path,
      description: swaggerOp.description,
      tags: swaggerOp.tags,
      service: swaggerOp.service,
      source: 'Swagger + Documentation Ignore'
    });
  } else {
    unmatchedIgnoreOps.push(opId);
  }
});

console.log(`Matched from swagger: ${matchedIgnoreOps.length}/${ignoreOps.length}`);
console.log(`Unmatched: ${unmatchedIgnoreOps.length}\n`);

if (unmatchedIgnoreOps.length > 0) {
  console.log('Unmatched operations from documentation_ignore:');
  unmatchedIgnoreOps.forEach(op => console.log(`  - ${op}`));
  console.log('');
}

// Create comprehensive API map
const apiMap = new Map();

// 1. Add from public-v2.json (on portal)
publicV2Ops.forEach(op => {
  apiMap.set(op.operationId, {
    operationId: op.operationId,
    method: op.method,
    path: op.path,
    description: op.description,
    tags: opIdToTags.get(op.operationId) || [],
    onDeveloperPortal: true,
    source: 'Public Swagger v2',
    isHidden: false,
    service: ''
  });
});

// 2. Add matched operations from documentation_ignore
matchedIgnoreOps.forEach(op => {
  if (apiMap.has(op.operationId)) {
    // Mark existing as hidden
    const existing = apiMap.get(op.operationId);
    existing.isHidden = true;
    existing.service = op.service;
    existing.source += ' + Documentation Ignore + Service Swagger';
  } else {
    // New operation not on portal
    apiMap.set(op.operationId, {
      operationId: op.operationId,
      method: op.method,
      path: op.path,
      description: op.description,
      tags: op.tags,
      onDeveloperPortal: false,
      source: 'Service Swagger + Documentation Ignore',
      isHidden: true,
      service: op.service
    });
  }
});

// 3. Add unmatched operations from documentation_ignore (no swagger data found)
unmatchedIgnoreOps.forEach(opId => {
  if (!apiMap.has(opId)) {
    apiMap.set(opId, {
      operationId: opId,
      method: '',
      path: '',
      description: '',
      tags: [],
      onDeveloperPortal: false,
      source: 'Documentation Ignore Only',
      isHidden: true,
      service: 'Unknown'
    });
  }
});

// 4. Add from GitHub search
githubOps.forEach(op => {
  const opId = op.operationId;
  if (!apiMap.has(opId)) {
    apiMap.set(opId, {
      operationId: opId,
      method: op.httpMethod.toUpperCase(),
      path: op.route,
      description: `From ${op.repository} ${op.controller}`,
      tags: [],
      onDeveloperPortal: false,
      source: `GitHub ${op.repository}`,
      isHidden: false,
      repository: op.repository,
      controller: op.controller,
      service: op.repository
    });
  } else {
    const existing = apiMap.get(opId);
    existing.repository = op.repository;
    existing.controller = op.controller;
    if (!existing.path && op.route) existing.path = op.route;
    if (!existing.method && op.httpMethod) existing.method = op.httpMethod.toUpperCase();
    if (!existing.service) existing.service = op.repository;
    existing.source += ` + GitHub ${op.repository}`;
  }
});

// Convert to array and sort
const allApis = Array.from(apiMap.values()).sort((a, b) =>
  a.operationId.localeCompare(b.operationId)
);

// Save complete data
fs.writeFileSync('all-public-apis-final.json', JSON.stringify(allApis, null, 2));

console.log('=== FINAL STATISTICS ===\n');
console.log(`Total unique public APIs: ${allApis.length}`);
console.log(`APIs on Developer Portal: ${allApis.filter(a => a.onDeveloperPortal).length}`);
console.log(`Hidden Public APIs: ${allApis.filter(a => !a.onDeveloperPortal).length}`);
console.log(`APIs with tags: ${allApis.filter(a => a.tags && a.tags.length > 0).length}`);
console.log(`APIs with service info: ${allApis.filter(a => a.service && a.service !== 'Unknown').length}`);
console.log('\nFile saved: all-public-apis-final.json');
