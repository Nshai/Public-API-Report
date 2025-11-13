# Intelliflo Public API Report & Swagger Generator

## Description
Unified workflow to generate Public API reports and OpenAPI 3.0 swagger files by consolidating service swaggers, filtering by [PublicApi] attributes and API Gateway whitelist, and generating comprehensive documentation.

## When to Use
Use this skill to:
- Generate complete Public API inventory with accurate filtering
- Create consolidated OpenAPI 3.0 swagger files (combined, v1, v2)
- Generate API reports with scopes, portal status, and service information
- Run the full end-to-end workflow to refresh all API documentation

## Complete Workflow

### Step-by-Step Execution

```bash
cd C:/work/Public-APIs/tools

# STEP 1: Generate service URLs and fetch all v1 and v2 swaggers
node generate-service-urls.js
node fetch-swagger-dual-version.js 20 0
node fetch-swagger-dual-version.js 20 20
node fetch-swagger-dual-version.js 20 40
node fetch-swagger-dual-version.js 20 60
node fetch-swagger-dual-version.js 20 80
node fetch-swagger-dual-version.js 20 100
node fetch-swagger-dual-version.js 2 120

# STEP 2: Consolidate all service swaggers (uses public-v2.json as template)
# STEP 3: Extract [PublicApi] operations from GitHub
# STEP 4: Read API Gateway whitelist
# STEP 5: Filter consolidated swagger to only include allowed operations
node consolidate-and-filter.js

# STEP 6: Generate consolidated swagger files (combined, v1, v2)
node generate-consolidated-public-swagger.js
node generate-consolidated-swagger-by-version.js

# STEP 7: Generate API report with all columns
node generate-api-report.js
```

## Detailed Workflow Steps

### Step 1: Fetch All Service Swaggers

**Objective**: Get swagger documentation from BOTH v1 AND v2 endpoints for all services

**Scripts**:
- `generate-service-urls.js` - Generates service-urls.json
- `fetch-swagger-dual-version.js` - Fetches swagger docs

**Input**:
- `source/config/service-repos.json` - 61 services

**Output**:
- `source/config/service-urls.json` - 122 endpoints (61 × 2 versions)
- `source/swagger-batch/swagger-results-dual-version-batch-*.json` - 7 batch files

**Duration**: ~30-60 seconds

### Step 2: Consolidate Service Swaggers

**Objective**: Create a single swagger with all v1 and v2 operations

**Process**:
- Load all swagger batch files
- Combine all operations from all services
- Use `source/templates/Public Swagger/public-v2.json` as structural template
- Maintain version information (v1/v2) for each operation

**Output**: Internal consolidated map (not saved separately)

### Step 3: Extract [PublicApi] Operations from GitHub

**Objective**: Get operation IDs from controllers with [PublicApi] attribute

**Process**:
- Search GitHub for `[PublicApi]` in all services from service-repos.json
- Extract operation IDs from `[HttpGet(Name="...")]` etc.
- Filter to only services in service-repos.json

**Output**: List of operation IDs that have [PublicApi] attribute

### Step 4: Read API Gateway Whitelist

**Objective**: Get operation IDs approved in API Gateway

**Input**:
- `source/config/api_white_list.txt` - 401 operation IDs

**Output**: List of whitelisted operation IDs

### Step 5: Filter Consolidated Swagger

**Objective**: Include only operations that are in [PublicApi] OR whitelist

**Script**: `consolidate-and-filter.js` (combines steps 2-5)

**Filtering Logic**:
```
Include operation IF:
  - Operation ID found in GitHub [PublicApi] controllers, OR
  - Operation ID found in api_white_list.txt
```

**Additional Processing**:
- Check if operation is "On Portal" (exists in public-v2.json)
- Extract OAuth scopes from swagger
- Maintain service and version information

**Inputs**:
- `source/swagger-batch/swagger-results-dual-version-batch-*.json`
- `source/github/github-publicapi-operations.json`
- `source/config/api_white_list.txt`
- `source/templates/Public Swagger/public-v2.json`

**Output**:
- `source/consolidated/filtered-public-apis.json` - Filtered operations

### Step 6: Generate Consolidated Swagger Files

**Objective**: Create OpenAPI 3.0 swagger files

**Scripts**:
- `generate-consolidated-public-swagger.js` - Combined swagger (all operations)
- `generate-consolidated-swagger-by-version.js` - Version-split swaggers (v1/v2)

**Template Reference**: Uses `public-v2.json` for:
- OpenAPI 3.0 structure
- OAuth 2.0 security schemes
- Server configuration
- Info section metadata

