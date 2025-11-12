# Intelliflo Public APIs - Complete Analysis (Final)

## Executive Summary

- **Total Unique Public APIs**: 1565
- **APIs on Developer Portal**: 391
- **Hidden Public APIs**: 1174
- **APIs with Tags**: 1565
- **APIs with Service Information**: 1231
- **Documentation Ignore Operations Matched**: 83/83 (100%)

## Data Sources

1. **Public Swagger v2** (`public-v2.json`) - 391 operations on developer portal
2. **Service Swagger Docs** - Fetched from 117 services (44 successful, 1,226 unique operations)
3. **Documentation Ignore List** - 83 hidden public operations (all matched with swagger data)
4. **GitHub [PublicApi] Search** - 46 operations from source code

## Complete API List

| Tags | Operation ID | Method | Endpoint | Description | Scopes | On Portal | Service | Source |
|------|--------------|--------|----------|-------------|--------|-----------|---------|--------|
| 2fa | CreateAccount2faAuthenticate | POST | /v2/accounts/{subject}/2fa/authenticate | Verifies that 2fa code is valid and logins | N/A | No | Microservice.Membership | Service Swagger (Microservice.Membership) |
| 2fa | CreateAccount2faExtmfaAuthenticate | POST | /v2/accounts/{subject}/2fa/extmfa/authenticate | Verifies that 2fa code is valid and logins | N/A | No | Microservice.Membership | Service Swagger (Microservice.Membership) |
| 2fa | CreateAccount2faPostpone | POST | /v2/accounts/{subject}/2fa/postpone | Postpone 2fa setup for a user account. | N/A | No | Microservice.Membership | Service Swagger (Microservice.Membership) |
| 2fa | CreateAccount2faRecoverycodesAuthenticate | POST | /v2/accounts/{subject}/2fa/recoverycodes/authenticate | Authenticates an user using a recovery code. Used recovery code will be deleted after an authentication. | N/A | No | Microservice.Membership | Service Swagger (Microservice.Membership) |
| 2fa | CreateAccounts2faRecoverycode | POST | /v2/accounts/{subject}/2fa/recoverycodes | Creates new 2fa recovery codes for an user account. | N/A | No | Microservice.Membership | Service Swagger (Microservice.Membership) |
| 2fa | CreateAccounts2faRegister | POST | /v2/accounts/{subject}/2fa/register | If a verification code is valid, sets up Is2faEnabled to true and creates and returns new recovery codes. | N/A | No | Microservice.Membership | Service Swagger (Microservice.Membership) |
| 2fa | CreateAccounts2faSecret | POST | /v2/accounts/{subject}/2fa/secret | Creates new 2fa shared secret for an user account. | N/A | No | Microservice.Membership | Service Swagger (Microservice.Membership) |
| 2fa | DeleteAccount2fa | DELETE | /v2/accounts/{subject}/2fa | Sets up Is2faEnabled to false, delete shared secret and recovery codes. | N/A | No | Microservice.Membership | Service Swagger (Microservice.Membership) |
| 2fa | ListAccount2fasRecoverycodes | GET | /v2/accounts/{subject}/2fa/recoverycodes | Returns 2fa recovery codes for an user account. | N/A | No | Microservice.Membership | Service Swagger (Microservice.Membership) |
| abort | CreateInstanceAbort | POST | /v1/instances/{instanceId}/abort |  | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| accountrecovery | CreateConfirmation | POST | /forgotpassword/confirmation/{forgotPasswordId} |  | N/A | No | Microservice.Identity | Service Swagger (Microservice.Identity) |
| accountrecovery | CreateForgotpassword | POST | /forgotpassword |  | N/A | No | Microservice.Identity | Service Swagger (Microservice.Identity) |
| accountrecovery | GetConfirmation | GET | /forgotpassword/confirmation/{forgotPasswordId} |  | N/A | No | Microservice.Identity | Service Swagger (Microservice.Identity) |
| accountrecovery | GetForgotpassword | GET | /forgotpassword |  | N/A | No | Microservice.Identity | Service Swagger (Microservice.Identity) |
| accountrecovery | GetResetpassword | GET | /forgotpassword/resetpassword/{forgotPasswordId} |  | N/A | No | Microservice.Identity | Service Swagger (Microservice.Identity) |
| accounts | AccountDocumentExists | HEAD | /v2/accounts/{accountId}/documents/{documentId} | Checks if required document exists | N/A | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| accounts | AccountDocumentObjectExists | HEAD | /v2/accounts/{accountId}/documents/{documentId}/object | Checks if required account document is uploaded. | N/A | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| accounts | AccountExists | HEAD | /v2/accounts/{accountId} | Check the account is available | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| accounts | AssignAccountDocument | POST | /v2/accounts/{accountId}/documents/{documentId} | Adds the specified account owner to the specified document | N/A | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| accounts | CreateAccount | POST | /v2/accounts | Creates account | N/A | No | Microservice.Membership | Service Swagger (Microservice.Membership) |
| accounts | DeleteAccountDocument | DELETE | /v2/accounts/{accountId}/documents/{documentId} | Deletes a file object associated with the specified account document | N/A | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| accounts | GetAccount | GET | /v2/accounts/{subject} | Gets user account | N/A | No | Microservice.Membership | Service Swagger (Microservice.Membership) |
| accounts | GetAccountDocument | GET | /v2/accounts/{accountId}/documents/{documentId} | Gets a single account document by id | N/A | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| accounts | GetAccountDocumentObject | GET | /v2/accounts/{accountId}/documents/{documentId}/object | Gets a single account document object | N/A | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| accounts | ListAccountDocuments | GET | /v2/accounts/{accountId}/documents | List all account documents | N/A | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| accounts | UpdateAccount | PUT | /v2/accounts | Updates username | N/A | No | Microservice.Membership | Service Swagger (Microservice.Membership) |
| accounts | UpdateAccountDocument | PUT | /v2/accounts/{accountId}/documents/{documentId} | Updates the specified account document | N/A | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| accounts | UpdateAccountDocumentObject | PUT | /v2/accounts/{accountId}/documents/{documentId}/object | Uploads a file object associated with the specified account document | N/A | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| accountsecurity | GetVerify | GET | /membership/v2/emails/verify/{token} |  | N/A | No | Microservice.Membership | Service Swagger (Microservice.Membership) |
| actions | CreateMessageAction | POST | /v1/messages/{messageId}/actions | Link action to secure message. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| activate | initiateactivation | POST | /v2/users/{userId}/activate | Creates an activation process for a given user. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activates | activateuser | POST | /v2/users/activate/{token} | Checks token and if OK returns value + deletes token | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activitycategories | CreateActivityCategory | POST | /v2/activities/categories | Creates an activity category | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activitycategories | DeleteActivityCategory | DELETE | /v2/activities/categories/{categoryId} | Deletes a given activity category. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activitycategories | GetActivityCategory | GET | /v2/activities/categories/{categoryId} | Returns a given activity category. | N/A | No | Monolith.Crm | Service Swagger + Documentation Ignore |
| activitycategories | ListActivityCategories | GET | /v2/activities/categories | Returns a list of activity categories. | N/A | No | Monolith.Crm | Service Swagger + Documentation Ignore |
| activitycategories | UpdateActivityCategory | PUT | /v2/activities/categories/{categoryId} | Updates a given activity category. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activitychecklistitems | CreateActivityCheckListItems | POST | /v2/activities/{activityId}/checklists/items | Creates a CheckList Item for an activity and tenant. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activitychecklistitems | ListActivitiyCheckLists | GET | /v2/activities/{activityId}/checklists/items | List all Check list items for an activity and a tenant. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activityoutcomes | CreateActivityOutcome | POST | /v2/activities/outcomes | Creates an activity outcome | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activityoutcomes | DeleteActivityOutcome | DELETE | /v2/activities/outcomes/{outcomeId} | Deletes a given activity outcome. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activityoutcomes | GetActivityOutcome | GET | /v2/activities/outcomes/{outcomeId} | Returns a given activity outcome. | N/A | No | Monolith.Crm | Service Swagger + Documentation Ignore |
| activityoutcomes | ListActivityOutcomes | GET | /v2/activities/outcomes | Returns a list of activity outcomes. | N/A | No | Monolith.Crm | Service Swagger + Documentation Ignore |
| activityoutcomes | UpdateActivityOutcome | PUT | /v2/activities/outcomes/{outcomeId} | Updates a given activity outcome. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activitypriorities | GetActivityPriority | GET | /v2/activities/priorities/{priorityId} | Returns a given activity priority. | N/A | No | Monolith.Crm | Service Swagger + Documentation Ignore |
| activitypriorities | ListActivityPriorities | GET | /v2/activities/priorities | Returns a list of activity priorities. | N/A | No | Monolith.Crm | Service Swagger + Documentation Ignore |
| activitytypeevents | GetActivitySystemEvent | GET | /v2/activities/types/events/{id} | Returns a given activity type event. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activitytypeevents | ListActivitySystemEvents | GET | /v2/activities/types/events | Returns a list of activity type events | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activitytypes | CreateActivityType | POST | /v2/activities/types | Creates an activity type. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activitytypes | DeleteType | DELETE | /v2/activities/types/{typeId} | Deletes a given activity type. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activitytypes | GetActivityType | GET | /v2/activities/types/{typeId} | Returns a given activity type. | N/A | No | Monolith.Crm | Service Swagger + Documentation Ignore |
| activitytypes | HideActivityType | POST | /v2/activities/types/{typeId}/groups/{groupId}/hide | Hide an activity type for given group. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activitytypes | ListActivityTypes | GET | /v2/activities/types | Returns a list of activity types. | N/A | No | Monolith.Crm | Service Swagger + Documentation Ignore |
| activitytypes | ShowActivityType | POST | /v2/activities/types/{typeId}/groups/{groupId}/show | Show an activity type for given group. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activitytypes | UpdateActivityType | PUT | /v2/activities/types/{typeId} | Updates a given activity type. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | CreateAccountAddress | POST | /v2/accounts/{accountId}/addresses | Creates a new Address for the given Account. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | CreateAdviserAddress | POST | /v2/advisers/{adviserId}/addresses | Creates a new Address for the given Adviser. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | CreateClientAddress | POST | /v2/clients/{clientId}/addresses | Create an address | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| addresses | CreateGroupAddress | POST | /v2/groups/{groupId}/addresses | Creates a new Address for the given Group. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | CreateIntroducerAddress | POST | /v2/introducers/{introducerId}/addresses | Creates a new Address for the given Introducer. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | CreateLeadAddress | POST | /v2/leads/{leadId}/addresses | Creates a new Address for the given Lead. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| addresses | CreatePersonalContactAddress | POST | /v2/clients/{clientId}/personalcontacts/{personalContactId}/addresses | Add a new address for a given personal contact. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | CreateProductProviderAddress | POST | /v2/productproviders/{productProviderId}/addresses | Creates a new Address for the given Product provider. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | CreateTnccoachAddress | POST | /v2/tnc_coaches/{tnc_coachId}/addresses | Creates a new Address for the given TnC Coach. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | DeleteAccountAddress | DELETE | /v2/accounts/{accountId}/addresses/{addressId} | Deletes an existing Address for the given Account. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | DeleteAdviserAddress | DELETE | /v2/advisers/{adviserId}/addresses/{addressId} | Deletes an existing Address for the given Adviser. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | DeleteClientAddress | DELETE | /v2/clients/{clientId}/addresses/{addressId} | Deletes an existing Address for the given Client. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| addresses | DeleteGroupAddress | DELETE | /v2/groups/{groupId}/addresses/{addressId} | Deletes an existing Address for the given Group. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | DeleteIntroducerAddress | DELETE | /v2/introducers/{introducerId}/addresses/{addressId} | Deletes an existing Address for the given Introducer. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | DeleteLeadAddress | DELETE | /v2/leads/{leadId}/addresses/{addressId} | Deletes an existing Address for the given Lead. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| addresses | DeletePersonalContactAddress | DELETE | /v2/clients/{clientId}/personalcontacts/{personalContactId}/addresses/{addressId} | Delete an existing address. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | DeleteProductproviderAddress | DELETE | /v2/productproviders/{productProviderId}/addresses/{addressId} | Deletes an existing Address for the given Product provider. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | DeleteTnccoachAddress | DELETE | /v2/tnc_coaches/{tnc_coachId}/addresses/{addressId} | Deletes an existing Address for the given TnC Coach. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | GetAccountAddress | GET | /v2/accounts/{accountId}/addresses/{addressId} | Retrieves the Address for the given addressId. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | GetAddress | GET | /v2/addresses/{addressId} | Retrieves the Address for the given addressId. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | GetAdviserAddress | GET | /v2/advisers/{adviserId}/addresses/{addressId} | Retrieves the Address for the given addressId. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| addresses | GetClientAddress | GET | /v2/clients/{clientId}/addresses/{addressId} | Get a client's address by id. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| addresses | GetGroupAddress | GET | /v2/groups/{groupId}/addresses/{addressId} | Retrieves the Address for the given addressId. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | GetIntroducerAddress | GET | /v2/introducers/{introducerId}/addresses/{addressId} | Retrieves the Address for the given addressId. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | GetLeadAddress | GET | /v2/leads/{leadId}/addresses/{addressId} | Retrieves the Address for the given addressId. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| addresses | GetPersonalContactAddress | GET | /v2/clients/{clientId}/personalcontacts/{personalContactId}/addresses/{addressId} | Get given address for a given personal contact. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | GetProductproviderAddress | GET | /v2/productproviders/{productProviderId}/addresses/{addressId} | Retrieves the Address for the given addressId. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | GetTnccoachAddress | GET | /v2/tnc_coaches/{tnc_coachId}/addresses/{addressId} | Retrieves the Address for the given addressId. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | ListAccountAddresses | GET | /v2/accounts/{accountId}/addresses | Returns a paged list of Address (AddressCollection) | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | ListAdviserAddresses | GET | /v2/advisers/{adviserId}/addresses | Returns a paged list of Address (AddressCollection) | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| addresses | ListClientAddresses | GET | /v2/clients/{clientId}/addresses | Returns a list of addresses for a client | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| addresses | ListGroupAddresses | GET | /v2/groups/{groupId}/addresses | Returns a paged list of Address (AddressCollection) | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | ListIntroducerAddresses | GET | /v2/introducers/{introducerId}/addresses | Returns a paged list of Address (AddressCollection) | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | ListLeadAddresses | GET | /v2/leads/{leadId}/addresses | Returns a paged list of Address (AddressCollection) | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| addresses | ListPersonalContactAddresses | GET | /v2/clients/{clientId}/personalcontacts/{personalContactId}/addresses | List addresses for a given personal contact. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | ListProductproviderAddresses | GET | /v2/productproviders/{productProviderId}/addresses | Returns a paged list of Address (AddressCollection) | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | ListTnccoachAddresses | GET | /v2/tnc_coaches/{tnc_coachId}/addresses | Returns a paged list of Address (AddressCollection) | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | UpdateAccountAddress | PUT | /v2/accounts/{accountId}/addresses/{addressId} | Updates an existing Address for the given Account. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | UpdateAdviserAddress | PUT | /v2/advisers/{adviserId}/addresses/{addressId} | Updates an existing Address for the given Adviser. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | UpdateClientAddress | PUT | /v2/clients/{clientId}/addresses/{addressId} | Update an address | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| addresses | UpdateGroupAddress | PUT | /v2/groups/{groupId}/addresses/{addressId} | Updates an existing Address for the given Group. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | UpdateIntroducerAddress | PUT | /v2/introducers/{introducerId}/addresses/{addressId} | Updates an existing Address for the given Introducer. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | UpdateLeadAddress | PUT | /v2/leads/{leadId}/addresses/{addressId} | Updates an existing Address for the given Lead. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| addresses | UpdatePersonalContactAddress | PUT | /v2/clients/{clientId}/personalcontacts/{personalContactId}/addresses/{addressId} | Update an existing address. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | UpdateProductproviderAddress | PUT | /v2/productproviders/{productProviderId}/addresses/{addressId} | Updates an existing Address for the given Product provider. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | UpdateTnccoachAddress | PUT | /v2/tnc_coaches/{tnc_coachId}/addresses/{addressId} | Updates an existing Address for the given TnC Coach. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| adjustmentsrules | CreateExpectationAdjustmentRule | POST | /v2/expectations/adjustmentsrules | Creates a new expectation adjustment rule. | N/A | No | Microservice.Expectation | Service Swagger (Microservice.Expectation) |
| adjustmentsrules | DeleteExpectationAdjustmentRule | DELETE | /v2/expectations/adjustmentsrules/{adjustmentRuleId} | Deletes an expectation adjustment rule. | N/A | No | Microservice.Expectation | Service Swagger (Microservice.Expectation) |
| adjustmentsrules | ExpectationAdjustmentRuleExists | HEAD | /v2/expectations/adjustmentsrules/{adjustmentRuleId} | Checks that an expectation adjustment rule exists. | N/A | No | Microservice.Expectation | Service Swagger (Microservice.Expectation) |
| adjustmentsrules | GetExpectationAdjustmentRule | GET | /v2/expectations/adjustmentsrules/{adjustmentRuleId} | Gets an expectation adjustment rule. | N/A | No | Microservice.Expectation | Service Swagger (Microservice.Expectation) |
| adjustmentsrules | ListExpectationAdjustmentRules | GET | /v2/expectations/adjustmentsrules | Gets a collection of expectation adjustment rules. | N/A | No | Microservice.Expectation | Service Swagger (Microservice.Expectation) |
| adjustmentsrules | UpdateExpectationAdjustmentRule | PUT | /v2/expectations/adjustmentsrules/{adjustmentRuleId} | Updates an expectation adjustment rule. | N/A | No | Microservice.Expectation | Service Swagger (Microservice.Expectation) |
| advicetemplates | CloneAdviceTemplate | POST | /v2/advice/templates/{templateId} | Clone Advice template. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| advicetemplates | CreateAdviceTemplate | POST | /v2/advice/templates | Create advice template. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| advicetemplates | CreateAdviceTemplateStep | POST | /v2/advice/templates/{templateId}/steps | Create advice template step. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| advicetemplates | CreateAdviceTemplateStepTransition | POST | /v2/advice/templates/{templateId}/steptransitions | Create Advice template step transition. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| advicetemplates | DeleteAdviceTemplate | DELETE | /v2/advice/templates/{templateId} | Delete advice template. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| advicetemplates | DeleteAdviceTemplateStep | DELETE | /v2/advice/templates/{templateId}/steps/{stepId} | Delete advice template step. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| advicetemplates | DeleteAdviceTemplateStepTransition | DELETE | /v2/advice/templates/{templateId}/steptransitions/{stepTransitionId} | Delete Advice template step transition. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| advicetemplates | GetAdviceTemplate | GET | /v2/advice/templates/{templateId} | Get advice template. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| advicetemplates | GetAdviceTemplateStep | GET | /v2/advice/templates/{templateId}/steps/{stepId} | Get advice template step. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| advicetemplates | GetAdviceTemplateStepTransition | GET | /v2/advice/templates/{templateId}/steptransitions/{stepTransitionId} | Get Advice template step transition. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| advicetemplates | ListAdviceTemplates | GET | /v2/advice/templates | List advice templates | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| advicetemplates | ListAdviceTemplateSteps | GET | /v2/advice/templates/{templateId}/steps | List advice templates | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| advicetemplates | ListAdviceTemplateStepTransitions | GET | /v2/advice/templates/{templateId}/steptransitions | List advice template step transitions. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| advicetemplates | PatchAdviceTemplate | PATCH | /v2/advice/templates/{templateId} | Patch advice template. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| advicetemplates | PutAdviceTemplateStepTransition | PUT | /v2/advice/templates/{templateId}/steptransitions/{stepTransitionId} | Put Advice template step transition. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| advicetemplates | UpdateAdviceTemplateStep | PUT | /v2/advice/templates/{templateId}/steps/{stepId} | Update advice template step | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| advisers | AdviserExists | HEAD | /v2/advisers/{adviserId} | Checks if the adviser exists. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| advisers | CreateAdviser | POST | /v2/advisers | Creates an adviser. | firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| advisers | GetAdviser | GET | /v2/advisers/{adviserId} | Returns an adviser for a given adviser. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| advisers | ListAdvisers | GET | /v2/advisers | Returns a list of advisers. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| advisers | ListGatedPlanTypesByAdviserId | GET | /v2/advisers/{adviserId}/planTypes | Returns a list of gated plan types based on adviser multi-tie configuration. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| advisers | ListProductProvidersByAdviserId | GET | /v2/advisers/{adviserId}/productProviders | Returns a list of product providers based on multi-tie configuration. | firm_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| advisers | UpdateAdviser | PUT | /v2/advisers/{adviserId} | Updates the adviser for a given adviser. | firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| agreementtemplates | ArchiveAgreementTemplate | POST | /v2/agreements/communication-templates/{templateId}/archive | Archives a specific Agreement Template by ID | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| agreementtemplates | GetAgreementTemplate | GET | /v2/agreements/communication-templates/{templateId} | Retrieves a specific Agreement Template by ID | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| agreementtemplates | ListAgreementTemplates | GET | /v2/agreements/communication-templates | Returns a list of agreement templates. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| agreementtemplates | PostAgreementTemplate | POST | /v2/agreements/communication-templates | Creates an agreement template. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| agreementtemplates | PutAgreementTemplate | PUT | /v2/agreements/communication-templates/{templateId} | Updates an agreement template. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| alerts | ChangeUserAlertSubscription | PUT | /v2/users/{userId}/alertsubscriptions/{alertSubscriptionId} | Updates an alert subscription for a user. | N/A | No | Microservice.Notifications | Service Swagger (Microservice.Notifications) |
| alerts | CreateUserAlertSubscription | POST | /v2/users/{userId}/alertsubscriptions | Creates a new alert subscription for a user. | N/A | No | Microservice.Notifications | Service Swagger (Microservice.Notifications) |
| alerts | DeleteUserAlertSubscription | DELETE | /v2/users/{userId}/alertsubscriptions/{alertSubscriptionId} | Deletes an existing alert subscription for a user. | N/A | No | Microservice.Notifications | Service Swagger (Microservice.Notifications) |
| alerts | GetAlertType | GET | /v2/alerttypes/{alertTypeId} | Get an alert type by id. | N/A | No | Microservice.Notifications | Service Swagger (Microservice.Notifications) |
| alerts | GetUserAlertSubscription | GET | /v2/users/{userId}/alertsubscriptions/{alertSubscriptionId} | Returns an alert subscription for a user by id. | N/A | No | Microservice.Notifications | Service Swagger (Microservice.Notifications) |
| alerts | ListAlertTypes | GET | /v2/alerttypes | Get a collection of alert types. | N/A | No | Microservice.Notifications | Service Swagger (Microservice.Notifications) |
| alerts | ListUserAlertSubscriptions | GET | /v2/users/{userId}/alertsubscriptions | Returns a list of alert subscriptions for a user. | N/A | No | Microservice.Notifications | Service Swagger (Microservice.Notifications) |
| allocations | CreateGoalAllocation | POST | /v2/objectives/{objectiveId}/allocations | Creates Goal Allocation. | N/A | No | Microservice.Requirement | Service Swagger (Microservice.Requirement) |
| allocations | GetGoalAllocation | GET | /v2/objectives/{objectiveId}/allocations/{allocationId} | Gets a Goal Allocation. | N/A | No | Microservice.Requirement | Service Swagger (Microservice.Requirement) |
| allocations | ListGoalAllocation | GET | /v2/objectives/{objectiveId}/allocations | List goal allocations. | N/A | No | Microservice.Requirement | Service Swagger (Microservice.Requirement) |
| alternativeassets | DeleteAlternativeAsset | DELETE | /v2/alternativeassets/{securityId} | Delete an Alternative Asset Security by Security Id. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| alternativeassets | GetAlternativeAsset | GET | /v2/alternativeassets/{securityId} | Get an Alternative Asset Security by Security Id. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| alternativeassets | ListAlternativeAssets | GET | /v2/alternativeassets | Get a List of Alternative Asset Securities. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| alternativeassets | PostAlternativeAssets | POST | /v2/alternativeassets | Create Alternative Asset Securities. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| alternativeassets | PutAlternativeAssets | PUT | /v2/alternativeassets | Update Alternative Asset Securities. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| apply | CreateCampaignSegmentsApply | POST | /v1/campaigns/{campaignId}/segments/apply |  | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| appointments | CreateAppointment | POST | /v2/activities/appointments | Creates an appointment. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| appointments | DeleteAppointment | DELETE | /v2/activities/appointments/{appointmentId} | Deletes a given appointment. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| appointments | GetAppointment | GET | /v2/activities/appointments/{appointmentId} | Returns a given appointment. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| appointments | ListAppointment | GET | /v2/activities/appointments | Returns a list of appointments. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| appointments | UpdateAppointment | PUT | /v2/activities/appointments/{appointmentId} | Updates a given appointment. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| apps | GetInstalledAppGroupSettingsByGroupLineage | GET | /v2/installed_apps/{appId}/group_settings/{groupId}/lineage | Returns group settings for a given installed app and group | apps, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | ApproveCollaboratorApp | POST | /v2/apps/{appId}/approve | Adds collaborator approval for a given app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | ApprovePublishedAppForInstallation | PUT | /v2/published_apps/{appId}/approve_install | Approves a given published app for installation | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | ApprovePublishedAppForUserInstallation | GET | /v2/published_apps/{appId}/approve_install/{request} | Approves app installation for a user via a jump link | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | CertifyPublishedApp | PUT | /v2/published_apps/{appId} | Certifies a given published app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | ConfirmAppCollaborator | GET | /v2/apps/{appId}/collaborators/confirm | Verifies a collaborator for a given app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | CreateApp | POST | /v2/apps | Creates an app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | CreateAppCollaborator | POST | /v2/apps/{appId}/collaborators | Creates a collaborator for a given app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | CreateAppOauthClient | POST | /v2/apps/{appId}/oauth_clients | Creates an oauth client for a given app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | CreateAppOauthClientSecret | POST | /v2/apps/{appId}/oauth_clients/{clientId}/secret | Creates a secret for a given app and oauth client | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | DeleteApp | DELETE | /v2/apps/{appId} | Deletes a given app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | DeleteAppCollaborator | DELETE | /v2/apps/{appId}/collaborators | Deletes a collaborator for a given app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | DeleteAppContent | DELETE | /v2/apps/{appId}/content/{key} | Delete content(video, image or icon) for a given app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | DeleteAppOauthClient | DELETE | /v2/apps/{appId}/oauth_clients/{clientId} | Deletes an oauth client for a given app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | DeletePublishedApp | DELETE | /v2/published_apps/{appId} | Deletes a given published app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | ExistApp | HEAD | /v2/apps/{appId} | Checks if the app exists | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | ExistInstalledApp | HEAD | /v2/installed_apps/{appId} | Checks if an installed app exists | openid, myprofile, apps | Yes | N/A | Public Swagger v2 |
| apps, beta | ExistInstalledPreviewApp | HEAD | /v2/apps/{appId}/installation | Checks if a given app is installed in preview | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | ExistInstalledPublishedApp | HEAD | /v2/published_apps/{appId}/installation | Checks if a given published app is installed | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | GetApp | GET | /v2/apps/{appId} | Returns a given app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | GetAppClaims | GET | /v2/apps/{appId}/claims | Returns claims for a given app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | GetAppContent | GET | /v2/apps/{appId}/content | Returns a list of custom content for a given app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | GetAppMetadata | GET | /v2/apps/{appId}/metadata | Returns metadata for a given app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | GetAppOauthClient | GET | /v2/apps/{appId}/oauth_clients/{clientId} | Returns an oauth client for a given app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | GetAppSummary | GET | /v2/apps/{appId}/summary | Returns a given app summary | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | GetInstalledApp | GET | /v2/installed_apps/{appId} | Returns an installed app | openid, myprofile, apps | Yes | N/A | Public Swagger v2 |
| apps, beta | GetInstalledAppGroupSettings | GET | /v2/installed_apps/{appId}/group_settings/{groupId} | Returns group settings for a given installed app and group | openid, myprofile, apps | Yes | N/A | Public Swagger v2 |
| apps, beta | GetInstalledAppUserSettings | GET | /v2/installed_apps/{appId}/user_settings/{userId} | Returns user settings for a given installed app and user | openid, myprofile, apps | Yes | N/A | Public Swagger v2 |
| apps, beta | GetPublishedApp | GET | /v2/published_apps/{appId} | Returns a given published app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | GetPublishedAppMetadata | GET | /v2/published_apps/{appId}/metadata | Returns metadata for a given published app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | InstallPreviewApp | POST | /v2/apps/{appId}/installation | Installs a given app in preview | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | InstallPublishedApp | POST | /v2/published_apps/{appId}/installation | Installs a given published app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | ListAppApiKeys | GET | /v2/apps/{appId}/apikeys | Returns API keys for a given app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | ListAppCollaborators | GET | /v2/apps/{appId}/collaborators | Returns a list of collaborators for a given app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | ListAppOauthClients | GET | /v2/apps/{appId}/oauth_clients | Returns a list of oauth clients for a given app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | ListApps | GET | /v2/apps | Returns a list of apps | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | ListAppSecrets | GET | /v2/apps/{appId}/secrets | Returns secrets for a given app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | ListInstalledAppGroupSettings | GET | /v2/installed_apps/{appId}/group_settings | Returns a list of group settings for a given installed app | openid, myprofile, apps | Yes | N/A | Public Swagger v2 |
| apps, beta | ListInstalledApps | GET | /v2/installed_apps | Returns a list of installed apps | openid, myprofile, apps | Yes | N/A | Public Swagger v2 |
| apps, beta | ListInstalledAppUserSettings | GET | /v2/installed_apps/{appId}/user_settings | Returns a lists of user settings for a given installed app | openid, myprofile, apps | Yes | N/A | Public Swagger v2 |
| apps, beta | ListPublishedApps | GET | /v2/published_apps | Returns a list of published apps | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | PublishApp | POST | /v2/apps/{appId}/publish | Creates a published app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | RemoveCollaboratorAppApproval | DELETE | /v2/apps/{appId}/approve | Removes collaborator approval for a given app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | RemovePublishedAppForInstallation | DELETE | /v2/published_apps/{appId}/approve_install | Removes a given published app for installation | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | UninstallPreviewApp | DELETE | /v2/apps/{appId}/installation | Uninstalls a given app in preview | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | UninstallPublishedApp | DELETE | /v2/published_apps/{appId}/installation | Uninstalls a given published app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | UpdateApp | PUT | /v2/apps/{appId} | Updates a given app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | UpdateAppApiKeys | PUT | /v2/apps/{appId}/apikeys | Updates API keys for a given app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | UpdateAppClaims | PUT | /v2/apps/{appId}/claims | Updates claims for a given app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | UpdateAppContent | PUT | /v2/apps/{appId}/content/{key} | Creates content for a given app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | UpdateAppMetadata | PUT | /v2/apps/{appId}/metadata | Updates metadata for a given app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | UpdateAppOauthClient | PUT | /v2/apps/{appId}/oauth_clients/{clientId} | Updates an oauth client for a given app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | UpdateAppSecret | PUT | /v2/apps/{appId}/secrets/{key} | Updates a secret for a given app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| apps, beta | UpdateInstalledAppGroupSettings | PUT | /v2/installed_apps/{appId}/group_settings/{groupId} | Updates group settings for a given installed app and group | openid, myprofile, apps | Yes | N/A | Public Swagger v2 |
| apps, beta | UpdateInstalledAppUserSettings | PUT | /v2/installed_apps/{appId}/user_settings/{userId} | Updates user settings for a given installed app and user | openid, myprofile, apps | Yes | N/A | Public Swagger v2 |
| apps, beta | VerifyAppClaims | POST | /v2/apps/{appId}/claims/verify | Verifies claims for a given app | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Microservice.AppD | Service Swagger (Microservice.AppD) |
| archive | CreateCampaigntemplateArchive | POST | /v1/campaigntemplates/{templateId}/archive |  | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| assetclasses | GetAssetClass | GET | /v2/assetclasses/{assetClassId} | Get Asset Class based Asset Class Id | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| assetclasses | ListAssetClasses | GET | /v2/assetclasses | List Asset Classes based on Asset Class Ids. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| assets | CreateClientAssets | POST | /v2/clients/{clientId}/assets | Creates the asset for a given client. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| assets | DeleteClientAsset | DELETE | /v2/clients/{clientId}/assets/{assetId} | Deletes the asset for a given client and asset. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| assets | GetClientAsset | GET | /v2/clients/{clientId}/assets/{assetId} | Returns the asset for a given client and asset. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| assets | ListClientAssets | GET | /v2/clients/{clientId}/assets | Returns a list of assets for the given client. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| assets | UpdateClientAsset | PUT | /v2/clients/{clientId}/assets/{assetId} | Updates the asset for a given client and asset. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| attachments | CreateMessagesAttachments | POST | /v1/messages/{secureMessageId}/attachments | Upload attachments to a specific secure message. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| attachments | DeleteMessageAttachment | DELETE | /v1/messages/{secureMessageId}/attachments/{attachmentId} | Delete an attachment for a specific secure messages. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| attachments | ListClientEmailsAttachments | GET | /v1/clients/{clientId}/emails/{emailId}/attachments |  | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| attachments | ListMessageAttachments | GET | /v1/messages/{secureMessageId}/attachments | List attachments for a specific secure messages. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| attachments | UpdateClientEmailsAttachments | PUT | /v1/clients/{clientId}/emails/{emailId}/attachments |  | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| attitudetorisk | AcceptTenantProviderAtrTemplate | POST | /v2/installed_apps/atr_templates/{id}/accept | Allows a tenant to approve a third party ATR template, from an application the tenant has installed, making it available for use by the tenant. When installed the template is not initially active. | openid, myprofile, firm_data.atr, firm_data | Yes | Monolith.Atr | Public Swagger v2 + Documentation Ignore + Service Swagger |
| attitudetorisk | ActivateAtrTemplate | POST | /v2/attitudeToRisk/atr_templates/{templateId}/active | Activates/Deactivates a ATR template. | openid, myprofile, firm_data.atr, firm_data | Yes | Monolith.Atr | Public Swagger v2 + Documentation Ignore + Service Swagger |
| attitudetorisk | ActivateProviderAtrTemplate | POST | /v2/attitudeToRisk/apps/{appId}/atr_templates/{templateId}/activate | Activates or deactivates a third party provider template. Only active templates can be accepted by tenants. | openid, myprofile, apps | Yes | Monolith.Atr | Public Swagger v2 + Documentation Ignore + Service Swagger + GitHub Monolith.Atr |
| attitudetorisk | CreateAtrTemplate | POST | /v2/attitudeToRisk/atr_templates | Creates a new ATR template. | openid, myprofile, firm_data.atr, firm_data | Yes | Monolith.Atr | Public Swagger v2 + Documentation Ignore + Service Swagger |
| attitudetorisk | CreateClientAtr | POST | /v2/clients/{clientId}/attitudeToRisk | Submits a client ATR. | openid, myprofile, client_data.atr, client_data | Yes | Monolith.Atr | Public Swagger v2 + Documentation Ignore + Service Swagger |
| attitudetorisk | CreateClientAtrAnswer | POST | /v2/clients/{clientId}/atr | Allows an API consumer to submit an ATR for a given client. | apps, client_data, client_data.atr, firm_data, firm_data.atr, myprofile, openid | No | Monolith.Atr | Service Swagger (Monolith.Atr) |
| attitudetorisk | CreateProviderAtrTemplate | POST | /v2/attitudeToRisk/apps/{appId}/atr_templates | Creates a new 3rd party ATR template. | openid, myprofile, apps | Yes | Monolith.Atr | Public Swagger v2 + Documentation Ignore + Service Swagger |
| attitudetorisk | DeleteAtrTemplateV2 | DELETE | /v2/attitudeToRisk/atr_templates/{templateId} | Deletes an ATR template. | apps, client_data, client_data.atr, firm_data, firm_data.atr, myprofile, openid | No | Monolith.Atr | Service Swagger + Documentation Ignore |
| attitudetorisk | DeleteClientAtr | DELETE | /v2/clients/{clientId}/attitudeToRisk/{atrId} | Deletes a client's ATR. | openid, myprofile, client_data.atr, client_data | Yes | Monolith.Atr | Public Swagger v2 + Documentation Ignore + Service Swagger |
| attitudetorisk | GetAtrTemplate | GET | /v2/atr_templates/{atrTemplateId} | Returns an ATR template. | apps, client_data, client_data.atr, firm_data, firm_data.atr, myprofile, openid | No | Monolith.Atr | Service Swagger (Monolith.Atr) |
| attitudetorisk | GetAtrTemplateV2 | GET | /v2/attitudeToRisk/atr_templates/{templateId} | Retrieves an ATR template. | openid, myprofile, firm_data.atr, firm_data | Yes | Monolith.Atr | Public Swagger v2 + Documentation Ignore + Service Swagger + GitHub Monolith.Atr |
| attitudetorisk | GetClientAtr | GET | /v2/clients/{clientId}/attitudeToRisk/{atrId} | Returns an ATR for a client. | openid, myprofile, client_data.atr, client_data | Yes | Monolith.Atr | Public Swagger v2 + Documentation Ignore + Service Swagger |
| attitudetorisk | GetClientAtrAnswer | GET | /v2/clients/{clientId}/atr/{atrAnswerId} | Allows an API consumer to get a single ATR answer for a given client. | apps, client_data, client_data.atr, firm_data, firm_data.atr, myprofile, openid | No | Monolith.Atr | Service Swagger (Monolith.Atr) |
| attitudetorisk | GetProviderAtrTemplate | GET | /v2/attitudeToRisk/apps/{appId}/atr_templates/{templateId} | Retrieves details of a third party ATR template. | openid, myprofile, apps | Yes | Monolith.Atr | Public Swagger v2 + Documentation Ignore + Service Swagger + GitHub Monolith.Atr |
| attitudetorisk | GetTenantProviderAtrTemplate | GET | /v2/installed_apps/atr_templates/{id} | Retrieves the details of an ATR template for the installed from a third party provider app. | openid, myprofile, firm_data.atr, firm_data | Yes | Monolith.Atr | Public Swagger v2 + Documentation Ignore + Service Swagger + GitHub Monolith.Atr |
| attitudetorisk | ListAtrSystemCategories | GET | /v2/atr/system_categories | Retrieves a list of the ATR system categories. | apps, client_data, client_data.atr, firm_data, firm_data.atr, myprofile, openid | No | Monolith.Atr | Service Swagger + Documentation Ignore |
| attitudetorisk | ListAtrTemplates | GET | /v2/atr_templates | Returns a list of ATR templates. | apps, client_data, client_data.atr, firm_data, firm_data.atr, myprofile, openid | No | Monolith.Atr | Service Swagger (Monolith.Atr) |
| attitudetorisk | ListAtrTemplatesV2 | GET | /v2/attitudeToRisk/atr_templates | Retrieves a list of all the ATR templates or those that match the filter provided. | openid, myprofile, firm_data.atr, firm_data | Yes | Monolith.Atr | Public Swagger v2 + Documentation Ignore + Service Swagger |
| attitudetorisk | ListClientAtrAnswers | GET | /v2/clients/{clientId}/atr | Allows an API consumer to retrieve all the Attitude to Risk (ATR) answers for a given client. | apps, client_data, client_data.atr, firm_data, firm_data.atr, myprofile, openid | No | Monolith.Atr | Service Swagger (Monolith.Atr) |
| attitudetorisk | ListClientAtrs | GET | /v2/clients/{clientId}/attitudeToRisk | Returns a list of the ATRs for a client. | openid, myprofile, client_data.atr, client_data | Yes | Monolith.Atr | Public Swagger v2 + Documentation Ignore + Service Swagger |
| attitudetorisk | ListProviderAtrTemplates | GET | /v2/attitudeToRisk/apps/{appId}/atr_templates | Returns a list of the ATR template details associated with a third party provider application. | openid, myprofile, apps | Yes | Monolith.Atr | Public Swagger v2 + Documentation Ignore + Service Swagger |
| attitudetorisk | ListTenantProviderAtrTemplates | GET | /v2/installed_apps/atr_templates | Retrieves a list of the ATR templates from the third party provider apps installed by the tenant. | openid, myprofile, firm_data.atr, firm_data | Yes | Monolith.Atr | Public Swagger v2 + Documentation Ignore + Service Swagger |
| attitudetorisk | PatchAtrTemplate | PATCH | /v2/attitudeToRisk/atr_templates/{templateId} | Updates an existing ATR template. | openid, myprofile, firm_data.atr, firm_data | Yes | Monolith.Atr | Public Swagger v2 + Documentation Ignore + Service Swagger |
| attitudetorisk | PatchClientAtr | PATCH | /v2/clients/{clientId}/attitudeToRisk/{atrId} | Updates an existing client ATR. | openid, myprofile, client_data.atr, client_data | Yes | Monolith.Atr | Public Swagger v2 + Documentation Ignore + Service Swagger |
| attitudetorisk | UpdateAtrTemplate | PUT | /v2/attitudeToRisk/atr_templates/{templateId} | Updates an existing ATR Template. | openid, myprofile, firm_data.atr, firm_data | Yes | Monolith.Atr | Public Swagger v2 + Documentation Ignore + Service Swagger + GitHub Monolith.Atr |
| attitudetorisk | UpdateClientAtrAnswerResult | PUT | /v2/clients/{clientId}/atr/{atrAnswerId}/result | Updates an existing Atr Answer Result for a given client. | apps, client_data, client_data.atr, firm_data, firm_data.atr, myprofile, openid | No | Monolith.Atr | Service Swagger (Monolith.Atr) |
| attitudetorisk | UpdateClientAtrResult | PUT | /v2/clients/{clientId}/attitudeToRisk/{atrId}/result | Update result for a client atr | openid, myprofile, client_data.atr, client_data | Yes | Monolith.Atr | Public Swagger v2 + Documentation Ignore + Service Swagger |
| attitudetorisk | UpdateProvideAtrTemplateAssetModel | PUT | /v2/attitudeToRisk/apps/{appId}/atr_templates/{templateId}/asset_model | Updates the asset model associated with a third party provider template with a new set of risk profiles. | apps, client_data, client_data.atr, firm_data, firm_data.atr, myprofile, openid | No | Monolith.Atr | Service Swagger (Monolith.Atr) |
| avatars | DeleteAvatar | DELETE | /v2/avatars | Deletes Avatar object for client | N/A | No | Microservice.Avatar | Service Swagger (Microservice.Avatar) |
| avatars | GetAvatar | GET | /v2/avatars | Get Avatar url for client | N/A | No | Microservice.Avatar | Service Swagger (Microservice.Avatar) |
| bandingtemplates | BandingTemplateExists | HEAD | /v2/advisers/{adviserId}/bandingtemplates/{bandingtemplateId} | Check for the existence of a specific banding template. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| bandingtemplates | GetAdviserBandingtemplate | GET | /v2/advisers/{adviserId}/bandingtemplates/{bandingtemplateId} | Get banding template for adviser by Id. | firm_data, myprofile, openid | No | Monolith.Commission | Service Swagger (Monolith.Commission) |
| bandingtemplates | GetBandingTemplate | GET | /v2/advisers/{adviserId}/bandingtemplates/{bandingtemplateId} | Returns a single banding template for an adviser. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| bandingtemplates | ListAdviserBandingtemplates | GET | /v2/advisers/{adviserId}/bandingtemplates | Get all banding templates for adviser | firm_data, myprofile, openid | No | Monolith.Commission | Service Swagger (Monolith.Commission) |
| bandingtemplates | ListBandingTemplates | GET | /v2/advisers/{adviserId}/bandingtemplates | Returns a list of banding templates for an adviser. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| bankaccounts | CreateBankAccount | POST | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals/{proposalId}/bankaccounts | Create a back account for a given proposal and client. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| bankaccounts | DeleteBankAccount | DELETE | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals/{proposalId}/bankaccounts/{bankAccountId} | Deletes a bank account against a proposal. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| bankaccounts | GetBankAccount | GET | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals/{proposalId}/bankaccounts/{bankAccountId} | Returns a bank account for a given proposal and client. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| bankaccounts | ListBankAccounts | GET | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals/{proposalId}/bankaccounts | Lists bank accounts for a given proposal and client. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| bankaccounts | UpdateBankAccount | PUT | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals/{proposalId}/bankaccounts/{bankAccountId} | Updates a recommendation proposal bankaccount. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| beneficiaries | DeleteClientBeneficiaries | DELETE | /v2/clients/{clientId}/beneficiaries | Deletes beneficiary or beneficiaries for a given client. | client_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| beneficiaries | DeleteClientPlanBeneficiaries | DELETE | /v2/clients/{clientId}/plans/{planId}/beneficiaries | Deletes beneficiary or beneficiaries for a given plan. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| beneficiaries | GetClientBeneficiary | GET | /v2/clients/{clientId}/beneficiaries/{beneficiaryId} | Get beneficiary for a given client. Discriminator TrustBeneficiary. | client_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| beneficiaries | GetClientPlanBeneficiary | GET | /v2/clients/{clientId}/plans/{planId}/beneficiaries/{beneficiaryId} | Get beneficiary for a given client and plan. Discriminator PlanBeneficiary. | client_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| beneficiaries | ListBeneficiariesForClient | GET | /v2/beneficiaries/clients/{clientId} | List beneficiaries by Client Id. | client_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| beneficiaries | ListBeneficiariesForPersonalContact | GET | /v2/beneficiaries/personalContacts/{personalContactId} | List beneficiaries by Personal Contact Id. | client_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| beneficiaries | ListClientBeneficiaries | GET | /v2/clients/{clientId}/beneficiaries | Returns a BeneficiaryCollection, which is a collection of beneficiaries for a client. Discriminator TrustBeneficiary. | client_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| beneficiaries | ListClientPlansBeneficiaries | GET | /v2/clients/{clientId}/plans/{planId}/beneficiaries | Returns a list of beneficiaries for a given client and plan. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| beneficiaries | UpdateClientBeneficiaries | PUT | /v2/clients/{clientId}/beneficiaries | Updates Beneficiary collection (add new and update existing) for a given client. Discriminator TrustBeneficiary. | client_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| beneficiaries | UpdateClientPlansBeneficiaries | PUT | /v2/clients/{clientId}/plans/{planId}/beneficiaries | Updates or creates the beneficiary for a given client and plan. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| brand | ListBrands | GET | /v1/brands | Get brand for either current user or non-authenticated one. | N/A | No | Microservice.Brand | Service Swagger (Microservice.Brand) |
| brands | CreateGroupBrand | POST | /v1/groups/{groupId}/brands | Create brand | N/A | No | Microservice.Brand | Service Swagger (Microservice.Brand) |
| brands | DeleteGroupBrand | DELETE | /v1/groups/{groupId}/brands/{brandId} | Delete brand | N/A | No | Microservice.Brand | Service Swagger (Microservice.Brand) |
| brands | GetGroupBrand | GET | /v1/groups/{groupId}/brands/{brandId} | Get a brand by id and groupId. | N/A | No | Microservice.Brand | Service Swagger (Microservice.Brand) |
| brands | ListGroupBrands | GET | /v1/groups/{groupId}/brands | Lists all brands for the specified group. | N/A | No | Microservice.Brand | Service Swagger (Microservice.Brand) |
| brands | ListUserMesBrands | GET | /v1/users/me/brands | [DEPRECATED] Find brands for the current user using any filters if provided. Use 'v1/brands' instead. | N/A | No | Microservice.Brand | Service Swagger (Microservice.Brand) |
| brands | PatchGroupBrand | PATCH | /v1/groups/{groupId}/brands/{brandId} | Update brand | N/A | No | Microservice.Brand | Service Swagger (Microservice.Brand) |
| bulk | CreateBulkMessage | POST | /v1/messages/bulk | Creates a bulk message. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| bulk | CreateBulkMessageAttachment | POST | /v1/messages/bulk/{bulkId}/attachments | Creates a bulk message attachments. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| bulk | CreateBulkMessageRecipients | POST | /v1/messages/bulk/{bulkId}/recipients | Creates a list of bulk message recipients. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| bulk | DeleteBulkMessageAttachment | DELETE | /v1/messages/bulk/{bulkId}/attachments/{attachmentId} | Deletes the bulk message attachment. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| bulk | DeleteBulkMessageRecipients | DELETE | /v1/messages/bulk/{bulkId}/recipients | Deletes a list of bulk message recipients. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| bulk | GetBulkMessage | GET | /v1/messages/bulk/{bulkId} | Gets a bulk message by id. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| bulk | ListBulkMessageAttachments | GET | /v1/messages/bulk/{bulkId}/attachments | Returns a list of attachments. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| bulk | ListBulkMessageRecipients | GET | /v1/messages/bulk/{bulkId}/recipients | Returns a list of bulk message recipients. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| bulk | ListBulkMessages | GET | /v1/messages/bulk | Returns a list of bulk messages. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| bulk | RevokeBulkMessage | POST | /v1/messages/bulk/{bulkId}/revoke | Revokes a bulk message. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| bulk | SendBulk | POST | /v1/messages/bulk/{bulkId}/send | Starts the processing the bulk message. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| bulk | UpdateBulkMessage | PUT | /v1/messages/bulk/{bulkId} | Updates an existing bulk message. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| bulkvaluations | DeleteValuationBatch | DELETE | /v2/valuations/batches/{batchId} | Deletes an existing valuationbatch and undo any related valuations and transactions | openid, myprofile, valuation_batch.app, valuation_batch | Yes | N/A | Public Swagger v2 |
| bulkvaluations | EnqueueValuationBatch | POST | /v2/valuations/batches | Creates a new valuationbatch and enqueues it for importing | openid, myprofile, valuation_batch.app, valuation_batch | Yes | N/A | Public Swagger v2 |
| bulkvaluations | GetValuationBatch | GET | /v2/valuations/batches/{batchId} | Returns a single valuationbatch | openid, myprofile, valuation_batch.app, valuation_batch | Yes | N/A | Public Swagger v2 |
| bulkvaluations | ListValuationBatches | GET | /v2/valuations/batches | Returns a list of valuationbatch | openid, myprofile, valuation_batch.app, valuation_batch | Yes | N/A | Public Swagger v2 |
| bulkvaluations | ListValuationBatchResults | GET | /v2/valuations/batches/{batchId}/results | Returns the results for a single valuationbatch. | openid, myprofile, valuation_batch.app, valuation_batch | Yes | N/A | Public Swagger v2 |
| bulkvideoshared | CreateBulkVideoShared | POST | /v2/clients/media/videos/bulk/shared | Creates a client video. | N/A | No | Microservice.Content | Service Swagger (Microservice.Content) |
| bulkvideoshared | GetBulkVideoShared | GET | /v2/clients/media/videos/bulk/shared/{bulkVideoSharedId} | Returns a given bulk video shared. | N/A | No | Microservice.Content | Service Swagger (Microservice.Content) |
| bulkvideoshared | ListBulkVideoShared | GET | /v2/clients/media/videos/bulk/shared | Returns a list of bulk video shared. | N/A | No | Microservice.Content | Service Swagger (Microservice.Content) |
| campaignids | UpdateCampaignCampaignId | PUT | /v1/campaigns/{campaignId}/{status} | Update campaign status | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| campaigns | CreateCampaign | POST | /v1/campaigns | Creates campaign details | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| campaigns | DeleteCampaign | DELETE | /v1/campaigns/{campaignId} | Deletes the specified campaign | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| campaigns | GetCampaign | GET | /v1/campaigns/{campaignId} | Get campaign details | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| campaigns | ListCampaigns | GET | /v1/campaigns | Get all campaign templates for the given tenant | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| campaigns | PatchCampaign | PATCH | /v1/campaigns/{campaignId} | Updates campaign details | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| campaigntemplates | CreateCampaigntemplate | POST | /v1/campaigntemplates | Create a campaign template | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| campaigntemplates | DeleteCampaigntemplate | DELETE | /v1/campaigntemplates/{templateId} | Deletes a campaign template | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| campaigntemplates | ExistsCampaigntemplate | HEAD | /v1/campaigntemplates/{templateId} |  | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| campaigntemplates | GetCampaigntemplate | GET | /v1/campaigntemplates/{templateId} |  | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| campaigntemplates | ListCampaigntemplates | GET | /v1/campaigntemplates |  | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| campaigntemplates | PatchCampaigntemplate | PATCH | /v1/campaigntemplates/{templateId} | Updates a campaign template | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| cashreceipts | CreateCashReceipts | POST | /v2/cashreceipts | Create an array of cash receipts. | N/A | No | Monolith.Commission | Service Swagger (Monolith.Commission) |
| cashreceipts | GetCashReceipt | GET | /v2/cashreceipts/{cashReceiptId} | Get a cash receipt. | N/A | No | Monolith.Commission | Service Swagger (Monolith.Commission) |
| cashreceipts | ListCashReceipts | GET | /v2/cashreceipts | Gets a Collection of Cash Receipts. | N/A | No | Monolith.Commission | Service Swagger (Monolith.Commission) |
| cashreceipts | PatchCashReceipt | PATCH | /v2/cashreceipts/{cashReceiptId} | Updates a cash receipt for given cashReceipt id. | N/A | No | Monolith.Commission | Service Swagger (Monolith.Commission) |
| cashreceipts | UpdateCashReceipt | PUT | /v2/cashreceipts/{cashReceiptId} | Update a cash receipt. | N/A | No | Monolith.Commission | Service Swagger (Monolith.Commission) |
| categories | CreateCategory | POST | /v1/categories | Create a template category | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| categories | DeleteCategory | DELETE | /v1/categories/{categoryId} | Delete a template category | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| categories | GetCategory | GET | /v1/categories/{categoryId} | Get a specified category | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| categories | ListCategories | GET | /v1/categories | List template categories | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| categories | PatchCategory | PATCH | /v1/categories/{categoryId} | Update a template category | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| cff | GetCffSegment | GET | /v2/cff_segments/{segmentId} | Returns a particular CFF segment. | N/A | No | Microservice.CFF | Service Swagger (Microservice.CFF) |
| cff | GetCffSegmentCompletion | GET | /v2/clients/{clientId}/cff_segments/{segmentId}/completion | Returns completion for a particular segment. | N/A | No | Microservice.CFF | Service Swagger (Microservice.CFF) |
| cff | GetCffSegmentState | GET | /v2/clients/{clientId}/cff_segments/{segmentId}/state | Returns state for a particular segment. | N/A | No | Microservice.CFF | Service Swagger (Microservice.CFF) |
| cff | ListCffSegments | GET | /v2/cff_segments | Returns CFF profile segments. | N/A | No | Microservice.CFF | Service Swagger (Microservice.CFF) |
| cff | ListCffSegmentsCompletions | GET | /v2/clients/{clientId}/cff_segments/completions | Returns a collection of completions for the specified segments. | N/A | No | Microservice.CFF | Service Swagger (Microservice.CFF) |
| cff | UpdateCffSegmentCompletion | PUT | /v2/clients/{clientId}/cff_segments/{segmentId}/completion | Updates completion for a particular CFF segment. | N/A | No | Microservice.CFF | Service Swagger (Microservice.CFF) |
| cff | UpdateCffSegmentState | PUT | /v2/clients/{clientId}/cff_segments/{segmentId}/state | Updates a state for a particular Cff segment. Please be advised that though there is no size restriction for the particular state key the entire state data could not occupy more than 1 MB. | N/A | No | Microservice.CFF | Service Swagger (Microservice.CFF) |
| changepassword | changepassword | POST | /v2/users/{userId}/changepassword | Change password | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| changepasswords | CreateChangepassword | POST | /v2/changepassword |  | N/A | No | Microservice.Identity | Service Swagger (Microservice.Identity) |
| changes | CreateClientChange | POST | /v1/client/{partyId}/changes | Creates a change log entry for the client. | N/A | No | Microservice.ChangeNotification | Service Swagger (Microservice.ChangeNotification) |
| changes | ExistsClientChange | HEAD | /v1/client/{partyId}/changes/{eventId} | Get the specified event. | N/A | No | Microservice.ChangeNotification | Service Swagger (Microservice.ChangeNotification) |
| changes | GetClientChange | GET | /v1/client/{partyId}/changes/{eventId} | Get the specified event. | N/A | No | Microservice.ChangeNotification | Service Swagger (Microservice.ChangeNotification) |
| changes | ListClientChanges | GET | /v1/client/{partyId}/changes | Return a paged collection of changes. | N/A | No | Microservice.ChangeNotification | Service Swagger (Microservice.ChangeNotification) |
| channelsubscriptions | CreateChannelSubscription | POST | /v2/users/{userId}/channels/subscriptions | Creates a channel subscription for a user. | N/A | No | Microservice.Notifications | Service Swagger (Microservice.Notifications) |
| channelsubscriptions | DeleteChannelSubscription | DELETE | /v2/users/{userId}/channels/subscriptions/{subscriptionId} | Deletes a channel subscription for a user. | N/A | No | Microservice.Notifications | Service Swagger (Microservice.Notifications) |
| channelsubscriptions | ListChannelSubscriptions | GET | /v2/users/{userId}/channels/subscriptions | Lists channel subscriptions for a user. | N/A | No | Microservice.Notifications | Service Swagger (Microservice.Notifications) |
| charges | CreateClientPlanCharge | POST | /v2/clients/{clientId}/plans/{planId}/charges | Creates a new charge for a client's plan. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| charges | DeleteClientPlanCharge | DELETE | /v2/clients/{clientId}/plans/{planId}/charges/{chargeId} | Deletes an existing charge for a client's plan. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| charges | GetClientPlanCharge | GET | /v2/clients/{clientId}/plans/{planId}/charges/{chargeId} | Returns a single charge for a client's plan. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| charges | ListClientPlanCharges | GET | /v2/clients/{clientId}/plans/{planId}/charges | Returns a list of charge for a client's plan. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| charges | UpdateClientPlanCharge | PUT | /v2/clients/{clientId}/plans/{planId}/charges/{chargeId} | Updates an existing charge for a client's plan. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| checklistitems | CreateCheckListItem | POST | /v2/checklists/items | Creates a CheckList Item. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| checklistitems | DeleteCheckListItem | DELETE | /v2/checklists/items/{itemId} | Delete a Check list Item. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| checklistitems | GetCheckListItem | GET | /v2/checklists/items/{itemId} | Get a checklist item. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| checklistitems | ListCheckListItems | GET | /v2/checklists/items | List all Check list items. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| checklistitems | UpdateCheckListItem | PUT | /v2/checklists/items/{itemId} | Update a check list item. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| classificationcategories | GetClassificationCategory | GET | /v2/classificationcategories/{classificationCategoryId} | Get Classification Category based Classification Category Id. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| classificationcategories | ListClassificationCategories | GET | /v2/classificationcategories | List Classification Categories based on Classification Category Ids. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| clientcategories | GetClientCategory | GET | /v2/clientcategories/{clientCategoryId} |  | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| clientcategories | ListClientCategories | GET | /v2/clientcategories | Returns a list of client categories. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| clientenrollmentsummary | GetClientEnrollmentSummary | GET | /v2/clients/{clientId}/clientenrollmentsummary | Gets client enrollments summary. | N/A | No | Microservice.Requirement | Service Swagger (Microservice.Requirement) |
| clientinvestmentpreference | CreateClientInvestmentPreferences | POST | /v2/clients/{clientId}/investmentPreferences | Create client investment preference | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| clientinvestmentpreference | GetClientInvestmentPreferences | GET | /v2/clients/{clientId}/investmentPreferences/{clientInvestmentPreferenceId} | Get client investment preference. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| clientinvestmentpreference | GetClientInvestmentPreferenceUsingObjective | GET | /v2/clients/{clientId}/objectives/{objectivesId}/InvestmentPreferences | Allows an API consumer to retrieve a client investment preference for objective. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| clientinvestmentpreference | ListClientInvestmentPreferences | GET | /v2/clients/{clientId}/investmentPreferences | List client investment preferences | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| clientinvestmentpreference | UpdateClientInvestmentPreferences | PUT | /v2/clients/{clientId}/investmentPreferences/{clientInvestmentPreferenceId} | Update client investment preference | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| clientinvestmentpreference | UpdateClientInvestmentPreferenceWithObjective | PUT | /v2/clients/{clientId}/objectives/{objectivesId}/InvestmentPreferences | Links an investment preference to a objective. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| clients | ClientExists | HEAD | /v2/clients/{clientId} | Checks the client exists. | openid, myprofile, client_data | Yes | Monolith.Crm | Public Swagger v2 + GitHub Monolith.Crm |
| clients | CreateClient | POST | /v2/clients | Creates a client. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| clients | DeleteClient | DELETE | /v2/clients/{clientId} | Deletes a given client. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| clients | GetClient | GET | /v2/clients/{clientId} | Returns a clients for a given client. | openid, myprofile, client_data, client_identification_data | Yes | N/A | Public Swagger v2 |
| clients | ListAllClientsRelatedUser | GET | /v2/users/{userId}/Clients | Returns a list of quick search clients for the user. | client_data, client_identification_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| clients | ListClientInfo | GET | /v2/clients/info | Returns a list of clients information | client_data, client_identification_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| clients | ListClients | GET | /v2/clients | Returns a list of clients. | openid, myprofile, client_data, client_identification_data | Yes | N/A | Public Swagger v2 |
| clients | ListClientSegments | GET | /v2/clients/client_segments | Retrieves a list of the available clients' segments. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| clients | ListClientServiceStatuses | GET | /v2/clients/service_statuses | Retrieves a list of the available clients' service statuses. | client_data, client_identification_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| clients | UpdateClient | PUT | /v2/clients/{clientId} | Updates a client for a given client. | openid, myprofile, client_data | Yes | Monolith.Crm | Public Swagger v2 + GitHub Monolith.Crm |
| clientvideo | BulkShareVideosToClients | POST | /v2/clients/media/videos/bulk/share | Creates a client video. | N/A | No | Microservice.Content | Service Swagger (Microservice.Content) |
| clientvideo | CreateClientVideo | POST | /v2/clients/{clientId}/media/videos | Creates a single client video. | N/A | No | Microservice.Content | Service Swagger (Microservice.Content) |
| clientvideo | CreateClientVideoInstance | POST | /v2/clients/{clientId}/media/videos/instances | Creates a single client video. | N/A | No | Microservice.Content | Service Swagger (Microservice.Content) |
| clientvideo | GenerateClientVideoReport | POST | /v2/clients/{clientId}/media/videos/{videoId}/report | Generates a client video report | N/A | No | Microservice.Content | Service Swagger (Microservice.Content) |
| clientvideo | GenerateClientVideoReport1 | POST | /v2/clients/{clientId}/media/videos/instances/{instanceId}/report | Generates a client video report | N/A | No | Microservice.Content | Service Swagger (Microservice.Content) |
| clientvideo | GetClientVideo | GET | /v2/clients/{clientId}/media/videos/{videoId} | Returns a given client video | N/A | No | Microservice.Content | Service Swagger (Microservice.Content) |
| clientvideo | GetClientVideoInstance | GET | /v2/clients/{clientId}/media/videos/instances/{instanceId} | Returns a given client video | N/A | No | Microservice.Content | Service Swagger (Microservice.Content) |
| clientvideo | ListClientVideoInstances | GET | /v2/clients/{clientId}/media/videos/instances | Returns a list of client videos. | N/A | No | Microservice.Content | Service Swagger (Microservice.Content) |
| clientvideo | ListClientVideos | GET | /v2/clients/{clientId}/media/videos | Returns a list of client videos. | N/A | No | Microservice.Content | Service Swagger (Microservice.Content) |
| clientvideo | MAPlayerClientVideoConfigURI | GET | /v2/clients/{clientId}/media/videos/{videoId}/player | Returns player configuration | N/A | No | Microservice.Content | Service Swagger (Microservice.Content) |
| clientvideo | MAPlayerWebhookURI | POST | /v2/clients/{clientId}/media/videos/{videoId}/analytics/webhook | Posts video player analytics events for a single shared client video. | N/A | No | Microservice.Content | Service Swagger (Microservice.Content) |
| clientvideo | PlayerWebhookURI | POST | /v2/clients/{clientId}/media/videos/instances/{id}/webhook | Posts video player analytics events for a single shared client video. | N/A | No | Microservice.Content | Service Swagger (Microservice.Content) |
| clientvideo | UpdateClientVideo | PATCH | /v2/clients/{clientId}/media/videos/{videoId} | Updates a client video. | N/A | No | Microservice.Content | Service Swagger (Microservice.Content) |
| clientvideo | UpdateClientVideoInstances | PATCH | /v2/clients/{clientId}/media/videos/instances/{id} | Updates a client video. | N/A | No | Microservice.Content | Service Swagger (Microservice.Content) |
| clientvideo | VideoReportCallbackNotificationUrl | POST | /v2/clients/media/videos/report/callback | Downloads client video report | N/A | No | Microservice.Content | Service Swagger (Microservice.Content) |
| clone | CreateTemplateClone | POST | /v1/templates/{templateId}/clone | Clone a specified template | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| closest | GetGroupBrandClosest | GET | /v1/groups/{groupId}/brands/closest | Get closest brand for specified group | N/A | No | Microservice.Brand | Service Swagger (Microservice.Brand) |
| commands | PublishExpectationCommand | POST | /v2/commands/Expectation | Creates a new expectation request to trigger creation of a new income or migration expectation. | N/A | No | Microservice.Expectation | Service Swagger (Microservice.Expectation) |
| commands | PublishReversalCommand | POST | /v2/commands/Reversal | Creates a new expectation reversal request to trigger the reversal of an expectation. | N/A | No | Microservice.Expectation | Service Swagger (Microservice.Expectation) |
| commands | PublishTenantExpectationDue | POST | /v2/commands/ExpectationSchedule | Initialize the scheduling process. | N/A | No | Microservice.Expectation | Service Swagger (Microservice.Expectation) |
| commissions | ClientCommissionExists | HEAD | /v2/clients/{clientId}/plans/{planId}/commissions/{planCommissionId} | Check to see if commission exists for a given plan. | openid, myprofile, firm_data, firm_data.commission | Yes | N/A | Public Swagger v2 |
| commissions | CommissionExists | HEAD | /v2/commissions/{commissionId} | Check to see if a commission exists. | openid, myprofile, firm_data, firm_data.commission | Yes | N/A | Public Swagger v2 |
| commissions | CreatePlanCommissions | POST | /v2/clients/{clientId}/plans/{planId}/commissions | Create a commission for a given plan. | openid, myprofile, firm_data, firm_data.commission | Yes | N/A | Public Swagger v2 |
| commissions | DeletePlanCommissions | DELETE | /v2/clients/{clientId}/plans/{planId}/commissions/{planCommissionId} | Delete a commission for a given plan. | openid, myprofile, firm_data, firm_data.commission | Yes | N/A | Public Swagger v2 |
| commissions | GetCommission | GET | /v2/commissions/{commissionId} | Get a commission by id. | openid, myprofile, firm_data, firm_data.commission | Yes | N/A | Public Swagger v2 |
| commissions | GetPlanCommission | GET | /v2/clients/{clientId}/plans/{planId}/commissions/{planCommissionId} | Get a commission by identifier for a given plan. | openid, myprofile, firm_data, firm_data.commission | Yes | N/A | Public Swagger v2 |
| commissions | ListCommissions | GET | /v2/commissions | Returns a list of commissions. | openid, myprofile, firm_data, firm_data.commission | Yes | N/A | Public Swagger v2 |
| commissions | ListPlanCommissions | GET | /v2/clients/{clientId}/plans/{planId}/commissions | Return a list of commissions for a given plan. | openid, myprofile, firm_data, firm_data.commission | Yes | N/A | Public Swagger v2 |
| commissions | UpdatePlanCommissions | PUT | /v2/clients/{clientId}/plans/{planId}/commissions/{planCommissionId} | Update a commission for a given plan. | openid, myprofile, firm_data, firm_data.commission | Yes | N/A | Public Swagger v2 |
| commons | CreateCommon | POST | /v1/templates/common/{templateIdentifier} | Create instance for specific template | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| commons | DeleteCommon | DELETE | /v1/templates/common/{templateIdentifier} | Create instance for specific template | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| communication-agreements | CreateClientAgreement | POST | /v2/clients/{clientId}/communication-agreements | Creates a Client Agreement | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| communication-agreements | GetClientAgreementById | GET | /v2/clients/{clientId}/communication-agreements/{agreementId} | Retrieves a specific Client Agreement by ID | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| complete | CompleteClientAgreement | POST | /v2/clients/{clientId}/communication-agreements/{agreementId}/complete | Complete Client Agreement | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| complete | CreateReviewComplete | POST | /v1/reviews/{reviewId}/complete | Complete the specified review | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| configuration | CreateQuicksightFolderConfiguration | POST | /v2/quicksight/configurations/folders | Creates a quicksight folder configuration. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| configuration | CreateQuicksightGroupConfiguration | POST | /v2/quicksight/configurations/groups | Creates a quicksight group configuration. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| configuration | DeleteQuicksightConfiguration | DELETE | /v2/quicksight/configurations | Delete quicksight configuration. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| configuration | DeleteQuicksightFolderConfiguration | DELETE | /v2/quicksight/configurations/folders/{id} | Deletes a quicksight folder configuration. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| configuration | DeleteQuicksightGroupConfiguration | DELETE | /v2/quicksight/configurations/groups/{id} | Deletes a quicksight group configuration. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| configuration | GetEmailConfiguration | GET | /v1/emails/configuration |  | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| configuration | GetQuicksightConfiguration | GET | /v2/quicksight/configurations | Get quicksight configuration. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| configuration | GetQuicksightFolderConfiguration | GET | /v2/quicksight/configurations/folders/{id} | Gets quicksight folder configuration. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| configuration | GetQuicksightGroupConfiguration | GET | /v2/quicksight/configurations/groups/{id} | Gets quicksight group configuration. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| configuration | ListQuicksightFolderConfiguration | GET | /v2/quicksight/configurations/folders | Gets a collection of quicksight folder configurations. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| configuration | ListQuicksightGroupConfiguration | GET | /v2/quicksight/configurations/groups | Gets list of quicksight group configuration. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| configuration | UpdateEmailConfiguration | PUT | /v1/emails/configuration |  | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| configuration | UpdateQuicksightConfiguration | PUT | /v2/quicksight/configurations | Create quicksight configuration. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| configuration | UpdateQuicksightFolderConfiguration | PUT | /v2/quicksight/configurations/folders/{id} | Updates a quicksight folder configuration. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| configuration | UpdateQuicksightGroupConfiguration | PUT | /v2/quicksight/configurations/groups/{id} | Updates a quicksight group configuration. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| contactdetails | CreateAdviserContactdetail | POST | /v2/advisers/{adviserId}/contactdetails | Creates a new ContactDetail for the given Adviser | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| contactdetails | CreateClientContactdetails | POST | /v2/clients/{clientId}/contactdetails | Creates a contact detail for a given client. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| contactdetails | CreateLeadContactdetails | POST | /v2/leads/{leadId}/contactdetails | Creates contact details for a given lead. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| contactdetails | CreatePersonalContactDetail | POST | /v2/clients/{clientId}/personalcontacts/{personalContactId}/contactdetails | Add a new contact detail for a given personal contact | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| contactdetails | DeleteAdviserContactdetail | DELETE | /v2/advisers/{adviserId}/contactdetails/{contactDetailId} | Deletes an existing ContactDetail for the given Adviser | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| contactdetails | DeleteClientContactdetail | DELETE | /v2/clients/{clientId}/contactdetails/{contactDetailId} | Deletes a contact detail for a given client and contact detail. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| contactdetails | DeleteLeadContactdetail | DELETE | /v2/leads/{leadId}/contactdetails/{contactDetailId} | Deletes contact details for a given lead. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| contactdetails | DeletePersonalContactDetail | DELETE | /v2/clients/{clientId}/personalcontacts/{personalContactId}/contactdetails/{contactDetailId} | Delete an existing contact detail for a given personal contact | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| contactdetails | GetAdviserContactdetail | GET | /v2/advisers/{adviserId}/contactdetails/{contactDetailId} | Returns ContactDetail resource | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| contactdetails | GetClientContactdetail | GET | /v2/clients/{clientId}/contactdetails/{contactDetailId} | Returns a contact detail for a given client and contact detail. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| contactdetails | GetLeadContactdetail | GET | /v2/leads/{leadId}/contactdetails/{contactDetailId} | Returns a contact detail for a given lead and contact detail. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| contactdetails | GetPersonalContactDetail | GET | /v2/clients/{clientId}/personalcontacts/{personalContactId}/contactdetails/{contactDetailId} | Get given contact detail for a given personal contact | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| contactdetails | ListAdviserContactdetails | GET | /v2/advisers/{adviserId}/contactdetails | Returns list of a adviser's contact details | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| contactdetails | ListClientContactdetails | GET | /v2/clients/{clientId}/contactdetails | Returns a list of contact details for a given client. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| contactdetails | ListLeadContactdetails | GET | /v2/leads/{leadId}/contactdetails | Returns a list of contact details for a given lead. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| contactdetails | ListPersonalContactDetails | GET | /v2/clients/{clientId}/personalcontacts/{personalContactId}/contactdetails | List contact details for a given personal contact | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| contactdetails | UpdateAdviserContactdetail | PUT | /v2/advisers/{adviserId}/contactdetails/{contactDetailId} | Updates an existing ContactDetail for the given Adviser | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| contactdetails | UpdateClientContactdetail | PUT | /v2/clients/{clientId}/contactdetails/{contactDetailId} | Updates contact details for a given client and contact detail. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| contactdetails | UpdateLeadContactdetail | PUT | /v2/leads/{leadId}/contactdetails/{contactDetailId} | Updates contact details for a given lead. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| contactdetails | UpdatePersonalContactDetail | PUT | /v2/clients/{clientId}/personalcontacts/{personalContactId}/contactdetails/{contactDetailId} | Update an existing contact detail for a given personal contact | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| contacts | CreatePlanContact | POST | /v2/clients/{clientId}/plans/{planId}/contacts | Creates a client plan contact | N/A | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| contacts | DeletePlanContact | DELETE | /v2/clients/{clientId}/plans/{planId}/contacts/{contactId} | Deletes the client plan contact by the given contact id and plan id. | N/A | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| contacts | GetPlanContact | GET | /v2/clients/{clientId}/plans/{planId}/contacts/{contactId} | Gets a plan's contact | N/A | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| contacts | ListPlanContacts | GET | /v2/clients/{clientId}/plans/{planId}/contacts | Gets a collection of Plan's contacts | N/A | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| content | GetCampaignContent | GET | /v1/campaigns/{campaignId}/content | Get campaign details | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| content | GetCampaigntemplateContent | GET | /v1/campaigntemplates/{templateId}/content |  | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| content | GetClientEmailContent | GET | /v1/clients/{clientId}/emails/{emailId}/content |  | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| content | GetMessageAttachmentContent | GET | /v1/messages/{secureMessageId}/attachments/{attachmentId}/content | Get the attachment's content of a specific secure message. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| content | PatchCampaignContent | PATCH | /v1/campaigns/{campaignId}/content | Updates campaign details | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| content | PatchCampaigntemplateContent | PATCH | /v1/campaigntemplates/{templateId}/content | Updates a campaign template | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| content | UpdateClientEmailContent | PUT | /v1/clients/{clientId}/emails/{emailId}/content |  | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| contributions | CreatePlanContributions | POST | /v2/clients/{clientId}/plans/{planId}/contributions | Creates a contribution for a given client and plan. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| contributions | DeleteClientPlanContribution | DELETE | /v2/clients/{clientId}/plans/{planId}/contributions/{contributionId} | Deletes a contribution for a given plan. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| contributions | GetClientPlanContribution | GET | /v2/clients/{clientId}/plans/{planId}/contributions/{contributionId} | Returns a contribution for a given client and plan. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| contributions | ListClientsContributions | GET | /v2/clients/{clientId}/contributions | Gets a collection of client contributions | client_financial_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| contributions | UpdateClientPlanContribution | PUT | /v2/clients/{clientId}/plans/{planId}/contributions/{contributionId} | Updates a contribution for a given client and plan. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| contributions, beta | ListClientPlanContributions | GET | /v2/clients/{clientId}/plans/{planId}/contributions | Returns list of contributions for a given client and plan. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| countries | GetCountry | GET | /v2/countries/{countryId} | Returns the specified Country resource. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| countries | ListCountries | GET | /v2/countries | Returns a list of countries. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| createinstance | CreateinstanceCommon | POST | /v1/templates/common/{templateIdentifier}/createinstance | Create instance for specific template | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| createinvestor | CreateInvestor | PUT | /v2/provider/{providerId}/investors |  | N/A | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| creditnotes | CreateCreditNote | POST | /v2/fees/{feeId}/creditnotes | Create a credit note for a given fee. | openid, myprofile, firm_data, firm_data.creditnote | Yes | N/A | Public Swagger v2 |
| creditnotes | DeleteCreditNote | DELETE | /v2/fees/{feeId}/creditnotes/{creditNoteId} | Delete a credit note for a given fee. | openid, myprofile, firm_data, firm_data.creditnote | Yes | N/A | Public Swagger v2 |
| creditnotes | GetCreditNote | GET | /v2/fees/{feeId}/creditnotes/{creditNoteId} | Get a credit note by identifier for a given fee. | openid, myprofile, firm_data, firm_data.creditnote | Yes | N/A | Public Swagger v2 |
| creditnotes | ListCreditNotes | GET | /v2/fees/{feeId}/creditnotes | Return a list of credit notes for a given fee. | openid, myprofile, firm_data, firm_data.creditnote | Yes | N/A | Public Swagger v2 |
| currencies | DeleteCurrency | DELETE | /v2/currencies/{securityId} | Delete a Currency Security based on Security Id. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| currencies | GetCurrency | GET | /v2/currencies/{securityId} | Gets a Currency Security based on Security Id. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| currencies | ListCurrencies | GET | /v2/currencies | Get a List of Currency Securities. A Id or a Currency Code or Security Id is required. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| currencies | PostCurrencies | POST | /v2/currencies | Create Currency Securities. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| currencies | PutCurrencies | PUT | /v2/currencies | Update Currency Securities. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| currentprices | ListCurrentPrices | GET | /v2/currentprices | Get all current prices for the passed in securityIds | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| currentquotes | ListCurrentQuotes | GET | /v2/currentquotes | Get all current prices for the passed in securityIds. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| customquestions | CreateQuestion | POST | /v2/questions | Creates a new question. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| customquestions | DeleteQuestion | DELETE | /v2/questions/{questionId} | Deletes a question. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| customquestions | GetQuestion | GET | /v2/questions/{questionId} | Retrieves the details of a question. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| customquestions | ListQuestions | GET | /v2/questions | Retrieves a list of questions associated with the current tenant. The returned list may be filtered. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| customquestions | ListQuestionsAnswers | GET | /v2/clients/{clientId}/questions | Returns a list of the answers a client has given to a given set of questions. The answers are returned in the order that the related questions should be answered. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| customquestions | UpdateQuestion | PATCH | /v2/questions/{questionId} | Updates one or more details of an existing question. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| customquestions | UpdateQuestion1 | PUT | /v2/questions/{questionId} | Updates all the details for an existing question. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| customquestions | UpdateQuestionAnswers | PUT | /v2/clients/{clientId}/questions | Updates a client's answers to one or more questions. See above for the rules governing this. | client_data, firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| dashboard | GetQuicksightDashboardEmbedUrl | GET | /v2/quicksight/dashboards/{dashboardId}/embed-url | Generates a session URL and authorization code that you can use to embed an Amazon QuickSight read-only dashboard in your web server code. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| dashboard | ListQuicksightDashboards | GET | /v2/quicksight/dashboards | Gets a collection of dashboards. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| dashboardfavourite | CreateQuicksightDashboardFavourite | POST | /v2/users/{userId}/favourites/dashboards/{dashboardId} | Adds a dashboard to the user favourites dashboards. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| dashboardfavourite | DeleteQuicksightDashboardFavourite | DELETE | /v2/users/{userId}/favourites/dashboards/{dashboardId} | Removes a dashboard from the user favourites dashboards. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| dashboardfavourite | ListQuicksightDashboardsFavourite | GET | /v2/users/{userId}/favourites/dashboards | Gets a collection of dashboard favourites. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| dashboardpermission | AssignQuicksightDashboardPermissions | PUT | /v2/quicksight/dashboards/{dashboardId}/permissions | Adds permission for specified user or group to quicksight dashboard. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| dashboardpermission | DeleteQuicksightDashboardPermission | DELETE | /v2/quicksight/dashboards/{dashboardId}/permissions | Deletes permission for specified user or group from quicksight dashboard | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| dashboardpermission | ListQuicksightDashboardPermissions | GET | /v2/quicksight/dashboards/{dashboardId}/permissions | Lists permissions for quicksight dashboard. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| dashboardusagehistory | ListQuicksightDashboardsUsageHistory | GET | /v2/users/{userId}/dashboards/usage_history | Gets a collection of dashboard usage history. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| data | CreateAuthorDatum | POST | /v2/author/data |  | N/A | No | Monolith.AuthorDataProvider | Service Swagger (Monolith.AuthorDataProvider) |
| data | CreateTemplateVersionDatum | POST | /v1/templates/{templateId}/versions/{versionId}/data |  | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| defaultbranding | GetDefaultBranding | GET | /v2/report/branding/default/{id} | Gets a default  branding configuration | N/A | No | Monolith.Report | Service Swagger (Monolith.Report) |
| defaultbranding | UpdateDefaultBranding | PUT | /v2/report/branding/default/{id} |  | N/A | No | Monolith.Report | Service Swagger (Monolith.Report) |
| defaultsender | DefaultsenderEmail | GET | /v1/emails/defaultsender |  | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| delivery methods | GetDeliveryMethods | GET | /v2/deliverymethods | Get Delivery Methods. | N/A | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| demote | CreateTemplateVersionDemote | POST | /v1/templates/{templateId}/versions/{versionId}/demote | Demote template version | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| dependants, beta | CreateClientDependant | POST | /v2/clients/{clientId}/dependants | Creates a dependant for a given client. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| dependants, beta | DeleteClientDependant | DELETE | /v2/clients/{clientId}/dependants/{dependantId} | Deletes a dependant for a given client. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| dependants, beta | GetClientDependant | GET | /v2/clients/{clientId}/dependants/{dependantId} | Returns a dependant for a given client and dependant. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| dependants, beta | ListClientDependants | GET | /v2/clients/{clientId}/dependants | Returns a list of dependants for a given client. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| dependants, beta | UpdateClientDependant | PUT | /v2/clients/{clientId}/dependants/{dependantId} | Updates a dependant for a given client. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| detailed | GetTemplateDetailed | GET | /v1/templates/{templateId}/detailed | Get template with additional detail on steps - saving need for multiple calls | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| detaileds | ListTemplateDetaileds | GET | /v1/templates/detailed | Get all campaign templates for the given tenant with additional details of steps | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| details | GetWidgetMarketingDetails | GET | /v1/widgets/marketing/details | Gets the marketing campaign widget Html template body and widget position | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| disclaimer | GetProviderDisclaimer | GET | /v2/provider/{providerId}/disclaimer |  | N/A | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| disclaimer | UpdateProviderDisclaimer | PUT | /v2/provider/{providerId}/disclaimer |  | N/A | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| disclosures | CreateClientDisclosure | POST | /v2/clients/{clientId}/disclosures | Creates a disclosure for a given client. | N/A | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| disclosures | CreateTenantDocumentType | POST | /v2/disclosures/documentTypes | Add a new Document Type for a tenant | N/A | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| disclosures | DeleteClientDisclosure | DELETE | /v2/clients/{clientId}/disclosures/{disclosureId} | Deletes a disclosure for a given client. | N/A | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| disclosures | DeleteTenantDocumentType | DELETE | /v2/disclosures/documentTypes/{documentTypeId} | Delete an existing Document Type for a tenant | N/A | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| disclosures | GetTenantDocumentType | GET | /v2/disclosures/documentTypes/{documentTypeId} | Get Document Type by Id for a tenant | N/A | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| disclosures | ListClientDisclosures | GET | /v2/clients/{clientId}/disclosures | List disclosures for a given client. | N/A | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| disclosures | ListTenantDocumentTypes | GET | /v2/disclosures/documentTypes | List Document Types for a tenant | N/A | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| disclosures | UpdateClientDisclosure | PUT | /v2/clients/{clientId}/disclosures/{disclosureId} | Updates a disclosure for a given client. | N/A | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| disclosures | UpdateTenantDocumentType | PUT | /v2/disclosures/documentTypes/{documentTypeId} | Update an existing Document Type for a tenant | N/A | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| dividends | DeleteSecurityDividends | DELETE | /v2/securities/{securityId}/dividends |  | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| dividends | ListDividends | GET | /v2/dividends |  | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| dividends | ListSecurityDividends | GET | /v2/securities/{securityId}/dividends |  | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| dividends | PatchDividends | PATCH | /v2/dividends |  | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| dividends | PostDividends | POST | /v2/dividends |  | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| document | ListDocuments | GET | /v2/clients/{clientId}/plans/{planId}/documents | Returns a list of PlanDocument Collection | N/A | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| documentbinderconfigs | GetBinderSettings | GET | /v2/DocumentBinderConfig | Get Binder Settings | N/A | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documentbinders | CreateDocumentBinder | POST | /v2/clients/{clientId}/documentbinders | Creates a new document binder | N/A | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documentbinders | GetDocumentBinder | GET | /v2/clients/{clientId}/documentbinders/{documentBinderId} | Gets a single document binder | N/A | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documentbinders | ListDocumentBinders | GET | /v2/clients/{clientId}/documentbinders | List all document binders | N/A | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documentfolders | CreateDocumentFolder | POST | /v2/clients/{clientId}/documentfolders | Creates a new document folder. | openid, myprofile, client_financial_data, documents | Yes | N/A | Public Swagger v2 |
| documentfolders | GetDocumentFolder | GET | /v2/clients/{clientId}/documentfolders/{documentFolderId} | Gets a single document folder. | openid, myprofile, client_financial_data, documents | Yes | N/A | Public Swagger v2 |
| documentfolders | ListDocumentFolders | GET | /v2/clients/{clientId}/documentfolders | Returns a list of document folders. | openid, myprofile, client_financial_data, documents | Yes | N/A | Public Swagger v2 |
| documents | AdviserDocumentExists | HEAD | /v2/advisers/{adviserId}/documents/{documentId} | Checks if required document exists | client_financial_data, documents, myprofile, openid | No | Monolith.Storage | Service Swagger + Documentation Ignore |
| documents | AdviserDocumentHideInPortal | DELETE | /v2/advisers/{adviserId}/documents/{documentId}/showInPortal | Shares an adviser document that has been shared with all clients in the portal. | client_financial_data, documents, myprofile, openid | No | Microservice.ClientStorage | Service Swagger + Documentation Ignore |
| documents | AdviserDocumentObjectExists | HEAD | /v2/advisers/{adviserId}/documents/{documentId}/object | Checks if required adviser document is uploaded. | client_financial_data, documents, myprofile, openid | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | AdviserDocumentShowInPortal | POST | /v2/advisers/{adviserId}/documents/{documentId}/showInPortal | Shares the adviser document with all clients in the portal. | client_financial_data, documents, myprofile, openid | No | Microservice.ClientStorage | Service Swagger + Documentation Ignore |
| documents | AssignAdviserDocument | POST | /v2/advisers/{adviserId}/documents/{documentId} | Adds the specified adviser owner to the specified document | client_financial_data, documents, myprofile, openid | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | AssignClientDocument | POST | /v2/clients/{clientId}/documents/{documentId} | Creates a document for a given client and document. | client_financial_data, documents, myprofile, openid | No | Monolith.Storage | Service Swagger + Documentation Ignore |
| documents | ClientDocumentExists | HEAD | /v2/clients/{clientId}/documents/{documentId} | Checks if required client document exists | client_financial_data, documents, myprofile, openid | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | ClientDocumentHideInPortal | DELETE | /v2/clients/{clientId}/documents/{documentId}/showInPortal | Unshares the document with specified document id in the client portal. | client_financial_data, documents, myprofile, openid | No | Microservice.ClientStorage | Service Swagger + Documentation Ignore |
| documents | ClientDocumentObjectExists | HEAD | /v2/clients/{clientId}/documents/{documentId}/object | Checks if required client document is uploaded. | client_financial_data, documents, myprofile, openid | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | ClientDocumentShowInPortal | POST | /v2/clients/{clientId}/documents/{documentId}/showInPortal | Shares the document with specified document id in the client portal. | client_financial_data, documents, myprofile, openid | No | Microservice.ClientStorage | Service Swagger + Documentation Ignore |
| documents | CreateAdviserDocument | POST | /v2/advisers/{adviserId}/documents | Creates a new document associated with this specified adviser | client_financial_data, documents, myprofile, openid | No | Monolith.Storage | Service Swagger + Documentation Ignore |
| documents | CreateClientDocument | POST | /v2/clients/{clientId}/documents | Creates a document for a given client. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| documents | CreateDocument | POST | /v2/documents | Creates a new document | client_financial_data, documents, myprofile, openid | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | CreateDocumentConfiguration | POST | /v2/documents/configurations | Creates a new storage configuration | client_financial_data, documents, myprofile, openid | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | DeleteAdviserDocument | DELETE | /v2/advisers/{adviserId}/documents/{documentId} | Deletes a file object associated with the specified adviser document | client_financial_data, documents, myprofile, openid | No | Monolith.Storage | Service Swagger + Documentation Ignore |
| documents | DeleteClientDocument | DELETE | /v2/clients/{clientId}/documents/{documentId} | Deletes document's metadata for specified client | client_financial_data, documents, myprofile, openid | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | DeleteDocument | DELETE | /v2/documents/{documentId} | Deletes document's metadata for specified document id | client_financial_data, documents, myprofile, openid | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | DocumentConfigurationExists | HEAD | /v2/documents/configurations/{id} | Checks that a storage configuration exists by id | client_financial_data, documents, myprofile, openid | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | DocumentExists | HEAD | /v2/documents/{documentId} | Checks if required document exists | client_financial_data, documents, myprofile, openid | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | DocumentObjectExists | HEAD | /v2/documents/{documentId}/object | Checks if required document is uploaded. | client_financial_data, documents, myprofile, openid | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | GetAdviserDocument | GET | /v2/advisers/{adviserId}/documents/{documentId} | Gets a single adviser document by id | client_financial_data, documents, myprofile, openid | No | Monolith.Storage | Service Swagger + Documentation Ignore |
| documents | GetAdviserDocumentObject | GET | /v2/advisers/{adviserId}/documents/{documentId}/object | Gets a single adviser document object | client_financial_data, documents, myprofile, openid | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | GetAdviserManagedDocument | GET | /v2/advisers/{adviserId}/documents/managed/{key} | Retrieve a managed document by key | client_financial_data, documents, myprofile, openid | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | GetClientDocument | GET | /v2/clients/{clientId}/documents/{documentId} | Returns a document for a given client and document. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| documents | GetClientDocumentObject | GET | /v2/clients/{clientId}/documents/{documentId}/object | Returns a file object for a given client and document. | client_financial_data, documents, myprofile, openid | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | GetDocument | GET | /v2/documents/{documentId} | Gets a single document by id | openid, myprofile, client_financial_data, documents | Yes | N/A | Public Swagger v2 |
| documents | GetDocumentConfiguration | GET | /v2/documents/configurations/{id} | Gets a storage configuration by id | client_financial_data, documents, myprofile, openid | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | GetDocumentObject | GET | /v2/documents/{documentId}/object | Gets a single document object | client_financial_data, documents, myprofile, openid | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | ListAdviserDocuments | GET | /v2/advisers/{adviserId}/documents | List all adviser documents | client_financial_data, documents, myprofile, openid | No | Monolith.Storage | Service Swagger + Documentation Ignore |
| documents | ListClientDocuments | GET | /v2/clients/{clientId}/documents | Returns a list of documents for a given client. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| documents | ListClientDocumentsByFolder | GET | /v2/clients/{clientId}/documentfolders/{documentFolderId}/documents | Returns a list of client documents for given folder. | openid, myprofile, client_financial_data, documents | Yes | N/A | Public Swagger v2 |
| documents | ListDocumentConfigurations | GET | /v2/documents/configurations | Gets list of storage configurations | client_financial_data, documents, myprofile, openid | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | MoveDocument | POST | /v2/documents/{documentId}/move | Moves the document object to target configuration. | client_financial_data, documents, myprofile, openid | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | SetDefaultDocumentConfiguration | POST | /v2/documents/configurations/{id}/default | Sets the default storage configuration | client_financial_data, documents, myprofile, openid | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | UpdateAdviserDocument | PUT | /v2/advisers/{adviserId}/documents/{documentId} | Updates the specified adviser document | client_financial_data, documents, myprofile, openid | No | Monolith.Storage | Service Swagger + Documentation Ignore |
| documents | UpdateAdviserDocumentObject | PUT | /v2/advisers/{adviserId}/documents/{documentId}/object | Uploads a file object associated with the specified adviser document | client_financial_data, documents, myprofile, openid | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | UpdateClientDocument | PUT | /v2/clients/{clientId}/documents/{documentId} | Updates a document for a given client and document. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| documents | UpdateClientDocumentObject | PUT | /v2/clients/{clientId}/documents/{documentId}/object | Updates a file object for a given client and document. | client_financial_data, documents, myprofile, openid | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | UpdateDocument | PUT | /v2/documents/{documentId} | Updates the specified document | client_financial_data, documents, myprofile, openid | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | UpdateDocumentConfiguration | PUT | /v2/documents/configurations/{id} | Updates a storage configuration | client_financial_data, documents, myprofile, openid | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| documents | UpdateDocumentObject | PUT | /v2/documents/{documentId}/object | Uploads a file object associated with the specified document | client_financial_data, documents, myprofile, openid | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| docusignenvelopes | DeleteEnvelope | DELETE | /v2/clients/docusign_envelopes/{envelopeId} | Delete eSignature Envelope | N/A | No | Microservice.DocuSign | Service Swagger (Microservice.DocuSign) |
| docusignenvelopes | GetDocuSignEnvelope | GET | /v2/clients/docusign_envelopes/{envelopeId} | Get eSignature Envelope | N/A | No | Microservice.DocuSign | Service Swagger (Microservice.DocuSign) |
| docusignenvelopes | SendESignatureEnvelope | POST | /v2/clients/docusign_envelopes | Send eSignature Envelope to the client | N/A | No | Microservice.DocuSign | Service Swagger (Microservice.DocuSign) |
| docusignenvelopes | UpdateDocuSignEnvelope | PUT | /v2/clients/{clientId}/docusign_envelopes/{envelopeId} | UpdateAsync eSignature Envelope | N/A | No | Microservice.DocuSign | Service Swagger (Microservice.DocuSign) |
| docusignevents | ProcessDocuSignEvent | POST | /v2/docusign_events |  | N/A | No | Microservice.DocuSign | Service Swagger (Microservice.DocuSign) |
| docusignfieldanchors | GetDocuSignFieldAnchors | GET | /v2/docusign_field_anchors | Gets list of field anchors | N/A | No | Microservice.DocuSign | Service Swagger (Microservice.DocuSign) |
| domains | ListDomains | GET | /v1/domains |  | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| download | GetOutputDownload | GET | /v1/output/{outputId}/download | Download generated document | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| download | GetPluginDownload | GET | /v1/plugin/download | Download plugin installer | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| download | GetReviewDownload | GET | /v1/reviews/{reviewId}/download | Download review document | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| download | GetTemplateDownload | GET | /v1/templates/{templateId}/download | Download the latest version of specified template | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| download | GetTemplateVersionDownload | GET | /v1/templates/{templateId}/versions/{versionId}/download | Download specified template version | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| dpa | CreateClientDpaPolicyAgreement | POST | /v2/clients/{clientId}/dpa_agreements | Creates a new DPA policy agreement for a client. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| dpa | CreateDPAPolicy | POST | /v2/dpa_policies | Creates a new DPA policy which will become the current DPA policy when created (see notes on party type above). | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| dpa | DeleteCurrentDPAPolicy | DELETE | /v2/dpa_policies/current | Deletes the current default DPA policy (see notes on party type above). | client_data, firm_data, myprofile, openid | No | Microservice.DPA | Service Swagger (Microservice.DPA) |
| dpa | DeleteDPAPolicy | DELETE | /v2/dpa_policies/{policyId} | Deletes an existing DPA policy. Only policies that are not associated with client agreements can be deleted. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| dpa | GetClientDpaPolicyAgreement | GET | /v2/clients/{clientId}/dpa_agreements/{agreementId} | Returns a single DPA policy agreement for a client. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| dpa | GetCurrentDPAPolicy | GET | /v2/dpa_policies/current | Returns the current default DPA policy (see notes on party type above). | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| dpa | GetDpaPolicy | GET | /v2/dpa_policies/{policyId} | Returns a single DPA policy. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| dpa | ListClientDpaPolicyAgreements | GET | /v2/clients/{clientId}/dpa_agreements | Returns a list of client's DPA policy agreements. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| dpa | ListDpaPolicies | GET | /v2/dpa_policies | Returns a list of DPA policies. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| dpa | PatchCurrentDPAPolicy | PATCH | /v2/dpa_policies/current | Updates the current default DPA policy (see notes on party type above). | client_data, firm_data, myprofile, openid | No | Microservice.DPA | Service Swagger (Microservice.DPA) |
| dpa | PatchDPAPolicy | PATCH | /v2/dpa_policies/{policyId} | Updates an existing DPA policy. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| dpa | UpdateCurrentDPAPolicy | PUT | /v2/dpa_policies/current | Updates the current DPA policy (see notes on party type above). | client_data, firm_data, myprofile, openid | No | Microservice.DPA | Service Swagger (Microservice.DPA) |
| dpa | UpdateDPAPolicy | PUT | /v2/dpa_policies/{policyId} | Updates an existing DPA policy. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| draft | GetMessageDraft | GET | /v1/messages/{secureMessageId}/draft | Get a draft message for specific secure message by id. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| email | ListTemplatelayoutsEmail | GET | /v1/templatelayouts/email |  | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| emailerrorlog | GetBccErrorLog | GET | /v2/emailerrorlog/{errorLogId} | Returns a EntityDocument. | N/A | No | Monolith.Bcc | Service Swagger (Monolith.Bcc) |
| emailerrorlog | ListBccErrorLogs | GET | /v2/emailerrorlog | Returns an EmailErrorLog collection. | N/A | No | Monolith.Bcc | Service Swagger (Monolith.Bcc) |
| emails | CreateClientEmail | POST | /v1/clients/{clientId}/emails |  | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| emails | CreateEmail | POST | /v2/activities/emails | Creates an email. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| emails | CreateUserEmail | POST | /v2/users/{userId}/emails | Creates an email for given user You can add a x-email-template-hint header to specify which email template branding to be used. ie. io or pfp. io is default if not specified. | N/A | No | Microservice.Membership | Service Swagger (Microservice.Membership) |
| emails | CreateUserEmailMakeprimary | POST | /v2/users/{userId}/emails/{emailId}/makeprimary | Sends a message to make the given email as primary for a given user. | N/A | No | Microservice.Membership | Service Swagger (Microservice.Membership) |
| emails | CreateUserEmailVerify | POST | /v2/users/{userId}/emails/{emailId}/verify | Sends email verification for a given user (currently does not invalidates previous requests). You can add a x-email-template-hint header to specify which email template branding to be used. ie. io o | N/A | No | Microservice.Membership | Service Swagger (Microservice.Membership) |
| emails | DeleteEmail | DELETE | /v2/activities/emails/{emailId} | Deletes a given email. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| emails | DeleteUserEmail | DELETE | /v2/users/{userId}/emails/{emailId} | Deletes an email for a given user. | N/A | No | Microservice.Membership | Service Swagger (Microservice.Membership) |
| emails | GetClientEmail | GET | /v1/clients/{clientId}/emails/{emailId} |  | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| emails | GetEmail | GET | /v2/activities/emails/{emailId} | Returns a given email. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| emails | GetUserEmail | GET | /v2/users/{userId}/emails/{emailId} | Returns an email for given user. | N/A | No | Microservice.Membership | Service Swagger (Microservice.Membership) |
| emails | ListEmails | GET | /v2/activities/emails | Returns a list of emails. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| emails | ListUserEmails | GET | /v2/users/{userId}/emails | Returns a list of emails for given user. | N/A | No | Microservice.Membership | Service Swagger (Microservice.Membership) |
| emails | UpdateClientEmail | PUT | /v1/clients/{clientId}/emails/{emailId} |  | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| emails | UpdateEmail | PUT | /v2/activities/emails/{emailId} | Updates a given email. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| emailtemplatefields | GetEmailtemplatefield | GET | /v1/emailtemplatefields |  | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| employments | CreateClientEmployment | POST | /v2/clients/{clientId}/employments | Create an employment for a given client. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| employments | DeleteClientEmployment | DELETE | /v2/clients/{clientId}/employments/{employmentId} | Deletes a given employment. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| employments | GetClientEmployment | GET | /v2/clients/{clientId}/employments/{employmentId} | Get an employment for a given client. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| employments | ListClientEmployments | GET | /v2/clients/{clientId}/employments | Get a list of employments for a given client. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| employments | UpdateClientEmployment | PUT | /v2/clients/{clientId}/employments/{employmentId} | Updates an employment for a given client. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| entitlement | CreateIPAddress | POST | /v2/tenants/{tenantId}/IPAddress |  | N/A | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | CreateRole | POST | /v2/roles | Creates a role. | N/A | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | CreateRoleOperation | POST | /v2/roles/{roleId}/operations/{operationId} | Creates a role operation. | N/A | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | CreateUserDetail | POST | /v2/users | Creates a user. | N/A | No | Monolith.Entitlement | Service Swagger + Documentation Ignore |
| entitlement | CreateUserGroup | POST | /v2/users/{userId}/groups | Associate a user to a group. | N/A | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | CreateUserRole | POST | /v2/users/{userId}/roles/{roleId} | Associates a user to a role. | N/A | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | DeleteIPAddress | DELETE | /v2/tenants/{tenantId}/IPAddress/{ipAddressId} | Deletes a IP Address. | N/A | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | DeleteRoleOperation | DELETE | /v2/roles/{roleId}/operations/{operationId} | Deletes a role operation. | N/A | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | DeleteUserGroup | DELETE | /v2/users/{userId}/groups/{userGroupId} | Deletes a user group association. | N/A | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | DeleteUserRole | DELETE | /v2/users/{userId}/roles/{roleId} | Deletes a user role. | N/A | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | ExistsUserDetails | HEAD | /v2/users/{userId} | Checks that user exists. | N/A | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | ExistsUserRole | HEAD | /v2/users/{userId}/roles/{roleId} | Checks that a user role exists. | N/A | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | GetOperation | GET | /v2/{application}/operations/{operationId} | Returns an operation for a given application. | N/A | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | GetRole | GET | /v2/roles/{roleId} | Returns a role. | N/A | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | GetTenantLicence | GET | /v2/tenants/{tenantId}/licence | Returns tenant licence. | N/A | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | GetTenantSupport | GET | /v2/tenants/{tenantId}/support | Returns an tenant support entity for a given tenant id. | N/A | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | GetUserDetail | GET | /v2/users/{userId} | Returns a user. | N/A | No | Monolith.Entitlement | Service Swagger + Documentation Ignore |
| entitlement | GetUserGroup | GET | /v2/users/{userId}/groups/{userGroupId} | Returns a user group association. | N/A | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | GetUserRole | GET | /v2/users/{userId}/roles/{roleId} | Returns a user role. | N/A | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | ListDelegates | GET | /v2/delegate | Lists delegates for a user. | N/A | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | ListOperations | GET | /v2/{application}/operations | Returns a list of operations for a given application. | N/A | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | ListRoleOperations | GET | /v2/roles/{roleId}/operations | Returns a list of role operations. | N/A | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | ListRoles | GET | /v2/roles | Returns a list of roles. | N/A | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | ListTenantLegacyAppLicences | GET | /v2/tenants/{tenantId}/LegacyApplicences | Returns tenant application licences. | N/A | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | ListTenantPreferenceDetails | GET | /v2/tenants/{tenantId}/preferences | Returns a list of tenant preference details. | N/A | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | ListUserGroups | GET | /v2/users/{userId}/groups | Returns a list of user groups. | N/A | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | ListUserRoles | GET | /v2/users/{userId}/roles | Returns a list of user roles. | N/A | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | SetAsCurrentUserRole | POST | /v2/users/{userId}/roles/{roleId}/current | Sets the given role to be the user's current/default role. | N/A | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | UpdateRole | PUT | /v2/roles/{roleId} | Updates a role. | N/A | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | UpdateTenantPreferenceDetail | PUT | /v2/tenants/{tenantId}/preferences/{name} | Update tenant preference detail information. | N/A | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | UpdateTenantSupport | PUT | /v2/tenants/{tenantId}/support | Update tenant support information. | N/A | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | UpdateUserDetail | PUT | /v2/users/{userId} | Updates a user. | N/A | No | Monolith.Entitlement | Service Swagger + Documentation Ignore |
| entitlement | UpdateUsername | PUT | /v2/users/{userId}/username | Updates username. | N/A | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | UpdateUserStatus | PUT | /v2/users/{userId}/status | Updates user status. | N/A | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement | ValidateDelegate | HEAD | /v2/delegate/{delegateGuid}/validate | Validates if a delegate is valid for a subject. | N/A | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement, beta | ListIPAddresses | GET | /v2/tenants/{tenantId}/IPAddress |  | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement, beta | ListSupportIPAddresses | GET | /v2/support/IPAddress | Returns a list of support IP addresses. | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement, beta | ListUserActivity | GET | /v2/users/{userId}/activity | Returns a list of user activities. | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| entitlement, beta | ListUsers | GET | /v2/users | Deprecated: Get a list of users. Some specific filtering is optionally supported The following fields are supported for equals (eq) operator username, email, status and lastLoginAt The following fi | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| entitlement, beta | ListUsersDetails | GET | /v2/users | Returns a list of users. | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Monolith.Entitlement | Service Swagger + Documentation Ignore |
| etfs | DeleteEtf | DELETE | /v2/etfs/{securityId} | Delete an ETF Security based on Security Id. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| etfs | GetEtf | GET | /v2/etfs/{securityId} | Get an ETF Security based on Security Id. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| etfs | ListEtfs | GET | /v2/etfs | Get a List of ETF Securities based on Security Ids. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| etfs | PostEtfs | POST | /v2/etfs | Create ETF Securities. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| etfs | PutEtfs | PUT | /v2/etfs | Update ETF Securities. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| exchanges | GetExchange | GET | /v2/exchanges/{exchangeCode} | Get an Exchange based on Exchange Code. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| exchanges | ListExchanges | GET | /v2/exchanges | List Exchanges based on Exchange Codes. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| execute | CreateCampaignExecute | POST | /v1/campaigns/{campaignId}/execute | Initiate a specified campaign | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| expectation | ExpectationAdjustmentRequest | POST | /v2/expectations/{expectationId}/adjust | Creates a new expectation adjustment for a given expectation. | N/A | No | Microservice.Expectation | Service Swagger (Microservice.Expectation) |
| expectation | ExpectationBreakdownExists | HEAD | /v2/expectations/{expectationId}/breakdowns/{expectationBreakdownId} | Checks that an expectation breakdown record exists. | N/A | No | Microservice.Expectation | Service Swagger (Microservice.Expectation) |
| expectation | ExpectationBreakdownExistsForClient | HEAD | /v2/clients/{clientId}/expectations/{expectationId}/breakdowns/{expectationBreakdownId} | Checks that an expectation breakdown record exists. | N/A | No | Microservice.Expectation | Service Swagger (Microservice.Expectation) |
| expectation | ExpectationExists | HEAD | /v2/expectations/{expectationId} | Checks that an expectation record exists. | N/A | No | Microservice.Expectation | Service Swagger (Microservice.Expectation) |
| expectation | GetConfiguration | GET | /v2/expectations/configuration | Returns a tenant's configuration settings for expectations | N/A | No | Microservice.Expectation | Service Swagger (Microservice.Expectation) |
| expectation | GetExpectation | GET | /v2/expectations/{expectationId} | Returns a single expectation. | N/A | No | Microservice.Expectation | Service Swagger (Microservice.Expectation) |
| expectation | GetExpectationBreakdown | GET | /v2/expectations/{expectationId}/breakdowns/{expectationBreakdownId} | Returns a single expectation breakdown. | N/A | No | Microservice.Expectation | Service Swagger (Microservice.Expectation) |
| expectation | GetExpectationBreakdownByClient | GET | /v2/clients/{clientId}/expectations/{expectationId}/breakdowns/{expectationBreakdownId} | Returns a list of expectation breakdowns related to an expectation. | N/A | No | Microservice.Expectation | Service Swagger (Microservice.Expectation) |
| expectation | ListClientExpectationsSummary | GET | /v2/clients/{clientId}/expectations/aggregate | Aggregates expectations by fee, commission and plan. | N/A | No | Microservice.Expectation | Service Swagger (Microservice.Expectation) |
| expectation | ListExpectationBreakdowns | GET | /v2/expectations/{expectationId}/breakdowns | Returns a list of expectation breakdowns related to an expectation. | N/A | No | Microservice.Expectation | Service Swagger (Microservice.Expectation) |
| expectation | ListExpectationBreakdownsByClient | GET | /v2/clients/{clientId}/expectations/{expectationId}/breakdowns | Returns a list of expectation breakdowns related to an expectation. | N/A | No | Microservice.Expectation | Service Swagger (Microservice.Expectation) |
| expectation | ListExpectations | GET | /v2/expectations | Returns a list of expectations. | N/A | No | Microservice.Expectation | Service Swagger (Microservice.Expectation) |
| expectation | SetConfiguration | PUT | /v2/expectations/configuration | Creates or Updates a tenant's configuration settings for expectations | N/A | No | Microservice.Expectation | Service Swagger (Microservice.Expectation) |
| expenditures | CreateExpenditureCategoryGroup | POST | /v2/expenditures/refdata/categorygroups | Creates a new Expenditure Category Group. | client_financial_data, myprofile, openid | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| expenditures | DeleteExpenditureCategoryGroup | DELETE | /v2/expenditures/refdata/categorygroups/{categoryGroupId} | Deletes Expenditure Category Group. | client_financial_data, myprofile, openid | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| expenditures | ListExpenditureCategories | GET | /v2/expenditures/refdata/categories | Retrieves List of all/matched categories based on the filter provided. | client_financial_data, myprofile, openid | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| expenditures | ListExpenditureCategoryGroups | GET | /v2/expenditures/refdata/categorygroups | Returns a list of expenditure category groups. | client_financial_data, myprofile, openid | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| expenditures | UpdateExpenditureCategoryGroup | PUT | /v2/expenditures/refdata/categorygroups/{categoryGroupId} | Updates an existing Expenditure Category Group. | client_financial_data, myprofile, openid | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| expenditures, beta | CreateClientExpenditure | POST | /v2/clients/{clientId}/expenditures | Creates an expenditure record for a client. | openid, myprofile, client_financial_data | Yes | Monolith.FactFind | Public Swagger v2 + GitHub Monolith.FactFind |
| expenditures, beta | CreateContributionExpenditure | POST | /v2/clients/{clientId}/plans/{planId}/contributions/{contributionId}/expenditures | Creates a client expenditure record linked to a plan contribution record. | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| expenditures, beta | DeleteClientExpenditure | DELETE | /v2/clients/{clientId}/expenditures/{expenditureId} | Deletes a client's expenditure record. | openid, myprofile, client_financial_data | Yes | Monolith.FactFind | Public Swagger v2 + GitHub Monolith.FactFind |
| expenditures, beta | GetClientExpenditure | GET | /v2/clients/{clientId}/expenditures/{expenditureId} | Retrieves a client's expenditure record. | openid, myprofile, client_financial_data | Yes | Monolith.FactFind | Public Swagger v2 + GitHub Monolith.FactFind |
| expenditures, beta | ListClientExpenditures | GET | /v2/clients/{clientId}/expenditures | Returns a list of expenditure records for a client. The returned list may be filtered. | openid, myprofile, client_financial_data | Yes | Monolith.FactFind | Public Swagger v2 + GitHub Monolith.FactFind |
| expenditures, beta | UpdateClientExpenditure | PUT | /v2/clients/{clientId}/expenditures/{expenditureId} | Updates a client's expenditure record. | openid, myprofile, client_financial_data | Yes | Monolith.FactFind | Public Swagger v2 + GitHub Monolith.FactFind |
| federation_settings | CreateFederationSettings | PUT | /v2/federation_settings/{domain} | Creates or updates federation settings. | N/A | No | Microservice.Identity | Service Swagger (Microservice.Identity) |
| federation_settings | DeleteFederationSettings | DELETE | /v2/federation_settings/{domain} | Delete federation settings for domain | N/A | No | Microservice.Identity | Service Swagger (Microservice.Identity) |
| feemodels | GetFeeModel | GET | /v2/feemodels/{feeModelId} | Get fee model by id. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| feemodels | ListFeeModels | GET | /v2/feemodels | Returns a list of fee models. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| feemodeltemplates | GetFeeModelTemplate | GET | /v2/templates/{templateId} | Allows an api consumer to retrieve a single fee model template by id. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| fees | CreateClientFees | POST | /v2/clients/{clientId}/fees | Create client fee. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| fees | CreateClientPlanFee | POST | /v2/clients/{clientId}/plans/{planId}/fees/{feeId} | Links an existing Fee to the given Plan. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| fees | DeleteClientFee | DELETE | /v2/clients/{clientId}/fees/{feeId} | Deletes the fee. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| fees | DeleteClientPlanFee | DELETE | /v2/clients/{clientId}/plans/{planId}/fees/{feeId} | Removes the link between the Fee and the plan, does not delete the actual Fee. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| fees | GetClientFee | GET | /v2/clients/{clientId}/fees/{feeId} | Get client fee by id. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| fees | GetClientPlanFee | GET | /v2/clients/{clientId}/plans/{planId}/fees/{feeId} | Gets a Fee for the given plan. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| fees | GetFee | GET | /v2/fees/{feeId} | Get fee by id. | openid, myprofile, firm_data, firm_data.fee | Yes | N/A | Public Swagger v2 |
| fees | GetPlanFees | GET | /v2/plans/{planId}/fees | Gets a collection of fee linked to the given plan. | client_financial_data, firm_data, firm_data.fee, myprofile, openid | No | Monolith.Charging | Service Swagger (Monolith.Charging) |
| fees | ListClientFees | GET | /v2/clients/{clientId}/fees | Returns a list of fees for a client. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| fees | ListClientPlanFees | GET | /v2/clients/{clientId}/plans/{planId}/fees | Gets a collection of fee linked to the given plan. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| fees | ListFee | GET | /v2/fees | Returns a list of fees. | openid, myprofile, firm_data, firm_data.fee | Yes | N/A | Public Swagger v2 |
| fees | UpdateClientFee | PUT | /v2/clients/{clientId}/fees/{feeId} | Update client fee. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| fees | UpdateClientFeeDates | PATCH | /v2/clients/{clientId}/fees/{feeId} | Update client fee dates. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| fees | UpdatePlanFees | PUT | /v2/clients/{clientId}/plans/{planId}/fees | Replaces all plan fees | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| financialprofile | GetClientFinancialProfile | GET | /v2/clients/{clientId}/financialProfile | Gets financial profile for a given client. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| financialprofile | PatchClientFinancialProfile | PATCH | /v2/clients/{clientId}/financialProfile | Patch client's financial profile. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| financialprofile | UpdateClientFinancialProfile | PUT | /v2/clients/{clientId}/financialProfile | Updates client's financial profile. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| financialsummarybycategory | GetClientFinancialSummaryByCategory | GET | /v2/clients/{clientId}/financialsummarybycategory | Allows an API consumer to get a client portfolio information and totals grouped by categories. | N/A | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| fixedincomes | DeleteFixedIncome | DELETE | /v2/fixedincomes/{securityId} | Delete a Fixed Income Security based on Security Id. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| fixedincomes | GetFixedIncome | GET | /v2/fixedincomes/{securityId} | Get a Fixed Income Security based on Security Id. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| fixedincomes | ListFixedIncomes | GET | /v2/fixedincomes | Get a List of Fixed Income Securities based on Security Id. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| fixedincomes | PostFixedIncomes | POST | /v2/fixedincomes | Create a Fixed Income Securities. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| fixedincomes | PutFixedIncomes | PUT | /v2/fixedincomes | Update Fixed Income Securities. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| folder | GetQuicksightSharedFolder | GET | /v2/quicksight/folders/{folderId} | Gets a quicksight folder. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| folder | ListQuicksightSharedFolder | GET | /v2/quicksight/folders | Gets a collection of folders. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| folderpermission | DeleteQuicksightSharedFolderPermission | DELETE | /v2/quicksight/folders/{folderId}/permissions | Deletes permission for quicksight shared folder to specified user or group | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| folderpermission | ListQuicksightSharedFolderPermission | GET | /v2/quicksight/folders/{folderId}/permissions | Lists permissions for quicksight shared folder | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| folderpermission | UpdateQuicksightSharedFolderPermission | PUT | /v2/quicksight/folders/{folderId}/permissions | Adds permission for quicksight shared folder to specified user or group | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| forecasts | CreateForecast | POST | /v2/forecasts |  | N/A | No | Microservice.CashflowEngine | Service Swagger (Microservice.CashflowEngine) |
| formats | ListPluginsFormats | GET | /v1/plugin/formats | Get formatting configuration | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| forwardincometo | ForwardIncomeToOperation | POST | /v2/advisers/{adviserId}/forwardincometo | Creates a new event to indicate that income should be forwarded to a different adviser. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| fundbenchmarks | GetFundBenchmark | GET | /v2/fundbenchmarks/{fundBenchmarkId} | Returns a fund benchmark by the given fundBenchmarkId. | N/A | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| fundbenchmarks | ListFundBenchmarks | GET | /v2/fundbenchmarks | Returns a list of funds benchmarks. | N/A | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| fundholdingtimeseries | GetFundHoldingTimeSeries | GET | /clients/{clientId}/plans/{planId}/holdings/{holdingId}/timeseries | Returns up to three years of fund holding time series for a given client and plan. | openid, myprofile, fund_data | Yes | N/A | Public Swagger v2 |
| fundingsource | CreateFundingSource | POST | /v2/clients/{clientId}/servicecases/{serviceCaseId}/fundingsources | Allows an API consumer to create a funding source for the client in context. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| fundingsource | DeleteFundingSource | DELETE | /v2/clients/{clientId}/servicecases/{serviceCaseId}/fundingsources/{fundingSourceId} | Allows an API consumer to delete a funding source for the client in context. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| fundingsource | GetFundingSource | GET | /v2/clients/{clientId}/servicecases/{serviceCaseId}/fundingsources/{fundingSourceId} | Allows an API consumer to retrieve a single funding source. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| fundingsource | ListAdviceReferenceData | GET | /v2/advice/referencedata | Allows an API consumer to retrieve advice reference data. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| fundingsource | ListFundingSource | GET | /v2/clients/{clientId}/servicecases/{serviceCaseId}/fundingsources | Allows an API consumer to retrieve a funding source list. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| fundingsource | UpdateFundingSource | PUT | /v2/clients/{clientId}/servicecases/{serviceCaseId}/fundingsources/{fundingSourceId} | Allows an API consumer to update a funding source for the client in context. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| fundprices | ListFundPrices | GET | /v2/funds/{fundId}/prices | Returns a list of fund prices for a given fund. | openid, myprofile, fund_data | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Monolith.Portfolio |
| fundprices | ListFundsPrices | GET | /v2/funds/prices | Returns a list of funds prices | fund_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| fundproposal | DeleteClientPlanFundproposal | DELETE | /v2/clients/{clientId}/plans/{planId}/fundproposal | Deletes fund proposals from holdings for a given client and plan. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| fundproposal | GetClientPlanFundproposal | GET | /v2/clients/{clientId}/plans/{planId}/fundproposal | Returns a fund proposals from holidings for a given client and plan. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| fundproposal | UpdateClientPlanFundproposal | PUT | /v2/clients/{clientId}/plans/{planId}/fundproposal | Updates or creates a fund proposal for a given client and plan. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| fundproviders | FundProviderExists | HEAD | /v2/fundproviders/{code} | Check whether a fund provider exists by its code or not | fund_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| fundproviders | GetFundprovider | GET | /v2/fundproviders/{code} | Returns fund providers for a given code. | openid, myprofile, fund_data | Yes | N/A | Public Swagger v2 |
| fundproviders | ListFundproviders | GET | /v2/fundproviders | Returns a list of fund providers. | openid, myprofile, fund_data | Yes | N/A | Public Swagger v2 |
| funds | CreateFund | POST | /v2/funds | Creates a non-feed fund. | openid, myprofile, fund_data | Yes | N/A | Public Swagger v2 |
| funds | DeleteFund | DELETE | /v2/funds/{securityId} | Delete a Fund Security based on Security Id. | fund_data, myprofile, openid | No | Microservice.Security | Service Swagger (Microservice.Security) |
| funds | GetFund | GET | /v2/funds/{fundId} | Returns a fund/equity for a given fundId/equityId. | openid, myprofile, fund_data | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Monolith.Portfolio |
| funds | ListFunds | GET | /v2/funds | Returns a list of funds (feed and non-feed funds) and equities. | openid, myprofile, fund_data | Yes | N/A | Public Swagger v2 |
| funds | PostFunds | POST | /v2/funds | Create Fund Securities. | fund_data, myprofile, openid | No | Microservice.Security | Service Swagger (Microservice.Security) |
| funds | PutFunds | PUT | /v2/funds | Update Fund Securities. | fund_data, myprofile, openid | No | Microservice.Security | Service Swagger (Microservice.Security) |
| funds | UpdateFund | PUT | /v2/funds/{fundId} | Updates a non-feed fund for a given fund. | openid, myprofile, fund_data | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Monolith.Portfolio |
| fundsectors | GetFundsector | GET | /v2/fundsectors/{code} | Returns fund sectors for a given fund code. | openid, myprofile, fund_data | Yes | N/A | Public Swagger v2 |
| fundsectors | ListFundsectors | GET | /v2/fundsectors | Returns a list of fund sectors. | openid, myprofile, fund_data | Yes | N/A | Public Swagger v2 |
| fundtransactions | GetClientPlanHoldingTransaction | GET | /v2/clients/{clientId}/plans/{planId}/holdings/{holdingId}/transactions/{transactionId} | Returns a fund holdings transaction for a given client, plan, holding and transaction. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| fundtransactions | ListClientPlanHoldingTransactions | GET | /v2/clients/{clientId}/plans/{planId}/holdings/{holdingId}/transactions | Returns a list of fund holdings transactions for a given client, plan and holding. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| generate | CreateTemplateGenerate | POST | /v1/templates/{templateId}/generate | Generate a document for a specified template using supplied criteria | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| generate | CreateTemplateVersionGenerate | POST | /v1/templates/{templateId}/versions/{versionId}/generate | Generate a document for a specified template version using supplied criteria | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| getadditionalquestions | GetAdditionalQuestions | POST | /v2/providers/{providerId}/getadditionalquestions |  | N/A | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| goalprojections | CreateGoalprojection | POST | /v2/goalprojections |  | N/A | No | Microservice.CashflowEngine | Service Swagger (Microservice.CashflowEngine) |
| groups | CreateGroup | POST | /v2/groups | Creates a group. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| groups | GetGroup | GET | /v2/groups/{groupId} | Returns the given group. | N/A | No | Monolith.Crm | Service Swagger + Documentation Ignore |
| groups | GetGroupLineage | GET | /v2/groups/{groupId}/lineage | Returns a given group lineage. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| groups | GroupExists | HEAD | /v2/groups/{groupId} | Checks a given group exists. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| groups | ListGroups | GET | /v2/groups | Returns a list of groups. | N/A | No | Monolith.Crm | Service Swagger + Documentation Ignore |
| groups | UpdateGroup | PUT | /v2/groups/{groupId} | Updates a given group. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| groups | UpdateGroupParent | POST | /v2/groups/{groupId}/changeParent | Updates the parent group for a group. System reach only. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| history | ListInstancesHistory | GET | /v1/instances/{instanceId}/history |  | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| holdings | CreatePlanHoldings | POST | /v2/clients/{clientId}/plans/{planId}/holdings | Creates fund holdings for a given client and plan. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| holdings | GetClientPlanHolding | GET | /v2/clients/{clientId}/plans/{planId}/holdings/{holdingId} | Returns a fund holding for a given client, plan and holding. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| holdings | ListClientPlanHoldings | GET | /v2/clients/{clientId}/plans/{planId}/holdings | Returns a list of fund holdings for a given client and plan. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| holdings | ListClientsHoldings | GET | /v2/clients/{clientId}/holdings | Returns a list of plan's fund holdings across client plans. | client_financial_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger + Documentation Ignore |
| holdings | UpdateClientPlanHolding | PUT | /v2/clients/{clientId}/plans/{planId}/holdings/{holdingId} | Updates a fund holding for a given client, plan and holding. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| households | CreateHousehold | POST | /v2/households | Creates a household. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| households | CreateHouseholdGrouping | POST | /v2/households/{householdId}/groupings | Creates a household grouping. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| households | DeleteHousehold | DELETE | /v2/households/{householdId} | Deletes a household. Any clients associated with the household are not deleted. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| households | DeleteHouseholdGrouping | DELETE | /v2/households/{householdId}/groupings/{householdGroupingId} | Deletes a household grouping. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| households | GetHousehold | GET | /v2/households/{householdId} | Retrieves a given household's details. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| households | GetHouseholdGrouping | GET | /v2/households/{householdId}/groupings/{householdGroupingId} | Retrieves a given household grouping's details. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| households | HouseholdExists | HEAD | /v2/households/{householdId} | Determines if a given household exists or not. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| households | ListHouseholds | GET | /v2/households | Retrieves a list of households. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| households | ListHouseholdTags | GET | /v2/households/tags | Retrieves a list of the tags associated with households. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| households | PatchHousehold | PATCH | /v2/households/{householdId} | Patches an existing household's details. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| households | UpdateHousehold | PUT | /v2/households/{householdId} | Updates a household's details. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| identities | ListIdentities | GET | /v1/identities |  | N/A | No | Microservice.Email | Service Swagger (Microservice.Email) |
| illustrations | CreateIllustration | POST | /v2/illustrations |  | N/A | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| illustrations | CreateIllustration2 | POST | /v2/illustrations2 |  | N/A | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| illustrations | GenerateQuoteIllustration | POST | /v2/quotes/illustrations/generate |  | N/A | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| illustrations | PatchIllustrationStatus | PATCH | /v2/illustrations/{illustrationId} |  | N/A | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| image | CreateAuthorImage | POST | /v2/author/image |  | N/A | No | Monolith.AuthorDataProvider | Service Swagger (Monolith.AuthorDataProvider) |
| incomes, beta | CreateClientIncome | POST | /v2/clients/{clientId}/incomes | Creates an income record for a client. | openid, myprofile, client_financial_data | Yes | Monolith.FactFind | Public Swagger v2 + GitHub Monolith.FactFind |
| incomes, beta | CreateClientPlanWithdrawalIncome | POST | /v2/clients/{clientId}/plans/{planId}/withdrawals/{withdrawalId}/incomes | Create a withdrawal income for a client. | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| incomes, beta | DeleteClientIncome | DELETE | /v2/clients/{clientId}/incomes/{incomeId} | Deletes a client's income record. | openid, myprofile, client_financial_data | Yes | Monolith.FactFind | Public Swagger v2 + GitHub Monolith.FactFind |
| incomes, beta | GetClientIncome | GET | /v2/clients/{clientId}/incomes/{incomeId} | Returns the income for a given client and income. | openid, myprofile, client_financial_data | Yes | Monolith.FactFind | Public Swagger v2 + GitHub Monolith.FactFind |
| incomes, beta | ListClientIncomes | GET | /v2/clients/{clientId}/incomes | Returns a list of incomes for a given client. | openid, myprofile, client_financial_data | Yes | Monolith.FactFind | Public Swagger v2 + GitHub Monolith.FactFind |
| incomes, beta | UpdateClientIncome | PUT | /v2/clients/{clientId}/incomes/{incomeId} | Updates a client's income record. | openid, myprofile, client_financial_data | Yes | Monolith.FactFind | Public Swagger v2 + GitHub Monolith.FactFind |
| incomestatements, beta | CreateIncomeStatement | POST | /v2/incomestatements | Creates a new income statement. | openid, myprofile, firm_data.incomestatements | Yes | N/A | Public Swagger v2 |
| incomestatements, beta | CreateIncomeStatementItems | POST | /v2/incomestatements/{incomeStatementId}/items | Creates income statement items for an income statement. | openid, myprofile, firm_data.incomestatements | Yes | N/A | Public Swagger v2 |
| incomestatements, beta | DeleteIncomeStatement | DELETE | /v2/incomestatements/{incomeStatementId} | Deletes an existing income statement. | openid, myprofile, firm_data.incomestatements | Yes | N/A | Public Swagger v2 |
| incomestatements, beta | GetIncomeStatement | GET | /v2/incomestatements/{incomeStatementId} | Returns an income statement. | openid, myprofile, firm_data.incomestatements | Yes | N/A | Public Swagger v2 |
| incomestatements, beta | GetIncomeStatementItem | GET | /v2/incomestatements/{incomeStatementId}/items/{incomeStatementItemId} | Returns a given item for a given income statement. | openid, myprofile, firm_data.incomestatements | Yes | N/A | Public Swagger v2 |
| incomestatements, beta | ListIncomeStatementItems | GET | /v2/incomestatements/{incomeStatementId}/items | Returns a list of items for a given income statement. | openid, myprofile, firm_data.incomestatements | Yes | N/A | Public Swagger v2 |
| incomestatements, beta | ListIncomeStatements | GET | /v2/incomestatements | Returns a list of income statements. | openid, myprofile, firm_data.incomestatements | Yes | N/A | Public Swagger v2 |
| incomestatements, beta | UpdateIncomeStatement | PUT | /v2/incomestatements/{incomeStatementId} | Updates an income statement. | openid, myprofile, firm_data.incomestatements | Yes | N/A | Public Swagger v2 |
| incomestatements, beta | UpdateIncomeStatementItem | PUT | /v2/incomestatements/{incomeStatementId}/items/{incomeStatementItemId} | Updates an income statement item for a given income statement. | openid, myprofile, firm_data.incomestatements | Yes | N/A | Public Swagger v2 |
| initialise | GetTemplateInitialise | GET | /v1/templates/{templateId}/initialise | Initialise workflow service for specified template | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| insights | CreateClientInsight | POST | /v2/clients/{clientId}/insights | Create a Client Insight. | N/A | No | Microservice.Insight | Service Swagger + Documentation Ignore |
| insights | GetClientInsights | GET | /v2/clients/{clientId}/insights | Returns a list of the insights associated with the client. | N/A | No | Microservice.Insight | Service Swagger + Documentation Ignore |
| instances | CreateInstance | POST | /v1/migrate/instances/{instanceId} |  | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| instances | GetInstance | GET | /v1/instances/{instanceId} |  | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| instances | ListInstances | GET | /v1/instances |  | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| instances | ListMigratesInstances | GET | /v1/migrate/instances |  | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| instancesteps | ListMigratesInstancesteps | GET | /v1/migrate/instancesteps |  | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| introducerpaymentrules | GetIntroducerPaymentRule | GET | /v2/introducerpaymentrules/{introducerPaymentRuleId} | Returns an Introducer Payment Rule. | openid, myprofile, firm_data, firm_data.introducerpaymentrules | Yes | N/A | Public Swagger v2 |
| introducerpaymentrules | IntroducerPaymentRuleExists | HEAD | /v2/introducerpaymentrules/{introducerPaymentRuleId} | Checks that the introducer payment rules exists. | openid, myprofile, firm_data, firm_data.introducerpaymentrules | Yes | N/A | Public Swagger v2 |
| introducerpaymentrules | ListIntroducerPaymentRules | GET | /v2/introducerpaymentrules | Returns a collection of introducer payment rules. | openid, myprofile, firm_data, firm_data.introducerpaymentrules | Yes | N/A | Public Swagger v2 |
| introducers | GetIntroducer | GET | /v2/introducers/{introducerId} | Returns an introducer. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| introducers | IntroducerExists | HEAD | /v2/introducers/{introducerId} | Checks that the introducer exists. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| introducers | ListIntroducers | GET | /v2/introducers | Returns a list of introducers. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| investmentpreference | GetClientInvestmentPreference | GET | /v2/clients/{clientId}/servicecases/{serviceCaseId}/InvestmentPreferences | Allows an API consumer to retrieve a client investment preference for service case. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| investmentpreference | UpdateClientInvestmentPreference | PUT | /v2/clients/{clientId}/servicecases/{serviceCaseId}/InvestmentPreferences | Links a InvestmentPreference to a service case. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| investmentpreferencequestion | CreateInvestmentPreferenceQuestion | POST | /v2/investmentpreferences/questions | Create investment preference question. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| investmentpreferencequestion | GetInvestmentPreferenceQuestion | GET | /v2/investmentpreferences/questions/{questionId} | Get investment preference question. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| investmentpreferencequestion | ListInvestmentPreferenceQuestions | GET | /v2/investmentpreferences/questions | List investment preference questions | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| investmentpreferencequestion | UpdateInvestmentPreferenceQuestion | PUT | /v2/investmentpreferences/questions/{questionId} | Update investment preference question | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| issuers | DeleteIssuer | DELETE | /v2/issuers/{issuerId} | Delete an Issuer based on Issuer Id. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| issuers | GetIssuer | GET | /v2/issuers/{issuerId} | Get an Issuer based on Issuer Id. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| issuers | ListIssuers | GET | /v2/issuers | Get a List of Issuers based on Issuer Ids or Security Group Id. At least 1 search criteria must be populated. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| issuers | ListIssuersByIds | GET | /v2/issuers/byids | Get a List of Issuers based on Issuer Ids. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| issuers | ListIssuersBySourceReferences | GET | /v2/issuers/bysourcereferences | Get a Source Reference based on Source and Source Reference Id. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| issuers | PostIssuers | POST | /v2/issuers | Create an Issuer. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| issuers | PutIssuers | PUT | /v2/issuers | Update an Issuer | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| journeytypes | GetJourneyType | GET | /v2/advice/journeytypes/{journeyTypeId} | Get journey type. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| journeytypes | ListJourneyTypes | GET | /v2/advice/journeytypes | List journey types | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| jumplinks | GetJumplink | GET | /v2/jumplinks/{jumpLinkId} |  | N/A | No | Microservice.Membership | Service Swagger (Microservice.Membership) |
| jumplinks | ListJumplinks | GET | /v2/jumplinks |  | N/A | No | Microservice.Membership | Service Swagger (Microservice.Membership) |
| leads | AssignLeadDocument | POST | /v2/leads/{leadId}/documents/{documentId} | Adds the specified owner to the specified document | client_data, myprofile, openid | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| leads | CreateLead | POST | /v2/leads | Create a lead. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| leads | DeleteLead | DELETE | /v2/leads/{leadId} | Deletes a given lead. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| leads | DeleteLeadDocument | DELETE | /v2/leads/{leadId}/documents/{documentId} | Deletes document's metadata for specified lead | client_data, myprofile, openid | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| leads | GetLead | GET | /v2/leads/{leadId} | Returns a given lead. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| leads | GetLeadDocument | GET | /v2/leads/{leadId}/documents/{documentId} | Gets a single lead document by id | client_data, myprofile, openid | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| leads | GetLeadDocumentObject | GET | /v2/leads/{leadId}/documents/{documentId}/object | Gets a single lead document object | client_data, myprofile, openid | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| leads | LeadDocumentExists | HEAD | /v2/leads/{leadId}/documents/{documentId} | Checks if required lead document exists | client_data, myprofile, openid | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| leads | LeadDocumentObjectExists | HEAD | /v2/leads/{leadId}/documents/{documentId}/object | Checks if required lead document is uploaded. | client_data, myprofile, openid | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| leads | LeadExists | HEAD | /v2/leads/{leadId} | Check if the lead exists. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| leads | ListLeadDocuments | GET | /v2/leads/{leadId}/documents | List all lead documents | client_data, myprofile, openid | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| leads | ListLeads | GET | /v2/leads | Returns a list of leads. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| leads | ListLeadStatuses | GET | /v2/leads/statuses | Get a list of leadStatus | client_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| leads | UpdateLead | PUT | /v2/leads/{leadId} | Updates a given lead. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| leads | UpdateLeadDocument | PUT | /v2/leads/{leadId}/documents/{documentId} | Updates the specified document | client_data, myprofile, openid | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| leads | UpdateLeadDocumentObject | PUT | /v2/leads/{leadId}/documents/{documentId}/object | Uploads a file object associated with the specified lead document | client_data, myprofile, openid | No | Monolith.Storage | Service Swagger (Monolith.Storage) |
| legacyapps | ListLegacyApps | GET | /v2/users/{userId}/legacyapps | Returns a list of apps with permission for the user | N/A | No | Monolith.Crm | Service Swagger + Documentation Ignore |
| lifecycles | GetPlanTypeLifecycle | GET | /v2/plantypes/{name}/lifecycles/{lifecycleId} | Retrieves a lifecycle by plan type name and lifecycle id | firm_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| lifecycles | ListLifecycleStatuses | GET | /v2/lifecycles/statuses | Returns a list of available lifecycle statuses | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| lifecycles | ListLifecycleTransitions | GET | /v2/lifecycles/{lifecycleId}/transitions | Returns a list of transitions for a given lifecycle. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| lifecycles, beta | GetLifecycle | GET | /v2/lifecycles/{lifecycleId} | Returns a lifecycle. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| lifecycles, beta | ListLifecycles | GET | /v2/lifecycles | Returns a list of lifecycles. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| lifecycles, beta | ListPlanTypeLifecycles | GET | /v2/plantypes/{name}/lifecycles | Retrieves a list of lifecycles associated with the specified planType | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| lifeexpectancies | CreateLifeexpectancy | POST | /v2/lifeexpectancy |  | N/A | No | Microservice.CashflowEngine | Service Swagger (Microservice.CashflowEngine) |
| livesassured | ListClientPlansLivesAssured | GET | /v2/clients/{clientId}/plans/{planId}/livesassured | Returns a list of Lives Assured for the plan. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| livesassured | UpdateClientPlansLivesAssured | PUT | /v2/clients/{clientId}/plans/{planId}/livesassured | Creates or updates the list of Lives Assured for the plan. A maximum of 6 lives assured can be added. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| logins | GetLoginDetails | GET | /v2/user/Login | Checks whether the user is authorised to access ui-io. | N/A | No | Monolith.Entitlement | Service Swagger (Monolith.Entitlement) |
| mails | CreateMail | POST | /v1/mail | Send a templated email Attachments are sent as multi part content | N/A | No | Microservice.Email | Service Swagger (Microservice.Email) |
| mandrill | CreateMaileventMandrill | POST | /v1/mailevents/mandrill | Accept callbacks from Mandrill webhook | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| mandrill | ExistsMaileventMandrill | HEAD | /v1/mailevents/mandrill | Allows Mandrill to confirm that the endpoint exists | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| markasread | MarkasreadMessage | POST | /v1/messages/{secureMessageId}/markasread | Mark a specific message as read. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| markasunread | MarkasunreadMessage | POST | /v1/messages/{secureMessageId}/markasunread | Mark a specific message as unread. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| marketclosings | DeleteMarketClosings | DELETE | /v2/marketclosings/{closingOn} | Delete a Market Closing based on Closing On date. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| marketclosings | GetMarketClosings | GET | /v2/marketclosings | Get a Market Closing based on a set of years. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| marketclosings | PutMarketClosings | PUT | /v2/marketclosings | Create or Update a Market Closing. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| marketing | MarketingWidget | GET | /v1/widgets/marketing |  | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| marketingpreferences, beta | GetClientMarketingPreferences | GET | /v2/clients/{clientId}/marketing_preferences | Returns client's current marketing preferences. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| marketingpreferences, beta | GetLeadMarketingPreferences | GET | /v2/leads/{leadId}/marketing_preferences | Returns lead's current marketing preferences. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| marketingpreferences, beta | UpdateClientMarketingPreferences | PUT | /v2/clients/{clientId}/marketing_preferences | Updates client's marketing preferences. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| marketingpreferences, beta | UpdateLeadMarketingPreferences | PUT | /v2/leads/{leadId}/marketing_preferences | Updates lead's marketing preferences. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| messages | CreateMessage | POST | /v1/messages | Create secure message. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| messages | DeleteMessage | DELETE | /v1/messages/{secureMessageId} | Deletes an existing draft secure message. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| messages | ExistsMessage | HEAD | /v1/messages/{secureMessageId} | Get a specific secure message by id. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| messages | GetMessage | GET | /v1/messages/{secureMessageId} | Get a specific secure message by id. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| messages | ListClientMessages | GET | /v1/clients/{clientId}/messages | Get a list of secure messages for the client. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| messages | ListMessages | GET | /v1/messages | Get secure messages for the specified filter. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| messages | UpdateMessage | PUT | /v1/messages/{secureMessageId} | Updates an existing secure message. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| models | AcceptModel | POST | /v2/installed_apps/models/{modelId}/accept | Accepts a provider model for use by a firm. | apps, firm_data, myprofile, openid | No | Microservice.iMps | Service Swagger (Microservice.iMps) |
| models | ActivatePortfolioModel | POST | /v2/models/{modelId}/active | Activates or deactivates a portfolio model. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| models | CreateDraftPortfolioModel | POST | /v2/models/draft | Creates a draft portfolio model. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| models | CreateModel | POST | /v2/models | Creates a portfolio model. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| models | DeleteDraftPortfolioModel | DELETE | /v2/models/draft/{modelId} | Deletes a tenant draft portfolio model. | apps, firm_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| models | DeleteProviderModel | DELETE | /v2/apps/{appId}/models/{modelId} | Returns a provider model. | apps, firm_data, myprofile, openid | No | Microservice.iMps | Service Swagger (Microservice.iMps) |
| models | GetModel | GET | /v2/models/{modelId} | Returns a portfolio model. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| models | GetTenantProviderModel | GET | /v2/installed_apps/models/{modelId} | Returns a provider model. | apps, firm_data, myprofile, openid | No | Microservice.iMps | Service Swagger (Microservice.iMps) |
| models | GetTenantProviderModels | GET | /v2/installed_apps/models | Returns a list of provider models. | apps, firm_data, myprofile, openid | No | Microservice.iMps | Service Swagger (Microservice.iMps) |
| models | ListModels | GET | /v2/models | Returns a list of portfolio models. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| models | PatchModel | PATCH | /v2/models/{modelId} | Patch update a model. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| models | PublishDraftPortfolioModel | POST | /v2/models/draft/{modelId}/publish | Publishes a draft portfolio model. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| models | UpdateDraftPortfolioModel | PUT | /v2/models/draft/{modelId} | Put update a draft portfolio model. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| models | UpdateOrCreatePortfolioModel | PUT | /v2/models | Updates or creates a portfolio model. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| models, modelprovider, beta | CreateProviderModel | POST | /v2/apps/{appId}/models | Creates a new provider model. | openid, myprofile, firm_data, apps | Yes | N/A | Public Swagger v2 |
| models, modelprovider, beta | GetProviderModel | GET | /v2/apps/{appId}/models/{modelId} | Returns a provider model. | openid, myprofile, firm_data, apps | Yes | N/A | Public Swagger v2 |
| models, modelprovider, beta | GetProviderModels | GET | /v2/apps/{appId}/models | Returns a list of provider models. | openid, myprofile, firm_data, apps | Yes | N/A | Public Swagger v2 |
| money movement | GetPaymentMethods | GET | /v2/moneymovement/paymentmethods |  | N/A | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| money movement fees | ListPlanSecurityTransferInstructionFees | GET | /v2/plans/{planId}/securityTransferInstructionFees | Gets a collection of security transfer instruction fees linked to the given plan. | N/A | No | Monolith.Charging | Service Swagger (Monolith.Charging) |
| money movement fees | ListPlanTransferInstructionFees | GET | /v2/plans/{planId}/transferInstructionFees | Gets a collection of transfer instruction fees linked to the given plan. | N/A | No | Monolith.Charging | Service Swagger (Monolith.Charging) |
| money movement fees | UpdatePlanSecurityTransferInstructionFees | PUT | /v2/plans/{planId}/securityTransferInstructionFees | Replaces all of the security transfer instruction and fee relationships for the plan with everything in the request body, any security transfer instruction and fee relationships not passed in will be | N/A | No | Monolith.Charging | Service Swagger (Monolith.Charging) |
| money movement fees | UpdatePlanTransferInstructionFees | PUT | /v2/plans/{planId}/transferInstructionFees | Replaces all of the transfer instruction and fee relationships for the plan with everything in the request body, any transfer instruction and fee relationships not passed in will be removed. | N/A | No | Monolith.Charging | Service Swagger (Monolith.Charging) |
| movedown | CreateTemplateStepMoveDown | POST | /v1/templates/{templateId}/steps/{stepId}/moveDown |  | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| moveup | CreateTemplateStepMoveUp | POST | /v1/templates/{templateId}/steps/{stepId}/moveUp |  | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| nationalities | GetNationality | GET | /v2/nationalities/{nationalityId} | Returns the specified nationality resource. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| nationalities | ListNationalities | GET | /v2/nationalities | Returns a list of nationalities. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| notes | ListClientNotes | GET | /v2/clients/{clientId}/notes | Returns a list of notes for a client. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| notes, beta | GetClientNotes | GET | /v2/clients/{clientId}/notes | Returns the notes for a given client. | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| notes, beta | UpdateOrCreateClientNotes | PUT | /v2/clients/{clientId}/notes | Updates the notes for a given client. | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| notifications | AcknowledgeNotifications | POST | /v2/user/notifications | Mark one or more notifications as read | N/A | No | Monolith.ContractEnquiry | Service Swagger (Monolith.ContractEnquiry) |
| notifications | ListNotifications | GET | /v2/user/notifications | Get the user's unread notifications | N/A | No | Monolith.ContractEnquiry | Service Swagger (Monolith.ContractEnquiry) |
| notifications | SendDocuSignEnvelopeNotification | POST | /v2/clients/docusign_envelopes/{envelopeId}/notifications | Sends envelope notification | N/A | No | Microservice.DocuSign | Service Swagger (Microservice.DocuSign) |
| oauthclients | CreateOauthClient | POST | /v2/oauth_clients |  | N/A | No | Microservice.Identity | Service Swagger (Microservice.Identity) |
| oauthclients | DeleteOauthClient | DELETE | /v2/oauth_clients/{clientId} |  | N/A | No | Microservice.Identity | Service Swagger (Microservice.Identity) |
| oauthclients | GetOauthClient | GET | /v2/oauth_clients/{clientId} |  | N/A | No | Microservice.Identity | Service Swagger (Microservice.Identity) |
| oauthclients | ListOauthClients | GET | /v2/oauth_clients |  | N/A | No | Microservice.Identity | Service Swagger (Microservice.Identity) |
| oauthclients | PatchOauthClient | PATCH | /v2/oauth_clients/{clientId} |  | N/A | No | Microservice.Identity | Service Swagger (Microservice.Identity) |
| objectivecategories | CreateObjectiveCategory | POST | /v2/objective/categories | Create a objective category. | N/A | No | Microservice.Requirement | Service Swagger (Microservice.Requirement) |
| objectivecategories | DeleteObjectiveCategory | DELETE | /v2/objective/categories/{categoryId} | Delete a objective category. | N/A | No | Microservice.Requirement | Service Swagger (Microservice.Requirement) |
| objectivecategories | ListObjectiveCategory | GET | /v2/objective/categories | List all objective categories. | N/A | No | Microservice.Requirement | Service Swagger (Microservice.Requirement) |
| objectivecategories | UpdateObjectiveCategory | PUT | /v2/objective/categories/{categoryId} | Update a objective category. | N/A | No | Microservice.Requirement | Service Swagger (Microservice.Requirement) |
| objectives | ClientObjectiveExists | HEAD | /v2/clients/{clientId}/objectives/{objectiveId} | Checks that a given client objective exists. | N/A | No | Microservice.Requirement | Service Swagger (Microservice.Requirement) |
| objectives | CreateClientObjectives | POST | /v2/clients/{clientId}/objectives | Creates a client objective. | N/A | No | Microservice.Requirement | Service Swagger (Microservice.Requirement) |
| objectives | CreateLeadObjective | POST | /v2/leads/{leadId}/objectives | Creates a lead objective. | N/A | No | Microservice.Requirement | Service Swagger (Microservice.Requirement) |
| objectives | DeleteClientObjective | DELETE | /v2/clients/{clientId}/objectives/{objectiveId} | Delete a client objective. | N/A | No | Microservice.Requirement | Service Swagger (Microservice.Requirement) |
| objectives | DeleteLeadObjective | DELETE | /v2/leads/{leadId}/objectives/{objectiveId} | Delete a lead objective. | N/A | No | Microservice.Requirement | Service Swagger (Microservice.Requirement) |
| objectives | GetClientObjective | GET | /v2/clients/{clientId}/objectives/{objectiveId} | Gets a client objective. | N/A | No | Microservice.Requirement | Service Swagger + Documentation Ignore |
| objectives | GetLeadObjective | GET | /v2/leads/{leadId}/objectives/{objectiveId} | Gets a lead objective. | N/A | No | Microservice.Requirement | Service Swagger (Microservice.Requirement) |
| objectives | LeadObjectiveExists | HEAD | /v2/leads/{leadId}/objectives/{objectiveId} | Checks that a given lead objective exists | N/A | No | Microservice.Requirement | Service Swagger (Microservice.Requirement) |
| objectives | LinkClientObjectiveOpportunity | POST | /v2/clients/{clientId}/objectives/{objectiveId}/opportunity/{opportunityId} | Link opportunity to client objective. | N/A | No | Microservice.Requirement | Service Swagger (Microservice.Requirement) |
| objectives | LinkLeadObjectiveOpportunity | POST | /v2/leads/{leadId}/objectives/{objectiveId}/opportunity/{opportunityId} | Link opportunity to lead objective. | N/A | No | Microservice.Requirement | Service Swagger (Microservice.Requirement) |
| objectives | ListClientObjectives | GET | /v2/clients/{clientId}/objectives | Returns a list of client objectives. | N/A | No | Microservice.Requirement | Service Swagger + Documentation Ignore |
| objectives | ListLeadObjectives | GET | /v2/leads/{leadId}/objectives | Returns a list of lead objectives. | N/A | No | Microservice.Requirement | Service Swagger (Microservice.Requirement) |
| objectives | UnlinkClientObjectiveOpportunity | DELETE | /v2/clients/{clientId}/objectives/{objectiveId}/opportunity/{opportunityId} | Unlink opportunity to client objective. | N/A | No | Microservice.Requirement | Service Swagger (Microservice.Requirement) |
| objectives | UnlinkLeadObjectiveOpportunity | DELETE | /v2/leads/{leadId}/objectives/{objectiveId}/opportunity/{opportunityId} | Unlink opportunity to lead objective. | N/A | No | Microservice.Requirement | Service Swagger (Microservice.Requirement) |
| objectives | UpdateClientObjective | PUT | /v2/clients/{clientId}/objectives/{objectiveId} | Updates a client objective. | N/A | No | Microservice.Requirement | Service Swagger (Microservice.Requirement) |
| objectives | UpdateLeadObjective | PUT | /v2/leads/{leadId}/objectives/{objectiveId} | Updates a lead objective. | N/A | No | Microservice.Requirement | Service Swagger (Microservice.Requirement) |
| ondemand | CreateTemplateCreateinstanceOndemand | POST | /v1/templates/{templateId}/createinstance/ondemand | Create instance for specific template | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| operation logging | Logs | GET | /v2/providerintegrations/logs | Retrieve a list of operation log entries for the specified provider. The returned list is always sorted in timestamp order. | N/A | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| operation logging | PlanApplicationLogs | GET | /v2/providerintegrations/planapplicationlogs |  | N/A | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| opportunities | CreateCampaignChannel | POST | /v2/opportunities/campaignchannels | Creates a new Campaign Channel. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| opportunities | CreateCampaignType | POST | /v2/opportunities/campaigntypes | Creates a new Campaign Type. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| opportunities | CreateClientOpportunity | POST | /v2/clients/{clientId}/opportunities | Creates a new Opportunity for the given client. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| opportunities | CreateLeadOpportunity | POST | /v2/leads/{leadId}/opportunities | Creates a new Opportunity for the given Lead. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| opportunities | CreateOpportunityCampaign | POST | /v2/opportunities/campaigns | Creates a new Opportunity campaign for a tenant. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| opportunities | CreateOpportunityProposition | POST | /v2/opportunities/propositions | Creates a new Opportunity proposition for a tenant. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| opportunities | CreateOpportunityStatus | POST | /v2/opportunities/statuses | Creates a new Opportunity Status. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| opportunities | CreateOpportunityType | POST | /v2/opportunities/types | Creates a new Opportunity Type for a tenant. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| opportunities | DeleteCampaignChannel | DELETE | /v2/opportunities/campaignchannels/{campaignChannelId} | Deletes Campaign Channel for a given tenant | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| opportunities | DeleteCampaignType | DELETE | /v2/opportunities/campaigntypes/{campaignTypeId} | Deletes Campaign Type for a given tenant | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| opportunities | DeleteOpportunityCampaign | DELETE | /v2/opportunities/campaigns/{opportunityCampaignId} | Deletes an Opportunity campaign. Only Opportunity campaigns that are not in use can be deleted. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| opportunities | DeleteOpportunityProposition | DELETE | /v2/opportunities/propositions/{propositionId} | Deletes an existing Opportunity proposition for a tenant. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| opportunities | DeleteOpportunityStatus | DELETE | /v2/opportunities/statuses/{opportunityStatusId} | Deletes an opportunity status for a given tenant | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| opportunities | DeleteOpportunityType | DELETE | /v2/opportunities/types/{opportunityTypeId} | Deletes an Opportunity type. Only opportunity types that are not in use can be deleted. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| opportunities | GetClientOpportunity | GET | /v2/clients/{clientId}/opportunities/{opportunityId} | Returns opportunity documents for a given client and document. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| opportunities | GetLeadOpportunity | GET | /v2/leads/{leadId}/opportunities/{opportunityId} | Returns an opportunity document for a given lead. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| opportunities | GetOpportunityType | GET | /v2/opportunities/types/{opportunityTypeId} | Returns the requested Opportunity type for a tenant. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| opportunities | ListCampaignChannels | GET | /v2/opportunities/campaignchannels | Returns a list of campaign channel for a given tenant. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| opportunities | ListCampaignTypes | GET | /v2/opportunities/campaigntypes | Returns a list of campaign types for a given tenant. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| opportunities | ListClientOpportunities | GET | /v2/clients/{clientId}/opportunities | Returns list of opportunities for a given client. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| opportunities | ListLeadOpportunities | GET | /v2/leads/{leadId}/opportunities | Returns a list of opportunity documents for a given lead. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| opportunities | ListOpportunityCampaigns | GET | /v2/opportunities/campaigns | Returns a list of the Opportunity campaigns for a tenant. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| opportunities | ListOpportunityPropositions | GET | /v2/opportunities/propositions | Returns a list of the opportunity propositions for a tenant. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| opportunities | ListOpportunityStatuses | GET | /v2/opportunities/statuses | Returns a list of opportunity statuses for a given tenant | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| opportunities | ListOpportunityTypes | GET | /v2/opportunities/types | Returns a list of the opportunity types for a tenant. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| opportunities | UpdateCampaignChannel | PUT | /v2/opportunities/campaignchannels/{campaignChannelId} | Updates an existing Campaign Channel. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| opportunities | UpdateCampaignType | PUT | /v2/opportunities/campaigntypes/{campaignTypeId} | Updates an existing Campaign Type. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| opportunities | UpdateClientOpportunity | PUT | /v2/clients/{clientId}/opportunities/{opportunityId} | Updates an existing Opportunity for the given client. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| opportunities | UpdateLeadOpporunity | PUT | /v2/leads/{leadId}/opportunities/{opportunityId} | Updates an existing Opportunity for the given Lead. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| opportunities | UpdateOpportunityCampaign | PUT | /v2/opportunities/campaigns/{opportunityCampaignId} | Updates an Opportunity campaign for a tenant. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| opportunities | UpdateOpportunityProposition | PUT | /v2/opportunities/propositions/{propositionId} | Updates an existing Opportunity proposition for a tenant. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| opportunities | UpdateOpportunityStatus | PUT | /v2/opportunities/statuses/{opportunityStatusId} | Updates an existing Opportunity Status. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| opportunities | UpdateOpportunityType | PUT | /v2/opportunities/types/{opportunityTypeId} | Updates an Opportunity Type for a tenant. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| options | PostOptions | POST | /v2/options | Create Option Securities. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| options | PutOptions | PUT | /v2/options | Update Option Securities. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| output | GetSecureMessageTrail | POST | /v1/clients/{clientId}/messages/output | Get a secure message trail in pdf file. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| outputs | DeleteOutput | DELETE | /v1/output/{outputId} |  | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| outputs | GetOutput | GET | /v1/output/{outputId} | Get details for a specified output document | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| outputs | ListOutputs | GET | /v1/output | List generated documents | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| passkeys | CreateAccountPasskeysAuthenticate | POST | /v2/accounts/{subject}/passkeys/authenticate | Verifies the user authenticated by FIDO is valid and processes user login | N/A | No | Microservice.Membership | Service Swagger (Microservice.Membership) |
| passwordpolicy | GetPasswordPolicy | GET | /v2/oauth_clients/{clientId}/passwordpolicy |  | N/A | No | Microservice.Identity | Service Swagger (Microservice.Identity) |
| passwordpolicy | UpdatePasswordPolicy | PUT | /v2/oauth_clients/{clientId}/passwordpolicy |  | N/A | No | Microservice.Identity | Service Swagger (Microservice.Identity) |
| personalcontacts | CreatePersonalContact | POST | /v2/clients/{clientId}/personalContacts | Add a new personal contact for a given client | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| personalcontacts | DeletePersonalContact | DELETE | /v2/clients/{clientId}/personalContacts/{personalContactId} | Delete an existing personal contact | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| personalcontacts | GetPersonalContact | GET | /v2/clients/{clientId}/personalContacts/{personalContactId} | Get given personal contact for a given client | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| personalcontacts | ListPersonalContacts | GET | /v2/clients/{clientId}/personalContacts | List personal contacts for a given client. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| personalcontacts | PatchPersonalContact | PATCH | /v2/clients/{clientId}/personalContacts/{personalContactId} | Patch an existing personal contact | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| personalcontacts | UpdatePersonalContact | PUT | /v2/clients/{clientId}/personalContacts/{personalContactId} | Update an existing personal contact. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| phones | CreateAccountPhone | POST | /v2/accounts/{subject}/phones | Creates a phone for given account. | N/A | No | Microservice.Membership | Service Swagger (Microservice.Membership) |
| phones | CreateAccountPhoneMakeprimary | POST | /v2/accounts/{subject}/phones/{phoneId}/makeprimary | Makes the given phone primary for a given account. | N/A | No | Microservice.Membership | Service Swagger (Microservice.Membership) |
| phones | CreateAccountPhoneMakeverified | POST | /v2/accounts/{subject}/phones/{phoneId}/makeverified | Verifies a phone for a given account. | N/A | No | Microservice.Membership | Service Swagger (Microservice.Membership) |
| phones | DeleteAccountPhone | DELETE | /v2/accounts/{subject}/phones/{phoneId} | Deletes a phone for a given account. | N/A | No | Microservice.Membership | Service Swagger (Microservice.Membership) |
| phones | GetAccountPhone | GET | /v2/accounts/{subject}/phones/{phoneId} | Returns a phone for given account. | N/A | No | Microservice.Membership | Service Swagger (Microservice.Membership) |
| phones | ListAccountPhones | GET | /v2/accounts/{subject}/phones | Returns a list of phones for given account. | N/A | No | Microservice.Membership | Service Swagger (Microservice.Membership) |
| plan delivery method | GetPlanDeliveryMethods | GET | /v2/plans/{planId}/plandeliverymethod | Get Plan Delivery Method. | N/A | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| plan delivery method | GetPlanDeliveryMethodsProposed | GET | /v2/plans/{planId}/plandeliverymethod/proposed | Get Proposed Plan Delivery Method. | N/A | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| plan delivery method | SavePlanDeliveryMethod | PUT | /v2/plans/{planId}/plandeliverymethod | Save Plan Delivery Method. | N/A | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| plan delivery method | SavePlanDeliveryMethodProposed | PUT | /v2/plans/{planId}/plandeliverymethod/proposed | Save Proposed Plan Delivery Method. | N/A | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| planapplicationdocument | CreatePlanApplicationDocument | POST | /v2/plans/{planId}/applications/{applicationId}/documents | Creates a new Plan Application Document. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplicationdocument | DeletePlanApplicationDocument | DELETE | /v2/plans/{planId}/applications/{applicationId}/documents/{documentId} | Deletes a Plan Application Document. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplicationdocument | eSignPlanApplicationDocuments | POST | /v2/plans/{planId}/applications/{applicationId}/documents/esign | eSign documents for a Plan Application. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplicationdocument | GeneratePlanApplicationDocuments | POST | /v2/plans/{planId}/applications/{applicationId}/documents/generate | Generate documents for a Plan Application. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplicationdocument | GetPlanApplicationESignStatus | GET | /v2/plans/{planId}/applications/{applicationId}/documents/esign/status | Envelope status of eSign documents for a Plan Application. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplicationdocument | ListPlanApplicationDocuments | GET | /v2/plans/{planId}/applications/{applicationId}/documents | Returns a list of Plan Application Documents. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplicationdocument | SearchPlanApplicationDocuments | GET | /v2/plans/{planId}/applications/documents | Returns a list of Documents. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplicationdocument | UpdatePlanApplicationDocumentRecipients | PUT | /v2/plans/{planId}/applications/{applicationId}/documents/{documentId}/recipients | Update plan application document recipients | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplicationdocumentconfig | ListPlanApplicationDocumentConfigs | POST | /v2/applications/documentconfigs | Gets all the document templates and managed documents for a plan application that are relevant to the provided context(s). | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplicationdocumenttemplate | CreatePlanApplicationDocTemplate | POST | /v2/applications/doctemplates | Create a new Plan Application Document Template. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplicationdocumenttemplate | DeletePlanApplicationDocTemplate | DELETE | /v2/applications/doctemplates/{planApplicationDocTemplateId} | Delete Plan Application Document Template. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplicationdocumenttemplate | ListPlanApplicationDocumentTemplates | GET | /v2/applications/doctemplates | Returns a list of Plan Application Document Templates. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplicationdocumentupload | CreatePlanApplicationDocUpload | POST | /v2/applications/docuploads | Create a new Plan Application Document Upload. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplicationdocumentupload | DeletePlanApplicationDocUpload | DELETE | /v2/applications/docuploads/{planApplicationDocUploadId} | Delete Plan Application Document Upload. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplicationdocumentupload | ListPlanApplicationDocumentUploads | GET | /v2/applications/docuploads | Returns a list of Plan Application Document Uploads. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplicationenvelope | CreatePlanApplicationEnvelope | POST | /v2/plans/{planId}/applications/envelopes | Creates plan application envelope. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplicationenvelope | DeletePlanApplicationEnvelope | DELETE | /v2/plans/{planId}/applications/envelopes/{envelopeId} | Delete plan application envelop. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplicationenvelope | ESignMultiPlanApplicationEnvelope | POST | /v2/plans/{planId}/applications/envelopes/{envelopeId}/esign | Electronically sign multi plan application envelope. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplicationenvelope | ESignSinglePlanApplicationEnvelope | POST | /v2/plans/{planId}/applications/{applicationId}/envelope/esign | Electronically sign single plan application envelope. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplicationenvelope | GetPlanApplicationEnvelope | GET | /v2/plans/{planId}/applications/envelopes/{envelopeId} | Get plan application envelop. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplicationenvelope | ListPlanApplicationEnvelopes | GET | /v2/plans/{planId}/applications/envelopes | Get all plan application envelopes. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplicationenvelope | PatchPlanApplicationEnvelope | PATCH | /v2/plans/{planId}/applications/envelopes/{envelopeId} | Patch plan application envelope. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplicationenvelope | SendApplicationEnvelopeNotification | POST | /v2/plans/{planId}/applications/envelopes/{envelopeId}/notify | Sends the application envelope notification. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplicationmanageddocument | CreatePlanApplicationManagedDocument | POST | /v2/applications/manageddocuments | Create a new Plan Application Managed Document. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplicationmanageddocument | DeletePlanApplicationManagedDocument | DELETE | /v2/applications/manageddocuments/{planApplicationManagedDocumentId} | Delete Plan Application Managed Document. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplicationmanageddocument | ListPlanApplicationManagedDocuments | GET | /v2/applications/manageddocuments | Returns a list of Plan Application Managed Documents. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplicationrefstatus | ListRefApplicationStatuses | GET | /v2/applications/referencestatus | Returns a list of Application Reference Statuses. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplications | ClonePlanApplication | POST | /v2/plans/{planId}/applications/{applicationId}/clone | Clone Plan Application. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplications | CreatePlanApplication | POST | /v2/plans/{planId}/applications | Creates a new Plan Application. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplications | DeletePlanApplication | DELETE | /v2/plans/{planId}/applications/{applicationId} | Deletes a Plan Application. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplications | GetPlanApplication | GET | /v2/plans/{planId}/applications/{applicationId} | Retrieves a single Plan Application. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplications | ListPlanApplications | GET | /v2/plans/{planId}/applications | Returns a list of Plan Applications. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplications | LockPlanApplication | POST | /v2/plans/{planId}/applications/{applicationId}/lock | Lock plan Application. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplications | PatchPlanApplication | PATCH | /v2/plans/{planId}/applications/{applicationId} | Patch the plan application. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplications | UnlockPlanApplication | POST | /v2/plans/{planId}/applications/{applicationId}/unlock | Unlock Plan Application. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplications | UpdatePlanApplication | PUT | /v2/plans/{planId}/applications/{applicationId} | Updates Plan Application. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplications | UpdatePlanApplicationAdditionalQuestions | PUT | /v2/plans/{planId}/applications/{applicationId}/additionalquestions | Updates the Additional Questions for a Plan Application. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplicationssearch | SearchPlanApplications | GET | /v2/applications | Returns a list of plan applications. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplicationstatusupdate | CreatePlanApplicationStatus | POST | /v2/plans/{planId}/applications/{applicationId}/statuses | Creates a new Plan Application Status. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planapplicationstatusupdate | ListPlanApplicationStatusHistory | GET | /v2/plans/{planId}/applications/{applicationId}/statuses | Returns a list of Plan Application Statuses. | N/A | No | Microservice.PlanApplication | Service Swagger (Microservice.PlanApplication) |
| planpurposes | ListPlanPurposes | GET | /v2/planpurposes | Returns a list of plan purposes for a specific tenant. | N/A | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| plans | CreateClientOpportunityPlan | POST | /v2/clients/{clientId}/opportunities/{opportunityId}/plans/{planId} | Updates an opportunity with a plan for a given client, opportunity and plan. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| plans | CreateClientPlans | POST | /v2/clients/{clientId}/plans | Creates a plan for a given client. | openid, myprofile, client_financial_data | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Monolith.Portfolio |
| plans | CreateClientServicecasePlan | POST | /v2/clients/{clientId}/servicecases/{serviceCaseId}/plans/{planId} | Creates an association with a service on a plan for a given client, service and plan. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| plans | CreateTopupPlan | POST | /v2/clients/{clientId}/plans/{planId} | Creates a plan for a given client. | openid, myprofile, client_financial_data | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Monolith.Portfolio |
| plans | DeleteClientOpportunityPlan | DELETE | /v2/clients/{clientId}/opportunities/{opportunityId}/plans/{planId} | Deletes an opportunity from a plan for a given client, opportunity and plan. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| plans | DeleteClientPlan | DELETE | /v2/clients/{clientId}/plans/{planId} | Deletes the client plan by the given client id and plan id. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| plans | DeleteClientServicecasePlan | DELETE | /v2/clients/{clientId}/servicecases/{serviceCaseId}/plans/{planId} | Deletes an association on a service with a plan for a given client, service and plan. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| plans | ExistsClientPlan | HEAD | /v2/clients/{clientId}/plans/{planId} | Checks a plan exists for a given client and plan. | openid, myprofile, client_financial_data | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Monolith.Portfolio |
| plans | GetClientPlan | GET | /v2/clients/{clientId}/plans/{planId} | Returns a plan for a given client and plan. | openid, myprofile, client_financial_data | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Monolith.Portfolio |
| plans | GetPlan | GET | /v2/plans/{planId} | Get a Plan | openid, myprofile, client_financial_data | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Monolith.Portfolio |
| plans | GetUserPlansExist | POST | /v2/users/{userId}/plans/exist |  | client_financial_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| plans | ListClientPlans | GET | /v2/clients/{clientId}/plans | Returns a list of plans for a given client. | openid, myprofile, client_financial_data | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Monolith.Portfolio |
| plans | ListModelplans | GET | /v2/modelplans | Gets a collection of modelplans for a tenant | client_financial_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| plans | ListPlans | GET | /v2/plans | Gets a Collection of Plans. | client_financial_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| plans | ListPlanUsers | GET | /v2/plans/{planId}/users | Get a collection of plan users. | client_financial_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| plans | ListUserPlans | GET | /v2/users/{userId}/plans | Get a collection of plans for a user. | client_financial_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| plans | PatchClientPlan | PATCH | /v2/clients/{clientId}/plans/{planId} | Patch update a client plan for given client id and plan id. | openid, myprofile, client_financial_data | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Monolith.Portfolio |
| plans | PatchPlan | PATCH | /v2/plans/{planId} | Updates a plan for given plan id. | client_financial_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| plans | PlanExists | HEAD | /v2/plans/{planId} | Check that plan available for the user | openid, myprofile, client_financial_data | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Monolith.Portfolio |
| plans, beta | UpdateClientPlan | PUT | /v2/clients/{clientId}/plans/{planId} | Updates a plan for a given client. | openid, myprofile, client_financial_data | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Monolith.Portfolio |
| plantype | UpdatePlanType | PUT | /v2/clients/{clientId}/plans/{planId}/plantype | Change plan to a new type | N/A | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| plantypes | GetPlantype | GET | /v2/plantypes/{name} | Retrieves a plan type by name and default region code | firm_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| plantypes | GetPlanTypeByNameAndRegion | GET | /v2/plantypes/{name}/{regionCode} | Retrieves a plan type by name and region code | firm_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| plantypes | ListGatedPlanTypes | GET | /v2/plantypes/adviser/{adviserId} | Returns a list of gated plan types based on adviser multi-tie configuration. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| plantypes | ListPlantypes | GET | /v2/plantypes | Returns a list of plan types. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| plugins | GetPlugin | GET | /v1/plugin | Get latest plugin details | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| poolfactor | DeleteSecurityPoolFactor | DELETE | /v2/securities/{securityId}/poolfactors/{poolFactorOn} | Deletes a security pool factor based on securityId and poolfactorOn date. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| poolfactor | ListPoolFactor | GET | /v2/poolfactors | Get all pool factors for the passed in securityIds where the PoolFactorOn date falls between poolfactorOnStart and poolfactorOnEnd, inclusively. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| poolfactor | PutPoolFactors | PUT | /v2/poolfactors | Creates any poolfactors that do not exist and updates any poolfactors that do exist (based on securityId and poolfactorOn). | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| portfolioreport | CreatePortfolioReportRequest | POST | /v2/clients/{clientId}/reports/portfolio |  | N/A | No | Monolith.Report | Service Swagger (Monolith.Report) |
| portfolioreport | GetPortfolioReportObject | GET | /v2/clients/{clientId}/reports/portfolio/{id}/object | Gets a object as stream | N/A | No | Monolith.Report | Service Swagger (Monolith.Report) |
| portfolioreport | GetPortfolioReportRequest | GET | /v2/clients/{clientId}/reports/portfolio/{id} | Retrieves item by id | N/A | No | Monolith.Report | Service Swagger (Monolith.Report) |
| portfolioreport | ListClientReportBranding | GET | /v2/clients/{clientId}/reports/portfolio/branding | Returns a BrandingDocumentCollection. | N/A | No | Monolith.Report | Service Swagger (Monolith.Report) |
| preferences | ListTenantsPreferences | GET | /v2/tenants/{tenantId}/preferences | List tenant preferences. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| preprocess | CreateEsignPreprocess | POST | /v1/esign/preprocess |  | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| prices | DeleteSecurityPrice | DELETE | /v2/securities/{securityId}/prices/{pricedOn} | Deletes a security price based on securityId and pricedOn date. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| prices | GetPrices | GET | /v2/securities/{securityId}/prices | Get all prices for the passed in securityId. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| prices | PostPrices | POST | /v2/prices | Creates any prices that do not exist and return any prices that errored. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| prices | PutPrices | PUT | /v2/prices | Creates any prices that do not exist and updates any prices that do exist (based on securityId and pricedOn). | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| productproviders | CreateProductProvider | POST | /v2/productproviders | Creates a new product provider. | firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger + Documentation Ignore |
| productproviders | CreateProductproviderLink | POST | /v2/productproviders/{productProviderId}/link/{linkedProductProviderId} | Returns updated ProductProvider resource | firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| productproviders | DeleteProductproviderLink | DELETE | /v2/productproviders/{productProviderId}/link/{linkedProductProviderId} | Delete the linked ProductProvider | firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| productproviders | GetProductprovider | GET | /v2/productproviders/{productProviderId} | Returns a product provider. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| productproviders | GetProductProviderHierarchy | GET | /v2/productproviders/{productProviderId}/tenants/{tenantId}/hierarchy |  | firm_data, myprofile, openid | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| productproviders | ListMultiTiedConfigProductProvider | GET | /v2/productproviders/adviser/{adviserPartyId} | Returns a list of product providers based on multi-tie configuration. | firm_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| productproviders | ListProductProviderPrograms | GET | /v2/productproviders/programs | Returns a list of Product Provider Programs. | firm_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| productproviders | ListProductproviders | GET | /v2/productproviders | Returns a list of product providers. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| productproviders | ListProductProviderWrapperConfigs | GET | /v2/productproviders/{productProviderId}/wrapperconfigs | Gets a collection of wrapper configs | firm_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| productproviders | ProductProviderExists | HEAD | /v2/productproviders/{productProviderId} | Check the Product provider is available | firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| productproviders | UpdateProductProvider | PUT | /v2/productproviders/{productProviderId} | Updates a product provider. | firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| productproviders | UpdateProductProviderHierarchy | PUT | /v2/productproviders/{productProviderId}/tenants/{tenantId}/hierarchy |  | firm_data, myprofile, openid | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| professionalaffiliations | GetClientProfessionalAffiliations | GET | /v2/clients/{clientId}/professionalaffiliations | Returns a clients professional affiliations. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| professionalaffiliations | UpdateClientProfessionalAffiliations | PUT | /v2/clients/{clientId}/professionalaffiliations | Updates client's professional affiliations. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| programs | CreateFeeModelProgram | POST | /v2/feemodels/programs | Create a fee program model | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| programs | DeleteFeeModelProgram | DELETE | /v2/feemodels/{feeModelId}/programs/{programId} | Delete fee model for a given program | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| programs | GetProgram | GET | /v2/programs/{programId} | Return the program based on the ProgramId | firm_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| programs | ListProgramPlansInvalid | GET | /v2/programs/{programId}/plans/invalid | Return plans that have invalid program plantypes | firm_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| programs | ListPrograms | GET | /v2/programs | Get all programs. | firm_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| programs | SavePrograms | PUT | /v2/programs | Insert a new or Update an existing Program for a Tenant | firm_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| promote | CreateTemplateVersionPromote | POST | /v1/templates/{templateId}/versions/{versionId}/promote | Promote template version | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| prompts | ListTemplateVersionsPrompts | GET | /v1/templates/{templateId}/versions/{versionId}/prompts |  | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| proofofidentity | CreateClientProofOfIdentity | POST | /v2/clients/{clientId}/proofofidentity | Creates new proof of identity record for a given client | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| proofofidentity | DeleteClientProofOfIdentity | DELETE | /v2/clients/{clientId}/proofofidentity/{id} | Deletes an existing proof of identity record for a given client | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| proofofidentity | GetClientProofOfIdentity | GET | /v2/clients/{clientId}/proofofidentity/{id} | Returns the proof of identity record for a given client | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| proofofidentity | ListClientProofOfIdentity | GET | /v2/clients/{clientId}/proofofidentity | Returns a list of proof of identity records for a given client | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| proofofidentity | UpdateClientProofOfIdentity | PUT | /v2/clients/{clientId}/proofofidentity/{id} | Updates  an existing proof of identity record for a given client | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| proposalbeneficiary | CreateProposalBeneficiaries | POST | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals/{proposalId}/beneficiaries | Create a beneficiaries for a given proposal and client. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| proposalbeneficiary | DeleteProposalBeneficiary | DELETE | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals/{proposalId}/beneficiaries/{beneficiaryId} | Delete a beneficiary for a given proposal and client. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| proposalbeneficiary | GetProposalBeneficiary | GET | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals/{proposalId}/beneficiaries/{beneficiaryId} | Returns a beneficiary for a given proposal and client. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| proposalbeneficiary | ListProposalBeneficiaries | GET | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals/{proposalId}/beneficiaries | Lists beneficiaries for a given proposal and client. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| proposalbeneficiary | UpdateProposalBeneficiaries | PUT | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals/{proposalId}/beneficiaries | Updates beneficiaries for a given proposal and client. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| prospectuses | GetProspectus | GET | /v2/prospectuses/{prospectusId} | Get Prospectus based on Prospectus Id. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| prospectuses | ListProspectuses | GET | /v2/prospectuses | List Prospectus based on Prospectus Ids. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| provider configuration | DeleteProviderEndpoints | DELETE | /v2/providers/{providerId}/endpoints/{endpointType} | removes endpoint of type for a provider | N/A | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| provider configuration | GetAllProviderEndpoints | GET | /v2/providers/endpointTypes | gets all avaiable endpoint types with a collection of actions that type would support | N/A | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| provider configuration | getDeclarations | POST | /v2/providerintegrations/getDeclarations |  | N/A | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| provider configuration | getDeclarations2 | POST | /v2/providers/{providerId}/getDeclarations |  | N/A | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| provider configuration | GetProviderEndpoints | GET | /v2/providers/{providerId}/endpoints | gets a collection of endpoints that are configured for a service | N/A | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| provider configuration | ModifyProviderEndpoints | PUT | /v2/providers/{providerId}/endpoints | create and update endpoints | N/A | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| provider configuration | ValidateProvider | HEAD | /v2/providerintegrations |  | N/A | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| provider tenant configuration | DeleteProviderTenant | DELETE | /v2/providers/{providerId}/providerTenants |  | N/A | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| provider tenant configuration | GetProviderTenant | GET | /v2/providers/{providerId}/providerTenants |  | N/A | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| provider tenant configuration | UpdateProviderTenant | PUT | /v2/providers/{providerId}/providerTenants |  | N/A | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| providercodes | CreateProviderCode | POST | /v2/productproviders/{providerId}/codes | Creates an allocated Provider Code issued by a Provider. | N/A | No | Microservice.ProviderCodes | Service Swagger (Microservice.ProviderCodes) |
| providercodes | CreateProviderCodeConfig | POST | /v2/productproviders/{providerId}/codes/config | Creates a Provider Code issued by a Provider as a means of authorising Advisers to conduct business on their platform. | N/A | No | Microservice.ProviderCodes | Service Swagger (Microservice.ProviderCodes) |
| providercodes | DeleteProviderCode | DELETE | /v2/productproviders/{providerId}/codes/{providerCodeId} | Deletes an allocated Provider Code issued by a Provider. | N/A | No | Microservice.ProviderCodes | Service Swagger (Microservice.ProviderCodes) |
| providercodes | DeleteProviderCodeConfig | DELETE | /v2/productproviders/{providerId}/codes/config/{configId} | Deletes a Provider Code issued by a Provider as a means of authorising Advisers to conduct business on their platform. | N/A | No | Microservice.ProviderCodes | Service Swagger (Microservice.ProviderCodes) |
| providercodes | GetProviderCode | GET | /v2/productproviders/{providerId}/codes/{providerCodeId} | Returns a specific allocated Provider Code issued by a Provider. | N/A | No | Microservice.ProviderCodes | Service Swagger (Microservice.ProviderCodes) |
| providercodes | GetProviderCodeConfig | GET | /v2/productproviders/{providerId}/codes/config/{configId} | Returns a specific Provider Code issued by a Provider as a means of authorising Advisers to conduct business on their platform. | N/A | No | Microservice.ProviderCodes | Service Swagger (Microservice.ProviderCodes) |
| providercodes | ListAdviserProviderCodes | GET | /v2/productproviders/{providerId}/advisers/{adviserId}/codes | Returns a list of Providers Codes allocated to an Adviser that were issued by a Provider. | N/A | No | Microservice.ProviderCodes | Service Swagger (Microservice.ProviderCodes) |
| providercodes | ListProviderCodeCombos | GET | /v2/productproviders/{providerId}/codes/combos | Computes and returns the list of Provider Code that are available for a specific group or adviser. Returns each code config along with the codes associated to the group/adviser and their provider cod | N/A | No | Microservice.ProviderCodes | Service Swagger (Microservice.ProviderCodes) |
| providercodes | ListProviderCodeConfigs | GET | /v2/productproviders/{providerId}/codes/config | Returns a list of Providers Codes issued by a Provider as a means of authorising Advisers to conduct business on their platform. | N/A | No | Microservice.ProviderCodes | Service Swagger (Microservice.ProviderCodes) |
| providercodes | ListProviderCodes | GET | /v2/productproviders/{providerId}/codes | Returns a list of Providers Codes issued by a Provider as a means of authorising Advisers to conduct business on their platform. | N/A | No | Microservice.ProviderCodes | Service Swagger (Microservice.ProviderCodes) |
| providercodes | ListProviderCodesSystem | GET | /v2/productproviders/{providerId}/codes/system | For system reach only. Returns a list of Providers Codes issued by a Provider as a means of authorising Advisers to conduct business on their platform. | N/A | No | Microservice.ProviderCodes | Service Swagger (Microservice.ProviderCodes) |
| providercodes | UpdateProviderCode | PUT | /v2/productproviders/{providerId}/codes/{providerCodeId} | Updates an allocated Provider Code issued by a Provider. | N/A | No | Microservice.ProviderCodes | Service Swagger (Microservice.ProviderCodes) |
| providercodes | UpdateProviderCodeConfig | PUT | /v2/productproviders/{providerId}/codes/config/{configId} | Updates a Provider Code issued by a Provider as a means of authorising Advisers to conduct business on their platform. | N/A | No | Microservice.ProviderCodes | Service Swagger (Microservice.ProviderCodes) |
| providercodesconfigattributes | CreateProviderCodeConfigAttribute | POST | /v2/productproviders/codes/config/attributes | Creates a Provider Code config attribute for a tenant. | N/A | No | Microservice.ProviderCodes | Service Swagger (Microservice.ProviderCodes) |
| providercodesconfigattributes | DeleteProviderCodeConfigAttribute | DELETE | /v2/productproviders/codes/config/attributes/{configAttributeId} | Deletes a Provider Code config attribute for a tenant. | N/A | No | Microservice.ProviderCodes | Service Swagger (Microservice.ProviderCodes) |
| providercodesconfigattributes | GetProviderCodeConfigsAttributes | GET | /v2/productproviders/codes/config/attributes | Returns a list of Provider Code config attributes for a tenant. | N/A | No | Microservice.ProviderCodes | Service Swagger (Microservice.ProviderCodes) |
| providercodesconfigattributes | PatchProviderCodeConfigAttribute | PATCH | /v2/productproviders/codes/config/attributes/{configAttributeId} | Patches a Provider Code config attribute for a tenant. | N/A | No | Microservice.ProviderCodes | Service Swagger (Microservice.ProviderCodes) |
| providerdocuments | GetProductProviderDocumentCategory | GET | /v2/providerdocuments/categories/{categoryId} | Get a product provider document category. | N/A | No | Microservice.ProviderDocuments | Service Swagger (Microservice.ProviderDocuments) |
| providerdocuments | GetProductProviderDocumentObject | GET | /v2/clients/{clientId}/plans/{planId}/providerdocuments/{documentId}/object | Get a product provider document object. | N/A | No | Microservice.ProviderDocuments | Service Swagger (Microservice.ProviderDocuments) |
| providerdocuments | ListProductProviderDocumentCategories | GET | /v2/providerdocuments/categories | List product provider document categories. | N/A | No | Microservice.ProviderDocuments | Service Swagger (Microservice.ProviderDocuments) |
| providerdocuments | ListProductProviderDocuments | GET | /v2/clients/{clientId}/plans/{planId}/providerdocuments | List product provider documents. | N/A | No | Microservice.ProviderDocuments | Service Swagger (Microservice.ProviderDocuments) |
| providertemplates | ListProviderTemplates | GET | /v1/provider_templates | List provider templates | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| publish | CreateTemplatePublish | POST | /v1/templates/{templateId}/publish | Publish template | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| purposes | ListClientPlansPurposes | GET | /v2/clients/{clientId}/plans/{planId}/purposes | Returns a list of purposes for a given client and plan. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| purposes | UpdateClientPlansPurposes | PUT | /v2/clients/{clientId}/plans/{planId}/purposes | Creates or updates the purpose for a given client and plan. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| quotes | AddLeadQuoteApplicant | POST | /v2/leads/{leadId}/quotes/{quoteId} | Adds a secondary lead owner to a given quote. | client_financial_data, client_financial_data.quotes, myprofile, openid | No | Microservice.Quotation | Service Swagger (Microservice.Quotation) |
| quotes | CreateLeadQuote | POST | /v2/leads/{leadId}/quotes | Creates a new lead quote. | client_financial_data, client_financial_data.quotes, myprofile, openid | No | Microservice.Quotation | Service Swagger (Microservice.Quotation) |
| quotes | CreateLeadQuoteResult | POST | /v2/leads/{leadId}/quotes/{quoteId}/results | Creates a new lead quote result. | client_financial_data, client_financial_data.quotes, myprofile, openid | No | Microservice.Quotation | Service Swagger (Microservice.Quotation) |
| quotes | GetLeadQuote | GET | /v2/leads/{leadId}/quotes/{quoteId} | Returns a lead quote. | client_financial_data, client_financial_data.quotes, myprofile, openid | No | Microservice.Quotation | Service Swagger (Microservice.Quotation) |
| quotes | GetLeadQuoteResult | GET | /v2/leads/{leadId}/quotes/{quoteId}/results/{quoteResultId} | Returns a lead quote result. | client_financial_data, client_financial_data.quotes, myprofile, openid | No | Microservice.Quotation | Service Swagger (Microservice.Quotation) |
| quotes | GetQuoteResult | GET | /v2/clients/{clientId}/quotes/results/{quoteResultId} | Returns a quote result for a given identifier. | client_financial_data, client_financial_data.quotes, myprofile, openid | No | Microservice.Quotation | Service Swagger (Microservice.Quotation) |
| quotes | LeadQuoteExists | HEAD | /v2/leads/{leadId}/quotes/{quoteId} | Checks that a quote exists for a given lead. | client_financial_data, client_financial_data.quotes, myprofile, openid | No | Microservice.Quotation | Service Swagger (Microservice.Quotation) |
| quotes | LeadQuoteResultsExists | HEAD | /v2/leads/{leadId}/quotes/{quoteId}/results/{quoteResultId} | Checks that a quote result exists for a lead quote. | client_financial_data, client_financial_data.quotes, myprofile, openid | No | Microservice.Quotation | Service Swagger (Microservice.Quotation) |
| quotes | ListLeadQuoteResults | GET | /v2/leads/{leadId}/quotes/{quoteId}/results | Returns a list of lead quote results. | client_financial_data, client_financial_data.quotes, myprofile, openid | No | Microservice.Quotation | Service Swagger (Microservice.Quotation) |
| quotes | ListLeadQuotes | GET | /v2/leads/{leadId}/quotes | Returns a list of quotes. | client_financial_data, client_financial_data.quotes, myprofile, openid | No | Microservice.Quotation | Service Swagger (Microservice.Quotation) |
| quotes | ListQuotes | GET | /v2/quotes | Get all prices for the passed in securityIds on the pricedOn date. | client_financial_data, client_financial_data.quotes, myprofile, openid | No | Microservice.Security | Service Swagger (Microservice.Security) |
| quotes | ListQuotesPricedOn | GET | /v2/quotes/{pricedOn} | Get all prices for the passed in securityIds where the pricedOn date falls between pricedOnStart and pricedOnEnd, inclusively. | client_financial_data, client_financial_data.quotes, myprofile, openid | No | Microservice.Security | Service Swagger (Microservice.Security) |
| quotes | RecommendClientQuoteResult | POST | /v2/clients/{clientId}/quotes/{quoteId}/results/{quoteResultId}/recommend/{recommendationId} | Creates a new client recommendation proposal from quote result. | client_financial_data, client_financial_data.quotes, myprofile, openid | No | Microservice.Quotation | Service Swagger (Microservice.Quotation) |
| quotes | SetLeadQuoteStatus | POST | /v2/leads/{leadId}/quotes/{quoteId}/status/{status} | Sets a new status for the lead quote. | client_financial_data, client_financial_data.quotes, myprofile, openid | No | Microservice.Quotation | Service Swagger (Microservice.Quotation) |
| quotes, beta | AddClientQuoteApplicant | POST | /v2/clients/{clientId}/quotes/{quoteId} | Adds a secondary client owner to a given quote. | openid, myprofile, client_financial_data, client_financial_data.quotes | Yes | N/A | Public Swagger v2 |
| quotes, beta | ClientQuoteExists | HEAD | /v2/clients/{clientId}/quotes/{quoteId} | Checks that a quote exists for a given client. | openid, myprofile, client_financial_data, client_financial_data.quotes | Yes | N/A | Public Swagger v2 |
| quotes, beta | ClientQuoteResultsExists | HEAD | /v2/clients/{clientId}/quotes/{quoteId}/results/{quoteResultId} | Checks that a quote result exists for a client quote. | openid, myprofile, client_financial_data, client_financial_data.quotes | Yes | N/A | Public Swagger v2 |
| quotes, beta | CreateClientQuote | POST | /v2/clients/{clientId}/quotes | Creates a new client quote. | openid, myprofile, client_financial_data, client_financial_data.quotes | Yes | N/A | Public Swagger v2 |
| quotes, beta | CreateClientQuoteResult | POST | /v2/clients/{clientId}/quotes/{quoteId}/results | Creates a new client quote result. | openid, myprofile, client_financial_data, client_financial_data.quotes | Yes | N/A | Public Swagger v2 |
| quotes, beta | GetClientQuote | GET | /v2/clients/{clientId}/quotes/{quoteId} | Returns a client quote. | openid, myprofile, client_financial_data, client_financial_data.quotes | Yes | N/A | Public Swagger v2 |
| quotes, beta | GetClientQuoteResult | GET | /v2/clients/{clientId}/quotes/{quoteId}/results/{quoteResultId} | Returns a client quote result. | openid, myprofile, client_financial_data, client_financial_data.quotes | Yes | N/A | Public Swagger v2 |
| quotes, beta | GetClientQuoteResultProductBenefits | GET | /v2/clients/{clientId}/quotes/{quoteId}/results/{quoteResultId}/benefits | This endpoint allows an API user to retrieve product details of a specific quote result or illustration result for a client. | openid, myprofile, client_financial_data, client_financial_data.quotes | Yes | N/A | Public Swagger v2 |
| quotes, beta | ListClientQuoteResults | GET | /v2/clients/{clientId}/quotes/{quoteId}/results | Returns a list of client quote results. | openid, myprofile, client_financial_data, client_financial_data.quotes | Yes | N/A | Public Swagger v2 |
| quotes, beta | ListClientQuotes | GET | /v2/clients/{clientId}/quotes | Returns a list of quotes. | openid, myprofile, client_financial_data, client_financial_data.quotes | Yes | N/A | Public Swagger v2 |
| quotes, beta | SetClientQuoteStatus | POST | /v2/clients/{clientId}/quotes/{quoteId}/status/{status} | Sets a new status for the client quote. | openid, myprofile, client_financial_data, client_financial_data.quotes | Yes | N/A | Public Swagger v2 |
| quotes, beta | UpdateClientQuoteResultProductBenefits | PUT | /v2/clients/{clientId}/quotes/{quoteId}/results/{quoteResultId}/benefits | This endpoint allows an API user to update product details of a specific quote result or illustration result for a client. | openid, myprofile, client_financial_data, client_financial_data.quotes | Yes | N/A | Public Swagger v2 |
| rebalance | CreateRebalance | POST | /v2/rebalances | Post a new rebalance request. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| rebalance | GetRebalance | GET | /v2/rebalances/{id} | Get a rebalance request by Id. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| rebalance | GetRebalanceItems | GET | /v2/rebalances/{id}/items | Get a list of rebalance request items for a tenant. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| rebalance | GetRebalances | GET | /v2/rebalances | Get a list of rebalance requests for a tenant. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| rebalance | GetRebalanceSettings | GET | /v2/rebalances/settings | Returns the default settings for rebalances. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| rebalance | UpdateRebalanceSettings | PUT | /v2/rebalances/settings | Modifies the default settings for rebalances. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| recent | ListClientsRecent | GET | /v2/clients/recent | Returns a list of recent clients for the user. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| recipients | CreateCampaignsRecipient | POST | /v1/campaigns/{campaignId}/recipients |  | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| recipients | CreateMessageRecipient | POST | /v1/messages/{secureMessageId}/recipients | Creates a recipient for a secure message. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| recipients | DeleteCampaignRecipient | DELETE | /v1/campaigns/{campaignId}/recipients/{recipientId} | Deletes the specified campaign recipient | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| recipients | DeleteMessageRecipient | DELETE | /v1/messages/{secureMessageId}/recipients/{recipientId} | Deletes a recipient for message. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| recipients | ExistsMessageRecipient | HEAD | /v1/messages/{secureMessageId}/recipients/{recipientId} | Gets recipient if any, for the specified secure message. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| recipients | GetCampaignRecipient | GET | /v1/campaigns/{campaignId}/recipients/{recipientId} | Retrieve details for a specified campaign recipient | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| recipients | GetMessageRecipient | GET | /v1/messages/{secureMessageId}/recipients/{recipientId} | Gets recipient if any, for the specified secure message. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| recipients | ListCampaignRecipients | GET | /v1/campaigns/{campaignId}/recipients |  | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| recipients | ListCampaignsRecipients | PATCH | /v1/campaigns/{campaignId}/recipients |  | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| recipients | ListClientEmailsRecipients | GET | /v1/clients/{clientId}/emails/{emailId}/recipients |  | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| recipients | ListMessageRecipients | GET | /v1/messages/{secureMessageId}/recipients | Gets all recipients for the specified oData query on either/or PartyId/Name. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| recipients | UpdateClientEmailsRecipients | PUT | /v1/clients/{clientId}/emails/{emailId}/recipients |  | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| recommendations | CreateClientRecommendation | POST | /v2/clients/{clientId}/recommendations2 | Creates a client recommendation. | N/A | No | Microservice.Recommend | Service Swagger + Documentation Ignore |
| recommendations | CreateRecommendationProposal | POST | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals | Creates a recommendation proposal. | N/A | No | Microservice.Recommend | Service Swagger + Documentation Ignore |
| recommendations | CreateTenantRecommendationCategory | POST | /v2/recommendations2/categories | Create a recommendation category document. | N/A | No | Microservice.Recommend | Service Swagger + Documentation Ignore |
| recommendations | CreateTenantRecommendationSubCategory | POST | /v2/recommendations2/subcategories | Creates a recommendation subcategory. | N/A | No | Microservice.Recommend | Service Swagger + Documentation Ignore |
| recommendations | DeleteClientRecommendation | DELETE | /v2/clients/{clientId}/recommendations2/{recommendationId} | Deletes a recommendation. | N/A | No | Microservice.Recommend | Service Swagger + Documentation Ignore |
| recommendations | DeleteRecommendationProposal | DELETE | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals/{proposalId} | Deletes a recommendation proposal. | N/A | No | Microservice.Recommend | Service Swagger + Documentation Ignore |
| recommendations | DeleteTenantRecommendationCategory | DELETE | /v2/recommendations2/categories/{categoryId} | Deletes a recommendation category. | N/A | No | Microservice.Recommend | Service Swagger + Documentation Ignore |
| recommendations | DeleteTenantRecommendationSubCategory | DELETE | /v2/recommendations2/subcategories/{subCategoryId} | Deletes a recommendation subcategory. | N/A | No | Microservice.Recommend | Service Swagger + Documentation Ignore |
| recommendations | GetClientRecommendation | GET | /v2/clients/{clientId}/recommendations2/{recommendationId} | Gets a recommendation. | N/A | No | Microservice.Recommend | Service Swagger + Documentation Ignore |
| recommendations | GetRecommendationProposal | GET | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals/{proposalId} | Gets a recommendation proposal. | N/A | No | Microservice.Recommend | Service Swagger + Documentation Ignore |
| recommendations | GetServiceCaseRecommendation | GET | /v2/servicecases/{serviceCaseId}/recommendations/{recommendationId} | Returns a service case recommendation. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| recommendations | GetTenantRecommendationCategory | GET | /v2/recommendations2/categories/{categoryId} | Returns a recommendation category document. | N/A | No | Microservice.Recommend | Service Swagger + Documentation Ignore |
| recommendations | GetTenantRecommendationSubCategory | GET | /v2/recommendations2/subcategories/{subCategoryId} | Returns a recommendation subcategory document. | N/A | No | Microservice.Recommend | Service Swagger + Documentation Ignore |
| recommendations | ListClientRecommendations | GET | /v2/clients/{clientId}/recommendations2 | Returns a list of client recommendations. | N/A | No | Microservice.Recommend | Service Swagger + Documentation Ignore |
| recommendations | ListPlanRecommendationProposals | GET | /v2/plans/{planId}/recommendations/proposals | Lists recommendation proposals. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| recommendations | ListRecommendationProposals | GET | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals | Lists recommendation proposals. | N/A | No | Microservice.Recommend | Service Swagger + Documentation Ignore |
| recommendations | ListServiceCaseRecommendations | GET | /v2/servicecases/{serviceCaseId}/recommendations | Returns a list of service case recommendations. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| recommendations | ListTenantRecommendationCategories | GET | /v2/recommendations2/categories | Returns a paged collection of recommendation category documents. | N/A | No | Microservice.Recommend | Service Swagger + Documentation Ignore |
| recommendations | ListTenantRecommendationSubCategories | GET | /v2/recommendations2/subcategories | Returns a paged collection of recommendation subcategory documents. | N/A | No | Microservice.Recommend | Service Swagger + Documentation Ignore |
| recommendations | PatchClientRecommendation | PATCH | /v2/clients/{clientId}/recommendations2/{recommendationId} | Allows an API consumer to update a recommendation for a given client. | N/A | No | Microservice.Recommend | Service Swagger + Documentation Ignore |
| recommendations | PatchRecommendationProposal | PATCH | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals/{proposalId} | Patch a recommendation proposal. | N/A | No | Microservice.Recommend | Service Swagger (Microservice.Recommend) |
| recommendations | PatchServiceCaseRecommendations | PATCH | /v2/servicecases/{serviceCaseId}/recommendations | Updates a list of recommendation priorities for service case. | N/A | No | Microservice.Recommend | Service Swagger + Documentation Ignore |
| recommendations | UpdateRecommendationProposal | PUT | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals/{proposalId} | Updates a recommendation proposal. | N/A | No | Microservice.Recommend | Service Swagger + Documentation Ignore |
| recommendations | UpdateTenantRecommendationCategory | PUT | /v2/recommendations2/categories/{categoryId} | Returns a recommendation category document. | N/A | No | Microservice.Recommend | Service Swagger + Documentation Ignore |
| recommendations | UpdateTenantRecommendationSubCategory | PUT | /v2/recommendations2/subcategories/{subCategoryId} | Returns a recommendation subcategory document. | N/A | No | Microservice.Recommend | Service Swagger + Documentation Ignore |
| refdata | ListRefdata | GET | /v2/incomes/refdata/{type} | Get the list of Reference Data. | N/A | No | Monolith.FactFind | Service Swagger (Monolith.FactFind) |
| regions | GetRegion | GET | /v2/regions/{regionId} | Get Region by Region Id. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| regions | ListRegions | GET | /v2/regions | List Regions based Region Ids. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| relationships | CreateAccountRelationship | POST | /v2/accounts/{accountId}/relationships | Creates a new Relationship for the given Account. | client_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| relationships | CreateClientRelationship | POST | /v2/clients/{clientId}/relationships | Creates a relationship for a given client. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| relationships | CreateClientRelationshipAccess | POST | /v2/clients/{clientId}/relationships/{relationshipId}/access | Grants access for the Relationship relation to the Relationship subject. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| relationships | CreateClientRelationshipWithRelation | POST | /v2/clients/{clientId}/relationships/relation | Creates a new relationship and relation for the given client. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| relationships | CreateLeadRelationship | POST | /v2/leads/{leadId}/relationships | Creates a relationship for a given lead. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| relationships | CreatePersonalContactRelationship | POST | /v2/clients/{clientId}/personalcontacts/{personalContactId}/relationships | Add a new relationship for a given personal contact | client_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| relationships | DeleteAccountRelationship | DELETE | /v2/accounts/{accountId}/relationships/{relationshipId} | Deletes an existing Relationship for the given Account. | client_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| relationships | DeleteClientRelationship | DELETE | /v2/clients/{clientId}/relationships/{relationshipId} | Deletes a relationship for a given client and relationship. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| relationships | DeleteClientRelationshipAccess | DELETE | /v2/clients/{clientId}/relationships/{relationshipId}/access | Revokes access from the Relationship relation to the Relationship subject. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| relationships | DeleteLeadRelationship | DELETE | /v2/leads/{leadId}/relationships/{relationshipId} | Deletes a relationship for a given lead and relationship. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| relationships | DeletePersonalContactRelationship | DELETE | /v2/clients/{clientId}/personalcontacts/{personalContactId}/relationships/{relationshipId} | Delete an existing relationship | client_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| relationships | GetClientRelationship | GET | /v2/clients/{clientId}/relationships/{relationshipId} | Returns a relationship for a given client and relationship. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| relationships | GetLeadRelationship | GET | /v2/leads/{leadId}/relationships/{relationshipId} | Returns a relationship for a given lead and relationship. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| relationships | GetPersonalContactRelationship | GET | /v2/clients/{clientId}/personalcontacts/{personalContactId}/relationships/{relationshipId} | Get given relationhsip for a given personal contact | client_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| relationships | ListClientRelationships | GET | /v2/clients/{clientId}/relationships | Returns a list of relationships for a given client. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| relationships | ListLeadRelationships | GET | /v2/leads/{leadId}/relationships | Returns a list of relationships for a given lead. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| relationships | ListPersonalContactRelationships | GET | /v2/clients/{clientId}/personalcontacts/{personalContactId}/relationships | List relationships for a given personal contact | client_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| relationships | UpdateAccountRelationship | PUT | /v2/accounts/{accountId}/relationships/{relationshipId} | Updates an existing Relationship for the given Account. | client_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| relationships | UpdateClientRelationship | PUT | /v2/clients/{clientId}/relationships/{relationshipId} | Updates a relationship for a given client and relationship. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| relationships | UpdateLeadRelationship | PUT | /v2/leads/{leadId}/relationships/{relationshipId} | Updates a relationship for the given lead and relationship. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| relationships | UpdatePersonalContactRelationship | PUT | /v2/clients/{clientId}/personalcontacts/{personalContactId}/relationships/{relationshipId} | Update an existing relationship | client_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| relationshiptypes | ListRelationshiptypes | GET | /v2/relationshiptypes | Returns a list of relationship types. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| reply | CreateMessageReply | POST | /v1/messages/{secureMessageId}/reply | Reply on secure message. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| report | GetCampaignReport | GET | /v1/campaigns/{campaignId}/report | Get campaign report | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| reportartifact | CreateReportArtifact | POST | /v2/report/artifacts |  | N/A | No | Monolith.Report | Service Swagger (Monolith.Report) |
| reportartifact | DeleteArtifact | DELETE | /v2/report/artifacts/{id} | Deletes a artifact by ID. | N/A | No | Monolith.Report | Service Swagger (Monolith.Report) |
| reportartifact | GetReportArtifact | GET | /v2/report/artifacts/{id} | Get Artifact | N/A | No | Monolith.Report | Service Swagger (Monolith.Report) |
| reportartifact | ListReportArtifact | GET | /v2/report/artifacts | List artifacts. | N/A | No | Monolith.Report | Service Swagger (Monolith.Report) |
| reportartifact | UploadArtifactObject | PUT | /v2/report/artifacts/{id}/object | Upload artifact | N/A | No | Monolith.Report | Service Swagger (Monolith.Report) |
| reportbranding | CreateReportBranding | POST | /v2/report/branding |  | N/A | No | Monolith.Report | Service Swagger (Monolith.Report) |
| reportbranding | DeleteReportBranding | DELETE | /v2/report/branding/{id} | Deletes a a theme by ID. | N/A | No | Monolith.Report | Service Swagger (Monolith.Report) |
| reportbranding | GetReportBranding | GET | /v2/report/branding/{id} | Gets a report branding configuration | N/A | No | Monolith.Report | Service Swagger (Monolith.Report) |
| reportbranding | ListReportBranding | GET | /v2/report/branding | Returns a ReportBrandingDocumentCollection. | N/A | No | Monolith.Report | Service Swagger (Monolith.Report) |
| reportbranding | UpdateReportBranding | PUT | /v2/report/branding/{id} |  | N/A | No | Monolith.Report | Service Swagger (Monolith.Report) |
| reportgroup | CreateQuicksightGroup | POST | /v2/quicksight/reportgroups | Creates a quicksight group. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| reportgroup | DeleteQuicksightGroup | DELETE | /v2/quicksight/reportgroups/{id} | Deletes a quicksight group. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| reportgroup | GetQuicksightGroup | GET | /v2/quicksight/reportgroups/{id} | Gets a quicksight group. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| reportgroup | ListQuicksightGroups | GET | /v2/quicksight/reportgroups | Gets a collection of quicksight groups. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| reportgroup | QuicksightGroupExists | HEAD | /v2/quicksight/reportgroups/{id} | Checks that a quicksight group exists. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| reportgroup | UpdateQuicksightGroup | PUT | /v2/quicksight/reportgroups/{id} | Updates a quicksight group. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| reportgroupsuser | AssignQuicksightGroupUser | POST | /v2/quicksight/reportgroups/{groupId}/users/{userId} | Adds a quickSight user to a quickSight report group. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| reportgroupsuser | DeleteQuicksightGroupUser | DELETE | /v2/quicksight/reportgroups/{groupId}/users/{userId} | Removes a user from a group so that the user is no longer a member of the group. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| reportgroupsuser | ListQuicksightGroupUsers | GET | /v2/quicksight/reportgroups/{groupId}/users | Gets a collection of users in a report group. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| reportgrouptorole | AssignQuicksightGroupToIoRole | POST | /v2/roles/{roleId}/reportgroups/{reportGroupId} | Assign quicksight report group to a role. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| reportgrouptorole | DeleteQuicksightGroupToIoRole | DELETE | /v2/roles/{roleId}/reportgroups/{reportGroupId} | Deletes a quicksight report group assignment from a role. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| reportgrouptorole | ListQuicksightGroupToIoRole | GET | /v2/roles/{roleId}/reportgroups | Gets a collection of report groups related to a role. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| requirements | GetClientRequirement | GET | /v2/clients/{clientId}/requirements/{requirementId} | Gets a requirement. | N/A | No | Monolith.Crm | Service Swagger + Documentation Ignore |
| requirements | ListClientRequirements | GET | /v2/clients/{clientId}/requirements | Returns a list of requirements. | N/A | No | Monolith.Crm | Service Swagger + Documentation Ignore |
| restart | CreateInstanceRestart | POST | /v1/instances/{instanceId}/restart |  | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| restore | CreateTemplateRestore | POST | /v1/templates/{templateId}/restore |  | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| resume | CreateInstanceResume | POST | /v1/instances/{instanceId}/resume |  | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| reviews | CreateReview | POST | /v1/reviews |  | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| reviews | DeleteReview | DELETE | /v1/reviews/{reviewId} |  | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| reviews | GetReview | GET | /v1/reviews/{reviewId} | Get a specified review | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| reviews | ListReviews | GET | /v1/reviews | List reviews | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| revoke | CreateMessageRevoke | POST | /v1/messages/{secureMessageId}/revoke | Revoke a specific message. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| riskprofiles | ArchiveRiskProfile | POST | /v2/riskprofiles/{riskProfileId}/archive | Archive the Risk Profile | N/A | No | Monolith.Atr | Service Swagger (Monolith.Atr) |
| riskprofiles | CreateRiskProfile | POST | /v2/riskprofiles | Creates a new Risk Profile. | N/A | No | Monolith.Atr | Service Swagger (Monolith.Atr) |
| riskprofiles | GetRiskProfile | GET | /v2/riskprofiles/{riskProfileId} | Retrieves an Risk Profile. | N/A | No | Monolith.Atr | Service Swagger (Monolith.Atr) |
| riskprofiles | ListRiskProfiles | GET | /v2/riskprofiles | Retrieves a list of all the risk profiles or those that match the filter provided. | N/A | No | Monolith.Atr | Service Swagger (Monolith.Atr) |
| riskprofiles | PatchRiskProfile | PATCH | /v2/riskprofiles/{riskProfileId} | Patch risk profile | N/A | No | Monolith.Atr | Service Swagger (Monolith.Atr) |
| riskprofiles | UnarchiveRiskProfile | POST | /v2/riskprofiles/{riskProfileId}/unarchive | Unarchive the Risk Profile | N/A | No | Monolith.Atr | Service Swagger (Monolith.Atr) |
| roles | ListTemplatesRoles | GET | /v1/templates/{templateId}/roles | List template roles | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| roles | UpdateTemplatesRoles | PUT | /v1/templates/{templateId}/roles |  | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| saves | CreateSave | POST | /v1/plugin/save/{templateVersionId} |  | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| schema | GetPluginSchema | GET | /v1/plugin/schema | Download data source schema | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| search | ListPropertyAddressesSearch | GET | /v2/properties/addresses/search | Searches addresses by the specified query. | N/A | No | Microservice.PropertyProvider | Service Swagger (Microservice.PropertyProvider) |
| searches | ListClientsSearch | GET | /v2/clients/search | Returns a list of quick search clients for the user. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| sectors | GetSector | GET | /v2/sectors/{sectorId} | Get Sector based on Sector Id. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| sectors | ListSectors | GET | /v2/sectors | List Sector based on Sector Ids. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| securities | GetSecurity | GET | /v2/securities/{securityId} | Gets an individual Security based on SecurityId. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| securities | ListExistingSecurities | POST | /v2/securities/exist | Returns a List of Security Ids and if they exist in the database. Max number of exists requests = 500 | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| securities | ListSecurities | GET | /v2/securities | Gets a List of Securities based on SecurityIds, IdentifierSymbol, or Name. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| securities | ListSecuritiesByIdentifierSymbols | GET | /v2/securities/byidentifiersymbols | Gets a List Securities based on Identifier Type, Identifier Symbols. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| securities | ListSecuritiesByIds | GET | /v2/securities/byids | Get a List of Securities based on SecurityIds | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| securities | ListSecuritiesBySourceReferences | GET | /v2/securities/bysourcereferences | Gets a List Securities based on Sources and Source Reference Ids. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| securities | ListSecuritiesV2 | GET | /v2/securitiesV2 | Gets a List of Securities based on security filters. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| security | GetOptionSecurity | GET | /v1/options/security | Get template security options | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| security | UpdateOptionSecurity | PUT | /v1/options/security | Update template security options | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| securitygroups | DeleteSecurityGroup | DELETE | /v2/securitygroups/{securityGroupId} | Delete a Security Group by SecurityGroupId. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| securitygroups | GetSecurityGroup | GET | /v2/securitygroups/{securityGroupId} | Get a Security Group By Security Group Id. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| securitygroups | ListSecurityGroupGroupSecurities | GET | /v2/securitygroups/{securityGroupId}/groupsecurities | Get a Security GroupGroup Securities by filters. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| securitygroups | ListSecurityGroups | GET | /v2/securitygroups | Get a List of Security Groups. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| securitygroups | ListSecurityGroupsSecurities | GET | /v2/securitygroups/securities | Get a Security Group Securities by filters. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| securitygroups | PostSecurityGroups | POST | /v2/securitygroups | Create Security Groups. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| securitygroups | PutSecurityGroups | PUT | /v2/securitygroups/{securityGroupId} | Update a Security Group. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| securitytypes | ListSecurityTypes | GET | /v2/securitytypes | Get a List of Security Types. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| segments | GetCampaignSegment | GET | /v1/campaigns/{campaignId}/segments |  | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| segments | UpdateCampaignSegments | PUT | /v1/campaigns/{campaignId}/segments |  | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| send | SendClientEmail | POST | /v1/clients/{clientId}/emails/{emailId}/send |  | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| send | SendMessage | POST | /v1/messages/{secureMessageId}/send | Send secure message to a single recipient. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| sendbulk | SendbulkCampaignemails | POST | /v1/campaignemails/sendbulk | Send bulk templated email | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| sendraw | SendRawMail | POST | /v1/mail/send_raw |  | N/A | No | Microservice.Email | Service Swagger (Microservice.Email) |
| sendtemplate | SendTemplateMail | POST | /v1/mail/send_template | Send a templated email Attachments are sent as multi part content | N/A | No | Microservice.Email | Service Swagger (Microservice.Email) |
| sendtestemail | SendtestemailCampaigns | POST | /v1/campaigns/{campaignId}/sendtestemail | Send a test email for the specified template | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| sendtestemail | SendtestemailCampaigntemplates | POST | /v1/campaigntemplates/{templateId}/sendtestemail | Send a test email for the specified template | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| sendtoadviser | SendtoadviserMessage | POST | /v1/messages/{secureMessageId}/sendtoadviser | Send secure message from a customer to an adviser. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| serviceactivities | CreateServiceActivity | POST | /v2/clients/{clientId}/service-activities | Creates a service activity for a specific client. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| serviceactivities | GetServiceActivity | GET | /v2/clients/{clientId}/service-activities/{serviceActivityId} | Gets a service activity for a specific client. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| serviceactivities | GetServiceActivitySummary | GET | /v2/clients/service-activities/summary | Retrieves summary of service activities across all clients for the current adviser | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| serviceactivities | ListClientServiceActivities | GET | /v2/clients/{clientId}/service-activities | List all service activities for a clients | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| serviceactivities | ListServiceActivities | GET | /v2/clients/service-activities | List all service activities for all clients | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| serviceactivities | UpdateServiceActivity | PUT | /v2/clients/{clientId}/service-activities/{serviceActivityId} | Updates a service activity for a specific client. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| servicecasecategories | GetServiceCaseCategory | GET | /v2/servicecases/categories/{serviceCaseCategoryId} | Gets a serviceCase category by Id. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| servicecasecategories | ListServiceCaseCategories | GET | /v2/servicecases/categories | List all serviceCases categories. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| servicecases | CreateClientServicecases | POST | /v2/clients/{clientId}/servicecases | Creates a service case for a given client. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| servicecases | DeleteClientServicecase | DELETE | /v2/clients/{clientId}/servicecases/{serviceCaseId} | Deletes a service case. | client_financial_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| servicecases | GetClientServicecase | GET | /v2/clients/{clientId}/servicecases/{serviceCaseId} | Returns a service case for a given client and service case. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| servicecases | ListClientServicecases | GET | /v2/clients/{clientId}/servicecases | Returns a list of service cases for a given client. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| servicecases | UpdateClientServicecase | PUT | /v2/clients/{clientId}/servicecases/{serviceCaseId} | Updates a service case for a given client and service case. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| servicecasestatus | GetServiceCaseStatus | GET | /v2/servicecases/statuses/{serviceCaseStatusId} | Returns a single ServiceCase status. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| servicecasestatus | ListServiceCaseStatuses | GET | /v2/servicecases/statuses | Returns a list of ServiceCase statuses. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| servicehistories | GetClientServiceRecord | GET | /v2/clients/{clientId}/servicehistory/{clientServiceRecordId} | Returns a client service record. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| servicehistories | ListClientServiceHistory | GET | /v2/clients/{clientId}/servicehistory | Returns a list of client service history. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| session | GetBeginsession | GET | /session/beginsession |  | N/A | No | Microservice.Identity | Service Swagger (Microservice.Identity) |
| session | GetQuicksightSessionEmbedUrl | GET | /v2/quicksight/session/embed-url | Generates a session URL and authorization code that you can use to embed the Amazon QuickSight console in your web server code. | N/A | No | Microservice.Quicksight | Service Swagger (Microservice.Quicksight) |
| settings | CreateOrUpdateSettingForClient | PUT | /v2/settings/{key}/clients/{clientId} | Creates or updates a particular setting for the specified client. | N/A | No | Microservice.Config | Service Swagger (Microservice.Config) |
| settings | CreateOrUpdateSettingForGroup | PUT | /v2/settings/{key}/groups/{groupId} | Creates or updates a particular setting for the specified group. | N/A | No | Microservice.Config | Service Swagger (Microservice.Config) |
| settings | CreateOrUpdateSettingForTenant | PUT | /v2/settings/{key}/tenants/{tenantId} | Creates or updates a particular setting for the specified tenant. | N/A | No | Microservice.Config | Service Swagger (Microservice.Config) |
| settings | DeleteSetting | DELETE | /v1/settings | Delete secure message notification settings | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| settings | DeleteSettingForClient | DELETE | /v2/settings/{key}/clients/{clientId} | Delete a particular setting for the specified client. | N/A | No | Microservice.Config | Service Swagger (Microservice.Config) |
| settings | DeleteSettingForGroup | DELETE | /v2/settings/{key}/groups/{groupId} | Delete a particular setting for the specified group. | N/A | No | Microservice.Config | Service Swagger (Microservice.Config) |
| settings | DeleteSettingForTenant | DELETE | /v2/settings/{key}/tenants/{tenantId} | Deletes a particular setting for the specified tenant. | N/A | No | Microservice.Config | Service Swagger (Microservice.Config) |
| settings | GetEffectiveClientSetting | GET | /v2/clients/{clientId}/settings/{key} | Get effective setting for the specified client. | N/A | No | Microservice.Config | Service Swagger (Microservice.Config) |
| settings | GetEffectiveClientSettings | GET | /v2/clients/{clientId}/settings | Get all effective settings for the specified client. | N/A | No | Microservice.Config | Service Swagger (Microservice.Config) |
| settings | GetEffectiveGroupSetting | GET | /v2/groups/{groupId}/settings/{key} | Get effective setting for the specified group. | N/A | No | Microservice.Config | Service Swagger (Microservice.Config) |
| settings | GetEffectiveGroupSettings | GET | /v2/groups/{groupId}/settings | Get all effective settings for the specified group. | N/A | No | Microservice.Config | Service Swagger (Microservice.Config) |
| settings | GetSetting | GET | /v1/settings | Get secure message notification settings | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| settings | GetSettingForClient | GET | /v2/settings/{key}/clients/{clientId} | Get a particular setting for the specified client. | N/A | No | Microservice.Config | Service Swagger (Microservice.Config) |
| settings | GetSettingForTenant | GET | /v2/settings/{key}/tenants/{tenantId} | Get a particular setting for the specified tenant. | N/A | No | Microservice.Config | Service Swagger (Microservice.Config) |
| settings | GetSettingGroup | GET | /v2/settings/{key}/groups/{groupId} | Get a particular setting for the specified group. | N/A | No | Microservice.Config | Service Swagger (Microservice.Config) |
| settings | GetSettingTenantGroup | GET | /v2/settings/{key}/tenants/{tenantId}/groups/{groupId} | Get a particular setting for the specified group. | N/A | No | Microservice.Config | Service Swagger (Microservice.Config) |
| settings | UpdateSetting | PUT | /v1/settings | Creates or update secure message notification settings | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| shares | ListClientShares | GET | /v2/clients/{clientId}/shares | Returns a list of client notes that have been shared by an adviser. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| signedurl | GetAvatarSignedurl | GET | /v2/avatars/signedurl | Get Avatar signed url for client for PUT | N/A | No | Microservice.Avatar | Service Swagger (Microservice.Avatar) |
| signers | UpdateDocuSignEnvelopeSigners | PUT | /v2/clients/docusign_envelopes/{envelopeId}/signers | UpdateAsync Envelope Signers in the third party docuSign and in the DB | N/A | No | Microservice.DocuSign | Service Swagger (Microservice.DocuSign) |
| signurl | SignDocuSignEnvelope | GET | /v2/clients/{clientId}/docusign_envelopes/{envelopeId}/sign_url | Get sign URL of eSignature Envelope | N/A | No | Microservice.DocuSign | Service Swagger (Microservice.DocuSign) |
| splits | ClientFeeSplitExists | HEAD | /v2/clients/{clientId}/fees/{feeId}/splits/{splitId} | Checks that the client fee split exists. | openid, myprofile, firm_data, firm_data.splits | Yes | N/A | Public Swagger v2 |
| splits | CreateClientFeeSplit | POST | /v2/clients/{clientId}/fees/{feeId}/splits | Creates a client fee split document. | openid, myprofile, firm_data, firm_data.splits | Yes | N/A | Public Swagger v2 |
| splits | CreatePlanSplit | POST | /v2/clients/{clientId}/plans/{planId}/splits | Creates a plan split document. | openid, myprofile, firm_data, firm_data.splits | Yes | N/A | Public Swagger v2 |
| splits | CreateSplit | POST | /v2/splits | Creates a split document. | openid, myprofile, firm_data, firm_data.splits | Yes | N/A | Public Swagger v2 |
| splits | DeleteClientFeeSplit | DELETE | /v2/clients/{clientId}/fees/{feeId}/splits/{splitId} | Deletes a client fee split document. | openid, myprofile, firm_data, firm_data.splits | Yes | N/A | Public Swagger v2 |
| splits | DeleteClientPlanSplit | DELETE | /v2/clients/{clientId}/plans/{planId}/splits/{splitId} | Removes the association between a plan and service case. | firm_data, firm_data.splits, myprofile, openid | No | Monolith.Commission | Service Swagger (Monolith.Commission) |
| splits | DeletePlanSplit | DELETE | /v2/clients/{clientId}/plans/{planId}/splits/{splitId} | Deletes a plan split document. | openid, myprofile, firm_data, firm_data.splits | Yes | N/A | Public Swagger v2 |
| splits | DeleteSplit | DELETE | /v2/splits/{splitId} | Deletes a split document. | openid, myprofile, firm_data, firm_data.splits | Yes | N/A | Public Swagger v2 |
| splits | GetClientFeeSplit | GET | /v2/clients/{clientId}/fees/{feeId}/splits/{splitId} | Returns a client fee split document. | openid, myprofile, firm_data, firm_data.splits | Yes | N/A | Public Swagger v2 |
| splits | GetClientPlanSplit | GET | /v2/clients/{clientId}/plans/{planId}/splits/{splitId} | Get plan split. | firm_data, firm_data.splits, myprofile, openid | No | Monolith.Commission | Service Swagger (Monolith.Commission) |
| splits | GetPlanSplit | GET | /v2/clients/{clientId}/plans/{planId}/splits/{splitId} | Returns a plan split document. | openid, myprofile, firm_data, firm_data.splits | Yes | N/A | Public Swagger v2 |
| splits | GetSplit | GET | /v2/splits/{splitId} | Returns a split document. | openid, myprofile, firm_data, firm_data.splits | Yes | N/A | Public Swagger v2 |
| splits | ListClientFeeSplits | GET | /v2/clients/{clientId}/fees/{feeId}/splits | Returns a collection of client fee splits | openid, myprofile, firm_data, firm_data.splits | Yes | N/A | Public Swagger v2 |
| splits | ListClientPlanSplits | GET | /v2/clients/{clientId}/plans/{planId}/splits | Get splits for a plan. | firm_data, firm_data.splits, myprofile, openid | No | Monolith.Commission | Service Swagger (Monolith.Commission) |
| splits | ListPlanSplits | GET | /v2/clients/{clientId}/plans/{planId}/splits | Returns a collection of plan splits | openid, myprofile, firm_data, firm_data.splits | Yes | N/A | Public Swagger v2 |
| splits | ListSplits | GET | /v2/splits | Returns a collection of splits | openid, myprofile, firm_data, firm_data.splits | Yes | N/A | Public Swagger v2 |
| splits | PlanSplitExists | HEAD | /v2/clients/{clientId}/plans/{planId}/splits/{splitId} | Checks that the plan split exists. | openid, myprofile, firm_data, firm_data.splits | Yes | N/A | Public Swagger v2 |
| splits | SplitExists | HEAD | /v2/splits/{splitId} | Checks that the split exists. | openid, myprofile, firm_data, firm_data.splits | Yes | N/A | Public Swagger v2 |
| splits | UpdateClientFeeSplit | PUT | /v2/clients/{clientId}/fees/{feeId}/splits/{splitId} | Updates a client fee split document. | openid, myprofile, firm_data, firm_data.splits | Yes | N/A | Public Swagger v2 |
| splits | UpdateClientPlanSplit | PUT | /v2/clients/{clientId}/plans/{planId}/splits/{splitId} | Update a plan split. | firm_data, firm_data.splits, myprofile, openid | No | Monolith.Commission | Service Swagger (Monolith.Commission) |
| splits | UpdatePlanSplit | PUT | /v2/clients/{clientId}/plans/{planId}/splits/{splitId} | Updates a plan split document. | openid, myprofile, firm_data, firm_data.splits | Yes | N/A | Public Swagger v2 |
| splits | UpdatePlanSplitsFromTemplate | PUT | /v2/clients/{clientId}/plans/{planId}/splits | Create or update plan splits using the split templates. | firm_data, firm_data.splits, myprofile, openid | No | Monolith.Commission | Service Swagger (Monolith.Commission) |
| splits | UpdateSplit | PUT | /v2/splits/{splitId} | Updates a split document. | openid, myprofile, firm_data, firm_data.splits | Yes | N/A | Public Swagger v2 |
| splittemplates | GetClientSplitTemplate | GET | /v2/clients/{clientId}/splittemplates/{templateId} | Returns a single split template for an client. | openid, myprofile, firm_data, firm_data.split.templates | Yes | N/A | Public Swagger v2 |
| splittemplates | GetSplitTemplate | GET | /v2/advisers/{adviserId}/splittemplates/{templateId} | Returns a single split template for an adviser. | openid, myprofile, firm_data, firm_data.split.templates | Yes | N/A | Public Swagger v2 |
| splittemplates | ListClientSplitTemplates | GET | /v2/clients/{clientId}/splittemplates | Returns a list of split templates for the given client | openid, myprofile, firm_data, firm_data.split.templates | Yes | N/A | Public Swagger v2 |
| splittemplates | ListSplitTemplates | GET | /v2/advisers/{adviserId}/splittemplates | Returns a list of split templates for the given adviser | openid, myprofile, firm_data, firm_data.split.templates | Yes | N/A | Public Swagger v2 |
| statuses | ClientFeeStatusExists | HEAD | /v2/clients/{clientId}/fees/{feeId}/statuses/{feeStatusId} | Check fee status exists. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| statuses | CreateClientFeeStatus | POST | /v2/clients/{clientId}/fees/{feeId}/statuses | Change client fee status | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| statuses | CreateFeeStatus | POST | /v2/fees/{feeId}/statuses | Change fee status. | openid, myprofile, firm_data, firm_data.fee | Yes | N/A | Public Swagger v2 |
| statuses | CreatePlanFeeStatus | POST | /v2/clients/{clientId}/plans/{planId}/fees/{feeId}/statuses | Change plan fee status | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| statuses | CreatePlanStatuses | POST | /v2/clients/{clientId}/plans/{planId}/statuses | Creates status history for a given client and plan. | openid, myprofile, client_data | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Monolith.Portfolio |
| statuses | FeeStatusExists | HEAD | /v2/fees/{feeId}/statuses/{feeStatusId} | Checks fee status exists. | openid, myprofile, firm_data, firm_data.fee | Yes | N/A | Public Swagger v2 |
| statuses | GetClientFeeStatus | GET | /v2/clients/{clientId}/fees/{feeId}/statuses/{feeStatusId} | Get fee status | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| statuses | GetFeeStatus | GET | /v2/fees/{feeId}/statuses/{feeStatusId} | Get a fee status | openid, myprofile, firm_data, firm_data.fee | Yes | N/A | Public Swagger v2 |
| statuses | GetPlanFeeStatus | GET | /v2/clients/{clientId}/plans/{planId}/fees/{feeId}/statuses/{feeStatusId} | Get fee status. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| statuses | GetPlanStatus | GET | /v2/clients/{clientId}/plans/{planId}/statuses/{planStatusId} | Retrieves a specific history record | openid, myprofile, client_data | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Monolith.Portfolio |
| statuses | ListClientFeeStatuses | GET | /v2/clients/{clientId}/fees/{feeId}/statuses | Returns fee status history collection. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| statuses | ListClientPlanStatuses | GET | /v2/clients/{clientId}/plans/{planId}/statuses | Returns a list of status histories for a given client and plan. | openid, myprofile, client_data | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Monolith.Portfolio |
| statuses | ListFeeStatuses | GET | /v2/fees/{feeId}/statuses | Returns fee status history collection. | openid, myprofile, firm_data, firm_data.fee | Yes | N/A | Public Swagger v2 |
| statuses | ListPlanFeeStatuses | GET | /v2/clients/{clientId}/plans/{planId}/fees/{feeId}/statuses | Returns fee status history collection. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| statuses | PlanFeeStatusExists | HEAD | /v2/clients/{clientId}/plans/{planId}/fees/{feeId}/statuses/{feeStatusId} | Check a fee status exists | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| steps | CreateTemplateSteps | POST | /v1/templates/{templateId}/steps | Create template step | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| steps | DeleteTemplateStep | DELETE | /v1/templates/{templateId}/steps/{stepId} | Delete a template step | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| steps | GetTemplateStep | GET | /v1/templates/{templateId}/steps/{stepId} | List template steps | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| steps | ListInstancesSteps | GET | /v1/instances/{instanceId}/steps |  | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| steps | ListTemplateSteps | GET | /v1/templates/{templateId}/steps | List template steps | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| steps | PatchTemplateStep | PATCH | /v1/templates/{templateId}/steps/{stepId} |  | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| stocks | DeleteStock | DELETE | /v2/stocks/{securityId} | Delete a Security based on Security Id. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| stocks | GetStock | GET | /v2/stocks/{securityId} | Gets a Stock Security based on Security Id. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| stocks | ListStocks | GET | /v2/stocks | Delete a Security based on Security Id. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| stocks | PostStocks | POST | /v2/stocks | Create Stock Securities. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| stocks | PutStocks | PUT | /v2/stocks | Update Stock Securities. | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| subscribe | CreateEventSubscribe | POST | /v1/events/subscribe | Add a new subscription for the party based on given request. | N/A | No | Microservice.ChangeNotification | Service Swagger (Microservice.ChangeNotification) |
| subscribe | ListEventsSubscribe | GET | /v1/events/subscribe | Get a list of subscriptions for the party. | N/A | No | Microservice.ChangeNotification | Service Swagger (Microservice.ChangeNotification) |
| subscribes | DeleteSubscribe | DELETE | /v1/events/subscribe/{noun} | Deletes the subscription settings for the party based on noun. | N/A | No | Microservice.ChangeNotification | Service Swagger (Microservice.ChangeNotification) |
| subscribes | GetSubscribe | GET | /v1/events/subscribe/{noun} | Get subscription details for the party for the specified noun. | N/A | No | Microservice.ChangeNotification | Service Swagger (Microservice.ChangeNotification) |
| subscribes | UpdateSubscribe | PUT | /v1/events/subscribe/{noun} | Update the subscription settings for the party based on the noun. | N/A | No | Microservice.ChangeNotification | Service Swagger (Microservice.ChangeNotification) |
| subscriptions | CreateSubscription | POST | /v1/subscriptions |  | N/A | No | Monolith.WebHooks | Service Swagger (Monolith.WebHooks) |
| subscriptions | DeleteSubscription | DELETE | /v1/subscriptions/{subscriptionId} |  | N/A | No | Monolith.WebHooks | Service Swagger (Monolith.WebHooks) |
| summarybycategory | ListClientPlanTransactionSummaryByCategory | GET | /v2/clients/{clientId}/plans/{planId}/transactions/summarybycategory | Returns a summary of client plan transactions for a plan grouped by category within the specified date range. | N/A | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| summarybycategory | ListClientTransactionSummaryByCategory | GET | /v2/clients/{clientId}/transactions/summarybycategory | Returns a summary of client transactions grouped by category within the specified date range. | N/A | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| tags | AddClientTag | POST | /v2/clients/{clientId}/tags/{tagName} | Creates a new tag for a given client. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| tags | AddLeadTag | POST | /v2/leads/{leadId}/tags/{tagName} | Creates a new tag for a given lead. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| tags | ListClientTags | GET | /v2/clients/{clientId}/tags | Returns a list of tags for a given client. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| tags | ListLeadTags | GET | /v2/leads/{leadId}/tags | Returns a list of tags for a given lead. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| tags | ListPlanTags | GET | /v2/plans/tags | Gets a collection of Tag Names | client_data, firm_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| tags | ListTags | GET | /v2/tags | Returns a list of tags for the client and lead resources. | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| tags | RemoveClientTag | DELETE | /v2/clients/{clientId}/tags/{tagName} | Deletes an existing tag for a given client. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| tags | RemoveLeadTag | DELETE | /v2/leads/{leadId}/tags/{tagName} | Deletes an existing tag for a given lead. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| tags | UpdateClientTags | PUT | /v2/clients/{clientId}/tags | Updates/Creates client's tags. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| tags | UpdateLeadTags | PUT | /v2/leads/{leadId}/tags | Updates/Creates lead's tags. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| taskchecklistitems | CreateTaskCheckListItems | POST | /v2/activities/tasks/{taskId}/checklists/items | Create Check list Items and their status for a task. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| taskchecklistitems | GetTaskCheckListItems | GET | /v2/activities/tasks/{taskId}/checklists/items | Get Check list check list Items associated with the activity for a task. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tasknotes | CreateTaskNote | POST | /v2/activities/tasks/{taskId}/notes | Creates a task note. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tasknotes | DeleteTaskNote | DELETE | /v2/activities/tasks/{taskId}/notes/{noteId} | Deletes a given task note. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tasknotes | GetTaskNote | GET | /v2/activities/tasks/{taskId}/notes/{noteId} | Returns a given task note. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tasknotes | ListTaskNotes | GET | /v2/activities/tasks/{taskId}/notes | Returns a list of task notes. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tasknotes | UpdateTaskNote | PUT | /v2/activities/tasks/{taskId}/notes/{noteId} | Updates a given task note. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tasks | CreateTask | POST | /v2/activities/tasks | Creates a task. | N/A | No | Monolith.Crm | Service Swagger + Documentation Ignore |
| tasks | DeleteTask | DELETE | /v2/activities/tasks/{taskId} | Deletes a given task. | N/A | No | Monolith.Crm | Service Swagger + Documentation Ignore |
| tasks | GetTask | GET | /v2/activities/tasks/{taskId} | Returns a given task. | N/A | No | Monolith.Crm | Service Swagger + Documentation Ignore |
| tasks | LinkFeeToTask | POST | /v2/activities/tasks/{taskId}/fees/{feeId}/link | Links the fee to given task | N/A | No | Monolith.Charging | Service Swagger (Monolith.Charging) |
| tasks | ListTask | GET | /v2/activities/tasks | Returns a list of tasks. | N/A | No | Monolith.Crm | Service Swagger + Documentation Ignore |
| tasks | ListTaskFees | GET | /v2/activities/tasks/{taskId}/fees | Gets a collection of fees linked to the given task. | N/A | No | Monolith.Charging | Service Swagger (Monolith.Charging) |
| tasks | SearchTask | GET | /v2/activities/tasks/search | Search for the tasks. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tasks | UnlinkFeeToTask | POST | /v2/activities/tasks/{taskId}/fees/{feeId}/unlink | Unlinks the fee to given task | N/A | No | Monolith.Charging | Service Swagger (Monolith.Charging) |
| tasks | UpdateTask | PUT | /v2/activities/tasks/{taskId} | Updates a given task. | N/A | No | Monolith.Crm | Service Swagger + Documentation Ignore |
| templatecategories | CreateTemplatecategory | POST | /v1/templatecategories |  | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| templatecategories | DeleteTemplatecategory | DELETE | /v1/templatecategories/{templateCategoryId} |  | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| templatecategories | GetTemplatecategory | GET | /v1/templatecategories/{templateCategoryId} |  | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| templatecategories | ListTemplatecategories | GET | /v1/templatecategories | Get all campaign templates for the given tenant | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| templatecategories | PatchTemplatecategory | PATCH | /v1/templatecategories/{templateCategoryId} |  | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| templatelayouts | ExistsTemplatelayout | HEAD | /v1/templatelayouts/{layoutId} |  | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| templatelayouts | GetTemplatelayout | GET | /v1/templatelayouts/{layoutId} |  | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| templates | CreateClientPlanFeeByTemplate | POST | /v2/clients/{clientId}/plans/{planId}/fees/templates/{templateId} | Create a client plan fee from a fee model template. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| templates | CreateTemplate | POST | /v1/templates | Create template | client_financial_data, myprofile, openid | No | Microservice.Author | Service Swagger (Microservice.Author) |
| templates | CreateTemplate1 | POST | /v1/migrate/templates/{templateId} |  | client_financial_data, myprofile, openid | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| templates | DeleteTemplate | DELETE | /v1/templates/{templateId} | Delete template | client_financial_data, myprofile, openid | No | Microservice.Author | Service Swagger (Microservice.Author) |
| templates | GetTemplate | GET | /v1/templates/{templateId} | Get specified template | client_financial_data, myprofile, openid | No | Microservice.Author | Service Swagger (Microservice.Author) |
| templates | ListMigratesTemplates | GET | /v1/migrate/templates |  | client_financial_data, myprofile, openid | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| templates | ListTemplates | GET | /v1/templates | List templates | client_financial_data, myprofile, openid | No | Microservice.Author | Service Swagger (Microservice.Author) |
| templates | PatchTemplate | PATCH | /v1/templates/{templateId} | Update template | client_financial_data, myprofile, openid | No | Microservice.Author | Service Swagger (Microservice.Author) |
| tenant | GetTenantAddress | GET | /v2/tenants/{tenantId}/address | Returns Tenant Address. | N/A | No | Monolith.Organization | Service Swagger (Monolith.Organization) |
| tenant | GetTenantDetail | GET | /v2/tenants/{tenantId} | Returns Tenant Detail. | N/A | No | Monolith.Organization | Service Swagger (Monolith.Organization) |
| tenant | GetTenantStatus | GET | /v2/tenants/{tenantId}/status | Returns Tenant Status. | N/A | No | Monolith.Organization | Service Swagger (Monolith.Organization) |
| tenant | UpdateTenantAddress | PUT | /v2/tenants/{tenantId}/address | Updates Tenant Address. | N/A | No | Monolith.Organization | Service Swagger (Monolith.Organization) |
| tenant | UpdateTenantDetail | PUT | /v2/tenants/{tenantId} | Updates Tenant Detail. | N/A | No | Monolith.Organization | Service Swagger (Monolith.Organization) |
| tenant | UpdateTenantStatus | PUT | /v2/tenants/{tenantId}/status | Updates Tenant Status. | N/A | No | Monolith.Organization | Service Swagger (Monolith.Organization) |
| tenant configuration | TenantFederationExists | HEAD | /v2/tenants/{tenantid}/federation |  | N/A | No | Microservice.Federation | Service Swagger (Microservice.Federation) |
| tenantcategories | DeleteTenantCategory | DELETE | /v2/tenantcategories/{categoryId} |  | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| tenantcategories | GetTenantCategory | GET | /v2/tenantcategories/{tenantCategoryId} |  | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| tenantcategories | ListTenantCategories | GET | /v2/tenantcategories |  | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| tenantcategories | PatchTenantCategories | PATCH | /v2/tenantcategories |  | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| tenantcategories | PostTenantCategories | POST | /v2/tenantcategories |  | N/A | No | Microservice.Security | Service Swagger (Microservice.Security) |
| tenants | CreateTenant | POST | /v2/tenants | Creates a new tenant. Only available under system reach | firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger + Documentation Ignore |
| tenants | ListTenantDocuments | GET | /v2/tenants | Get a paged list of all tenants. | firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tenants | TenantExists | HEAD | /v2/tenants/{tenantId} | Checks whether or not a given Tenant exists. | firm_data, myprofile, openid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tenants, beta | GetTenant | GET | /v2/tenants/{tenantId} | Retrieves the tenant resource specified | openid, myprofile, firm_data | Yes | N/A | Public Swagger v2 |
| tenanttasksetting | GetTenantTaskSetting | GET | /v2/activities/tasks/tenants/{tenantId}/settings | Returns a given tenant task setting. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tenanttasksetting | UpdateTenantTaskSetting | PUT | /v2/activities/tasks/tenants/{tenantId}/settings | Updates a given tenant task setting. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| test only | ListTests | GET | /v2/test |  | N/A | No | Microservice.MoneyMovement | Service Swagger (Microservice.MoneyMovement) |
| timeentries | ListTimeEntries | GET | /v2/time_entries | Returns a list of time entries. | N/A | Yes | N/A | Public Swagger v2 |
| timeseries | GetAssetsTimeSeries | GET | /v2/clients/{clientId}/assets/valuations/timeseries | Returns an asset valuations history for a client as a time and value series. | N/A | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| timeseries | GetPlansTimeSeries | GET | /v2/clients/{clientId}/plans/valuations/timeseries | Returns a plan valuations history for a client as a time and value series. | N/A | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| timeseries | ListClientTransactionTimeSeries | GET | /v2/clients/{clientId}/transactions/timeseries | Returns a transaction history for a client as a time and value series. | N/A | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| transactions, beta | BatchCreateClientPlanTransactions | POST | /v2/clients/{clientId}/plans/{planId}/transactions | Creates a batch of transactions for a particular client and plan. | client_financial_data | No | Monolith.Portfolio | Service Swagger + Documentation Ignore + GitHub Monolith.Portfolio |
| transactions, beta | BatchCreateClientTransactions | POST | /v2/clients/{clientId}/transactions | Creates a batch of transactions for different plans for a particular client. | openid, myprofile, client_financial_data | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Monolith.Portfolio |
| transactions, beta | BatchCreateTransactions | POST | /v2/transactions | Creates a batch of transactions for different plans. | openid, myprofile, client_financial_data | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Monolith.Portfolio |
| transactions, beta | ClientPlanTransactionExists | HEAD | /v2/clients/{clientId}/plans/{planId}/transactions/{transactionId} | Check to see if a transaction exists. | openid, myprofile, client_financial_data | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Monolith.Portfolio |
| transactions, beta | GetClientPlanTransaction | GET | /v2/clients/{clientId}/plans/{planId}/transactions/{transactionId} | Gets a single transaction by id. | openid, myprofile, client_financial_data | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Monolith.Portfolio |
| transactions, beta | ListClientPlanTransactions | GET | /v2/clients/{clientId}/plans/{planId}/transactions | Returns a list of transactions for a client plan. | openid, myprofile, client_financial_data | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Monolith.Portfolio |
| transactions, beta | ListClientTransactions | GET | /v2/clients/{clientId}/transactions | Returns a list of transactions for a client. | openid, myprofile, client_financial_data | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Monolith.Portfolio |
| transactions, beta | UpdateClientPlanTransaction | PATCH | /v2/clients/{clientId}/plans/{planId}/transactions/{transactionId} | Updates a client plan transaction. | openid, myprofile, client_financial_data | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Monolith.Portfolio |
| transfereligibility | ListTransferEligibility | GET | /v2/transfereligibility/provider/{targetProductProviderId}/plantype/{targetPlanTypeId} | Returns a list of all eligible plan types for a given target plan type and target provider. | N/A | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| triggers | CreateTemplatesTriggers | POST | /v1/templates/{templateId}/triggers |  | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| triggers | ListTemplatesTriggers | GET | /v1/templates/{templateId}/triggers | List template roles | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| unmatchedplans | CreateUnmatchedExistingPlan | POST | /v2/plans/unmatched/{planId} | Create an unmatched plan, linking it to an existing plan ID. | client_financial_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| unmatchedplans | CreateUnmatchedPlan | POST | /v2/plans/unmatched | Create an unmatched plan. | client_financial_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| unmatchedplans | GetUnmatchedPlan | GET | /v2/plans/unmatched/{planId} | Get an unmatched plan. | client_financial_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| unmatchedplans | ListUnmatchedPlans | GET | /v2/plans/unmatched | Gets a Collection of unmatched Plans. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| unmatchedplans | MatchPlan | POST | /v2/plans/unmatched/{planId}/match | Create a Match Plan | client_financial_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| unmatchedplans | PatchUnmatchedPlan | PATCH | /v2/plans/unmatched/{planId} | Patch update an unmatched plan. | client_financial_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| unreadcount | ExistsMessageUnreadcount | HEAD | /v1/messages/unreadcount | Get the count of unread messages. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| unreadcount | GetMessageUnreadcount | GET | /v1/messages/unreadcount | Get the count of unread messages. | N/A | No | Microservice.SecureMessaging | Service Swagger (Microservice.SecureMessaging) |
| unsuspend | CreateInstanceUnsuspend | POST | /v1/instances/{instanceId}/unsuspend |  | N/A | No | Microservice.Workflow | Service Swagger (Microservice.Workflow) |
| update status | PatchAccountStatus | PATCH | /v2/accounts/{accountNumber}/status |  | client_financial_data | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| update status | PatchMoneyMovementStatus | PATCH | /v2/accounts/{accountNumber}/moneymovements/{movementId}/status |  | client_financial_data | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| update status | PatchSecurityTransferInstructionStatus | PATCH | /v2/accounts/{accountNumber}/transfers/{movementId}/status |  | client_financial_data | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| update status | PatchStandingInstructionStatus | PATCH | /v2/accounts/{accountNumber}/banklink/{bankLinkRef}/status |  | client_financial_data | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| update status | PostMoneyMovementActivity | POST | /v2/accounts/{accountNumber}/moneymovements/{moneyMovementId}/activities |  | client_financial_data | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) |
| update status | PutAccountModel | PUT | /v2/accounts/{accountNumber}/model |  | client_financial_data | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) + GitHub Microservice.ProviderIntegration |
| update status | PutMoneyMovementInstuction | PUT | /v2/accounts/{accountNumber}/moneymovements |  | client_financial_data | No | Microservice.ProviderIntegration | Service Swagger (Microservice.ProviderIntegration) + GitHub Microservice.ProviderIntegration |
| upload | CreateReviewUpload | POST | /v1/reviews/{reviewId}/upload | Upload a modified review document | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| upload | CreateTemplateUpload | POST | /v1/templates/upload | Upload a template exported from another environment | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| userdiaryclassifications | GetUserDiaryClassification | GET | /v2/diary/users/{userId}/classifications/{userDiaryClassificationId} | Returns a given user diary classification. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| userdiaryclassifications | ListUserDiaryClassification | GET | /v2/diary/users/{userId}/classifications | Returns a list of user diary classifications. | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| users | CreateUser | POST | /v2/users | Deprecated:    Create a user | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| users | GetUser | GET | /v2/users/{userId} | Deprecated:   Returns user resource | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| users | UpdateUser | PUT | /v2/users/{userId} | Deprecated:    Update a user | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| users | UserExists | HEAD | /v2/users/{userId} | Check the user is available | N/A | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| valuations | CreateAssetValuations | POST | /v2/clients/{clientId}/assets/{assetId}/valuations | Creates a valuation on a given client and asset. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| valuations | CreatePlanValuations | POST | /v2/clients/{clientId}/plans/{planId}/valuations | Creates a valuation for a given client and plan. | openid, myprofile, client_financial_data | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Monolith.Portfolio |
| valuations | DeleteClientAssetValuation | DELETE | /v2/clients/{clientId}/assets/{assetId}/valuations/{valuationId} | Deletes an association on a valuation for a given client, asset and valuation. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| valuations | DeleteClientPlanValuation | DELETE | /v2/clients/{clientId}/plans/{planId}/valuations/{valuationId} | Deletes a valuation for a given client and plan. | client_financial_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| valuations | GetClientAssetValuation | GET | /v2/clients/{clientId}/assets/{assetId}/valuations/{valuationId} | Returns an association on a valuation for a given client, asset and valuation. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| valuations | GetClientPlanValuation | GET | /v2/clients/{clientId}/plans/{planId}/valuations/{valuationId} | Returns a valuation on a given client, plan and valuation. | openid, myprofile, client_financial_data | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Monolith.Portfolio |
| valuations | GetPlanValuationRawResponse | GET | /v2/clients/{clientId}/plans/{planId}/valuations/requests/{requestId}/response | Returns the raw valuation response from provider | client_financial_data, myprofile, openid | No | Monolith.ContractEnquiry | Service Swagger (Monolith.ContractEnquiry) |
| valuations | ListClientAssetValuations | GET | /v2/clients/{clientId}/assets/{assetId}/valuations | Returns a list of valuations on a given client and asset. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| valuations | ListClientPlanValuations | GET | /v2/clients/{clientId}/plans/{planId}/valuations | Returns a list of valuations for a given client and plan. | openid, myprofile, client_financial_data | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Monolith.Portfolio |
| valuations | ListClientValuations | GET | /v2/clients/{clientId}/plans/valuations | Returns a list of plan valuations for a given client. | client_financial_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| valuations | PostCePlanValuation | POST | /v2/clients/{clientId}/plans/{planId}/valuations/ce | Accepts a request to fetch valuation from provider | client_financial_data, myprofile, openid | No | Monolith.ContractEnquiry | Service Swagger (Monolith.ContractEnquiry) |
| valuations | UpdateClientAssetValuation | PUT | /v2/clients/{clientId}/assets/{assetId}/valuations/{valuationId} | Updates or creates an association on a valuation for a given client, asset and valuation. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| valuations | UpdateClientPlanValuation | PUT | /v2/clients/{clientId}/plans/{planId}/valuations/{valuationId} | Updates a valuation on a given client, plan and valuation. | openid, myprofile, client_financial_data | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Monolith.Portfolio |
| variables | ListTemplateVersionsVariables | GET | /v1/templates/{templateId}/versions/{versionId}/variables |  | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| verify | CreateDomainVerify | POST | /v1/domains/verify |  | N/A | No | Monolith.Campaign | Service Swagger (Monolith.Campaign) |
| verify | CreateIdentityVerify | POST | /v1/identities/verify |  | N/A | No | Microservice.Email | Service Swagger (Microservice.Email) |
| versioning | GetOptionVersioning | GET | /v1/options/versioning | Get template versioning options | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| versioning | UpdateOptionVersioning | PUT | /v1/options/versioning | Update template versioning options | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| versions | CreateTemplateVersion | POST | /v1/templates/{templateId}/versions/{versionId} | Upload a modified template version | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| versions | DeleteTemplateVersion | DELETE | /v1/templates/{templateId}/versions/{versionId} | Delete a specified template version | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| versions | GetTemplateVersion | GET | /v1/templates/{templateId}/versions/{versionId} | Get details for specified template version | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| versions | ListTemplateVersions | GET | /v1/templates/{templateId}/versions | List template versions for a specified template | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| versions | ListVersions | GET | /v1/versions | List all template versions | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| video | GetUserProviderSubscriptions | GET | /v2/users/{userId}/media/video/subscriptions | Returns a list of video provider subscriptions | N/A | No | Microservice.Content | Service Swagger (Microservice.Content) |
| video | GetVideo | GET | /v2/media/videos/{videoId} | Returns a given video. | N/A | No | Microservice.Content | Service Swagger (Microservice.Content) |
| video | ListVideos | GET | /v2/media/videos | Returns a list of videos. | N/A | No | Microservice.Content | Service Swagger (Microservice.Content) |
| video | MAPlayerPreviewVideoConfigURI | GET | /v2/media/videos/{videoId}/player | Returns player configuration for previewing a given video. | N/A | No | Microservice.Content | Service Swagger (Microservice.Content) |
| video | ProcessVideoContentZip | POST | /v2/media/videos/import | Importing content which creates a video record with other assets from a zip file or folder from S3 bucket. | N/A | No | Microservice.Content | Service Swagger (Microservice.Content) |
| vulnerabilities | GetClientVulnerability | GET | /v2/clients/{clientId}/vulnerabilities/{vulnerabilityId} | Get a single client vulnerability. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| vulnerabilities | GetClientVulnerabilityCurrent | GET | /v2/clients/{clientId}/vulnerabilities/current | Get client's current vulnerability. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| vulnerabilities | ListClientsVulnerabilities | GET | /v2/clients/vulnerabilities/current | Returns a list of current vulnerabilities for clients defined in the filter. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| vulnerabilities | UpdateClientVulnerabilitiesCurrent | PUT | /v2/clients/{clientId}/vulnerabilities/current | Update client's current vulnerability. | openid, myprofile, client_data | Yes | N/A | Public Swagger v2 |
| webhooks | CreateWebhook | POST | /hub/webhooks | Creates or updates an existing webhook subscription. | openid, myprofile, hub | Yes | N/A | Public Swagger v2 |
| webhooks | DeleteWebhook | DELETE | /hub/webhooks/{id} | Deletes a specific webhook subscription by id (Unsubscribe). | openid, myprofile, hub | Yes | N/A | Public Swagger v2 |
| webhooks | GetWebhook | GET | /hub/webhooks/{id} | Returns a specific webhook subscription by id. | openid, myprofile, hub | Yes | N/A | Public Swagger v2 |
| webhooks | ListWebhooks | GET | /hub/webhooks | Returns the list of webhook subscriptions. | openid, myprofile, hub | Yes | N/A | Public Swagger v2 |
| webhooks | SubscribeUnsubscribeWebSub | POST | /hub | A WebSub compliant endpoint which creates or updates an existing webhook subscription. | openid, myprofile, hub | Yes | N/A | Public Swagger v2 |
| withdraw | CreateTemplateWithdraw | POST | /v1/templates/{templateId}/withdraw | Withdraw a published template | N/A | No | Microservice.Author | Service Swagger (Microservice.Author) |
| withdrawals | CreatePlanWithdrawals | POST | /v2/clients/{clientId}/plans/{planId}/withdrawals | Creates a withdrawal for a given client and plan. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| withdrawals | DeleteClientPlanWithdrawal | DELETE | /v2/clients/{clientId}/plans/{planId}/withdrawals/{withdrawalId} | Deletes a withdrawal for a given client, plan and withdrawal. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| withdrawals | GetClientPlanWithdrawal | GET | /v2/clients/{clientId}/plans/{planId}/withdrawals/{withdrawalId} | Returns a withdrawal for a given client, plan and withdrawal. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| withdrawals | ListClientsWithdrawals | GET | /v2/clients/{clientId}/withdrawals | Returns list of plan's Withdrawals | client_financial_data, myprofile, openid | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |
| withdrawals | UpdateClientPlanWithdrawal | PUT | /v2/clients/{clientId}/plans/{planId}/withdrawals/{withdrawalId} | Updates a withdrawal for a given client, plan and withdrawal. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| withdrawals, beta | ListClientPlanWithdrawals | GET | /v2/clients/{clientId}/plans/{planId}/withdrawals | Returns a list of withdrawal for a given client and plan. | openid, myprofile, client_financial_data | Yes | N/A | Public Swagger v2 |
| withdrawalsubtypes | ListWithdrawalSubTypes | GET | /v2/withdrawalsubtype | Returns a list of withdrawal sub types configuration. | N/A | No | Monolith.Portfolio | Service Swagger (Monolith.Portfolio) |

## APIs by Tag

### 2fa (9 operations)
- CreateAccount2faAuthenticate
- CreateAccount2faExtmfaAuthenticate
- CreateAccount2faPostpone
- CreateAccount2faRecoverycodesAuthenticate
- CreateAccounts2faRecoverycode
- CreateAccounts2faRegister
- CreateAccounts2faSecret
- DeleteAccount2fa
- ListAccount2fasRecoverycodes

### abort (1 operations)
- CreateInstanceAbort

### accountrecovery (5 operations)
- CreateConfirmation
- CreateForgotpassword
- GetConfirmation
- GetForgotpassword
- GetResetpassword

### accounts (13 operations)
- AccountDocumentExists
- AccountDocumentObjectExists
- AccountExists
- AssignAccountDocument
- CreateAccount
- DeleteAccountDocument
- GetAccount
- GetAccountDocument
- GetAccountDocumentObject
- ListAccountDocuments
- UpdateAccount
- UpdateAccountDocument
- UpdateAccountDocumentObject

### accountsecurity (1 operations)
- GetVerify

### actions (1 operations)
- CreateMessageAction

### activate (1 operations)
- initiateactivation

### activates (1 operations)
- activateuser

### activitycategories (5 operations)
- CreateActivityCategory
- DeleteActivityCategory
- GetActivityCategory
- ListActivityCategories
- UpdateActivityCategory

### activitychecklistitems (2 operations)
- CreateActivityCheckListItems
- ListActivitiyCheckLists

### activityoutcomes (5 operations)
- CreateActivityOutcome
- DeleteActivityOutcome
- GetActivityOutcome
- ListActivityOutcomes
- UpdateActivityOutcome

### activitypriorities (2 operations)
- GetActivityPriority
- ListActivityPriorities

### activitytypeevents (2 operations)
- GetActivitySystemEvent
- ListActivitySystemEvents

### activitytypes (7 operations)
- CreateActivityType
- DeleteType
- GetActivityType
- HideActivityType
- ListActivityTypes
- ShowActivityType
- UpdateActivityType

### addresses (46 operations)
- CreateAccountAddress
- CreateAdviserAddress
- CreateClientAddress
- CreateGroupAddress
- CreateIntroducerAddress
- CreateLeadAddress
- CreatePersonalContactAddress
- CreateProductProviderAddress
- CreateTnccoachAddress
- DeleteAccountAddress
- DeleteAdviserAddress
- DeleteClientAddress
- DeleteGroupAddress
- DeleteIntroducerAddress
- DeleteLeadAddress
- ... and 31 more

### adjustmentsrules (6 operations)
- CreateExpectationAdjustmentRule
- DeleteExpectationAdjustmentRule
- ExpectationAdjustmentRuleExists
- GetExpectationAdjustmentRule
- ListExpectationAdjustmentRules
- UpdateExpectationAdjustmentRule

### advicetemplates (16 operations)
- CloneAdviceTemplate
- CreateAdviceTemplate
- CreateAdviceTemplateStep
- CreateAdviceTemplateStepTransition
- DeleteAdviceTemplate
- DeleteAdviceTemplateStep
- DeleteAdviceTemplateStepTransition
- GetAdviceTemplate
- GetAdviceTemplateStep
- GetAdviceTemplateStepTransition
- ListAdviceTemplates
- ListAdviceTemplateSteps
- ListAdviceTemplateStepTransitions
- PatchAdviceTemplate
- PutAdviceTemplateStepTransition
- ... and 1 more

### advisers (7 operations)
- AdviserExists
- CreateAdviser
- GetAdviser
- ListAdvisers
- ListGatedPlanTypesByAdviserId
- ListProductProvidersByAdviserId
- UpdateAdviser

### agreementtemplates (5 operations)
- ArchiveAgreementTemplate
- GetAgreementTemplate
- ListAgreementTemplates
- PostAgreementTemplate
- PutAgreementTemplate

### alerts (7 operations)
- ChangeUserAlertSubscription
- CreateUserAlertSubscription
- DeleteUserAlertSubscription
- GetAlertType
- GetUserAlertSubscription
- ListAlertTypes
- ListUserAlertSubscriptions

### allocations (3 operations)
- CreateGoalAllocation
- GetGoalAllocation
- ListGoalAllocation

### alternativeassets (5 operations)
- DeleteAlternativeAsset
- GetAlternativeAsset
- ListAlternativeAssets
- PostAlternativeAssets
- PutAlternativeAssets

### apply (1 operations)
- CreateCampaignSegmentsApply

### appointments (5 operations)
- CreateAppointment
- DeleteAppointment
- GetAppointment
- ListAppointment
- UpdateAppointment

### apps (56 operations)
- ApproveCollaboratorApp
- ApprovePublishedAppForInstallation
- ApprovePublishedAppForUserInstallation
- CertifyPublishedApp
- ConfirmAppCollaborator
- CreateApp
- CreateAppCollaborator
- CreateAppOauthClient
- CreateAppOauthClientSecret
- DeleteApp
- DeleteAppCollaborator
- DeleteAppContent
- DeleteAppOauthClient
- DeletePublishedApp
- ExistApp
- ... and 41 more

### archive (1 operations)
- CreateCampaigntemplateArchive

### assetclasses (2 operations)
- GetAssetClass
- ListAssetClasses

### assets (5 operations)
- CreateClientAssets
- DeleteClientAsset
- GetClientAsset
- ListClientAssets
- UpdateClientAsset

### attachments (5 operations)
- CreateMessagesAttachments
- DeleteMessageAttachment
- ListClientEmailsAttachments
- ListMessageAttachments
- UpdateClientEmailsAttachments

### attitudetorisk (28 operations)
- AcceptTenantProviderAtrTemplate
- ActivateAtrTemplate
- ActivateProviderAtrTemplate
- CreateAtrTemplate
- CreateClientAtr
- CreateClientAtrAnswer
- CreateProviderAtrTemplate
- DeleteAtrTemplateV2
- DeleteClientAtr
- GetAtrTemplate
- GetAtrTemplateV2
- GetClientAtr
- GetClientAtrAnswer
- GetProviderAtrTemplate
- GetTenantProviderAtrTemplate
- ... and 13 more

### avatars (2 operations)
- DeleteAvatar
- GetAvatar

### bandingtemplates (5 operations)
- BandingTemplateExists
- GetAdviserBandingtemplate
- GetBandingTemplate
- ListAdviserBandingtemplates
- ListBandingTemplates

### bankaccounts (5 operations)
- CreateBankAccount
- DeleteBankAccount
- GetBankAccount
- ListBankAccounts
- UpdateBankAccount

### beneficiaries (10 operations)
- DeleteClientBeneficiaries
- DeleteClientPlanBeneficiaries
- GetClientBeneficiary
- GetClientPlanBeneficiary
- ListBeneficiariesForClient
- ListBeneficiariesForPersonalContact
- ListClientBeneficiaries
- ListClientPlansBeneficiaries
- UpdateClientBeneficiaries
- UpdateClientPlansBeneficiaries

### beta (122 operations)
- AddClientQuoteApplicant
- ApproveCollaboratorApp
- ApprovePublishedAppForInstallation
- ApprovePublishedAppForUserInstallation
- BatchCreateClientPlanTransactions
- BatchCreateClientTransactions
- BatchCreateTransactions
- CertifyPublishedApp
- ClientPlanTransactionExists
- ClientQuoteExists
- ClientQuoteResultsExists
- ConfirmAppCollaborator
- CreateApp
- CreateAppCollaborator
- CreateAppOauthClient
- ... and 107 more

### brand (1 operations)
- ListBrands

### brands (6 operations)
- CreateGroupBrand
- DeleteGroupBrand
- GetGroupBrand
- ListGroupBrands
- ListUserMesBrands
- PatchGroupBrand

### bulk (12 operations)
- CreateBulkMessage
- CreateBulkMessageAttachment
- CreateBulkMessageRecipients
- DeleteBulkMessageAttachment
- DeleteBulkMessageRecipients
- GetBulkMessage
- ListBulkMessageAttachments
- ListBulkMessageRecipients
- ListBulkMessages
- RevokeBulkMessage
- SendBulk
- UpdateBulkMessage

### bulkvaluations (5 operations)
- DeleteValuationBatch
- EnqueueValuationBatch
- GetValuationBatch
- ListValuationBatches
- ListValuationBatchResults

### bulkvideoshared (3 operations)
- CreateBulkVideoShared
- GetBulkVideoShared
- ListBulkVideoShared

### campaignids (1 operations)
- UpdateCampaignCampaignId

### campaigns (5 operations)
- CreateCampaign
- DeleteCampaign
- GetCampaign
- ListCampaigns
- PatchCampaign

### campaigntemplates (6 operations)
- CreateCampaigntemplate
- DeleteCampaigntemplate
- ExistsCampaigntemplate
- GetCampaigntemplate
- ListCampaigntemplates
- PatchCampaigntemplate

### cashreceipts (5 operations)
- CreateCashReceipts
- GetCashReceipt
- ListCashReceipts
- PatchCashReceipt
- UpdateCashReceipt

### categories (5 operations)
- CreateCategory
- DeleteCategory
- GetCategory
- ListCategories
- PatchCategory

### cff (7 operations)
- GetCffSegment
- GetCffSegmentCompletion
- GetCffSegmentState
- ListCffSegments
- ListCffSegmentsCompletions
- UpdateCffSegmentCompletion
- UpdateCffSegmentState

### changepassword (1 operations)
- changepassword

### changepasswords (1 operations)
- CreateChangepassword

### changes (4 operations)
- CreateClientChange
- ExistsClientChange
- GetClientChange
- ListClientChanges

### channelsubscriptions (3 operations)
- CreateChannelSubscription
- DeleteChannelSubscription
- ListChannelSubscriptions

### charges (5 operations)
- CreateClientPlanCharge
- DeleteClientPlanCharge
- GetClientPlanCharge
- ListClientPlanCharges
- UpdateClientPlanCharge

### checklistitems (5 operations)
- CreateCheckListItem
- DeleteCheckListItem
- GetCheckListItem
- ListCheckListItems
- UpdateCheckListItem

### classificationcategories (2 operations)
- GetClassificationCategory
- ListClassificationCategories

### clientcategories (2 operations)
- GetClientCategory
- ListClientCategories

### clientenrollmentsummary (1 operations)
- GetClientEnrollmentSummary

### clientinvestmentpreference (6 operations)
- CreateClientInvestmentPreferences
- GetClientInvestmentPreferences
- GetClientInvestmentPreferenceUsingObjective
- ListClientInvestmentPreferences
- UpdateClientInvestmentPreferences
- UpdateClientInvestmentPreferenceWithObjective

### clients (10 operations)
- ClientExists
- CreateClient
- DeleteClient
- GetClient
- ListAllClientsRelatedUser
- ListClientInfo
- ListClients
- ListClientSegments
- ListClientServiceStatuses
- UpdateClient

### clientvideo (15 operations)
- BulkShareVideosToClients
- CreateClientVideo
- CreateClientVideoInstance
- GenerateClientVideoReport
- GenerateClientVideoReport1
- GetClientVideo
- GetClientVideoInstance
- ListClientVideoInstances
- ListClientVideos
- MAPlayerClientVideoConfigURI
- MAPlayerWebhookURI
- PlayerWebhookURI
- UpdateClientVideo
- UpdateClientVideoInstances
- VideoReportCallbackNotificationUrl

### clone (1 operations)
- CreateTemplateClone

### closest (1 operations)
- GetGroupBrandClosest

### commands (3 operations)
- PublishExpectationCommand
- PublishReversalCommand
- PublishTenantExpectationDue

### commissions (9 operations)
- ClientCommissionExists
- CommissionExists
- CreatePlanCommissions
- DeletePlanCommissions
- GetCommission
- GetPlanCommission
- ListCommissions
- ListPlanCommissions
- UpdatePlanCommissions

### commons (2 operations)
- CreateCommon
- DeleteCommon

### communication-agreements (2 operations)
- CreateClientAgreement
- GetClientAgreementById

### complete (2 operations)
- CompleteClientAgreement
- CreateReviewComplete

### configuration (15 operations)
- CreateQuicksightFolderConfiguration
- CreateQuicksightGroupConfiguration
- DeleteQuicksightConfiguration
- DeleteQuicksightFolderConfiguration
- DeleteQuicksightGroupConfiguration
- GetEmailConfiguration
- GetQuicksightConfiguration
- GetQuicksightFolderConfiguration
- GetQuicksightGroupConfiguration
- ListQuicksightFolderConfiguration
- ListQuicksightGroupConfiguration
- UpdateEmailConfiguration
- UpdateQuicksightConfiguration
- UpdateQuicksightFolderConfiguration
- UpdateQuicksightGroupConfiguration

### contactdetails (20 operations)
- CreateAdviserContactdetail
- CreateClientContactdetails
- CreateLeadContactdetails
- CreatePersonalContactDetail
- DeleteAdviserContactdetail
- DeleteClientContactdetail
- DeleteLeadContactdetail
- DeletePersonalContactDetail
- GetAdviserContactdetail
- GetClientContactdetail
- GetLeadContactdetail
- GetPersonalContactDetail
- ListAdviserContactdetails
- ListClientContactdetails
- ListLeadContactdetails
- ... and 5 more

### contacts (4 operations)
- CreatePlanContact
- DeletePlanContact
- GetPlanContact
- ListPlanContacts

### content (7 operations)
- GetCampaignContent
- GetCampaigntemplateContent
- GetClientEmailContent
- GetMessageAttachmentContent
- PatchCampaignContent
- PatchCampaigntemplateContent
- UpdateClientEmailContent

### contributions (6 operations)
- CreatePlanContributions
- DeleteClientPlanContribution
- GetClientPlanContribution
- ListClientPlanContributions
- ListClientsContributions
- UpdateClientPlanContribution

### countries (2 operations)
- GetCountry
- ListCountries

### createinstance (1 operations)
- CreateinstanceCommon

### createinvestor (1 operations)
- CreateInvestor

### creditnotes (4 operations)
- CreateCreditNote
- DeleteCreditNote
- GetCreditNote
- ListCreditNotes

### currencies (5 operations)
- DeleteCurrency
- GetCurrency
- ListCurrencies
- PostCurrencies
- PutCurrencies

### currentprices (1 operations)
- ListCurrentPrices

### currentquotes (1 operations)
- ListCurrentQuotes

### customquestions (8 operations)
- CreateQuestion
- DeleteQuestion
- GetQuestion
- ListQuestions
- ListQuestionsAnswers
- UpdateQuestion
- UpdateQuestion1
- UpdateQuestionAnswers

### dashboard (2 operations)
- GetQuicksightDashboardEmbedUrl
- ListQuicksightDashboards

### dashboardfavourite (3 operations)
- CreateQuicksightDashboardFavourite
- DeleteQuicksightDashboardFavourite
- ListQuicksightDashboardsFavourite

### dashboardpermission (3 operations)
- AssignQuicksightDashboardPermissions
- DeleteQuicksightDashboardPermission
- ListQuicksightDashboardPermissions

### dashboardusagehistory (1 operations)
- ListQuicksightDashboardsUsageHistory

### data (2 operations)
- CreateAuthorDatum
- CreateTemplateVersionDatum

### defaultbranding (2 operations)
- GetDefaultBranding
- UpdateDefaultBranding

### defaultsender (1 operations)
- DefaultsenderEmail

### delivery methods (1 operations)
- GetDeliveryMethods

### demote (1 operations)
- CreateTemplateVersionDemote

### dependants (5 operations)
- CreateClientDependant
- DeleteClientDependant
- GetClientDependant
- ListClientDependants
- UpdateClientDependant

### detailed (1 operations)
- GetTemplateDetailed

### detaileds (1 operations)
- ListTemplateDetaileds

### details (1 operations)
- GetWidgetMarketingDetails

### disclaimer (2 operations)
- GetProviderDisclaimer
- UpdateProviderDisclaimer

### disclosures (9 operations)
- CreateClientDisclosure
- CreateTenantDocumentType
- DeleteClientDisclosure
- DeleteTenantDocumentType
- GetTenantDocumentType
- ListClientDisclosures
- ListTenantDocumentTypes
- UpdateClientDisclosure
- UpdateTenantDocumentType

### dividends (5 operations)
- DeleteSecurityDividends
- ListDividends
- ListSecurityDividends
- PatchDividends
- PostDividends

### document (1 operations)
- ListDocuments

### documentbinderconfigs (1 operations)
- GetBinderSettings

### documentbinders (3 operations)
- CreateDocumentBinder
- GetDocumentBinder
- ListDocumentBinders

### documentfolders (3 operations)
- CreateDocumentFolder
- GetDocumentFolder
- ListDocumentFolders

### documents (41 operations)
- AdviserDocumentExists
- AdviserDocumentHideInPortal
- AdviserDocumentObjectExists
- AdviserDocumentShowInPortal
- AssignAdviserDocument
- AssignClientDocument
- ClientDocumentExists
- ClientDocumentHideInPortal
- ClientDocumentObjectExists
- ClientDocumentShowInPortal
- CreateAdviserDocument
- CreateClientDocument
- CreateDocument
- CreateDocumentConfiguration
- DeleteAdviserDocument
- ... and 26 more

### docusignenvelopes (4 operations)
- DeleteEnvelope
- GetDocuSignEnvelope
- SendESignatureEnvelope
- UpdateDocuSignEnvelope

### docusignevents (1 operations)
- ProcessDocuSignEvent

### docusignfieldanchors (1 operations)
- GetDocuSignFieldAnchors

### domains (1 operations)
- ListDomains

### download (5 operations)
- GetOutputDownload
- GetPluginDownload
- GetReviewDownload
- GetTemplateDownload
- GetTemplateVersionDownload

### dpa (13 operations)
- CreateClientDpaPolicyAgreement
- CreateDPAPolicy
- DeleteCurrentDPAPolicy
- DeleteDPAPolicy
- GetClientDpaPolicyAgreement
- GetCurrentDPAPolicy
- GetDpaPolicy
- ListClientDpaPolicyAgreements
- ListDpaPolicies
- PatchCurrentDPAPolicy
- PatchDPAPolicy
- UpdateCurrentDPAPolicy
- UpdateDPAPolicy

### draft (1 operations)
- GetMessageDraft

### email (1 operations)
- ListTemplatelayoutsEmail

### emailerrorlog (2 operations)
- GetBccErrorLog
- ListBccErrorLogs

### emails (14 operations)
- CreateClientEmail
- CreateEmail
- CreateUserEmail
- CreateUserEmailMakeprimary
- CreateUserEmailVerify
- DeleteEmail
- DeleteUserEmail
- GetClientEmail
- GetEmail
- GetUserEmail
- ListEmails
- ListUserEmails
- UpdateClientEmail
- UpdateEmail

### emailtemplatefields (1 operations)
- GetEmailtemplatefield

### employments (5 operations)
- CreateClientEmployment
- DeleteClientEmployment
- GetClientEmployment
- ListClientEmployments
- UpdateClientEmployment

### entitlement (40 operations)
- CreateIPAddress
- CreateRole
- CreateRoleOperation
- CreateUserDetail
- CreateUserGroup
- CreateUserRole
- DeleteIPAddress
- DeleteRoleOperation
- DeleteUserGroup
- DeleteUserRole
- ExistsUserDetails
- ExistsUserRole
- GetOperation
- GetRole
- GetTenantLicence
- ... and 25 more

### etfs (5 operations)
- DeleteEtf
- GetEtf
- ListEtfs
- PostEtfs
- PutEtfs

### exchanges (2 operations)
- GetExchange
- ListExchanges

### execute (1 operations)
- CreateCampaignExecute

### expectation (13 operations)
- ExpectationAdjustmentRequest
- ExpectationBreakdownExists
- ExpectationBreakdownExistsForClient
- ExpectationExists
- GetConfiguration
- GetExpectation
- GetExpectationBreakdown
- GetExpectationBreakdownByClient
- ListClientExpectationsSummary
- ListExpectationBreakdowns
- ListExpectationBreakdownsByClient
- ListExpectations
- SetConfiguration

### expenditures (11 operations)
- CreateClientExpenditure
- CreateContributionExpenditure
- CreateExpenditureCategoryGroup
- DeleteClientExpenditure
- DeleteExpenditureCategoryGroup
- GetClientExpenditure
- ListClientExpenditures
- ListExpenditureCategories
- ListExpenditureCategoryGroups
- UpdateClientExpenditure
- UpdateExpenditureCategoryGroup

### federation_settings (2 operations)
- CreateFederationSettings
- DeleteFederationSettings

### feemodels (2 operations)
- GetFeeModel
- ListFeeModels

### feemodeltemplates (1 operations)
- GetFeeModelTemplate

### fees (14 operations)
- CreateClientFees
- CreateClientPlanFee
- DeleteClientFee
- DeleteClientPlanFee
- GetClientFee
- GetClientPlanFee
- GetFee
- GetPlanFees
- ListClientFees
- ListClientPlanFees
- ListFee
- UpdateClientFee
- UpdateClientFeeDates
- UpdatePlanFees

### financialprofile (3 operations)
- GetClientFinancialProfile
- PatchClientFinancialProfile
- UpdateClientFinancialProfile

### financialsummarybycategory (1 operations)
- GetClientFinancialSummaryByCategory

### fixedincomes (5 operations)
- DeleteFixedIncome
- GetFixedIncome
- ListFixedIncomes
- PostFixedIncomes
- PutFixedIncomes

### folder (2 operations)
- GetQuicksightSharedFolder
- ListQuicksightSharedFolder

### folderpermission (3 operations)
- DeleteQuicksightSharedFolderPermission
- ListQuicksightSharedFolderPermission
- UpdateQuicksightSharedFolderPermission

### forecasts (1 operations)
- CreateForecast

### formats (1 operations)
- ListPluginsFormats

### forwardincometo (1 operations)
- ForwardIncomeToOperation

### fundbenchmarks (2 operations)
- GetFundBenchmark
- ListFundBenchmarks

### fundholdingtimeseries (1 operations)
- GetFundHoldingTimeSeries

### fundingsource (6 operations)
- CreateFundingSource
- DeleteFundingSource
- GetFundingSource
- ListAdviceReferenceData
- ListFundingSource
- UpdateFundingSource

### fundprices (2 operations)
- ListFundPrices
- ListFundsPrices

### fundproposal (3 operations)
- DeleteClientPlanFundproposal
- GetClientPlanFundproposal
- UpdateClientPlanFundproposal

### fundproviders (3 operations)
- FundProviderExists
- GetFundprovider
- ListFundproviders

### funds (7 operations)
- CreateFund
- DeleteFund
- GetFund
- ListFunds
- PostFunds
- PutFunds
- UpdateFund

### fundsectors (2 operations)
- GetFundsector
- ListFundsectors

### fundtransactions (2 operations)
- GetClientPlanHoldingTransaction
- ListClientPlanHoldingTransactions

### generate (2 operations)
- CreateTemplateGenerate
- CreateTemplateVersionGenerate

### getadditionalquestions (1 operations)
- GetAdditionalQuestions

### goalprojections (1 operations)
- CreateGoalprojection

### groups (7 operations)
- CreateGroup
- GetGroup
- GetGroupLineage
- GroupExists
- ListGroups
- UpdateGroup
- UpdateGroupParent

### history (1 operations)
- ListInstancesHistory

### holdings (5 operations)
- CreatePlanHoldings
- GetClientPlanHolding
- ListClientPlanHoldings
- ListClientsHoldings
- UpdateClientPlanHolding

### households (11 operations)
- CreateHousehold
- CreateHouseholdGrouping
- DeleteHousehold
- DeleteHouseholdGrouping
- GetHousehold
- GetHouseholdGrouping
- HouseholdExists
- ListHouseholds
- ListHouseholdTags
- PatchHousehold
- UpdateHousehold

### identities (1 operations)
- ListIdentities

### illustrations (4 operations)
- CreateIllustration
- CreateIllustration2
- GenerateQuoteIllustration
- PatchIllustrationStatus

### image (1 operations)
- CreateAuthorImage

### incomes (6 operations)
- CreateClientIncome
- CreateClientPlanWithdrawalIncome
- DeleteClientIncome
- GetClientIncome
- ListClientIncomes
- UpdateClientIncome

### incomestatements (9 operations)
- CreateIncomeStatement
- CreateIncomeStatementItems
- DeleteIncomeStatement
- GetIncomeStatement
- GetIncomeStatementItem
- ListIncomeStatementItems
- ListIncomeStatements
- UpdateIncomeStatement
- UpdateIncomeStatementItem

### initialise (1 operations)
- GetTemplateInitialise

### insights (2 operations)
- CreateClientInsight
- GetClientInsights

### instances (4 operations)
- CreateInstance
- GetInstance
- ListInstances
- ListMigratesInstances

### instancesteps (1 operations)
- ListMigratesInstancesteps

### introducerpaymentrules (3 operations)
- GetIntroducerPaymentRule
- IntroducerPaymentRuleExists
- ListIntroducerPaymentRules

### introducers (3 operations)
- GetIntroducer
- IntroducerExists
- ListIntroducers

### investmentpreference (2 operations)
- GetClientInvestmentPreference
- UpdateClientInvestmentPreference

### investmentpreferencequestion (4 operations)
- CreateInvestmentPreferenceQuestion
- GetInvestmentPreferenceQuestion
- ListInvestmentPreferenceQuestions
- UpdateInvestmentPreferenceQuestion

### issuers (7 operations)
- DeleteIssuer
- GetIssuer
- ListIssuers
- ListIssuersByIds
- ListIssuersBySourceReferences
- PostIssuers
- PutIssuers

### journeytypes (2 operations)
- GetJourneyType
- ListJourneyTypes

### jumplinks (2 operations)
- GetJumplink
- ListJumplinks

### leads (16 operations)
- AssignLeadDocument
- CreateLead
- DeleteLead
- DeleteLeadDocument
- GetLead
- GetLeadDocument
- GetLeadDocumentObject
- LeadDocumentExists
- LeadDocumentObjectExists
- LeadExists
- ListLeadDocuments
- ListLeads
- ListLeadStatuses
- UpdateLead
- UpdateLeadDocument
- ... and 1 more

### legacyapps (1 operations)
- ListLegacyApps

### lifecycles (6 operations)
- GetLifecycle
- GetPlanTypeLifecycle
- ListLifecycles
- ListLifecycleStatuses
- ListLifecycleTransitions
- ListPlanTypeLifecycles

### lifeexpectancies (1 operations)
- CreateLifeexpectancy

### livesassured (2 operations)
- ListClientPlansLivesAssured
- UpdateClientPlansLivesAssured

### logins (1 operations)
- GetLoginDetails

### mails (1 operations)
- CreateMail

### mandrill (2 operations)
- CreateMaileventMandrill
- ExistsMaileventMandrill

### markasread (1 operations)
- MarkasreadMessage

### markasunread (1 operations)
- MarkasunreadMessage

### marketclosings (3 operations)
- DeleteMarketClosings
- GetMarketClosings
- PutMarketClosings

### marketing (1 operations)
- MarketingWidget

### marketingpreferences (4 operations)
- GetClientMarketingPreferences
- GetLeadMarketingPreferences
- UpdateClientMarketingPreferences
- UpdateLeadMarketingPreferences

### messages (7 operations)
- CreateMessage
- DeleteMessage
- ExistsMessage
- GetMessage
- ListClientMessages
- ListMessages
- UpdateMessage

### modelprovider (3 operations)
- CreateProviderModel
- GetProviderModel
- GetProviderModels

### models (17 operations)
- AcceptModel
- ActivatePortfolioModel
- CreateDraftPortfolioModel
- CreateModel
- CreateProviderModel
- DeleteDraftPortfolioModel
- DeleteProviderModel
- GetModel
- GetProviderModel
- GetProviderModels
- GetTenantProviderModel
- GetTenantProviderModels
- ListModels
- PatchModel
- PublishDraftPortfolioModel
- ... and 2 more

### money movement (1 operations)
- GetPaymentMethods

### money movement fees (4 operations)
- ListPlanSecurityTransferInstructionFees
- ListPlanTransferInstructionFees
- UpdatePlanSecurityTransferInstructionFees
- UpdatePlanTransferInstructionFees

### movedown (1 operations)
- CreateTemplateStepMoveDown

### moveup (1 operations)
- CreateTemplateStepMoveUp

### nationalities (2 operations)
- GetNationality
- ListNationalities

### notes (3 operations)
- GetClientNotes
- ListClientNotes
- UpdateOrCreateClientNotes

### notifications (3 operations)
- AcknowledgeNotifications
- ListNotifications
- SendDocuSignEnvelopeNotification

### oauthclients (5 operations)
- CreateOauthClient
- DeleteOauthClient
- GetOauthClient
- ListOauthClients
- PatchOauthClient

### objectivecategories (4 operations)
- CreateObjectiveCategory
- DeleteObjectiveCategory
- ListObjectiveCategory
- UpdateObjectiveCategory

### objectives (16 operations)
- ClientObjectiveExists
- CreateClientObjectives
- CreateLeadObjective
- DeleteClientObjective
- DeleteLeadObjective
- GetClientObjective
- GetLeadObjective
- LeadObjectiveExists
- LinkClientObjectiveOpportunity
- LinkLeadObjectiveOpportunity
- ListClientObjectives
- ListLeadObjectives
- UnlinkClientObjectiveOpportunity
- UnlinkLeadObjectiveOpportunity
- UpdateClientObjective
- ... and 1 more

### ondemand (1 operations)
- CreateTemplateCreateinstanceOndemand

### operation logging (2 operations)
- Logs
- PlanApplicationLogs

### opportunities (33 operations)
- CreateCampaignChannel
- CreateCampaignType
- CreateClientOpportunity
- CreateLeadOpportunity
- CreateOpportunityCampaign
- CreateOpportunityProposition
- CreateOpportunityStatus
- CreateOpportunityType
- DeleteCampaignChannel
- DeleteCampaignType
- DeleteOpportunityCampaign
- DeleteOpportunityProposition
- DeleteOpportunityStatus
- DeleteOpportunityType
- GetClientOpportunity
- ... and 18 more

### options (2 operations)
- PostOptions
- PutOptions

### output (1 operations)
- GetSecureMessageTrail

### outputs (3 operations)
- DeleteOutput
- GetOutput
- ListOutputs

### passkeys (1 operations)
- CreateAccountPasskeysAuthenticate

### passwordpolicy (2 operations)
- GetPasswordPolicy
- UpdatePasswordPolicy

### personalcontacts (6 operations)
- CreatePersonalContact
- DeletePersonalContact
- GetPersonalContact
- ListPersonalContacts
- PatchPersonalContact
- UpdatePersonalContact

### phones (6 operations)
- CreateAccountPhone
- CreateAccountPhoneMakeprimary
- CreateAccountPhoneMakeverified
- DeleteAccountPhone
- GetAccountPhone
- ListAccountPhones

### plan delivery method (4 operations)
- GetPlanDeliveryMethods
- GetPlanDeliveryMethodsProposed
- SavePlanDeliveryMethod
- SavePlanDeliveryMethodProposed

### planapplicationdocument (8 operations)
- CreatePlanApplicationDocument
- DeletePlanApplicationDocument
- eSignPlanApplicationDocuments
- GeneratePlanApplicationDocuments
- GetPlanApplicationESignStatus
- ListPlanApplicationDocuments
- SearchPlanApplicationDocuments
- UpdatePlanApplicationDocumentRecipients

### planapplicationdocumentconfig (1 operations)
- ListPlanApplicationDocumentConfigs

### planapplicationdocumenttemplate (3 operations)
- CreatePlanApplicationDocTemplate
- DeletePlanApplicationDocTemplate
- ListPlanApplicationDocumentTemplates

### planapplicationdocumentupload (3 operations)
- CreatePlanApplicationDocUpload
- DeletePlanApplicationDocUpload
- ListPlanApplicationDocumentUploads

### planapplicationenvelope (8 operations)
- CreatePlanApplicationEnvelope
- DeletePlanApplicationEnvelope
- ESignMultiPlanApplicationEnvelope
- ESignSinglePlanApplicationEnvelope
- GetPlanApplicationEnvelope
- ListPlanApplicationEnvelopes
- PatchPlanApplicationEnvelope
- SendApplicationEnvelopeNotification

### planapplicationmanageddocument (3 operations)
- CreatePlanApplicationManagedDocument
- DeletePlanApplicationManagedDocument
- ListPlanApplicationManagedDocuments

### planapplicationrefstatus (1 operations)
- ListRefApplicationStatuses

### planapplications (10 operations)
- ClonePlanApplication
- CreatePlanApplication
- DeletePlanApplication
- GetPlanApplication
- ListPlanApplications
- LockPlanApplication
- PatchPlanApplication
- UnlockPlanApplication
- UpdatePlanApplication
- UpdatePlanApplicationAdditionalQuestions

### planapplicationssearch (1 operations)
- SearchPlanApplications

### planapplicationstatusupdate (2 operations)
- CreatePlanApplicationStatus
- ListPlanApplicationStatusHistory

### planpurposes (1 operations)
- ListPlanPurposes

### plans (20 operations)
- CreateClientOpportunityPlan
- CreateClientPlans
- CreateClientServicecasePlan
- CreateTopupPlan
- DeleteClientOpportunityPlan
- DeleteClientPlan
- DeleteClientServicecasePlan
- ExistsClientPlan
- GetClientPlan
- GetPlan
- GetUserPlansExist
- ListClientPlans
- ListModelplans
- ListPlans
- ListPlanUsers
- ... and 5 more

### plantype (1 operations)
- UpdatePlanType

### plantypes (4 operations)
- GetPlantype
- GetPlanTypeByNameAndRegion
- ListGatedPlanTypes
- ListPlantypes

### plugins (1 operations)
- GetPlugin

### poolfactor (3 operations)
- DeleteSecurityPoolFactor
- ListPoolFactor
- PutPoolFactors

### portfolioreport (4 operations)
- CreatePortfolioReportRequest
- GetPortfolioReportObject
- GetPortfolioReportRequest
- ListClientReportBranding

### preferences (1 operations)
- ListTenantsPreferences

### preprocess (1 operations)
- CreateEsignPreprocess

### prices (4 operations)
- DeleteSecurityPrice
- GetPrices
- PostPrices
- PutPrices

### productproviders (12 operations)
- CreateProductProvider
- CreateProductproviderLink
- DeleteProductproviderLink
- GetProductprovider
- GetProductProviderHierarchy
- ListMultiTiedConfigProductProvider
- ListProductProviderPrograms
- ListProductproviders
- ListProductProviderWrapperConfigs
- ProductProviderExists
- UpdateProductProvider
- UpdateProductProviderHierarchy

### professionalaffiliations (2 operations)
- GetClientProfessionalAffiliations
- UpdateClientProfessionalAffiliations

### programs (6 operations)
- CreateFeeModelProgram
- DeleteFeeModelProgram
- GetProgram
- ListProgramPlansInvalid
- ListPrograms
- SavePrograms

### promote (1 operations)
- CreateTemplateVersionPromote

### prompts (1 operations)
- ListTemplateVersionsPrompts

### proofofidentity (5 operations)
- CreateClientProofOfIdentity
- DeleteClientProofOfIdentity
- GetClientProofOfIdentity
- ListClientProofOfIdentity
- UpdateClientProofOfIdentity

### proposalbeneficiary (5 operations)
- CreateProposalBeneficiaries
- DeleteProposalBeneficiary
- GetProposalBeneficiary
- ListProposalBeneficiaries
- UpdateProposalBeneficiaries

### prospectuses (2 operations)
- GetProspectus
- ListProspectuses

### provider configuration (7 operations)
- DeleteProviderEndpoints
- GetAllProviderEndpoints
- getDeclarations
- getDeclarations2
- GetProviderEndpoints
- ModifyProviderEndpoints
- ValidateProvider

### provider tenant configuration (3 operations)
- DeleteProviderTenant
- GetProviderTenant
- UpdateProviderTenant

### providercodes (13 operations)
- CreateProviderCode
- CreateProviderCodeConfig
- DeleteProviderCode
- DeleteProviderCodeConfig
- GetProviderCode
- GetProviderCodeConfig
- ListAdviserProviderCodes
- ListProviderCodeCombos
- ListProviderCodeConfigs
- ListProviderCodes
- ListProviderCodesSystem
- UpdateProviderCode
- UpdateProviderCodeConfig

### providercodesconfigattributes (4 operations)
- CreateProviderCodeConfigAttribute
- DeleteProviderCodeConfigAttribute
- GetProviderCodeConfigsAttributes
- PatchProviderCodeConfigAttribute

### providerdocuments (4 operations)
- GetProductProviderDocumentCategory
- GetProductProviderDocumentObject
- ListProductProviderDocumentCategories
- ListProductProviderDocuments

### providertemplates (1 operations)
- ListProviderTemplates

### publish (1 operations)
- CreateTemplatePublish

### purposes (2 operations)
- ListClientPlansPurposes
- UpdateClientPlansPurposes

### quotes (26 operations)
- AddClientQuoteApplicant
- AddLeadQuoteApplicant
- ClientQuoteExists
- ClientQuoteResultsExists
- CreateClientQuote
- CreateClientQuoteResult
- CreateLeadQuote
- CreateLeadQuoteResult
- GetClientQuote
- GetClientQuoteResult
- GetClientQuoteResultProductBenefits
- GetLeadQuote
- GetLeadQuoteResult
- GetQuoteResult
- LeadQuoteExists
- ... and 11 more

### rebalance (6 operations)
- CreateRebalance
- GetRebalance
- GetRebalanceItems
- GetRebalances
- GetRebalanceSettings
- UpdateRebalanceSettings

### recent (1 operations)
- ListClientsRecent

### recipients (12 operations)
- CreateCampaignsRecipient
- CreateMessageRecipient
- DeleteCampaignRecipient
- DeleteMessageRecipient
- ExistsMessageRecipient
- GetCampaignRecipient
- GetMessageRecipient
- ListCampaignRecipients
- ListCampaignsRecipients
- ListClientEmailsRecipients
- ListMessageRecipients
- UpdateClientEmailsRecipients

### recommendations (25 operations)
- CreateClientRecommendation
- CreateRecommendationProposal
- CreateTenantRecommendationCategory
- CreateTenantRecommendationSubCategory
- DeleteClientRecommendation
- DeleteRecommendationProposal
- DeleteTenantRecommendationCategory
- DeleteTenantRecommendationSubCategory
- GetClientRecommendation
- GetRecommendationProposal
- GetServiceCaseRecommendation
- GetTenantRecommendationCategory
- GetTenantRecommendationSubCategory
- ListClientRecommendations
- ListPlanRecommendationProposals
- ... and 10 more

### refdata (1 operations)
- ListRefdata

### regions (2 operations)
- GetRegion
- ListRegions

### relationships (21 operations)
- CreateAccountRelationship
- CreateClientRelationship
- CreateClientRelationshipAccess
- CreateClientRelationshipWithRelation
- CreateLeadRelationship
- CreatePersonalContactRelationship
- DeleteAccountRelationship
- DeleteClientRelationship
- DeleteClientRelationshipAccess
- DeleteLeadRelationship
- DeletePersonalContactRelationship
- GetClientRelationship
- GetLeadRelationship
- GetPersonalContactRelationship
- ListClientRelationships
- ... and 6 more

### relationshiptypes (1 operations)
- ListRelationshiptypes

### reply (1 operations)
- CreateMessageReply

### report (1 operations)
- GetCampaignReport

### reportartifact (5 operations)
- CreateReportArtifact
- DeleteArtifact
- GetReportArtifact
- ListReportArtifact
- UploadArtifactObject

### reportbranding (5 operations)
- CreateReportBranding
- DeleteReportBranding
- GetReportBranding
- ListReportBranding
- UpdateReportBranding

### reportgroup (6 operations)
- CreateQuicksightGroup
- DeleteQuicksightGroup
- GetQuicksightGroup
- ListQuicksightGroups
- QuicksightGroupExists
- UpdateQuicksightGroup

### reportgroupsuser (3 operations)
- AssignQuicksightGroupUser
- DeleteQuicksightGroupUser
- ListQuicksightGroupUsers

### reportgrouptorole (3 operations)
- AssignQuicksightGroupToIoRole
- DeleteQuicksightGroupToIoRole
- ListQuicksightGroupToIoRole

### requirements (2 operations)
- GetClientRequirement
- ListClientRequirements

### restart (1 operations)
- CreateInstanceRestart

### restore (1 operations)
- CreateTemplateRestore

### resume (1 operations)
- CreateInstanceResume

### reviews (4 operations)
- CreateReview
- DeleteReview
- GetReview
- ListReviews

### revoke (1 operations)
- CreateMessageRevoke

### riskprofiles (6 operations)
- ArchiveRiskProfile
- CreateRiskProfile
- GetRiskProfile
- ListRiskProfiles
- PatchRiskProfile
- UnarchiveRiskProfile

### roles (2 operations)
- ListTemplatesRoles
- UpdateTemplatesRoles

### saves (1 operations)
- CreateSave

### schema (1 operations)
- GetPluginSchema

### search (1 operations)
- ListPropertyAddressesSearch

### searches (1 operations)
- ListClientsSearch

### sectors (2 operations)
- GetSector
- ListSectors

### securities (7 operations)
- GetSecurity
- ListExistingSecurities
- ListSecurities
- ListSecuritiesByIdentifierSymbols
- ListSecuritiesByIds
- ListSecuritiesBySourceReferences
- ListSecuritiesV2

### security (2 operations)
- GetOptionSecurity
- UpdateOptionSecurity

### securitygroups (7 operations)
- DeleteSecurityGroup
- GetSecurityGroup
- ListSecurityGroupGroupSecurities
- ListSecurityGroups
- ListSecurityGroupsSecurities
- PostSecurityGroups
- PutSecurityGroups

### securitytypes (1 operations)
- ListSecurityTypes

### segments (2 operations)
- GetCampaignSegment
- UpdateCampaignSegments

### send (2 operations)
- SendClientEmail
- SendMessage

### sendbulk (1 operations)
- SendbulkCampaignemails

### sendraw (1 operations)
- SendRawMail

### sendtemplate (1 operations)
- SendTemplateMail

### sendtestemail (2 operations)
- SendtestemailCampaigns
- SendtestemailCampaigntemplates

### sendtoadviser (1 operations)
- SendtoadviserMessage

### serviceactivities (6 operations)
- CreateServiceActivity
- GetServiceActivity
- GetServiceActivitySummary
- ListClientServiceActivities
- ListServiceActivities
- UpdateServiceActivity

### servicecasecategories (2 operations)
- GetServiceCaseCategory
- ListServiceCaseCategories

### servicecases (5 operations)
- CreateClientServicecases
- DeleteClientServicecase
- GetClientServicecase
- ListClientServicecases
- UpdateClientServicecase

### servicecasestatus (2 operations)
- GetServiceCaseStatus
- ListServiceCaseStatuses

### servicehistories (2 operations)
- GetClientServiceRecord
- ListClientServiceHistory

### session (2 operations)
- GetBeginsession
- GetQuicksightSessionEmbedUrl

### settings (17 operations)
- CreateOrUpdateSettingForClient
- CreateOrUpdateSettingForGroup
- CreateOrUpdateSettingForTenant
- DeleteSetting
- DeleteSettingForClient
- DeleteSettingForGroup
- DeleteSettingForTenant
- GetEffectiveClientSetting
- GetEffectiveClientSettings
- GetEffectiveGroupSetting
- GetEffectiveGroupSettings
- GetSetting
- GetSettingForClient
- GetSettingForTenant
- GetSettingGroup
- ... and 2 more

### shares (1 operations)
- ListClientShares

### signedurl (1 operations)
- GetAvatarSignedurl

### signers (1 operations)
- UpdateDocuSignEnvelopeSigners

### signurl (1 operations)
- SignDocuSignEnvelope

### splits (23 operations)
- ClientFeeSplitExists
- CreateClientFeeSplit
- CreatePlanSplit
- CreateSplit
- DeleteClientFeeSplit
- DeleteClientPlanSplit
- DeletePlanSplit
- DeleteSplit
- GetClientFeeSplit
- GetClientPlanSplit
- GetPlanSplit
- GetSplit
- ListClientFeeSplits
- ListClientPlanSplits
- ListPlanSplits
- ... and 8 more

### splittemplates (4 operations)
- GetClientSplitTemplate
- GetSplitTemplate
- ListClientSplitTemplates
- ListSplitTemplates

### statuses (15 operations)
- ClientFeeStatusExists
- CreateClientFeeStatus
- CreateFeeStatus
- CreatePlanFeeStatus
- CreatePlanStatuses
- FeeStatusExists
- GetClientFeeStatus
- GetFeeStatus
- GetPlanFeeStatus
- GetPlanStatus
- ListClientFeeStatuses
- ListClientPlanStatuses
- ListFeeStatuses
- ListPlanFeeStatuses
- PlanFeeStatusExists

### steps (6 operations)
- CreateTemplateSteps
- DeleteTemplateStep
- GetTemplateStep
- ListInstancesSteps
- ListTemplateSteps
- PatchTemplateStep

### stocks (5 operations)
- DeleteStock
- GetStock
- ListStocks
- PostStocks
- PutStocks

### subscribe (2 operations)
- CreateEventSubscribe
- ListEventsSubscribe

### subscribes (3 operations)
- DeleteSubscribe
- GetSubscribe
- UpdateSubscribe

### subscriptions (2 operations)
- CreateSubscription
- DeleteSubscription

### summarybycategory (2 operations)
- ListClientPlanTransactionSummaryByCategory
- ListClientTransactionSummaryByCategory

### tags (10 operations)
- AddClientTag
- AddLeadTag
- ListClientTags
- ListLeadTags
- ListPlanTags
- ListTags
- RemoveClientTag
- RemoveLeadTag
- UpdateClientTags
- UpdateLeadTags

### taskchecklistitems (2 operations)
- CreateTaskCheckListItems
- GetTaskCheckListItems

### tasknotes (5 operations)
- CreateTaskNote
- DeleteTaskNote
- GetTaskNote
- ListTaskNotes
- UpdateTaskNote

### tasks (9 operations)
- CreateTask
- DeleteTask
- GetTask
- LinkFeeToTask
- ListTask
- ListTaskFees
- SearchTask
- UnlinkFeeToTask
- UpdateTask

### templatecategories (5 operations)
- CreateTemplatecategory
- DeleteTemplatecategory
- GetTemplatecategory
- ListTemplatecategories
- PatchTemplatecategory

### templatelayouts (2 operations)
- ExistsTemplatelayout
- GetTemplatelayout

### templates (8 operations)
- CreateClientPlanFeeByTemplate
- CreateTemplate
- CreateTemplate1
- DeleteTemplate
- GetTemplate
- ListMigratesTemplates
- ListTemplates
- PatchTemplate

### tenant (6 operations)
- GetTenantAddress
- GetTenantDetail
- GetTenantStatus
- UpdateTenantAddress
- UpdateTenantDetail
- UpdateTenantStatus

### tenant configuration (1 operations)
- TenantFederationExists

### tenantcategories (5 operations)
- DeleteTenantCategory
- GetTenantCategory
- ListTenantCategories
- PatchTenantCategories
- PostTenantCategories

### tenants (4 operations)
- CreateTenant
- GetTenant
- ListTenantDocuments
- TenantExists

### tenanttasksetting (2 operations)
- GetTenantTaskSetting
- UpdateTenantTaskSetting

### test only (1 operations)
- ListTests

### timeentries (1 operations)
- ListTimeEntries

### timeseries (3 operations)
- GetAssetsTimeSeries
- GetPlansTimeSeries
- ListClientTransactionTimeSeries

### transactions (8 operations)
- BatchCreateClientPlanTransactions
- BatchCreateClientTransactions
- BatchCreateTransactions
- ClientPlanTransactionExists
- GetClientPlanTransaction
- ListClientPlanTransactions
- ListClientTransactions
- UpdateClientPlanTransaction

### transfereligibility (1 operations)
- ListTransferEligibility

### triggers (2 operations)
- CreateTemplatesTriggers
- ListTemplatesTriggers

### unmatchedplans (6 operations)
- CreateUnmatchedExistingPlan
- CreateUnmatchedPlan
- GetUnmatchedPlan
- ListUnmatchedPlans
- MatchPlan
- PatchUnmatchedPlan

### unreadcount (2 operations)
- ExistsMessageUnreadcount
- GetMessageUnreadcount

### unsuspend (1 operations)
- CreateInstanceUnsuspend

### update status (7 operations)
- PatchAccountStatus
- PatchMoneyMovementStatus
- PatchSecurityTransferInstructionStatus
- PatchStandingInstructionStatus
- PostMoneyMovementActivity
- PutAccountModel
- PutMoneyMovementInstuction

### upload (2 operations)
- CreateReviewUpload
- CreateTemplateUpload

### userdiaryclassifications (2 operations)
- GetUserDiaryClassification
- ListUserDiaryClassification

### users (4 operations)
- CreateUser
- GetUser
- UpdateUser
- UserExists

### valuations (13 operations)
- CreateAssetValuations
- CreatePlanValuations
- DeleteClientAssetValuation
- DeleteClientPlanValuation
- GetClientAssetValuation
- GetClientPlanValuation
- GetPlanValuationRawResponse
- ListClientAssetValuations
- ListClientPlanValuations
- ListClientValuations
- PostCePlanValuation
- UpdateClientAssetValuation
- UpdateClientPlanValuation

### variables (1 operations)
- ListTemplateVersionsVariables

### verify (2 operations)
- CreateDomainVerify
- CreateIdentityVerify

### versioning (2 operations)
- GetOptionVersioning
- UpdateOptionVersioning

### versions (5 operations)
- CreateTemplateVersion
- DeleteTemplateVersion
- GetTemplateVersion
- ListTemplateVersions
- ListVersions

### video (5 operations)
- GetUserProviderSubscriptions
- GetVideo
- ListVideos
- MAPlayerPreviewVideoConfigURI
- ProcessVideoContentZip

### vulnerabilities (4 operations)
- GetClientVulnerability
- GetClientVulnerabilityCurrent
- ListClientsVulnerabilities
- UpdateClientVulnerabilitiesCurrent

### webhooks (5 operations)
- CreateWebhook
- DeleteWebhook
- GetWebhook
- ListWebhooks
- SubscribeUnsubscribeWebSub

### withdraw (1 operations)
- CreateTemplateWithdraw

### withdrawals (6 operations)
- CreatePlanWithdrawals
- DeleteClientPlanWithdrawal
- GetClientPlanWithdrawal
- ListClientPlanWithdrawals
- ListClientsWithdrawals
- UpdateClientPlanWithdrawal

### withdrawalsubtypes (1 operations)
- ListWithdrawalSubTypes


## Hidden Public APIs (Documentation Ignore List)

Total: 64 operations

| Tags | Operation ID | Method | Endpoint | Scopes | Service |
|------|--------------|--------|----------|--------|--------|
| documents | AdviserDocumentExists | HEAD | /v2/advisers/{adviserId}/documents/{documentId} | client_financial_data, documents, myprofile, openid | Monolith.Storage |
| documents | AdviserDocumentHideInPortal | DELETE | /v2/advisers/{adviserId}/documents/{documentId}/showInPortal | client_financial_data, documents, myprofile, openid | Microservice.ClientStorage |
| documents | AdviserDocumentShowInPortal | POST | /v2/advisers/{adviserId}/documents/{documentId}/showInPortal | client_financial_data, documents, myprofile, openid | Microservice.ClientStorage |
| documents | AssignClientDocument | POST | /v2/clients/{clientId}/documents/{documentId} | client_financial_data, documents, myprofile, openid | Monolith.Storage |
| transactions, beta | BatchCreateClientPlanTransactions | POST | /v2/clients/{clientId}/plans/{planId}/transactions | client_financial_data | Monolith.Portfolio |
| documents | ClientDocumentHideInPortal | DELETE | /v2/clients/{clientId}/documents/{documentId}/showInPortal | client_financial_data, documents, myprofile, openid | Microservice.ClientStorage |
| documents | ClientDocumentShowInPortal | POST | /v2/clients/{clientId}/documents/{documentId}/showInPortal | client_financial_data, documents, myprofile, openid | Microservice.ClientStorage |
| documents | CreateAdviserDocument | POST | /v2/advisers/{adviserId}/documents | client_financial_data, documents, myprofile, openid | Monolith.Storage |
| insights | CreateClientInsight | POST | /v2/clients/{clientId}/insights | N/A | Microservice.Insight |
| recommendations | CreateClientRecommendation | POST | /v2/clients/{clientId}/recommendations2 | N/A | Microservice.Recommend |
| productproviders | CreateProductProvider | POST | /v2/productproviders | firm_data, myprofile, openid | Monolith.Crm |
| recommendations | CreateRecommendationProposal | POST | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals | N/A | Microservice.Recommend |
| tasks | CreateTask | POST | /v2/activities/tasks | N/A | Monolith.Crm |
| tenants | CreateTenant | POST | /v2/tenants | firm_data, myprofile, openid | Monolith.Crm |
| recommendations | CreateTenantRecommendationCategory | POST | /v2/recommendations2/categories | N/A | Microservice.Recommend |
| recommendations | CreateTenantRecommendationSubCategory | POST | /v2/recommendations2/subcategories | N/A | Microservice.Recommend |
| entitlement | CreateUserDetail | POST | /v2/users | N/A | Monolith.Entitlement |
| documents | DeleteAdviserDocument | DELETE | /v2/advisers/{adviserId}/documents/{documentId} | client_financial_data, documents, myprofile, openid | Monolith.Storage |
| attitudetorisk | DeleteAtrTemplateV2 | DELETE | /v2/attitudeToRisk/atr_templates/{templateId} | apps, client_data, client_data.atr, firm_data, firm_data.atr, myprofile, openid | Monolith.Atr |
| recommendations | DeleteClientRecommendation | DELETE | /v2/clients/{clientId}/recommendations2/{recommendationId} | N/A | Microservice.Recommend |
| recommendations | DeleteRecommendationProposal | DELETE | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals/{proposalId} | N/A | Microservice.Recommend |
| tasks | DeleteTask | DELETE | /v2/activities/tasks/{taskId} | N/A | Monolith.Crm |
| recommendations | DeleteTenantRecommendationCategory | DELETE | /v2/recommendations2/categories/{categoryId} | N/A | Microservice.Recommend |
| recommendations | DeleteTenantRecommendationSubCategory | DELETE | /v2/recommendations2/subcategories/{subCategoryId} | N/A | Microservice.Recommend |
| activitycategories | GetActivityCategory | GET | /v2/activities/categories/{categoryId} | N/A | Monolith.Crm |
| activityoutcomes | GetActivityOutcome | GET | /v2/activities/outcomes/{outcomeId} | N/A | Monolith.Crm |
| activitypriorities | GetActivityPriority | GET | /v2/activities/priorities/{priorityId} | N/A | Monolith.Crm |
| activitytypes | GetActivityType | GET | /v2/activities/types/{typeId} | N/A | Monolith.Crm |
| documents | GetAdviserDocument | GET | /v2/advisers/{adviserId}/documents/{documentId} | client_financial_data, documents, myprofile, openid | Monolith.Storage |
| insights | GetClientInsights | GET | /v2/clients/{clientId}/insights | N/A | Microservice.Insight |
| objectives | GetClientObjective | GET | /v2/clients/{clientId}/objectives/{objectiveId} | N/A | Microservice.Requirement |
| recommendations | GetClientRecommendation | GET | /v2/clients/{clientId}/recommendations2/{recommendationId} | N/A | Microservice.Recommend |
| requirements | GetClientRequirement | GET | /v2/clients/{clientId}/requirements/{requirementId} | N/A | Monolith.Crm |
| groups | GetGroup | GET | /v2/groups/{groupId} | N/A | Monolith.Crm |
| recommendations | GetRecommendationProposal | GET | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals/{proposalId} | N/A | Microservice.Recommend |
| tasks | GetTask | GET | /v2/activities/tasks/{taskId} | N/A | Monolith.Crm |
| recommendations | GetTenantRecommendationCategory | GET | /v2/recommendations2/categories/{categoryId} | N/A | Microservice.Recommend |
| recommendations | GetTenantRecommendationSubCategory | GET | /v2/recommendations2/subcategories/{subCategoryId} | N/A | Microservice.Recommend |
| entitlement | GetUserDetail | GET | /v2/users/{userId} | N/A | Monolith.Entitlement |
| activitycategories | ListActivityCategories | GET | /v2/activities/categories | N/A | Monolith.Crm |
| activityoutcomes | ListActivityOutcomes | GET | /v2/activities/outcomes | N/A | Monolith.Crm |
| activitypriorities | ListActivityPriorities | GET | /v2/activities/priorities | N/A | Monolith.Crm |
| activitytypes | ListActivityTypes | GET | /v2/activities/types | N/A | Monolith.Crm |
| documents | ListAdviserDocuments | GET | /v2/advisers/{adviserId}/documents | client_financial_data, documents, myprofile, openid | Monolith.Storage |
| attitudetorisk | ListAtrSystemCategories | GET | /v2/atr/system_categories | apps, client_data, client_data.atr, firm_data, firm_data.atr, myprofile, openid | Monolith.Atr |
| objectives | ListClientObjectives | GET | /v2/clients/{clientId}/objectives | N/A | Microservice.Requirement |
| recommendations | ListClientRecommendations | GET | /v2/clients/{clientId}/recommendations2 | N/A | Microservice.Recommend |
| requirements | ListClientRequirements | GET | /v2/clients/{clientId}/requirements | N/A | Monolith.Crm |
| holdings | ListClientsHoldings | GET | /v2/clients/{clientId}/holdings | client_financial_data, myprofile, openid | Monolith.Portfolio |
| groups | ListGroups | GET | /v2/groups | N/A | Monolith.Crm |
| legacyapps | ListLegacyApps | GET | /v2/users/{userId}/legacyapps | N/A | Monolith.Crm |
| recommendations | ListRecommendationProposals | GET | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals | N/A | Microservice.Recommend |
| tasks | ListTask | GET | /v2/activities/tasks | N/A | Monolith.Crm |
| recommendations | ListTenantRecommendationCategories | GET | /v2/recommendations2/categories | N/A | Microservice.Recommend |
| recommendations | ListTenantRecommendationSubCategories | GET | /v2/recommendations2/subcategories | N/A | Microservice.Recommend |
| entitlement, beta | ListUsersDetails | GET | /v2/users | apps, client_data, client_financial_data, client_financial_data.quotes, firm_data, firm_data.incomestatements, myprofile, openid | Monolith.Entitlement |
| recommendations | PatchClientRecommendation | PATCH | /v2/clients/{clientId}/recommendations2/{recommendationId} | N/A | Microservice.Recommend |
| recommendations | PatchServiceCaseRecommendations | PATCH | /v2/servicecases/{serviceCaseId}/recommendations | N/A | Microservice.Recommend |
| documents | UpdateAdviserDocument | PUT | /v2/advisers/{adviserId}/documents/{documentId} | client_financial_data, documents, myprofile, openid | Monolith.Storage |
| recommendations | UpdateRecommendationProposal | PUT | /v2/clients/{clientId}/recommendations2/{recommendationId}/proposals/{proposalId} | N/A | Microservice.Recommend |
| tasks | UpdateTask | PUT | /v2/activities/tasks/{taskId} | N/A | Monolith.Crm |
| recommendations | UpdateTenantRecommendationCategory | PUT | /v2/recommendations2/categories/{categoryId} | N/A | Microservice.Recommend |
| recommendations | UpdateTenantRecommendationSubCategory | PUT | /v2/recommendations2/subcategories/{subCategoryId} | N/A | Microservice.Recommend |
| entitlement | UpdateUserDetail | PUT | /v2/users/{userId} | N/A | Monolith.Entitlement |

## Services Analyzed

Total services with API data: 48

| Service | API Count |
|---------|----------|
| Microservice.AppD | 47 |
| Microservice.Author | 51 |
| Microservice.Avatar | 3 |
| Microservice.Brand | 8 |
| Microservice.CFF | 7 |
| Microservice.CashflowEngine | 3 |
| Microservice.ChangeNotification | 9 |
| Microservice.ClientStorage | 4 |
| Microservice.Config | 14 |
| Microservice.Content | 23 |
| Microservice.DPA | 3 |
| Microservice.DocuSign | 9 |
| Microservice.Email | 5 |
| Microservice.Expectation | 22 |
| Microservice.Federation | 1 |
| Microservice.Identity | 16 |
| Microservice.Insight | 2 |
| Microservice.Membership | 28 |
| Microservice.MoneyMovement | 1 |
| Microservice.Notifications | 10 |
| Microservice.PlanApplication | 40 |
| Microservice.PropertyProvider | 1 |
| Microservice.ProviderCodes | 17 |
| Microservice.ProviderDocuments | 4 |
| Microservice.ProviderIntegration | 31 |
| Microservice.Quicksight | 40 |
| Microservice.Quotation | 12 |
| Microservice.Recommend | 77 |
| Microservice.Requirement | 24 |
| Microservice.SecureMessaging | 42 |
| Microservice.Security | 88 |
| Microservice.Workflow | 36 |
| Microservice.iMps | 4 |
| Monolith.Atr | 34 |
| Monolith.AuthorDataProvider | 2 |
| Monolith.Bcc | 2 |
| Monolith.Campaign | 53 |
| Monolith.Charging | 8 |
| Monolith.Commission | 12 |
| Monolith.ContractEnquiry | 4 |
| Monolith.Crm | 201 |
| Monolith.Entitlement | 40 |
| Monolith.FactFind | 29 |
| Monolith.Organization | 6 |
| Monolith.Portfolio | 87 |
| Monolith.Report | 16 |
| Monolith.Storage | 53 |
| Monolith.WebHooks | 2 |
