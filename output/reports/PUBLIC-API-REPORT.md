# Public API Report

Generated: 2025-11-18T12:36:42.931Z

## Summary

- **Total Public APIs**: 571
- **On Developer Portal**: 343
- **Not on Portal**: 228
- **With OAuth Scopes**: 23

## API Inventory

| Tags | Operation ID | Method | Endpoint | Description | Scopes | On Portal | Service | Source |
|------|-------------|--------|----------|-------------|--------|-----------|---------|--------|
| activitycategories | GetActivityCategory | GET | /v2/activities/categories/{categoryId} | Returns a given activity category. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activitycategories | ListActivityCategories | GET | /v2/activities/categories | Returns a list of activity categories. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activityoutcomes | GetActivityOutcome | GET | /v2/activities/outcomes/{outcomeId} | Returns a given activity outcome. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activityoutcomes | ListActivityOutcomes | GET | /v2/activities/outcomes | Returns a list of activity outcomes. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activitypriorities | GetActivityPriority | GET | /v2/activities/priorities/{priorityId} | Returns a given activity priority. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activitypriorities | ListActivityPriorities | GET | /v2/activities/priorities | Returns a list of activity priorities. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activitytypes | GetActivityType | GET | /v2/activities/types/{typeId} | Returns a given activity type. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activitytypes | ListActivityTypes | GET | /v2/activities/types | Returns a list of activity types. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | CreateClientAddress | POST | /v2/clients/{clientId}/addresses | Create an address |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | CreateLeadAddress | POST | /v2/leads/{leadId}/addresses | Creates a new Address for the given Lead. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | DeleteClientAddress | DELETE | /v2/clients/{clientId}/addresses/{addressId} | Deletes an existing Address for the given Client. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | DeleteLeadAddress | DELETE | /v2/leads/{leadId}/addresses/{addressId} | Deletes an existing Address for the given Lead. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | GetAdviserAddress | GET | /v2/advisers/{adviserId}/addresses/{addressId} | Retrieves the Address for the given addressId. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | GetClientAddress | GET | /v2/clients/{clientId}/addresses/{addressId} | Get a client's address by id. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | GetLeadAddress | GET | /v2/leads/{leadId}/addresses/{addressId} | Retrieves the Address for the given addressId. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | ListAdviserAddresses | GET | /v2/advisers/{adviserId}/addresses | Returns a paged list of Address (AddressCollection) |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | ListClientAddresses | GET | /v2/clients/{clientId}/addresses | Returns a list of addresses for a client |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | ListLeadAddresses | GET | /v2/leads/{leadId}/addresses | Returns a paged list of Address (AddressCollection) |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | UpdateClientAddress | PUT | /v2/clients/{clientId}/addresses/{addressId} | Update an address |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | UpdateLeadAddress | PUT | /v2/leads/{leadId}/addresses/{addressId} | Updates an existing Address for the given Lead. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| advisers | AdviserExists | HEAD | /v2/advisers/{adviserId} | Checks if the adviser exists. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| advisers | GetAdviser | GET | /v2/advisers/{adviserId} | Returns an adviser for a given adviser. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| advisers | GetAdviser | GET | /v1/advisers/{partyId} | Get the specified Adviser |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| advisers | ListAdvisers | GET | /v2/advisers | Returns a list of advisers. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| advisers | ListGatedPlanTypesByAdviserId | GET | /v2/advisers/{adviserId}/planTypes | Returns a list of gated plan types based on adviser multi-tie configuration. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| appointments | CreateAppointment | POST | /v2/activities/appointments | Creates an appointment. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| appointments | DeleteAppointment | DELETE | /v2/activities/appointments/{appointmentId} | Deletes a given appointment. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| appointments | GetAppointment | GET | /v2/activities/appointments/{appointmentId} | Returns a given appointment. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| appointments | ListAppointment | GET | /v2/activities/appointments | Returns a list of appointments. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| appointments | UpdateAppointment | PUT | /v2/activities/appointments/{appointmentId} | Updates a given appointment. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| apps, beta | ExistInstalledApp | HEAD | /v2/installed_apps/{appId} | Checks if an installed app exists |  | Yes | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | GetInstalledApp | GET | /v2/installed_apps/{appId} | Returns an installed app |  | Yes | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | GetInstalledAppGroupSettings | GET | /v2/installed_apps/{appId}/group_settings/{groupId} | Returns group settings for a given installed app and group |  | Yes | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | GetInstalledAppUserSettings | GET | /v2/installed_apps/{appId}/user_settings/{userId} | Returns user settings for a given installed app and user |  | Yes | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | ListInstalledAppGroupSettings | GET | /v2/installed_apps/{appId}/group_settings | Returns a list of group settings for a given installed app |  | Yes | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | ListInstalledApps | GET | /v2/installed_apps | Returns a list of installed apps |  | Yes | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | ListInstalledAppUserSettings | GET | /v2/installed_apps/{appId}/user_settings | Returns a lists of user settings for a given installed app |  | Yes | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | UpdateInstalledAppGroupSettings | PUT | /v2/installed_apps/{appId}/group_settings/{groupId} | Updates group settings for a given installed app and group |  | Yes | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | UpdateInstalledAppUserSettings | PUT | /v2/installed_apps/{appId}/user_settings/{userId} | Updates user settings for a given installed app and user |  | Yes | Microservice.AppD | Service Swagger (Microservice.AppD) |
| assets | CreateClientAssets | POST | /v2/clients/{clientId}/assets | Creates the asset for a given client. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| assets | DeleteClientAsset | DELETE | /v2/clients/{clientId}/assets/{assetId} | Deletes the asset for a given client and asset. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| assets | GetClientAsset | GET | /v2/clients/{clientId}/assets/{assetId} | Returns the asset for a given client and asset. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| assets | ListClientAssets | GET | /v2/clients/{clientId}/assets | Returns a list of assets for the given client. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| assets | UpdateClientAsset | PUT | /v2/clients/{clientId}/assets/{assetId} | Updates the asset for a given client and asset. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| attitudetorisk | AcceptTenantProviderAtrTemplate | POST | /v2/installed_apps/atr_templates/{id}/accept | Allows a tenant to approve a third party ATR template, from an application the tenant has installed, |  | Yes | Monolith.Atr | Service Swagger (Monolith.Atr) |
| attitudetorisk | ActivateAtrTemplate | POST | /v2/attitudeToRisk/atr_templates/{templateId}/active | Activates/Deactivates a ATR template. |  | Yes | Monolith.Atr | Service Swagger (Monolith.Atr) |
| attitudetorisk | ActivateProviderAtrTemplate | POST | /v2/attitudeToRisk/apps/{appId}/atr_templates/{templateId}/activate | Activates or deactivates a third party provider template. Only active templates can be accepted by t |  | Yes | Monolith.Atr | Service Swagger (Monolith.Atr) |
| attitudetorisk | CreateAtrTemplate | POST | /v2/attitudeToRisk/atr_templates | Creates a new ATR template. |  | Yes | Monolith.Atr | Service Swagger (Monolith.Atr) |
| attitudetorisk | CreateClientAtr | POST | /v2/clients/{clientId}/attitudeToRisk | Submits a client ATR. |  | Yes | Monolith.Atr | Service Swagger (Monolith.Atr) |
| attitudetorisk | CreateProviderAtrTemplate | POST | /v2/attitudeToRisk/apps/{appId}/atr_templates | Creates a new 3rd party ATR template. |  | Yes | Monolith.Atr | Service Swagger (Monolith.Atr) |
| attitudetorisk | DeleteAtrTemplateV2 | DELETE | /v2/attitudeToRisk/atr_templates/{templateId} | Deletes an ATR template. |  | No | Monolith.Atr | Service Swagger (Monolith.Atr) |
| attitudetorisk | DeleteClientAtr | DELETE | /v2/clients/{clientId}/attitudeToRisk/{atrId} | Deletes a client's ATR. |  | Yes | Monolith.Atr | Service Swagger (Monolith.Atr) |
| attitudetorisk | GetAtrTemplateV2 | GET | /v2/attitudeToRisk/atr_templates/{templateId} | Retrieves an ATR template. |  | Yes | Monolith.Atr | Service Swagger (Monolith.Atr) |
| attitudetorisk | GetClientAtr | GET | /v2/clients/{clientId}/attitudeToRisk/{atrId} | Returns an ATR for a client. |  | Yes | Monolith.Atr | Service Swagger (Monolith.Atr) |
| attitudetorisk | GetProviderAtrTemplate | GET | /v2/attitudeToRisk/apps/{appId}/atr_templates/{templateId} | Retrieves details of a third party ATR template. |  | Yes | Monolith.Atr | Service Swagger (Monolith.Atr) |
| attitudetorisk | GetTenantProviderAtrTemplate | GET | /v2/installed_apps/atr_templates/{id} | Retrieves the details of an ATR template for the installed from a third party provider app. |  | Yes | Monolith.Atr | Service Swagger (Monolith.Atr) |
| attitudetorisk | ListAtrSystemCategories | GET | /v2/atr/system_categories | Retrieves a list of the ATR system categories. |  | No | Monolith.Atr | Service Swagger (Monolith.Atr) |
| attitudetorisk | ListAtrTemplatesV2 | GET | /v2/attitudeToRisk/atr_templates | Retrieves a list of all the ATR templates or those that match the filter provided. |  | Yes | Monolith.Atr | Service Swagger (Monolith.Atr) |
| attitudetorisk | ListClientAtrs | GET | /v2/clients/{clientId}/attitudeToRisk | Returns a list of the ATRs for a client. |  | Yes | Monolith.Atr | Service Swagger (Monolith.Atr) |
| attitudetorisk | ListProviderAtrTemplates | GET | /v2/attitudeToRisk/apps/{appId}/atr_templates | Returns a list of the ATR template details associated with a third party provider application. |  | Yes | Monolith.Atr | Service Swagger (Monolith.Atr) |
| attitudetorisk | ListTenantProviderAtrTemplates | GET | /v2/installed_apps/atr_templates | Retrieves a list of the ATR templates from the third party provider apps installed by the tenant. |  | Yes | Monolith.Atr | Service Swagger (Monolith.Atr) |
| attitudetorisk | PatchAtrTemplate | PATCH | /v2/attitudeToRisk/atr_templates/{templateId} | Updates an existing ATR template. |  | Yes | Monolith.Atr | Service Swagger (Monolith.Atr) |
| attitudetorisk | PatchClientAtr | PATCH | /v2/clients/{clientId}/attitudeToRisk/{atrId} | Updates an existing client ATR. |  | Yes | Monolith.Atr | Service Swagger (Monolith.Atr) |
| attitudetorisk | UpdateAtrTemplate | PUT | /v2/attitudeToRisk/atr_templates/{templateId} | Updates an existing ATR Template. |  | Yes | Monolith.Atr | Service Swagger (Monolith.Atr) |
| attitudetorisk | UpdateClientAtrResult | PUT | /v2/clients/{clientId}/attitudeToRisk/{atrId}/result | Update result for a client atr |  | Yes | Monolith.Atr | Service Swagger (Monolith.Atr) |
| beneficiaries | DeleteClientPlanBeneficiaries | DELETE | /v2/clients/{clientId}/plans/{planId}/beneficiaries | Deletes beneficiary or beneficiaries for a given plan. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| beneficiaries | ListClientPlansBeneficiaries | GET | /v2/clients/{clientId}/plans/{planId}/beneficiaries | Returns a list of beneficiaries for a given client and plan. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| beneficiaries | UpdateClientPlansBeneficiaries | PUT | /v2/clients/{clientId}/plans/{planId}/beneficiaries | Updates or creates the beneficiary for a given client and plan. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| brand | ListBrands | GET | /v1/brands | Get brand for either current user or non-authenticated one. |  | No | Microservice.Brand | Service Swagger (Microservice.Brand) |
| brands | GetGroupBrand | GET | /v1/groups/{groupId}/brands/{brandId} | Get a brand by id and groupId. |  | No | Microservice.Brand | Service Swagger (Microservice.Brand) |
| brands | ListGroupBrands | GET | /v1/groups/{groupId}/brands | Lists all brands for the specified group. |  | No | Microservice.Brand | Service Swagger (Microservice.Brand) |
| brands | ListUserMesBrands | GET | /v1/users/me/brands | [DEPRECATED] Find brands for the current user using any filters if provided. Use 'v1/brands' instead |  | No | Microservice.Brand | Service Swagger (Microservice.Brand) |
| brands | PatchGroupBrand | PATCH | /v1/groups/{groupId}/brands/{brandId} | Update brand |  | No | Microservice.Brand | Service Swagger (Microservice.Brand) |
| bulkvaluations | DeleteValuationBatch | DELETE | /v2/valuations/batches/{batchId} | Deletes an existing valuationbatch and undo any related valuations and transactions |  | Yes | Monolith.Valuation | Service Swagger (Monolith.Valuation) |
| bulkvaluations | EnqueueValuationBatch | POST | /v2/valuations/batches | Creates a new valuationbatch and enqueues it for importing |  | Yes | Monolith.Valuation | Service Swagger (Monolith.Valuation) |
| bulkvaluations | GetValuationBatch | GET | /v2/valuations/batches/{batchId} | Returns a single valuationbatch |  | Yes | Monolith.Valuation | Service Swagger (Monolith.Valuation) |
| bulkvaluations | ListValuationBatches | GET | /v2/valuations/batches | Returns a list of valuationbatch |  | Yes | Monolith.Valuation | Service Swagger (Monolith.Valuation) |
| bulkvaluations | ListValuationBatchResults | GET | /v2/valuations/batches/{batchId}/results | Returns the results for a single valuationbatch. |  | Yes | Monolith.Valuation | Service Swagger (Monolith.Valuation) |
| charges | CreateClientPlanCharge | POST | /v2/clients/{clientId}/plans/{planId}/charges | Creates a new charge for a client's plan. |  | Yes | Monolith.Charging | Service Swagger (Monolith.Charging) |
| charges | DeleteClientPlanCharge | DELETE | /v2/clients/{clientId}/plans/{planId}/charges/{chargeId} | Deletes an existing charge for a client's plan. |  | Yes | Monolith.Charging | Service Swagger (Monolith.Charging) |
| charges | GetClientPlanCharge | GET | /v2/clients/{clientId}/plans/{planId}/charges/{chargeId} | Returns a single charge for a client's plan. |  | Yes | Monolith.Charging | Service Swagger (Monolith.Charging) |
| charges | ListClientPlanCharges | GET | /v2/clients/{clientId}/plans/{planId}/charges | Returns a list of charge for a client's plan. |  | Yes | Monolith.Charging | Service Swagger (Monolith.Charging) |
| charges | UpdateClientPlanCharge | PUT | /v2/clients/{clientId}/plans/{planId}/charges/{chargeId} | Updates an existing charge for a client's plan. |  | Yes | Monolith.Charging | Service Swagger (Monolith.Charging) |
| clients | ClientExists | HEAD | /v2/clients/{clientId} | Checks the client exists. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| clients | CreateClient | POST | /v2/clients | Creates a client. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| clients | CreateClient | POST | /v1/clients | Create a Client |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| clients | CreateClientGoalLinktoplan | POST | /v1/clients/{clientId}/goals/{goalId}/linktoplan | Link a Goal to a Plan |  | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | CreateClientGoalUnlink | POST | /v1/clients/{clientId}/goals/{goalId}/unlink | Unlink a Goal from an Account or Plan |  | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | CreateClientIncome | POST | /v1/clients/{clientId}/incomes |  |  | Yes | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | DeleteClient | DELETE | /v2/clients/{clientId} | Deletes a given client. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| clients | DeleteClientContact | DELETE | /v1/clients/{partyId}/contacts/{contactId} | Delete the specified Contact Details |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| clients | DeleteClientExpenditure | DELETE | /v1/clients/{clientId}/expenditure | Deletes an Expenditure for a client OR for the client of the current context. |  | Yes | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | DeleteClientExpense | DELETE | /v1/clients/{clientId}/expenditure/expenses/{expenseId} | Deletes an Expense for a client OR for the client of the current context's Expenditure. |  | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | DeleteClientGoal | DELETE | /v1/clients/{clientId}/goals/{goalId} | Delete a Goal |  | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | DeleteClientIncome | DELETE | /v1/clients/{clientId}/incomes/{incomeId} |  |  | Yes | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | DeleteClientLiability | DELETE | /v1/clients/{clientId}/liabilities/{liabilityId} | Deletes a Liability for a client OR for the client of the current context. |  | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | ExistsClient | HEAD | /v1/clients/{partyId} |  |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| clients | ExistsClientContact | HEAD | /v1/clients/{partyId}/contacts/{contactId} | Get the specified Contact Details |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| clients | ExistsClientExpenditure | HEAD | /v1/clients/{clientId}/expenditure | Gets Expenditure if any, for the specified client id/for the client of the current context. |  | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | ExistsClientExpense | HEAD | /v1/clients/{clientId}/expenditure/expenses/{expenseId} | Gets Expense if any, for the specified client id/for the client of the current context's Expenditure |  | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | ExistsClientGoal | HEAD | /v1/clients/{clientId}/goals/{goalId} | Get the specified Client Goal |  | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | ExistsClientIncome | HEAD | /v1/clients/{clientId}/incomes/{incomeId} |  |  | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | ExistsClientLiability | HEAD | /v1/clients/{clientId}/liabilities/{liabilityId} | Gets Liability if any, for the specified client id/for the client of the current context and liabili |  | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | ExistsExpensecategory | HEAD | /v1/clients/expensecategories/{expenseCategoryId} | Gets an Expense Category if any, for the specified Expense Category Id. |  | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | ExistsExpensegroup | HEAD | /v1/clients/expensegroups/{expenseGroupId} | Gets an Expense Group if any, for the specified Expense Group Id. |  | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | GetClient | GET | /v2/clients/{clientId} | Returns a clients for a given client. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| clients | GetClient | GET | /v1/clients/{partyId} |  |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| clients | GetClientContact | GET | /v1/clients/{partyId}/contacts/{contactId} | Get the specified Contact Details |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| clients | GetClientExpenditure | GET | /v1/clients/{clientId}/expenditure | Gets Expenditure if any, for the specified client id/for the client of the current context. |  | Yes | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | GetClientExpense | GET | /v1/clients/{clientId}/expenditure/expenses/{expenseId} | Gets Expense if any, for the specified client id/for the client of the current context's Expenditure |  | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | GetClientGoal | GET | /v1/clients/{clientId}/goals/{goalId} | Get the specified Client Goal |  | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | GetClientIncome | GET | /v1/clients/{clientId}/incomes/{incomeId} |  |  | Yes | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | GetClientLiability | GET | /v1/clients/{clientId}/liabilities/{liabilityId} | Gets Liability if any, for the specified client id/for the client of the current context and liabili |  | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | GetClientServicecase | GET | /v1/clients/{clientId}/servicecases/{serviceCaseId} |  |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| clients | GetExpensecategory | GET | /v1/clients/expensecategories/{expenseCategoryId} | Gets an Expense Category if any, for the specified Expense Category Id. |  | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | GetExpensegroup | GET | /v1/clients/expensegroups/{expenseGroupId} | Gets an Expense Group if any, for the specified Expense Group Id. |  | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | ListClientContacts | GET | /v1/clients/{partyId}/contacts | Get Contact Details |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| clients | ListClientExpendituresExpenses | GET | /v1/clients/{clientId}/expenditure/expenses | Gets all Expenses for the specified client id OR for the client of the current context's Expenditure |  | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | ListClientGoals | GET | /v1/clients/{clientId}/goals | Get all Client Goals |  | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | ListClientIncomes | GET | /v1/clients/{clientId}/incomes |  |  | Yes | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | ListClientLiabilities | GET | /v1/clients/{clientId}/liabilities | Gets all Liabilities for the specified client id OR for the client of the current context. |  | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | ListClients | GET | /v2/clients | Returns a list of clients. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| clients | ListClientsAdvisers | GET | /v1/clients/{partyId}/advisers | Get advisers for clients. The first one is the servicing adviser. Others will be added in future rel |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| clients | ListClientSegments | GET | /v2/clients/client_segments | Retrieves a list of the available clients' segments. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| clients | ListClientServicecases | GET | /v1/clients/{clientId}/servicecases |  |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| clients | ListClientsExpensecategories | GET | /v1/clients/expensecategories | Gets all Expense Categories. |  | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | ListClientsExpensegroups | GET | /v1/clients/expensegroups | Gets all Expense Groups. |  | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | ListClientsProfessionalcontacts | GET | /v1/clients/{clientId}/professionalcontacts | Gets a list of professional contacts |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| clients | MarkascompletedClientGoal | POST | /v1/clients/{clientId}/goals/{goalId}/markascompleted | Mark a Goal as Completed |  | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | MarkasdefaultClientContact | PATCH | /v1/clients/{partyId}/contacts/{contactId}/markasdefault | Mark the specified Contact Detail as default. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| clients | MarkasincompleteClientGoal | POST | /v1/clients/{clientId}/goals/{goalId}/markasincomplete | Mark a Goal as Incomplete |  | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | UpdateClient | PUT | /v2/clients/{clientId} | Updates a client for a given client. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| clients | UpdateClient | PUT | /v1/clients/{partyId} |  |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| clients | UpdateClientContact | PUT | /v1/clients/{partyId}/contacts/{contactId} | Update the specified Contact Details |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| clients | UpdateClientExpenditure | PUT | /v1/clients/{clientId}/expenditure | Updates an Expenditure for a client OR for the client of the current context, if none found then add |  | Yes | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | UpdateClientExpense | PUT | /v1/clients/{clientId}/expenditure/expenses/{expenseId} | Updates an Expense for a client OR for the client of the current context's Expenditure. |  | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | UpdateClientGoal | PUT | /v1/clients/{clientId}/goals/{goalId} | Update a Goal |  | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | UpdateClientIncome | PUT | /v1/clients/{clientId}/incomes/{incomeId} |  |  | Yes | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | UpdateClientLiability | PUT | /v1/clients/{clientId}/liabilities/{liabilityId} | Updates a Liability for a client OR for the client of the current context. |  | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | UpdateClientsExpenditureExpenses | PUT | /v1/clients/{clientId}/expenditure/expenses | Updates a collection of Expenses for a client OR for the client of the current context's Expenditure |  | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| clients | UpdateClientsIncomes | PUT | /v1/clients/{clientId}/incomes |  |  | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| closest | GetGroupBrandClosest | GET | /v1/groups/{groupId}/brands/closest | Get closest brand for specified group |  | No | Microservice.Brand | Service Swagger (Microservice.Brand) |
| contactdetails | CreateClientContactdetails | POST | /v2/clients/{clientId}/contactdetails | Creates a contact detail for a given client. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| contactdetails | CreateLeadContactdetails | POST | /v2/leads/{leadId}/contactdetails | Creates contact details for a given lead. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| contactdetails | DeleteClientContactdetail | DELETE | /v2/clients/{clientId}/contactdetails/{contactDetailId} | Deletes a contact detail for a given client and contact detail. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| contactdetails | DeleteLeadContactdetail | DELETE | /v2/leads/{leadId}/contactdetails/{contactDetailId} | Deletes contact details for a given lead. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| contactdetails | GetAdviserContactdetail | GET | /v2/advisers/{adviserId}/contactdetails/{contactDetailId} | Returns ContactDetail resource |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| contactdetails | GetClientContactdetail | GET | /v2/clients/{clientId}/contactdetails/{contactDetailId} | Returns a contact detail for a given client and contact detail. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| contactdetails | GetLeadContactdetail | GET | /v2/leads/{leadId}/contactdetails/{contactDetailId} | Returns a contact detail for a given lead and contact detail. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| contactdetails | ListAdviserContactdetails | GET | /v2/advisers/{adviserId}/contactdetails | Returns list of a adviser's contact details |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| contactdetails | ListClientContactdetails | GET | /v2/clients/{clientId}/contactdetails | Returns a list of contact details for a given client. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| contactdetails | ListLeadContactdetails | GET | /v2/leads/{leadId}/contactdetails | Returns a list of contact details for a given lead. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| contactdetails | UpdateClientContactdetail | PUT | /v2/clients/{clientId}/contactdetails/{contactDetailId} | Updates contact details for a given client and contact detail. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| contactdetails | UpdateLeadContactdetail | PUT | /v2/leads/{leadId}/contactdetails/{contactDetailId} | Updates contact details for a given lead. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| contributions | CreatePlanContributions | POST | /v2/clients/{clientId}/plans/{planId}/contributions | Creates a contribution for a given client and plan. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| contributions | DeleteClientPlanContribution | DELETE | /v2/clients/{clientId}/plans/{planId}/contributions/{contributionId} | Deletes a contribution for a given plan. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| contributions | GetClientPlanContribution | GET | /v2/clients/{clientId}/plans/{planId}/contributions/{contributionId} | Returns a contribution for a given client and plan. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| contributions, beta | ListClientPlanContributions | GET | /v2/clients/{clientId}/plans/{planId}/contributions | Returns list of contributions for a given client and plan. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| contributions | UpdateClientPlanContribution | PUT | /v2/clients/{clientId}/plans/{planId}/contributions/{contributionId} | Updates a contribution for a given client and plan. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| corporates | CreateCorporate | POST | /v1/corporates |  |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| corporates | DeleteCorporateContact | DELETE | /v1/corporates/{partyId}/contacts/{contactId} | Delete the specified Contact Details |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| corporates | ExistsCorporate | HEAD | /v1/corporates/{partyId} |  |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| corporates | ExistsCorporateContact | HEAD | /v1/corporates/{partyId}/contacts/{contactId} | Get the specified Contact Details |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| corporates | GetCorporate | GET | /v1/corporates/{partyId} |  |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| corporates | GetCorporateContact | GET | /v1/corporates/{partyId}/contacts/{contactId} | Get the specified Contact Details |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| corporates | ListCorporateContacts | GET | /v1/corporates/{partyId}/contacts | Get Contact Details |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| corporates | MarkasdefaultCorporateContact | PATCH | /v1/corporates/{partyId}/contacts/{contactId}/markasdefault | Mark the specified Contact Detail as default. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| corporates | UpdateCorporate | PUT | /v1/corporates/{partyId} |  |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| corporates | UpdateCorporateContact | PUT | /v1/corporates/{partyId}/contacts/{contactId} | Update the specified Contact Details |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| counties | ListCountriesCounties | GET | /v1/countries/{countryCode}/counties | Get list of Counties for the specified country |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| countries | ListCountries | GET | /v1/countries | Get list of Countries |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| creditcards | DeleteClientCreditcard | DELETE | /v1/clients/{clientId}/plans/creditcards/{planId} | Delete Credit Card plan |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| creditcards | GetClientCreditcard | GET | /v1/clients/{clientId}/plans/creditcards/{planId} | Get the specified Plan |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| creditcards | ListClientPlansCreditcards | GET | /v1/clients/{clientId}/plans/creditcards | Get all plans of type credit card for the client |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| creditcards | UpdateClientCreditcard | PUT | /v1/clients/{clientId}/plans/creditcards/{planId} | Update Credit Card plan |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| currentaccounts | DeleteClientCurrentaccount | DELETE | /v1/clients/{clientId}/plans/currentaccounts/{planId} | Delete investment plan (current account) |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| currentaccounts | GetClientCurrentaccount | GET | /v1/clients/{clientId}/plans/currentaccounts/{planId} | Get the specified Plan (current account) |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| currentaccounts | ListClientPlansCurrentaccounts | GET | /v1/clients/{clientId}/plans/currentaccounts | Returns a collection of investment plans (current accounts) for the specified client. |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| currentaccounts | UpdateClientCurrentaccount | PUT | /v1/clients/{clientId}/plans/currentaccounts/{planId} | Update investment plan (current account) |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| customquestions | GetQuestion | GET | /v2/questions/{questionId} | Retrieves the details of a question. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| customquestions | ListQuestions | GET | /v2/questions | Retrieves a list of questions associated with the current tenant. The returned list may be filtered. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| customquestions | ListQuestionsAnswers | GET | /v2/clients/{clientId}/questions | Returns a list of the answers a client has given to a given set of questions. The answers are return |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| customquestions | UpdateQuestionAnswers | PUT | /v2/clients/{clientId}/questions | Updates a client's answers to one or more questions. See above for the rules governing this. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| dependants, beta | CreateClientDependant | POST | /v2/clients/{clientId}/dependants | Creates a dependant for a given client. |  | Yes | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| dependants, beta | DeleteClientDependant | DELETE | /v2/clients/{clientId}/dependants/{dependantId} | Deletes a dependant for a given client. |  | Yes | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| dependants, beta | GetClientDependant | GET | /v2/clients/{clientId}/dependants/{dependantId} | Returns a dependant for a given client and dependant. |  | Yes | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| dependants, beta | ListClientDependants | GET | /v2/clients/{clientId}/dependants | Returns a list of dependants for a given client. |  | Yes | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| dependants, beta | UpdateClientDependant | PUT | /v2/clients/{clientId}/dependants/{dependantId} | Updates a dependant for a given client. |  | Yes | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| document | GetDocument | GET | /v2/clients/{clientId}/plans/{planId}/documents/{documentId} | Returns an actual document (byte array) from the provider |  | Yes | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| documentfolders | CreateDocumentFolder | POST | /v2/clients/{clientId}/documentfolders | Creates a new document folder. |  | Yes | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documentfolders | GetDocumentFolder | GET | /v2/clients/{clientId}/documentfolders/{documentFolderId} | Gets a single document folder. |  | Yes | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documentfolders | ListDocumentFolders | GET | /v2/clients/{clientId}/documentfolders | Returns a list of document folders. |  | Yes | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | AdviserDocumentExists | HEAD | /v2/advisers/{adviserId}/documents/{documentId} | Checks if required document exists |  | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | AdviserDocumentHideInPortal | DELETE | /v2/advisers/{adviserId}/documents/{documentId}/showInPortal | Shares an adviser document that has been shared with all clients in the portal. |  | No | Microservice.ClientStorage | Service Swagger (Microservice.ClientStorage) |
| documents | AdviserDocumentShowInPortal | POST | /v2/advisers/{adviserId}/documents/{documentId}/showInPortal | Shares the adviser document with all clients in the portal. |  | No | Microservice.ClientStorage | Service Swagger (Microservice.ClientStorage) |
| documents | AssignClientDocument | POST | /v2/clients/{clientId}/documents/{documentId} | Creates a document for a given client and document. |  | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | ClientDocumentHideInPortal | DELETE | /v2/clients/{clientId}/documents/{documentId}/showInPortal | Unshares the document with specified document id in the client portal. |  | No | Microservice.ClientStorage | Service Swagger (Microservice.ClientStorage) |
| documents | ClientDocumentShowInPortal | POST | /v2/clients/{clientId}/documents/{documentId}/showInPortal | Shares the document with specified document id in the client portal. |  | No | Microservice.ClientStorage | Service Swagger (Microservice.ClientStorage) |
| documents | CreateAdviserDocument | POST | /v2/advisers/{adviserId}/documents | Creates a new document associated with this specified adviser |  | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | CreateClientDocument | POST | /v2/clients/{clientId}/documents | Creates a document for a given client. |  | Yes | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | CreateDocument | POST | /v2/documents | Creates a new document |  | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | CreateDocument | POST | /v1/documents |  |  | No | Microservice.ClientStorage | Service Swagger (Microservice.ClientStorage) |
| documents | DeleteAdviserDocument | DELETE | /v2/advisers/{adviserId}/documents/{documentId} | Deletes a file object associated with the specified adviser document |  | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | DeleteDocument | DELETE | /v1/documents/{documentId} | Deletes document |  | No | Microservice.ClientStorage | Service Swagger (Microservice.ClientStorage) |
| documents | ExistsClientDocument | HEAD | /v1/clients/{clientId}/documents/{documentId} | Returns document data from private storage |  | No | Microservice.ClientStorage | Service Swagger (Microservice.ClientStorage) |
| documents | ExistsDocument | HEAD | /v1/documents/{documentId} | Returns document data from private storage |  | No | Microservice.ClientStorage | Service Swagger (Microservice.ClientStorage) |
| documents | GetAdviserDocument | GET | /v2/advisers/{adviserId}/documents/{documentId} | Gets a single adviser document by id |  | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | GetClientDocument | GET | /v2/clients/{clientId}/documents/{documentId} | Returns a document for a given client and document. |  | Yes | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | GetClientDocument | GET | /v1/clients/{clientId}/documents/{documentId} | Returns document data from private storage |  | Yes | Microservice.ClientStorage | Service Swagger (Microservice.ClientStorage) |
| documents | GetClientDocumentContent | GET | /v1/clients/{clientId}/documents/{documentId}/content | Returns document content from private storage |  | No | Microservice.ClientStorage | Service Swagger (Microservice.ClientStorage) |
| documents | GetDocument | GET | /v1/documents/{documentId} | Returns document data from private storage |  | Yes | Microservice.ClientStorage | Service Swagger (Microservice.ClientStorage) |
| documents | GetDocumentContent | GET | /v1/documents/{documentId}/content | Returns document content from private storage |  | No | Microservice.ClientStorage | Service Swagger (Microservice.ClientStorage) |
| documents | GetDocumentStatistics | GET | /v1/documents/statistics | Provides total amount of storage currently used and the total amount available |  | No | Microservice.ClientStorage | Service Swagger (Microservice.ClientStorage) |
| documents | ListAdviserDocuments | GET | /v2/advisers/{adviserId}/documents | List all adviser documents |  | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | ListClientDocuments | GET | /v2/clients/{clientId}/documents | Returns a list of documents for a given client. |  | Yes | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | ListClientDocuments | GET | /v1/clients/{clientId}/documents | Return user documents from private storage. This will include documents shared with this user |  | Yes | Microservice.ClientStorage | Service Swagger (Microservice.ClientStorage) |
| documents | ListDocuments | GET | /v1/documents | Return user documents from private storage. This will include documents shared with this user |  | No | Microservice.ClientStorage | Service Swagger (Microservice.ClientStorage) |
| documents | ShareDocument | POST | /v1/documents/{documentId}/share | Shares a document to public. Any user who has a access to client record will be able to view this do |  | No | Microservice.ClientStorage | Service Swagger (Microservice.ClientStorage) |
| documents | UnshareDocument | POST | /v1/documents/{documentId}/unshare | Unshares document. Document will be available only to owner |  | No | Microservice.ClientStorage | Service Swagger (Microservice.ClientStorage) |
| documents | UpdateAdviserDocument | PUT | /v2/advisers/{adviserId}/documents/{documentId} | Updates the specified adviser document |  | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | UpdateClientDocument | PUT | /v2/clients/{clientId}/documents/{documentId} | Updates a document for a given client and document. |  | Yes | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | UpdateDocument | PUT | /v1/documents/{documentId} | Updates document metadata |  | No | Microservice.ClientStorage | Service Swagger (Microservice.ClientStorage) |
| documents | UpdateDocumentContent | PUT | /v1/documents/{documentId}/content | Updates document contents |  | No | Microservice.ClientStorage | Service Swagger (Microservice.ClientStorage) |
| dpa | CreateClientDpaPolicyAgreement | POST | /v2/clients/{clientId}/dpa_agreements | Creates a new DPA policy agreement for a client. |  | Yes | Microservice.DPA | Service Swagger (Microservice.DPA) |
| dpa | CreateDPAPolicy | POST | /v2/dpa_policies | Creates a new DPA policy which will become the current DPA policy when created (see notes on party t |  | Yes | Microservice.DPA | Service Swagger (Microservice.DPA) |
| dpa | DeleteDPAPolicy | DELETE | /v2/dpa_policies/{policyId} | Deletes an existing DPA policy. Only policies that are not associated with client agreements can be  |  | Yes | Microservice.DPA | Service Swagger (Microservice.DPA) |
| dpa | GetClientDpaPolicyAgreement | GET | /v2/clients/{clientId}/dpa_agreements/{agreementId} | Returns a single DPA policy agreement for a client. |  | Yes | Microservice.DPA | Service Swagger (Microservice.DPA) |
| dpa | GetCurrentDPAPolicy | GET | /v2/dpa_policies/current | Returns the current default DPA policy (see notes on party type above). |  | Yes | Microservice.DPA | Service Swagger (Microservice.DPA) |
| dpa | GetDpaPolicy | GET | /v2/dpa_policies/{policyId} | Returns a single DPA policy. |  | Yes | Microservice.DPA | Service Swagger (Microservice.DPA) |
| dpa | ListClientDpaPolicyAgreements | GET | /v2/clients/{clientId}/dpa_agreements | Returns a list of client's DPA policy agreements. |  | Yes | Microservice.DPA | Service Swagger (Microservice.DPA) |
| dpa | ListDpaPolicies | GET | /v2/dpa_policies | Returns a list of DPA policies. |  | Yes | Microservice.DPA | Service Swagger (Microservice.DPA) |
| dpa | PatchDPAPolicy | PATCH | /v2/dpa_policies/{policyId} | Updates an existing DPA policy. |  | Yes | Microservice.DPA | Service Swagger (Microservice.DPA) |
| dpa | UpdateDPAPolicy | PUT | /v2/dpa_policies/{policyId} | Updates an existing DPA policy. |  | Yes | Microservice.DPA | Service Swagger (Microservice.DPA) |
| emails | CreateEmail | POST | /v2/activities/emails | Creates an email. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| emails | GetEmail | GET | /v2/activities/emails/{emailId} | Returns a given email. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| emails | ListEmails | GET | /v2/activities/emails | Returns a list of emails. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| employments | CreateClientEmployment | POST | /v2/clients/{clientId}/employments | Create an employment for a given client. |  | Yes | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| employments | DeleteClientEmployment | DELETE | /v2/clients/{clientId}/employments/{employmentId} | Deletes a given employment. |  | Yes | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| employments | GetClientEmployment | GET | /v2/clients/{clientId}/employments/{employmentId} | Get an employment for a given client. |  | Yes | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| employments | ListClientEmployments | GET | /v2/clients/{clientId}/employments | Get a list of employments for a given client. |  | Yes | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| employments | UpdateClientEmployment | PUT | /v2/clients/{clientId}/employments/{employmentId} | Updates an employment for a given client. |  | Yes | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| entitlement | CreateIPAddress | POST | /v2/tenants/{tenantId}/IPAddress |  |  | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | CreateUserDetail | POST | /v2/users | Creates a user. |  | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | GetUserDetail | GET | /v2/users/{userId} | Returns a user. |  | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement, beta | ListIPAddresses | GET | /v2/tenants/{tenantId}/IPAddress |  |  | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement, beta | ListSupportIPAddresses | GET | /v2/support/IPAddress | Returns a list of support IP addresses. |  | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement, beta | ListUserActivity | GET | /v2/users/{userId}/activity | Returns a list of user activities. |  | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement, beta | ListUsersDetails | GET | /v2/users | Returns a list of users. |  | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | UpdateUserDetail | PUT | /v2/users/{userId} | Updates a user. |  | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| expenditures, beta | CreateClientExpenditure | POST | /v2/clients/{clientId}/expenditures | Creates an expenditure record for a client. |  | Yes | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| expenditures, beta | DeleteClientExpenditure | DELETE | /v2/clients/{clientId}/expenditures/{expenditureId} | Deletes a client's expenditure record. |  | Yes | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| expenditures, beta | GetClientExpenditure | GET | /v2/clients/{clientId}/expenditures/{expenditureId} | Retrieves a client's expenditure record. |  | Yes | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| expenditures, beta | ListClientExpenditures | GET | /v2/clients/{clientId}/expenditures | Returns a list of expenditure records for a client. The returned list may be filtered. |  | Yes | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| expenditures, beta | UpdateClientExpenditure | PUT | /v2/clients/{clientId}/expenditures/{expenditureId} | Updates a client's expenditure record. |  | Yes | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| fees | CreateClientFees | POST | /v2/clients/{clientId}/fees | Create client fee. |  | Yes | Monolith.Charging | Service Swagger (Monolith.Charging) |
| fees | CreateClientPlanFee | POST | /v2/clients/{clientId}/plans/{planId}/fees/{feeId} | Links an existing Fee to the given Plan. |  | Yes | Monolith.Charging | Service Swagger (Monolith.Charging) |
| fees | DeleteClientPlanFee | DELETE | /v2/clients/{clientId}/plans/{planId}/fees/{feeId} | Removes the link between the Fee and the plan, does not delete the actual Fee. |  | Yes | Monolith.Charging | Service Swagger (Monolith.Charging) |
| fees | GetClientFee | GET | /v2/clients/{clientId}/fees/{feeId} | Get client fee by id. |  | Yes | Monolith.Charging | Service Swagger (Monolith.Charging) |
| fees | GetClientPlanFee | GET | /v2/clients/{clientId}/plans/{planId}/fees/{feeId} | Gets a Fee for the given plan. |  | Yes | Monolith.Charging | Service Swagger (Monolith.Charging) |
| fees | ListClientFees | GET | /v2/clients/{clientId}/fees | Returns a list of fees for a client. |  | Yes | Monolith.Charging | Service Swagger (Monolith.Charging) |
| fees | ListClientPlanFees | GET | /v2/clients/{clientId}/plans/{planId}/fees | Gets a collection of fee linked to the given plan. |  | Yes | Monolith.Charging | Service Swagger (Monolith.Charging) |
| fees | UpdateClientFee | PUT | /v2/clients/{clientId}/fees/{feeId} | Update client fee. |  | Yes | Monolith.Charging | Service Swagger (Monolith.Charging) |
| financialsummary | GetClientFinancialsummary | GET | /v1/clients/{clientId}/financialsummary | Get a summary of a Portfolio |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| financialsummary | GetClientFinancialsummarybycategory | GET | /v1/clients/{clientId}/financialsummarybycategory | Get a categorised summary of a clients entire Portfolio |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| fundprices | ListFundPrices | GET | /v2/funds/{fundId}/prices | Returns a list of fund prices for a given fund. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| fundproposal | DeleteClientPlanFundproposal | DELETE | /v2/clients/{clientId}/plans/{planId}/fundproposal | Deletes fund proposals from holdings for a given client and plan. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| fundproposal | GetClientPlanFundproposal | GET | /v2/clients/{clientId}/plans/{planId}/fundproposal | Returns a fund proposals from holidings for a given client and plan. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| fundproposal | UpdateClientPlanFundproposal | PUT | /v2/clients/{clientId}/plans/{planId}/fundproposal | Updates or creates a fund proposal for a given client and plan. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| fundproviders | GetFundprovider | GET | /v2/fundproviders/{code} | Returns fund providers for a given code. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| fundproviders | ListFundproviders | GET | /v2/fundproviders | Returns a list of fund providers. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| funds | CreateFund | POST | /v2/funds | Creates a non-feed fund. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| funds | GetFund | GET | /v2/funds/{fundId} | Returns a fund/equity for a given fundId/equityId. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| funds | ListFunds | GET | /v2/funds | Returns a list of funds (feed and non-feed funds) and equities. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| funds | UpdateFund | PUT | /v2/funds/{fundId} | Updates a non-feed fund for a given fund. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| fundsectors | GetFundsector | GET | /v2/fundsectors/{code} | Returns fund sectors for a given fund code. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| fundsectors | ListFundsectors | GET | /v2/fundsectors | Returns a list of fund sectors. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| fundtransactions | GetClientPlanHoldingTransaction | GET | /v2/clients/{clientId}/plans/{planId}/holdings/{holdingId}/transactions/{transactionId} | Returns a fund holdings transaction for a given client, plan, holding and transaction. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| fundtransactions | ListClientPlanHoldingTransactions | GET | /v2/clients/{clientId}/plans/{planId}/holdings/{holdingId}/transactions | Returns a list of fund holdings transactions for a given client, plan and holding. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| groups | GetGroup | GET | /v2/groups/{groupId} | Returns the given group. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| groups | GetGroup | GET | /v1/groups/{groupId} | Get group by Id. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| groups | ListGroups | GET | /v2/groups | Returns a list of groups. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| groups | ListGroupsLineage | GET | /v1/groups/{groupId}/lineage | Get lineage of specified group |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| holdings | CreatePlanHoldings | POST | /v2/clients/{clientId}/plans/{planId}/holdings | Creates fund holdings for a given client and plan. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| holdings | GetClientPlanHolding | GET | /v2/clients/{clientId}/plans/{planId}/holdings/{holdingId} | Returns a fund holding for a given client, plan and holding. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| holdings | ListClientPlanHoldings | GET | /v2/clients/{clientId}/plans/{planId}/holdings | Returns a list of fund holdings for a given client and plan. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| holdings | ListClientsHoldings | GET | /v2/clients/{clientId}/holdings | Returns a list of plan's fund holdings across client plans. |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| holdings | UpdateClientPlanHolding | PUT | /v2/clients/{clientId}/plans/{planId}/holdings/{holdingId} | Updates a fund holding for a given client, plan and holding. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| illustrations | PatchIllustrationStatus | PATCH | /v2/illustrations/{illustrationId} |  |  | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| incomes, beta | CreateClientIncome | POST | /v2/clients/{clientId}/incomes | Creates an income record for a client. |  | Yes | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| incomes, beta | DeleteClientIncome | DELETE | /v2/clients/{clientId}/incomes/{incomeId} | Deletes a client's income record. |  | Yes | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| incomes, beta | GetClientIncome | GET | /v2/clients/{clientId}/incomes/{incomeId} | Returns the income for a given client and income. |  | Yes | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| incomes, beta | ListClientIncomes | GET | /v2/clients/{clientId}/incomes | Returns a list of incomes for a given client. |  | Yes | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| incomes, beta | UpdateClientIncome | PUT | /v2/clients/{clientId}/incomes/{incomeId} | Updates a client's income record. |  | Yes | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| incomestatements | CreateIncomeStatement | POST | /v2/incomestatements | Creates a new income statement. | openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements | Yes | Monolith.Commission | Service Swagger (Monolith.Commission) |
| incomestatements | CreateIncomeStatementItems | POST | /v2/incomestatements/{incomeStatementId}/items | Creates income statement items for an income statement. | openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements | Yes | Monolith.Commission | Service Swagger (Monolith.Commission) |
| incomestatements | DeleteIncomeStatement | DELETE | /v2/incomestatements/{incomeStatementId} | Deletes an existing income statement. | openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements | Yes | Monolith.Commission | Service Swagger (Monolith.Commission) |
| incomestatements | GetIncomeStatement | GET | /v2/incomestatements/{incomeStatementId} | Returns an income statement. | openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements | Yes | Monolith.Commission | Service Swagger (Monolith.Commission) |
| incomestatements | GetIncomeStatementItem | GET | /v2/incomestatements/{incomeStatementId}/items/{incomeStatementItemId} | Returns a given item for a given income statement. | openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements | Yes | Monolith.Commission | Service Swagger (Monolith.Commission) |
| incomestatements | ListIncomeStatementItems | GET | /v2/incomestatements/{incomeStatementId}/items | Returns a list of items for a given income statement. | openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements | Yes | Monolith.Commission | Service Swagger (Monolith.Commission) |
| incomestatements | ListIncomeStatements | GET | /v2/incomestatements | Returns a list of income statements. | openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements | Yes | Monolith.Commission | Service Swagger (Monolith.Commission) |
| incomestatements | UpdateIncomeStatement | PUT | /v2/incomestatements/{incomeStatementId} | Updates an income statement. | openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements | Yes | Monolith.Commission | Service Swagger (Monolith.Commission) |
| incomestatements | UpdateIncomeStatementItem | PUT | /v2/incomestatements/{incomeStatementId}/items/{incomeStatementItemId} | Updates an income statement item for a given income statement. | openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements | Yes | Monolith.Commission | Service Swagger (Monolith.Commission) |
| insights | CreateClientInsight | POST | /v2/clients/{clientId}/insights | Create a Client Insight. |  | No | Microservice.Insight | Service Swagger (Microservice.Insight) |
| insights | CreateClientInsight | POST | /v1/clients/{clientId}/insights | Post insight for a given client with clientId. |  | No | Microservice.Insight | Service Swagger (Microservice.Insight) |
| insights | GetClientInsights | GET | /v2/clients/{clientId}/insights | Returns a list of the insights associated with the client. |  | No | Microservice.Insight | Service Swagger (Microservice.Insight) |
| investments | DeleteClientInvestment | DELETE | /v1/clients/{clientId}/plans/investments/{planId} | Delete investment plan |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| investments | GetClientInvestment | GET | /v1/clients/{clientId}/plans/investments/{planId} | Get the specified Plan |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| investments | ListClientPlansInvestments | GET | /v1/clients/{clientId}/plans/investments | Returns a collection of investment plans for the specified client. |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| investments | UpdateClientInvestment | PUT | /v1/clients/{clientId}/plans/investments/{planId} | Update investment plan |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| leads | AssignLeadDocument | POST | /v2/leads/{leadId}/documents/{documentId} | Adds the specified owner to the specified document |  | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| leads | CreateLead | POST | /v2/leads | Create a lead. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| leads | CreateLead | POST | /v1/leads | Create a Lead |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| leads | DeleteLead | DELETE | /v2/leads/{leadId} | Deletes a given lead. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| leads | DeleteLeadContact | DELETE | /v1/leads/{partyId}/contacts/{contactId} | Delete the specified Contact Details |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| leads | ExistsLead | HEAD | /v1/leads/{partyId} |  |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| leads | ExistsLeadContact | HEAD | /v1/leads/{partyId}/contacts/{contactId} | Get the specified Contact Details |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| leads | GetLead | GET | /v2/leads/{leadId} | Returns a given lead. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| leads | GetLead | GET | /v1/leads/{partyId} |  |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| leads | GetLeadContact | GET | /v1/leads/{partyId}/contacts/{contactId} | Get the specified Contact Details |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| leads | LeadExists | HEAD | /v2/leads/{leadId} | Check if the lead exists. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| leads | ListLeadContacts | GET | /v1/leads/{partyId}/contacts | Get Contact Details |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| leads | ListLeads | GET | /v2/leads | Returns a list of leads. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| leads | MarkasdefaultLeadContact | PATCH | /v1/leads/{partyId}/contacts/{contactId}/markasdefault | Mark the specified Contact Detail as default. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| leads | UpdateLead | PUT | /v2/leads/{leadId} | Updates a given lead. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| leads | UpdateLeadContact | PUT | /v1/leads/{partyId}/contacts/{contactId} | Update the specified Contact Details |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| legacyapps | ListLegacyApps | GET | /v2/users/{userId}/legacyapps | Returns a list of apps with permission for the user |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| lifecycles, beta | GetLifecycle | GET | /v2/lifecycles/{lifecycleId} | Returns a lifecycle. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| lifecycles, beta | ListLifecycles | GET | /v2/lifecycles | Returns a list of lifecycles. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| lifecycles | ListLifecycleStatuses | GET | /v2/lifecycles/statuses | Returns a list of available lifecycle statuses |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| lifecycles | ListLifecycleTransitions | GET | /v2/lifecycles/{lifecycleId}/transitions | Returns a list of transitions for a given lifecycle. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| livesassured | ListClientPlansLivesAssured | GET | /v2/clients/{clientId}/plans/{planId}/livesassured | Returns a list of Lives Assured for the plan. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| livesassured | UpdateClientPlansLivesAssured | PUT | /v2/clients/{clientId}/plans/{planId}/livesassured | Creates or updates the list of Lives Assured for the plan. A maximum of 6 lives assured can be added |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| loans | DeleteClientLoan | DELETE | /v1/clients/{clientId}/plans/loans/{planId} | Delete loan plan |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| loans | GetClientLoan | GET | /v1/clients/{clientId}/plans/loans/{planId} | Get the specified Plan |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| loans | ListClientPlansLoans | GET | /v1/clients/{clientId}/plans/loans | Get all plans of type loan for the client |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| loans | UpdateClientLoan | PUT | /v1/clients/{clientId}/plans/loans/{planId} | Update Loan plan |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| marketingpreferences, beta | GetClientMarketingPreferences | GET | /v2/clients/{clientId}/marketing_preferences | Returns client's current marketing preferences. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| marketingpreferences, beta | GetLeadMarketingPreferences | GET | /v2/leads/{leadId}/marketing_preferences | Returns lead's current marketing preferences. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| marketingpreferences, beta | UpdateClientMarketingPreferences | PUT | /v2/clients/{clientId}/marketing_preferences | Updates client's marketing preferences. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| marketingpreferences, beta | UpdateLeadMarketingPreferences | PUT | /v2/leads/{leadId}/marketing_preferences | Updates lead's marketing preferences. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| models | ActivatePortfolioModel | POST | /v2/models/{modelId}/active | Activates or deactivates a portfolio model. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| models | CreateDraftPortfolioModel | POST | /v2/models/draft | Creates a draft portfolio model. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| models | CreateModel | POST | /v2/models | Creates a portfolio model. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| models | CreateProviderModel | POST | /v2/apps/{appId}/models | Creates a new provider model. |  | Yes | Microservice.iMps | Service Swagger (Microservice.iMps) |
| models | GetModel | GET | /v2/models/{modelId} | Returns a portfolio model. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| models | GetProviderModel | GET | /v2/apps/{appId}/models/{modelId} | Returns a provider model. |  | Yes | Microservice.iMps | Service Swagger (Microservice.iMps) |
| models | GetProviderModels | GET | /v2/apps/{appId}/models | Returns a list of provider models. |  | Yes | Microservice.iMps | Service Swagger (Microservice.iMps) |
| models | ListModels | GET | /v2/models | Returns a list of portfolio models. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| models | PatchModel | PATCH | /v2/models/{modelId} | Patch update a model. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| models | PublishDraftPortfolioModel | POST | /v2/models/draft/{modelId}/publish | Publishes a draft portfolio model. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| models | UpdateDraftPortfolioModel | PUT | /v2/models/draft/{modelId} | Put update a draft portfolio model. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| models | UpdateOrCreatePortfolioModel | PUT | /v2/models | Updates or creates a portfolio model. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| mortgages | DeleteClientMortgage | DELETE | /v1/clients/{clientId}/plans/mortgages/{planId} | Delete mortgage plan |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| mortgages | GetClientMortgage | GET | /v1/clients/{clientId}/plans/mortgages/{planId} | Get the specified Plan |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| mortgages | ListClientPlansMortgages | GET | /v1/clients/{clientId}/plans/mortgages | Get all plans of type mortgage for the client |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| mortgages | UpdateClientMortgage | PUT | /v1/clients/{clientId}/plans/mortgages/{planId} | Update mortgage plan |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| objectives | GetClientObjective | GET | /v2/clients/{clientId}/objectives/{objectiveId} | Gets a client objective. | openid, myprofile, client_data, client_data.requirements, openid, myprofile, client_data, client_data.requirements, openid, myprofile, client_data, client_data.requirements | No | Microservice.Requirement | Service Swagger (Microservice.Requirement) |
| objectives | ListClientObjectives | GET | /v2/clients/{clientId}/objectives | Returns a list of client objectives. | openid, myprofile, client_data, client_data.requirements, openid, myprofile, client_data, client_data.requirements, openid, myprofile, client_data, client_data.requirements | No | Microservice.Requirement | Service Swagger (Microservice.Requirement) |
| opportunities | CreateCampaignChannel | POST | /v2/opportunities/campaignchannels | Creates a new Campaign Channel. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| opportunities | CreateCampaignType | POST | /v2/opportunities/campaigntypes | Creates a new Campaign Type. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| opportunities | CreateClientOpportunity | POST | /v2/clients/{clientId}/opportunities | Creates a new Opportunity for the given client. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| opportunities | CreateLeadOpportunity | POST | /v2/leads/{leadId}/opportunities | Creates a new Opportunity for the given Lead. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| opportunities | CreateOpportunityCampaign | POST | /v2/opportunities/campaigns | Creates a new Opportunity campaign for a tenant. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| opportunities | CreateOpportunityProposition | POST | /v2/opportunities/propositions | Creates a new Opportunity proposition for a tenant. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| opportunities | CreateOpportunityStatus | POST | /v2/opportunities/statuses | Creates a new Opportunity Status. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| opportunities | CreateOpportunityType | POST | /v2/opportunities/types | Creates a new Opportunity Type for a tenant. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| opportunities | DeleteCampaignChannel | DELETE | /v2/opportunities/campaignchannels/{campaignChannelId} | Deletes Campaign Channel for a given tenant |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| opportunities | DeleteCampaignType | DELETE | /v2/opportunities/campaigntypes/{campaignTypeId} | Deletes Campaign Type for a given tenant |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| opportunities | DeleteOpportunityCampaign | DELETE | /v2/opportunities/campaigns/{opportunityCampaignId} | Deletes an Opportunity campaign. Only Opportunity campaigns that are not in use can be deleted. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| opportunities | DeleteOpportunityProposition | DELETE | /v2/opportunities/propositions/{propositionId} | Deletes an existing Opportunity proposition for a tenant. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| opportunities | DeleteOpportunityStatus | DELETE | /v2/opportunities/statuses/{opportunityStatusId} | Deletes an opportunity status for a given tenant |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| opportunities | DeleteOpportunityType | DELETE | /v2/opportunities/types/{opportunityTypeId} | Deletes an Opportunity type. Only opportunity types that are not in use can be deleted. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| opportunities | GetClientOpportunity | GET | /v2/clients/{clientId}/opportunities/{opportunityId} | Returns opportunity documents for a given client and document. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| opportunities | GetLeadOpportunity | GET | /v2/leads/{leadId}/opportunities/{opportunityId} | Returns an opportunity document for a given lead. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| opportunities | GetOpportunityType | GET | /v2/opportunities/types/{opportunityTypeId} | Returns the requested Opportunity type for a tenant. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| opportunities | ListCampaignChannels | GET | /v2/opportunities/campaignchannels | Returns a list of campaign channel for a given tenant. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| opportunities | ListCampaignTypes | GET | /v2/opportunities/campaigntypes | Returns a list of campaign types for a given tenant. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| opportunities | ListClientOpportunities | GET | /v2/clients/{clientId}/opportunities | Returns list of opportunities for a given client. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| opportunities | ListLeadOpportunities | GET | /v2/leads/{leadId}/opportunities | Returns a list of opportunity documents for a given lead. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| opportunities | ListOpportunityCampaigns | GET | /v2/opportunities/campaigns | Returns a list of the Opportunity campaigns for a tenant. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| opportunities | ListOpportunityPropositions | GET | /v2/opportunities/propositions | Returns a list of the opportunity propositions for a tenant. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| opportunities | ListOpportunityStatuses | GET | /v2/opportunities/statuses | Returns a list of opportunity statuses for a given tenant |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| opportunities | ListOpportunityTypes | GET | /v2/opportunities/types | Returns a list of the opportunity types for a tenant. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| opportunities | UpdateCampaignChannel | PUT | /v2/opportunities/campaignchannels/{campaignChannelId} | Updates an existing Campaign Channel. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| opportunities | UpdateCampaignType | PUT | /v2/opportunities/campaigntypes/{campaignTypeId} | Updates an existing Campaign Type. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| opportunities | UpdateClientOpportunity | PUT | /v2/clients/{clientId}/opportunities/{opportunityId} | Updates an existing Opportunity for the given client. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| opportunities | UpdateLeadOpporunity | PUT | /v2/leads/{leadId}/opportunities/{opportunityId} | Updates an existing Opportunity for the given Lead. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| opportunities | UpdateOpportunityCampaign | PUT | /v2/opportunities/campaigns/{opportunityCampaignId} | Updates an Opportunity campaign for a tenant. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| opportunities | UpdateOpportunityProposition | PUT | /v2/opportunities/propositions/{propositionId} | Updates an existing Opportunity proposition for a tenant. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| opportunities | UpdateOpportunityStatus | PUT | /v2/opportunities/statuses/{opportunityStatusId} | Updates an existing Opportunity Status. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| opportunities | UpdateOpportunityType | PUT | /v2/opportunities/types/{opportunityTypeId} | Updates an Opportunity Type for a tenant. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| parties | ExistsParty | HEAD | /v1/parties/{partyId} |  |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| pensions | DeleteClientPension | DELETE | /v1/clients/{clientId}/plans/pensions/{planId} | Delete pension plan |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| pensions | GetClientPension | GET | /v1/clients/{clientId}/plans/pensions/{planId} | Get the specified Plan |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| pensions | ListClientPlansPensions | GET | /v1/clients/{clientId}/plans/pensions | Get all plans of type pension for the client |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| pensions | UpdateClientPension | PUT | /v1/clients/{clientId}/plans/pensions/{planId} | Update pension plan |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| people | CreatePerson | POST | /v1/people | (TODO) Create a Person |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| people | ExistsPerson | HEAD | /v1/people/{partyId} | (TODO) Get the specified Person |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| people | GetPerson | GET | /v1/people/{partyId} | (TODO) Get the specified Person |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| people | UpdatePerson | PUT | /v1/people/{partyId} | (TODO) Update a Person |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| personalcontacts | CreatePersonalContact | POST | /v2/clients/{clientId}/personalContacts | Add a new personal contact for a given client |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| personalcontacts | DeletePersonalContact | DELETE | /v2/clients/{clientId}/personalContacts/{personalContactId} | Delete an existing personal contact |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| personalcontacts | GetPersonalContact | GET | /v2/clients/{clientId}/personalContacts/{personalContactId} | Get given personal contact for a given client |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| personalcontacts | ListPersonalContacts | GET | /v2/clients/{clientId}/personalContacts | List personal contacts for a given client. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| personalcontacts | PatchPersonalContact | PATCH | /v2/clients/{clientId}/personalContacts/{personalContactId} | Patch an existing personal contact |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| personalcontacts | UpdatePersonalContact | PUT | /v2/clients/{clientId}/personalContacts/{personalContactId} | Update an existing personal contact. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| plans | CreateClientOpportunityPlan | POST | /v2/clients/{clientId}/opportunities/{opportunityId}/plans/{planId} | Updates an opportunity with a plan for a given client, opportunity and plan. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| plans | CreateClientPlans | POST | /v2/clients/{clientId}/plans | Creates a plan for a given client. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| plans | CreateClientServicecasePlan | POST | /v2/clients/{clientId}/servicecases/{serviceCaseId}/plans/{planId} | Creates an association with a service on a plan for a given client, service and plan. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| plans | CreateTopupPlan | POST | /v2/clients/{clientId}/plans/{planId} | Creates a plan for a given client. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| plans | DeleteClientOpportunityPlan | DELETE | /v2/clients/{clientId}/opportunities/{opportunityId}/plans/{planId} | Deletes an opportunity from a plan for a given client, opportunity and plan. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| plans | DeleteClientPlan | DELETE | /v2/clients/{clientId}/plans/{planId} | Deletes the client plan by the given client id and plan id. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| plans | DeleteClientServicecasePlan | DELETE | /v2/clients/{clientId}/servicecases/{serviceCaseId}/plans/{planId} | Deletes an association on a service with a plan for a given client, service and plan. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| plans | ExistsClientPlan | HEAD | /v2/clients/{clientId}/plans/{planId} | Checks a plan exists for a given client and plan. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| plans | GetClientPlan | GET | /v2/clients/{clientId}/plans/{planId} | Returns a plan for a given client and plan. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| plans | GetClientValuation | GET | /v1/clients/{clientId}/plans/valuations/{valuationId} | Returns a single valuation resource for the specified valuationId |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| plans | GetPlan | GET | /v2/plans/{planId} | Get a Plan |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| plans | GetPlantype | GET | /v1/plantypes/{planTypeId} | Get a PlanType |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| plans | ListClientPlans | GET | /v2/clients/{clientId}/plans | Returns a list of plans for a given client. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| plans | ListClientPlansValuations | GET | /v1/clients/{clientId}/plans/valuations | Get a list of valuations for the plan for the logged in user. |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| plans | ListClientPlansValuationsPropertyvaluations | GET | /v1/clients/{clientId}/plans/valuations/propertyvaluations |  |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| plans | ListClientPlansValuationsTimeseries | GET | /v1/clients/{clientId}/plans/valuations/timeseries | Get a list of aggregated valuations for all the plans for the logged in user. |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| plans | ListClientPlanValuationsTimeseries | GET | /v1/clients/{clientId}/plans/{planId}/valuations/timeseries | Get a list of aggregated valuations for the plan for the logged in user. |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| plans | PatchClientPlan | PATCH | /v2/clients/{clientId}/plans/{planId} | Patch update a client plan for given client id and plan id. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| plans | PlanExists | HEAD | /v2/plans/{planId} | Check that plan available for the user |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| plans, beta | UpdateClientPlan | PUT | /v2/clients/{clientId}/plans/{planId} | Updates a plan for a given client. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| plantypes | ListGatedPlanTypes | GET | /v2/plantypes/adviser/{adviserId} | Returns a list of gated plan types based on adviser multi-tie configuration. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| plantypes | ListPlantypes | GET | /v2/plantypes | Returns a list of plan types. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| productproviders | CreateProductProvider | POST | /v2/productproviders | Creates a new product provider. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| productproviders | GetProductprovider | GET | /v2/productproviders/{productProviderId} | Returns a product provider. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| productproviders | ListProductproviders | GET | /v2/productproviders | Returns a list of product providers. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| productproviders | ListProductproviders | GET | /v1/productproviders | Get list of Product Providers |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| productproviders | ListProductproviderSearches | GET | /v1/productproviders/search | Search Product Providers by name |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| protections | DeleteClientProtection | DELETE | /v1/clients/{clientId}/plans/protections/{planId} | Delete protection plan |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| protections | GetClientProtection | GET | /v1/clients/{clientId}/plans/protections/{planId} | Get the specified Plan |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| protections | ListClientPlansProtections | GET | /v1/clients/{clientId}/plans/protections | Get all plans of type mortgage for the client |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| protections | UpdateClientProtection | PUT | /v1/clients/{clientId}/plans/protections/{planId} | Update protection plan |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| provider tenant configuration | DeleteProviderTenant | DELETE | /v2/providers/{providerId}/providerTenants |  |  | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| provider tenant configuration | GetProviderTenant | GET | /v2/providers/{providerId}/providerTenants |  |  | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| provider tenant configuration | UpdateProviderTenant | PUT | /v2/providers/{providerId}/providerTenants |  |  | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| purposes | ListClientPlansPurposes | GET | /v2/clients/{clientId}/plans/{planId}/purposes | Returns a list of purposes for a given client and plan. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| purposes | UpdateClientPlansPurposes | PUT | /v2/clients/{clientId}/plans/{planId}/purposes | Creates or updates the purpose for a given client and plan. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| quotes | AddClientQuoteApplicant | POST | /v2/clients/{clientId}/quotes/{quoteId} | Adds a secondary client owner to a given quote. | openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes | Yes | Microservice.Quotation | Service Swagger (Microservice.Quotation) |
| quotes | ClientQuoteExists | HEAD | /v2/clients/{clientId}/quotes/{quoteId} | Checks that a quote exists for a given client. | openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes | Yes | Microservice.Quotation | Service Swagger (Microservice.Quotation) |
| quotes | ClientQuoteResultsExists | HEAD | /v2/clients/{clientId}/quotes/{quoteId}/results/{quoteResultId} | Checks that a quote result exists for a client quote. | openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes | Yes | Microservice.Quotation | Service Swagger (Microservice.Quotation) |
| quotes | CreateClientQuote | POST | /v2/clients/{clientId}/quotes | Creates a new client quote. | openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes | Yes | Microservice.Quotation | Service Swagger (Microservice.Quotation) |
| quotes | CreateClientQuoteResult | POST | /v2/clients/{clientId}/quotes/{quoteId}/results | Creates a new client quote result. | openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes | Yes | Microservice.Quotation | Service Swagger (Microservice.Quotation) |
| quotes | GetClientQuote | GET | /v2/clients/{clientId}/quotes/{quoteId} | Returns a client quote. | openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes | Yes | Microservice.Quotation | Service Swagger (Microservice.Quotation) |
| quotes | GetClientQuoteResult | GET | /v2/clients/{clientId}/quotes/{quoteId}/results/{quoteResultId} | Returns a client quote result. | openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes | Yes | Microservice.Quotation | Service Swagger (Microservice.Quotation) |
| quotes | GetClientQuoteResultProductBenefits | GET | /v2/clients/{clientId}/quotes/{quoteId}/results/{quoteResultId}/benefits | This endpoint allows an API user to retrieve product details of a specific quote result or illustrat | openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes | Yes | Microservice.Quotation | Service Swagger (Microservice.Quotation) |
| quotes | ListClientQuoteResults | GET | /v2/clients/{clientId}/quotes/{quoteId}/results | Returns a list of client quote results. | openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes | Yes | Microservice.Quotation | Service Swagger (Microservice.Quotation) |
| quotes | ListClientQuotes | GET | /v2/clients/{clientId}/quotes | Returns a list of quotes. | openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes | Yes | Microservice.Quotation | Service Swagger (Microservice.Quotation) |
| quotes | SetClientQuoteStatus | POST | /v2/clients/{clientId}/quotes/{quoteId}/status/{status} | Sets a new status for the client quote. | openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes | Yes | Microservice.Quotation | Service Swagger (Microservice.Quotation) |
| quotes | UpdateClientQuoteResultProductBenefits | PUT | /v2/clients/{clientId}/quotes/{quoteId}/results/{quoteResultId}/benefits | This endpoint allows an API user to update product details of a specific quote result or illustratio | openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes | Yes | Microservice.Quotation | Service Swagger (Microservice.Quotation) |
| recommendations | CreateClientRecommendation | POST | /v2/clients/{clientId}/recommendations2 | Creates a client recommendation. |  | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| recommendations | CreateRecommendationProposal | POST | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals | Creates a recommendation proposal. |  | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| recommendations | CreateTenantRecommendationCategory | POST | /v2/recommendations2/categories | Create a recommendation category document. |  | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| recommendations | CreateTenantRecommendationSubCategory | POST | /v2/recommendations2/subcategories | Creates a recommendation subcategory. |  | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| recommendations | DeleteClientRecommendation | DELETE | /v2/clients/{clientId}/recommendations2/{recommendationId} | Deletes a recommendation. |  | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| recommendations | DeleteRecommendationProposal | DELETE | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals/{proposalId} | Deletes a recommendation proposal. |  | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| recommendations | DeleteTenantRecommendationCategory | DELETE | /v2/recommendations2/categories/{categoryId} | Deletes a recommendation category. |  | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| recommendations | DeleteTenantRecommendationSubCategory | DELETE | /v2/recommendations2/subcategories/{subCategoryId} | Deletes a recommendation subcategory. |  | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| recommendations | GetClientRecommendation | GET | /v2/clients/{clientId}/recommendations2/{recommendationId} | Gets a recommendation. |  | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| recommendations | GetRecommendationProposal | GET | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals/{proposalId} | Gets a recommendation proposal. |  | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| recommendations | GetTenantRecommendationCategory | GET | /v2/recommendations2/categories/{categoryId} | Returns a recommendation category document. |  | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| recommendations | GetTenantRecommendationSubCategory | GET | /v2/recommendations2/subcategories/{subCategoryId} | Returns a recommendation subcategory document. |  | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| recommendations | ListClientRecommendations | GET | /v2/clients/{clientId}/recommendations2 | Returns a list of client recommendations. |  | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| recommendations | ListRecommendationProposals | GET | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals | Lists recommendation proposals. |  | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| recommendations | ListTenantRecommendationCategories | GET | /v2/recommendations2/categories | Returns a paged collection of recommendation category documents. |  | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| recommendations | ListTenantRecommendationSubCategories | GET | /v2/recommendations2/subcategories | Returns a paged collection of recommendation subcategory documents. |  | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| recommendations | PatchClientRecommendation | PATCH | /v2/clients/{clientId}/recommendations2/{recommendationId} | Allows an API consumer to update a recommendation for a given client. |  | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| recommendations | PatchServiceCaseRecommendations | PATCH | /v2/servicecases/{serviceCaseId}/recommendations | Updates a list of recommendation priorities for service case. |  | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| recommendations | UpdateRecommendationProposal | PUT | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals/{proposalId} | Updates a recommendation proposal. |  | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| recommendations | UpdateTenantRecommendationCategory | PUT | /v2/recommendations2/categories/{categoryId} | Returns a recommendation category document. |  | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| recommendations | UpdateTenantRecommendationSubCategory | PUT | /v2/recommendations2/subcategories/{subCategoryId} | Returns a recommendation subcategory document. |  | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| relationships | CreateClientRelationship | POST | /v2/clients/{clientId}/relationships | Creates a relationship for a given client. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| relationships | CreateClientRelationshipAccess | POST | /v2/clients/{clientId}/relationships/{relationshipId}/access | Grants access for the Relationship relation to the Relationship subject. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| relationships | CreateClientRelationshipWithRelation | POST | /v2/clients/{clientId}/relationships/relation | Creates a new relationship and relation for the given client. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| relationships | CreateLeadRelationship | POST | /v2/leads/{leadId}/relationships | Creates a relationship for a given lead. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| relationships | DeleteClientRelationship | DELETE | /v2/clients/{clientId}/relationships/{relationshipId} | Deletes a relationship for a given client and relationship. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| relationships | DeleteClientRelationshipAccess | DELETE | /v2/clients/{clientId}/relationships/{relationshipId}/access | Revokes access from the Relationship relation to the Relationship subject. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| relationships | DeleteLeadRelationship | DELETE | /v2/leads/{leadId}/relationships/{relationshipId} | Deletes a relationship for a given lead and relationship. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| relationships | GetClientRelationship | GET | /v2/clients/{clientId}/relationships/{relationshipId} | Returns a relationship for a given client and relationship. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| relationships | GetClientRelationship | GET | /v1/clients/{clientId}/relationships/{relationshipId} | Get the specified Relationship |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| relationships | GetLeadRelationship | GET | /v2/leads/{leadId}/relationships/{relationshipId} | Returns a relationship for a given lead and relationship. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| relationships | ListClientRelationships | GET | /v2/clients/{clientId}/relationships | Returns a list of relationships for a given client. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| relationships | ListClientRelationships | GET | /v1/clients/{clientId}/relationships | Get the Relationships |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| relationships | ListLeadRelationships | GET | /v2/leads/{leadId}/relationships | Returns a list of relationships for a given lead. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| relationships | UpdateClientRelationship | PUT | /v2/clients/{clientId}/relationships/{relationshipId} | Updates a relationship for a given client and relationship. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| relationships | UpdateLeadRelationship | PUT | /v2/leads/{leadId}/relationships/{relationshipId} | Updates a relationship for the given lead and relationship. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| relationshiptypes | ListRelationshiptypes | GET | /v2/relationshiptypes | Returns a list of relationship types. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| requirements | GetClientRequirement | GET | /v2/clients/{clientId}/requirements/{requirementId} | Gets a requirement. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| requirements | ListClientRequirements | GET | /v2/clients/{clientId}/requirements | Returns a list of requirements. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| savingsaccounts | DeleteClientSavingsaccount | DELETE | /v1/clients/{clientId}/plans/savingsaccounts/{planId} | Delete investment plan (savings account) |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| savingsaccounts | GetClientSavingsaccount | GET | /v1/clients/{clientId}/plans/savingsaccounts/{planId} | Get the specified Plan |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| savingsaccounts | ListClientPlansSavingsaccounts | GET | /v1/clients/{clientId}/plans/savingsaccounts | Returns a collection of investment plans (savings accounts) for the specified client. |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| savingsaccounts | UpdateClientSavingsaccount | PUT | /v1/clients/{clientId}/plans/savingsaccounts/{planId} | Update investment plan (savings account) |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| search, clients | CreateClientsSearch | POST | /v1/clients/search | Searchs clients using  filters and ordering specified in request |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| search, leads | CreateLeadsSearch | POST | /v1/leads/search | Searchs leads using filters and ordering specified in request |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| searches | ListClientsSearch | GET | /v2/clients/search | Returns a list of quick search clients for the user. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| servicecases | CreateClientServicecases | POST | /v2/clients/{clientId}/servicecases | Creates a service case for a given client. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| servicecases | GetClientServicecase | GET | /v2/clients/{clientId}/servicecases/{serviceCaseId} | Returns a service case for a given client and service case. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| servicecases | ListClientServicecases | GET | /v2/clients/{clientId}/servicecases | Returns a list of service cases for a given client. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| servicecases | UpdateClientServicecase | PUT | /v2/clients/{clientId}/servicecases/{serviceCaseId} | Updates a service case for a given client and service case. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| statuses | CreatePlanStatuses | POST | /v2/clients/{clientId}/plans/{planId}/statuses | Creates status history for a given client and plan. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| statuses | GetPlanStatus | GET | /v2/clients/{clientId}/plans/{planId}/statuses/{planStatusId} | Retrieves a specific history record |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| statuses | ListClientPlanStatuses | GET | /v2/clients/{clientId}/plans/{planId}/statuses | Returns a list of status histories for a given client and plan. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| tags | AddClientTag | POST | /v2/clients/{clientId}/tags/{tagName} | Creates a new tag for a given client. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tags | AddLeadTag | POST | /v2/leads/{leadId}/tags/{tagName} | Creates a new tag for a given lead. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tags | ListClientTags | GET | /v2/clients/{clientId}/tags | Returns a list of tags for a given client. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tags | ListLeadTags | GET | /v2/leads/{leadId}/tags | Returns a list of tags for a given lead. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tags | ListTags | GET | /v2/tags | Returns a list of tags for the client and lead resources. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tags | RemoveClientTag | DELETE | /v2/clients/{clientId}/tags/{tagName} | Deletes an existing tag for a given client. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tags | RemoveLeadTag | DELETE | /v2/leads/{leadId}/tags/{tagName} | Deletes an existing tag for a given lead. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tags | UpdateClientTags | PUT | /v2/clients/{clientId}/tags | Updates/Creates client's tags. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tags | UpdateLeadTags | PUT | /v2/leads/{leadId}/tags | Updates/Creates lead's tags. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tasks | CreateTask | POST | /v2/activities/tasks | Creates a task. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tasks | CreateTask | POST | /v1/tasks | Creates a new Task. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tasks | DeleteTask | DELETE | /v2/activities/tasks/{taskId} | Deletes a given task. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tasks | ExistsTask | HEAD | /v1/tasks/{taskId} | Retrieves the details of the specified Task. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tasks | GetTask | GET | /v2/activities/tasks/{taskId} | Returns a given task. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tasks | GetTask | GET | /v1/tasks/{taskId} | Retrieves the details of the specified Task. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tasks | GetTaskSettings | GET | /v1/tasks/settings | Retrievs the task notification settings. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tasks | ListPartiesTasks | GET | /v1/parties/{partyId}/tasks | Retrieves a list of Tasks for the specified Party. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tasks | ListTask | GET | /v2/activities/tasks | Returns a list of tasks. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tasks | ListTasks | GET | /v1/tasks | Retrieves a list of Tasks for the current user.              Example filters:     $filter=taskId  |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tasks | UpdateTask | PUT | /v2/activities/tasks/{taskId} | Updates a given task. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tasks | UpdateTask | PUT | /v1/tasks/{taskId} | Updates the specified Task. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tasks | UpdateTaskSettings | PUT | /v1/tasks/settings | Update the existing task notification settings. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tenants, beta | GetTenant | GET | /v2/tenants/{tenantId} | Retrieves the tenant resource specified |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tenants | GetTenant | GET | /v1/tenants/{tenantId} | Get details about a specific tenant |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| timeentries | ListTimeEntries | GET | /v2/time_entries | Returns a list of time entries. |  | Yes | Microservice.TimeRecording | Service Swagger (Microservice.TimeRecording) |
| timeentries | ListTimeEntries | GET | /v1/time_entries | Get the time entries by filter |  | Yes | Microservice.TimeRecording | Service Swagger (Microservice.TimeRecording) |
| transactions, beta | BatchCreateClientPlanTransactions | POST | /v2/clients/{clientId}/plans/{planId}/transactions | Creates a batch of transactions for a particular client and plan. |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| transactions, beta | BatchCreateClientTransactions | POST | /v2/clients/{clientId}/transactions | Creates a batch of transactions for different plans for a particular client. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| transactions, beta | BatchCreateTransactions | POST | /v2/transactions | Creates a batch of transactions for different plans. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| transactions, beta | ClientPlanTransactionExists | HEAD | /v2/clients/{clientId}/plans/{planId}/transactions/{transactionId} | Check to see if a transaction exists. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| transactions, beta | GetClientPlanTransaction | GET | /v2/clients/{clientId}/plans/{planId}/transactions/{transactionId} | Gets a single transaction by id. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| transactions, beta | ListClientPlanTransactions | GET | /v2/clients/{clientId}/plans/{planId}/transactions | Returns a list of transactions for a client plan. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| transactions, beta | ListClientTransactions | GET | /v2/clients/{clientId}/transactions | Returns a list of transactions for a client. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| transactions, beta | UpdateClientPlanTransaction | PATCH | /v2/clients/{clientId}/plans/{planId}/transactions/{transactionId} | Updates a client plan transaction. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| unmatchedplans | ListUnmatchedPlans | GET | /v2/plans/unmatched | Gets a Collection of unmatched Plans. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| update status | PatchAccountStatus | PATCH | /v2/accounts/{accountNumber}/status |  |  | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| update status | PatchMoneyMovementStatus | PATCH | /v2/accounts/{accountNumber}/moneymovements/{movementId}/status |  |  | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| update status | PatchSecurityTransferInstructionStatus | PATCH | /v2/accounts/{accountNumber}/transfers/{movementId}/status |  |  | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| update status | PatchStandingInstructionStatus | PATCH | /v2/accounts/{accountNumber}/banklink/{bankLinkRef}/status |  |  | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| update status | PutAccountModel | PUT | /v2/accounts/{accountNumber}/model |  |  | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| update status | PutMoneyMovementInstuction | PUT | /v2/accounts/{accountNumber}/moneymovements |  |  | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| userdiaryclassifications | GetUserDiaryClassification | GET | /v2/diary/users/{userId}/classifications/{userDiaryClassificationId} | Returns a given user diary classification. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| userdiaryclassifications | ListUserDiaryClassification | GET | /v2/diary/users/{userId}/classifications | Returns a list of user diary classifications. |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| valuations | CreateAssetValuations | POST | /v2/clients/{clientId}/assets/{assetId}/valuations | Creates a valuation on a given client and asset. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| valuations | CreatePlanValuations | POST | /v2/clients/{clientId}/plans/{planId}/valuations | Creates a valuation for a given client and plan. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| valuations | DeleteClientAssetValuation | DELETE | /v2/clients/{clientId}/assets/{assetId}/valuations/{valuationId} | Deletes an association on a valuation for a given client, asset and valuation. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| valuations | GetClientAssetValuation | GET | /v2/clients/{clientId}/assets/{assetId}/valuations/{valuationId} | Returns an association on a valuation for a given client, asset and valuation. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| valuations | GetClientPlanValuation | GET | /v2/clients/{clientId}/plans/{planId}/valuations/{valuationId} | Returns a valuation on a given client, plan and valuation. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| valuations | ListClientAssetValuations | GET | /v2/clients/{clientId}/assets/{assetId}/valuations | Returns a list of valuations on a given client and asset. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| valuations | ListClientPlanValuations | GET | /v2/clients/{clientId}/plans/{planId}/valuations | Returns a list of valuations for a given client and plan. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| valuations | ListClientValuationsAssetliabilityTimeseries | GET | /v1/clients/{clientId}/valuations/assetliability_timeseries | Get a list of aggregated valuations for assets and for liabilites for all the plans and accounts for |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| valuations | ListClientValuationsPortfolioValuations | GET | /v1/clients/{clientId}/valuations/portfolio_valuations | Get a list of valuations for all plans for the logged in user. |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| valuations | ListClientValuationsTimeseries | GET | /v1/clients/{clientId}/valuations/timeseries | Get a list of aggregated valuations for all the plans and accounts for the logged in user. |  | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| valuations | UpdateClientAssetValuation | PUT | /v2/clients/{clientId}/assets/{assetId}/valuations/{valuationId} | Updates or creates an association on a valuation for a given client, asset and valuation. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| valuations | UpdateClientPlanValuation | PUT | /v2/clients/{clientId}/plans/{planId}/valuations/{valuationId} | Updates a valuation on a given client, plan and valuation. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| vulnerabilities | GetClientVulnerability | GET | /v2/clients/{clientId}/vulnerabilities/{vulnerabilityId} | Get a single client vulnerability. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| vulnerabilities | GetClientVulnerabilityCurrent | GET | /v2/clients/{clientId}/vulnerabilities/current | Get client's current vulnerability. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| vulnerabilities | ListClientsVulnerabilities | GET | /v2/clients/vulnerabilities/current | Returns a list of current vulnerabilities for clients defined in the filter. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| vulnerabilities | UpdateClientVulnerabilitiesCurrent | PUT | /v2/clients/{clientId}/vulnerabilities/current | Update client's current vulnerability. |  | Yes | Monolith.Crm | Service Swagger (Monolith.Crm) |
| withdrawals | CreatePlanWithdrawals | POST | /v2/clients/{clientId}/plans/{planId}/withdrawals | Creates a withdrawal for a given client and plan. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| withdrawals | DeleteClientPlanWithdrawal | DELETE | /v2/clients/{clientId}/plans/{planId}/withdrawals/{withdrawalId} | Deletes a withdrawal for a given client, plan and withdrawal. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| withdrawals | GetClientPlanWithdrawal | GET | /v2/clients/{clientId}/plans/{planId}/withdrawals/{withdrawalId} | Returns a withdrawal for a given client, plan and withdrawal. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| withdrawals, beta | ListClientPlanWithdrawals | GET | /v2/clients/{clientId}/plans/{planId}/withdrawals | Returns a list of withdrawal for a given client and plan. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| withdrawals | UpdateClientPlanWithdrawal | PUT | /v2/clients/{clientId}/plans/{planId}/withdrawals/{withdrawalId} | Updates a withdrawal for a given client, plan and withdrawal. |  | Yes | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |

## APIs by Portal Status

### On Developer Portal (343)

These APIs are documented on the developer portal.

| Operation ID | Method | Endpoint | Service |
|-------------|--------|----------|--------|
| CreateClientAddress | POST | /v2/clients/{clientId}/addresses | Monolith.Crm |
| CreateLeadAddress | POST | /v2/leads/{leadId}/addresses | Monolith.Crm |
| DeleteClientAddress | DELETE | /v2/clients/{clientId}/addresses/{addressId} | Monolith.Crm |
| DeleteLeadAddress | DELETE | /v2/leads/{leadId}/addresses/{addressId} | Monolith.Crm |
| GetAdviserAddress | GET | /v2/advisers/{adviserId}/addresses/{addressId} | Monolith.Crm |
| GetClientAddress | GET | /v2/clients/{clientId}/addresses/{addressId} | Monolith.Crm |
| GetLeadAddress | GET | /v2/leads/{leadId}/addresses/{addressId} | Monolith.Crm |
| ListAdviserAddresses | GET | /v2/advisers/{adviserId}/addresses | Monolith.Crm |
| ListClientAddresses | GET | /v2/clients/{clientId}/addresses | Monolith.Crm |
| ListLeadAddresses | GET | /v2/leads/{leadId}/addresses | Monolith.Crm |
| UpdateClientAddress | PUT | /v2/clients/{clientId}/addresses/{addressId} | Monolith.Crm |
| UpdateLeadAddress | PUT | /v2/leads/{leadId}/addresses/{addressId} | Monolith.Crm |
| AdviserExists | HEAD | /v2/advisers/{adviserId} | Monolith.Crm |
| GetAdviser | GET | /v2/advisers/{adviserId} | Monolith.Crm |
| GetAdviser | GET | /v1/advisers/{partyId} | Monolith.Crm |
| ListAdvisers | GET | /v2/advisers | Monolith.Crm |
| ListGatedPlanTypesByAdviserId | GET | /v2/advisers/{adviserId}/planTypes | Monolith.Portfolio |
| ExistInstalledApp | HEAD | /v2/installed_apps/{appId} | Microservice.AppD |
| GetInstalledApp | GET | /v2/installed_apps/{appId} | Microservice.AppD |
| GetInstalledAppGroupSettings | GET | /v2/installed_apps/{appId}/group_settings/{groupId} | Microservice.AppD |
| GetInstalledAppUserSettings | GET | /v2/installed_apps/{appId}/user_settings/{userId} | Microservice.AppD |
| ListInstalledAppGroupSettings | GET | /v2/installed_apps/{appId}/group_settings | Microservice.AppD |
| ListInstalledApps | GET | /v2/installed_apps | Microservice.AppD |
| ListInstalledAppUserSettings | GET | /v2/installed_apps/{appId}/user_settings | Microservice.AppD |
| UpdateInstalledAppGroupSettings | PUT | /v2/installed_apps/{appId}/group_settings/{groupId} | Microservice.AppD |
| UpdateInstalledAppUserSettings | PUT | /v2/installed_apps/{appId}/user_settings/{userId} | Microservice.AppD |
| CreateClientAssets | POST | /v2/clients/{clientId}/assets | Monolith.Portfolio |
| DeleteClientAsset | DELETE | /v2/clients/{clientId}/assets/{assetId} | Monolith.Portfolio |
| GetClientAsset | GET | /v2/clients/{clientId}/assets/{assetId} | Monolith.Portfolio |
| ListClientAssets | GET | /v2/clients/{clientId}/assets | Monolith.Portfolio |
| UpdateClientAsset | PUT | /v2/clients/{clientId}/assets/{assetId} | Monolith.Portfolio |
| AcceptTenantProviderAtrTemplate | POST | /v2/installed_apps/atr_templates/{id}/accept | Monolith.Atr |
| ActivateAtrTemplate | POST | /v2/attitudeToRisk/atr_templates/{templateId}/active | Monolith.Atr |
| ActivateProviderAtrTemplate | POST | /v2/attitudeToRisk/apps/{appId}/atr_templates/{templateId}/activate | Monolith.Atr |
| CreateAtrTemplate | POST | /v2/attitudeToRisk/atr_templates | Monolith.Atr |
| CreateClientAtr | POST | /v2/clients/{clientId}/attitudeToRisk | Monolith.Atr |
| CreateProviderAtrTemplate | POST | /v2/attitudeToRisk/apps/{appId}/atr_templates | Monolith.Atr |
| DeleteClientAtr | DELETE | /v2/clients/{clientId}/attitudeToRisk/{atrId} | Monolith.Atr |
| GetAtrTemplateV2 | GET | /v2/attitudeToRisk/atr_templates/{templateId} | Monolith.Atr |
| GetClientAtr | GET | /v2/clients/{clientId}/attitudeToRisk/{atrId} | Monolith.Atr |
| GetProviderAtrTemplate | GET | /v2/attitudeToRisk/apps/{appId}/atr_templates/{templateId} | Monolith.Atr |
| GetTenantProviderAtrTemplate | GET | /v2/installed_apps/atr_templates/{id} | Monolith.Atr |
| ListAtrTemplatesV2 | GET | /v2/attitudeToRisk/atr_templates | Monolith.Atr |
| ListClientAtrs | GET | /v2/clients/{clientId}/attitudeToRisk | Monolith.Atr |
| ListProviderAtrTemplates | GET | /v2/attitudeToRisk/apps/{appId}/atr_templates | Monolith.Atr |
| ListTenantProviderAtrTemplates | GET | /v2/installed_apps/atr_templates | Monolith.Atr |
| PatchAtrTemplate | PATCH | /v2/attitudeToRisk/atr_templates/{templateId} | Monolith.Atr |
| PatchClientAtr | PATCH | /v2/clients/{clientId}/attitudeToRisk/{atrId} | Monolith.Atr |
| UpdateAtrTemplate | PUT | /v2/attitudeToRisk/atr_templates/{templateId} | Monolith.Atr |
| UpdateClientAtrResult | PUT | /v2/clients/{clientId}/attitudeToRisk/{atrId}/result | Monolith.Atr |
| DeleteClientPlanBeneficiaries | DELETE | /v2/clients/{clientId}/plans/{planId}/beneficiaries | Monolith.Portfolio |
| ListClientPlansBeneficiaries | GET | /v2/clients/{clientId}/plans/{planId}/beneficiaries | Monolith.Portfolio |
| UpdateClientPlansBeneficiaries | PUT | /v2/clients/{clientId}/plans/{planId}/beneficiaries | Monolith.Portfolio |
| DeleteValuationBatch | DELETE | /v2/valuations/batches/{batchId} | Monolith.Valuation |
| EnqueueValuationBatch | POST | /v2/valuations/batches | Monolith.Valuation |
| GetValuationBatch | GET | /v2/valuations/batches/{batchId} | Monolith.Valuation |
| ListValuationBatches | GET | /v2/valuations/batches | Monolith.Valuation |
| ListValuationBatchResults | GET | /v2/valuations/batches/{batchId}/results | Monolith.Valuation |
| CreateClientPlanCharge | POST | /v2/clients/{clientId}/plans/{planId}/charges | Monolith.Charging |
| DeleteClientPlanCharge | DELETE | /v2/clients/{clientId}/plans/{planId}/charges/{chargeId} | Monolith.Charging |
| GetClientPlanCharge | GET | /v2/clients/{clientId}/plans/{planId}/charges/{chargeId} | Monolith.Charging |
| ListClientPlanCharges | GET | /v2/clients/{clientId}/plans/{planId}/charges | Monolith.Charging |
| UpdateClientPlanCharge | PUT | /v2/clients/{clientId}/plans/{planId}/charges/{chargeId} | Monolith.Charging |
| ClientExists | HEAD | /v2/clients/{clientId} | Monolith.Crm |
| CreateClient | POST | /v2/clients | Monolith.Crm |
| CreateClient | POST | /v1/clients | Monolith.Crm |
| CreateClientIncome | POST | /v1/clients/{clientId}/incomes | Monolith.FactFind |
| DeleteClient | DELETE | /v2/clients/{clientId} | Monolith.Crm |
| DeleteClientExpenditure | DELETE | /v1/clients/{clientId}/expenditure | Monolith.FactFind |
| DeleteClientIncome | DELETE | /v1/clients/{clientId}/incomes/{incomeId} | Monolith.FactFind |
| GetClient | GET | /v2/clients/{clientId} | Monolith.Crm |
| GetClient | GET | /v1/clients/{partyId} | Monolith.Crm |
| GetClientExpenditure | GET | /v1/clients/{clientId}/expenditure | Monolith.FactFind |
| GetClientIncome | GET | /v1/clients/{clientId}/incomes/{incomeId} | Monolith.FactFind |
| GetClientServicecase | GET | /v1/clients/{clientId}/servicecases/{serviceCaseId} | Monolith.Crm |
| ListClientIncomes | GET | /v1/clients/{clientId}/incomes | Monolith.FactFind |
| ListClients | GET | /v2/clients | Monolith.Crm |
| ListClientSegments | GET | /v2/clients/client_segments | Monolith.Crm |
| ListClientServicecases | GET | /v1/clients/{clientId}/servicecases | Monolith.Crm |
| UpdateClient | PUT | /v2/clients/{clientId} | Monolith.Crm |
| UpdateClient | PUT | /v1/clients/{partyId} | Monolith.Crm |
| UpdateClientExpenditure | PUT | /v1/clients/{clientId}/expenditure | Monolith.FactFind |
| UpdateClientIncome | PUT | /v1/clients/{clientId}/incomes/{incomeId} | Monolith.FactFind |
| CreateClientContactdetails | POST | /v2/clients/{clientId}/contactdetails | Monolith.Crm |
| CreateLeadContactdetails | POST | /v2/leads/{leadId}/contactdetails | Monolith.Crm |
| DeleteClientContactdetail | DELETE | /v2/clients/{clientId}/contactdetails/{contactDetailId} | Monolith.Crm |
| DeleteLeadContactdetail | DELETE | /v2/leads/{leadId}/contactdetails/{contactDetailId} | Monolith.Crm |
| GetAdviserContactdetail | GET | /v2/advisers/{adviserId}/contactdetails/{contactDetailId} | Monolith.Crm |
| GetClientContactdetail | GET | /v2/clients/{clientId}/contactdetails/{contactDetailId} | Monolith.Crm |
| GetLeadContactdetail | GET | /v2/leads/{leadId}/contactdetails/{contactDetailId} | Monolith.Crm |
| ListAdviserContactdetails | GET | /v2/advisers/{adviserId}/contactdetails | Monolith.Crm |
| ListClientContactdetails | GET | /v2/clients/{clientId}/contactdetails | Monolith.Crm |
| ListLeadContactdetails | GET | /v2/leads/{leadId}/contactdetails | Monolith.Crm |
| UpdateClientContactdetail | PUT | /v2/clients/{clientId}/contactdetails/{contactDetailId} | Monolith.Crm |
| UpdateLeadContactdetail | PUT | /v2/leads/{leadId}/contactdetails/{contactDetailId} | Monolith.Crm |
| CreatePlanContributions | POST | /v2/clients/{clientId}/plans/{planId}/contributions | Monolith.Portfolio |
| DeleteClientPlanContribution | DELETE | /v2/clients/{clientId}/plans/{planId}/contributions/{contributionId} | Monolith.Portfolio |
| GetClientPlanContribution | GET | /v2/clients/{clientId}/plans/{planId}/contributions/{contributionId} | Monolith.Portfolio |
| ListClientPlanContributions | GET | /v2/clients/{clientId}/plans/{planId}/contributions | Monolith.Portfolio |
| UpdateClientPlanContribution | PUT | /v2/clients/{clientId}/plans/{planId}/contributions/{contributionId} | Monolith.Portfolio |
| GetQuestion | GET | /v2/questions/{questionId} | Monolith.Crm |
| ListQuestions | GET | /v2/questions | Monolith.Crm |
| ListQuestionsAnswers | GET | /v2/clients/{clientId}/questions | Monolith.Crm |
| CreateClientDependant | POST | /v2/clients/{clientId}/dependants | Monolith.FactFind |
| DeleteClientDependant | DELETE | /v2/clients/{clientId}/dependants/{dependantId} | Monolith.FactFind |
| GetClientDependant | GET | /v2/clients/{clientId}/dependants/{dependantId} | Monolith.FactFind |
| ListClientDependants | GET | /v2/clients/{clientId}/dependants | Monolith.FactFind |
| UpdateClientDependant | PUT | /v2/clients/{clientId}/dependants/{dependantId} | Monolith.FactFind |
| GetDocument | GET | /v2/clients/{clientId}/plans/{planId}/documents/{documentId} | Microservice.ProviderIntegration |
| CreateDocumentFolder | POST | /v2/clients/{clientId}/documentfolders | Monolith.Storage |
| GetDocumentFolder | GET | /v2/clients/{clientId}/documentfolders/{documentFolderId} | Monolith.Storage |
| ListDocumentFolders | GET | /v2/clients/{clientId}/documentfolders | Monolith.Storage |
| CreateClientDocument | POST | /v2/clients/{clientId}/documents | Monolith.Storage |
| GetClientDocument | GET | /v2/clients/{clientId}/documents/{documentId} | Monolith.Storage |
| GetClientDocument | GET | /v1/clients/{clientId}/documents/{documentId} | Microservice.ClientStorage |
| GetDocument | GET | /v1/documents/{documentId} | Microservice.ClientStorage |
| ListClientDocuments | GET | /v2/clients/{clientId}/documents | Monolith.Storage |
| ListClientDocuments | GET | /v1/clients/{clientId}/documents | Microservice.ClientStorage |
| UpdateClientDocument | PUT | /v2/clients/{clientId}/documents/{documentId} | Monolith.Storage |
| CreateClientDpaPolicyAgreement | POST | /v2/clients/{clientId}/dpa_agreements | Microservice.DPA |
| CreateDPAPolicy | POST | /v2/dpa_policies | Microservice.DPA |
| DeleteDPAPolicy | DELETE | /v2/dpa_policies/{policyId} | Microservice.DPA |
| GetClientDpaPolicyAgreement | GET | /v2/clients/{clientId}/dpa_agreements/{agreementId} | Microservice.DPA |
| GetCurrentDPAPolicy | GET | /v2/dpa_policies/current | Microservice.DPA |
| GetDpaPolicy | GET | /v2/dpa_policies/{policyId} | Microservice.DPA |
| ListClientDpaPolicyAgreements | GET | /v2/clients/{clientId}/dpa_agreements | Microservice.DPA |
| ListDpaPolicies | GET | /v2/dpa_policies | Microservice.DPA |
| PatchDPAPolicy | PATCH | /v2/dpa_policies/{policyId} | Microservice.DPA |
| UpdateDPAPolicy | PUT | /v2/dpa_policies/{policyId} | Microservice.DPA |
| CreateClientEmployment | POST | /v2/clients/{clientId}/employments | Monolith.FactFind |
| DeleteClientEmployment | DELETE | /v2/clients/{clientId}/employments/{employmentId} | Monolith.FactFind |
| GetClientEmployment | GET | /v2/clients/{clientId}/employments/{employmentId} | Monolith.FactFind |
| ListClientEmployments | GET | /v2/clients/{clientId}/employments | Monolith.FactFind |
| UpdateClientEmployment | PUT | /v2/clients/{clientId}/employments/{employmentId} | Monolith.FactFind |
| CreateClientExpenditure | POST | /v2/clients/{clientId}/expenditures | Monolith.FactFind |
| DeleteClientExpenditure | DELETE | /v2/clients/{clientId}/expenditures/{expenditureId} | Monolith.FactFind |
| GetClientExpenditure | GET | /v2/clients/{clientId}/expenditures/{expenditureId} | Monolith.FactFind |
| ListClientExpenditures | GET | /v2/clients/{clientId}/expenditures | Monolith.FactFind |
| UpdateClientExpenditure | PUT | /v2/clients/{clientId}/expenditures/{expenditureId} | Monolith.FactFind |
| CreateClientFees | POST | /v2/clients/{clientId}/fees | Monolith.Charging |
| CreateClientPlanFee | POST | /v2/clients/{clientId}/plans/{planId}/fees/{feeId} | Monolith.Charging |
| DeleteClientPlanFee | DELETE | /v2/clients/{clientId}/plans/{planId}/fees/{feeId} | Monolith.Charging |
| GetClientFee | GET | /v2/clients/{clientId}/fees/{feeId} | Monolith.Charging |
| GetClientPlanFee | GET | /v2/clients/{clientId}/plans/{planId}/fees/{feeId} | Monolith.Charging |
| ListClientFees | GET | /v2/clients/{clientId}/fees | Monolith.Charging |
| ListClientPlanFees | GET | /v2/clients/{clientId}/plans/{planId}/fees | Monolith.Charging |
| UpdateClientFee | PUT | /v2/clients/{clientId}/fees/{feeId} | Monolith.Charging |
| ListFundPrices | GET | /v2/funds/{fundId}/prices | Monolith.Portfolio |
| DeleteClientPlanFundproposal | DELETE | /v2/clients/{clientId}/plans/{planId}/fundproposal | Monolith.Portfolio |
| GetClientPlanFundproposal | GET | /v2/clients/{clientId}/plans/{planId}/fundproposal | Monolith.Portfolio |
| UpdateClientPlanFundproposal | PUT | /v2/clients/{clientId}/plans/{planId}/fundproposal | Monolith.Portfolio |
| GetFundprovider | GET | /v2/fundproviders/{code} | Monolith.Portfolio |
| ListFundproviders | GET | /v2/fundproviders | Monolith.Portfolio |
| CreateFund | POST | /v2/funds | Monolith.Portfolio |
| GetFund | GET | /v2/funds/{fundId} | Monolith.Portfolio |
| ListFunds | GET | /v2/funds | Monolith.Portfolio |
| UpdateFund | PUT | /v2/funds/{fundId} | Monolith.Portfolio |
| GetFundsector | GET | /v2/fundsectors/{code} | Monolith.Portfolio |
| ListFundsectors | GET | /v2/fundsectors | Monolith.Portfolio |
| GetClientPlanHoldingTransaction | GET | /v2/clients/{clientId}/plans/{planId}/holdings/{holdingId}/transactions/{transactionId} | Monolith.Portfolio |
| ListClientPlanHoldingTransactions | GET | /v2/clients/{clientId}/plans/{planId}/holdings/{holdingId}/transactions | Monolith.Portfolio |
| CreatePlanHoldings | POST | /v2/clients/{clientId}/plans/{planId}/holdings | Monolith.Portfolio |
| GetClientPlanHolding | GET | /v2/clients/{clientId}/plans/{planId}/holdings/{holdingId} | Monolith.Portfolio |
| ListClientPlanHoldings | GET | /v2/clients/{clientId}/plans/{planId}/holdings | Monolith.Portfolio |
| UpdateClientPlanHolding | PUT | /v2/clients/{clientId}/plans/{planId}/holdings/{holdingId} | Monolith.Portfolio |
| CreateClientIncome | POST | /v2/clients/{clientId}/incomes | Monolith.FactFind |
| DeleteClientIncome | DELETE | /v2/clients/{clientId}/incomes/{incomeId} | Monolith.FactFind |
| GetClientIncome | GET | /v2/clients/{clientId}/incomes/{incomeId} | Monolith.FactFind |
| ListClientIncomes | GET | /v2/clients/{clientId}/incomes | Monolith.FactFind |
| UpdateClientIncome | PUT | /v2/clients/{clientId}/incomes/{incomeId} | Monolith.FactFind |
| CreateIncomeStatement | POST | /v2/incomestatements | Monolith.Commission |
| CreateIncomeStatementItems | POST | /v2/incomestatements/{incomeStatementId}/items | Monolith.Commission |
| DeleteIncomeStatement | DELETE | /v2/incomestatements/{incomeStatementId} | Monolith.Commission |
| GetIncomeStatement | GET | /v2/incomestatements/{incomeStatementId} | Monolith.Commission |
| GetIncomeStatementItem | GET | /v2/incomestatements/{incomeStatementId}/items/{incomeStatementItemId} | Monolith.Commission |
| ListIncomeStatementItems | GET | /v2/incomestatements/{incomeStatementId}/items | Monolith.Commission |
| ListIncomeStatements | GET | /v2/incomestatements | Monolith.Commission |
| UpdateIncomeStatement | PUT | /v2/incomestatements/{incomeStatementId} | Monolith.Commission |
| UpdateIncomeStatementItem | PUT | /v2/incomestatements/{incomeStatementId}/items/{incomeStatementItemId} | Monolith.Commission |
| CreateLead | POST | /v2/leads | Monolith.Crm |
| CreateLead | POST | /v1/leads | Monolith.Crm |
| DeleteLead | DELETE | /v2/leads/{leadId} | Monolith.Crm |
| GetLead | GET | /v2/leads/{leadId} | Monolith.Crm |
| GetLead | GET | /v1/leads/{partyId} | Monolith.Crm |
| LeadExists | HEAD | /v2/leads/{leadId} | Monolith.Crm |
| ListLeads | GET | /v2/leads | Monolith.Crm |
| UpdateLead | PUT | /v2/leads/{leadId} | Monolith.Crm |
| GetLifecycle | GET | /v2/lifecycles/{lifecycleId} | Monolith.Portfolio |
| ListLifecycles | GET | /v2/lifecycles | Monolith.Portfolio |
| ListLifecycleStatuses | GET | /v2/lifecycles/statuses | Monolith.Portfolio |
| ListLifecycleTransitions | GET | /v2/lifecycles/{lifecycleId}/transitions | Monolith.Portfolio |
| ListClientPlansLivesAssured | GET | /v2/clients/{clientId}/plans/{planId}/livesassured | Monolith.Portfolio |
| UpdateClientPlansLivesAssured | PUT | /v2/clients/{clientId}/plans/{planId}/livesassured | Monolith.Portfolio |
| GetClientMarketingPreferences | GET | /v2/clients/{clientId}/marketing_preferences | Monolith.Crm |
| GetLeadMarketingPreferences | GET | /v2/leads/{leadId}/marketing_preferences | Monolith.Crm |
| UpdateClientMarketingPreferences | PUT | /v2/clients/{clientId}/marketing_preferences | Monolith.Crm |
| UpdateLeadMarketingPreferences | PUT | /v2/leads/{leadId}/marketing_preferences | Monolith.Crm |
| ActivatePortfolioModel | POST | /v2/models/{modelId}/active | Monolith.Portfolio |
| CreateDraftPortfolioModel | POST | /v2/models/draft | Monolith.Portfolio |
| CreateModel | POST | /v2/models | Monolith.Portfolio |
| CreateProviderModel | POST | /v2/apps/{appId}/models | Microservice.iMps |
| GetModel | GET | /v2/models/{modelId} | Monolith.Portfolio |
| GetProviderModel | GET | /v2/apps/{appId}/models/{modelId} | Microservice.iMps |
| GetProviderModels | GET | /v2/apps/{appId}/models | Microservice.iMps |
| ListModels | GET | /v2/models | Monolith.Portfolio |
| PatchModel | PATCH | /v2/models/{modelId} | Monolith.Portfolio |
| PublishDraftPortfolioModel | POST | /v2/models/draft/{modelId}/publish | Monolith.Portfolio |
| UpdateDraftPortfolioModel | PUT | /v2/models/draft/{modelId} | Monolith.Portfolio |
| UpdateOrCreatePortfolioModel | PUT | /v2/models | Monolith.Portfolio |
| CreateCampaignChannel | POST | /v2/opportunities/campaignchannels | Monolith.Crm |
| CreateCampaignType | POST | /v2/opportunities/campaigntypes | Monolith.Crm |
| CreateClientOpportunity | POST | /v2/clients/{clientId}/opportunities | Monolith.Crm |
| CreateLeadOpportunity | POST | /v2/leads/{leadId}/opportunities | Monolith.Crm |
| CreateOpportunityCampaign | POST | /v2/opportunities/campaigns | Monolith.Crm |
| CreateOpportunityProposition | POST | /v2/opportunities/propositions | Monolith.Crm |
| CreateOpportunityStatus | POST | /v2/opportunities/statuses | Monolith.Crm |
| CreateOpportunityType | POST | /v2/opportunities/types | Monolith.Crm |
| DeleteCampaignChannel | DELETE | /v2/opportunities/campaignchannels/{campaignChannelId} | Monolith.Crm |
| DeleteCampaignType | DELETE | /v2/opportunities/campaigntypes/{campaignTypeId} | Monolith.Crm |
| DeleteOpportunityCampaign | DELETE | /v2/opportunities/campaigns/{opportunityCampaignId} | Monolith.Crm |
| DeleteOpportunityProposition | DELETE | /v2/opportunities/propositions/{propositionId} | Monolith.Crm |
| DeleteOpportunityStatus | DELETE | /v2/opportunities/statuses/{opportunityStatusId} | Monolith.Crm |
| DeleteOpportunityType | DELETE | /v2/opportunities/types/{opportunityTypeId} | Monolith.Crm |
| GetClientOpportunity | GET | /v2/clients/{clientId}/opportunities/{opportunityId} | Monolith.Crm |
| GetLeadOpportunity | GET | /v2/leads/{leadId}/opportunities/{opportunityId} | Monolith.Crm |
| GetOpportunityType | GET | /v2/opportunities/types/{opportunityTypeId} | Monolith.Crm |
| ListCampaignChannels | GET | /v2/opportunities/campaignchannels | Monolith.Crm |
| ListCampaignTypes | GET | /v2/opportunities/campaigntypes | Monolith.Crm |
| ListClientOpportunities | GET | /v2/clients/{clientId}/opportunities | Monolith.Crm |
| ListLeadOpportunities | GET | /v2/leads/{leadId}/opportunities | Monolith.Crm |
| ListOpportunityCampaigns | GET | /v2/opportunities/campaigns | Monolith.Crm |
| ListOpportunityPropositions | GET | /v2/opportunities/propositions | Monolith.Crm |
| ListOpportunityStatuses | GET | /v2/opportunities/statuses | Monolith.Crm |
| ListOpportunityTypes | GET | /v2/opportunities/types | Monolith.Crm |
| UpdateCampaignChannel | PUT | /v2/opportunities/campaignchannels/{campaignChannelId} | Monolith.Crm |
| UpdateCampaignType | PUT | /v2/opportunities/campaigntypes/{campaignTypeId} | Monolith.Crm |
| UpdateClientOpportunity | PUT | /v2/clients/{clientId}/opportunities/{opportunityId} | Monolith.Crm |
| UpdateLeadOpporunity | PUT | /v2/leads/{leadId}/opportunities/{opportunityId} | Monolith.Crm |
| UpdateOpportunityCampaign | PUT | /v2/opportunities/campaigns/{opportunityCampaignId} | Monolith.Crm |
| UpdateOpportunityProposition | PUT | /v2/opportunities/propositions/{propositionId} | Monolith.Crm |
| UpdateOpportunityStatus | PUT | /v2/opportunities/statuses/{opportunityStatusId} | Monolith.Crm |
| UpdateOpportunityType | PUT | /v2/opportunities/types/{opportunityTypeId} | Monolith.Crm |
| CreatePersonalContact | POST | /v2/clients/{clientId}/personalContacts | Monolith.Crm |
| DeletePersonalContact | DELETE | /v2/clients/{clientId}/personalContacts/{personalContactId} | Monolith.Crm |
| GetPersonalContact | GET | /v2/clients/{clientId}/personalContacts/{personalContactId} | Monolith.Crm |
| ListPersonalContacts | GET | /v2/clients/{clientId}/personalContacts | Monolith.Crm |
| PatchPersonalContact | PATCH | /v2/clients/{clientId}/personalContacts/{personalContactId} | Monolith.Crm |
| UpdatePersonalContact | PUT | /v2/clients/{clientId}/personalContacts/{personalContactId} | Monolith.Crm |
| CreateClientOpportunityPlan | POST | /v2/clients/{clientId}/opportunities/{opportunityId}/plans/{planId} | Monolith.Crm |
| CreateClientPlans | POST | /v2/clients/{clientId}/plans | Monolith.Portfolio |
| CreateClientServicecasePlan | POST | /v2/clients/{clientId}/servicecases/{serviceCaseId}/plans/{planId} | Monolith.Crm |
| CreateTopupPlan | POST | /v2/clients/{clientId}/plans/{planId} | Monolith.Portfolio |
| DeleteClientOpportunityPlan | DELETE | /v2/clients/{clientId}/opportunities/{opportunityId}/plans/{planId} | Monolith.Crm |
| DeleteClientPlan | DELETE | /v2/clients/{clientId}/plans/{planId} | Monolith.Portfolio |
| DeleteClientServicecasePlan | DELETE | /v2/clients/{clientId}/servicecases/{serviceCaseId}/plans/{planId} | Monolith.Crm |
| ExistsClientPlan | HEAD | /v2/clients/{clientId}/plans/{planId} | Monolith.Portfolio |
| GetClientPlan | GET | /v2/clients/{clientId}/plans/{planId} | Monolith.Portfolio |
| GetPlan | GET | /v2/plans/{planId} | Monolith.Portfolio |
| ListClientPlans | GET | /v2/clients/{clientId}/plans | Monolith.Portfolio |
| PatchClientPlan | PATCH | /v2/clients/{clientId}/plans/{planId} | Monolith.Portfolio |
| PlanExists | HEAD | /v2/plans/{planId} | Monolith.Portfolio |
| UpdateClientPlan | PUT | /v2/clients/{clientId}/plans/{planId} | Monolith.Portfolio |
| ListGatedPlanTypes | GET | /v2/plantypes/adviser/{adviserId} | Monolith.Portfolio |
| ListPlantypes | GET | /v2/plantypes | Monolith.Portfolio |
| GetProductprovider | GET | /v2/productproviders/{productProviderId} | Monolith.Crm |
| ListProductproviders | GET | /v2/productproviders | Monolith.Crm |
| ListProductproviders | GET | /v1/productproviders | Monolith.Crm |
| ListClientPlansPurposes | GET | /v2/clients/{clientId}/plans/{planId}/purposes | Monolith.Portfolio |
| UpdateClientPlansPurposes | PUT | /v2/clients/{clientId}/plans/{planId}/purposes | Monolith.Portfolio |
| AddClientQuoteApplicant | POST | /v2/clients/{clientId}/quotes/{quoteId} | Microservice.Quotation |
| ClientQuoteExists | HEAD | /v2/clients/{clientId}/quotes/{quoteId} | Microservice.Quotation |
| ClientQuoteResultsExists | HEAD | /v2/clients/{clientId}/quotes/{quoteId}/results/{quoteResultId} | Microservice.Quotation |
| CreateClientQuote | POST | /v2/clients/{clientId}/quotes | Microservice.Quotation |
| CreateClientQuoteResult | POST | /v2/clients/{clientId}/quotes/{quoteId}/results | Microservice.Quotation |
| GetClientQuote | GET | /v2/clients/{clientId}/quotes/{quoteId} | Microservice.Quotation |
| GetClientQuoteResult | GET | /v2/clients/{clientId}/quotes/{quoteId}/results/{quoteResultId} | Microservice.Quotation |
| GetClientQuoteResultProductBenefits | GET | /v2/clients/{clientId}/quotes/{quoteId}/results/{quoteResultId}/benefits | Microservice.Quotation |
| ListClientQuoteResults | GET | /v2/clients/{clientId}/quotes/{quoteId}/results | Microservice.Quotation |
| ListClientQuotes | GET | /v2/clients/{clientId}/quotes | Microservice.Quotation |
| SetClientQuoteStatus | POST | /v2/clients/{clientId}/quotes/{quoteId}/status/{status} | Microservice.Quotation |
| UpdateClientQuoteResultProductBenefits | PUT | /v2/clients/{clientId}/quotes/{quoteId}/results/{quoteResultId}/benefits | Microservice.Quotation |
| CreateClientRelationship | POST | /v2/clients/{clientId}/relationships | Monolith.Crm |
| CreateClientRelationshipAccess | POST | /v2/clients/{clientId}/relationships/{relationshipId}/access | Monolith.Crm |
| CreateClientRelationshipWithRelation | POST | /v2/clients/{clientId}/relationships/relation | Monolith.Crm |
| CreateLeadRelationship | POST | /v2/leads/{leadId}/relationships | Monolith.Crm |
| DeleteClientRelationship | DELETE | /v2/clients/{clientId}/relationships/{relationshipId} | Monolith.Crm |
| DeleteClientRelationshipAccess | DELETE | /v2/clients/{clientId}/relationships/{relationshipId}/access | Monolith.Crm |
| DeleteLeadRelationship | DELETE | /v2/leads/{leadId}/relationships/{relationshipId} | Monolith.Crm |
| GetClientRelationship | GET | /v2/clients/{clientId}/relationships/{relationshipId} | Monolith.Crm |
| GetClientRelationship | GET | /v1/clients/{clientId}/relationships/{relationshipId} | Monolith.Crm |
| GetLeadRelationship | GET | /v2/leads/{leadId}/relationships/{relationshipId} | Monolith.Crm |
| ListClientRelationships | GET | /v2/clients/{clientId}/relationships | Monolith.Crm |
| ListClientRelationships | GET | /v1/clients/{clientId}/relationships | Monolith.Crm |
| ListLeadRelationships | GET | /v2/leads/{leadId}/relationships | Monolith.Crm |
| UpdateClientRelationship | PUT | /v2/clients/{clientId}/relationships/{relationshipId} | Monolith.Crm |
| UpdateLeadRelationship | PUT | /v2/leads/{leadId}/relationships/{relationshipId} | Monolith.Crm |
| ListRelationshiptypes | GET | /v2/relationshiptypes | Monolith.Crm |
| CreateClientServicecases | POST | /v2/clients/{clientId}/servicecases | Monolith.Crm |
| GetClientServicecase | GET | /v2/clients/{clientId}/servicecases/{serviceCaseId} | Monolith.Crm |
| ListClientServicecases | GET | /v2/clients/{clientId}/servicecases | Monolith.Crm |
| UpdateClientServicecase | PUT | /v2/clients/{clientId}/servicecases/{serviceCaseId} | Monolith.Crm |
| CreatePlanStatuses | POST | /v2/clients/{clientId}/plans/{planId}/statuses | Monolith.Portfolio |
| GetPlanStatus | GET | /v2/clients/{clientId}/plans/{planId}/statuses/{planStatusId} | Monolith.Portfolio |
| ListClientPlanStatuses | GET | /v2/clients/{clientId}/plans/{planId}/statuses | Monolith.Portfolio |
| AddClientTag | POST | /v2/clients/{clientId}/tags/{tagName} | Monolith.Crm |
| AddLeadTag | POST | /v2/leads/{leadId}/tags/{tagName} | Monolith.Crm |
| ListClientTags | GET | /v2/clients/{clientId}/tags | Monolith.Crm |
| ListLeadTags | GET | /v2/leads/{leadId}/tags | Monolith.Crm |
| ListTags | GET | /v2/tags | Monolith.Crm |
| RemoveClientTag | DELETE | /v2/clients/{clientId}/tags/{tagName} | Monolith.Crm |
| RemoveLeadTag | DELETE | /v2/leads/{leadId}/tags/{tagName} | Monolith.Crm |
| UpdateClientTags | PUT | /v2/clients/{clientId}/tags | Monolith.Crm |
| UpdateLeadTags | PUT | /v2/leads/{leadId}/tags | Monolith.Crm |
| GetTenant | GET | /v2/tenants/{tenantId} | Monolith.Crm |
| GetTenant | GET | /v1/tenants/{tenantId} | Monolith.Crm |
| ListTimeEntries | GET | /v2/time_entries | Microservice.TimeRecording |
| ListTimeEntries | GET | /v1/time_entries | Microservice.TimeRecording |
| BatchCreateClientTransactions | POST | /v2/clients/{clientId}/transactions | Monolith.Portfolio |
| BatchCreateTransactions | POST | /v2/transactions | Monolith.Portfolio |
| ClientPlanTransactionExists | HEAD | /v2/clients/{clientId}/plans/{planId}/transactions/{transactionId} | Monolith.Portfolio |
| GetClientPlanTransaction | GET | /v2/clients/{clientId}/plans/{planId}/transactions/{transactionId} | Monolith.Portfolio |
| ListClientPlanTransactions | GET | /v2/clients/{clientId}/plans/{planId}/transactions | Monolith.Portfolio |
| ListClientTransactions | GET | /v2/clients/{clientId}/transactions | Monolith.Portfolio |
| UpdateClientPlanTransaction | PATCH | /v2/clients/{clientId}/plans/{planId}/transactions/{transactionId} | Monolith.Portfolio |
| ListUnmatchedPlans | GET | /v2/plans/unmatched | Monolith.Portfolio |
| CreateAssetValuations | POST | /v2/clients/{clientId}/assets/{assetId}/valuations | Monolith.Portfolio |
| CreatePlanValuations | POST | /v2/clients/{clientId}/plans/{planId}/valuations | Monolith.Portfolio |
| DeleteClientAssetValuation | DELETE | /v2/clients/{clientId}/assets/{assetId}/valuations/{valuationId} | Monolith.Portfolio |
| GetClientAssetValuation | GET | /v2/clients/{clientId}/assets/{assetId}/valuations/{valuationId} | Monolith.Portfolio |
| GetClientPlanValuation | GET | /v2/clients/{clientId}/plans/{planId}/valuations/{valuationId} | Monolith.Portfolio |
| ListClientAssetValuations | GET | /v2/clients/{clientId}/assets/{assetId}/valuations | Monolith.Portfolio |
| ListClientPlanValuations | GET | /v2/clients/{clientId}/plans/{planId}/valuations | Monolith.Portfolio |
| UpdateClientAssetValuation | PUT | /v2/clients/{clientId}/assets/{assetId}/valuations/{valuationId} | Monolith.Portfolio |
| UpdateClientPlanValuation | PUT | /v2/clients/{clientId}/plans/{planId}/valuations/{valuationId} | Monolith.Portfolio |
| GetClientVulnerability | GET | /v2/clients/{clientId}/vulnerabilities/{vulnerabilityId} | Monolith.Crm |
| GetClientVulnerabilityCurrent | GET | /v2/clients/{clientId}/vulnerabilities/current | Monolith.Crm |
| ListClientsVulnerabilities | GET | /v2/clients/vulnerabilities/current | Monolith.Crm |
| UpdateClientVulnerabilitiesCurrent | PUT | /v2/clients/{clientId}/vulnerabilities/current | Monolith.Crm |
| CreatePlanWithdrawals | POST | /v2/clients/{clientId}/plans/{planId}/withdrawals | Monolith.Portfolio |
| DeleteClientPlanWithdrawal | DELETE | /v2/clients/{clientId}/plans/{planId}/withdrawals/{withdrawalId} | Monolith.Portfolio |
| GetClientPlanWithdrawal | GET | /v2/clients/{clientId}/plans/{planId}/withdrawals/{withdrawalId} | Monolith.Portfolio |
| ListClientPlanWithdrawals | GET | /v2/clients/{clientId}/plans/{planId}/withdrawals | Monolith.Portfolio |
| UpdateClientPlanWithdrawal | PUT | /v2/clients/{clientId}/plans/{planId}/withdrawals/{withdrawalId} | Monolith.Portfolio |

### Not on Developer Portal (228)

These APIs are available but not yet documented on the developer portal. Consider adding them.

| Operation ID | Method | Endpoint | Service |
|-------------|--------|----------|--------|
| GetActivityCategory | GET | /v2/activities/categories/{categoryId} | Monolith.Crm |
| ListActivityCategories | GET | /v2/activities/categories | Monolith.Crm |
| GetActivityOutcome | GET | /v2/activities/outcomes/{outcomeId} | Monolith.Crm |
| ListActivityOutcomes | GET | /v2/activities/outcomes | Monolith.Crm |
| GetActivityPriority | GET | /v2/activities/priorities/{priorityId} | Monolith.Crm |
| ListActivityPriorities | GET | /v2/activities/priorities | Monolith.Crm |
| GetActivityType | GET | /v2/activities/types/{typeId} | Monolith.Crm |
| ListActivityTypes | GET | /v2/activities/types | Monolith.Crm |
| CreateAppointment | POST | /v2/activities/appointments | Monolith.Crm |
| DeleteAppointment | DELETE | /v2/activities/appointments/{appointmentId} | Monolith.Crm |
| GetAppointment | GET | /v2/activities/appointments/{appointmentId} | Monolith.Crm |
| ListAppointment | GET | /v2/activities/appointments | Monolith.Crm |
| UpdateAppointment | PUT | /v2/activities/appointments/{appointmentId} | Monolith.Crm |
| DeleteAtrTemplateV2 | DELETE | /v2/attitudeToRisk/atr_templates/{templateId} | Monolith.Atr |
| ListAtrSystemCategories | GET | /v2/atr/system_categories | Monolith.Atr |
| ListBrands | GET | /v1/brands | Microservice.Brand |
| GetGroupBrand | GET | /v1/groups/{groupId}/brands/{brandId} | Microservice.Brand |
| ListGroupBrands | GET | /v1/groups/{groupId}/brands | Microservice.Brand |
| ListUserMesBrands | GET | /v1/users/me/brands | Microservice.Brand |
| PatchGroupBrand | PATCH | /v1/groups/{groupId}/brands/{brandId} | Microservice.Brand |
| CreateClientGoalLinktoplan | POST | /v1/clients/{clientId}/goals/{goalId}/linktoplan | Monolith.FactFind |
| CreateClientGoalUnlink | POST | /v1/clients/{clientId}/goals/{goalId}/unlink | Monolith.FactFind |
| DeleteClientContact | DELETE | /v1/clients/{partyId}/contacts/{contactId} | Monolith.Crm |
| DeleteClientExpense | DELETE | /v1/clients/{clientId}/expenditure/expenses/{expenseId} | Monolith.FactFind |
| DeleteClientGoal | DELETE | /v1/clients/{clientId}/goals/{goalId} | Monolith.FactFind |
| DeleteClientLiability | DELETE | /v1/clients/{clientId}/liabilities/{liabilityId} | Monolith.FactFind |
| ExistsClient | HEAD | /v1/clients/{partyId} | Monolith.Crm |
| ExistsClientContact | HEAD | /v1/clients/{partyId}/contacts/{contactId} | Monolith.Crm |
| ExistsClientExpenditure | HEAD | /v1/clients/{clientId}/expenditure | Monolith.FactFind |
| ExistsClientExpense | HEAD | /v1/clients/{clientId}/expenditure/expenses/{expenseId} | Monolith.FactFind |
| ExistsClientGoal | HEAD | /v1/clients/{clientId}/goals/{goalId} | Monolith.FactFind |
| ExistsClientIncome | HEAD | /v1/clients/{clientId}/incomes/{incomeId} | Monolith.FactFind |
| ExistsClientLiability | HEAD | /v1/clients/{clientId}/liabilities/{liabilityId} | Monolith.FactFind |
| ExistsExpensecategory | HEAD | /v1/clients/expensecategories/{expenseCategoryId} | Monolith.FactFind |
| ExistsExpensegroup | HEAD | /v1/clients/expensegroups/{expenseGroupId} | Monolith.FactFind |
| GetClientContact | GET | /v1/clients/{partyId}/contacts/{contactId} | Monolith.Crm |
| GetClientExpense | GET | /v1/clients/{clientId}/expenditure/expenses/{expenseId} | Monolith.FactFind |
| GetClientGoal | GET | /v1/clients/{clientId}/goals/{goalId} | Monolith.FactFind |
| GetClientLiability | GET | /v1/clients/{clientId}/liabilities/{liabilityId} | Monolith.FactFind |
| GetExpensecategory | GET | /v1/clients/expensecategories/{expenseCategoryId} | Monolith.FactFind |
| GetExpensegroup | GET | /v1/clients/expensegroups/{expenseGroupId} | Monolith.FactFind |
| ListClientContacts | GET | /v1/clients/{partyId}/contacts | Monolith.Crm |
| ListClientExpendituresExpenses | GET | /v1/clients/{clientId}/expenditure/expenses | Monolith.FactFind |
| ListClientGoals | GET | /v1/clients/{clientId}/goals | Monolith.FactFind |
| ListClientLiabilities | GET | /v1/clients/{clientId}/liabilities | Monolith.FactFind |
| ListClientsAdvisers | GET | /v1/clients/{partyId}/advisers | Monolith.Crm |
| ListClientsExpensecategories | GET | /v1/clients/expensecategories | Monolith.FactFind |
| ListClientsExpensegroups | GET | /v1/clients/expensegroups | Monolith.FactFind |
| ListClientsProfessionalcontacts | GET | /v1/clients/{clientId}/professionalcontacts | Monolith.Crm |
| MarkascompletedClientGoal | POST | /v1/clients/{clientId}/goals/{goalId}/markascompleted | Monolith.FactFind |
| MarkasdefaultClientContact | PATCH | /v1/clients/{partyId}/contacts/{contactId}/markasdefault | Monolith.Crm |
| MarkasincompleteClientGoal | POST | /v1/clients/{clientId}/goals/{goalId}/markasincomplete | Monolith.FactFind |
| UpdateClientContact | PUT | /v1/clients/{partyId}/contacts/{contactId} | Monolith.Crm |
| UpdateClientExpense | PUT | /v1/clients/{clientId}/expenditure/expenses/{expenseId} | Monolith.FactFind |
| UpdateClientGoal | PUT | /v1/clients/{clientId}/goals/{goalId} | Monolith.FactFind |
| UpdateClientLiability | PUT | /v1/clients/{clientId}/liabilities/{liabilityId} | Monolith.FactFind |
| UpdateClientsExpenditureExpenses | PUT | /v1/clients/{clientId}/expenditure/expenses | Monolith.FactFind |
| UpdateClientsIncomes | PUT | /v1/clients/{clientId}/incomes | Monolith.FactFind |
| GetGroupBrandClosest | GET | /v1/groups/{groupId}/brands/closest | Microservice.Brand |
| CreateCorporate | POST | /v1/corporates | Monolith.Crm |
| DeleteCorporateContact | DELETE | /v1/corporates/{partyId}/contacts/{contactId} | Monolith.Crm |
| ExistsCorporate | HEAD | /v1/corporates/{partyId} | Monolith.Crm |
| ExistsCorporateContact | HEAD | /v1/corporates/{partyId}/contacts/{contactId} | Monolith.Crm |
| GetCorporate | GET | /v1/corporates/{partyId} | Monolith.Crm |
| GetCorporateContact | GET | /v1/corporates/{partyId}/contacts/{contactId} | Monolith.Crm |
| ListCorporateContacts | GET | /v1/corporates/{partyId}/contacts | Monolith.Crm |
| MarkasdefaultCorporateContact | PATCH | /v1/corporates/{partyId}/contacts/{contactId}/markasdefault | Monolith.Crm |
| UpdateCorporate | PUT | /v1/corporates/{partyId} | Monolith.Crm |
| UpdateCorporateContact | PUT | /v1/corporates/{partyId}/contacts/{contactId} | Monolith.Crm |
| ListCountriesCounties | GET | /v1/countries/{countryCode}/counties | Monolith.Crm |
| ListCountries | GET | /v1/countries | Monolith.Crm |
| DeleteClientCreditcard | DELETE | /v1/clients/{clientId}/plans/creditcards/{planId} | Monolith.Portfolio |
| GetClientCreditcard | GET | /v1/clients/{clientId}/plans/creditcards/{planId} | Monolith.Portfolio |
| ListClientPlansCreditcards | GET | /v1/clients/{clientId}/plans/creditcards | Monolith.Portfolio |
| UpdateClientCreditcard | PUT | /v1/clients/{clientId}/plans/creditcards/{planId} | Monolith.Portfolio |
| DeleteClientCurrentaccount | DELETE | /v1/clients/{clientId}/plans/currentaccounts/{planId} | Monolith.Portfolio |
| GetClientCurrentaccount | GET | /v1/clients/{clientId}/plans/currentaccounts/{planId} | Monolith.Portfolio |
| ListClientPlansCurrentaccounts | GET | /v1/clients/{clientId}/plans/currentaccounts | Monolith.Portfolio |
| UpdateClientCurrentaccount | PUT | /v1/clients/{clientId}/plans/currentaccounts/{planId} | Monolith.Portfolio |
| UpdateQuestionAnswers | PUT | /v2/clients/{clientId}/questions | Monolith.Crm |
| AdviserDocumentExists | HEAD | /v2/advisers/{adviserId}/documents/{documentId} | Monolith.Storage |
| AdviserDocumentHideInPortal | DELETE | /v2/advisers/{adviserId}/documents/{documentId}/showInPortal | Microservice.ClientStorage |
| AdviserDocumentShowInPortal | POST | /v2/advisers/{adviserId}/documents/{documentId}/showInPortal | Microservice.ClientStorage |
| AssignClientDocument | POST | /v2/clients/{clientId}/documents/{documentId} | Monolith.Storage |
| ClientDocumentHideInPortal | DELETE | /v2/clients/{clientId}/documents/{documentId}/showInPortal | Microservice.ClientStorage |
| ClientDocumentShowInPortal | POST | /v2/clients/{clientId}/documents/{documentId}/showInPortal | Microservice.ClientStorage |
| CreateAdviserDocument | POST | /v2/advisers/{adviserId}/documents | Monolith.Storage |
| CreateDocument | POST | /v2/documents | Monolith.Storage |
| CreateDocument | POST | /v1/documents | Microservice.ClientStorage |
| DeleteAdviserDocument | DELETE | /v2/advisers/{adviserId}/documents/{documentId} | Monolith.Storage |
| DeleteDocument | DELETE | /v1/documents/{documentId} | Microservice.ClientStorage |
| ExistsClientDocument | HEAD | /v1/clients/{clientId}/documents/{documentId} | Microservice.ClientStorage |
| ExistsDocument | HEAD | /v1/documents/{documentId} | Microservice.ClientStorage |
| GetAdviserDocument | GET | /v2/advisers/{adviserId}/documents/{documentId} | Monolith.Storage |
| GetClientDocumentContent | GET | /v1/clients/{clientId}/documents/{documentId}/content | Microservice.ClientStorage |
| GetDocumentContent | GET | /v1/documents/{documentId}/content | Microservice.ClientStorage |
| GetDocumentStatistics | GET | /v1/documents/statistics | Microservice.ClientStorage |
| ListAdviserDocuments | GET | /v2/advisers/{adviserId}/documents | Monolith.Storage |
| ListDocuments | GET | /v1/documents | Microservice.ClientStorage |
| ShareDocument | POST | /v1/documents/{documentId}/share | Microservice.ClientStorage |
| UnshareDocument | POST | /v1/documents/{documentId}/unshare | Microservice.ClientStorage |
| UpdateAdviserDocument | PUT | /v2/advisers/{adviserId}/documents/{documentId} | Monolith.Storage |
| UpdateDocument | PUT | /v1/documents/{documentId} | Microservice.ClientStorage |
| UpdateDocumentContent | PUT | /v1/documents/{documentId}/content | Microservice.ClientStorage |
| CreateEmail | POST | /v2/activities/emails | Monolith.Crm |
| GetEmail | GET | /v2/activities/emails/{emailId} | Monolith.Crm |
| ListEmails | GET | /v2/activities/emails | Monolith.Crm |
| CreateIPAddress | POST | /v2/tenants/{tenantId}/IPAddress | Monolith.Entitlement |
| CreateUserDetail | POST | /v2/users | Monolith.Entitlement |
| GetUserDetail | GET | /v2/users/{userId} | Monolith.Entitlement |
| ListIPAddresses | GET | /v2/tenants/{tenantId}/IPAddress | Monolith.Entitlement |
| ListSupportIPAddresses | GET | /v2/support/IPAddress | Monolith.Entitlement |
| ListUserActivity | GET | /v2/users/{userId}/activity | Monolith.Entitlement |
| ListUsersDetails | GET | /v2/users | Monolith.Entitlement |
| UpdateUserDetail | PUT | /v2/users/{userId} | Monolith.Entitlement |
| GetClientFinancialsummary | GET | /v1/clients/{clientId}/financialsummary | Monolith.Portfolio |
| GetClientFinancialsummarybycategory | GET | /v1/clients/{clientId}/financialsummarybycategory | Monolith.Portfolio |
| GetGroup | GET | /v2/groups/{groupId} | Monolith.Crm |
| GetGroup | GET | /v1/groups/{groupId} | Monolith.Crm |
| ListGroups | GET | /v2/groups | Monolith.Crm |
| ListGroupsLineage | GET | /v1/groups/{groupId}/lineage | Monolith.Crm |
| ListClientsHoldings | GET | /v2/clients/{clientId}/holdings | Monolith.Portfolio |
| PatchIllustrationStatus | PATCH | /v2/illustrations/{illustrationId} | Microservice.ProviderIntegration |
| CreateClientInsight | POST | /v2/clients/{clientId}/insights | Microservice.Insight |
| CreateClientInsight | POST | /v1/clients/{clientId}/insights | Microservice.Insight |
| GetClientInsights | GET | /v2/clients/{clientId}/insights | Microservice.Insight |
| DeleteClientInvestment | DELETE | /v1/clients/{clientId}/plans/investments/{planId} | Monolith.Portfolio |
| GetClientInvestment | GET | /v1/clients/{clientId}/plans/investments/{planId} | Monolith.Portfolio |
| ListClientPlansInvestments | GET | /v1/clients/{clientId}/plans/investments | Monolith.Portfolio |
| UpdateClientInvestment | PUT | /v1/clients/{clientId}/plans/investments/{planId} | Monolith.Portfolio |
| AssignLeadDocument | POST | /v2/leads/{leadId}/documents/{documentId} | Monolith.Storage |
| DeleteLeadContact | DELETE | /v1/leads/{partyId}/contacts/{contactId} | Monolith.Crm |
| ExistsLead | HEAD | /v1/leads/{partyId} | Monolith.Crm |
| ExistsLeadContact | HEAD | /v1/leads/{partyId}/contacts/{contactId} | Monolith.Crm |
| GetLeadContact | GET | /v1/leads/{partyId}/contacts/{contactId} | Monolith.Crm |
| ListLeadContacts | GET | /v1/leads/{partyId}/contacts | Monolith.Crm |
| MarkasdefaultLeadContact | PATCH | /v1/leads/{partyId}/contacts/{contactId}/markasdefault | Monolith.Crm |
| UpdateLeadContact | PUT | /v1/leads/{partyId}/contacts/{contactId} | Monolith.Crm |
| ListLegacyApps | GET | /v2/users/{userId}/legacyapps | Monolith.Crm |
| DeleteClientLoan | DELETE | /v1/clients/{clientId}/plans/loans/{planId} | Monolith.Portfolio |
| GetClientLoan | GET | /v1/clients/{clientId}/plans/loans/{planId} | Monolith.Portfolio |
| ListClientPlansLoans | GET | /v1/clients/{clientId}/plans/loans | Monolith.Portfolio |
| UpdateClientLoan | PUT | /v1/clients/{clientId}/plans/loans/{planId} | Monolith.Portfolio |
| DeleteClientMortgage | DELETE | /v1/clients/{clientId}/plans/mortgages/{planId} | Monolith.Portfolio |
| GetClientMortgage | GET | /v1/clients/{clientId}/plans/mortgages/{planId} | Monolith.Portfolio |
| ListClientPlansMortgages | GET | /v1/clients/{clientId}/plans/mortgages | Monolith.Portfolio |
| UpdateClientMortgage | PUT | /v1/clients/{clientId}/plans/mortgages/{planId} | Monolith.Portfolio |
| GetClientObjective | GET | /v2/clients/{clientId}/objectives/{objectiveId} | Microservice.Requirement |
| ListClientObjectives | GET | /v2/clients/{clientId}/objectives | Microservice.Requirement |
| ExistsParty | HEAD | /v1/parties/{partyId} | Monolith.Crm |
| DeleteClientPension | DELETE | /v1/clients/{clientId}/plans/pensions/{planId} | Monolith.Portfolio |
| GetClientPension | GET | /v1/clients/{clientId}/plans/pensions/{planId} | Monolith.Portfolio |
| ListClientPlansPensions | GET | /v1/clients/{clientId}/plans/pensions | Monolith.Portfolio |
| UpdateClientPension | PUT | /v1/clients/{clientId}/plans/pensions/{planId} | Monolith.Portfolio |
| CreatePerson | POST | /v1/people | Monolith.Crm |
| ExistsPerson | HEAD | /v1/people/{partyId} | Monolith.Crm |
| GetPerson | GET | /v1/people/{partyId} | Monolith.Crm |
| UpdatePerson | PUT | /v1/people/{partyId} | Monolith.Crm |
| GetClientValuation | GET | /v1/clients/{clientId}/plans/valuations/{valuationId} | Monolith.Portfolio |
| GetPlantype | GET | /v1/plantypes/{planTypeId} | Monolith.Portfolio |
| ListClientPlansValuations | GET | /v1/clients/{clientId}/plans/valuations | Monolith.Portfolio |
| ListClientPlansValuationsPropertyvaluations | GET | /v1/clients/{clientId}/plans/valuations/propertyvaluations | Monolith.Portfolio |
| ListClientPlansValuationsTimeseries | GET | /v1/clients/{clientId}/plans/valuations/timeseries | Monolith.Portfolio |
| ListClientPlanValuationsTimeseries | GET | /v1/clients/{clientId}/plans/{planId}/valuations/timeseries | Monolith.Portfolio |
| CreateProductProvider | POST | /v2/productproviders | Monolith.Crm |
| ListProductproviderSearches | GET | /v1/productproviders/search | Monolith.Crm |
| DeleteClientProtection | DELETE | /v1/clients/{clientId}/plans/protections/{planId} | Monolith.Portfolio |
| GetClientProtection | GET | /v1/clients/{clientId}/plans/protections/{planId} | Monolith.Portfolio |
| ListClientPlansProtections | GET | /v1/clients/{clientId}/plans/protections | Monolith.Portfolio |
| UpdateClientProtection | PUT | /v1/clients/{clientId}/plans/protections/{planId} | Monolith.Portfolio |
| DeleteProviderTenant | DELETE | /v2/providers/{providerId}/providerTenants | Microservice.ProviderIntegration |
| GetProviderTenant | GET | /v2/providers/{providerId}/providerTenants | Microservice.ProviderIntegration |
| UpdateProviderTenant | PUT | /v2/providers/{providerId}/providerTenants | Microservice.ProviderIntegration |
| CreateClientRecommendation | POST | /v2/clients/{clientId}/recommendations2 | Microservice.Recommend |
| CreateRecommendationProposal | POST | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals | Microservice.Recommend |
| CreateTenantRecommendationCategory | POST | /v2/recommendations2/categories | Microservice.Recommend |
| CreateTenantRecommendationSubCategory | POST | /v2/recommendations2/subcategories | Microservice.Recommend |
| DeleteClientRecommendation | DELETE | /v2/clients/{clientId}/recommendations2/{recommendationId} | Microservice.Recommend |
| DeleteRecommendationProposal | DELETE | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals/{proposalId} | Microservice.Recommend |
| DeleteTenantRecommendationCategory | DELETE | /v2/recommendations2/categories/{categoryId} | Microservice.Recommend |
| DeleteTenantRecommendationSubCategory | DELETE | /v2/recommendations2/subcategories/{subCategoryId} | Microservice.Recommend |
| GetClientRecommendation | GET | /v2/clients/{clientId}/recommendations2/{recommendationId} | Microservice.Recommend |
| GetRecommendationProposal | GET | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals/{proposalId} | Microservice.Recommend |
| GetTenantRecommendationCategory | GET | /v2/recommendations2/categories/{categoryId} | Microservice.Recommend |
| GetTenantRecommendationSubCategory | GET | /v2/recommendations2/subcategories/{subCategoryId} | Microservice.Recommend |
| ListClientRecommendations | GET | /v2/clients/{clientId}/recommendations2 | Microservice.Recommend |
| ListRecommendationProposals | GET | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals | Microservice.Recommend |
| ListTenantRecommendationCategories | GET | /v2/recommendations2/categories | Microservice.Recommend |
| ListTenantRecommendationSubCategories | GET | /v2/recommendations2/subcategories | Microservice.Recommend |
| PatchClientRecommendation | PATCH | /v2/clients/{clientId}/recommendations2/{recommendationId} | Microservice.Recommend |
| PatchServiceCaseRecommendations | PATCH | /v2/servicecases/{serviceCaseId}/recommendations | Microservice.Recommend |
| UpdateRecommendationProposal | PUT | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals/{proposalId} | Microservice.Recommend |
| UpdateTenantRecommendationCategory | PUT | /v2/recommendations2/categories/{categoryId} | Microservice.Recommend |
| UpdateTenantRecommendationSubCategory | PUT | /v2/recommendations2/subcategories/{subCategoryId} | Microservice.Recommend |
| GetClientRequirement | GET | /v2/clients/{clientId}/requirements/{requirementId} | Monolith.Crm |
| ListClientRequirements | GET | /v2/clients/{clientId}/requirements | Monolith.Crm |
| DeleteClientSavingsaccount | DELETE | /v1/clients/{clientId}/plans/savingsaccounts/{planId} | Monolith.Portfolio |
| GetClientSavingsaccount | GET | /v1/clients/{clientId}/plans/savingsaccounts/{planId} | Monolith.Portfolio |
| ListClientPlansSavingsaccounts | GET | /v1/clients/{clientId}/plans/savingsaccounts | Monolith.Portfolio |
| UpdateClientSavingsaccount | PUT | /v1/clients/{clientId}/plans/savingsaccounts/{planId} | Monolith.Portfolio |
| CreateClientsSearch | POST | /v1/clients/search | Monolith.Crm |
| CreateLeadsSearch | POST | /v1/leads/search | Monolith.Crm |
| ListClientsSearch | GET | /v2/clients/search | Monolith.Crm |
| CreateTask | POST | /v2/activities/tasks | Monolith.Crm |
| CreateTask | POST | /v1/tasks | Monolith.Crm |
| DeleteTask | DELETE | /v2/activities/tasks/{taskId} | Monolith.Crm |
| ExistsTask | HEAD | /v1/tasks/{taskId} | Monolith.Crm |
| GetTask | GET | /v2/activities/tasks/{taskId} | Monolith.Crm |
| GetTask | GET | /v1/tasks/{taskId} | Monolith.Crm |
| GetTaskSettings | GET | /v1/tasks/settings | Monolith.Crm |
| ListPartiesTasks | GET | /v1/parties/{partyId}/tasks | Monolith.Crm |
| ListTask | GET | /v2/activities/tasks | Monolith.Crm |
| ListTasks | GET | /v1/tasks | Monolith.Crm |
| UpdateTask | PUT | /v2/activities/tasks/{taskId} | Monolith.Crm |
| UpdateTask | PUT | /v1/tasks/{taskId} | Monolith.Crm |
| UpdateTaskSettings | PUT | /v1/tasks/settings | Monolith.Crm |
| BatchCreateClientPlanTransactions | POST | /v2/clients/{clientId}/plans/{planId}/transactions | Monolith.Portfolio |
| PatchAccountStatus | PATCH | /v2/accounts/{accountNumber}/status | Microservice.ProviderIntegration |
| PatchMoneyMovementStatus | PATCH | /v2/accounts/{accountNumber}/moneymovements/{movementId}/status | Microservice.ProviderIntegration |
| PatchSecurityTransferInstructionStatus | PATCH | /v2/accounts/{accountNumber}/transfers/{movementId}/status | Microservice.ProviderIntegration |
| PatchStandingInstructionStatus | PATCH | /v2/accounts/{accountNumber}/banklink/{bankLinkRef}/status | Microservice.ProviderIntegration |
| PutAccountModel | PUT | /v2/accounts/{accountNumber}/model | Microservice.ProviderIntegration |
| PutMoneyMovementInstuction | PUT | /v2/accounts/{accountNumber}/moneymovements | Microservice.ProviderIntegration |
| GetUserDiaryClassification | GET | /v2/diary/users/{userId}/classifications/{userDiaryClassificationId} | Monolith.Crm |
| ListUserDiaryClassification | GET | /v2/diary/users/{userId}/classifications | Monolith.Crm |
| ListClientValuationsAssetliabilityTimeseries | GET | /v1/clients/{clientId}/valuations/assetliability_timeseries | Monolith.Portfolio |
| ListClientValuationsPortfolioValuations | GET | /v1/clients/{clientId}/valuations/portfolio_valuations | Monolith.Portfolio |
| ListClientValuationsTimeseries | GET | /v1/clients/{clientId}/valuations/timeseries | Monolith.Portfolio |

## APIs by Service

### Microservice.AppD (9 operations)

| Operation ID | Method | Endpoint | Tags | Scopes |
|-------------|--------|----------|------|--------|
| ExistInstalledApp | HEAD | /v2/installed_apps/{appId} | apps, beta |  |
| GetInstalledApp | GET | /v2/installed_apps/{appId} | apps, beta |  |
| GetInstalledAppGroupSettings | GET | /v2/installed_apps/{appId}/group_settings/{groupId} | apps, beta |  |
| GetInstalledAppUserSettings | GET | /v2/installed_apps/{appId}/user_settings/{userId} | apps, beta |  |
| ListInstalledAppGroupSettings | GET | /v2/installed_apps/{appId}/group_settings | apps, beta |  |
| ListInstalledApps | GET | /v2/installed_apps | apps, beta |  |
| ListInstalledAppUserSettings | GET | /v2/installed_apps/{appId}/user_settings | apps, beta |  |
| UpdateInstalledAppGroupSettings | PUT | /v2/installed_apps/{appId}/group_settings/{groupId} | apps, beta |  |
| UpdateInstalledAppUserSettings | PUT | /v2/installed_apps/{appId}/user_settings/{userId} | apps, beta |  |

### Microservice.Brand (6 operations)

| Operation ID | Method | Endpoint | Tags | Scopes |
|-------------|--------|----------|------|--------|
| ListBrands | GET | /v1/brands | brand |  |
| GetGroupBrand | GET | /v1/groups/{groupId}/brands/{brandId} | brands |  |
| ListGroupBrands | GET | /v1/groups/{groupId}/brands | brands |  |
| ListUserMesBrands | GET | /v1/users/me/brands | brands |  |
| PatchGroupBrand | PATCH | /v1/groups/{groupId}/brands/{brandId} | brands |  |
| GetGroupBrandClosest | GET | /v1/groups/{groupId}/brands/closest | closest |  |

### Microservice.ClientStorage (19 operations)

| Operation ID | Method | Endpoint | Tags | Scopes |
|-------------|--------|----------|------|--------|
| AdviserDocumentHideInPortal | DELETE | /v2/advisers/{adviserId}/documents/{documentId}/showInPortal | documents |  |
| AdviserDocumentShowInPortal | POST | /v2/advisers/{adviserId}/documents/{documentId}/showInPortal | documents |  |
| ClientDocumentHideInPortal | DELETE | /v2/clients/{clientId}/documents/{documentId}/showInPortal | documents |  |
| ClientDocumentShowInPortal | POST | /v2/clients/{clientId}/documents/{documentId}/showInPortal | documents |  |
| CreateDocument | POST | /v1/documents | documents |  |
| DeleteDocument | DELETE | /v1/documents/{documentId} | documents |  |
| ExistsClientDocument | HEAD | /v1/clients/{clientId}/documents/{documentId} | documents |  |
| ExistsDocument | HEAD | /v1/documents/{documentId} | documents |  |
| GetClientDocument | GET | /v1/clients/{clientId}/documents/{documentId} | documents |  |
| GetClientDocumentContent | GET | /v1/clients/{clientId}/documents/{documentId}/content | documents |  |
| GetDocument | GET | /v1/documents/{documentId} | documents |  |
| GetDocumentContent | GET | /v1/documents/{documentId}/content | documents |  |
| GetDocumentStatistics | GET | /v1/documents/statistics | documents |  |
| ListClientDocuments | GET | /v1/clients/{clientId}/documents | documents |  |
| ListDocuments | GET | /v1/documents | documents |  |
| ShareDocument | POST | /v1/documents/{documentId}/share | documents |  |
| UnshareDocument | POST | /v1/documents/{documentId}/unshare | documents |  |
| UpdateDocument | PUT | /v1/documents/{documentId} | documents |  |
| UpdateDocumentContent | PUT | /v1/documents/{documentId}/content | documents |  |

### Microservice.DPA (10 operations)

| Operation ID | Method | Endpoint | Tags | Scopes |
|-------------|--------|----------|------|--------|
| CreateClientDpaPolicyAgreement | POST | /v2/clients/{clientId}/dpa_agreements | dpa |  |
| CreateDPAPolicy | POST | /v2/dpa_policies | dpa |  |
| DeleteDPAPolicy | DELETE | /v2/dpa_policies/{policyId} | dpa |  |
| GetClientDpaPolicyAgreement | GET | /v2/clients/{clientId}/dpa_agreements/{agreementId} | dpa |  |
| GetCurrentDPAPolicy | GET | /v2/dpa_policies/current | dpa |  |
| GetDpaPolicy | GET | /v2/dpa_policies/{policyId} | dpa |  |
| ListClientDpaPolicyAgreements | GET | /v2/clients/{clientId}/dpa_agreements | dpa |  |
| ListDpaPolicies | GET | /v2/dpa_policies | dpa |  |
| PatchDPAPolicy | PATCH | /v2/dpa_policies/{policyId} | dpa |  |
| UpdateDPAPolicy | PUT | /v2/dpa_policies/{policyId} | dpa |  |

### Microservice.Insight (3 operations)

| Operation ID | Method | Endpoint | Tags | Scopes |
|-------------|--------|----------|------|--------|
| CreateClientInsight | POST | /v2/clients/{clientId}/insights | insights |  |
| CreateClientInsight | POST | /v1/clients/{clientId}/insights | insights |  |
| GetClientInsights | GET | /v2/clients/{clientId}/insights | insights |  |

### Microservice.ProviderIntegration (11 operations)

| Operation ID | Method | Endpoint | Tags | Scopes |
|-------------|--------|----------|------|--------|
| GetDocument | GET | /v2/clients/{clientId}/plans/{planId}/documents/{documentId} | document |  |
| PatchIllustrationStatus | PATCH | /v2/illustrations/{illustrationId} | illustrations |  |
| DeleteProviderTenant | DELETE | /v2/providers/{providerId}/providerTenants | provider tenant configuration |  |
| GetProviderTenant | GET | /v2/providers/{providerId}/providerTenants | provider tenant configuration |  |
| UpdateProviderTenant | PUT | /v2/providers/{providerId}/providerTenants | provider tenant configuration |  |
| PatchAccountStatus | PATCH | /v2/accounts/{accountNumber}/status | update status |  |
| PatchMoneyMovementStatus | PATCH | /v2/accounts/{accountNumber}/moneymovements/{movementId}/status | update status |  |
| PatchSecurityTransferInstructionStatus | PATCH | /v2/accounts/{accountNumber}/transfers/{movementId}/status | update status |  |
| PatchStandingInstructionStatus | PATCH | /v2/accounts/{accountNumber}/banklink/{bankLinkRef}/status | update status |  |
| PutAccountModel | PUT | /v2/accounts/{accountNumber}/model | update status |  |
| PutMoneyMovementInstuction | PUT | /v2/accounts/{accountNumber}/moneymovements | update status |  |

### Microservice.Quotation (12 operations)

| Operation ID | Method | Endpoint | Tags | Scopes |
|-------------|--------|----------|------|--------|
| AddClientQuoteApplicant | POST | /v2/clients/{clientId}/quotes/{quoteId} | quotes | openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes |
| ClientQuoteExists | HEAD | /v2/clients/{clientId}/quotes/{quoteId} | quotes | openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes |
| ClientQuoteResultsExists | HEAD | /v2/clients/{clientId}/quotes/{quoteId}/results/{quoteResultId} | quotes | openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes |
| CreateClientQuote | POST | /v2/clients/{clientId}/quotes | quotes | openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes |
| CreateClientQuoteResult | POST | /v2/clients/{clientId}/quotes/{quoteId}/results | quotes | openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes |
| GetClientQuote | GET | /v2/clients/{clientId}/quotes/{quoteId} | quotes | openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes |
| GetClientQuoteResult | GET | /v2/clients/{clientId}/quotes/{quoteId}/results/{quoteResultId} | quotes | openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes |
| GetClientQuoteResultProductBenefits | GET | /v2/clients/{clientId}/quotes/{quoteId}/results/{quoteResultId}/benefits | quotes | openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes |
| ListClientQuoteResults | GET | /v2/clients/{clientId}/quotes/{quoteId}/results | quotes | openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes |
| ListClientQuotes | GET | /v2/clients/{clientId}/quotes | quotes | openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes |
| SetClientQuoteStatus | POST | /v2/clients/{clientId}/quotes/{quoteId}/status/{status} | quotes | openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes |
| UpdateClientQuoteResultProductBenefits | PUT | /v2/clients/{clientId}/quotes/{quoteId}/results/{quoteResultId}/benefits | quotes | openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes, openid, myprofile, client_financial_data, client_financial_data.quotes |

### Microservice.Recommend (21 operations)

| Operation ID | Method | Endpoint | Tags | Scopes |
|-------------|--------|----------|------|--------|
| CreateClientRecommendation | POST | /v2/clients/{clientId}/recommendations2 | recommendations |  |
| CreateRecommendationProposal | POST | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals | recommendations |  |
| CreateTenantRecommendationCategory | POST | /v2/recommendations2/categories | recommendations |  |
| CreateTenantRecommendationSubCategory | POST | /v2/recommendations2/subcategories | recommendations |  |
| DeleteClientRecommendation | DELETE | /v2/clients/{clientId}/recommendations2/{recommendationId} | recommendations |  |
| DeleteRecommendationProposal | DELETE | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals/{proposalId} | recommendations |  |
| DeleteTenantRecommendationCategory | DELETE | /v2/recommendations2/categories/{categoryId} | recommendations |  |
| DeleteTenantRecommendationSubCategory | DELETE | /v2/recommendations2/subcategories/{subCategoryId} | recommendations |  |
| GetClientRecommendation | GET | /v2/clients/{clientId}/recommendations2/{recommendationId} | recommendations |  |
| GetRecommendationProposal | GET | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals/{proposalId} | recommendations |  |
| GetTenantRecommendationCategory | GET | /v2/recommendations2/categories/{categoryId} | recommendations |  |
| GetTenantRecommendationSubCategory | GET | /v2/recommendations2/subcategories/{subCategoryId} | recommendations |  |
| ListClientRecommendations | GET | /v2/clients/{clientId}/recommendations2 | recommendations |  |
| ListRecommendationProposals | GET | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals | recommendations |  |
| ListTenantRecommendationCategories | GET | /v2/recommendations2/categories | recommendations |  |
| ListTenantRecommendationSubCategories | GET | /v2/recommendations2/subcategories | recommendations |  |
| PatchClientRecommendation | PATCH | /v2/clients/{clientId}/recommendations2/{recommendationId} | recommendations |  |
| PatchServiceCaseRecommendations | PATCH | /v2/servicecases/{serviceCaseId}/recommendations | recommendations |  |
| UpdateRecommendationProposal | PUT | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals/{proposalId} | recommendations |  |
| UpdateTenantRecommendationCategory | PUT | /v2/recommendations2/categories/{categoryId} | recommendations |  |
| UpdateTenantRecommendationSubCategory | PUT | /v2/recommendations2/subcategories/{subCategoryId} | recommendations |  |

### Microservice.Requirement (2 operations)

| Operation ID | Method | Endpoint | Tags | Scopes |
|-------------|--------|----------|------|--------|
| GetClientObjective | GET | /v2/clients/{clientId}/objectives/{objectiveId} | objectives | openid, myprofile, client_data, client_data.requirements, openid, myprofile, client_data, client_data.requirements, openid, myprofile, client_data, client_data.requirements |
| ListClientObjectives | GET | /v2/clients/{clientId}/objectives | objectives | openid, myprofile, client_data, client_data.requirements, openid, myprofile, client_data, client_data.requirements, openid, myprofile, client_data, client_data.requirements |

### Microservice.TimeRecording (2 operations)

| Operation ID | Method | Endpoint | Tags | Scopes |
|-------------|--------|----------|------|--------|
| ListTimeEntries | GET | /v2/time_entries | timeentries |  |
| ListTimeEntries | GET | /v1/time_entries | timeentries |  |

### Microservice.iMps (3 operations)

| Operation ID | Method | Endpoint | Tags | Scopes |
|-------------|--------|----------|------|--------|
| CreateProviderModel | POST | /v2/apps/{appId}/models | models |  |
| GetProviderModel | GET | /v2/apps/{appId}/models/{modelId} | models |  |
| GetProviderModels | GET | /v2/apps/{appId}/models | models |  |

### Monolith.Atr (21 operations)

| Operation ID | Method | Endpoint | Tags | Scopes |
|-------------|--------|----------|------|--------|
| AcceptTenantProviderAtrTemplate | POST | /v2/installed_apps/atr_templates/{id}/accept | attitudetorisk |  |
| ActivateAtrTemplate | POST | /v2/attitudeToRisk/atr_templates/{templateId}/active | attitudetorisk |  |
| ActivateProviderAtrTemplate | POST | /v2/attitudeToRisk/apps/{appId}/atr_templates/{templateId}/activate | attitudetorisk |  |
| CreateAtrTemplate | POST | /v2/attitudeToRisk/atr_templates | attitudetorisk |  |
| CreateClientAtr | POST | /v2/clients/{clientId}/attitudeToRisk | attitudetorisk |  |
| CreateProviderAtrTemplate | POST | /v2/attitudeToRisk/apps/{appId}/atr_templates | attitudetorisk |  |
| DeleteAtrTemplateV2 | DELETE | /v2/attitudeToRisk/atr_templates/{templateId} | attitudetorisk |  |
| DeleteClientAtr | DELETE | /v2/clients/{clientId}/attitudeToRisk/{atrId} | attitudetorisk |  |
| GetAtrTemplateV2 | GET | /v2/attitudeToRisk/atr_templates/{templateId} | attitudetorisk |  |
| GetClientAtr | GET | /v2/clients/{clientId}/attitudeToRisk/{atrId} | attitudetorisk |  |
| GetProviderAtrTemplate | GET | /v2/attitudeToRisk/apps/{appId}/atr_templates/{templateId} | attitudetorisk |  |
| GetTenantProviderAtrTemplate | GET | /v2/installed_apps/atr_templates/{id} | attitudetorisk |  |
| ListAtrSystemCategories | GET | /v2/atr/system_categories | attitudetorisk |  |
| ListAtrTemplatesV2 | GET | /v2/attitudeToRisk/atr_templates | attitudetorisk |  |
| ListClientAtrs | GET | /v2/clients/{clientId}/attitudeToRisk | attitudetorisk |  |
| ListProviderAtrTemplates | GET | /v2/attitudeToRisk/apps/{appId}/atr_templates | attitudetorisk |  |
| ListTenantProviderAtrTemplates | GET | /v2/installed_apps/atr_templates | attitudetorisk |  |
| PatchAtrTemplate | PATCH | /v2/attitudeToRisk/atr_templates/{templateId} | attitudetorisk |  |
| PatchClientAtr | PATCH | /v2/clients/{clientId}/attitudeToRisk/{atrId} | attitudetorisk |  |
| UpdateAtrTemplate | PUT | /v2/attitudeToRisk/atr_templates/{templateId} | attitudetorisk |  |
| UpdateClientAtrResult | PUT | /v2/clients/{clientId}/attitudeToRisk/{atrId}/result | attitudetorisk |  |

### Monolith.Charging (13 operations)

| Operation ID | Method | Endpoint | Tags | Scopes |
|-------------|--------|----------|------|--------|
| CreateClientPlanCharge | POST | /v2/clients/{clientId}/plans/{planId}/charges | charges |  |
| DeleteClientPlanCharge | DELETE | /v2/clients/{clientId}/plans/{planId}/charges/{chargeId} | charges |  |
| GetClientPlanCharge | GET | /v2/clients/{clientId}/plans/{planId}/charges/{chargeId} | charges |  |
| ListClientPlanCharges | GET | /v2/clients/{clientId}/plans/{planId}/charges | charges |  |
| UpdateClientPlanCharge | PUT | /v2/clients/{clientId}/plans/{planId}/charges/{chargeId} | charges |  |
| CreateClientFees | POST | /v2/clients/{clientId}/fees | fees |  |
| CreateClientPlanFee | POST | /v2/clients/{clientId}/plans/{planId}/fees/{feeId} | fees |  |
| DeleteClientPlanFee | DELETE | /v2/clients/{clientId}/plans/{planId}/fees/{feeId} | fees |  |
| GetClientFee | GET | /v2/clients/{clientId}/fees/{feeId} | fees |  |
| GetClientPlanFee | GET | /v2/clients/{clientId}/plans/{planId}/fees/{feeId} | fees |  |
| ListClientFees | GET | /v2/clients/{clientId}/fees | fees |  |
| ListClientPlanFees | GET | /v2/clients/{clientId}/plans/{planId}/fees | fees |  |
| UpdateClientFee | PUT | /v2/clients/{clientId}/fees/{feeId} | fees |  |

### Monolith.Commission (9 operations)

| Operation ID | Method | Endpoint | Tags | Scopes |
|-------------|--------|----------|------|--------|
| CreateIncomeStatement | POST | /v2/incomestatements | incomestatements | openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements |
| CreateIncomeStatementItems | POST | /v2/incomestatements/{incomeStatementId}/items | incomestatements | openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements |
| DeleteIncomeStatement | DELETE | /v2/incomestatements/{incomeStatementId} | incomestatements | openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements |
| GetIncomeStatement | GET | /v2/incomestatements/{incomeStatementId} | incomestatements | openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements |
| GetIncomeStatementItem | GET | /v2/incomestatements/{incomeStatementId}/items/{incomeStatementItemId} | incomestatements | openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements |
| ListIncomeStatementItems | GET | /v2/incomestatements/{incomeStatementId}/items | incomestatements | openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements |
| ListIncomeStatements | GET | /v2/incomestatements | incomestatements | openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements |
| UpdateIncomeStatement | PUT | /v2/incomestatements/{incomeStatementId} | incomestatements | openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements |
| UpdateIncomeStatementItem | PUT | /v2/incomestatements/{incomeStatementId}/items/{incomeStatementItemId} | incomestatements | openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements, openid, myprofile, firm_data.incomestatements |

### Monolith.Crm (213 operations)

| Operation ID | Method | Endpoint | Tags | Scopes |
|-------------|--------|----------|------|--------|
| GetActivityCategory | GET | /v2/activities/categories/{categoryId} | activitycategories |  |
| ListActivityCategories | GET | /v2/activities/categories | activitycategories |  |
| GetActivityOutcome | GET | /v2/activities/outcomes/{outcomeId} | activityoutcomes |  |
| ListActivityOutcomes | GET | /v2/activities/outcomes | activityoutcomes |  |
| GetActivityPriority | GET | /v2/activities/priorities/{priorityId} | activitypriorities |  |
| ListActivityPriorities | GET | /v2/activities/priorities | activitypriorities |  |
| GetActivityType | GET | /v2/activities/types/{typeId} | activitytypes |  |
| ListActivityTypes | GET | /v2/activities/types | activitytypes |  |
| CreateClientAddress | POST | /v2/clients/{clientId}/addresses | addresses |  |
| CreateLeadAddress | POST | /v2/leads/{leadId}/addresses | addresses |  |
| DeleteClientAddress | DELETE | /v2/clients/{clientId}/addresses/{addressId} | addresses |  |
| DeleteLeadAddress | DELETE | /v2/leads/{leadId}/addresses/{addressId} | addresses |  |
| GetAdviserAddress | GET | /v2/advisers/{adviserId}/addresses/{addressId} | addresses |  |
| GetClientAddress | GET | /v2/clients/{clientId}/addresses/{addressId} | addresses |  |
| GetLeadAddress | GET | /v2/leads/{leadId}/addresses/{addressId} | addresses |  |
| ListAdviserAddresses | GET | /v2/advisers/{adviserId}/addresses | addresses |  |
| ListClientAddresses | GET | /v2/clients/{clientId}/addresses | addresses |  |
| ListLeadAddresses | GET | /v2/leads/{leadId}/addresses | addresses |  |
| UpdateClientAddress | PUT | /v2/clients/{clientId}/addresses/{addressId} | addresses |  |
| UpdateLeadAddress | PUT | /v2/leads/{leadId}/addresses/{addressId} | addresses |  |
| AdviserExists | HEAD | /v2/advisers/{adviserId} | advisers |  |
| GetAdviser | GET | /v2/advisers/{adviserId} | advisers |  |
| GetAdviser | GET | /v1/advisers/{partyId} | advisers |  |
| ListAdvisers | GET | /v2/advisers | advisers |  |
| CreateAppointment | POST | /v2/activities/appointments | appointments |  |
| DeleteAppointment | DELETE | /v2/activities/appointments/{appointmentId} | appointments |  |
| GetAppointment | GET | /v2/activities/appointments/{appointmentId} | appointments |  |
| ListAppointment | GET | /v2/activities/appointments | appointments |  |
| UpdateAppointment | PUT | /v2/activities/appointments/{appointmentId} | appointments |  |
| ClientExists | HEAD | /v2/clients/{clientId} | clients |  |
| CreateClient | POST | /v2/clients | clients |  |
| CreateClient | POST | /v1/clients | clients |  |
| DeleteClient | DELETE | /v2/clients/{clientId} | clients |  |
| DeleteClientContact | DELETE | /v1/clients/{partyId}/contacts/{contactId} | clients |  |
| ExistsClient | HEAD | /v1/clients/{partyId} | clients |  |
| ExistsClientContact | HEAD | /v1/clients/{partyId}/contacts/{contactId} | clients |  |
| GetClient | GET | /v2/clients/{clientId} | clients |  |
| GetClient | GET | /v1/clients/{partyId} | clients |  |
| GetClientContact | GET | /v1/clients/{partyId}/contacts/{contactId} | clients |  |
| GetClientServicecase | GET | /v1/clients/{clientId}/servicecases/{serviceCaseId} | clients |  |
| ListClientContacts | GET | /v1/clients/{partyId}/contacts | clients |  |
| ListClients | GET | /v2/clients | clients |  |
| ListClientsAdvisers | GET | /v1/clients/{partyId}/advisers | clients |  |
| ListClientSegments | GET | /v2/clients/client_segments | clients |  |
| ListClientServicecases | GET | /v1/clients/{clientId}/servicecases | clients |  |
| ListClientsProfessionalcontacts | GET | /v1/clients/{clientId}/professionalcontacts | clients |  |
| MarkasdefaultClientContact | PATCH | /v1/clients/{partyId}/contacts/{contactId}/markasdefault | clients |  |
| UpdateClient | PUT | /v2/clients/{clientId} | clients |  |
| UpdateClient | PUT | /v1/clients/{partyId} | clients |  |
| UpdateClientContact | PUT | /v1/clients/{partyId}/contacts/{contactId} | clients |  |
| CreateClientContactdetails | POST | /v2/clients/{clientId}/contactdetails | contactdetails |  |
| CreateLeadContactdetails | POST | /v2/leads/{leadId}/contactdetails | contactdetails |  |
| DeleteClientContactdetail | DELETE | /v2/clients/{clientId}/contactdetails/{contactDetailId} | contactdetails |  |
| DeleteLeadContactdetail | DELETE | /v2/leads/{leadId}/contactdetails/{contactDetailId} | contactdetails |  |
| GetAdviserContactdetail | GET | /v2/advisers/{adviserId}/contactdetails/{contactDetailId} | contactdetails |  |
| GetClientContactdetail | GET | /v2/clients/{clientId}/contactdetails/{contactDetailId} | contactdetails |  |
| GetLeadContactdetail | GET | /v2/leads/{leadId}/contactdetails/{contactDetailId} | contactdetails |  |
| ListAdviserContactdetails | GET | /v2/advisers/{adviserId}/contactdetails | contactdetails |  |
| ListClientContactdetails | GET | /v2/clients/{clientId}/contactdetails | contactdetails |  |
| ListLeadContactdetails | GET | /v2/leads/{leadId}/contactdetails | contactdetails |  |
| UpdateClientContactdetail | PUT | /v2/clients/{clientId}/contactdetails/{contactDetailId} | contactdetails |  |
| UpdateLeadContactdetail | PUT | /v2/leads/{leadId}/contactdetails/{contactDetailId} | contactdetails |  |
| CreateCorporate | POST | /v1/corporates | corporates |  |
| DeleteCorporateContact | DELETE | /v1/corporates/{partyId}/contacts/{contactId} | corporates |  |
| ExistsCorporate | HEAD | /v1/corporates/{partyId} | corporates |  |
| ExistsCorporateContact | HEAD | /v1/corporates/{partyId}/contacts/{contactId} | corporates |  |
| GetCorporate | GET | /v1/corporates/{partyId} | corporates |  |
| GetCorporateContact | GET | /v1/corporates/{partyId}/contacts/{contactId} | corporates |  |
| ListCorporateContacts | GET | /v1/corporates/{partyId}/contacts | corporates |  |
| MarkasdefaultCorporateContact | PATCH | /v1/corporates/{partyId}/contacts/{contactId}/markasdefault | corporates |  |
| UpdateCorporate | PUT | /v1/corporates/{partyId} | corporates |  |
| UpdateCorporateContact | PUT | /v1/corporates/{partyId}/contacts/{contactId} | corporates |  |
| ListCountriesCounties | GET | /v1/countries/{countryCode}/counties | counties |  |
| ListCountries | GET | /v1/countries | countries |  |
| GetQuestion | GET | /v2/questions/{questionId} | customquestions |  |
| ListQuestions | GET | /v2/questions | customquestions |  |
| ListQuestionsAnswers | GET | /v2/clients/{clientId}/questions | customquestions |  |
| UpdateQuestionAnswers | PUT | /v2/clients/{clientId}/questions | customquestions |  |
| CreateEmail | POST | /v2/activities/emails | emails |  |
| GetEmail | GET | /v2/activities/emails/{emailId} | emails |  |
| ListEmails | GET | /v2/activities/emails | emails |  |
| GetGroup | GET | /v2/groups/{groupId} | groups |  |
| GetGroup | GET | /v1/groups/{groupId} | groups |  |
| ListGroups | GET | /v2/groups | groups |  |
| ListGroupsLineage | GET | /v1/groups/{groupId}/lineage | groups |  |
| CreateLead | POST | /v2/leads | leads |  |
| CreateLead | POST | /v1/leads | leads |  |
| DeleteLead | DELETE | /v2/leads/{leadId} | leads |  |
| DeleteLeadContact | DELETE | /v1/leads/{partyId}/contacts/{contactId} | leads |  |
| ExistsLead | HEAD | /v1/leads/{partyId} | leads |  |
| ExistsLeadContact | HEAD | /v1/leads/{partyId}/contacts/{contactId} | leads |  |
| GetLead | GET | /v2/leads/{leadId} | leads |  |
| GetLead | GET | /v1/leads/{partyId} | leads |  |
| GetLeadContact | GET | /v1/leads/{partyId}/contacts/{contactId} | leads |  |
| LeadExists | HEAD | /v2/leads/{leadId} | leads |  |
| ListLeadContacts | GET | /v1/leads/{partyId}/contacts | leads |  |
| ListLeads | GET | /v2/leads | leads |  |
| MarkasdefaultLeadContact | PATCH | /v1/leads/{partyId}/contacts/{contactId}/markasdefault | leads |  |
| UpdateLead | PUT | /v2/leads/{leadId} | leads |  |
| UpdateLeadContact | PUT | /v1/leads/{partyId}/contacts/{contactId} | leads |  |
| ListLegacyApps | GET | /v2/users/{userId}/legacyapps | legacyapps |  |
| GetClientMarketingPreferences | GET | /v2/clients/{clientId}/marketing_preferences | marketingpreferences, beta |  |
| GetLeadMarketingPreferences | GET | /v2/leads/{leadId}/marketing_preferences | marketingpreferences, beta |  |
| UpdateClientMarketingPreferences | PUT | /v2/clients/{clientId}/marketing_preferences | marketingpreferences, beta |  |
| UpdateLeadMarketingPreferences | PUT | /v2/leads/{leadId}/marketing_preferences | marketingpreferences, beta |  |
| CreateCampaignChannel | POST | /v2/opportunities/campaignchannels | opportunities |  |
| CreateCampaignType | POST | /v2/opportunities/campaigntypes | opportunities |  |
| CreateClientOpportunity | POST | /v2/clients/{clientId}/opportunities | opportunities |  |
| CreateLeadOpportunity | POST | /v2/leads/{leadId}/opportunities | opportunities |  |
| CreateOpportunityCampaign | POST | /v2/opportunities/campaigns | opportunities |  |
| CreateOpportunityProposition | POST | /v2/opportunities/propositions | opportunities |  |
| CreateOpportunityStatus | POST | /v2/opportunities/statuses | opportunities |  |
| CreateOpportunityType | POST | /v2/opportunities/types | opportunities |  |
| DeleteCampaignChannel | DELETE | /v2/opportunities/campaignchannels/{campaignChannelId} | opportunities |  |
| DeleteCampaignType | DELETE | /v2/opportunities/campaigntypes/{campaignTypeId} | opportunities |  |
| DeleteOpportunityCampaign | DELETE | /v2/opportunities/campaigns/{opportunityCampaignId} | opportunities |  |
| DeleteOpportunityProposition | DELETE | /v2/opportunities/propositions/{propositionId} | opportunities |  |
| DeleteOpportunityStatus | DELETE | /v2/opportunities/statuses/{opportunityStatusId} | opportunities |  |
| DeleteOpportunityType | DELETE | /v2/opportunities/types/{opportunityTypeId} | opportunities |  |
| GetClientOpportunity | GET | /v2/clients/{clientId}/opportunities/{opportunityId} | opportunities |  |
| GetLeadOpportunity | GET | /v2/leads/{leadId}/opportunities/{opportunityId} | opportunities |  |
| GetOpportunityType | GET | /v2/opportunities/types/{opportunityTypeId} | opportunities |  |
| ListCampaignChannels | GET | /v2/opportunities/campaignchannels | opportunities |  |
| ListCampaignTypes | GET | /v2/opportunities/campaigntypes | opportunities |  |
| ListClientOpportunities | GET | /v2/clients/{clientId}/opportunities | opportunities |  |
| ListLeadOpportunities | GET | /v2/leads/{leadId}/opportunities | opportunities |  |
| ListOpportunityCampaigns | GET | /v2/opportunities/campaigns | opportunities |  |
| ListOpportunityPropositions | GET | /v2/opportunities/propositions | opportunities |  |
| ListOpportunityStatuses | GET | /v2/opportunities/statuses | opportunities |  |
| ListOpportunityTypes | GET | /v2/opportunities/types | opportunities |  |
| UpdateCampaignChannel | PUT | /v2/opportunities/campaignchannels/{campaignChannelId} | opportunities |  |
| UpdateCampaignType | PUT | /v2/opportunities/campaigntypes/{campaignTypeId} | opportunities |  |
| UpdateClientOpportunity | PUT | /v2/clients/{clientId}/opportunities/{opportunityId} | opportunities |  |
| UpdateLeadOpporunity | PUT | /v2/leads/{leadId}/opportunities/{opportunityId} | opportunities |  |
| UpdateOpportunityCampaign | PUT | /v2/opportunities/campaigns/{opportunityCampaignId} | opportunities |  |
| UpdateOpportunityProposition | PUT | /v2/opportunities/propositions/{propositionId} | opportunities |  |
| UpdateOpportunityStatus | PUT | /v2/opportunities/statuses/{opportunityStatusId} | opportunities |  |
| UpdateOpportunityType | PUT | /v2/opportunities/types/{opportunityTypeId} | opportunities |  |
| ExistsParty | HEAD | /v1/parties/{partyId} | parties |  |
| CreatePerson | POST | /v1/people | people |  |
| ExistsPerson | HEAD | /v1/people/{partyId} | people |  |
| GetPerson | GET | /v1/people/{partyId} | people |  |
| UpdatePerson | PUT | /v1/people/{partyId} | people |  |
| CreatePersonalContact | POST | /v2/clients/{clientId}/personalContacts | personalcontacts |  |
| DeletePersonalContact | DELETE | /v2/clients/{clientId}/personalContacts/{personalContactId} | personalcontacts |  |
| GetPersonalContact | GET | /v2/clients/{clientId}/personalContacts/{personalContactId} | personalcontacts |  |
| ListPersonalContacts | GET | /v2/clients/{clientId}/personalContacts | personalcontacts |  |
| PatchPersonalContact | PATCH | /v2/clients/{clientId}/personalContacts/{personalContactId} | personalcontacts |  |
| UpdatePersonalContact | PUT | /v2/clients/{clientId}/personalContacts/{personalContactId} | personalcontacts |  |
| CreateClientOpportunityPlan | POST | /v2/clients/{clientId}/opportunities/{opportunityId}/plans/{planId} | plans |  |
| CreateClientServicecasePlan | POST | /v2/clients/{clientId}/servicecases/{serviceCaseId}/plans/{planId} | plans |  |
| DeleteClientOpportunityPlan | DELETE | /v2/clients/{clientId}/opportunities/{opportunityId}/plans/{planId} | plans |  |
| DeleteClientServicecasePlan | DELETE | /v2/clients/{clientId}/servicecases/{serviceCaseId}/plans/{planId} | plans |  |
| CreateProductProvider | POST | /v2/productproviders | productproviders |  |
| GetProductprovider | GET | /v2/productproviders/{productProviderId} | productproviders |  |
| ListProductproviders | GET | /v2/productproviders | productproviders |  |
| ListProductproviders | GET | /v1/productproviders | productproviders |  |
| ListProductproviderSearches | GET | /v1/productproviders/search | productproviders |  |
| CreateClientRelationship | POST | /v2/clients/{clientId}/relationships | relationships |  |
| CreateClientRelationshipAccess | POST | /v2/clients/{clientId}/relationships/{relationshipId}/access | relationships |  |
| CreateClientRelationshipWithRelation | POST | /v2/clients/{clientId}/relationships/relation | relationships |  |
| CreateLeadRelationship | POST | /v2/leads/{leadId}/relationships | relationships |  |
| DeleteClientRelationship | DELETE | /v2/clients/{clientId}/relationships/{relationshipId} | relationships |  |
| DeleteClientRelationshipAccess | DELETE | /v2/clients/{clientId}/relationships/{relationshipId}/access | relationships |  |
| DeleteLeadRelationship | DELETE | /v2/leads/{leadId}/relationships/{relationshipId} | relationships |  |
| GetClientRelationship | GET | /v2/clients/{clientId}/relationships/{relationshipId} | relationships |  |
| GetClientRelationship | GET | /v1/clients/{clientId}/relationships/{relationshipId} | relationships |  |
| GetLeadRelationship | GET | /v2/leads/{leadId}/relationships/{relationshipId} | relationships |  |
| ListClientRelationships | GET | /v2/clients/{clientId}/relationships | relationships |  |
| ListClientRelationships | GET | /v1/clients/{clientId}/relationships | relationships |  |
| ListLeadRelationships | GET | /v2/leads/{leadId}/relationships | relationships |  |
| UpdateClientRelationship | PUT | /v2/clients/{clientId}/relationships/{relationshipId} | relationships |  |
| UpdateLeadRelationship | PUT | /v2/leads/{leadId}/relationships/{relationshipId} | relationships |  |
| ListRelationshiptypes | GET | /v2/relationshiptypes | relationshiptypes |  |
| GetClientRequirement | GET | /v2/clients/{clientId}/requirements/{requirementId} | requirements |  |
| ListClientRequirements | GET | /v2/clients/{clientId}/requirements | requirements |  |
| CreateClientsSearch | POST | /v1/clients/search | search, clients |  |
| CreateLeadsSearch | POST | /v1/leads/search | search, leads |  |
| ListClientsSearch | GET | /v2/clients/search | searches |  |
| CreateClientServicecases | POST | /v2/clients/{clientId}/servicecases | servicecases |  |
| GetClientServicecase | GET | /v2/clients/{clientId}/servicecases/{serviceCaseId} | servicecases |  |
| ListClientServicecases | GET | /v2/clients/{clientId}/servicecases | servicecases |  |
| UpdateClientServicecase | PUT | /v2/clients/{clientId}/servicecases/{serviceCaseId} | servicecases |  |
| AddClientTag | POST | /v2/clients/{clientId}/tags/{tagName} | tags |  |
| AddLeadTag | POST | /v2/leads/{leadId}/tags/{tagName} | tags |  |
| ListClientTags | GET | /v2/clients/{clientId}/tags | tags |  |
| ListLeadTags | GET | /v2/leads/{leadId}/tags | tags |  |
| ListTags | GET | /v2/tags | tags |  |
| RemoveClientTag | DELETE | /v2/clients/{clientId}/tags/{tagName} | tags |  |
| RemoveLeadTag | DELETE | /v2/leads/{leadId}/tags/{tagName} | tags |  |
| UpdateClientTags | PUT | /v2/clients/{clientId}/tags | tags |  |
| UpdateLeadTags | PUT | /v2/leads/{leadId}/tags | tags |  |
| CreateTask | POST | /v2/activities/tasks | tasks |  |
| CreateTask | POST | /v1/tasks | tasks |  |
| DeleteTask | DELETE | /v2/activities/tasks/{taskId} | tasks |  |
| ExistsTask | HEAD | /v1/tasks/{taskId} | tasks |  |
| GetTask | GET | /v2/activities/tasks/{taskId} | tasks |  |
| GetTask | GET | /v1/tasks/{taskId} | tasks |  |
| GetTaskSettings | GET | /v1/tasks/settings | tasks |  |
| ListPartiesTasks | GET | /v1/parties/{partyId}/tasks | tasks |  |
| ListTask | GET | /v2/activities/tasks | tasks |  |
| ListTasks | GET | /v1/tasks | tasks |  |
| UpdateTask | PUT | /v2/activities/tasks/{taskId} | tasks |  |
| UpdateTask | PUT | /v1/tasks/{taskId} | tasks |  |
| UpdateTaskSettings | PUT | /v1/tasks/settings | tasks |  |
| GetTenant | GET | /v2/tenants/{tenantId} | tenants, beta |  |
| GetTenant | GET | /v1/tenants/{tenantId} | tenants |  |
| GetUserDiaryClassification | GET | /v2/diary/users/{userId}/classifications/{userDiaryClassificationId} | userdiaryclassifications |  |
| ListUserDiaryClassification | GET | /v2/diary/users/{userId}/classifications | userdiaryclassifications |  |
| GetClientVulnerability | GET | /v2/clients/{clientId}/vulnerabilities/{vulnerabilityId} | vulnerabilities |  |
| GetClientVulnerabilityCurrent | GET | /v2/clients/{clientId}/vulnerabilities/current | vulnerabilities |  |
| ListClientsVulnerabilities | GET | /v2/clients/vulnerabilities/current | vulnerabilities |  |
| UpdateClientVulnerabilitiesCurrent | PUT | /v2/clients/{clientId}/vulnerabilities/current | vulnerabilities |  |

### Monolith.Entitlement (8 operations)

| Operation ID | Method | Endpoint | Tags | Scopes |
|-------------|--------|----------|------|--------|
| CreateIPAddress | POST | /v2/tenants/{tenantId}/IPAddress | entitlement |  |
| CreateUserDetail | POST | /v2/users | entitlement |  |
| GetUserDetail | GET | /v2/users/{userId} | entitlement |  |
| ListIPAddresses | GET | /v2/tenants/{tenantId}/IPAddress | entitlement, beta |  |
| ListSupportIPAddresses | GET | /v2/support/IPAddress | entitlement, beta |  |
| ListUserActivity | GET | /v2/users/{userId}/activity | entitlement, beta |  |
| ListUsersDetails | GET | /v2/users | entitlement, beta |  |
| UpdateUserDetail | PUT | /v2/users/{userId} | entitlement |  |

### Monolith.FactFind (57 operations)

| Operation ID | Method | Endpoint | Tags | Scopes |
|-------------|--------|----------|------|--------|
| CreateClientGoalLinktoplan | POST | /v1/clients/{clientId}/goals/{goalId}/linktoplan | clients |  |
| CreateClientGoalUnlink | POST | /v1/clients/{clientId}/goals/{goalId}/unlink | clients |  |
| CreateClientIncome | POST | /v1/clients/{clientId}/incomes | clients |  |
| DeleteClientExpenditure | DELETE | /v1/clients/{clientId}/expenditure | clients |  |
| DeleteClientExpense | DELETE | /v1/clients/{clientId}/expenditure/expenses/{expenseId} | clients |  |
| DeleteClientGoal | DELETE | /v1/clients/{clientId}/goals/{goalId} | clients |  |
| DeleteClientIncome | DELETE | /v1/clients/{clientId}/incomes/{incomeId} | clients |  |
| DeleteClientLiability | DELETE | /v1/clients/{clientId}/liabilities/{liabilityId} | clients |  |
| ExistsClientExpenditure | HEAD | /v1/clients/{clientId}/expenditure | clients |  |
| ExistsClientExpense | HEAD | /v1/clients/{clientId}/expenditure/expenses/{expenseId} | clients |  |
| ExistsClientGoal | HEAD | /v1/clients/{clientId}/goals/{goalId} | clients |  |
| ExistsClientIncome | HEAD | /v1/clients/{clientId}/incomes/{incomeId} | clients |  |
| ExistsClientLiability | HEAD | /v1/clients/{clientId}/liabilities/{liabilityId} | clients |  |
| ExistsExpensecategory | HEAD | /v1/clients/expensecategories/{expenseCategoryId} | clients |  |
| ExistsExpensegroup | HEAD | /v1/clients/expensegroups/{expenseGroupId} | clients |  |
| GetClientExpenditure | GET | /v1/clients/{clientId}/expenditure | clients |  |
| GetClientExpense | GET | /v1/clients/{clientId}/expenditure/expenses/{expenseId} | clients |  |
| GetClientGoal | GET | /v1/clients/{clientId}/goals/{goalId} | clients |  |
| GetClientIncome | GET | /v1/clients/{clientId}/incomes/{incomeId} | clients |  |
| GetClientLiability | GET | /v1/clients/{clientId}/liabilities/{liabilityId} | clients |  |
| GetExpensecategory | GET | /v1/clients/expensecategories/{expenseCategoryId} | clients |  |
| GetExpensegroup | GET | /v1/clients/expensegroups/{expenseGroupId} | clients |  |
| ListClientExpendituresExpenses | GET | /v1/clients/{clientId}/expenditure/expenses | clients |  |
| ListClientGoals | GET | /v1/clients/{clientId}/goals | clients |  |
| ListClientIncomes | GET | /v1/clients/{clientId}/incomes | clients |  |
| ListClientLiabilities | GET | /v1/clients/{clientId}/liabilities | clients |  |
| ListClientsExpensecategories | GET | /v1/clients/expensecategories | clients |  |
| ListClientsExpensegroups | GET | /v1/clients/expensegroups | clients |  |
| MarkascompletedClientGoal | POST | /v1/clients/{clientId}/goals/{goalId}/markascompleted | clients |  |
| MarkasincompleteClientGoal | POST | /v1/clients/{clientId}/goals/{goalId}/markasincomplete | clients |  |
| UpdateClientExpenditure | PUT | /v1/clients/{clientId}/expenditure | clients |  |
| UpdateClientExpense | PUT | /v1/clients/{clientId}/expenditure/expenses/{expenseId} | clients |  |
| UpdateClientGoal | PUT | /v1/clients/{clientId}/goals/{goalId} | clients |  |
| UpdateClientIncome | PUT | /v1/clients/{clientId}/incomes/{incomeId} | clients |  |
| UpdateClientLiability | PUT | /v1/clients/{clientId}/liabilities/{liabilityId} | clients |  |
| UpdateClientsExpenditureExpenses | PUT | /v1/clients/{clientId}/expenditure/expenses | clients |  |
| UpdateClientsIncomes | PUT | /v1/clients/{clientId}/incomes | clients |  |
| CreateClientDependant | POST | /v2/clients/{clientId}/dependants | dependants, beta |  |
| DeleteClientDependant | DELETE | /v2/clients/{clientId}/dependants/{dependantId} | dependants, beta |  |
| GetClientDependant | GET | /v2/clients/{clientId}/dependants/{dependantId} | dependants, beta |  |
| ListClientDependants | GET | /v2/clients/{clientId}/dependants | dependants, beta |  |
| UpdateClientDependant | PUT | /v2/clients/{clientId}/dependants/{dependantId} | dependants, beta |  |
| CreateClientEmployment | POST | /v2/clients/{clientId}/employments | employments |  |
| DeleteClientEmployment | DELETE | /v2/clients/{clientId}/employments/{employmentId} | employments |  |
| GetClientEmployment | GET | /v2/clients/{clientId}/employments/{employmentId} | employments |  |
| ListClientEmployments | GET | /v2/clients/{clientId}/employments | employments |  |
| UpdateClientEmployment | PUT | /v2/clients/{clientId}/employments/{employmentId} | employments |  |
| CreateClientExpenditure | POST | /v2/clients/{clientId}/expenditures | expenditures, beta |  |
| DeleteClientExpenditure | DELETE | /v2/clients/{clientId}/expenditures/{expenditureId} | expenditures, beta |  |
| GetClientExpenditure | GET | /v2/clients/{clientId}/expenditures/{expenditureId} | expenditures, beta |  |
| ListClientExpenditures | GET | /v2/clients/{clientId}/expenditures | expenditures, beta |  |
| UpdateClientExpenditure | PUT | /v2/clients/{clientId}/expenditures/{expenditureId} | expenditures, beta |  |
| CreateClientIncome | POST | /v2/clients/{clientId}/incomes | incomes, beta |  |
| DeleteClientIncome | DELETE | /v2/clients/{clientId}/incomes/{incomeId} | incomes, beta |  |
| GetClientIncome | GET | /v2/clients/{clientId}/incomes/{incomeId} | incomes, beta |  |
| ListClientIncomes | GET | /v2/clients/{clientId}/incomes | incomes, beta |  |
| UpdateClientIncome | PUT | /v2/clients/{clientId}/incomes/{incomeId} | incomes, beta |  |

### Monolith.Portfolio (131 operations)

| Operation ID | Method | Endpoint | Tags | Scopes |
|-------------|--------|----------|------|--------|
| ListGatedPlanTypesByAdviserId | GET | /v2/advisers/{adviserId}/planTypes | advisers |  |
| CreateClientAssets | POST | /v2/clients/{clientId}/assets | assets |  |
| DeleteClientAsset | DELETE | /v2/clients/{clientId}/assets/{assetId} | assets |  |
| GetClientAsset | GET | /v2/clients/{clientId}/assets/{assetId} | assets |  |
| ListClientAssets | GET | /v2/clients/{clientId}/assets | assets |  |
| UpdateClientAsset | PUT | /v2/clients/{clientId}/assets/{assetId} | assets |  |
| DeleteClientPlanBeneficiaries | DELETE | /v2/clients/{clientId}/plans/{planId}/beneficiaries | beneficiaries |  |
| ListClientPlansBeneficiaries | GET | /v2/clients/{clientId}/plans/{planId}/beneficiaries | beneficiaries |  |
| UpdateClientPlansBeneficiaries | PUT | /v2/clients/{clientId}/plans/{planId}/beneficiaries | beneficiaries |  |
| CreatePlanContributions | POST | /v2/clients/{clientId}/plans/{planId}/contributions | contributions |  |
| DeleteClientPlanContribution | DELETE | /v2/clients/{clientId}/plans/{planId}/contributions/{contributionId} | contributions |  |
| GetClientPlanContribution | GET | /v2/clients/{clientId}/plans/{planId}/contributions/{contributionId} | contributions |  |
| ListClientPlanContributions | GET | /v2/clients/{clientId}/plans/{planId}/contributions | contributions, beta |  |
| UpdateClientPlanContribution | PUT | /v2/clients/{clientId}/plans/{planId}/contributions/{contributionId} | contributions |  |
| DeleteClientCreditcard | DELETE | /v1/clients/{clientId}/plans/creditcards/{planId} | creditcards |  |
| GetClientCreditcard | GET | /v1/clients/{clientId}/plans/creditcards/{planId} | creditcards |  |
| ListClientPlansCreditcards | GET | /v1/clients/{clientId}/plans/creditcards | creditcards |  |
| UpdateClientCreditcard | PUT | /v1/clients/{clientId}/plans/creditcards/{planId} | creditcards |  |
| DeleteClientCurrentaccount | DELETE | /v1/clients/{clientId}/plans/currentaccounts/{planId} | currentaccounts |  |
| GetClientCurrentaccount | GET | /v1/clients/{clientId}/plans/currentaccounts/{planId} | currentaccounts |  |
| ListClientPlansCurrentaccounts | GET | /v1/clients/{clientId}/plans/currentaccounts | currentaccounts |  |
| UpdateClientCurrentaccount | PUT | /v1/clients/{clientId}/plans/currentaccounts/{planId} | currentaccounts |  |
| GetClientFinancialsummary | GET | /v1/clients/{clientId}/financialsummary | financialsummary |  |
| GetClientFinancialsummarybycategory | GET | /v1/clients/{clientId}/financialsummarybycategory | financialsummary |  |
| ListFundPrices | GET | /v2/funds/{fundId}/prices | fundprices |  |
| DeleteClientPlanFundproposal | DELETE | /v2/clients/{clientId}/plans/{planId}/fundproposal | fundproposal |  |
| GetClientPlanFundproposal | GET | /v2/clients/{clientId}/plans/{planId}/fundproposal | fundproposal |  |
| UpdateClientPlanFundproposal | PUT | /v2/clients/{clientId}/plans/{planId}/fundproposal | fundproposal |  |
| GetFundprovider | GET | /v2/fundproviders/{code} | fundproviders |  |
| ListFundproviders | GET | /v2/fundproviders | fundproviders |  |
| CreateFund | POST | /v2/funds | funds |  |
| GetFund | GET | /v2/funds/{fundId} | funds |  |
| ListFunds | GET | /v2/funds | funds |  |
| UpdateFund | PUT | /v2/funds/{fundId} | funds |  |
| GetFundsector | GET | /v2/fundsectors/{code} | fundsectors |  |
| ListFundsectors | GET | /v2/fundsectors | fundsectors |  |
| GetClientPlanHoldingTransaction | GET | /v2/clients/{clientId}/plans/{planId}/holdings/{holdingId}/transactions/{transactionId} | fundtransactions |  |
| ListClientPlanHoldingTransactions | GET | /v2/clients/{clientId}/plans/{planId}/holdings/{holdingId}/transactions | fundtransactions |  |
| CreatePlanHoldings | POST | /v2/clients/{clientId}/plans/{planId}/holdings | holdings |  |
| GetClientPlanHolding | GET | /v2/clients/{clientId}/plans/{planId}/holdings/{holdingId} | holdings |  |
| ListClientPlanHoldings | GET | /v2/clients/{clientId}/plans/{planId}/holdings | holdings |  |
| ListClientsHoldings | GET | /v2/clients/{clientId}/holdings | holdings |  |
| UpdateClientPlanHolding | PUT | /v2/clients/{clientId}/plans/{planId}/holdings/{holdingId} | holdings |  |
| DeleteClientInvestment | DELETE | /v1/clients/{clientId}/plans/investments/{planId} | investments |  |
| GetClientInvestment | GET | /v1/clients/{clientId}/plans/investments/{planId} | investments |  |
| ListClientPlansInvestments | GET | /v1/clients/{clientId}/plans/investments | investments |  |
| UpdateClientInvestment | PUT | /v1/clients/{clientId}/plans/investments/{planId} | investments |  |
| GetLifecycle | GET | /v2/lifecycles/{lifecycleId} | lifecycles, beta |  |
| ListLifecycles | GET | /v2/lifecycles | lifecycles, beta |  |
| ListLifecycleStatuses | GET | /v2/lifecycles/statuses | lifecycles |  |
| ListLifecycleTransitions | GET | /v2/lifecycles/{lifecycleId}/transitions | lifecycles |  |
| ListClientPlansLivesAssured | GET | /v2/clients/{clientId}/plans/{planId}/livesassured | livesassured |  |
| UpdateClientPlansLivesAssured | PUT | /v2/clients/{clientId}/plans/{planId}/livesassured | livesassured |  |
| DeleteClientLoan | DELETE | /v1/clients/{clientId}/plans/loans/{planId} | loans |  |
| GetClientLoan | GET | /v1/clients/{clientId}/plans/loans/{planId} | loans |  |
| ListClientPlansLoans | GET | /v1/clients/{clientId}/plans/loans | loans |  |
| UpdateClientLoan | PUT | /v1/clients/{clientId}/plans/loans/{planId} | loans |  |
| ActivatePortfolioModel | POST | /v2/models/{modelId}/active | models |  |
| CreateDraftPortfolioModel | POST | /v2/models/draft | models |  |
| CreateModel | POST | /v2/models | models |  |
| GetModel | GET | /v2/models/{modelId} | models |  |
| ListModels | GET | /v2/models | models |  |
| PatchModel | PATCH | /v2/models/{modelId} | models |  |
| PublishDraftPortfolioModel | POST | /v2/models/draft/{modelId}/publish | models |  |
| UpdateDraftPortfolioModel | PUT | /v2/models/draft/{modelId} | models |  |
| UpdateOrCreatePortfolioModel | PUT | /v2/models | models |  |
| DeleteClientMortgage | DELETE | /v1/clients/{clientId}/plans/mortgages/{planId} | mortgages |  |
| GetClientMortgage | GET | /v1/clients/{clientId}/plans/mortgages/{planId} | mortgages |  |
| ListClientPlansMortgages | GET | /v1/clients/{clientId}/plans/mortgages | mortgages |  |
| UpdateClientMortgage | PUT | /v1/clients/{clientId}/plans/mortgages/{planId} | mortgages |  |
| DeleteClientPension | DELETE | /v1/clients/{clientId}/plans/pensions/{planId} | pensions |  |
| GetClientPension | GET | /v1/clients/{clientId}/plans/pensions/{planId} | pensions |  |
| ListClientPlansPensions | GET | /v1/clients/{clientId}/plans/pensions | pensions |  |
| UpdateClientPension | PUT | /v1/clients/{clientId}/plans/pensions/{planId} | pensions |  |
| CreateClientPlans | POST | /v2/clients/{clientId}/plans | plans |  |
| CreateTopupPlan | POST | /v2/clients/{clientId}/plans/{planId} | plans |  |
| DeleteClientPlan | DELETE | /v2/clients/{clientId}/plans/{planId} | plans |  |
| ExistsClientPlan | HEAD | /v2/clients/{clientId}/plans/{planId} | plans |  |
| GetClientPlan | GET | /v2/clients/{clientId}/plans/{planId} | plans |  |
| GetClientValuation | GET | /v1/clients/{clientId}/plans/valuations/{valuationId} | plans |  |
| GetPlan | GET | /v2/plans/{planId} | plans |  |
| GetPlantype | GET | /v1/plantypes/{planTypeId} | plans |  |
| ListClientPlans | GET | /v2/clients/{clientId}/plans | plans |  |
| ListClientPlansValuations | GET | /v1/clients/{clientId}/plans/valuations | plans |  |
| ListClientPlansValuationsPropertyvaluations | GET | /v1/clients/{clientId}/plans/valuations/propertyvaluations | plans |  |
| ListClientPlansValuationsTimeseries | GET | /v1/clients/{clientId}/plans/valuations/timeseries | plans |  |
| ListClientPlanValuationsTimeseries | GET | /v1/clients/{clientId}/plans/{planId}/valuations/timeseries | plans |  |
| PatchClientPlan | PATCH | /v2/clients/{clientId}/plans/{planId} | plans |  |
| PlanExists | HEAD | /v2/plans/{planId} | plans |  |
| UpdateClientPlan | PUT | /v2/clients/{clientId}/plans/{planId} | plans, beta |  |
| ListGatedPlanTypes | GET | /v2/plantypes/adviser/{adviserId} | plantypes |  |
| ListPlantypes | GET | /v2/plantypes | plantypes |  |
| DeleteClientProtection | DELETE | /v1/clients/{clientId}/plans/protections/{planId} | protections |  |
| GetClientProtection | GET | /v1/clients/{clientId}/plans/protections/{planId} | protections |  |
| ListClientPlansProtections | GET | /v1/clients/{clientId}/plans/protections | protections |  |
| UpdateClientProtection | PUT | /v1/clients/{clientId}/plans/protections/{planId} | protections |  |
| ListClientPlansPurposes | GET | /v2/clients/{clientId}/plans/{planId}/purposes | purposes |  |
| UpdateClientPlansPurposes | PUT | /v2/clients/{clientId}/plans/{planId}/purposes | purposes |  |
| DeleteClientSavingsaccount | DELETE | /v1/clients/{clientId}/plans/savingsaccounts/{planId} | savingsaccounts |  |
| GetClientSavingsaccount | GET | /v1/clients/{clientId}/plans/savingsaccounts/{planId} | savingsaccounts |  |
| ListClientPlansSavingsaccounts | GET | /v1/clients/{clientId}/plans/savingsaccounts | savingsaccounts |  |
| UpdateClientSavingsaccount | PUT | /v1/clients/{clientId}/plans/savingsaccounts/{planId} | savingsaccounts |  |
| CreatePlanStatuses | POST | /v2/clients/{clientId}/plans/{planId}/statuses | statuses |  |
| GetPlanStatus | GET | /v2/clients/{clientId}/plans/{planId}/statuses/{planStatusId} | statuses |  |
| ListClientPlanStatuses | GET | /v2/clients/{clientId}/plans/{planId}/statuses | statuses |  |
| BatchCreateClientPlanTransactions | POST | /v2/clients/{clientId}/plans/{planId}/transactions | transactions, beta |  |
| BatchCreateClientTransactions | POST | /v2/clients/{clientId}/transactions | transactions, beta |  |
| BatchCreateTransactions | POST | /v2/transactions | transactions, beta |  |
| ClientPlanTransactionExists | HEAD | /v2/clients/{clientId}/plans/{planId}/transactions/{transactionId} | transactions, beta |  |
| GetClientPlanTransaction | GET | /v2/clients/{clientId}/plans/{planId}/transactions/{transactionId} | transactions, beta |  |
| ListClientPlanTransactions | GET | /v2/clients/{clientId}/plans/{planId}/transactions | transactions, beta |  |
| ListClientTransactions | GET | /v2/clients/{clientId}/transactions | transactions, beta |  |
| UpdateClientPlanTransaction | PATCH | /v2/clients/{clientId}/plans/{planId}/transactions/{transactionId} | transactions, beta |  |
| ListUnmatchedPlans | GET | /v2/plans/unmatched | unmatchedplans |  |
| CreateAssetValuations | POST | /v2/clients/{clientId}/assets/{assetId}/valuations | valuations |  |
| CreatePlanValuations | POST | /v2/clients/{clientId}/plans/{planId}/valuations | valuations |  |
| DeleteClientAssetValuation | DELETE | /v2/clients/{clientId}/assets/{assetId}/valuations/{valuationId} | valuations |  |
| GetClientAssetValuation | GET | /v2/clients/{clientId}/assets/{assetId}/valuations/{valuationId} | valuations |  |
| GetClientPlanValuation | GET | /v2/clients/{clientId}/plans/{planId}/valuations/{valuationId} | valuations |  |
| ListClientAssetValuations | GET | /v2/clients/{clientId}/assets/{assetId}/valuations | valuations |  |
| ListClientPlanValuations | GET | /v2/clients/{clientId}/plans/{planId}/valuations | valuations |  |
| ListClientValuationsAssetliabilityTimeseries | GET | /v1/clients/{clientId}/valuations/assetliability_timeseries | valuations |  |
| ListClientValuationsPortfolioValuations | GET | /v1/clients/{clientId}/valuations/portfolio_valuations | valuations |  |
| ListClientValuationsTimeseries | GET | /v1/clients/{clientId}/valuations/timeseries | valuations |  |
| UpdateClientAssetValuation | PUT | /v2/clients/{clientId}/assets/{assetId}/valuations/{valuationId} | valuations |  |
| UpdateClientPlanValuation | PUT | /v2/clients/{clientId}/plans/{planId}/valuations/{valuationId} | valuations |  |
| CreatePlanWithdrawals | POST | /v2/clients/{clientId}/plans/{planId}/withdrawals | withdrawals |  |
| DeleteClientPlanWithdrawal | DELETE | /v2/clients/{clientId}/plans/{planId}/withdrawals/{withdrawalId} | withdrawals |  |
| GetClientPlanWithdrawal | GET | /v2/clients/{clientId}/plans/{planId}/withdrawals/{withdrawalId} | withdrawals |  |
| ListClientPlanWithdrawals | GET | /v2/clients/{clientId}/plans/{planId}/withdrawals | withdrawals, beta |  |
| UpdateClientPlanWithdrawal | PUT | /v2/clients/{clientId}/plans/{planId}/withdrawals/{withdrawalId} | withdrawals |  |

### Monolith.Storage (16 operations)

| Operation ID | Method | Endpoint | Tags | Scopes |
|-------------|--------|----------|------|--------|
| CreateDocumentFolder | POST | /v2/clients/{clientId}/documentfolders | documentfolders |  |
| GetDocumentFolder | GET | /v2/clients/{clientId}/documentfolders/{documentFolderId} | documentfolders |  |
| ListDocumentFolders | GET | /v2/clients/{clientId}/documentfolders | documentfolders |  |
| AdviserDocumentExists | HEAD | /v2/advisers/{adviserId}/documents/{documentId} | documents |  |
| AssignClientDocument | POST | /v2/clients/{clientId}/documents/{documentId} | documents |  |
| CreateAdviserDocument | POST | /v2/advisers/{adviserId}/documents | documents |  |
| CreateClientDocument | POST | /v2/clients/{clientId}/documents | documents |  |
| CreateDocument | POST | /v2/documents | documents |  |
| DeleteAdviserDocument | DELETE | /v2/advisers/{adviserId}/documents/{documentId} | documents |  |
| GetAdviserDocument | GET | /v2/advisers/{adviserId}/documents/{documentId} | documents |  |
| GetClientDocument | GET | /v2/clients/{clientId}/documents/{documentId} | documents |  |
| ListAdviserDocuments | GET | /v2/advisers/{adviserId}/documents | documents |  |
| ListClientDocuments | GET | /v2/clients/{clientId}/documents | documents |  |
| UpdateAdviserDocument | PUT | /v2/advisers/{adviserId}/documents/{documentId} | documents |  |
| UpdateClientDocument | PUT | /v2/clients/{clientId}/documents/{documentId} | documents |  |
| AssignLeadDocument | POST | /v2/leads/{leadId}/documents/{documentId} | leads |  |

### Monolith.Valuation (5 operations)

| Operation ID | Method | Endpoint | Tags | Scopes |
|-------------|--------|----------|------|--------|
| DeleteValuationBatch | DELETE | /v2/valuations/batches/{batchId} | bulkvaluations |  |
| EnqueueValuationBatch | POST | /v2/valuations/batches | bulkvaluations |  |
| GetValuationBatch | GET | /v2/valuations/batches/{batchId} | bulkvaluations |  |
| ListValuationBatches | GET | /v2/valuations/batches | bulkvaluations |  |
| ListValuationBatchResults | GET | /v2/valuations/batches/{batchId}/results | bulkvaluations |  |

## OAuth Scopes Summary

Total unique scopes: 7

| Scope | Operations Using |
|-------|------------------|
| client_data | 2 |
| client_data.requirements | 2 |
| client_financial_data | 12 |
| client_financial_data.quotes | 12 |
| firm_data.incomestatements | 9 |
| myprofile | 23 |
| openid | 23 |
