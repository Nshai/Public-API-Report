const fs = require('fs');

console.log('=== GENERATING CONSOLIDATED PUBLIC SWAGGER ===\n');

// Load all public APIs with their metadata
const allApis = JSON.parse(fs.readFileSync('../source/consolidated/all-public-apis-with-fallback.json', 'utf8'));

// Load the public v2 swagger as a template
const templateSwagger = JSON.parse(fs.readFileSync('../source/templates/Public Swagger/public-v2.json', 'utf8'));

// Load service swagger files to get detailed operation definitions
const serviceSwaggerFiles = [];
for (let i = 0; i <= 25; i++) {
  const filename = `../source/swagger-batch/swagger-results-fallback-batch-${i}.json`;
  if (fs.existsSync(filename)) {
    const data = JSON.parse(fs.readFileSync(filename, 'utf8'));
    serviceSwaggerFiles.push(...data);
  }
}

console.log(`Loaded ${allApis.length} public APIs`);
console.log(`Loaded ${serviceSwaggerFiles.length} service swagger results\n`);

// Create the consolidated swagger structure
const consolidatedSwagger = {
  openapi: '3.0.1',
  info: {
    title: 'Intelliflo Consolidated Public APIs',
    description: 'Consolidated OpenAPI specification for all Intelliflo Public APIs, generated from multiple service swagger definitions.',
    version: new Date().toISOString().split('T')[0],
    contact: {
      name: 'Intelliflo API Support',
      url: 'https://developer.intelliflo.com'
    }
  },
  servers: [
    {
      url: 'https://api.intelliflo.com',
      description: 'Production API Server'
    }
  ],
  paths: {},
  components: {
    securitySchemes: {
      oauth2: {
        type: 'oauth2',
        flows: {
          authorizationCode: {
            authorizationUrl: 'https://login.intelliflo.com/oauth2/authorize',
            tokenUrl: 'https://login.intelliflo.com/oauth2/token',
            scopes: {}
          }
        }
      }
    },
    schemas: {}
  },
  security: [
    {
      oauth2: []
    }
  ],
  tags: []
};

// Build a map of unique scopes from all APIs
const allScopes = new Set();
allApis.forEach(api => {
  if (api.scopes && Array.isArray(api.scopes)) {
    api.scopes.forEach(scope => allScopes.add(scope));
  }
});

// Add all scopes to the security scheme
Array.from(allScopes).sort().forEach(scope => {
  consolidatedSwagger.components.securitySchemes.oauth2.flows.authorizationCode.scopes[scope] = `Access to ${scope} resources`;
});

console.log(`Added ${allScopes.size} unique OAuth scopes\n`);

// Build a map of all unique tags
const allTags = new Set();
allApis.forEach(api => {
  if (api.tags && Array.isArray(api.tags)) {
    api.tags.forEach(tag => allTags.add(tag));
  }
});

// Add all tags to the swagger
Array.from(allTags).sort().forEach(tag => {
  consolidatedSwagger.tags.push({
    name: tag,
    description: `Operations related to ${tag}`
  });
});

console.log(`Added ${allTags.size} unique tags\n`);

// Build a map from service swagger data for detailed operation info
const serviceOperationMap = new Map();
serviceSwaggerFiles.forEach(serviceResult => {
  if (!serviceResult.operations || serviceResult.error) return;

  serviceResult.operations.forEach(op => {
    serviceOperationMap.set(op.operationId, {
      service: serviceResult.service,
      method: op.method,
      path: op.path,
      description: op.description,
      tags: op.tags || []
    });
  });
});

console.log(`Mapped ${serviceOperationMap.size} operations from service swaggers\n`);

// Also load operation details from template swagger
const templateOperationMap = new Map();
if (templateSwagger.paths) {
  Object.keys(templateSwagger.paths).forEach(path => {
    Object.keys(templateSwagger.paths[path]).forEach(method => {
      const operation = templateSwagger.paths[path][method];
      if (operation.operationId) {
        templateOperationMap.set(operation.operationId, {
          path,
          method,
          operation: JSON.parse(JSON.stringify(operation)) // Deep clone
        });
      }
    });
  });
}

console.log(`Loaded ${templateOperationMap.size} operations from template swagger\n`);

// Process each public API and add to consolidated swagger
let addedFromTemplate = 0;
let addedFromService = 0;
let generatedMinimal = 0;

