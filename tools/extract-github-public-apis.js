const { execSync } = require('child_process');
const fs = require('fs');

console.log('=== EXTRACTING [PublicApi] OPERATIONS FROM GITHUB ===\n');

// Load service repos
const serviceRepos = JSON.parse(fs.readFileSync('../source/config/service-repos.json', 'utf8'));

console.log(`Services to scan: ${serviceRepos.length}\n`);

const publicApiOperations = new Set();
const serviceOperations = [];

// Search for [PublicApi] attribute in each repository
serviceRepos.forEach((repo, index) => {
  console.log(`[${index + 1}/${serviceRepos.length}] Searching ${repo}...`);

  try {
    // Use gh search code command to find files with [PublicApi]
    const searchCmd = `gh search code "[PublicApi]" --repo Intelliflo/${repo} --json path,repository --limit 100`;
    const result = execSync(searchCmd, { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });

    const searchResults = JSON.parse(result);

    if (!searchResults || searchResults.length === 0) {
      console.log(`  No [PublicApi] found`);
      return;
    }

    console.log(`  Found ${searchResults.length} files with [PublicApi]`);

    // For each file, download and parse for operation IDs
    searchResults.forEach(item => {
      try {
        const fileContent = execSync(
          `gh api -H "Accept: application/vnd.github.raw" /repos/Intelliflo/${repo}/contents/${item.path}`,
          { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 }
        );

        // Extract operation IDs from [HttpGet], [HttpPost], etc. with Name parameter
        const operationRegex = /\[Http(?:Get|Post|Put|Delete|Patch|Head|Options)\s*\([^)]*Name\s*=\s*"([^"]+)"/g;
        let match;
        let opsFound = 0;

        while ((match = operationRegex.exec(fileContent)) !== null) {
          const operationId = match[1];
          publicApiOperations.add(operationId);

          serviceOperations.push({
            operationId,
            repository: repo,
            file: item.path
          });

          opsFound++;
        }

        if (opsFound > 0) {
          console.log(`    ${item.path}: ${opsFound} operations`);
        }
      } catch (err) {
        console.log(`    Failed to read ${item.path}: ${err.message}`);
      }
    });

  } catch (err) {
    console.log(`  Error: ${err.message}`);
  }
});

// Ensure github directory exists
if (!fs.existsSync('../source/github')) {
  fs.mkdirSync('../source/github', { recursive: true });
}

// Save results
const operationsArray = Array.from(publicApiOperations).sort();
fs.writeFileSync(
  '../source/github/github-publicapi-operations.json',
  JSON.stringify(operationsArray, null, 2)
);

fs.writeFileSync(
  '../source/github/github-publicapi-operations-detailed.json',
  JSON.stringify(serviceOperations, null, 2)
);

console.log('\n=== EXTRACTION COMPLETE ===\n');
console.log(`Total repositories scanned: ${serviceRepos.length}`);
console.log(`Total unique [PublicApi] operations found: ${publicApiOperations.size}`);
console.log(`\nFiles saved:`);
console.log(`  - source/github/github-publicapi-operations.json`);
console.log(`  - source/github/github-publicapi-operations-detailed.json`);
