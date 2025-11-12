# API Swagger Consolidator Skill

Fetches swagger documentation from all Intelliflo services and generates a consolidated OpenAPI 3.0 swagger file containing only public APIs that are documented in the final API report.

## Description

This skill automates the process of:
1. Generating `source/config/service-urls.json` with v1 and v2 endpoints for all services
2. Fetching swagger documentation from BOTH v1 and v2 endpoints for each service
3. Consolidating all swagger definitions into a single OpenAPI 3.0 specification
4. Filtering to include only operation IDs present in `output/reports/FINAL-API-REPORT.md`
5. Generating the consolidated swagger in `output/swaggers/consolidated/`

## When to Use

Use this skill when you need to:
- Generate a production-ready consolidated swagger with only verified public APIs
- Create a filtered swagger file that matches the documented API report
- Update the consolidated swagger after API changes or additions
- Generate a single swagger file for API consumers and documentation portals

## Key Features

### 1. Service URL Generation & Dual-Version Fetching
- Generates `service-urls.json` with BOTH v1 and v2 endpoints (122 endpoints from 61 services)
- Fetches swagger from BOTH v1 AND v2 for each service (comprehensive dual-version approach)
- Preserves all version-specific operations for complete API coverage
- Parallel processing with configurable batch size
- Saves intermediate results to `source/swagger-batch/swagger-results-dual-version-batch-*.json`
- Backward compatible with old `swagger-results-fallback-batch-*.json` files

### 2. Operation ID Filtering
- Extracts all operation IDs from `FINAL-API-REPORT.md`
- Filters consolidated swagger to include only these verified public APIs
- Excludes internal, deprecated, or undocumented operations
- Ensures swagger matches the official API report

### 3. Swagger Consolidation
- Merges all service swagger definitions into a single OpenAPI 3.0 spec
- Preserves operation details (paths, methods, parameters, responses)
- Adds `x-intelliflo-api` extension with metadata
- Includes OAuth 2.0 security scheme with all scopes
- Organizes by tags for better navigation

### 4. Output Organization
- Creates `output/swaggers/consolidated/` directory
- Generates JSON and YAML formats
- Includes statistics file with metadata
- Timestamped version information

## Project Structure

```
Public-APIs/
├── tools/
│   ├── generate-service-urls.js            # Generates service-urls.json
│   └── fetch-and-consolidate-swaggers.js  # Main consolidation script
├── source/
│   ├── config/
│   │   ├── service-repos.json              # List of 61 services
│   │   └── service-urls.json               # Generated: 122 endpoints (v1 + v2)
│   └── swagger-batch/                      # Intermediate swagger files
│       ├── swagger-results-dual-version-batch-*.json  # New format
│       └── swagger-results-fallback-batch-*.json      # Old format (compatible)
└── output/
    ├── reports/
    │   └── FINAL-API-REPORT.md             # Source of operation IDs
    └── swaggers/
        └── consolidated/                    # Final consolidated swagger
            ├── consolidated-public-swagger.json
            ├── consolidated-public-swagger.yaml
            └── consolidated-swagger-stats.json
```

## Complete Workflow

### Step 1: Generate Service URLs (One-time or when services change)

Generate the `service-urls.json` file with v1 and v2 endpoints:

```bash
cd C:/work/Public-APIs/tools
node generate-service-urls.js
```

This creates 122 endpoint entries (61 services × 2 versions) in `source/config/service-urls.json`.

### Step 2: Quick Consolidation (Using Existing Swagger Data)

If you already have fetched swagger files in `source/swagger-batch/`:

```bash
cd C:/work/Public-APIs/tools
node fetch-and-consolidate-swaggers.js --skip-fetch
```

This will:
1. Load existing swagger files from `source/swagger-batch/`
2. Extract operation IDs from `FINAL-API-REPORT.md`
3. Filter and consolidate swagger
4. Output to `output/swaggers/consolidated/`

### Step 3: Full Regeneration (Fetch Both V1 and V2 + Consolidate)

To fetch fresh swagger from ALL v1 and v2 endpoints and consolidate:

