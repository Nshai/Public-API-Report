const https = require('https');
const fs = require('fs');

const services = require('./service-repos.json');
const ignoreOps = fs.readFileSync('./documentation_ignore.txt', 'utf8')
  .split('\n')
  .map(line => line.trim())
  .filter(op => op && op.length > 0);

console.log(`Total services to fetch: ${services.length}`);
console.log(`Operation IDs to match: ${ignoreOps.length}\n`);

// Convert service names to URL format
const serviceUrls = services.map(service => {
  let type, serviceName;

  if (service.startsWith('Microservice.')) {
    type = 'microservice';
    serviceName = service.replace('Microservice.', '').toLowerCase();
  } else if (service.startsWith('Monolith.')) {
    type = 'monolith';
    serviceName = service.replace('Monolith.', '').toLowerCase();
  }

  return {
    repo: service,
    type: type,
    serviceName: serviceName
  };
});

const batchSize = parseInt(process.argv[2]) || 10;
const startIndex = parseInt(process.argv[3]) || 0;
const batch = serviceUrls.slice(startIndex, startIndex + batchSize);

console.log(`Processing batch: ${startIndex + 1} to ${Math.min(startIndex + batchSize, serviceUrls.length)}`);
console.log(`Services in this batch:`);
batch.forEach(s => console.log(`  - ${s.repo}`));
console.log('');

const results = [];
let completed = 0;

function fetchSwagger(service, version) {
  const url = `https://${service.type}-${service.serviceName}.sys-ie-04.intelliflo.systems/docs/${version}/swagger`;

  return new Promise((resolve) => {
    https.get(url, {
      timeout: 15000,
      headers: { 'User-Agent': 'Mozilla/5.0' }
    }, (res) => {
      if (res.statusCode !== 200) {
        resolve({
          service: service.repo,
          url: url,
          version: version,
          error: `HTTP ${res.statusCode}`,
          operations: []
        });
        return;
      }

      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const swagger = JSON.parse(data);
          const ops = [];
          const paths = swagger.paths || {};

          Object.keys(paths).forEach(path => {
            Object.keys(paths[path]).forEach(method => {
              const operation = paths[path][method];
              if (operation.operationId) {
                ops.push({
                  operationId: operation.operationId,
                  method: method.toUpperCase(),
                  path: path,
                  description: (operation.summary || operation.description || '').substring(0, 200),
                  tags: operation.tags || [],
                  isInIgnoreList: ignoreOps.includes(operation.operationId)
                });
              }
            });
          });

          resolve({
            service: service.repo,
            url: url,
            version: version,
            operations: ops,
            swaggerVersion: swagger.info?.version || 'unknown'
          });
        } catch (e) {
          resolve({
            service: service.repo,
            url: url,
            version: version,
            error: `Parse error: ${e.message}`,
            operations: []
          });
        }
      });
    }).on('error', (e) => {
      resolve({
        service: service.repo,
        url: url,
        version: version,
        error: e.message,
        operations: []
      });
    }).on('timeout', () => {
      resolve({
        service: service.repo,
        url: url,
        version: version,
        error: 'Timeout',
        operations: []
      });
    });
  });
}

async function fetchSwaggerWithFallback(service) {
  // Try v2 first
  let result = await fetchSwagger(service, 'v2');

  // If v2 returns 404, try v1
  if (result.error && result.error.includes('404')) {
    console.log(`  ${service.repo}: v2 returned 404, trying v1...`);
    result = await fetchSwagger(service, 'v1');
  }

  return result;
}

async function processBatch() {
  for (const service of batch) {
    const result = await fetchSwaggerWithFallback(service);
    results.push(result);
    completed++;

    if (result.error) {
      console.log(`[${completed}/${batch.length}] ${service.repo} (${result.version}): ${result.error}`);
    } else {
      const ignoreOpsCount = result.operations.filter(op => op.isInIgnoreList).length;
      console.log(`[${completed}/${batch.length}] ${service.repo} (${result.version}): ${result.operations.length} operations (${ignoreOpsCount} from ignore list)`);
    }
  }

  const outputFile = `swagger-results-fallback-batch-${Math.floor(startIndex / batchSize)}.json`;
  fs.writeFileSync(outputFile, JSON.stringify(results, null, 2));
  console.log(`\n✅ Results saved to ${outputFile}`);

  const totalOps = results.reduce((sum, r) => sum + r.operations.length, 0);
  const totalIgnoreOps = results.reduce((sum, r) => sum + r.operations.filter(op => op.isInIgnoreList).length, 0);
  const successCount = results.filter(r => !r.error).length;

  console.log(`\nSummary:`);
  console.log(`  Services processed: ${results.length}`);
  console.log(`  Successful: ${successCount}`);
  console.log(`  Failed: ${results.length - successCount}`);
  console.log(`  Total operations found: ${totalOps}`);
  console.log(`  Operations from ignore list: ${totalIgnoreOps}`);
}

processBatch();
