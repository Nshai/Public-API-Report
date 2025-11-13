const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('=== FETCHING V1 API GATEWAY WHITELIST ===\n');

const v1SwaggerFiles = [
  'accounts.json',
  'brand.json',
  'clientstorage.json',
  'crm.json',
  'factfind.json',
  'portfolio.json'
];

const allOperationIds = new Set();
const serviceOperations = {};

for (const file of v1SwaggerFiles) {
  try {
    console.log(`Fetching ${file}...`);

    // Fetch the file content from GitHub
    const result = execSync(
      `gh api repos/Intelliflo/aws-apigateway-definitions/contents/v1/swagger/${file}`,
      { encoding: 'utf8' }
    );

    // Parse JSON response and decode base64 content
    const response = JSON.parse(result);
    const content = Buffer.from(response.content, 'base64').toString('utf8');
    const swagger = JSON.parse(content);

    const serviceName = file.replace('.json', '');
    serviceOperations[serviceName] = [];

    // Extract operation IDs from paths
    if (swagger.paths) {
      Object.keys(swagger.paths).forEach(pathKey => {
        Object.keys(swagger.paths[pathKey]).forEach(method => {
          const operation = swagger.paths[pathKey][method];
          if (operation.operationId) {
            allOperationIds.add(operation.operationId);
            serviceOperations[serviceName].push(operation.operationId);
          }
        });
      });
    }

    console.log(`  Found ${serviceOperations[serviceName].length} operations`);
  } catch (error) {
    console.error(`  Error fetching ${file}: ${error.message}`);
  }
}

console.log(`\nTotal unique operation IDs: ${allOperationIds.size}\n`);

// Sort operation IDs alphabetically
const sortedOperationIds = Array.from(allOperationIds).sort();

// Write to api_white_list_v1.txt
const outputPath = path.join(__dirname, '../source/config/api_white_list_v1.txt');
fs.writeFileSync(outputPath, sortedOperationIds.join('\n') + '\n');

console.log(`✓ Written: ${outputPath}`);
console.log(`\nBreakdown by service:`);
Object.keys(serviceOperations).sort().forEach(service => {
  console.log(`  ${service}: ${serviceOperations[service].length} operations`);
});
