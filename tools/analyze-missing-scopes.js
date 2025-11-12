const fs = require('fs');

console.log('=== ANALYZING APIS WITHOUT SCOPES ===\n');

const data = JSON.parse(fs.readFileSync('../source/consolidated/all-public-apis-with-fallback.json', 'utf8'));

const withoutScopes = data.filter(a => !a.scopes || a.scopes.length === 0);
const withScopes = data.filter(a => a.scopes && a.scopes.length > 0);

console.log(`Total APIs: ${data.length}`);
console.log(`APIs with scopes: ${withScopes.length}`);
console.log(`APIs without scopes: ${withoutScopes.length}`);

console.log('\n=== Sample APIs without scopes ===\n');
withoutScopes.slice(0, 20).forEach(a => {
  console.log(`${a.operationId}`);
  console.log(`  Service: ${a.service || 'N/A'}`);
  console.log(`  Repository: ${a.repository || 'N/A'}`);
  console.log(`  Controller: ${a.controller || 'N/A'}`);
  console.log(`  Source: ${a.source}`);
  console.log('');
});

// Group by service
console.log('\n=== APIs without scopes by service ===\n');
const byService = {};
withoutScopes.forEach(a => {
  const service = a.service || 'Unknown';
  if (!byService[service]) byService[service] = 0;
  byService[service]++;
});

Object.keys(byService).sort((a, b) => byService[b] - byService[a]).forEach(service => {
  console.log(`${service}: ${byService[service]} APIs`);
});

// Check how many have repository/controller info
const withRepoInfo = withoutScopes.filter(a => a.repository && a.controller);
console.log(`\n=== APIs without scopes but with controller info ===`);
console.log(`Count: ${withRepoInfo.length}`);

if (withRepoInfo.length > 0) {
  console.log('\nSample:');
  withRepoInfo.slice(0, 5).forEach(a => {
    console.log(`  ${a.operationId} -> ${a.repository}/${a.controller}`);
  });
}
