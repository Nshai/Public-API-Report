const fs = require('fs');

const allRepos = require('./service-repos.json');

// Filter to only include Microservice.* or Monolith.* (excluding Us suffix)
const filtered = allRepos.filter(repo => {
  // Must start with Microservice. or Monolith.
  if (!repo.startsWith('Microservice.') && !repo.startsWith('Monolith.')) {
    return false;
  }

  // Must not end with Us
  if (repo.endsWith('Us')) {
    return false;
  }

  return true;
});

console.log('Original services:', allRepos.length);
console.log('Filtered services:', filtered.length);
console.log('Removed:', allRepos.length - filtered.length);

fs.writeFileSync('service-repos.json', JSON.stringify(filtered, null, 2));
console.log('\nservice-repos.json has been updated!');
