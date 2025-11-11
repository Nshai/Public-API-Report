const { execSync } = require('child_process');
const fs = require('fs');

// Repository files mapping
const REPO_FILES = {
    "Monolith.Portfolio": [
        "src/Monolith.Portfolio/Plans/v2/Rest/PlanController.cs",
        "src/Monolith.Portfolio/Plans/v2/Rest/PlanStatusController.cs",
        "src/Monolith.Portfolio/Plans/v2/Rest/PlanValuationController.cs",
        "src/Monolith.Portfolio/v2/Controllers/LifecycleStatusController.cs",
        "src/Monolith.Portfolio/Plans/v2/Rest/LifeAssuredController.cs",
        "src/Monolith.Portfolio/v2/Controllers/PlanContributionController.cs",
        "src/Monolith.Portfolio/PlanTypes/v2/Rest/PlanTypeController.cs",
        "src/Monolith.Portfolio/v2/Controllers/FundProposalController.cs",
        "src/Monolith.Portfolio/Assets/v2/Rest/AssetsValuationController.cs",
        "src/Monolith.Portfolio/v2/Controllers/FundHoldingTransactionController.cs",
        "src/Monolith.Portfolio/LifeCycles/v2/Rest/LifecycleController.cs",
        "src/Monolith.Portfolio/v2/Controllers/FundHoldingController.cs",
        "src/Monolith.Portfolio/Plans/v2/Rest/UnMatchedPlansController.cs",
        "src/Monolith.Portfolio/Plans/v2/Rest/PlanPlanPurposeController.cs",
        "src/Monolith.Portfolio/PlanTransactions/v2/Controllers/TransactionController.cs",
        "src/Monolith.Portfolio/v2/Controllers/PlanBeneficiaryController.cs",
        "src/Monolith.Portfolio/Funds/v2/Controllers/FundSectorController.cs",
        "src/Monolith.Portfolio/Assets/v2/Rest/AssetController.cs",
        "src/Monolith.Portfolio/Plans/v2/Rest/PlanEventController.cs",
        "src/Monolith.Portfolio/v2/Controllers/PlanWithdrawalController.cs",
        "src/Monolith.Portfolio/Funds/v2/Controllers/FundController.cs",
        "src/Monolith.Portfolio/v2/Controllers/AdvisersController.cs",
        "src/Monolith.Portfolio/Funds/v2/Controllers/FundProviderController.cs",
        "src/Monolith.Portfolio/v2/Controllers/PortfolioModelController.cs",
    ],
    "Monolith.Crm": [
        "src/Monolith.Crm/v2/Controllers/TaskController.cs",
        "src/Monolith.Crm/v2/Controllers/ClientController.cs",
        "src/Monolith.Crm/v2/Controllers/ActivityPriorityController.cs",
        "src/Monolith.Crm/v2/Controllers/ActivityOutcomeController.cs",
        "src/Monolith.Crm/v2/Controllers/OpportunityStatusController.cs",
        "src/Monolith.Crm/v2/Controllers/AppointmentController.cs",
        "src/Monolith.Crm/v2/Controllers/ClientRelationshipController.cs",
        "src/Monolith.Crm/v2/Controllers/LeadRelationshipController.cs",
        "src/Monolith.Crm/v2/Controllers/ClientMarketingPreferencesController.cs",
        "src/Monolith.Crm/v2/Controllers/ClientTagController.cs",
        "src/Monolith.Crm/v2/Controllers/NeedsAndPrioritiesQuestionsController.cs",
        "src/Monolith.Crm/v2/Controllers/TenantController.cs",
        "src/Monolith.Crm/v2/Controllers/CampaignTypeController.cs",
        "src/Monolith.Crm/v2/Controllers/ServiceCaseController.cs",
        "src/Monolith.Crm/v2/Controllers/OpportunityTypeController.cs",
        "src/Monolith.Crm/v2/Controllers/ClientOpportunityController.cs",
        "src/Monolith.Crm/v2/Controllers/ProductProviderController.cs",
        "src/Monolith.Crm/v2/Controllers/AdviserController.cs",
        "src/Monolith.Crm/v2/Controllers/LeadController.cs",
        "src/Monolith.Crm/v2/Controllers/LeadContactDetailsController.cs",
        "src/Monolith.Crm/v2/Controllers/ContactDetailsController.cs",
        "src/Monolith.Crm/v2/Controllers/UserController.cs",
        "src/Monolith.Crm/v2/Controllers/ClientAddressController.cs",
        "src/Monolith.Crm/v2/Controllers/EmailController.cs",
        "src/Monolith.Crm/v2/Controllers/OpportunityPlanController.cs",
        "src/Monolith.Crm/v2/Controllers/ClientVulnerabilityController.cs",
        "src/Monolith.Crm/v2/Controllers/NeedsAndPrioritiesAnswersController.cs",
        "src/Monolith.Crm/v2/Controllers/TagController.cs",
        "src/Monolith.Crm/v2/Controllers/OpportunityCampaignController.cs",
        "src/Monolith.Crm/v2/Controllers/ActivityCategoryController.cs",
        "src/Monolith.Crm/v2/Controllers/OpportunityPropositionController.cs",
        "src/Monolith.Crm/v2/Controllers/LeadOpportunityController.cs",
        "src/Monolith.Crm/v2/Controllers/LeadTagController.cs",
        "src/Monolith.Crm/v2/Controllers/RelationshipTypeController.cs",
        "src/Monolith.Crm/v2/Controllers/ClientSegmentController.cs",
        "src/Monolith.Crm/v2/Controllers/RequirementController.cs",
        "src/Monolith.Crm/v2/Controllers/UserDiaryClassificationController.cs",
        "src/Monolith.Crm/v2/Controllers/ServiceCaseToPlanController.cs",
        "src/Monolith.Crm/v2/Controllers/PersonalContactsController.cs",
        "src/Monolith.Crm/v2/Controllers/GroupController.cs",
        "src/Monolith.Crm/v2/Controllers/LeadAddressController.cs",
        "src/Monolith.Crm/v2/Controllers/LeadMarketingPreferencesController.cs",
        "src/Monolith.Crm/v2/Controllers/AdviserContactDetailsController.cs",
        "src/Monolith.Crm/v2/Controllers/ClientSearchController.cs",
        "src/Monolith.Crm/v2/Controllers/ActivityTypeController.cs",
        "src/Monolith.Crm/v2/Controllers/CampaignChannelController.cs",
        "src/Monolith.Crm/v2/Controllers/AdviserAddressController.cs",
    ],
    "Monolith.Valuation": [
        "src/Monolith.Valuation/v2/Controllers/BatchResultsController.cs",
        "src/Monolith.Valuation/v2/Controllers/BatchController.cs",
    ],
    "Microservice.ProviderIntegration": [
        "src/Microservice.ProviderIntegration/v2/Controllers/AccountController.cs",
        "src/Microservice.ProviderIntegration/v2/Controllers/ProviderTenantHierarchyController.cs",
    ],
    "Monolith.Atr": [
        "src/Monolith.Atr/v2/New/Controllers/AtrTemplateController.cs",
        "src/Monolith.Atr/v2/New/Controllers/AtrController.cs",
        "src/Monolith.Atr/v2/New/Controllers/AtrInstalledAppTemplateController.cs",
        "src/Monolith.Atr/v2/New/Controllers/AtrProviderTemplateController.cs",
    ],
    "Monolith.FactFind": [
        "src/Monolith.FactFind/v2/Controllers/IncomeController.cs",
        "src/Monolith.FactFind/v2/Controllers/NotesController.cs",
        "src/Monolith.FactFind/v2/Controllers/DependantController.cs",
        "src/Monolith.FactFind/v2/Controllers/EmploymentController.cs",
        "src/Monolith.FactFind/v2/Controllers/ExpenditureController.cs",
    ],
    "Microservice.Requirement": [
        "src/Microservice.Requirement/v2/Controllers/ClientEnrollmentSummaryController.cs",
        "src/Microservice.Requirement/v2/Controllers/GoalAllocationController.cs",
        "src/Microservice.Requirement/v2/Controllers/ObjectiveCategoryController.cs",
        "src/Microservice.Requirement/v2/Controllers/LeadObjectivesController.cs",
        "src/Microservice.Requirement/v2/Controllers/ClientObjectivesController.cs",
    ],
};

