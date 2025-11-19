const fs = require('fs');
const path = require('path');

const reportPath = path.join(__dirname, '../output/reports/PUBLIC-API-REPORT.md');
const content = fs.readFileSync(reportPath, 'utf8');

// Find the start and end of API Inventory
const inventoryStart = content.indexOf('## API Inventory');
const nextSection = content.indexOf('\n## ', inventoryStart + 1);

console.log('Inventory starts at:', inventoryStart);
console.log('Next section at:', nextSection);

if (inventoryStart !== -1 && nextSection !== -1) {
  const inventorySection = content.substring(inventoryStart, nextSection);
  const lines = inventorySection.split('\n');
  console.log('Total lines in section:', lines.length);

  const tableLines = lines.filter(l => l.trim().startsWith('|') && !l.includes('|---'));
  console.log('Table lines (excluding separator):', tableLines.length);

  // Show first few and last few table lines
  console.log('\nFirst 3 table lines:');
  tableLines.slice(0, 3).forEach(l => console.log(l.substring(0, 100)));

  console.log('\nLast 3 table lines:');
  tableLines.slice(-3).forEach(l => console.log(l.substring(0, 100)));
}
