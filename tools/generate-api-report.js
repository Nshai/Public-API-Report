const fs = require('fs');

console.log('=== GENERATING API REPORT ===\n');

// Load filtered public APIs
const filteredApis = JSON.parse(fs.readFileSync('../source/consolidated/filtered-public-apis.json', 'utf8'));

console.log(`Total APIs to report: ${filteredApis.length}\n`);

// Sort by tags (first tag), then operation ID
filteredApis.sort((a, b) => {
  const tagA = (a.tags && a.tags.length > 0) ? a.tags[0] : '';
  const tagB = (b.tags && b.tags.length > 0) ? b.tags[0] : '';

  if (tagA !== tagB) {
    return tagA.localeCompare(tagB);
  }
  return a.operationId.localeCompare(b.operationId);
});

// Generate markdown report
let markdown = `# Public API Report

Generated: ${new Date().toISOString()}

## Summary

- **Total Public APIs**: ${filteredApis.length}
- **On Developer Portal**: ${filteredApis.filter(api => api.onPortal).length}
- **Not on Portal**: ${filteredApis.filter(api => !api.onPortal).length}
- **With OAuth Scopes**: ${filteredApis.filter(api => api.scopes && api.scopes.length > 0).length}

## API Inventory

| Tags | Operation ID | Method | Endpoint | Description | Scopes | On Portal | Service | Source |
|------|-------------|--------|----------|-------------|--------|-----------|---------|--------|
`;

filteredApis.forEach(api => {
  const tags = (api.tags && api.tags.length > 0) ? api.tags.join(', ') : '';
  const operationId = api.operationId || '';
  const method = api.method || '';
  const endpoint = api.path || '';
  const description = (api.description || '').replace(/\|/g, '\\|').replace(/\n/g, ' ').substring(0, 100);
  const scopes = (api.scopes && api.scopes.length > 0) ? api.scopes.join(', ') : '';
  const onPortal = api.onPortal ? 'Yes' : 'No';
  const service = api.service || '';
  const source = api.source || '';

  markdown += `| ${tags} | ${operationId} | ${method} | ${endpoint} | ${description} | ${scopes} | ${onPortal} | ${service} | ${source} |\n`;
});

// Group by Portal Status
markdown += `\n## APIs by Portal Status\n\n`;
markdown += `### On Developer Portal (${filteredApis.filter(api => api.onPortal).length})\n\n`;
markdown += `These APIs are documented on the developer portal.\n\n`;

const onPortalApis = filteredApis.filter(api => api.onPortal);
if (onPortalApis.length > 0) {
  markdown += `| Operation ID | Method | Endpoint | Service |\n`;
  markdown += `|-------------|--------|----------|--------|\n`;
  onPortalApis.forEach(api => {
    markdown += `| ${api.operationId} | ${api.method} | ${api.path} | ${api.service} |\n`;
  });
}

markdown += `\n### Not on Developer Portal (${filteredApis.filter(api => !api.onPortal).length})\n\n`;
markdown += `These APIs are available but not yet documented on the developer portal. Consider adding them.\n\n`;

const notOnPortalApis = filteredApis.filter(api => !api.onPortal);
if (notOnPortalApis.length > 0) {
  markdown += `| Operation ID | Method | Endpoint | Service |\n`;
  markdown += `|-------------|--------|----------|--------|\n`;
  notOnPortalApis.forEach(api => {
    markdown += `| ${api.operationId} | ${api.method} | ${api.path} | ${api.service} |\n`;
  });
}

// Group by Service
markdown += `\n## APIs by Service\n\n`;

const serviceGroups = new Map();
filteredApis.forEach(api => {
  const service = api.service || 'Unknown';
  if (!serviceGroups.has(service)) {
    serviceGroups.set(service, []);
  }
  serviceGroups.get(service).push(api);
});

const sortedServices = Array.from(serviceGroups.keys()).sort();
sortedServices.forEach(service => {
  const apis = serviceGroups.get(service);
  markdown += `### ${service} (${apis.length} operations)\n\n`;
  markdown += `| Operation ID | Method | Endpoint | Tags | Scopes |\n`;
  markdown += `|-------------|--------|----------|------|--------|\n`;
  apis.forEach(api => {
    const tags = (api.tags && api.tags.length > 0) ? api.tags.join(', ') : '';
    const scopes = (api.scopes && api.scopes.length > 0) ? api.scopes.join(', ') : '';
    markdown += `| ${api.operationId} | ${api.method} | ${api.path} | ${tags} | ${scopes} |\n`;
  });
  markdown += `\n`;
});

// OAuth Scopes Summary
markdown += `## OAuth Scopes Summary\n\n`;

const scopeSet = new Set();
filteredApis.forEach(api => {
  if (api.scopes && Array.isArray(api.scopes)) {
    api.scopes.forEach(scope => scopeSet.add(scope));
  }
});

const uniqueScopes = Array.from(scopeSet).sort();
markdown += `Total unique scopes: ${uniqueScopes.length}\n\n`;

if (uniqueScopes.length > 0) {
  markdown += `| Scope | Operations Using |\n`;
  markdown += `|-------|------------------|\n`;
  uniqueScopes.forEach(scope => {
    const count = filteredApis.filter(api =>
      api.scopes && api.scopes.includes(scope)
    ).length;
    markdown += `| ${scope} | ${count} |\n`;
  });
}

// Ensure reports directory exists
if (!fs.existsSync('../output/reports')) {
  fs.mkdirSync('../output/reports', { recursive: true });
}

// Save report
fs.writeFileSync('../output/reports/PUBLIC-API-REPORT.md', markdown);

console.log('=== REPORT GENERATION COMPLETE ===\n');
console.log(`File saved: output/reports/PUBLIC-API-REPORT.md`);
console.log(`Total APIs: ${filteredApis.length}`);
console.log(`On Portal: ${filteredApis.filter(api => api.onPortal).length}`);
console.log(`Not on Portal: ${filteredApis.filter(api => !api.onPortal).length}`);
console.log(`With Scopes: ${filteredApis.filter(api => api.scopes && api.scopes.length > 0).length}`);
console.log(`Unique Services: ${serviceGroups.size}`);
console.log(`Unique Scopes: ${uniqueScopes.length}`);
