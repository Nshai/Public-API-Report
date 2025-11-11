# Intelliflo Public API Report Generator

Comprehensive tool for generating reports of all Intelliflo Public APIs by consolidating data from multiple sources.

## Project Structure

```
Public-APIs/
├── tools/              # JavaScript tools and scripts
├── source/             # Source data files (JSON, TXT)
├── output/             # Generated reports (MD files)
└── Public Swagger/     # Public swagger documentation
```

### Folders

**tools/** - All JavaScript processing scripts
- `fetch-swagger-with-fallback.js` - Fetches swagger docs with v1/v2 fallback
- `consolidate-fallback-results.js` - Main consolidation script
- `generate-final-report-with-tags-first.js` - Report generator
- `find-unmatched-whitelist.js` - Whitelist validation tool
- Other utility scripts for data processing

**source/** - Source data and intermediate files
- `all-public-apis-with-fallback.json` - Main consolidated API dataset (1,565 APIs)
- `service-repos.json` - List of service repositories
- `service-urls.json` - Generated service URLs
- `public-v2-operations.json` - Developer portal APIs
- `documentation_ignore.txt` - Hidden public APIs list
- `api_white_list.txt` - API Gateway whitelist (401 operations)
- `github-publicapi-search.json` - GitHub search results
- `swagger-results-fallback-batch-*.json` - Swagger fetch results by batch

**output/** - Generated reports
- `FINAL-API-REPORT.md` - Complete API analysis report
- `WHITELIST-ANALYSIS.md` - Whitelist validation analysis

## Quick Start

### Full Report Generation

```bash
cd C:\work\Public-APIs

# Step 1: Fetch swagger docs (from tools directory)
cd tools
node fetch-swagger-with-fallback.js 10 0

# Step 2: Consolidate data
node consolidate-fallback-results.js

# Step 3: Generate reports
node generate-final-report-with-tags-first.js
node find-unmatched-whitelist.js
```

### Quick Update (Using Existing Data)

```bash
cd C:\work\Public-APIs\tools

# Re-consolidate and regenerate
node consolidate-fallback-results.js
node generate-final-report-with-tags-first.js
```

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

## Current Statistics

- **Total Unique Public APIs**: 1,565
- **APIs on Developer Portal**: 391
- **Hidden Public APIs**: 1,174
- **APIs in API Gateway Whitelist**: 395 (98.5% match rate)
- **APIs with Tags**: 1,565
- **APIs with Service Information**: 1,231

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

- **Skill File**: `~/.claude/skills/api-report-generator/skill.md`
- **Main Report**: `output/FINAL-API-REPORT.md`
- **Whitelist Analysis**: `output/WHITELIST-ANALYSIS.md`

## License

Internal Intelliflo tool - not for public distribution.
