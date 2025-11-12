const fs = require('fs');

// Load all batch files (both dual-version and fallback)
const batchFiles = [];
for (let i = 0; i <= 50; i++) {
  // Try dual-version first
  const dualFilename = `../source/swagger-batch/swagger-results-dual-version-batch-${i}.json`;
  if (fs.existsSync(dualFilename)) {
    const data = JSON.parse(fs.readFileSync(dualFilename, 'utf8'));
    batchFiles.push({ batch: i, type: 'dual-version', data });
    continue;
  }

  // Fallback to old format
  const fallbackFilename = `../source/swagger-batch/swagger-results-fallback-batch-${i}.json`;
  if (fs.existsSync(fallbackFilename)) {
    const data = JSON.parse(fs.readFileSync(fallbackFilename, 'utf8'));
    batchFiles.push({ batch: i, type: 'fallback', data });
  }
}

const dualCount = batchFiles.filter(f => f.type === 'dual-version').length;
const fallbackCount = batchFiles.filter(f => f.type === 'fallback').length;
console.log(`Loaded ${batchFiles.length} batch files (${dualCount} dual-version, ${fallbackCount} fallback)\n`);

// Load existing data
const publicV2Data = JSON.parse(fs.readFileSync('../source/templates/Public Swagger/public-v2.json', 'utf8'));
const publicV2Ops = JSON.parse(fs.readFileSync('../source/templates/public-v2-operations.json', 'utf8'));
const githubOps = JSON.parse(fs.readFileSync('../source/github/github-publicapi-search.json', 'utf8'));
const ignoreOps = fs.readFileSync('../source/config/documentation_ignore.txt', 'utf8')
  .split('\n')
  .map(line => line.trim())
  .filter(op => op && op.length > 0);
const whitelistOps = fs.readFileSync('../source/config/api_white_list.txt', 'utf8')
  .split('\n')
  .map(line => line.trim())
  .filter(op => op && op.length > 0);

// Load scope data from public swagger
const publicV2Scopes = fs.existsSync('../source/scopes/public-v2-scopes.json')
  ? JSON.parse(fs.readFileSync('../source/scopes/public-v2-scopes.json', 'utf8'))
  : [];

// Load controller scopes from GitHub (if available)
const githubControllerScopes = fs.existsSync('../source/github/github-controller-scopes.json')
  ? JSON.parse(fs.readFileSync('../source/github/github-controller-scopes.json', 'utf8'))
  : [];

// Load operation-to-controller mapping
const operationToControllerMap = fs.existsSync('../source/github/operation-to-controller-map-complete.json')
  ? JSON.parse(fs.readFileSync('../source/github/operation-to-controller-map-complete.json', 'utf8'))
  : [];

// Create case-insensitive lookup for whitelist
const whitelistLowerCase = whitelistOps.map(op => op.toLowerCase());
const isInWhitelist = (operationId) => {
  return whitelistLowerCase.includes(operationId.toLowerCase());
};

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

// Create operation ID to scopes map from public v2
const opIdToScopes = new Map();
publicV2Scopes.forEach(item => {
  if (item.operationId && item.scopes) {
    opIdToScopes.set(item.operationId, item.scopes);
  }
});

// Create controller to scope map from GitHub
const controllerToScope = new Map();
githubControllerScopes.forEach(item => {
  const key = `${item.repository}:${item.controller}`;
  controllerToScope.set(key, item.scope);
});

// Create operation ID to scope map from operation-to-controller mapping
const opIdToScopeFromController = new Map();
operationToControllerMap.forEach(item => {
  if (item.scope && item.operations) {
    item.operations.forEach(opId => {
      opIdToScopeFromController.set(opId, item.scope);
    });
  }
});

console.log(`Loaded ${publicV2Scopes.length} operations with scopes from public swagger`);
console.log(`Loaded ${githubControllerScopes.length} controllers with scopes from GitHub`);
console.log(`Loaded ${opIdToScopeFromController.size} operations with controller-level scopes\n`);

// Consolidate all swagger operations
const allSwaggerOps = new Map();
let totalServicesProcessed = 0;
let totalSuccessful = 0;
let totalOpsFound = 0;
let v1Services = [];
let v2Services = [];

