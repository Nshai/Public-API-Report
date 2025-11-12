# Intelliflo Public API Report Generator

## Description
Generates comprehensive reports and OpenAPI 3.0 swagger documentation for all Intelliflo Public APIs by consolidating data from multiple sources including service swagger documentation, GitHub repositories, OAuth scopes, API Gateway whitelist, and documentation ignore lists.

## When to Use
Use this skill when you need to:
- Generate a complete inventory of all Intelliflo Public APIs (1,565 operations)
- Create consolidated OpenAPI 3.0 swagger files (combined, v1, v2)
- Extract and propagate OAuth scopes across APIs
- Analyze API coverage across 50+ microservices
- Compare APIs documented in swagger vs. developer portal
- Identify hidden public APIs (1,174 operations)
- Validate API Gateway whitelist (401 operations)
- Generate comprehensive markdown reports sorted by tags

## Project Structure

```
Public-APIs/
├── tools/              # JavaScript processing scripts
├── source/             # Source data (organized by category)
│   ├── templates/      # Template swagger files
│   │   ├── Public Swagger/public-v2.json (391 operations)
│   │   └── public-v2-operations.json
│   ├── scopes/         # OAuth scope extractions
│   │   ├── public-v2-scopes.json (390 operations)
│   │   └── tag-to-scope-mapping.json
│   ├── swagger-batch/  # Fetched service swagger files
│   │   └── swagger-results-fallback-batch-*.json (1,226 operations)
│   ├── github/         # GitHub source code extractions
│   │   ├── github-publicapi-search.json (46 operations)
│   │   ├── github-controller-scopes.json
│   │   └── operation-to-controller-map-complete.json
│   ├── config/         # Configuration files
│   │   ├── service-repos.json
│   │   ├── api_white_list.txt (401 operations)
│   │   └── documentation_ignore.txt (83 operations)
│   └── consolidated/   # Final consolidated data
│       └── all-public-apis-with-fallback.json (1,565 APIs)
└── output/
    ├── reports/        # Generated markdown reports
    │   └── FINAL-API-REPORT.md
    └── swaggers/       # Generated OpenAPI swagger files
        ├── consolidated-public-swagger.json (all 1,565 operations)
        ├── consolidated-public-swagger-v1.json (206 operations)
        └── consolidated-public-swagger-v2.json (1,359 operations)
```

## Complete Workflow

### Full Regeneration (Monthly)

```bash
cd C:/work/Public-APIs/tools

# Step 1: Extract OAuth scopes from Public Swagger v2
node extract-public-swagger-scopes.js

# Step 2: Fetch swagger docs from all services
node fetch-swagger-with-fallback.js 10 0

# Step 3 (Optional): Fetch controller scopes from GitHub
node extract-all-controller-scopes-and-operations.js

# Step 4: Consolidate all data sources (includes tag-based scope propagation)
node consolidate-fallback-results.js

# Step 5: Generate reports and swagger files
node generate-final-report-with-tags-first.js
node generate-consolidated-public-swagger.js
node generate-consolidated-swagger-by-version.js
node find-unmatched-whitelist.js
```

### Quick Update (Weekly)

```bash
cd C:/work/Public-APIs/tools

# Re-consolidate and regenerate using existing data
node consolidate-fallback-results.js
node generate-final-report-with-tags-first.js
node generate-consolidated-public-swagger.js
node generate-consolidated-swagger-by-version.js
```

## Key Features

### 1. OAuth Scope Management
- **Extraction**: Automatically extracts scopes from Public Swagger v2 (390 operations)
- **Controller-level**: Fetches `[Scope]` attributes from GitHub controllers
- **PascalCase Conversion**: Converts `ClientFinancialData` → `client_financial_data`
- **Tag-based Propagation**: Infers scopes for 271 additional operations (42.4% total coverage)
- **Unique Scopes**: Tracks 22 unique OAuth scopes

