const { execSync } = require('child_process');
const fs = require('fs');

console.log('=== EXTRACTING [PublicApi] OPERATIONS FROM GITHUB ===\n');

// Load service repos
const serviceRepos = JSON.parse(fs.readFileSync('../source/config/service-repos.json', 'utf8'));

console.log(`Services to scan: ${serviceRepos.length}\n`);
console.log('Note: Adding 3-second delay between searches to avoid rate limiting\n');

const publicApiOperations = new Set();
const serviceOperations = [];

// Helper function to sleep
function sleep(ms) {
  execSync(`node -e "setTimeout(() => {}, ${ms})"`);
}

// Search for [PublicApi] attribute in each repository
serviceRepos.forEach((repo, index) => {
  console.log(`[${index + 1}/${serviceRepos.length}] Searching ${repo}...`);

  // Add delay to avoid rate limiting (3 seconds between requests)
  if (index > 0) {
    sleep(3000);
  }

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
          `gh api -H "Accept: application/vnd.github.raw" repos/Intelliflo/${repo}/contents/${item.path}`,
          { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 }
        );

        // Check if [PublicApi] is at controller level
        const controllerHasPublicApi = /\[PublicApi\]\s*(?:\r?\n\s*)*(?:public\s+)?(?:class|partial\s+class)\s+\w+Controller/i.test(fileContent);

        // Extract operation IDs from [HttpGet], [HttpPost], etc. with Name parameter
        const operationRegex = /\[PublicApi\][\s\S]*?\[Http(?:Get|Post|Put|Delete|Patch|Head|Options)\s*\([^)]*Name\s*=\s*"([^"]+)"|(?:(?!\[PublicApi\])[\s\S])*?\[Http(?:Get|Post|Put|Delete|Patch|Head|Options)\s*\([^)]*Name\s*=\s*"([^"]+)"/g;

        // Build a more sophisticated regex to find all HTTP methods with Names
        // We need to check if each action has [PublicApi] OR if the controller has [PublicApi]
        const httpMethodRegex = /\[Http(?:Get|Post|Put|Delete|Patch|Head|Options)\s*\([^)]*Name\s*=\s*"([^"]+)"[^\]]*\]/g;
        let match;
        let opsFound = 0;

        // First, let's find all HTTP methods with operation IDs
        const allMatches = [];
        while ((match = httpMethodRegex.exec(fileContent)) !== null) {
          allMatches.push({
            operationId: match[1],
            index: match.index,
            fullMatch: match[0]
          });
        }

        // For each match, check if it has [PublicApi] or if controller has it
        allMatches.forEach(matchInfo => {
          // Get the text before this HTTP method (last 500 chars to check for [PublicApi])
          const startPos = Math.max(0, matchInfo.index - 500);
          const textBefore = fileContent.substring(startPos, matchInfo.index);

          // Check if [PublicApi] appears before this HTTP method attribute
          // It should be within the action's attributes (not separated by method signature)
          const actionHasPublicApi = /\[PublicApi\]\s*(?:\r?\n\s*(?:\[[^\]]+\]\s*)*)*$/i.test(textBefore);

          // Include operation if controller OR action has [PublicApi]
          if (controllerHasPublicApi || actionHasPublicApi) {
            const operationId = matchInfo.operationId;
            publicApiOperations.add(operationId);

            serviceOperations.push({
              operationId,
              repository: repo,
              file: item.path,
              scope: controllerHasPublicApi ? 'controller' : 'action'
            });

            opsFound++;
          }
        });

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