**Outputs**:
- `output/swaggers/consolidated-public-swagger.json` - All operations (JSON)
- `output/swaggers/consolidated-public-swagger.yaml` - All operations (YAML)
- `output/swaggers/consolidated-public-swagger-v1.json` - V1 only (JSON)
- `output/swaggers/consolidated-public-swagger-v1.yaml` - V1 only (YAML)
- `output/swaggers/consolidated-public-swagger-v2.json` - V2 only (JSON)
- `output/swaggers/consolidated-public-swagger-v2.yaml` - V2 only (YAML)
- Statistics files for each

### Step 7: Generate API Report

**Objective**: Create markdown report with specified columns

**Script**: `generate-api-report.js`

**Report Columns**:
| Column | Description |
|--------|-------------|
| Tags | OpenAPI tags for categorization (comma-separated) |
| Operation ID | Unique operation identifier |
| Method | HTTP method (GET, POST, PUT, DELETE, etc.) |
| Endpoint | API endpoint path |
| Description | Operation description/summary |
| Scopes | OAuth 2.0 scopes required (comma-separated) |
| On Portal | "Yes" if exists in public-v2.json, "No" otherwise |
| Service | Source service name (e.g., Microservice.Recommend) |
| Source | Data source (Service Swagger, GitHub, Whitelist) |

**Output**:
- `output/reports/PUBLIC-API-REPORT.md` - Comprehensive markdown report

## Project Structure

```
Public-APIs/
├── .claude/skills/
│   └── api-report-run/
│       └── skill.md                # This file
├── tools/                          # Processing scripts
│   ├── generate-service-urls.js
│   ├── fetch-swagger-dual-version.js
│   ├── consolidate-and-filter.js   # Steps 2-5 combined
│   ├── generate-consolidated-public-swagger.js
│   ├── generate-consolidated-swagger-by-version.js
│   └── generate-api-report.js
├── source/                         # Source data
│   ├── config/
│   │   ├── service-repos.json      # 61 services to process
│   │   ├── service-urls.json       # 122 endpoints (generated)
│   │   └── api_white_list.txt      # 401 approved operations
│   ├── templates/
│   │   └── Public Swagger/
│   │       └── public-v2.json      # Template & portal reference
│   ├── swagger-batch/
│   │   └── swagger-results-dual-version-batch-*.json
│   ├── github/
│   │   ├── github-publicapi-operations.json
│   │   └── github-publicapi-operations-detailed.json
│   └── consolidated/
│       └── filtered-public-apis.json
└── output/
    ├── swaggers/                   # Generated swagger files
    │   ├── consolidated-public-swagger.json
    │   ├── consolidated-public-swagger.yaml
    │   ├── consolidated-public-swagger-v1.json
    │   ├── consolidated-public-swagger-v1.yaml
    │   ├── consolidated-public-swagger-v2.json
    │   ├── consolidated-public-swagger-v2.yaml
    │   └── *-stats.json files
    └── reports/
        └── PUBLIC-API-REPORT.md
```

## Script Details

### generate-service-urls.js
Generates service-urls.json with v1 and v2 endpoints for all services.

**Output**: 122 service URL entries

### fetch-swagger-dual-version.js
Fetches swagger from both v1 and v2 endpoints for each service.

**Parameters**:
- `batchSize` - Number of endpoints per batch (recommended: 20)
- `startIndex` - Starting index in service-urls.json

**Example**: `node fetch-swagger-dual-version.js 20 0` processes endpoints 0-19

### consolidate-and-filter.js
**Combines Steps 2-5**:
1. Loads all swagger batch files
2. Consolidates into single swagger
3. Extracts [PublicApi] operations from GitHub
4. Reads API Gateway whitelist
5. Filters to only include allowed operations
6. Marks "On Portal" status

**Key Logic**:
```javascript
// Operation is included if:
if (githubPublicApiOps.includes(operationId) ||
    whitelistOps.includes(operationId)) {
  // Include in filtered output
  operation.onPortal = publicV2Ops.includes(operationId);
}
```

### generate-consolidated-public-swagger.js
Generates combined swagger file with all operations.

**References**: `public-v2.json` for structure, security schemes, servers

### generate-consolidated-swagger-by-version.js
Splits operations by version (v1/v2) and generates separate swagger files.

### generate-api-report.js
Generates markdown table with specified columns.

**Features**:
- Sorted by Tags, then Operation ID
- All columns populated from filtered data
- "On Portal" derived from public-v2.json presence
- OAuth scopes included and formatted