batchFiles.forEach(batchFile => {
  batchFile.data.forEach(result => {
    totalServicesProcessed++;
    if (!result.error && result.operations.length > 0) {
      totalSuccessful++;
      totalOpsFound += result.operations.length;

      // Track which version was used
      if (result.version === 'v1') {
        v1Services.push(result.service);
      } else if (result.version === 'v2') {
        v2Services.push(result.service);
      }

      result.operations.forEach(op => {
        if (!allSwaggerOps.has(op.operationId)) {
          allSwaggerOps.set(op.operationId, {
            operationId: op.operationId,
            method: op.method,
            path: op.path,
            description: op.description,
            tags: op.tags,
            scopes: op.scopes,
            service: result.service,
            swaggerVersion: result.version || 'unknown',
            isInIgnoreList: op.isInIgnoreList,
            isInWhitelist: isInWhitelist(op.operationId)
          });
        }
      });
    }
  });
});

console.log(`Services processed: ${totalServicesProcessed}`);
console.log(`Successful: ${totalSuccessful}`);
console.log(`Total swagger operations found: ${totalOpsFound}`);
console.log(`Unique operations: ${allSwaggerOps.size}`);
console.log(`Services using v1: ${v1Services.length}`);
console.log(`Services using v2: ${v2Services.length}\n`);

console.log(`Services using v1 swagger:`);
v1Services.forEach(s => console.log(`  - ${s}`));
console.log('');

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
      scopes: swaggerOp.scopes,
      service: swaggerOp.service,
      swaggerVersion: swaggerOp.swaggerVersion,
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
  // Get scopes from public swagger scope map (preferred source)
  let scopes = opIdToScopes.get(op.operationId) || op.scopes || [];

  // If no scopes from public swagger, try controller-level scopes
  if (scopes.length === 0) {
    const controllerScope = opIdToScopeFromController.get(op.operationId);
    if (controllerScope) {
      scopes = [controllerScope];
    }
  }

  apiMap.set(op.operationId, {
    operationId: op.operationId,
    method: op.method,
    path: op.path,
    description: op.description,
    tags: opIdToTags.get(op.operationId) || [],
    scopes: scopes.length > 0 ? scopes : undefined,
    onDeveloperPortal: true,
    source: 'Public Swagger v2',
    isHidden: false,
    service: '',
    swaggerVersion: '',
    isInWhitelist: isInWhitelist(op.operationId)
  });
});

// 2. Add matched operations from documentation_ignore
matchedIgnoreOps.forEach(op => {
  if (apiMap.has(op.operationId)) {
    // Mark existing as hidden
    const existing = apiMap.get(op.operationId);
    existing.isHidden = true;
    existing.service = op.service;
    existing.swaggerVersion = op.swaggerVersion;

    // Try to add scopes from various sources
    if (!existing.scopes || existing.scopes.length === 0) {
      if (op.scopes && op.scopes.length > 0) {
        existing.scopes = op.scopes;
      } else {
        const controllerScope = opIdToScopeFromController.get(op.operationId);
        if (controllerScope) {
          existing.scopes = [controllerScope];
        }
      }
    }

    existing.source += ' + Documentation Ignore + Service Swagger';
  } else {
    // New operation not on portal - try to get scope from controller
    let scopes = op.scopes;
    if (!scopes || scopes.length === 0) {
      const controllerScope = opIdToScopeFromController.get(op.operationId);
      if (controllerScope) {
        scopes = [controllerScope];
      }
    }

    apiMap.set(op.operationId, {
      operationId: op.operationId,
      method: op.method,
      path: op.path,
      description: op.description,
      tags: op.tags,
      scopes: scopes,
      onDeveloperPortal: false,
      source: 'Service Swagger + Documentation Ignore',
      isHidden: true,
      service: op.service,
      swaggerVersion: op.swaggerVersion,
      isInWhitelist: isInWhitelist(op.operationId)
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
      service: 'Unknown',
      swaggerVersion: '',
      isInWhitelist: isInWhitelist(opId)
    });
  }
});

// 4. Add all remaining operations from service swagger files (like Brand APIs)
allSwaggerOps.forEach((swaggerOp, opId) => {
  if (!apiMap.has(opId)) {
    // Try to get scope from controller mapping
    let scopes = swaggerOp.scopes;
    if (!scopes || scopes.length === 0) {
      const controllerScope = opIdToScopeFromController.get(opId);
      if (controllerScope) {
        scopes = [controllerScope];
      }
    }

    apiMap.set(opId, {
      operationId: opId,
      method: swaggerOp.method,
      path: swaggerOp.path,
      description: swaggerOp.description,
      tags: swaggerOp.tags,
      scopes: scopes,
      onDeveloperPortal: false,
      source: `Service Swagger (${swaggerOp.service})`,
      isHidden: false,
      service: swaggerOp.service,
      swaggerVersion: swaggerOp.swaggerVersion,
      isInWhitelist: swaggerOp.isInWhitelist
    });
  }
});

