# Source Folder Organization

## New Structure

```
source/
├── templates/              # Template swagger files
│   ├── Public Swagger/    # Public swagger v2 from developer portal
│   │   └── public-v2.json
│   └── public-v2-operations.json
├── scopes/                # Scope extraction files
│   ├── public-v2-scopes.json
│   └── tag-to-scope-mapping.json
├── swagger-batch/         # Fetched swagger files from services
│   └── swagger-results-fallback-batch-*.json
├── github/                # GitHub source code extractions
│   ├── github-publicapi-search.json
│   ├── operation-to-controller-map-complete.json
│   └── operation-to-controller-map-batch-*.json
├── config/                # Configuration files
│   ├── service-repos.json
│   ├── service-urls.json
│   ├── api_white_list.txt
│   └── documentation_ignore.txt
└── consolidated/          # Final consolidated data
    └── all-public-apis-with-fallback.json
```

## Path Mappings (Old → New)

| Old Path | New Path |
|----------|----------|
| `../source/Public Swagger/public-v2.json` | `../source/templates/Public Swagger/public-v2.json` |
| `../source/public-v2-operations.json` | `../source/templates/public-v2-operations.json` |
| `../source/public-v2-scopes.json` | `../source/scopes/public-v2-scopes.json` |
| `../source/tag-to-scope-mapping.json` | `../source/scopes/tag-to-scope-mapping.json` |
| `../source/swagger-results-fallback-batch-*.json` | `../source/swagger-batch/swagger-results-fallback-batch-*.json` |
| `../source/github-publicapi-search.json` | `../source/github/github-publicapi-search.json` |
| `../source/operation-to-controller-map-complete.json` | `../source/github/operation-to-controller-map-complete.json` |
| `../source/github-controller-scopes.json` | `../source/github/github-controller-scopes.json` |
| `../source/service-repos.json` | `../source/config/service-repos.json` |
| `../source/service-urls.json` | `../source/config/service-urls.json` |
| `../source/api_white_list.txt` | `../source/config/api_white_list.txt` |
| `../source/documentation_ignore.txt` | `../source/config/documentation_ignore.txt` |
| `../source/all-public-apis-with-fallback.json` | `../source/consolidated/all-public-apis-with-fallback.json` |
