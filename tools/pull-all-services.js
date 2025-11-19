const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('=== PULLING LATEST FOR ALL SERVICES ===\n');

// Load service repos
const serviceRepos = JSON.parse(fs.readFileSync('../source/config/service-repos.json', 'utf8'));
const servicesDir = 'C:/work/public-apis/services';

console.log(`Services to update: ${serviceRepos.length}`);
console.log(`Services directory: ${servicesDir}\n`);

let successCount = 0;
let failCount = 0;
let skippedCount = 0;
let upToDateCount = 0;

serviceRepos.forEach((repo, index) => {
  const repoPath = path.join(servicesDir, repo);

  console.log(`[${index + 1}/${serviceRepos.length}] ${repo}`);

  // Check if repo exists
  if (!fs.existsSync(repoPath)) {
    console.log(`  ⏭️  Repository not found, skipping...`);
    skippedCount++;
    return;
  }

  // Check if it's a git repository
  if (!fs.existsSync(path.join(repoPath, '.git'))) {
    console.log(`  ⏭️  Not a git repository, skipping...`);
    skippedCount++;
    return;
  }

  try {
    // Get current branch
    const currentBranch = execSync('git rev-parse --abbrev-ref HEAD', {
      cwd: repoPath,
      encoding: 'utf8'
    }).trim();

    // Get current commit hash before pull
    const beforeHash = execSync('git rev-parse --short HEAD', {
      cwd: repoPath,
      encoding: 'utf8'
    }).trim();

    // Pull latest changes
    const pullOutput = execSync('git pull', {
      cwd: repoPath,
      encoding: 'utf8',
      timeout: 60000 // 1 minute timeout
    }).trim();

    // Get commit hash after pull
    const afterHash = execSync('git rev-parse --short HEAD', {
      cwd: repoPath,
      encoding: 'utf8'
    }).trim();

    if (beforeHash === afterHash) {
      console.log(`  ✅ Already up to date (${currentBranch}: ${beforeHash})`);
      upToDateCount++;
    } else {
      console.log(`  ✅ Updated (${currentBranch}: ${beforeHash} → ${afterHash})`);
      successCount++;
    }
  } catch (err) {
    const errorMsg = err.message.split('\n')[0];
    console.log(`  ❌ Failed: ${errorMsg}`);
    failCount++;
  }
});

console.log('\n=== PULL COMPLETE ===\n');
console.log(`Total repositories: ${serviceRepos.length}`);
console.log(`Already up to date: ${upToDateCount}`);
console.log(`Successfully updated: ${successCount}`);
console.log(`Skipped (not found/not git): ${skippedCount}`);
console.log(`Failed: ${failCount}`);
