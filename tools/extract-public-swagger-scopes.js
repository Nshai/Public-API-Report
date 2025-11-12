const fs = require('fs');

console.log('=== EXTRACTING SCOPES FROM PUBLIC SWAGGER V2 ===\n');

const publicV2Data = JSON.parse(fs.readFileSync('../source/templates/Public Swagger/public-v2.json', 'utf8'));

const operationsWithScopes = [];
const paths = publicV2Data.paths || {};

Object.keys(paths).forEach(path => {
  Object.keys(paths[path]).forEach(method => {
    const operation = paths[path][method];

    if (!operation.operationId) return;

    let scopes = [];

    // Check for scopes in x-intelliflo-api extension
    if (operation['x-intelliflo-api'] && operation['x-intelliflo-api'].scopes) {
      scopes = operation['x-intelliflo-api'].scopes;
    }

    // Check for scopes in security field (standard swagger way)
    if (operation.security && Array.isArray(operation.security)) {
      operation.security.forEach(secReq => {
        Object.keys(secReq).forEach(key => {
          if (Array.isArray(secReq[key])) {
            scopes = scopes.concat(secReq[key]);
          }
        });
      });
    }

    if (scopes.length > 0) {
      operationsWithScopes.push({
        operationId: operation.operationId,
        method: method.toUpperCase(),
        path: path,
        scopes: [...new Set(scopes)] // Remove duplicates
      });
    }
  });
});

// Ensure scopes directory exists
if (!fs.existsSync('../source/scopes')) {
  fs.mkdirSync('../source/scopes', { recursive: true });
}

// Save to file
fs.writeFileSync('../source/scopes/public-v2-scopes.json', JSON.stringify(operationsWithScopes, null, 2));

console.log(`Total operations in public swagger: ${Object.keys(paths).reduce((sum, p) => sum + Object.keys(paths[p]).length, 0)}`);
console.log(`Operations with scopes: ${operationsWithScopes.length}`);
console.log(`\nFile saved: source/scopes/public-v2-scopes.json`);

// Print sample
console.log('\n=== Sample operations with scopes ===\n');
operationsWithScopes.slice(0, 10).forEach(op => {
  console.log(`${op.operationId}: ${op.scopes.join(', ')}`);
});

// Count unique scopes
const allScopes = new Set();
operationsWithScopes.forEach(op => {
  op.scopes.forEach(scope => allScopes.add(scope));
});
console.log(`\n=== Unique scopes found: ${allScopes.size} ===`);
console.log(Array.from(allScopes).sort().join(', '));
