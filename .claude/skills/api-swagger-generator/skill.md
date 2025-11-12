# API Swagger Generator Skill

Generate comprehensive OpenAPI 3.0 swagger documentation for Intelliflo Public APIs by consolidating data from multiple sources.

## Overview

This skill automates the generation of consolidated OpenAPI 3.0 swagger files for all Intelliflo Public APIs, including:
- Combined swagger with all 1,565 public endpoints
- Separate v1 swagger (206 legacy endpoints)
- Separate v2 swagger (1,359 current endpoints)
- OAuth scope extraction and propagation
- Tag-based scope inference
- Multi-source data consolidation

## Project Structure

```
Public-APIs/
├── tools/              # JavaScript processing scripts
├── source/             # Source data (organized by category)
│   ├── templates/      # Template swagger files
│   ├── scopes/         # OAuth scope extractions
│   ├── swagger-batch/  # Fetched service swagger files
│   ├── github/         # GitHub source code extractions
│   ├── config/         # Configuration files
│   └── consolidated/   # Final consolidated data
└── output/
    ├── reports/        # Generated markdown reports
    └── swaggers/       # Generated OpenAPI swagger files
```

## Key Capabilities

### 1. OAuth Scope Extraction

**Extract scopes from Public Swagger v2:**
```bash
cd C:/work/Public-APIs/tools
node extract-public-swagger-scopes.js
```

Extracts OAuth scopes from the `x-intelliflo-api.scopes` extension field in Public Swagger v2.

**Output:** `source/scopes/public-v2-scopes.json` (390 operations with scopes)

**Scope Naming Convention:**
- Converts PascalCase to snake_case: `ClientFinancialData` → `client_financial_data`
- Supports nested scopes: `ClientFinancialData.Plans` → `client_financial_data.plans`
- Strips namespace prefixes: `Scopes.ClientData` → `client_data`

### 2. Controller-Level Scope Extraction (Optional)

**Extract [Scope] attributes from GitHub repositories:**
```bash
cd C:/work/Public-APIs/tools
node extract-all-controller-scopes-and-operations.js
```

Fetches C# controller files from GitHub and extracts `[Scope]` attributes at controller level.

**Output:**
- `source/github/github-controller-scopes.json` - Controller-level scopes
- `source/github/operation-to-controller-map-complete.json` - Operation ID to scope mapping

**Note:** This is optional as it only adds ~3 operations. Most scope coverage comes from Public Swagger v2 and tag-based propagation.

### 3. Tag-Based Scope Propagation

**Key Innovation:** Operations with the same tag likely belong to the same functional area and should share OAuth scopes.

This is automatically integrated into the consolidation process and dramatically improves scope coverage from 25% to 42%+ (271 additional operations).

**How it works:**
1. Build tag-to-scopes mapping from operations that already have scopes
2. For operations without scopes, collect scopes from all matching tags
3. Apply inferred scopes to the operation

**Example:** All operations tagged `documents` inherit scopes: `client_financial_data, documents, myprofile, openid`

### 4. Fetch Swagger Documentation

**Fetch swagger docs from all services:**
```bash
cd C:/work/Public-APIs/tools
node fetch-swagger-with-fallback.js 10 0
```

Parameters:
- `batchSize`: Number of services to process (e.g., 10)
- `offset`: Starting offset (e.g., 0)

**Features:**
- Automatic v1/v2 fallback (tries v2 first, falls back to v1)
- Processes 50+ microservices
- Extracts operation IDs, paths, methods, tags, descriptions

**Output:** `source/swagger-batch/swagger-results-fallback-batch-*.json`

### 5. Data Consolidation

**Consolidate all data sources:**
```bash
cd C:/work/Public-APIs/tools
node consolidate-fallback-results.js
```

**Merges data from:**
- Public Swagger v2 (391 operations on developer portal)
- Service swagger docs (1,226 unique operations)
- Documentation ignore list (83 hidden public operations)
- API Gateway whitelist (401 operations)
- GitHub [PublicApi] search (46 operations)

**Scope Resolution Hierarchy:**
1. Public Swagger scopes (highest priority - already in snake_case)
2. GitHub controller-level scopes for operations in known repositories
3. Tag-based scope propagation (if operation shares tags with scoped operations)

**Output:** `source/consolidated/all-public-apis-with-fallback.json` (1,565 APIs with metadata)

### 6. Generate Swagger Files

**Generate combined swagger (all endpoints):**
```bash
cd C:/work/Public-APIs/tools
node generate-consolidated-public-swagger.js
```

**Output:**
- `output/swaggers/consolidated-public-swagger.json` - OpenAPI 3.0.1 format
- `output/swaggers/consolidated-public-swagger.yaml` - YAML version
- `output/swaggers/consolidated-swagger-stats.json` - Statistics

