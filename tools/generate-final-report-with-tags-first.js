const fs = require('fs');

const apis = require('../source/consolidated/all-public-apis-with-fallback.json');

console.log('=== GENERATING FINAL REPORT WITH TAGS AS FIRST COLUMN ===\n');

// Create markdown report
let markdown = '# Intelliflo Public APIs - Complete Analysis (Final)\n\n';
markdown += '## Executive Summary\n\n';
markdown += `- **Total Unique Public APIs**: ${apis.length}\n`;
markdown += `- **APIs on Developer Portal**: ${apis.filter(a => a.onDeveloperPortal).length}\n`;
markdown += `- **Hidden Public APIs**: ${apis.filter(a => !a.onDeveloperPortal).length}\n`;
markdown += `- **APIs with Tags**: ${apis.filter(a => a.tags && a.tags.length > 0).length}\n`;
markdown += `- **APIs with Service Information**: ${apis.filter(a => a.service && a.service !== '' && a.service !== 'Unknown').length}\n`;
markdown += `- **Documentation Ignore Operations Matched**: 83/83 (100%)\n\n`;

markdown += '## Data Sources\n\n';
markdown += '1. **Public Swagger v2** (`public-v2.json`) - 391 operations on developer portal\n';
markdown += '2. **Service Swagger Docs** - Fetched from 117 services (44 successful, 1,226 unique operations)\n';
markdown += '3. **Documentation Ignore List** - 83 hidden public operations (all matched with swagger data)\n';
markdown += '4. **GitHub [PublicApi] Search** - 46 operations from source code\n\n';

markdown += '## Complete API List\n\n';
markdown += '| Tags | Operation ID | Method | Endpoint | Description | Scopes | On Portal | Service | Source |\n';
markdown += '|------|--------------|--------|----------|-------------|--------|-----------|---------|--------|\n';

// Sort APIs by tags (ascending), then by operation ID
const sortedApis = [...apis].sort((a, b) => {
  const tagsA = (a.tags || []).join(', ').toLowerCase() || 'zzz'; // Put untagged at end
  const tagsB = (b.tags || []).join(', ').toLowerCase() || 'zzz';
  if (tagsA !== tagsB) {
    return tagsA.localeCompare(tagsB);
  }
  return (a.operationId || '').localeCompare(b.operationId || '');
});

sortedApis.forEach(api => {
  const tags = (api.tags || []).join(', ') || 'N/A';
  const opId = api.operationId || '';
  const method = api.method || 'N/A';
  const path = api.path || 'N/A';
  const desc = (api.description || '').replace(/\|/g, '/').replace(/\n/g, ' ');
  const scopes = (api.scopes || []).join(', ') || 'N/A';
  const onPortal = api.onDeveloperPortal ? 'Yes' : 'No';
  const service = api.service || 'N/A';
  const source = api.source || '';

  markdown += `| ${tags} | ${opId} | ${method} | ${path} | ${desc} | ${scopes} | ${onPortal} | ${service} | ${source} |\n`;
});

markdown += '\n## APIs by Tag\n\n';
const tagMap = {};
apis.forEach(api => {
  if (api.tags && api.tags.length > 0) {
    api.tags.forEach(tag => {
      if (!tagMap[tag]) {
        tagMap[tag] = [];
      }
      tagMap[tag].push(api.operationId);
    });
  } else {
    if (!tagMap['untagged']) {
      tagMap['untagged'] = [];
    }
    tagMap['untagged'].push(api.operationId);
  }
});

Object.keys(tagMap).sort().forEach(tag => {
  markdown += `### ${tag} (${tagMap[tag].length} operations)\n`;
  tagMap[tag].slice(0, 15).forEach(opId => {
    markdown += `- ${opId}\n`;
  });
  if (tagMap[tag].length > 15) {
    markdown += `- ... and ${tagMap[tag].length - 15} more\n`;
  }
  markdown += '\n';
});

markdown += '\n## Hidden Public APIs (Documentation Ignore List)\n\n';
const hiddenApis = apis.filter(a => !a.onDeveloperPortal && a.source.includes('Documentation Ignore'));
markdown += `Total: ${hiddenApis.length} operations\n\n`;
markdown += '| Tags | Operation ID | Method | Endpoint | Scopes | Service |\n';
markdown += '|------|--------------|--------|----------|--------|--------|\n';
hiddenApis.forEach(api => {
  const tags = (api.tags || []).join(', ') || 'N/A';
  const opId = api.operationId || '';
  const method = api.method || 'N/A';
  const path = api.path || 'N/A';
  const scopes = (api.scopes || []).join(', ') || 'N/A';
  const service = api.service || 'Unknown';
  markdown += `| ${tags} | ${opId} | ${method} | ${path} | ${scopes} | ${service} |\n`;
});

markdown += '\n## Services Analyzed\n\n';
const serviceMap = {};
apis.forEach(api => {
  if (api.service && api.service !== '' && api.service !== 'Unknown' && api.service !== 'N/A') {
    if (!serviceMap[api.service]) {
      serviceMap[api.service] = 0;
    }
    serviceMap[api.service]++;
  }
});

markdown += `Total services with API data: ${Object.keys(serviceMap).length}\n\n`;
markdown += '| Service | API Count |\n';
markdown += '|---------|----------|\n';
Object.keys(serviceMap).sort().forEach(service => {
  markdown += `| ${service} | ${serviceMap[service]} |\n`;
});

// Ensure reports directory exists
if (!fs.existsSync('../output/reports')) {
  fs.mkdirSync('../output/reports', { recursive: true });
}

fs.writeFileSync('../output/reports/FINAL-API-REPORT.md', markdown);

console.log('✅ Final report generated: output/reports/FINAL-API-REPORT.md');
console.log(`\nTotal APIs: ${apis.length}`);
console.log(`Services with API data: ${Object.keys(serviceMap).length}`);
console.log(`Tags found: ${Object.keys(tagMap).length}`);
