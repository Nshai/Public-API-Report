const https = require('https');
const fs = require('fs');
const yaml = require('js-yaml');

async function main() {
  console.log('=== FETCH AND CONSOLIDATE SWAGGERS ===\n');

  // Parse command line arguments
  const args = process.argv.slice(2);
  const skipFetch = args.includes('--skip-fetch');
  const batchSizeArg = args.findIndex(a => a === '--batch-size');
  const offsetArg = args.findIndex(a => a === '--offset');
  const reportArg = args.findIndex(a => a === '--report');
  const outputArg = args.findIndex(a => a === '--output');

  const batchSize = batchSizeArg !== -1 ? parseInt(args[batchSizeArg + 1]) : null;
  const offset = offsetArg !== -1 ? parseInt(args[offsetArg + 1]) : 0;
  const reportPath = reportArg !== -1 ? args[reportArg + 1] : '../output/reports/FINAL-API-REPORT.md';
  const outputDir = outputArg !== -1 ? args[outputArg + 1] : '../output/swaggers/consolidated';

  console.log(`Configuration:`);
  console.log(`  Skip Fetch: ${skipFetch}`);
  console.log(`  Batch Size: ${batchSize || 'All'}`);
  console.log(`  Offset: ${offset}`);
  console.log(`  Report Path: ${reportPath}`);
  console.log(`  Output Directory: ${outputDir}\n`);

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Step 1: Extract Operation IDs from FINAL-API-REPORT.md
  console.log('=== STEP 1: Extracting Operation IDs from Report ===\n');

  const reportContent = fs.readFileSync(reportPath, 'utf8');
  const operationIds = new Set();

  // Extract operation IDs from markdown table (format: | tag | OperationId | method | path | ...)
  const tableRegex = /^\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|/gm;
  let match;
  while ((match = tableRegex.exec(reportContent)) !== null) {
    const operationId = match[2].trim();
    // Skip header row and separator row
    if (operationId && operationId !== 'Operation ID' && !operationId.startsWith('---')) {
      operationIds.add(operationId);
    }
  }

console.log(`Found ${operationIds.size} unique operation IDs in report\n`);

// Step 2: Fetch or Load Swagger Documentation
let serviceSwaggerData = [];

if (skipFetch) {
  console.log('=== STEP 2: Loading Existing Swagger Files ===\n');

  for (let i = 0; i <= 50; i++) {
    const filename = `../source/swagger-batch/swagger-results-fallback-batch-${i}.json`;
    if (fs.existsSync(filename)) {
      const data = JSON.parse(fs.readFileSync(filename, 'utf8'));
      serviceSwaggerData.push(...data);
      console.log(`Loaded batch ${i}: ${data.length} service results`);
    }
  }

  console.log(`\nTotal services loaded: ${serviceSwaggerData.length}\n`);
} else {
    console.log('=== STEP 2: Fetching Swagger from Services ===\n');

    // Load service URLs with both v1 and v2 endpoints
    const serviceUrls = require('../source/config/service-urls.json');

    const servicesToProcess = batchSize
      ? serviceUrls.slice(offset, offset + batchSize)
      : serviceUrls.slice(offset);

    console.log(`Total service endpoints: ${serviceUrls.length}`);
    console.log(`Processing: ${servicesToProcess.length} endpoints (offset: ${offset})\n`);

    // Fetch swagger from each service endpoint
    async function fetchSwagger(serviceUrl) {
      const url = serviceUrl.swaggerUrl;

      return new Promise((resolve) => {
        https.get(url, {
          timeout: 15000,
          headers: { 'User-Agent': 'Mozilla/5.0' }
        }, (res) => {
          if (res.statusCode !== 200) {
            resolve({
              service: serviceUrl.repo,
              url: url,
              version: serviceUrl.version,
              error: `HTTP ${res.statusCode}`,
              swagger: null
            });
            return;
          }

          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => {
            try {
              const swagger = JSON.parse(data);
              resolve({
                service: serviceUrl.repo,
                url: url,
                version: serviceUrl.version,
                error: null,
                swagger: swagger
              });
            } catch (err) {
              resolve({
                service: serviceUrl.repo,
                url: url,
                version: serviceUrl.version,
                error: err.message,
                swagger: null
              });
            }
          });
        }).on('error', (err) => {
          resolve({
            service: serviceUrl.repo,
            url: url,
            version: serviceUrl.version,
            error: err.message,
            swagger: null
          });
        }).on('timeout', () => {
          resolve({
            service: serviceUrl.repo,
            url: url,
            version: serviceUrl.version,
            error: 'Timeout',
            swagger: null
          });
        });
      });
    }

    // Process all service endpoints (both v1 and v2)
    for (const serviceUrl of servicesToProcess) {
      console.log(`Fetching: ${serviceUrl.repo} (${serviceUrl.version})`);
      const result = await fetchSwagger(serviceUrl);

      if (result.swagger) {
        console.log(`  ✓ Success: ${Object.keys(result.swagger.paths || {}).length} paths`);
      } else {
        console.log(`  ✗ Failed: ${result.error}`);
      }

      serviceSwaggerData.push(result);
    }

    // Save fetched data
    const batchNum = Math.floor(offset / (batchSize || servicesToProcess.length));
    const outputFile = `../source/swagger-batch/swagger-results-dual-version-batch-${batchNum}.json`;

  if (!fs.existsSync('../source/swagger-batch')) {
    fs.mkdirSync('../source/swagger-batch', { recursive: true });
  }

  fs.writeFileSync(outputFile, JSON.stringify(serviceSwaggerData, null, 2));
  console.log(`\nSaved fetched data to: ${outputFile}\n`);
}