```bash
cd C:/work/Public-APIs/tools
node fetch-and-consolidate-swaggers.js
```

This will:
1. Load service URLs from `service-urls.json` (122 endpoints)
2. Fetch swagger from BOTH v1 AND v2 for each service
3. Save to `source/swagger-batch/swagger-results-dual-version-batch-*.json`
4. Extract operation IDs from `FINAL-API-REPORT.md`
5. Filter and consolidate swagger
6. Output to `output/swaggers/consolidated/`

### Custom Batch Size

Process services in smaller batches:

```bash
cd C:/work/Public-APIs/tools
node fetch-and-consolidate-swaggers.js --batch-size 10 --offset 0
```

## Script Parameters

- `--skip-fetch`: Skip fetching, use existing swagger files
- `--batch-size <n>`: Number of services to process (default: all)
- `--offset <n>`: Starting offset for batch processing (default: 0)
- `--report <path>`: Custom path to API report (default: `../output/reports/FINAL-API-REPORT.md`)
- `--output <dir>`: Custom output directory (default: `../output/swaggers/consolidated/`)

## Operation ID Extraction

The script extracts operation IDs from the API report table format:

```markdown
| Tags | Operation ID | Method | Endpoint | ...
|------|--------------|--------|----------|
| tags | GetClientById | GET | /v2/clients/{clientId} | ...
```

Only operations in this table are included in the consolidated swagger.

## Consolidated Swagger Structure

### OpenAPI 3.0 Format

```json
{
  "openapi": "3.0.1",
  "info": {
    "title": "Intelliflo Consolidated Public APIs",
    "description": "Consolidated OpenAPI specification for verified public APIs",
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
              "openid": "OpenID Connect authentication",
              "myprofile": "User profile access",
              "client_data": "Client information",
              "client_financial_data": "Client financial information",
              "firm_data": "Firm/organization data",
              "documents": "Document management"
              // ... all 22 scopes
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
        "security": [{"oauth2": ["client_data", "openid"]}],
        "x-intelliflo-api": {
          "service": "Microservice.Client",
          "source": "Service Swagger",
          "swaggerVersion": "v2",
          "inFinalReport": true
        },
        "parameters": [...],
        "responses": {...}
      }
    }
  }
}
```

### Key Extensions

**x-intelliflo-api Extension:**
- `service`: Originating microservice name
- `source`: Data source (Service Swagger, Public Swagger v2)
- `swaggerVersion`: Swagger version (v1 or v2)
- `inFinalReport`: Always true (filtered to report operations only)

## Output Files

### JSON Format
- **Path**: `output/swaggers/consolidated/consolidated-public-swagger.json`
- **Format**: OpenAPI 3.0.1 JSON
- **Size**: Typically 500KB-2MB depending on schema definitions

### YAML Format
- **Path**: `output/swaggers/consolidated/consolidated-public-swagger.yaml`
- **Format**: OpenAPI 3.0.1 YAML
- **Use**: Import into Swagger UI, Postman, API documentation tools

### Statistics
- **Path**: `output/swaggers/consolidated/consolidated-swagger-stats.json`
- **Contents**:
  ```json
  {
    "generatedAt": "2025-11-12T10:30:00.000Z",
    "totalOperations": 1565,
    "operationsByVersion": {
      "v1": 206,
      "v2": 1359
    },
    "uniquePaths": 920,
    "uniqueTags": 330,
    "servicesIncluded": 52,
    "operationsWithScopes": 664,
    "operationsFiltered": 0
  }
  ```

## Comparison with Other Skills

### vs. api-swagger-generator
- **api-swagger-generator**: Generates swagger from multiple sources (Public Swagger, Service Swagger, GitHub, whitelist)
- **api-swagger-consolidator**: Fetches fresh swagger from services and filters to final report operations only
- **Use case**: Consolidator is for production-ready filtered swagger; Generator is for comprehensive API discovery

### vs. api-report-generator
- **api-report-generator**: Generates markdown reports from consolidated API data
- **api-swagger-consolidator**: Generates OpenAPI swagger files
- **Use case**: Report for human readability; Swagger for API tooling and consumers

