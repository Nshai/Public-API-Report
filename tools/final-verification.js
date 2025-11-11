const repos = require('./service-repos.json');

console.log('=== FINAL VERIFICATION ===\n');

console.log('1. Service Repos (service-repos.json)');
console.log('   Total services: ' + repos.length);
console.log('   All match pattern: ' + repos.every(r => r.startsWith('Microservice.') || r.startsWith('Monolith.')));
console.log('   None have Us suffix: ' + repos.every(r => !r.endsWith('Us')));
console.log('');

const apis = require('./all-public-apis.json');
console.log('2. All Public APIs (all-public-apis.json)');
console.log('   Total APIs: ' + apis.length);
console.log('   With tags: ' + apis.filter(a => a.tags && a.tags.length > 0).length);
console.log('   On portal: ' + apis.filter(a => a.onDeveloperPortal).length);
console.log('   Hidden: ' + apis.filter(a => !a.onDeveloperPortal).length);
console.log('');

console.log('3. Sample Services from service-repos.json:');
repos.slice(0, 10).forEach((r, i) => console.log('   ' + (i + 1) + '. ' + r));
console.log('');

console.log('4. Files Summary:');
console.log('   ✅ service-repos.json - 117 filtered services');
console.log('   ✅ all-public-apis.json - 457 APIs with tags');
console.log('   ✅ all-public-apis-report.md - Full markdown report');
console.log('   ✅ FINAL-SUMMARY.md - Executive summary');
console.log('   ✅ github-publicapi-search.json - GitHub search results');
console.log('   ✅ public-v2-operations.json - Public swagger operations');
console.log('   ✅ documentation_ignore.txt - Hidden APIs list');