## Key Features

### Accurate Filtering
Only includes operations that are:
- **Explicitly marked as Public**: `[PublicApi]` attribute in GitHub, OR
- **Approved in API Gateway**: Listed in api_white_list.txt

This ensures no internal/private APIs leak into public documentation.

### Dual-Version Support
- Fetches BOTH v1 AND v2 for complete coverage
- Version information preserved throughout pipeline
- Separate v1/v2 swagger files generated

### Template-Based Generation
Uses `public-v2.json` as authoritative template for:
- OpenAPI 3.0 specification structure
- OAuth 2.0 security configuration
- Server URLs and metadata
- Operation formatting standards

### Portal Status Tracking
Every operation marked with "On Portal" status:
- **Yes**: Operation exists in public-v2.json (on developer portal)
- **No**: Operation discovered from services but not documented on portal

This helps identify gaps in developer portal documentation.

### OAuth Scope Extraction
OAuth scopes extracted directly from swagger security requirements:
- Parsed from service swagger files
- Included in report for each operation
- Consolidated into swagger security definitions

## Prerequisites

- Node.js installed
- GitHub CLI (`gh`) authenticated with intelliflo organization access
- Network access to Intelliflo service swagger endpoints (https://microservice-*.sys-ie-04.intelliflo.systems)
- Access to Intelliflo GitHub repositories

## Quick Update (Using Existing Data)

To regenerate reports/swaggers without re-fetching:

```bash
cd C:/work/Public-APIs/tools

# Re-run filtering and generation (Steps 5-7)
node consolidate-and-filter.js
node generate-consolidated-public-swagger.js
node generate-consolidated-swagger-by-version.js
node generate-api-report.js
```

**Duration**: ~10-15 seconds

## Troubleshooting

### Issue: GitHub API Rate Limiting
**Symptom**: `extract-github-public-apis.js` fails with 403 errors

**Solution**:
- Ensure `gh` CLI is authenticated: `gh auth status`
- `gh` provides 5,000 requests/hour vs 60 for unauthenticated

### Issue: Service Swagger 404/503
**Symptom**: Many services return HTTP 404 or 503

**Solution**:
- Expected behavior - not all services have both v1 and v2
- Dual-version approach ensures we get whichever is available
- Check service is deployed to sys-ie-04 environment

### Issue: No [PublicApi] Operations Found
**Symptom**: github-publicapi-operations.json is empty or has few entries

**Solution**:
- Verify GitHub CLI has access to Intelliflo organization
- Check service-repos.json contains correct repository names
- Some services may not use [PublicApi] attribute (rely on whitelist instead)

### Issue: Filtering Removes Too Many Operations
**Symptom**: Filtered output much smaller than expected

**Solution**:
- Review api_white_list.txt is up to date
- Run GitHub extraction to get latest [PublicApi] operations
- Check operation IDs match exactly (case-sensitive)

## Maintenance Schedule

**Weekly (Quick Update)**:
- Re-run consolidation and generation using existing data
- Duration: ~10-15 seconds
```bash
node consolidate-and-filter.js
node generate-consolidated-public-swagger.js
node generate-consolidated-swagger-by-version.js
node generate-api-report.js
```

**Monthly (Full Regeneration)**:
- Re-fetch all service swaggers
- Re-extract GitHub [PublicApi] operations
- Full consolidation and generation
- Duration: ~2-3 minutes
```bash
# Run full workflow (all steps)
```

**On-Demand**:
- After major service deployments
- After API changes or new public endpoints
- When API Gateway whitelist is updated
- When [PublicApi] attributes are added/changed

## Expected Output Statistics

**Filtered Operations**: ~400-600
- Depends on current state of [PublicApi] attributes and whitelist
- Significantly smaller than total swagger operations (~1,800)
- This is intentional - only truly public APIs included

**Version Distribution**:
- V1 Operations: ~100-200 (legacy)
- V2 Operations: ~300-400 (current)

**Portal Coverage**:
- On Portal: ~390 operations
- Not on Portal: Remainder (these are candidates for documentation)

**OAuth Scopes**:
- Unique Scopes: ~10-26
- Operations with Scopes: ~60-80% (depends on service coverage)

## Related Files

- **Service List**: `source/config/service-repos.json`
- **API Whitelist**: `source/config/api_white_list.txt`
- **Portal Swagger**: `source/templates/Public Swagger/public-v2.json`
- **Generated Report**: `output/reports/PUBLIC-API-REPORT.md`
- **Generated Swagger**: `output/swaggers/consolidated-public-swagger.json`
