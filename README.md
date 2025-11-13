# Intelliflo Public API Report Generator

Comprehensive tool for generating reports of all Intelliflo Public APIs by consolidating data from multiple sources.

> **Recent Update**: V1 API Gateway whitelist support added! The workflow now filters v1 operations using a dedicated whitelist (264 operation IDs) from API Gateway definitions. See [WORKFLOW-UPDATES.md](WORKFLOW-UPDATES.md) for details.

## Project Structure

```
Public-APIs/
├── tools/              # JavaScript processing scripts
├── source/             # Source data (organized by category)
│   ├── templates/      # Template swagger files
│   │   ├── Public Swagger/
│   │   │   └── public-v2.json
│   │   └── public-v2-operations.json
│   ├── scopes/         # OAuth scope extractions
│   │   ├── public-v2-scopes.json
│   │   └── tag-to-scope-mapping.json
│   ├── swagger-batch/  # Fetched service swagger files
│   │   └── swagger-results-fallback-batch-*.json
│   ├── github/         # GitHub source code extractions
│   │   ├── github-publicapi-search.json
│   │   ├── github-controller-scopes.json
│   │   └── operation-to-controller-map-complete.json
│   ├── config/         # Configuration files
│   │   ├── service-repos.json
│   │   ├── service-urls.json
│   │   ├── api_white_list.txt
│   │   └── documentation_ignore.txt
│   └── consolidated/   # Final consolidated data
│       └── all-public-apis-with-fallback.json
└── output/
    ├── reports/        # Generated markdown reports
    │   └── FINAL-API-REPORT.md
    └── swaggers/       # Generated OpenAPI swagger files
        ├── consolidated-public-swagger.json (all)
        ├── consolidated-public-swagger-v1.json
        └── consolidated-public-swagger-v2.json
```

### Folders

