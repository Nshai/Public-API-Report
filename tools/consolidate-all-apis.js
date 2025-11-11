const fs = require('fs');

// Load all data sources
const publicV2Ops = require('./public-v2-operations.json');
const githubOps = require('./github-publicapi-search.json');
const ignoreOps = fs.readFileSync('./documentation_ignore.txt', 'utf8')
  .split('\n')
  .map(line => line.trim())
  .filter(op => op && op.length > 0);

console.log('Data loaded:');
console.log(`  - Public Swagger v2: ${publicV2Ops.length} operations`);
console.log(`  - GitHub [PublicApi] search: ${githubOps.length} operations`);
console.log(`  - Documentation ignore list: ${ignoreOps.length} operations`);

// Create a comprehensive map of all APIs
const apiMap = new Map();

// Add all operations from public-v2.json (these are on the developer portal)
publicV2Ops.forEach(op => {
  apiMap.set(op.operationId, {
    operationId: op.operationId,
    method: op.method,
    path: op.path,
    description: op.description,
    onDeveloperPortal: true,
    source: 'Public Swagger v2',
    isHidden: false
  });
});

// Add operations from documentation_ignore (public but hidden from portal)
ignoreOps.forEach(opId => {
  if (!apiMap.has(opId)) {
    apiMap.set(opId, {
      operationId: opId,
      method: '',
      path: '',
      description: '',
      onDeveloperPortal: false,
      source: 'Documentation Ignore List',
      isHidden: true
    });
  } else {
    // This operation exists in both - mark it as hidden
    const existing = apiMap.get(opId);
    existing.isHidden = true;
    existing.source += ' + Documentation Ignore List';
  }
});

// Add operations from GitHub [PublicApi] search
githubOps.forEach(op => {
  const opId = op.operationId;
  if (!apiMap.has(opId)) {
    apiMap.set(opId, {
      operationId: opId,
      method: op.httpMethod.toUpperCase(),
      path: op.route,
      description: `From ${op.repository} ${op.controller}`,
      onDeveloperPortal: false,
      source: `GitHub ${op.repository}`,
      isHidden: false,
      repository: op.repository,
      controller: op.controller
    });
  } else {
    // Operation exists, enhance with GitHub info
    const existing = apiMap.get(opId);
    existing.repository = op.repository;
    existing.controller = op.controller;
    if (!existing.path && op.route) {
      existing.path = op.route;
    }
    if (!existing.method && op.httpMethod) {
      existing.method = op.httpMethod.toUpperCase();
    }
    existing.source += ` + GitHub ${op.repository}`;
  }
});

// Convert to array and sort
const allApis = Array.from(apiMap.values()).sort((a, b) =>
  a.operationId.localeCompare(b.operationId)
);

// Save complete data
fs.writeFileSync('all-public-apis.json', JSON.stringify(allApis, null, 2));

// Create markdown table
let markdown = '# Intelliflo Public APIs - Complete Analysis\n\n';
markdown += '## Summary\n\n';
markdown += `- **Total Unique Public APIs**: ${allApis.length}\n`;
markdown += `- **APIs on Developer Portal**: ${allApis.filter(a => a.onDeveloperPortal).length}\n`;
markdown += `- **Hidden Public APIs**: ${allApis.filter(a => a.isHidden && !a.onDeveloperPortal).length}\n`;
markdown += `- **APIs from GitHub Search**: ${allApis.filter(a => a.repository).length}\n`;
markdown += `- **APIs Only in Public Swagger**: ${allApis.filter(a => a.onDeveloperPortal && !a.isHidden && !a.repository).length}\n\n`;

markdown += '## Complete API List\n\n';
markdown += '| Operation ID | HTTP Method | Endpoint | Description | On Developer Portal | Source |\n';
markdown += '|--------------|-------------|----------|-------------|---------------------|--------|\n';

allApis.forEach(api => {
  const opId = api.operationId || '';
  const method = api.method || 'N/A';
  const path = (api.path || '').substring(0, 60) || 'N/A';
  const desc = (api.description || '').substring(0, 80).replace(/\|/g, '/');
  const onPortal = api.onDeveloperPortal ? '✅ Yes' : '❌ No';
  const source = api.source || '';

  markdown += `| ${opId} | ${method} | ${path} | ${desc} | ${onPortal} | ${source} |\n`;
});

markdown += '\n## Analysis by Category\n\n';

markdown += '### 1. APIs on Developer Portal (Public Swagger v2)\n';
const portalApis = allApis.filter(a => a.onDeveloperPortal);
markdown += `Total: ${portalApis.length} operations\n\n`;

markdown += '### 2. Hidden Public APIs (In documentation_ignore)\n';
const hiddenApis = allApis.filter(a => a.isHidden && !a.onDeveloperPortal);
markdown += `Total: ${hiddenApis.length} operations\n\n`;
hiddenApis.forEach(api => {
  markdown += `- ${api.operationId}\n`;
});

markdown += '\n### 3. APIs Found via GitHub [PublicApi] Attribute\n';
const githubFoundApis = allApis.filter(a => a.repository);
markdown += `Total: ${githubFoundApis.length} operations\n\n`;

const byRepo = {};
githubFoundApis.forEach(api => {
  if (!byRepo[api.repository]) {
    byRepo[api.repository] = [];
  }
  byRepo[api.repository].push(api);
});

Object.keys(byRepo).sort().forEach(repo => {
  markdown += `#### ${repo} (${byRepo[repo].length} operations)\n`;
  byRepo[repo].forEach(api => {
    markdown += `- ${api.operationId} - ${api.method} ${api.path}\n`;
  });
  markdown += '\n';
});

fs.writeFileSync('all-public-apis-report.md', markdown);

console.log('\n✅ Consolidation complete!');
console.log(`Total unique public APIs found: ${allApis.length}`);
console.log('\nFiles created:');
console.log('  - all-public-apis.json (structured data)');
console.log('  - all-public-apis-report.md (markdown report)');
