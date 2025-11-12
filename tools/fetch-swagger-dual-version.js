const https = require('https');
const fs = require('fs');

// Load service URLs with both v1 and v2 endpoints
const serviceUrls = require('../source/config/service-urls.json');
const ignoreOps = fs.readFileSync('../source/config/documentation_ignore.txt', 'utf8')
  .split('\n')
  .map(line => line.trim())
  .filter(op => op && op.length > 0);

console.log(`Total service endpoints to fetch: ${serviceUrls.length} (both v1 and v2)`);
console.log(`Operation IDs in ignore list: ${ignoreOps.length}\n`);

const batchSize = parseInt(process.argv[2]) || 20;
const startIndex = parseInt(process.argv[3]) || 0;
const batch = serviceUrls.slice(startIndex, startIndex + batchSize);

console.log(`Processing batch: ${startIndex + 1} to ${Math.min(startIndex + batchSize, serviceUrls.length)}`);
console.log(`Endpoints in this batch:`);
batch.forEach(s => console.log(`  - ${s.repo} (${s.version})`));
console.log('');

const results = [];
let completed = 0;

function fetchSwagger(serviceUrl) {
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
                // Extract scopes from security requirements
                let scopes = [];
                if (operation.security && Array.isArray(operation.security)) {
                  operation.security.forEach(secReq => {
                    Object.keys(secReq).forEach(key => {
                      if (Array.isArray(secReq[key])) {
                        scopes = scopes.concat(secReq[key]);
                      }
                    });
                  });
                }

                ops.push({
                  operationId: operation.operationId,
                  method: method.toUpperCase(),
                  path: path,
                  description: (operation.summary || operation.description || '').substring(0, 200),
                  tags: operation.tags || [],
                  scopes: scopes.length > 0 ? scopes : undefined,
                  isInIgnoreList: ignoreOps.includes(operation.operationId)
                });
              }
            });
          });

          resolve({
            service: serviceUrl.repo,
            url: url,
            version: serviceUrl.version,
            operations: ops,
            swaggerVersion: swagger.info?.version || 'unknown'
          });
        } catch (e) {
          resolve({
            service: serviceUrl.repo,
            url: url,
            version: serviceUrl.version,
            error: `Parse error: ${e.message}`,
            operations: []
          });
        }
      });
    }).on('error', (e) => {
      resolve({
        service: serviceUrl.repo,
        url: url,
        version: serviceUrl.version,
        error: e.message,
        operations: []
      });
    }).on('timeout', () => {
      resolve({
        service: serviceUrl.repo,
        url: url,
        version: serviceUrl.version,
        error: 'Timeout',
        operations: []
      });
    });
  });
}

async function processBatch() {
  for (const serviceUrl of batch) {
    const result = await fetchSwagger(serviceUrl);
    results.push(result);
    completed++;

    if (result.error) {
      console.log(`[${completed}/${batch.length}] ${serviceUrl.repo} (${serviceUrl.version}): ${result.error}`);
    } else {
      const ignoreOpsCount = result.operations.filter(op => op.isInIgnoreList).length;
      console.log(`[${completed}/${batch.length}] ${serviceUrl.repo} (${serviceUrl.version}): ${result.operations.length} operations (${ignoreOpsCount} from ignore list)`);
    }
  }

  // Ensure swagger-batch directory exists
  if (!fs.existsSync('../source/swagger-batch')) {
    fs.mkdirSync('../source/swagger-batch', { recursive: true });
  }

  const outputFile = `../source/swagger-batch/swagger-results-dual-version-batch-${Math.floor(startIndex / batchSize)}.json`;
  fs.writeFileSync(outputFile, JSON.stringify(results, null, 2));
  console.log(`\n✅ Results saved to ${outputFile}`);

  const totalOps = results.reduce((sum, r) => sum + r.operations.length, 0);
  const totalIgnoreOps = results.reduce((sum, r) => sum + r.operations.filter(op => op.isInIgnoreList).length, 0);
  const successCount = results.filter(r => !r.error).length;
  const v1Count = results.filter(r => r.version === 'v1').length;
  const v2Count = results.filter(r => r.version === 'v2').length;

  console.log(`\nSummary:`);
  console.log(`  Endpoints processed: ${results.length}`);
  console.log(`  V1 endpoints: ${v1Count}`);
  console.log(`  V2 endpoints: ${v2Count}`);
  console.log(`  Successful: ${successCount}`);
  console.log(`  Failed: ${results.length - successCount}`);
  console.log(`  Total operations found: ${totalOps}`);
  console.log(`  Operations from ignore list: ${totalIgnoreOps}`);
}

processBatch();
