#!/usr/bin/env python3
import json
import subprocess
import re
import sys

# Repository files mapping
REPO_FILES = {
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
}

def get_file_content(repo, file_path):
    """Fetch file content from GitHub."""
    try:
        # Get download URL
        cmd = f'gh api "repos/Intelliflo/{repo}/contents/{file_path}" --jq .download_url'
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        if result.returncode != 0:
            print(f"Error getting URL for {repo}/{file_path}: {result.stderr}", file=sys.stderr)
            return None

        download_url = result.stdout.strip()

        # Download content
        cmd = f'curl -s "{download_url}"'
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        if result.returncode != 0:
            print(f"Error downloading {repo}/{file_path}: {result.stderr}", file=sys.stderr)
            return None

        return result.stdout
    except Exception as e:
        print(f"Exception processing {repo}/{file_path}: {str(e)}", file=sys.stderr)
        return None

def extract_public_apis(content, controller_name, repo_name):
    """Extract public API operations from controller content."""
    operations = []

    if not content:
        return operations

    lines = content.split('\n')
    i = 0

    while i < len(lines):
        line = lines[i]

        # Look for [PublicApi] attribute
        if '[PublicApi]' in line:
            operation_id = None
            route = None
            http_method = None

            # Look ahead for SwaggerOperation and Http method attributes
            j = i + 1
            while j < len(lines) and j < i + 20:  # Look ahead up to 20 lines
                next_line = lines[j]

                # Extract operation ID
                operation_match = re.search(r'OperationId\s*=\s*"([^"]+)"', next_line)
                if operation_match:
                    operation_id = operation_match.group(1)

                # Extract HTTP method and route
                http_match = re.search(r'\[Http(Get|Post|Put|Delete|Patch|Head)\("?([^")]+)"?\)\]', next_line)
                if http_match:
                    http_method = http_match.group(1)
                    route = http_match.group(2)

                # Stop if we hit a method declaration
                if re.search(r'(public|private|protected|internal)\s+(async\s+)?(Task|ActionResult|IActionResult)', next_line):
                    break

                j += 1

            # If we found both operation ID and route, add to results
            if operation_id and route:
                operations.append({
                    "repository": repo_name,
                    "controller": controller_name,
                    "operationId": operation_id,
                    "route": route,
                    "httpMethod": http_method
                })

        i += 1

    return operations

def main():
    all_operations = []

    for repo, files in REPO_FILES.items():
        print(f"\nProcessing repository: {repo}", file=sys.stderr)
        for file_path in files:
            controller_name = file_path.split('/')[-1].replace('.cs', '')
            print(f"  Processing: {controller_name}", file=sys.stderr)

            content = get_file_content(repo, file_path)
            if content:
                operations = extract_public_apis(content, controller_name, repo)
                all_operations.extend(operations)
                print(f"    Found {len(operations)} operations", file=sys.stderr)

    # Write results to JSON file
    output_file = 'C:/work/Public-APIs/github-publicapi-search.json'
    with open(output_file, 'w') as f:
        json.dump(all_operations, f, indent=2)

    print(f"\n\nTotal operations found: {len(all_operations)}", file=sys.stderr)
    print(f"Results written to: {output_file}", file=sys.stderr)

    # Print summary by repository
    print("\nSummary by repository:", file=sys.stderr)
    repo_counts = {}
    for op in all_operations:
        repo = op['repository']
        repo_counts[repo] = repo_counts.get(repo, 0) + 1

    for repo, count in sorted(repo_counts.items()):
        print(f"  {repo}: {count} operations", file=sys.stderr)

if __name__ == '__main__':
    main()
