const { execSync } = require('child_process');
const fs = require('fs');
const { extractScopeFromAttribute } = require('./scope-utils');

console.log('=== EXTRACTING ALL CONTROLLER SCOPES AND OPERATIONS ===\n');

// Known repository files (from extract_apis.py)
const REPO_FILES_MANUAL = {
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
    const cmd = `gh api "repos/Intelliflo/${repo}/contents/${filePath}"`;
    const result = execSync(cmd, { encoding: 'utf8', timeout: 15000 });
    const data = JSON.parse(result);

    if (!data.download_url) {
      return null;
    }

    const contentCmd = `curl -s "${data.download_url}"`;
    const content = execSync(contentCmd, { encoding: 'utf8', timeout: 15000 });

    return content;
  } catch (error) {
    return null;
  }
}

function extractOperationIdsAndScope(content, controllerName) {
  if (!content) return null;

  const lines = content.split('\n');
  const operations = [];
  let controllerScope = null;

  // First, find the controller-level [Scope] attribute
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.match(/\[Scope\s*\(/i)) {
      for (let j = i + 1; j < Math.min(i + 5, lines.length); j++) {
        const nextLine = lines[j].trim();
        if (nextLine.includes('class') && nextLine.includes('Controller')) {
          controllerScope = extractScopeFromAttribute(line);
          break;
        }
      }
    }

    if (controllerScope) break;
  }

  // Find all [PublicApi] operations
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line === '[PublicApi]') {
      let operationId = null;

      for (let j = i + 1; j < Math.min(i + 20, lines.length); j++) {
        const nextLine = lines[j].trim();

        const opMatch = nextLine.match(/OperationId\s*=\s*"([^"]+)"/);
        if (opMatch) {
          operationId = opMatch[1];
          break;
        }

        if (nextLine.match(/(public|private|protected|internal)\s+(async\s+)?(Task|ActionResult|IActionResult)/)) {
          break;
        }
      }

      if (operationId) {
        operations.push(operationId);
      }
    }
  }

  return {
    controllerScope,
    operations
  };
}

async function main() {
  const results = [];
  let totalControllers = 0;
  let controllersWithScopes = 0;
  let totalOperations = 0;

  for (const [repo, files] of Object.entries(REPO_FILES_MANUAL)) {
    console.log(`\nProcessing ${repo}...`);

    for (const filePath of files) {
      totalControllers++;
      const controllerName = filePath.split('/').pop().replace('.cs', '');
      process.stdout.write(`  ${controllerName}... `);

      const content = getFileContent(repo, filePath);

      if (!content) {
        console.log('✗ Failed to fetch');
        continue;
      }

      const extracted = extractOperationIdsAndScope(content, controllerName);

      if (extracted && extracted.operations.length > 0) {
        console.log(`✓ ${extracted.operations.length} ops, scope: ${extracted.controllerScope || 'none'}`);

        if (extracted.controllerScope) controllersWithScopes++;
        totalOperations += extracted.operations.length;

        results.push({
          repository: repo,
          controller: controllerName,
          filePath: filePath,
          scope: extracted.controllerScope,
          operations: extracted.operations
        });
      } else {
        console.log('- No public operations');
      }

      // Small delay
      await new Promise(resolve => setTimeout(resolve, 200));
    }
  }

  // Ensure github directory exists
  if (!fs.existsSync('../source/github')) {
    fs.mkdirSync('../source/github', { recursive: true });
  }

  // Save results
  fs.writeFileSync('../source/github/operation-to-controller-map-complete.json', JSON.stringify(results, null, 2));

  console.log('\n=== SUMMARY ===\n');
  console.log(`Total controllers processed: ${totalControllers}`);
  console.log(`Controllers with scopes: ${controllersWithScopes}`);
  console.log(`Total operations mapped: ${totalOperations}`);
  console.log(`\nFile saved: source/github/operation-to-controller-map-complete.json`);
}

main().catch(console.error);