// Step 3: Consolidate and Filter Swagger
console.log('=== STEP 3: Consolidating and Filtering Swagger ===\n');

const consolidatedSwagger = {
  openapi: '3.0.1',
  info: {
    title: 'Intelliflo Consolidated Public APIs',
    description: 'Consolidated OpenAPI specification for all verified Intelliflo Public APIs, filtered to include only operations documented in the final API report.',
    version: new Date().toISOString().split('T')[0],
    contact: {
      name: 'Intelliflo API Support',
      url: 'https://developer.intelliflo.com'
    }
  },
  servers: [
    {
      url: 'https://api.intelliflo.com',
      description: 'Production API Server'
    }
  ],
  paths: {},
  components: {
    securitySchemes: {
      oauth2: {
        type: 'oauth2',
        flows: {
          authorizationCode: {
            authorizationUrl: 'https://login.intelliflo.com/oauth2/authorize',
            tokenUrl: 'https://login.intelliflo.com/oauth2/token',
            scopes: {
              openid: 'OpenID Connect authentication',
              myprofile: 'User profile access',
              client_data: 'Client information',
              client_financial_data: 'Client financial information',
              firm_data: 'Firm/organization data',
              documents: 'Document management',
              fund_data: 'Investment fund data',
              model_data: 'Portfolio model data',
              plan_data: 'Financial plan data',
              valuation_data: 'Asset valuation data',
              analytics: 'Analytics and reporting',
              business_events: 'Business event notifications',
              communications: 'Communication management',
              contacts: 'Contact management',
              factfind: 'Fact-finding data',
              goals: 'Client goals',
              illustrations: 'Product illustrations',
              lifecycle: 'Client lifecycle management',
              opportunities: 'Sales opportunities',
              pipeline: 'Sales pipeline',
              recommendations: 'Product recommendations',
              workflows: 'Workflow automation'
            }
          }
        }
      }
    },
    schemas: {}
  },
  tags: []
};