### 2. Multi-Source Consolidation
Merges data from 6 sources:
1. Public Swagger v2 (391 operations on developer portal)
2. Service Swagger Docs (1,226 operations from 50 services)
3. Documentation Ignore List (83 hidden public operations)
4. API Gateway Whitelist (401 operations)
5. GitHub [PublicApi] Search (46 operations)
6. GitHub Controller Scopes (28 operation mappings)

### 3. OpenAPI 3.0 Swagger Generation
Generates three consolidated swagger files:
- **Combined**: All 1,565 public endpoints
- **V1**: 206 legacy endpoints (8 services)
- **V2**: 1,359 current endpoints (42+ services)

Each includes:
- Complete OAuth 2.0 security scheme with all 22 scopes
- 330 tags for organization
- x-intelliflo-api extensions with metadata
- YAML and JSON formats
- Statistics files

### 4. Comprehensive Reporting
**FINAL-API-REPORT.md** includes:
- Executive summary with statistics
- Complete API list table (sorted by tags, includes scopes)
- APIs organized by tag
- Hidden APIs section
- Services analyzed

## Data Sources

### Templates
- `source/templates/Public Swagger/public-v2.json` - Developer portal swagger (391 operations)
- `source/templates/public-v2-operations.json` - Extracted operations

### Scopes
- `source/scopes/public-v2-scopes.json` - OAuth scopes from swagger (390 operations)
- `source/scopes/tag-to-scope-mapping.json` - Tag-based inference map (67 tags)

### Swagger Batch
- `source/swagger-batch/swagger-results-fallback-batch-*.json` - Fetched service swaggers (1,226 operations)

### GitHub
- `source/github/github-publicapi-search.json` - [PublicApi] attribute search (46 operations)
- `source/github/github-controller-scopes.json` - Controller-level scopes
- `source/github/operation-to-controller-map-complete.json` - Operation mappings (28)

### Config
- `source/config/service-repos.json` - Service repository list
- `source/config/api_white_list.txt` - API Gateway whitelist (401 operations)
- `source/config/documentation_ignore.txt` - Hidden public APIs (83)

### Consolidated
- `source/consolidated/all-public-apis-with-fallback.json` - Final dataset (1,565 APIs)

## OAuth Scopes

### All 22 Unique Scopes
1. openid - OpenID Connect authentication
2. myprofile - User profile access
3. client_data - Client information
4. client_financial_data - Client financial information
5. firm_data - Firm/organization data
6. documents - Document management
7. fund_data - Investment fund data
8. model_data - Portfolio model data
9. plan_data - Financial plan data
10. valuation_data - Asset valuation data
11. analytics - Analytics and reporting
12. business_events - Business event notifications
13. communications - Communication management
14. contacts - Contact management
15. factfind - Fact-finding data
16. goals - Client goals
17. illustrations - Product illustrations
18. lifecycle - Client lifecycle management
19. opportunities - Sales opportunities
20. pipeline - Sales pipeline
21. recommendations - Product recommendations
22. workflows - Workflow automation

### Scope Coverage
- **Total APIs**: 1,565
- **With Scopes**: 664 (42.4%)
  - From Public Swagger v2: 390 (24.9%)
  - From Controller attributes: 3 (0.2%)
  - From Tag propagation: 271 (17.3%)
- **Without Scopes**: 901 (57.6%)

### Scope Naming Conversion
- PascalCase → snake_case: `ClientFinancialData` → `client_financial_data`
- Nested scopes: `ClientFinancialData.Plans` → `client_financial_data.plans`
- Namespace stripping: `Scopes.ClientData` → `client_data`

## Generated Outputs

### Reports (output/reports/)
- **FINAL-API-REPORT.md** - Complete analysis sorted by tags
  - Executive summary
  - Complete API table (1,565 operations)
  - APIs by tag (330 tags)
  - Hidden APIs section
  - Services analyzed

### Swagger Files (output/swaggers/)
- **consolidated-public-swagger.json** - All endpoints (1,565 operations)
- **consolidated-public-swagger.yaml** - YAML version
- **consolidated-swagger-stats.json** - Statistics

- **consolidated-public-swagger-v1.json** - V1 endpoints (206 operations)
- **consolidated-public-swagger-v1.yaml** - V1 YAML
- **consolidated-swagger-v1-stats.json** - V1 statistics

