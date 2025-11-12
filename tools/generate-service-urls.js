const fs = require('fs');

console.log('=== GENERATING SERVICE URLS ===\n');

// Load service repositories
const services = require('../source/config/service-repos.json');

console.log(`Total services: ${services.length}\n`);

// Generate service URLs for both v1 and v2
const serviceUrls = [];

for (const service of services) {
  let type, serviceName;

  if (service.startsWith('Microservice.')) {
    type = 'microservice';
    serviceName = service.replace('Microservice.', '').toLowerCase();
  } else if (service.startsWith('Monolith.')) {
    type = 'monolith';
    serviceName = service.replace('Monolith.', '').toLowerCase();
  } else {
    console.log(`Warning: Unknown service type for ${service}`);
    continue;
  }

  const baseUrl = `https://${type}-${serviceName}.sys-ie-04.intelliflo.systems`;

  // Add v2 entry
  serviceUrls.push({
    repo: service,
    type: type,
    serviceName: serviceName,
    version: 'v2',
    swaggerUrl: `${baseUrl}/docs/v2/swagger`,
    docsUrl: `${baseUrl}/docs/index/index.html`
  });

  // Add v1 entry
  serviceUrls.push({
    repo: service,
    type: type,
    serviceName: serviceName,
    version: 'v1',
    swaggerUrl: `${baseUrl}/docs/v1/swagger`,
    docsUrl: `${baseUrl}/docs/index/index.html`
  });
}

console.log(`Generated ${serviceUrls.length} service URL entries (${services.length} services x 2 versions)\n`);

// Save to file
const outputPath = '../source/config/service-urls.json';
fs.writeFileSync(outputPath, JSON.stringify(serviceUrls, null, 2));

console.log(`✓ Written: ${outputPath}`);
console.log(`\nService URL structure:`);
console.log(`- Total entries: ${serviceUrls.length}`);
console.log(`- V1 endpoints: ${serviceUrls.filter(s => s.version === 'v1').length}`);
console.log(`- V2 endpoints: ${serviceUrls.filter(s => s.version === 'v2').length}`);