// Track statistics
const stats = {
  totalServicesProcessed: serviceSwaggerData.length,
  totalOperationsFound: 0,
  operationsInReport: 0,
  operationsExcluded: 0,
  uniquePaths: new Set(),
  uniqueTags: new Set(),
  servicesIncluded: new Set(),
  operationsByVersion: { v1: 0, v2: 0 }
};

  // Process each service's swagger
  for (const serviceData of serviceSwaggerData) {
    // Handle two formats: full swagger object or operations array
    let operations = [];

    if (serviceData.swagger && serviceData.swagger.paths) {
      // Full swagger format (from fresh fetch)
      const paths = serviceData.swagger.paths || {};
      Object.keys(paths).forEach(path => {
        Object.keys(paths[path]).forEach(method => {
          if (method === 'parameters') return;
          const operation = paths[path][method];
          if (operation.operationId) {
            operations.push({
              operationId: operation.operationId,
              method: method.toUpperCase(),
              path: path,
              tags: operation.tags || [],
              operation: operation
            });
          }
        });
      });
    } else if (serviceData.operations && Array.isArray(serviceData.operations)) {
      // Operations array format (from cached batch files)
      operations = serviceData.operations.map(op => ({
        ...op,
        operation: {
          operationId: op.operationId,
          summary: op.description || '',
          tags: op.tags || [],
          responses: {
            '200': { description: 'Successful response' },
            '401': { description: 'Unauthorized' },
            '403': { description: 'Forbidden' }
          }
        }
      }));
    } else {
      continue;
    }

    // Process operations
    for (const op of operations) {
      stats.totalOperationsFound++;

      // Check if operation is in report
      if (operationIds.has(op.operationId)) {
        stats.operationsInReport++;
        stats.uniquePaths.add(op.path);
        stats.servicesIncluded.add(serviceData.service);

        if (serviceData.version === 'v1') {
          stats.operationsByVersion.v1++;
        } else {
          stats.operationsByVersion.v2++;
        }

        // Add tags
        if (op.tags) {
          op.tags.forEach(tag => stats.uniqueTags.add(tag));
        }

        // Initialize path in consolidated swagger
        if (!consolidatedSwagger.paths[op.path]) {
          consolidatedSwagger.paths[op.path] = {};
        }

        // Add x-intelliflo-api extension
        const extendedOperation = {
          ...op.operation,
          'x-intelliflo-api': {
            service: serviceData.service,
            source: 'Service Swagger',
            swaggerVersion: serviceData.version,
            inFinalReport: true
          }
        };

        // Add operation to consolidated swagger
        consolidatedSwagger.paths[op.path][op.method.toLowerCase()] = extendedOperation;

        // Merge schemas if available
        if (serviceData.swagger && serviceData.swagger.components && serviceData.swagger.components.schemas) {
          Object.assign(consolidatedSwagger.components.schemas, serviceData.swagger.components.schemas);
        }
      } else {
        stats.operationsExcluded++;
      }
    }
  }

// Add tags to consolidated swagger
consolidatedSwagger.tags = Array.from(stats.uniqueTags).sort().map(tag => ({ name: tag }));

console.log(`Total operations found in service swagger: ${stats.totalOperationsFound}`);
console.log(`Operations included (in report): ${stats.operationsInReport}`);
console.log(`Operations excluded (not in report): ${stats.operationsExcluded}`);
console.log(`Unique paths: ${stats.uniquePaths.size}`);
console.log(`Unique tags: ${stats.uniqueTags.size}`);
console.log(`Services included: ${stats.servicesIncluded.size}`);
console.log(`Version distribution: v1=${stats.operationsByVersion.v1}, v2=${stats.operationsByVersion.v2}\n`);

// Step 4: Write Output Files
console.log('=== STEP 4: Writing Output Files ===\n');

// Write JSON
const jsonPath = `${outputDir}/consolidated-public-swagger.json`;
fs.writeFileSync(jsonPath, JSON.stringify(consolidatedSwagger, null, 2));
console.log(`✓ Written: ${jsonPath}`);

// Write YAML
try {
  const yamlContent = yaml.dump(consolidatedSwagger, { lineWidth: -1 });
  const yamlPath = `${outputDir}/consolidated-public-swagger.yaml`;
  fs.writeFileSync(yamlPath, yamlContent);
  console.log(`✓ Written: ${yamlPath}`);
} catch (err) {
  console.log(`✗ Failed to write YAML: ${err.message}`);
}

// Write Statistics
const statsOutput = {
  generatedAt: new Date().toISOString(),
  totalServicesProcessed: stats.totalServicesProcessed,
  totalOperationsFound: stats.totalOperationsFound,
  operationsInReport: stats.operationsInReport,
  operationsExcluded: stats.operationsExcluded,
  uniquePaths: stats.uniquePaths.size,
  uniqueTags: stats.uniqueTags.size,
  servicesIncluded: stats.servicesIncluded.size,
  operationsByVersion: stats.operationsByVersion,
  servicesIncludedList: Array.from(stats.servicesIncluded).sort()
};

const statsPath = `${outputDir}/consolidated-swagger-stats.json`;
fs.writeFileSync(statsPath, JSON.stringify(statsOutput, null, 2));
console.log(`✓ Written: ${statsPath}`);

console.log('\n=== CONSOLIDATION COMPLETE ===\n');
console.log(`Generated consolidated swagger with ${stats.operationsInReport} operations`);
console.log(`Output directory: ${outputDir}\n`);
}

// Run main function
main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
