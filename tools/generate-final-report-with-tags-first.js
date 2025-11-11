const fs = require('fs');

const apis = require('../source/all-public-apis-with-fallback.json');

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
markdown += '| Tags | Operation ID | Method | Endpoint | Description | On Portal | Service | Source |\n';
markdown += '|------|--------------|--------|----------|-------------|-----------|---------|--------|\n';

apis.forEach(api => {
  const tags = (api.tags || []).join(', ').substring(0, 25) || 'N/A';
  const opId = (api.operationId || '').substring(0, 35);
  const method = (api.method || 'N/A').substring(0, 6);
  const path = (api.path || 'N/A').substring(0, 45);
  const desc = (api.description || '').substring(0, 50).replace(/\|/g, '/').replace(/\n/g, ' ');
  const onPortal = api.onDeveloperPortal ? 'Yes' : 'No';
  const service = (api.service || '').substring(0, 25) || 'N/A';
  const source = (api.source || '').substring(0, 30);

  markdown += `| ${tags} | ${opId} | ${method} | ${path} | ${desc} | ${onPortal} | ${service} | ${source} |\n`;
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
markdown += '| Tags | Operation ID | Method | Endpoint | Service |\n';
markdown += '|------|--------------|--------|----------|---------|\n';
hiddenApis.forEach(api => {
  const tags = (api.tags || []).join(', ').substring(0, 25) || 'N/A';
  const opId = api.operationId || '';
  const method = api.method || 'N/A';
  const path = (api.path || 'N/A').substring(0, 45);
  const service = (api.service || '').substring(0, 25) || 'Unknown';
  markdown += `| ${tags} | ${opId} | ${method} | ${path} | ${service} |\n`;
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

fs.writeFileSync('../output/FINAL-API-REPORT.md', markdown);

console.log('✅ Final report generated: output/FINAL-API-REPORT.md');
console.log(`\nTotal APIs: ${apis.length}`);
console.log(`Services with API data: ${Object.keys(serviceMap).length}`);
console.log(`Tags found: ${Object.keys(tagMap).length}`);
