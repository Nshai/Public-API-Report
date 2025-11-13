# Workflow Updates - V1 API Gateway Whitelist Support

## Summary of Changes

The Public API workflow has been enhanced to support **version-specific API Gateway whitelists**, enabling proper filtering of both v1 and v2 operations.

## New Features

### 1. V1 API Gateway Whitelist

**New File**: `source/config/api_white_list_v1.txt`
- Contains 264 operation IDs from v1 API Gateway definitions
- Fetched from: `https://github.com/Intelliflo/aws-apigateway-definitions/tree/master/v1/swagger`

**V1 Whitelist Breakdown**:
- accounts: 26 operations
- brand: 7 operations
- clientstorage: 15 operations
- crm: 81 operations
- factfind: 41 operations
- portfolio: 94 operations

### 2. V1 API Gateway Swagger Files

**New Folder**: `source/config/v1-api-gateway-swaggers/`

Contains the original OpenAPI 2.0 swagger files from API Gateway v1:
- `accounts.json` (99 KB)
- `brand.json` (24 KB)
- `clientstorage.json` (47 KB)
- `crm.json` (263 KB)
- `factfind.json` (135 KB)
- `portfolio.json` (415 KB)

### 3. Version-Specific Filtering Logic

**Updated Script**: `tools/consolidate-and-filter.js`

The filtering logic now uses version-specific whitelists:
```
For v1 operations:
  Include IF in api_white_list_v1.txt OR has [PublicApi] attribute

For v2 operations:
  Include IF in api_white_list.txt OR has [PublicApi] attribute
```

### 4. New Utility Scripts

**`tools/fetch-v1-api-gateway-whitelist.js`**
- Fetches v1 swagger files from GitHub
- Extracts operation IDs
- Generates `api_white_list_v1.txt`

**`tools/save-v1-api-gateway-swaggers.js`**
- Downloads complete v1 swagger files from GitHub
- Saves to `source/config/v1-api-gateway-swaggers/`

## Updated Statistics

### Before (v2 whitelist only):
- Total Public APIs: 387
- V1: 0 (no v1 filtering)
- V2: 387

### After (v1 + v2 whitelists):
- **Total Public APIs: 540** (+153)
- **V1: 153** operations from v1 whitelist
- **V2: 387** operations from v2 whitelist

### Swagger File Statistics:

**Combined Swagger** (`consolidated-public-swagger.json`):
- 540 operations across 295 paths
- 86 tags
- 7 OAuth scopes

**V1 Swagger** (`consolidated-public-swagger-v1.json`):
- 153 operations across 98 paths
- 27 tags
- 0 OAuth scopes (v1 didn't use OAuth)

**V2 Swagger** (`consolidated-public-swagger-v2.json`):
- 387 operations across 211 paths
- 68 tags
- 7 OAuth scopes

## Updated Workflow

### Full Workflow (with v1 whitelist updates):

```bash
cd C:/work/Public-APIs/tools

# STEP 0 (Optional): Update v1 whitelist from GitHub
node fetch-v1-api-gateway-whitelist.js
node save-v1-api-gateway-swaggers.js

# STEP 1: Generate service URLs and fetch all swaggers
node generate-service-urls.js
node fetch-swagger-dual-version.js 20 0
node fetch-swagger-dual-version.js 20 20
node fetch-swagger-dual-version.js 20 40
node fetch-swagger-dual-version.js 20 60
node fetch-swagger-dual-version.js 20 80
node fetch-swagger-dual-version.js 20 100
node fetch-swagger-dual-version.js 2 120

# STEP 2-5: Consolidate and filter (now with version-specific logic)
node consolidate-and-filter.js

# STEP 6-7: Generate outputs
node generate-consolidated-public-swagger.js
node generate-consolidated-swagger-by-version.js
node generate-api-report.js
```

## Examples of V1 Operations Now Included

### Microservice.Brand (v1):
- ListBrands
- ListGroupBrands
- CreateGroupBrand
- UpdateGroupBrand
- DeleteGroupBrand
- GetGroupBrand
- GetGroupBrandDomain

### Monolith.Portfolio (v1):
- CreateClient
- UpdateClient
- GetClient
- ListClientAccounts
- CreateClientAccount
- And ~89 more...

### Monolith.Crm (v1):
- GetContact
- CreateContact
- UpdateContact
- ListTasks
- CreateTask
- And ~76 more...

## Maintenance

### When to Update V1 Whitelist

Run these scripts when:
- V1 API Gateway definitions change in GitHub
- New v1 operations added to API Gateway
- V1 services are updated

```bash
cd C:/work/Public-APIs/tools
node fetch-v1-api-gateway-whitelist.js
node save-v1-api-gateway-swaggers.js
```

**Duration**: ~5-10 seconds

Then re-run the consolidation workflow to regenerate outputs.

## Files Modified

1. `tools/consolidate-and-filter.js` - Added version-specific filtering
2. `source/config/api_white_list_v1.txt` - NEW: V1 whitelist
3. `source/config/v1-api-gateway-swaggers/` - NEW: V1 swagger files folder

## Files Created

1. `tools/fetch-v1-api-gateway-whitelist.js` - NEW
2. `tools/save-v1-api-gateway-swaggers.js` - NEW
3. `tools/consolidate-and-filter.js.backup` - Backup of old version
4. `tools/consolidate-and-filter.js.old` - Another backup

## Verification

To verify v1 operations are included:

```bash
# Check v1 whitelist
cd C:/work/Public-APIs/source/config
wc -l api_white_list_v1.txt
# Should show: 264

# Check filtered output includes v1 operations
cd C:/work/Public-APIs/source/consolidated
grep -c '"swaggerVersion": "v1"' filtered-public-apis.json
# Should show: 153

# Check v1 swagger file
cd C:/work/Public-APIs/output/swaggers
jq '.paths | length' consolidated-public-swagger-v1.json
# Should show: 98
```

## Impact

This update ensures that:
1. ✅ **V1 public APIs are properly documented** - Previously only v2 was filtered
2. ✅ **API Gateway v1 definitions are authoritative** - Uses actual AG definitions
3. ✅ **Version-specific filtering** - v1 and v2 operations filtered correctly
4. ✅ **Complete coverage** - All public APIs (v1 + v2) now included

## Questions?

See the updated documentation in:
- `.claude/skills/api-report-run/skill.md` - Workflow documentation
- `README.md` - Project overview and structure
