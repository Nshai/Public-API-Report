const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('=== SAVING V1 API GATEWAY SWAGGER FILES ===\n');

const v1SwaggerFiles = [
  'accounts.json',
  'brand.json',
  'clientstorage.json',
  'crm.json',
  'factfind.json',
  'portfolio.json'
];

const outputDir = path.join(__dirname, '../source/config/v1-api-gateway-swaggers');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

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

    // Save to output directory
    const outputPath = path.join(outputDir, file);
    fs.writeFileSync(outputPath, content);

    console.log(`  Saved: ${file}`);
  } catch (error) {
    console.error(`  Error fetching ${file}: ${error.message}`);
  }
}

console.log(`\n✓ All v1 API Gateway swagger files saved to: source/config/v1-api-gateway-swaggers/`);
