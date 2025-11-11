#!/bin/bash

# Array to store results
results='['

# Monolith.Portfolio files
portfolio_files=(
    "src/Monolith.Portfolio/Plans/v2/Rest/PlanController.cs"
    "src/Monolith.Portfolio/Plans/v2/Rest/PlanStatusController.cs"
    "src/Monolith.Portfolio/Plans/v2/Rest/PlanValuationController.cs"
    "src/Monolith.Portfolio/v2/Controllers/LifecycleStatusController.cs"
    "src/Monolith.Portfolio/Plans/v2/Rest/LifeAssuredController.cs"
    "src/Monolith.Portfolio/v2/Controllers/PlanContributionController.cs"
    "src/Monolith.Portfolio/PlanTypes/v2/Rest/PlanTypeController.cs"
    "src/Monolith.Portfolio/v2/Controllers/FundProposalController.cs"
    "src/Monolith.Portfolio/Assets/v2/Rest/AssetsValuationController.cs"
    "src/Monolith.Portfolio/v2/Controllers/FundHoldingTransactionController.cs"
    "src/Monolith.Portfolio/LifeCycles/v2/Rest/LifecycleController.cs"
    "src/Monolith.Portfolio/v2/Controllers/FundHoldingController.cs"
    "src/Monolith.Portfolio/Plans/v2/Rest/UnMatchedPlansController.cs"
    "src/Monolith.Portfolio/Plans/v2/Rest/PlanPlanPurposeController.cs"
    "src/Monolith.Portfolio/PlanTransactions/v2/Controllers/TransactionController.cs"
    "src/Monolith.Portfolio/v2/Controllers/PlanBeneficiaryController.cs"
    "src/Monolith.Portfolio/Funds/v2/Controllers/FundSectorController.cs"
    "src/Monolith.Portfolio/Assets/v2/Rest/AssetController.cs"
    "src/Monolith.Portfolio/Plans/v2/Rest/PlanEventController.cs"
    "src/Monolith.Portfolio/v2/Controllers/PlanWithdrawalController.cs"
    "src/Monolith.Portfolio/Funds/v2/Controllers/FundController.cs"
    "src/Monolith.Portfolio/v2/Controllers/AdvisersController.cs"
    "src/Monolith.Portfolio/Funds/v2/Controllers/FundProviderController.cs"
    "src/Monolith.Portfolio/v2/Controllers/PortfolioModelController.cs"
)

for file in "${portfolio_files[@]}"; do
    echo "Processing Monolith.Portfolio: $file" >&2
    gh api "repos/Intelliflo/Monolith.Portfolio/contents/$file" --jq '.download_url' | xargs curl -s > /tmp/temp_controller.cs
    
    controller_name=$(basename "$file" .cs)
    
    # Extract methods with [PublicApi] attribute
    awk '
        /\[PublicApi\]/ { public_api = 1; next }
        public_api && /\[SwaggerOperation\(OperationId = "/ {
            match($0, /OperationId = "([^"]+)"/, arr)
            operation_id = arr[1]
        }
        public_api && /\[Http(Get|Post|Put|Delete|Patch|Head)\(/ {
            match($0, /\[Http[A-Za-z]+\("?([^")]+)"?\)/, arr)
            route = arr[1]
            if (operation_id != "" && route != "") {
                printf "{\"repository\":\"Monolith.Portfolio\",\"controller\":\"'"$controller_name"'\",\"operationId\":\"%s\",\"route\":\"%s\"},\n", operation_id, route
                operation_id = ""
                route = ""
            }
            public_api = 0
        }
        public_api && /{/ { public_api = 0 }
    ' /tmp/temp_controller.cs
done

