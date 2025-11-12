const fs = require('fs');

const all = JSON.parse(fs.readFileSync('../source/consolidated/all-public-apis-with-fallback.json', 'utf8'));
const pubScopes = JSON.parse(fs.readFileSync('../source/public-v2-scopes.json', 'utf8'));

const withScopes = new Set(pubScopes.map(p => p.operationId));
const withoutScopes = all.filter(a => a.onDeveloperPortal && !withScopes.has(a.operationId));

console.log('Operations on portal:', all.filter(a => a.onDeveloperPortal).length);
console.log('Operations with scopes from public swagger:', pubScopes.length);
console.log('Operations without scopes:', withoutScopes.length);

if (withoutScopes.length > 0) {
  console.log('\nOperations without scopes:');
  withoutScopes.forEach(o => console.log('  -', o.operationId));
}
