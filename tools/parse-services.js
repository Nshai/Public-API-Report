const fs = require('fs');

const serviceRepos = require('./service-repos.json');
const services = [];

serviceRepos.forEach(repo => {
  // Only include repos with format Microservice.* or Monolith.*
  if (!repo.startsWith('Microservice.') && !repo.startsWith('Monolith.')) {
    return;
  }

  // Skip services with 'Us' suffix
  if (repo.endsWith('Us')) {
    return;
  }

  const name = repo.toLowerCase();
  let type = '';
  let serviceName = '';

  if (name.startsWith('microservice.')) {
    type = 'microservice';
    serviceName = name.replace('microservice.', '').toLowerCase();
  } else if (name.startsWith('monolith.')) {
    type = 'monolith';
    serviceName = name.replace('monolith.', '').toLowerCase();
  }

  if (type && serviceName) {
    services.push({
      repo: repo,
      type: type,
      serviceName: serviceName,
      url: `https://${type}-${serviceName}.sys-ie-04.intelliflo.systems/docs/index/index.html`
    });
  }
});

console.log(JSON.stringify(services, null, 2));