- **consolidated-public-swagger-v2.json** - V2 endpoints (1,359 operations)
- **consolidated-public-swagger-v2.yaml** - V2 YAML
- **consolidated-swagger-v2-stats.json** - V2 statistics

## Key Scripts

### Data Collection
- `fetch-swagger-with-fallback.js` - Fetches service swagger (v2 with v1 fallback)
- `extract-public-swagger-scopes.js` - Extracts OAuth scopes from public swagger
- `extract-github-controller-scopes.js` - Fetches controller-level scopes
- `extract-all-controller-scopes-and-operations.js` - Maps operations to controller scopes

### Processing
- `consolidate-fallback-results.js` - Main consolidation script with tag-based scope propagation
- `propagate-scopes-by-tag.js` - Standalone tag-based scope propagation tool

### Generation
- `generate-final-report-with-tags-first.js` - Generates markdown report sorted by tags
- `generate-consolidated-public-swagger.js` - Generates combined OpenAPI 3.0 swagger
- `generate-consolidated-swagger-by-version.js` - Generates v1 and v2 swaggers separately
- `find-unmatched-whitelist.js` - Validates whitelist operations

## Statistics Dashboard

### Overall Coverage
- Total Public APIs: **1,565**
- On Developer Portal: **391** (25.0%)
- Hidden Public APIs: **1,174** (75.0%)
- With OAuth Scopes: **664** (42.4%)
- In Gateway Whitelist: **395** (25.2%)

### Version Distribution
- V1 Endpoints: **206** (13.2%)
- V2 Endpoints: **1,359** (86.8%)

### Data Quality
- Unique Paths: **920**
- Unique Tags: **330**
- Unique Scopes: **22**
- Services Analyzed: **50+**
- Whitelist Match Rate: **98.5%**

## Prerequisites

- Node.js installed
- GitHub CLI (`gh`) authenticated
- Network access to Intelliflo service swagger endpoints
- Access to Intelliflo GitHub repositories

## Use Cases

### 1. API Consumer Integration
- Generate client SDKs using consolidated swagger
- Import into API testing tools (Postman, Insomnia)
- Generate API documentation portals
- Understand OAuth scope requirements

### 2. API Governance
- Track API surface area (1,565 endpoints)
- Monitor OAuth scope coverage (42.4%)
- Identify undocumented public APIs (1,174)
- Validate API Gateway whitelist (98.5% match)

### 3. Security Auditing
- Review OAuth scope assignments
- Identify operations without scope protection
- Track scope proliferation (22 scopes)
- Validate scope naming conventions

### 4. Developer Portal Management
- Find APIs that should be documented
- Update developer portal content
- Generate API catalogs

### 5. API Versioning Strategy
- Compare v1 vs v2 coverage (206 vs 1,359)
- Plan v1 deprecation
- Track migration progress

## Troubleshooting

### Issue: GitHub API Rate Limiting
**Solution:** Use `gh` CLI (5,000 requests/hour vs 60 for unauthenticated)

### Issue: Service Swagger 404
**Solution:** Automatic v1 fallback implemented in fetch script

### Issue: Low Scope Coverage
**Solution:** Tag-based propagation increases coverage from 25% to 42%+

### Issue: Unmatched Whitelist
**Solution:** Expected (4-6 operations) - typically deprecated/renamed APIs

## Maintenance Schedule

**Weekly (Quick Update):**
- Re-consolidate existing data
- Regenerate reports and swaggers
- Takes ~2-3 minutes

**Monthly (Full Regeneration):**
- Re-fetch all service swagger docs
- Re-extract controller scopes from GitHub
- Full consolidation and regeneration
- Takes ~15-20 minutes

**On-Demand:**
- After major service deployments
- After API changes or new public endpoints
- When OAuth scopes are modified

## Related Files

- **Project README**: `C:/work/Public-APIs/README.md`
- **Path Mappings**: `C:/work/Public-APIs/source/PATH_MAPPINGS.md`
- **Swagger Skill**: `.claude/skills/api-swagger-generator/skill.md`