**Statistics:**
- 1,565 total operations
- 920 unique paths
- 330 tags
- 22 OAuth scopes
- 664 operations with scopes (42.4% coverage)

**Generate v1 and v2 swaggers separately:**
```bash
cd C:/work/Public-APIs/tools
node generate-consolidated-swagger-by-version.js
```

**Output:**
- `output/swaggers/consolidated-public-swagger-v1.json` + YAML + stats
- `output/swaggers/consolidated-public-swagger-v2.json` + YAML + stats

**V1 Swagger (Legacy):**
- 206 operations, 140 paths, 93 tags, 3 scopes
- Services: Author, Email, SecureMessaging, Campaign, Workflow, WebHooks, Brand, ChangeNotification

**V2 Swagger (Current):**
- 1,359 operations, 780 paths, 243 tags, 22 scopes
- Includes all developer portal APIs + modern service endpoints

### 7. Generate Reports

**Generate comprehensive markdown report:**
```bash
cd C:/work/Public-APIs/tools
node generate-final-report-with-tags-first.js
```

**Output:** `output/reports/FINAL-API-REPORT.md`

**Features:**
- Executive summary with statistics
- Complete API list table (sorted by tags, includes scopes)
- APIs organized by tag
- Hidden APIs section
- Services analyzed list

**Validate whitelist operations:**
```bash
cd C:/work/Public-APIs/tools
node find-unmatched-whitelist.js
```

**Output:** Console report (can be redirected to `output/reports/WHITELIST-ANALYSIS.md`)

## Complete Workflow

### Full Regeneration (Monthly)

```bash
cd C:/work/Public-APIs

# Step 1: Extract scopes from Public Swagger v2
cd tools
node extract-public-swagger-scopes.js

# Step 2: Fetch swagger docs from all services
node fetch-swagger-with-fallback.js 10 0

# Step 3 (Optional): Fetch controller scopes from GitHub
node extract-all-controller-scopes-and-operations.js

# Step 4: Consolidate all data sources (includes tag-based scope propagation)
node consolidate-fallback-results.js

# Step 5: Generate all outputs
node generate-final-report-with-tags-first.js
node generate-consolidated-public-swagger.js
node generate-consolidated-swagger-by-version.js
node find-unmatched-whitelist.js
```

### Quick Update (Weekly)

```bash
cd C:/work/Public-APIs/tools

# Re-consolidate and regenerate using existing swagger data
node consolidate-fallback-results.js
node generate-final-report-with-tags-first.js
node generate-consolidated-public-swagger.js
node generate-consolidated-swagger-by-version.js
```

## OpenAPI 3.0 Structure

### Generated Swagger Format

```json
{
  "openapi": "3.0.1",
  "info": {
    "title": "Intelliflo Consolidated Public APIs",
    "description": "Consolidated OpenAPI specification...",
    "version": "2025-11-12",
    "contact": {
      "name": "Intelliflo API Support",
      "url": "https://developer.intelliflo.com"
    }
  },
  "servers": [
    {
      "url": "https://api.intelliflo.com",
      "description": "Production API Server"
    }
  ],
  "components": {
    "securitySchemes": {
      "oauth2": {
        "type": "oauth2",
        "flows": {
          "authorizationCode": {
            "authorizationUrl": "https://login.intelliflo.com/oauth2/authorize",
            "tokenUrl": "https://login.intelliflo.com/oauth2/token",
            "scopes": {
              "openid": "Access to openid resources",
              "myprofile": "Access to myprofile resources",
              "client_data": "Access to client_data resources",
              "client_financial_data": "Access to client_financial_data resources",
              "firm_data": "Access to firm_data resources",
              "documents": "Access to documents resources"
            }
          }
        }
      }
    }
  },
  "paths": {
    "/v2/clients/{clientId}": {
      "get": {
        "operationId": "GetClientById",
        "summary": "Get client by ID",
        "tags": ["clients"],
        "security": [
          {
            "oauth2": ["client_data", "openid"]
          }
        ],
        "x-intelliflo-api": {
          "service": "Microservice.Client",
          "onDeveloperPortal": true,
          "source": "Public Swagger v2",
          "scopes": ["client_data", "openid"],
          "swaggerVersion": "v2"
        },
        "responses": {
          "200": { "description": "Successful response" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" }
        }
      }
    }
  }
}
```

### Key Extensions

**x-intelliflo-api Extension:**
- `service`: Originating microservice name
- `onDeveloperPortal`: Whether API is publicly documented
- `source`: Data source (Public Swagger v2, Service Swagger, GitHub)
- `scopes`: OAuth scopes required (array)
- `swaggerVersion`: Swagger version used (v1 or v2)

## OAuth Scopes Reference

