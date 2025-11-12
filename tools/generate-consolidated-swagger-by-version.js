const fs = require('fs');

console.log('=== GENERATING V1 AND V2 CONSOLIDATED SWAGGER FILES ===\n');

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

// Split APIs by swagger version
const v1Apis = allApis.filter(api => api.swaggerVersion === 'v1');
const v2Apis = allApis.filter(api => api.swaggerVersion === 'v2' || api.swaggerVersion === '' || !api.swaggerVersion);

console.log(`V1 APIs: ${v1Apis.length}`);
console.log(`V2 APIs: ${v2Apis.length}\n`);

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
      tags: op.tags || [],
      version: serviceResult.version
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

// Function to create a consolidated swagger for a given set of APIs
function createConsolidatedSwagger(apis, version) {
  const consolidatedSwagger = {
    openapi: '3.0.1',
    info: {
      title: `Intelliflo Consolidated Public APIs (${version.toUpperCase()})`,
      description: `Consolidated OpenAPI specification for all Intelliflo Public APIs using ${version.toUpperCase()} swagger endpoints, generated from multiple service swagger definitions.`,
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

  // Build a map of unique scopes from these APIs
  const allScopes = new Set();
  apis.forEach(api => {
    if (api.scopes && Array.isArray(api.scopes)) {
      api.scopes.forEach(scope => allScopes.add(scope));
    }
  });

  // Add all scopes to the security scheme
  Array.from(allScopes).sort().forEach(scope => {
    consolidatedSwagger.components.securitySchemes.oauth2.flows.authorizationCode.scopes[scope] = `Access to ${scope} resources`;
  });

  console.log(`[${version.toUpperCase()}] Added ${allScopes.size} unique OAuth scopes`);

  // Build a map of all unique tags
  const allTags = new Set();
  apis.forEach(api => {
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

  console.log(`[${version.toUpperCase()}] Added ${allTags.size} unique tags`);

  // Process each public API and add to consolidated swagger
  let addedFromTemplate = 0;
  let addedFromService = 0;
  let generatedMinimal = 0;

  apis.forEach(api => {
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
      scopes: api.scopes || [],
      swaggerVersion: api.swaggerVersion || 'unknown'
    };

    // Ensure path exists in consolidated swagger
    if (!consolidatedSwagger.paths[pathInfo]) {
      consolidatedSwagger.paths[pathInfo] = {};
    }

    // Add the operation
    consolidatedSwagger.paths[pathInfo][method] = operationDef;
  });

  console.log(`[${version.toUpperCase()}] Operation sources:`);
  console.log(`  From template swagger: ${addedFromTemplate}`);
  console.log(`  From service swagger: ${addedFromService}`);
  console.log(`  Generated minimal: ${generatedMinimal}`);
  console.log(`  Total operations: ${apis.length}\n`);

  // Sort paths alphabetically
  const sortedPaths = {};
  Object.keys(consolidatedSwagger.paths).sort().forEach(path => {
    sortedPaths[path] = consolidatedSwagger.paths[path];
  });
  consolidatedSwagger.paths = sortedPaths;

  return {
    swagger: consolidatedSwagger,
    stats: {
      addedFromTemplate,
      addedFromService,
      generatedMinimal,
      totalOperations: apis.length,
      totalPaths: Object.keys(consolidatedSwagger.paths).length,
      totalTags: consolidatedSwagger.tags.length,
      totalScopes: allScopes.size
    }
  };
}

// Ensure swaggers directory exists
if (!fs.existsSync('../output/swaggers')) {
  fs.mkdirSync('../output/swaggers', { recursive: true });
}

// Generate V1 consolidated swagger
console.log('=== GENERATING V1 CONSOLIDATED SWAGGER ===\n');
const v1Result = createConsolidatedSwagger(v1Apis, 'v1');

const v1OutputPath = '../output/swaggers/consolidated-public-swagger-v1.json';
fs.writeFileSync(v1OutputPath, JSON.stringify(v1Result.swagger, null, 2));

console.log('=== V1 GENERATION COMPLETE ===\n');
console.log(`✅ V1 Consolidated swagger saved: ${v1OutputPath}`);
console.log(`   Total paths: ${v1Result.stats.totalPaths}`);
console.log(`   Total operations: ${v1Result.stats.totalOperations}`);
console.log(`   Total tags: ${v1Result.stats.totalTags}`);
console.log(`   Total scopes: ${v1Result.stats.totalScopes}\n`);

// Generate V2 consolidated swagger
console.log('=== GENERATING V2 CONSOLIDATED SWAGGER ===\n');
const v2Result = createConsolidatedSwagger(v2Apis, 'v2');

const v2OutputPath = '../output/swaggers/consolidated-public-swagger-v2.json';
fs.writeFileSync(v2OutputPath, JSON.stringify(v2Result.swagger, null, 2));

console.log('=== V2 GENERATION COMPLETE ===\n');
console.log(`✅ V2 Consolidated swagger saved: ${v2OutputPath}`);
console.log(`   Total paths: ${v2Result.stats.totalPaths}`);
console.log(`   Total operations: ${v2Result.stats.totalOperations}`);
console.log(`   Total tags: ${v2Result.stats.totalTags}`);
console.log(`   Total scopes: ${v2Result.stats.totalScopes}\n`);

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

// Generate YAML versions
try {
  const v1Yaml = convertToYaml(v1Result.swagger);
  const v1YamlPath = '../output/swaggers/consolidated-public-swagger-v1.yaml';
  fs.writeFileSync(v1YamlPath, v1Yaml);
  console.log(`✅ V1 YAML version saved: ${v1YamlPath}`);
} catch (e) {
  console.log('   (V1 YAML generation skipped - error occurred)');
}

try {
  const v2Yaml = convertToYaml(v2Result.swagger);
  const v2YamlPath = '../output/swaggers/consolidated-public-swagger-v2.yaml';
  fs.writeFileSync(v2YamlPath, v2Yaml);
  console.log(`✅ V2 YAML version saved: ${v2YamlPath}`);
} catch (e) {
  console.log('   (V2 YAML generation skipped - error occurred)');
}

// Generate summary statistics
const v1Stats = {
  generatedAt: new Date().toISOString(),
  version: 'v1',
  totalOperations: v1Result.stats.totalOperations,
  operationsBySource: {
    templateSwagger: v1Result.stats.addedFromTemplate,
    serviceSwagger: v1Result.stats.addedFromService,
    generatedMinimal: v1Result.stats.generatedMinimal
  },
  coverage: {
    withScopes: v1Apis.filter(a => a.scopes && a.scopes.length > 0).length,
    onDeveloperPortal: v1Apis.filter(a => a.onDeveloperPortal).length,
    withTags: v1Apis.filter(a => a.tags && a.tags.length > 0).length
  },
  uniqueCounts: {
    paths: v1Result.stats.totalPaths,
    tags: v1Result.stats.totalTags,
    scopes: v1Result.stats.totalScopes
  }
};

const v2Stats = {
  generatedAt: new Date().toISOString(),
  version: 'v2',
  totalOperations: v2Result.stats.totalOperations,
  operationsBySource: {
    templateSwagger: v2Result.stats.addedFromTemplate,
    serviceSwagger: v2Result.stats.addedFromService,
    generatedMinimal: v2Result.stats.generatedMinimal
  },
  coverage: {
    withScopes: v2Apis.filter(a => a.scopes && a.scopes.length > 0).length,
    onDeveloperPortal: v2Apis.filter(a => a.onDeveloperPortal).length,
    withTags: v2Apis.filter(a => a.tags && a.tags.length > 0).length
  },
  uniqueCounts: {
    paths: v2Result.stats.totalPaths,
    tags: v2Result.stats.totalTags,
    scopes: v2Result.stats.totalScopes
  }
};

fs.writeFileSync('../output/swaggers/consolidated-swagger-v1-stats.json', JSON.stringify(v1Stats, null, 2));
fs.writeFileSync('../output/swaggers/consolidated-swagger-v2-stats.json', JSON.stringify(v2Stats, null, 2));
console.log(`📊 V1 Statistics saved: output/swaggers/consolidated-swagger-v1-stats.json`);
console.log(`📊 V2 Statistics saved: output/swaggers/consolidated-swagger-v2-stats.json\n`);

console.log('=== SUMMARY ===\n');
console.log('V1 Swagger:');
console.log(`  Operations: ${v1Stats.totalOperations}`);
console.log(`  Paths: ${v1Stats.uniqueCounts.paths}`);
console.log(`  Tags: ${v1Stats.uniqueCounts.tags}`);
console.log(`  Scopes: ${v1Stats.uniqueCounts.scopes}`);
console.log(`  With OAuth Scopes: ${v1Stats.coverage.withScopes}\n`);

console.log('V2 Swagger:');
console.log(`  Operations: ${v2Stats.totalOperations}`);
console.log(`  Paths: ${v2Stats.uniqueCounts.paths}`);
console.log(`  Tags: ${v2Stats.uniqueCounts.tags}`);
console.log(`  Scopes: ${v2Stats.uniqueCounts.scopes}`);
console.log(`  With OAuth Scopes: ${v2Stats.coverage.withScopes}\n`);
