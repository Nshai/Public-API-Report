const fs = require('fs');

const repos = require('./service-repos.json');
console.log('Total services in service-repos.json:', repos.length);

// Load all batch results
const batches = [];
for (let i = 0; i <= 10; i++) {
  try {
    const batchData = require(`./swagger-results-batch-${i}.json`);
    batches.push(...batchData);
  } catch (e) {
    // Batch file doesn't exist
  }
}

console.log('Total batch entries processed:', batches.length);

// Create service map
const serviceMap = new Map();
batches.forEach(b => serviceMap.set(b.service, b));

console.log('\n=== COVERAGE ANALYSIS ===\n');

// Check missing services
const missing = [];
repos.forEach(r => {
  if (!serviceMap.has(r)) {
    missing.push(r);
  }
});

console.log('Services successfully fetched:', batches.length);
console.log('Services NOT in batch results:', missing.length);

if (missing.length > 0) {
  console.log('\nMissing services:');
  missing.forEach((m, i) => console.log(`  ${i + 1}. ${m}`));
}

// Check successful vs failed
const successful = batches.filter(b => !b.error && b.operations && b.operations.length > 0);
const failed = batches.filter(b => b.error || !b.operations || b.operations.length === 0);

console.log('\n=== FETCH STATUS ===\n');
console.log('Successful fetches:', successful.length);
console.log('Failed fetches:', failed.length);

if (failed.length > 0) {
  console.log('\nFailed services:');
  failed.forEach((f, i) => {
    const error = f.error || 'No operations';
    console.log(`  ${i + 1}. ${f.service}: ${error}`);
  });
}

console.log('\n=== ISSUE ===');
if (missing.length > 0) {
  console.log(`WARNING: ${missing.length} services from service-repos.json were not processed at all!`);
  console.log('This means the batch processing did not cover all 117 services.');
} else {
  console.log('All services were processed (though some may have failed).');
}