## Data Sources

### Input Sources
1. **Service Repositories** (`source/config/service-repos.json`)
   - List of 60+ microservices and monoliths
   - Used to determine which services to fetch swagger from

2. **API Report** (`output/reports/FINAL-API-REPORT.md`)
   - Contains verified public operation IDs
   - Used to filter consolidated swagger

3. **Cached Swagger** (`source/swagger-batch/`)
   - Previously fetched swagger files
   - Used when `--skip-fetch` is specified

### Output
- **Consolidated Swagger** (`output/swaggers/consolidated/`)
  - Filtered to report operations only
  - OpenAPI 3.0.1 format
  - JSON and YAML versions

## Use Cases

### 1. API Consumer Integration
- Import consolidated swagger into API clients (Postman, Insomnia)
- Generate client SDKs using OpenAPI Generator
- Use for API testing and validation
- Single source of truth for public APIs

### 2. API Documentation
- Import into Swagger UI for interactive documentation
- Use in API documentation portals
- Share with external partners and developers
- Ensure documentation matches actual public APIs

### 3. API Governance
- Verify public API surface area
- Compare against API Gateway configuration
- Track API changes over time
- Ensure consistency between documentation and implementation

### 4. Development and Testing
- Use in integration tests
- Mock API responses based on swagger
- Validate request/response formats
- Generate test data from schemas

## Troubleshooting

### Issue: Service Swagger 404 Not Found
**Cause**: Service doesn't expose swagger endpoint or endpoint changed
**Solution**: Script automatically falls back from v2 to v1. Check service logs for availability.

### Issue: Operation ID Not Found in Report
**Cause**: Operation exists in service swagger but not in final report
**Solution**: This is expected - only verified public APIs are in the report. The operation will be excluded from consolidated swagger.

### Issue: Duplicate Operation IDs
**Cause**: Multiple services define the same operation ID
**Solution**: Script uses first occurrence. Review service swagger for conflicts.

### Issue: Large File Size
**Cause**: Schemas include many nested definitions
**Solution**: Consider splitting by version (v1/v2) or by service group using custom filters.

## Maintenance Schedule

**Weekly:**
- Run quick consolidation with `--skip-fetch` using cached swagger
- Takes ~30 seconds

**Monthly:**
- Full regeneration fetching fresh swagger from all services
- Takes ~10-15 minutes depending on service availability

**After API Changes:**
- Re-run consolidation after updating FINAL-API-REPORT.md
- Re-fetch swagger if service definitions changed

## Prerequisites

- Node.js installed (v14+)
- Network access to Intelliflo service swagger endpoints
- Existing `FINAL-API-REPORT.md` with operation IDs
- `service-repos.json` with current service list

## Statistics Dashboard

**Typical Output:**
- Total Operations: 1,565
- Filtered Operations: 0 (all in report)
- Unique Paths: 920
- Unique Tags: 330
- Services Included: 52
- With OAuth Scopes: 664 (42.4%)

## Related Skills

- **api-report-generator**: Generate FINAL-API-REPORT.md
- **api-swagger-generator**: Comprehensive API discovery and consolidation
- See: `.claude/skills/api-report-generator/skill.md`
- See: `.claude/skills/api-swagger-generator/skill.md`

## Example Usage

```bash
# Generate consolidated swagger (using existing swagger data)
cd C:/work/Public-APIs/tools
node fetch-and-consolidate-swaggers.js --skip-fetch

# Full regeneration (fetch + consolidate)
node fetch-and-consolidate-swaggers.js

# Process first 10 services only
node fetch-and-consolidate-swaggers.js --batch-size 10 --offset 0

# Custom report and output location
node fetch-and-consolidate-swaggers.js \
  --report ../custom/report.md \
  --output ../custom/output/
```

## Notes

- This skill focuses on creating a production-ready, filtered swagger file
- Only operations in FINAL-API-REPORT.md are included
- The consolidated swagger is suitable for sharing with API consumers
- For comprehensive API discovery, use the api-swagger-generator skill instead