function getFileContent(repo, filePath) {
    try {
        // Get download URL
        const urlCmd = `gh api "repos/Intelliflo/${repo}/contents/${filePath}" --jq .download_url`;
        const downloadUrl = execSync(urlCmd, { encoding: 'utf-8' }).trim();

        // Download content
        const contentCmd = `curl -s "${downloadUrl}"`;
        const content = execSync(contentCmd, { encoding: 'utf-8', maxBuffer: 10 * 1024 * 1024 });

        return content;
    } catch (error) {
        console.error(`Error getting content for ${repo}/${filePath}: ${error.message}`);
        return null;
    }
}

function extractRouteConstants(content) {
    const routeConstants = {};
    const lines = content.split('\n');

    for (const line of lines) {
        // Match const string definitions like: private const string SingleRoute = "clients/{clientId:me}/plans/{planId}";
        const match = line.match(/private\s+const\s+string\s+(\w+)\s*=\s*"([^"]+)"/);
        if (match) {
            routeConstants[match[1]] = match[2];
        }
    }

    return routeConstants;
}

function resolveRoute(route, routeConstants) {
    // If route is a variable name, look it up in constants
    if (routeConstants[route]) {
        return routeConstants[route];
    }
    return route;
}

function extractPublicApis(content, controllerName, repoName) {
    const operations = [];

    if (!content) {
        return operations;
    }

    // First, extract all route constants
    const routeConstants = extractRouteConstants(content);

    const lines = content.split('\n');

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Look for [PublicApi] attribute
        if (line.includes('[PublicApi]')) {
            let operationId = null;
            let route = null;
            let httpMethod = null;

            // Look ahead for SwaggerOperation and Http method attributes
            for (let j = i + 1; j < Math.min(lines.length, i + 20); j++) {
                const nextLine = lines[j];

                // Extract operation ID
                const operationMatch = nextLine.match(/OperationId\s*=\s*"([^"]+)"/);
                if (operationMatch) {
                    operationId = operationMatch[1];
                }

                // Extract HTTP method and route
                const httpMatch = nextLine.match(/\[Http(Get|Post|Put|Delete|Patch|Head)\(([^)]+)\)\]/);
                if (httpMatch) {
                    httpMethod = httpMatch[1];
                    // Clean up the route - remove quotes if present
                    route = httpMatch[2].replace(/"/g, '').trim();
                }

                // Stop if we hit a method declaration
                if (nextLine.match(/(public|private|protected|internal)\s+(async\s+)?(Task|ActionResult|IActionResult)/)) {
                    break;
                }
            }

            // If we found both operation ID and route, add to results
            if (operationId && route) {
                // Resolve route if it's a constant reference
                const resolvedRoute = resolveRoute(route, routeConstants);

                operations.push({
                    repository: repoName,
                    controller: controllerName,
                    operationId: operationId,
                    route: resolvedRoute,
                    httpMethod: httpMethod
                });
            }
        }
    }

    return operations;
}

