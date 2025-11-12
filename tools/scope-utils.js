/**
 * Converts PascalCase to snake_case with support for nested scopes
 * Examples:
 *   ClientFinancialData -> client_financial_data
 *   ClientFinancialData.Plans -> client_financial_data.plans
 *   Scopes.ClientFinancialData -> client_financial_data (strips namespace prefix)
 */
function pascalToSnakeCase(str) {
  if (!str) return '';

  // Split by dots to handle nested scopes
  const parts = str.split('.');

  // Process each part
  const converted = parts.map(part => {
    // Skip common namespace prefixes like "Scopes"
    if (part === 'Scopes') return null;

    // Convert PascalCase to snake_case
    return part
      // Insert underscore before uppercase letters that follow lowercase letters or numbers
      .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
      // Insert underscore before uppercase letters that are followed by lowercase letters
      .replace(/([A-Z])([A-Z][a-z])/g, '$1_$2')
      // Convert to lowercase
      .toLowerCase();
  }).filter(p => p !== null); // Remove null values (stripped prefixes)

  // Join with dots for nested scopes
  return converted.join('.');
}

/**
 * Extract scope from C# attribute string
 * Examples:
 *   [Scope(Scopes.ClientFinancialData)] -> client_financial_data
 *   [Scope(Scopes.ClientFinancialData.Plans)] -> client_financial_data.plans
 *   [Scope("client_data")] -> client_data
 */
function extractScopeFromAttribute(attributeStr) {
  if (!attributeStr) return null;

  // Match [Scope(...)] attribute
  const match = attributeStr.match(/\[Scope\s*\(\s*([^)]+)\s*\)\]/i);
  if (!match) return null;

  let scopeValue = match[1].trim();

  // Remove quotes if present (for string literals)
  if (scopeValue.startsWith('"') && scopeValue.endsWith('"')) {
    return scopeValue.slice(1, -1);
  }

  // Convert PascalCase to snake_case
  return pascalToSnakeCase(scopeValue);
}

/**
 * Test the conversion function
 */
function testConversion() {
  const testCases = [
    { input: 'ClientFinancialData', expected: 'client_financial_data' },
    { input: 'ClientFinancialData.Plans', expected: 'client_financial_data.plans' },
    { input: 'Scopes.ClientFinancialData', expected: 'client_financial_data' },
    { input: 'Scopes.ClientFinancialData.Plans', expected: 'client_financial_data.plans' },
    { input: 'ATRData', expected: 'atr_data' },
    { input: 'ClientIdentificationData', expected: 'client_identification_data' }
  ];

  console.log('=== Testing PascalCase to snake_case conversion ===\n');

  let allPassed = true;
  testCases.forEach(({ input, expected }) => {
    const result = pascalToSnakeCase(input);
    const passed = result === expected;
    allPassed = allPassed && passed;

    console.log(`${passed ? '✓' : '✗'} ${input} -> ${result}${passed ? '' : ` (expected: ${expected})`}`);
  });

  console.log(`\n${allPassed ? 'All tests passed!' : 'Some tests failed!'}`);

  // Test attribute extraction
  console.log('\n=== Testing attribute extraction ===\n');

  const attrTests = [
    { input: '[Scope(Scopes.ClientFinancialData)]', expected: 'client_financial_data' },
    { input: '[Scope(Scopes.ClientFinancialData.Plans)]', expected: 'client_financial_data.plans' },
    { input: '[Scope("client_data")]', expected: 'client_data' }
  ];

  attrTests.forEach(({ input, expected }) => {
    const result = extractScopeFromAttribute(input);
    const passed = result === expected;

    console.log(`${passed ? '✓' : '✗'} ${input} -> ${result}${passed ? '' : ` (expected: ${expected})`}`);
  });
}

module.exports = {
  pascalToSnakeCase,
  extractScopeFromAttribute,
  testConversion
};

// Run tests if executed directly
if (require.main === module) {
  testConversion();
}