// 5. Add from GitHub search
githubOps.forEach(op => {
  const opId = op.operationId;

  // Try to get controller-level scope from GitHub
  const controllerKey = `${op.repository}:${op.controller}`;
  const controllerScope = controllerToScope.get(controllerKey);

  if (!apiMap.has(opId)) {
    apiMap.set(opId, {
      operationId: opId,
      method: op.httpMethod.toUpperCase(),
      path: op.route,
      description: `From ${op.repository} ${op.controller}`,
      tags: [],
      scopes: controllerScope ? [controllerScope] : undefined,
      onDeveloperPortal: false,
      source: `GitHub ${op.repository}`,
      isHidden: false,
      repository: op.repository,
      controller: op.controller,
      service: op.repository,
      swaggerVersion: '',
      isInWhitelist: isInWhitelist(opId)
    });
  } else {
    const existing = apiMap.get(opId);
    existing.repository = op.repository;
    existing.controller = op.controller;

    // If existing operation doesn't have scopes, try to add from controller
    if (!existing.scopes && controllerScope) {
      existing.scopes = [controllerScope];
    }

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

// STEP 6: Propagate scopes by tag
console.log('\n=== PROPAGATING SCOPES BY TAG ===\n');

// Build tag-to-scopes mapping from operations that already have scopes
const tagToScopes = new Map();
allApis.forEach(api => {
  if (api.scopes && api.scopes.length > 0 && api.tags && api.tags.length > 0) {
    api.tags.forEach(tag => {
      if (!tagToScopes.has(tag)) {
        tagToScopes.set(tag, new Set());
      }
      api.scopes.forEach(scope => {
        tagToScopes.get(tag).add(scope);
      });
    });
  }
});

console.log(`Found ${tagToScopes.size} tags with scopes defined`);

// Propagate scopes to operations with matching tags
let scopesPropagated = 0;
allApis.forEach(api => {
  // Skip if already has scopes or no tags
  if ((api.scopes && api.scopes.length > 0) || !api.tags || api.tags.length === 0) {
    return;
  }

  // Collect scopes from all matching tags
  const inferredScopes = new Set();
  api.tags.forEach(tag => {
    if (tagToScopes.has(tag)) {
      tagToScopes.get(tag).forEach(scope => {
        inferredScopes.add(scope);
      });
    }
  });

  // Apply inferred scopes if any found
  if (inferredScopes.size > 0) {
    api.scopes = Array.from(inferredScopes).sort();
    scopesPropagated++;
  }
});

console.log(`Propagated scopes to ${scopesPropagated} operations via tag matching\n`);

// Save complete data
// Ensure consolidated directory exists
if (!fs.existsSync('../source/consolidated')) {
  fs.mkdirSync('../source/consolidated', { recursive: true });
}

fs.writeFileSync('../source/consolidated/all-public-apis-with-fallback.json', JSON.stringify(allApis, null, 2));

console.log('=== FINAL STATISTICS ===\n');
console.log(`Total unique public APIs: ${allApis.length}`);
console.log(`APIs on Developer Portal: ${allApis.filter(a => a.onDeveloperPortal).length}`);
console.log(`Hidden Public APIs: ${allApis.filter(a => !a.onDeveloperPortal).length}`);
console.log(`APIs in API Gateway Whitelist: ${allApis.filter(a => a.isInWhitelist).length}`);
console.log(`APIs with tags: ${allApis.filter(a => a.tags && a.tags.length > 0).length}`);
console.log(`APIs with service info: ${allApis.filter(a => a.service && a.service !== 'Unknown').length}`);
console.log(`APIs with scopes: ${allApis.filter(a => a.scopes && a.scopes.length > 0).length}`);
console.log(`\nWhitelist Operations: ${whitelistOps.length} total`);
console.log(`Whitelist matched in swagger: ${allApis.filter(a => a.isInWhitelist).length}`);
console.log(`Whitelist unmatched: ${whitelistOps.length - allApis.filter(a => a.isInWhitelist).length}`);

// Count unique scopes
const uniqueScopes = new Set();
allApis.forEach(api => {
  if (api.scopes && Array.isArray(api.scopes)) {
    api.scopes.forEach(scope => uniqueScopes.add(scope));
  }
});
console.log(`\nUnique scopes found: ${uniqueScopes.size}`);

console.log('\nFile saved: all-public-apis-with-fallback.json');