**tools/** - All JavaScript processing scripts
- `generate-service-urls.js` - Generates service URLs from service-repos.json
- `fetch-swagger-dual-version.js` - Fetches swagger docs from both v1 and v2 endpoints
- `fetch-v1-api-gateway-whitelist.js` - **[NEW]** Fetches v1 whitelist from API Gateway definitions on GitHub
- `save-v1-api-gateway-swaggers.js` - **[NEW]** Saves v1 API Gateway swagger files
- `consolidate-and-filter.js` - Main consolidation script with version-specific whitelist filtering
- `generate-consolidated-public-swagger.js` - Generates OpenAPI 3.0 swagger for all public endpoints (combined)
- `generate-consolidated-swagger-by-version.js` - Generates separate OpenAPI 3.0 swaggers for v1 and v2 endpoints
- `generate-api-report.js` - Report generator with all API details
- Other utility scripts for data processing

**source/** - Source data organized by category

**source/templates/** - Template swagger files
- `Public Swagger/public-v2.json` - Public swagger v2 from developer portal (391 operations)
- `public-v2-operations.json` - Extracted operations from public v2

**source/scopes/** - OAuth scope extractions
- `public-v2-scopes.json` - Extracted scopes from Public Swagger v2 (390 operations)
- `tag-to-scope-mapping.json` - Tag-based scope inference map (67 tags)

**source/swagger-batch/** - Fetched service swagger files
- `swagger-results-fallback-batch-*.json` - Swagger fetch results (1,226 unique operations from 50 services)

**source/github/** - GitHub source code extractions
- `github-publicapi-search.json` - Operations with [PublicApi] attribute (46 operations)
- `github-controller-scopes.json` - Controller-level [Scope] attributes
- `operation-to-controller-map-complete.json` - Operation ID to controller scope mapping (28 operations)

**source/config/** - Configuration and reference files
- `service-repos.json` - List of service repositories to fetch (61 services)
- `service-urls.json` - Generated service URLs (122 endpoints)
- `api_white_list.txt` - API Gateway v2 whitelist (401 operations)
- `api_white_list_v1.txt` - API Gateway v1 whitelist (264 operations) **[NEW]**
- `v1-api-gateway-swaggers/` - Original v1 API Gateway swagger files (6 services) **[NEW]**
- `documentation_ignore.txt` - Hidden public APIs list (83 operations)

**source/consolidated/** - Final consolidated data
- `all-public-apis-with-fallback.json` - Complete dataset (1,565 APIs with scopes and metadata)

**output/reports/** - Generated markdown reports
- `FINAL-API-REPORT.md` - Complete API analysis report (sorted by tags, includes scopes)
- `WHITELIST-ANALYSIS.md` - Whitelist validation analysis (optional)

**output/swaggers/** - Generated OpenAPI swagger files
- `consolidated-public-swagger.json` - OpenAPI 3.0 swagger with all 540 public endpoints (combined)
- `consolidated-public-swagger.yaml` - YAML version of consolidated swagger (combined)
- `consolidated-swagger-stats.json` - Statistics about the consolidated swagger (combined)
- `consolidated-public-swagger-v1.json` - OpenAPI 3.0 swagger for v1 endpoints only (153 operations)
- `consolidated-public-swagger-v1.yaml` - YAML version of v1 swagger
- `consolidated-swagger-v1-stats.json` - Statistics for v1 swagger
- `consolidated-public-swagger-v2.json` - OpenAPI 3.0 swagger for v2 endpoints only (387 operations)
- `consolidated-public-swagger-v2.yaml` - YAML version of v2 swagger
- `consolidated-swagger-v2-stats.json` - Statistics for v2 swagger

## Quick Start

### Full Report Generation

```bash
cd C:\work\Public-APIs

# Step 1: Extract scopes from Public Swagger v2
cd tools
node extract-public-swagger-scopes.js

# Step 2: Fetch swagger docs (from tools directory)
node fetch-swagger-with-fallback.js 10 0

# Step 3: (Optional) Fetch controller scopes and operation mappings from GitHub
node extract-all-controller-scopes-and-operations.js

# Step 4: Consolidate data (includes automatic tag-based scope propagation)
node consolidate-fallback-results.js

# Step 5: Generate reports and consolidated swagger
node generate-final-report-with-tags-first.js
node generate-consolidated-public-swagger.js
node generate-consolidated-swagger-by-version.js
node find-unmatched-whitelist.js
```

### Quick Update (Using Existing Data)

```bash
cd C:\work\Public-APIs\tools

# Re-consolidate and regenerate
node consolidate-fallback-results.js
node generate-final-report-with-tags-first.js
```

## OAuth Scope Extraction

The system extracts OAuth scopes from two sources:

### 1. Public Swagger v2 (x-intelliflo-api extension)

```bash
node tools/extract-public-swagger-scopes.js
```

Extracts scopes from the `x-intelliflo-api.scopes` field in Public Swagger v2. Produces:
- `source/public-v2-scopes.json` - 390 operations with their OAuth scopes

### 2. GitHub Controller Attributes (Optional)

```bash
node tools/extract-github-controller-scopes.js
```

Fetches C# controller files from GitHub and extracts `[Scope]` attributes at the controller level. Features:
- Converts PascalCase to snake_case (e.g., `ClientFinancialData` → `client_financial_data`)
- Supports nested scopes (e.g., `ClientFinancialData.Plans` → `client_financial_data.plans`)
- Strips namespace prefixes (e.g., `Scopes.ClientData` → `client_data`)
- Produces: `source/github-controller-scopes.json`

**Note**: Controller-level scopes apply to all operations within that controller.

### Scope Consolidation Strategy

When merging scopes from multiple sources, the following hierarchy is used:

1. **Public Swagger scopes** (highest priority - already in correct snake_case format)
2. **GitHub controller-level scopes** for operations found in known repositories
3. **Tag-based scope propagation** (NEW!) - if an operation shares tags with operations that have scopes, those scopes are inferred

#### Tag-Based Scope Propagation

A powerful heuristic that significantly improves scope coverage:
- Operations with the same tag typically belong to the same functional area
- If ANY operation with a given tag has scopes defined, those scopes are propagated to ALL operations with that tag
- Example: All operations tagged `documents` inherit scopes: `client_financial_data, documents, myprofile, openid`
- **Impact**: Increased scope coverage from 25% to 42%+ (271 additional operations)

## Key Scripts

### fetch-swagger-with-fallback.js
Fetches swagger documentation from services with automatic v1/v2 fallback.

**Usage:**
```bash
node tools/fetch-swagger-with-fallback.js <batchSize> <offset>
```

**Example:**
```bash
# Fetch 10 services starting at offset 0
node tools/fetch-swagger-with-fallback.js 10 0
```

**Output:** `source/swagger-results-fallback-batch-*.json`

### consolidate-fallback-results.js
Consolidates all data sources into a single unified dataset.

**Reads from:**
- `source/swagger-results-fallback-batch-*.json`
- `Public Swagger/public-v2.json`
- `source/public-v2-operations.json`
- `source/github-publicapi-search.json`
- `source/documentation_ignore.txt`
- `source/api_white_list.txt`

**Writes to:**
- `source/all-public-apis-with-fallback.json`

**Features:**
- Case-insensitive whitelist matching
- Multi-source deduplication
- Tag preservation
- Service mapping

### generate-final-report-with-tags-first.js
Generates the comprehensive markdown report.

**Reads from:**
- `source/all-public-apis-with-fallback.json`

**Writes to:**
- `output/FINAL-API-REPORT.md`

**Includes:**
- Executive summary
- Complete API list table
- APIs by tag
- Hidden APIs section
- Services analyzed

### find-unmatched-whitelist.js
Identifies whitelist operations not found in swagger documentation.

**Reads from:**
- `source/all-public-apis-with-fallback.json`
- `source/api_white_list.txt`

**Output:** Console report of unmatched operations

## Data Sources

1. **Public Swagger v2** - 391 operations on developer portal
2. **Service Swagger Docs** - 1,226 unique operations from 50 services
3. **Documentation Ignore List** - 83 hidden public operations
4. **API Gateway Whitelist** - 401 operations (395 matched, 6 unmatched)
5. **GitHub [PublicApi] Search** - 46 operations from source code

## Consolidated Swagger Files

The system generates three types of consolidated OpenAPI 3.0 swagger files:

### Combined Swagger (All Endpoints)
- **File**: `output/swaggers/consolidated-public-swagger.json` (+ YAML version)
- **Operations**: 540 total (all public APIs filtered by v1/v2 whitelists)
- **Paths**: 295 unique paths
- **Tags**: 86 tags
- **OAuth Scopes**: 7 scopes
- **Coverage**: 23 operations with OAuth scopes

### V1 Swagger (API Gateway Whitelist)
- **File**: `output/swaggers/consolidated-public-swagger-v1.json` (+ YAML version)
- **Operations**: 153 (from v1 API Gateway whitelist)
- **Paths**: 98 unique paths
- **Tags**: 27 tags
- **OAuth Scopes**: 0 scopes (v1 didn't use OAuth)
- **Services**: Accounts, Brand, ClientStorage, CRM, FactFind, Portfolio

### V2 Swagger (API Gateway Whitelist)
- **File**: `output/swaggers/consolidated-public-swagger-v2.json` (+ YAML version)
- **Operations**: 387 (from v2 API Gateway whitelist)
- **Paths**: 211 unique paths
- **Tags**: 68 tags
- **OAuth Scopes**: 7 scopes
- **Coverage**: 23 operations with OAuth scopes

## Current Statistics

**Note**: This workflow uses version-specific API Gateway whitelists for accurate public API filtering.

- **Total Unique Public APIs**: 540 (filtered by API Gateway whitelists)
- **V1 Operations**: 153 (from v1 API Gateway whitelist - 264 operation IDs)
- **V2 Operations**: 387 (from v2 API Gateway whitelist - 401 operation IDs)
- **APIs on Developer Portal**: 333 (tracked via public-v2.json)
- **APIs NOT on Portal**: 207 (candidates for documentation)
- **APIs with OAuth Scopes**: 23 operations
- **Unique OAuth Scopes**: 7
- **Unique Services**: 20
- **Unique Tags**: 86

**API Gateway Whitelists**:
- V1 Whitelist: 264 operation IDs from 6 services (accounts, brand, clientstorage, crm, factfind, portfolio)
- V2 Whitelist: 401 operation IDs
- Source: `https://github.com/Intelliflo/aws-apigateway-definitions`

## Prerequisites

- Node.js installed
- GitHub CLI (`gh`) authenticated
- Network access to Intelliflo service swagger endpoints
- Access to Intelliflo GitHub repositories

## Maintenance

### When to Regenerate

- **Weekly**: Quick update using existing swagger data
- **Monthly**: Full regeneration including re-fetching all swagger docs
- **On-demand**: After major service deployments or API changes

### Adding New Services

1. Update `source/service-repos.json` with new repository names
2. Run swagger fetch scripts
3. Re-run consolidation and report generation

## Troubleshooting

**Issue:** GitHub API Rate Limiting
**Solution:** Use `gh` CLI which has higher rate limits

**Issue:** Service Swagger Endpoint 404
**Solution:** Automatic fallback to v1 if v2 fails

**Issue:** Unmatched Whitelist Operations
**Solution:** Expected (4-6 operations). See WHITELIST-ANALYSIS.md for details

## Related Files

- **Skill File**: `~/.claude/skills/api-swagger-generator/skill.md`
- **Main Report**: `output/reports/FINAL-API-REPORT.md`
- **Consolidated Swagger**: `output/swaggers/consolidated-public-swagger.json`

## License

Internal Intelliflo tool - not for public distribution.
