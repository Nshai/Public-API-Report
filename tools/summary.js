const apis = require('./all-public-apis.json');

console.log('=== INTELLIFLO PUBLIC APIs - ANALYSIS COMPLETE ===\n');
console.log('Total Unique Public APIs:', apis.length);
console.log('APIs on Developer Portal:', apis.filter(a => a.onDeveloperPortal).length);
console.log('Hidden Public APIs (not on portal):', apis.filter(a => !a.onDeveloperPortal).length);

console.log('\nBreakdown by Source:');
const bySource = {
  'Public Swagger v2 Only': 0,
  'GitHub [PublicApi] Only': 0,
  'Documentation Ignore Only': 0,
  'Multiple Sources': 0
};

apis.forEach(a => {
  const sources = a.source.split('+').length;
  if (sources > 1) {
    bySource['Multiple Sources']++;
  } else if (a.source.includes('Public Swagger')) {
    bySource['Public Swagger v2 Only']++;
  } else if (a.source.includes('GitHub')) {
    bySource['GitHub [PublicApi] Only']++;
  } else if (a.source.includes('Documentation')) {
    bySource['Documentation Ignore Only']++;
  }
});

Object.keys(bySource).forEach(k => console.log('  ' + k + ':', bySource[k]));

console.log('\n=== TOP 10 APIs (Alphabetically) ===');
apis.slice(0, 10).forEach((a, i) => {
  const portal = a.onDeveloperPortal ? '✅' : '❌';
  console.log(`${i + 1}. ${portal} ${a.operationId}`);
});

console.log('\n=== Files Created ===');
console.log('1. all-public-apis.json - Complete structured data (457 APIs)');
console.log('2. all-public-apis-report.md - Full markdown report with tables');
console.log('3. public-v2-operations.json - Operations from Public Swagger v2');
console.log('4. github-publicapi-search.json - APIs found via [PublicApi] attribute');
console.log('5. documentation_ignore.txt - Hidden public operation IDs');