allApis.forEach(api => {
  let pathInfo = null;
  let method = null;
  let operationDef = null;

  // Priority 1: Try to get from template swagger (most detailed)
  if (templateOperationMap.has(api.operationId)) {
    const templateData = templateOperationMap.get(api.operationId);
    pathInfo = templateData.path;
    method = templateData.method.toLowerCase();
    operationDef = templateData.operation;
    addedFromTemplate++;
  }
  // Priority 2: Try to get from service swagger
  else if (serviceOperationMap.has(api.operationId)) {
    const serviceData = serviceOperationMap.get(api.operationId);
    pathInfo = serviceData.path;
    method = serviceData.method.toLowerCase();

    operationDef = {
      operationId: api.operationId,
      summary: serviceData.description || api.description || `${api.operationId} operation`,
      description: api.description || serviceData.description || '',
      tags: api.tags || serviceData.tags || [],
      responses: {
        '200': {
          description: 'Successful response'
        },
        '400': {
          description: 'Bad request'
        },
        '401': {
          description: 'Unauthorized'
        },
        '403': {
          description: 'Forbidden'
        },
        '404': {
          description: 'Not found'
        },
        '500': {
          description: 'Internal server error'
        }
      }
    };
    addedFromService++;
  }
  // Priority 3: Generate minimal definition from API metadata
  else {
    pathInfo = api.path || `/unknown/${api.operationId}`;
    method = (api.method || 'get').toLowerCase();

    operationDef = {
      operationId: api.operationId,
      summary: api.description || `${api.operationId} operation`,
      description: api.description || `Operation from ${api.service}`,
      tags: api.tags || [],
      responses: {
        '200': {
          description: 'Successful response'
        }
      }
    };
    generatedMinimal++;
  }

  // Add security scopes if available
  if (api.scopes && api.scopes.length > 0) {
    operationDef.security = [
      {
        oauth2: api.scopes
      }
    ];
  }

  // Add x-intelliflo extensions
  operationDef['x-intelliflo-api'] = {
    service: api.service || 'Unknown',
    onDeveloperPortal: api.onDeveloperPortal || false,
    source: api.source || 'Unknown',
    scopes: api.scopes || []
  };

  // Ensure path exists in consolidated swagger
  if (!consolidatedSwagger.paths[pathInfo]) {
    consolidatedSwagger.paths[pathInfo] = {};
  }

  // Add the operation
  consolidatedSwagger.paths[pathInfo][method] = operationDef;
});

console.log('Operation sources:');
console.log(`  From template swagger: ${addedFromTemplate}`);
console.log(`  From service swagger: ${addedFromService}`);
console.log(`  Generated minimal: ${generatedMinimal}`);
console.log(`  Total operations: ${allApis.length}\n`);

// Sort paths alphabetically
const sortedPaths = {};
Object.keys(consolidatedSwagger.paths).sort().forEach(path => {
  sortedPaths[path] = consolidatedSwagger.paths[path];
});
consolidatedSwagger.paths = sortedPaths;

// Ensure swaggers directory exists
if (!fs.existsSync('../output/swaggers')) {
  fs.mkdirSync('../output/swaggers', { recursive: true });
}

// Save the consolidated swagger
const outputPath = '../output/swaggers/consolidated-public-swagger.json';
fs.writeFileSync(outputPath, JSON.stringify(consolidatedSwagger, null, 2));

console.log('=== GENERATION COMPLETE ===\n');
console.log(`✅ Consolidated swagger saved: ${outputPath}`);
console.log(`   Total paths: ${Object.keys(consolidatedSwagger.paths).length}`);
console.log(`   Total operations: ${allApis.length}`);
console.log(`   Total tags: ${consolidatedSwagger.tags.length}`);
console.log(`   Total scopes: ${allScopes.size}`);

// Also generate a YAML version for better readability
try {
  const yaml = convertToYaml(consolidatedSwagger);
  const yamlPath = '../output/swaggers/consolidated-public-swagger.yaml';
  fs.writeFileSync(yamlPath, yaml);
  console.log(`✅ YAML version saved: ${yamlPath}`);
} catch (e) {
  console.log('   (YAML generation skipped - install js-yaml for YAML output)');
}

// Simple YAML converter (basic implementation)
function convertToYaml(obj, indent = 0) {
  const spaces = '  '.repeat(indent);
  let yaml = '';

  if (Array.isArray(obj)) {
    obj.forEach(item => {
      if (typeof item === 'object') {
        yaml += `${spaces}-\n${convertToYaml(item, indent + 1)}`;
      } else {
        yaml += `${spaces}- ${item}\n`;
      }
    });
  } else if (typeof obj === 'object' && obj !== null) {
    Object.keys(obj).forEach(key => {
      const value = obj[key];
      if (typeof value === 'object' && value !== null) {
        if (Array.isArray(value) && value.length === 0) {
          yaml += `${spaces}${key}: []\n`;
        } else if (Object.keys(value).length === 0) {
          yaml += `${spaces}${key}: {}\n`;
        } else {
          yaml += `${spaces}${key}:\n${convertToYaml(value, indent + 1)}`;
        }
      } else {
        const yamlValue = typeof value === 'string' && (value.includes(':') || value.includes('\n'))
          ? `"${value.replace(/"/g, '\\"')}"`
          : value;
        yaml += `${spaces}${key}: ${yamlValue}\n`;
      }
    });
  }

  return yaml;
}

// Generate summary statistics
const stats = {
  generatedAt: new Date().toISOString(),
  totalOperations: allApis.length,
  operationsBySource: {
    templateSwagger: addedFromTemplate,
    serviceSwagger: addedFromService,
    generatedMinimal: generatedMinimal
  },
  coverage: {
    withScopes: allApis.filter(a => a.scopes && a.scopes.length > 0).length,
    onDeveloperPortal: allApis.filter(a => a.onDeveloperPortal).length,
    withTags: allApis.filter(a => a.tags && a.tags.length > 0).length
  },
  uniqueCounts: {
    paths: Object.keys(consolidatedSwagger.paths).length,
    tags: consolidatedSwagger.tags.length,
    scopes: allScopes.size
  }
};

fs.writeFileSync('../output/swaggers/consolidated-swagger-stats.json', JSON.stringify(stats, null, 2));
console.log(`📊 Statistics saved: output/swaggers/consolidated-swagger-stats.json\n`);