### All 22 Unique Scopes

1. `openid` - OpenID Connect authentication
2. `myprofile` - User profile access
3. `client_data` - Client information
4. `client_financial_data` - Client financial information
5. `firm_data` - Firm/organization data
6. `documents` - Document management
7. `fund_data` - Investment fund data
8. `model_data` - Portfolio model data
9. `plan_data` - Financial plan data
10. `valuation_data` - Asset valuation data
11. `analytics` - Analytics and reporting
12. `business_events` - Business event notifications
13. `communications` - Communication management
14. `contacts` - Contact management
15. `factfind` - Fact-finding data
16. `goals` - Client goals
17. `illustrations` - Product illustrations
18. `lifecycle` - Client lifecycle management
19. `opportunities` - Sales opportunities
20. `pipeline` - Sales pipeline
21. `recommendations` - Product recommendations
22. `workflows` - Workflow automation

### Scope Coverage Statistics

- **Total APIs**: 1,565
- **APIs with Scopes**: 664 (42.4%)
  - From Public Swagger v2: 390 operations (24.9%)
  - From Controller attributes: 3 operations (0.2%)
  - From Tag propagation: 271 operations (17.3%)
- **APIs without Scopes**: 901 (57.6%)

## Data Sources

### 1. Public Swagger v2
- **Location**: `source/templates/Public Swagger/public-v2.json`
- **Operations**: 391 (on developer portal)
- **Scopes**: 390 operations with defined scopes
- **Priority**: Highest (authoritative source)

### 2. Service Swagger Documentation
- **Location**: `source/swagger-batch/swagger-results-fallback-batch-*.json`
- **Services**: 50+ microservices
- **Operations**: 1,226 unique operations
- **Versions**: v1 (8 services) and v2 (42+ services)

### 3. Documentation Ignore List
- **Location**: `source/config/documentation_ignore.txt`
- **Operations**: 83 hidden public operations
- **Purpose**: Public APIs not shown on developer portal

### 4. API Gateway Whitelist
- **Location**: `source/config/api_white_list.txt`
- **Operations**: 401 operations
- **Match Rate**: 98.5% (395 matched, 6 unmatched)

### 5. GitHub Source Code
- **Location**: `source/github/github-publicapi-search.json`
- **Operations**: 46 operations with [PublicApi] attribute
- **Repositories**: 7 service repositories

### 6. GitHub Controller Scopes
- **Location**: `source/github/github-controller-scopes.json`
- **Controllers**: 6 controllers with [Scope] attributes
- **Operations Mapped**: 28 operations

## Troubleshooting

### Issue: GitHub API Rate Limiting
**Solution:** Use `gh` CLI which has higher rate limits (5,000 vs 60 requests/hour)

### Issue: Service Swagger Endpoint 404
**Solution:** Automatic fallback to v1 if v2 fails (implemented in `fetch-swagger-with-fallback.js`)

### Issue: Low Scope Coverage
**Solution:** Implemented tag-based scope propagation (increased from 25% to 42%+)

### Issue: Unmatched Whitelist Operations
**Solution:** Expected (4-6 operations). These are typically deprecated or renamed APIs.

### Issue: PascalCase Scope Conversion
**Solution:** Use `scope-utils.js` for consistent conversion with test cases

## Key Files

### Scripts
- `tools/extract-public-swagger-scopes.js`
- `tools/extract-all-controller-scopes-and-operations.js`
- `tools/fetch-swagger-with-fallback.js`
- `tools/consolidate-fallback-results.js`
- `tools/generate-final-report-with-tags-first.js`
- `tools/generate-consolidated-public-swagger.js`
- `tools/generate-consolidated-swagger-by-version.js`
- `tools/find-unmatched-whitelist.js`

### Source Data (Organized Structure)
- `source/templates/Public Swagger/public-v2.json` - Template swagger
- `source/scopes/public-v2-scopes.json` - Extracted scopes
- `source/swagger-batch/swagger-results-fallback-batch-*.json` - Service data
- `source/github/operation-to-controller-map-complete.json` - Controller mappings
- `source/config/api_white_list.txt` - Gateway whitelist
- `source/consolidated/all-public-apis-with-fallback.json` - Final dataset

### Outputs
- `output/swaggers/consolidated-public-swagger.json` - Combined (all)
- `output/swaggers/consolidated-public-swagger-v1.json` - V1 only
- `output/swaggers/consolidated-public-swagger-v2.json` - V2 only
- `output/reports/FINAL-API-REPORT.md` - Comprehensive report

## Prerequisites

- Node.js installed
- GitHub CLI (`gh`) authenticated
- Network access to Intelliflo service swagger endpoints
- Access to Intelliflo GitHub repositories

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
- Whitelist Match Rate: **98.5%**
