const fs = require('fs');
const path = require('path');

console.log('=== PARSING PUBLIC API REPORT ===\n');

// Read the markdown report
const reportPath = path.join(__dirname, '../output/reports/PUBLIC-API-REPORT.md');
const reportContent = fs.readFileSync(reportPath, 'utf8');

// Parse summary section
const summaryMatch = reportContent.match(/## Summary\s+([\s\S]*?)(?=\n##)/);
let summary = {};

if (summaryMatch) {
  const summaryText = summaryMatch[1];
  const totalMatch = summaryText.match(/Total Public APIs\*\*:\s*(\d+)/);
  const portalMatch = summaryText.match(/On Developer Portal\*\*:\s*(\d+)/);
  const notPortalMatch = summaryText.match(/Not on Portal\*\*:\s*(\d+)/);
  const scopesMatch = summaryText.match(/With OAuth Scopes\*\*:\s*(\d+)/);

  summary = {
    totalApis: totalMatch ? parseInt(totalMatch[1]) : 0,
    onPortal: portalMatch ? parseInt(portalMatch[1]) : 0,
    notOnPortal: notPortalMatch ? parseInt(notPortalMatch[1]) : 0,
    withScopes: scopesMatch ? parseInt(scopesMatch[1]) : 0
  };
}

console.log('Summary:', summary);

// Parse API Inventory table using substring for better accuracy
const inventoryStart = reportContent.indexOf('## API Inventory');
const nextSection = reportContent.indexOf('\n## ', inventoryStart + 1);
const apis = [];

if (inventoryStart !== -1 && nextSection !== -1) {
  const inventorySection = reportContent.substring(inventoryStart, nextSection);
  const lines = inventorySection.split('\n');

  let inTable = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Skip empty lines
    if (!line) continue;

    // Check if this is the header line
    if (line.includes('| Tags |') && line.includes('| Operation ID |')) {
      inTable = true;
      continue;
    }

    // Skip the separator line
    if (line.includes('|---')) {
      continue;
    }

    // If we're in the table and hit a non-table line, stop
    if (inTable && !line.startsWith('|')) {
      break;
    }

    // Parse table rows
    if (inTable && line.startsWith('|')) {
      // Don't filter empty strings - the first and last will be empty due to leading/trailing |
      const allColumns = line.split('|').map(col => col.trim());

      // Remove first and last empty columns
      const columns = allColumns.slice(1, allColumns.length - 1);

      if (columns.length >= 9) {
        apis.push({
          tags: columns[0],
          operationId: columns[1],
          method: columns[2],
          endpoint: columns[3],
          description: columns[4],
          scopes: columns[5],
          onPortal: columns[6],
          service: columns[7],
          source: columns[8]
        });
      }
    }
  }
}

console.log(`Parsed ${apis.length} APIs from inventory\n`);

// Parse other sections if they exist
const sections = [];

// Look for "APIs Not on Developer Portal" section
const notOnPortalMatch = reportContent.match(/## APIs Not on Developer Portal[\s\S]*?\n\| Operation ID[\s\S]*?(?=\n## |$)/);
if (notOnPortalMatch) {
  sections.push({ name: 'notOnPortal', found: true });
}

// Look for "APIs by Tag" section
const byTagMatch = reportContent.match(/## APIs by Tag[\s\S]*?(?=\n## |$)/);
if (byTagMatch) {
  sections.push({ name: 'byTag', found: true });
}

// Look for "APIs by Service" section
const byServiceMatch = reportContent.match(/## APIs by Service[\s\S]*?(?=\n## |$)/);
if (byServiceMatch) {
  sections.push({ name: 'byService', found: true });
}

console.log('Additional sections found:', sections.map(s => s.name).join(', '));

// Create output object
const output = {
  generatedAt: new Date().toISOString(),
  summary,
  apis,
  metadata: {
    totalParsed: apis.length,
    sections: sections.map(s => s.name)
  }
};

// Ensure website data directory exists
const websiteDataDir = path.join(__dirname, '../public-apis/website/public/data');
fs.mkdirSync(websiteDataDir, { recursive: true });

// Save to JSON
const outputPath = path.join(websiteDataDir, 'api-data.json');
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

console.log('\n=== PARSING COMPLETE ===');
console.log(`Output saved to: ${outputPath}`);
console.log(`Total APIs: ${apis.length}`);
console.log(`Summary:`, summary);