async function main() {
    const allOperations = [];

    for (const [repo, files] of Object.entries(REPO_FILES)) {
        console.error(`\nProcessing repository: ${repo}`);

        for (const filePath of files) {
            const controllerName = filePath.split('/').pop().replace('.cs', '');
            console.error(`  Processing: ${controllerName}`);

            const content = getFileContent(repo, filePath);
            if (content) {
                const operations = extractPublicApis(content, controllerName, repo);
                allOperations.push(...operations);
                console.error(`    Found ${operations.length} operations`);
            }
        }
    }

    // Write results to JSON file
    const outputFile = 'C:/work/Public-APIs/github-publicapi-search.json';
    fs.writeFileSync(outputFile, JSON.stringify(allOperations, null, 2));

    console.error(`\n\nTotal operations found: ${allOperations.length}`);
    console.error(`Results written to: ${outputFile}`);

    // Print summary by repository
    console.error('\nSummary by repository:');
    const repoCounts = {};
    allOperations.forEach(op => {
        repoCounts[op.repository] = (repoCounts[op.repository] || 0) + 1;
    });

    Object.keys(repoCounts).sort().forEach(repo => {
        console.error(`  ${repo}: ${repoCounts[repo]} operations`);
    });
}

main().catch(error => {
    console.error('Error:', error);
    process.exit(1);
});
