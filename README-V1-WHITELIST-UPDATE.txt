====================================================================
IMPORTANT UPDATE: V1 API Gateway Whitelist Support Added
====================================================================

The workflow now supports VERSION-SPECIFIC API Gateway whitelists!

NEW FILES:
- source/config/api_white_list_v1.txt (264 v1 operation IDs)
- source/config/v1-api-gateway-swaggers/ (6 swagger files)
- tools/fetch-v1-api-gateway-whitelist.js
- tools/save-v1-api-gateway-swaggers.js

UPDATED:
- tools/consolidate-and-filter.js (version-specific filtering logic)

NEW STATISTICS:
- Total Public APIs: 540 (was 387)
  - V1: 153 operations
  - V2: 387 operations
- V1 Whitelist: 264 operation IDs from API Gateway
- V2 Whitelist: 401 operation IDs from API Gateway

WHAT CHANGED:
✅ V1 operations now properly filtered using v1 whitelist
✅ V2 operations still filtered using v2 whitelist  
✅ Version information preserved throughout pipeline
✅ All v1 Brand, Portfolio, CRM, etc. operations now included

For complete details, see: WORKFLOW-UPDATES.md

====================================================================
