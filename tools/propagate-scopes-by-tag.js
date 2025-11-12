const fs = require('fs');

console.log('=== PROPAGATING SCOPES BY TAG ===\n');

// Load the consolidated API data
const allApis = JSON.parse(fs.readFileSync('../source/consolidated/all-public-apis-with-fallback.json', 'utf8'));

// Step 1: Build a map of tags to scopes
console.log('Step 1: Analyzing existing scopes by tag...\n');

const tagToScopes = new Map();

allApis.forEach(api => {
  if (api.scopes && api.scopes.length > 0 && api.tags && api.tags.length > 0) {
    api.tags.forEach(tag => {
      if (!tagToScopes.has(tag)) {
        tagToScopes.set(tag, new Set());
      }
      api.scopes.forEach(scope => {
        tagToScopes.get(tag).add(scope);
      });
    });
  }
});

// Convert Sets to Arrays and sort tags by number of operations
const tagScopeMapping = Array.from(tagToScopes.entries())
  .map(([tag, scopesSet]) => ({
    tag,
    scopes: Array.from(scopesSet).sort(),
    apiCount: allApis.filter(a => a.tags && a.tags.includes(tag)).length,
    apisWithScopes: allApis.filter(a => a.tags && a.tags.includes(tag) && a.scopes && a.scopes.length > 0).length
  }))
  .sort((a, b) => b.apiCount - a.apiCount);

console.log(`Found ${tagScopeMapping.length} tags with scopes defined\n`);
console.log('Top 20 tags with scopes:');
tagScopeMapping.slice(0, 20).forEach(({ tag, scopes, apiCount, apisWithScopes }) => {
  const coverage = ((apisWithScopes / apiCount) * 100).toFixed(0);
  console.log(`  ${tag}: ${scopes.join(', ')} (${apisWithScopes}/${apiCount} = ${coverage}% coverage)`);
});

// Step 2: Propagate scopes to operations with the same tag
console.log('\n\nStep 2: Propagating scopes to operations with matching tags...\n');

let propagated = 0;
const propagationLog = [];

allApis.forEach(api => {
  // Skip if already has scopes
  if (api.scopes && api.scopes.length > 0) {
    return;
  }

  // Skip if no tags
  if (!api.tags || api.tags.length === 0) {
    return;
  }

  // Try to find scopes from tags
  const inferredScopes = new Set();

  api.tags.forEach(tag => {
    if (tagToScopes.has(tag)) {
      tagToScopes.get(tag).forEach(scope => {
        inferredScopes.add(scope);
      });
    }
  });

  if (inferredScopes.size > 0) {
    api.scopes = Array.from(inferredScopes).sort();
    propagated++;

    if (propagationLog.length < 10) {
      propagationLog.push({
        operationId: api.operationId,
        tags: api.tags,
        inferredScopes: api.scopes,
        service: api.service
      });
    }
  }
});

console.log(`Successfully propagated scopes to ${propagated} operations\n`);

console.log('Sample propagations:');
propagationLog.forEach(({ operationId, tags, inferredScopes, service }) => {
  console.log(`  ${operationId}`);
  console.log(`    Tags: ${tags.join(', ')}`);
  console.log(`    Inferred scopes: ${inferredScopes.join(', ')}`);
  console.log(`    Service: ${service}`);
  console.log('');
});

// Step 3: Save updated data
fs.writeFileSync('../source/consolidated/all-public-apis-with-fallback.json', JSON.stringify(allApis, null, 2));

// Step 4: Statistics
const withScopes = allApis.filter(a => a.scopes && a.scopes.length > 0);
const withoutScopes = allApis.filter(a => !a.scopes || a.scopes.length === 0);

console.log('=== FINAL STATISTICS ===\n');
console.log(`Total APIs: ${allApis.length}`);
console.log(`APIs with scopes: ${withScopes.length} (${((withScopes.length / allApis.length) * 100).toFixed(1)}%)`);
console.log(`APIs without scopes: ${withoutScopes.length} (${((withoutScopes.length / allApis.length) * 100).toFixed(1)}%)`);
console.log(`Scopes propagated via tags: ${propagated}`);

console.log('\nFile updated: source/all-public-apis-with-fallback.json');

// Save tag-to-scope mapping for documentation
const tagMappingDoc = {
  generatedAt: new Date().toISOString(),
  totalTags: tagScopeMapping.length,
  mappings: tagScopeMapping
};

fs.writeFileSync('../source/tag-to-scope-mapping.json', JSON.stringify(tagMappingDoc, null, 2));
console.log('Tag mapping saved: source/tag-to-scope-mapping.json');
