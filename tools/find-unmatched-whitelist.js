const fs = require('fs');

const allApis = require('../source/all-public-apis-with-fallback.json');
const whitelist = fs.readFileSync('../source/api_white_list.txt', 'utf8')
  .split('\n')
  .map(l => l.trim())
  .filter(l => l.length > 0);

const matched = allApis.filter(a => a.isInWhitelist).map(a => a.operationId);
const matchedLower = matched.map(m => m.toLowerCase());
const unmatched = whitelist.filter(op => !matchedLower.includes(op.toLowerCase()));

console.log('Unmatched whitelist operations (case-insensitive):');
unmatched.forEach(op => console.log(`  - ${op}`));
console.log(`\nTotal unmatched: ${unmatched.length}`);
