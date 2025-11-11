const https = require('https');
const fs = require('fs');

const services = require('./service-urls.json');
const ignoreOps = fs.readFileSync('./documentation_ignore.txt', 'utf8')
  .split('\n')
  .map(line => line.trim().split('→')[1])
  .filter(op => op);

console.log(`Found ${ignoreOps.length} operation IDs to search for`);

const batchNumber = parseInt(process.argv[2]) || 0;
const batchSize = 10;
const startIndex = batchNumber * batchSize;
const batch = services.slice(startIndex, startIndex + batchSize);

console.log(`\nProcessing batch ${batchNumber + 1}: services ${startIndex + 1} to ${Math.min(startIndex + batchSize, services.length)}`);
batch.forEach(s => console.log(`  - ${s.repo}`));

const results = [];
let completed = 0;

function fetchSwagger(service) {
  return new Promise((resolve) => {
    // Try to fetch the swagger JSON instead of HTML page
    const jsonUrl = service.url.replace('/docs/index/index.html', '/swagger/v1/swagger.json');

    https.get(jsonUrl, {
      timeout: 10000,
      headers: { 'User-Agent': 'Mozilla/5.0' }
    }, (res) => {
      if (res.statusCode !== 200) {
        resolve({ service: service.repo, error: `HTTP ${res.statusCode}`, operations: [] });
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
                  isInIgnoreList: ignoreOps.includes(operation.operationId)
                });
              }
            });
          });

          resolve({ service: service.repo, url: jsonUrl, operations: ops });
        } catch (e) {
          resolve({ service: service.repo, error: `Parse error: ${e.message}`, operations: [] });
        }
      });
    }).on('error', (e) => {
      resolve({ service: service.repo, error: e.message, operations: [] });
    }).on('timeout', () => {
      resolve({ service: service.repo, error: 'Timeout', operations: [] });
    });
  });
}

async function processBatch() {
  for (const service of batch) {
    const result = await fetchSwagger(service);
    results.push(result);
    completed++;

    if (result.error) {
      console.log(`[${completed}/${batch.length}] ${service.repo}: ${result.error}`);
    } else {
      const ignoreOpsCount = result.operations.filter(op => op.isInIgnoreList).length;
      console.log(`[${completed}/${batch.length}] ${service.repo}: ${result.operations.length} operations (${ignoreOpsCount} in ignore list)`);
    }
  }

  const outputFile = `swagger-batch-${batchNumber}.json`;
  fs.writeFileSync(outputFile, JSON.stringify(results, null, 2));
  console.log(`\nResults saved to ${outputFile}`);

  const totalOps = results.reduce((sum, r) => sum + r.operations.length, 0);
  const totalIgnoreOps = results.reduce((sum, r) => sum + r.operations.filter(op => op.isInIgnoreList).length, 0);
  console.log(`Total operations found: ${totalOps}`);
  console.log(`Operations from ignore list: ${totalIgnoreOps}`);
}

processBatch();
