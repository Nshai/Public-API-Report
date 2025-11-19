const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('=== CLONING ALL SERVICES ===\n');

// Load service repos
const serviceRepos = JSON.parse(fs.readFileSync('../source/config/service-repos.json', 'utf8'));
const servicesDir = 'C:/work/public-apis/services';

console.log(`Services to clone: ${serviceRepos.length}`);
console.log(`Target directory: ${servicesDir}\n`);

// Ensure services directory exists
if (!fs.existsSync(servicesDir)) {
  fs.mkdirSync(servicesDir, { recursive: true });
}

let successCount = 0;
let failCount = 0;
let skippedCount = 0;

serviceRepos.forEach((repo, index) => {
  const repoPath = path.join(servicesDir, repo);

  console.log(`[${index + 1}/${serviceRepos.length}] ${repo}`);

  // Check if repo already exists
  if (fs.existsSync(repoPath)) {
    console.log(`  ⏭️  Already exists, skipping...`);
    skippedCount++;
    return;
  }

  try {
    // Clone the repository
    execSync(`gh repo clone Intelliflo/${repo} "${repoPath}"`, {
      cwd: servicesDir,
      stdio: 'pipe',
      timeout: 120000 // 2 minute timeout per repo
    });
    console.log(`  ✅ Cloned successfully`);
    successCount++;
  } catch (err) {
    console.log(`  ❌ Failed: ${err.message.split('\n')[0]}`);
    failCount++;
  }
});

console.log('\n=== CLONING COMPLETE ===\n');
console.log(`Total repositories: ${serviceRepos.length}`);
console.log(`Successfully cloned: ${successCount}`);
console.log(`Already existed (skipped): ${skippedCount}`);
console.log(`Failed: ${failCount}`);
