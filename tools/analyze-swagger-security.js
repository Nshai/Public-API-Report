const fs = require('fs');

console.log('=== ANALYZING PUBLIC SWAGGER V2 FOR SCOPES ===\n');

const publicV2Data = JSON.parse(fs.readFileSync('../source/templates/Public Swagger/public-v2.json', 'utf8'));

// Check for security definitions at root level
console.log('Root level security definitions:');
if (publicV2Data.securityDefinitions) {
  console.log(JSON.stringify(publicV2Data.securityDefinitions, null, 2));
} else if (publicV2Data.components && publicV2Data.components.securitySchemes) {
  console.log(JSON.stringify(publicV2Data.components.securitySchemes, null, 2));
} else {
  console.log('  No security definitions found at root level\n');
}

// Check for operations with security
console.log('\n=== Checking for operations with security field ===\n');

const paths = publicV2Data.paths || {};
let opsWithSecurity = 0;
let totalOps = 0;
const securityExamples = [];

Object.keys(paths).forEach(path => {
  Object.keys(paths[path]).forEach(method => {
    const operation = paths[path][method];
    if (!operation.operationId) return;

    totalOps++;

    if (operation.security) {
      opsWithSecurity++;
      if (securityExamples.length < 5) {
        securityExamples.push({
          operationId: operation.operationId,
          path: path,
          method: method.toUpperCase(),
          security: operation.security
        });
      }
    }
  });
});

console.log(`Total operations: ${totalOps}`);
console.log(`Operations with security field: ${opsWithSecurity}`);

if (securityExamples.length > 0) {
  console.log('\n=== Sample operations with security ===\n');
  securityExamples.forEach(ex => {
    console.log(`${ex.operationId} (${ex.method} ${ex.path})`);
    console.log(JSON.stringify(ex.security, null, 2));
    console.log('');
  });
}

// Check if there's a global security field
if (publicV2Data.security) {
  console.log('\n=== Global security (applies to all operations) ===\n');
  console.log(JSON.stringify(publicV2Data.security, null, 2));
}
