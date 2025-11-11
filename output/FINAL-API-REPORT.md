# Intelliflo Public APIs - Complete Analysis (Final)

## Executive Summary

- **Total Unique Public APIs**: 1565
- **APIs on Developer Portal**: 391
- **Hidden Public APIs**: 1174
- **APIs in API Gateway Whitelist**: 395 (98.5% match rate)
- **APIs with Tags**: 1565
- **APIs with Service Information**: 1231
- **Documentation Ignore Operations Matched**: 83/83 (100%)

## Data Sources

1. **Public Swagger v2** (`public-v2.json`) - 391 operations on developer portal
2. **Service Swagger Docs** - Fetched from 117 services (44 successful, 1,226 unique operations)
3. **Documentation Ignore List** - 83 hidden public operations (all matched with swagger data)
4. **API Gateway Whitelist** (`api_white_list.txt`) - 401 operations allowed through API Gateway (395 matched, 6 unmatched)
5. **GitHub [PublicApi] Search** - 46 operations from source code

## Complete API List

| Tags | Operation ID | Method | Endpoint | Description | On Portal | Service | Source |
|------|--------------|--------|----------|-------------|-----------|---------|--------|
| models | AcceptModel | POST | /v2/installed_apps/models/{modelId}/accept | Accepts a provider model for use by a firm. | No | Microservice.iMps | Service Swagger (Microservice. |
| attitudetorisk | AcceptTenantProviderAtrTemplate | POST | /v2/installed_apps/atr_templates/{id}/accept | Allows a tenant to approve a third party ATR templ | Yes | Monolith.Atr | Public Swagger v2 + Documentat |
| accounts | AccountDocumentExists | HEAD | /v2/accounts/{accountId}/documents/{documentI | Checks if required document exists | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| accounts | AccountDocumentObjectExists | HEAD | /v2/accounts/{accountId}/documents/{documentI | Checks if required account document is uploaded. | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| accounts | AccountExists | HEAD | /v2/accounts/{accountId} | Check the account is available | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| notifications | AcknowledgeNotifications | POST | /v2/user/notifications | Mark one or more notifications as read | No | Monolith.ContractEnquiry | Service Swagger (Monolith.Cont |
| attitudetorisk | ActivateAtrTemplate | POST | /v2/attitudeToRisk/atr_templates/{templateId} | Activates/Deactivates a ATR template. | Yes | Monolith.Atr | Public Swagger v2 + Documentat |
| models | ActivatePortfolioModel | POST | /v2/models/{modelId}/active | Activates or deactivates a portfolio model. | Yes | N/A | Public Swagger v2 |
| attitudetorisk | ActivateProviderAtrTemplate | POST | /v2/attitudeToRisk/apps/{appId}/atr_templates | Activates or deactivates a third party provider te | Yes | Monolith.Atr | Public Swagger v2 + Documentat |
| activates | activateuser | POST | /v2/users/activate/{token} | Checks token and if OK returns value + deletes tok | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| quotes, beta | AddClientQuoteApplicant | POST | /v2/clients/{clientId}/quotes/{quoteId} | Adds a secondary client owner to a given quote. | Yes | N/A | Public Swagger v2 |
| tags | AddClientTag | POST | /v2/clients/{clientId}/tags/{tagName} | Creates a new tag for a given client. | Yes | N/A | Public Swagger v2 |
| quotes | AddLeadQuoteApplicant | POST | /v2/leads/{leadId}/quotes/{quoteId} | Adds a secondary lead owner to a given quote. | No | Microservice.Quotation | Service Swagger (Microservice. |
| tags | AddLeadTag | POST | /v2/leads/{leadId}/tags/{tagName} | Creates a new tag for a given lead. | Yes | N/A | Public Swagger v2 |
| documents | AdviserDocumentExists | HEAD | /v2/advisers/{adviserId}/documents/{documentI | Checks if required document exists | No | Monolith.Storage | Service Swagger + Documentatio |
| documents | AdviserDocumentHideInPortal | DELETE | /v2/advisers/{adviserId}/documents/{documentI | Shares an adviser document that has been shared wi | No | Microservice.ClientStorag | Service Swagger + Documentatio |
| documents | AdviserDocumentObjectExists | HEAD | /v2/advisers/{adviserId}/documents/{documentI | Checks if required adviser document is uploaded. | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| documents | AdviserDocumentShowInPortal | POST | /v2/advisers/{adviserId}/documents/{documentI | Shares the adviser document with all clients in th | No | Microservice.ClientStorag | Service Swagger + Documentatio |
| advisers | AdviserExists | HEAD | /v2/advisers/{adviserId} | Checks if the adviser exists. | Yes | N/A | Public Swagger v2 |
| apps, beta | ApproveCollaboratorApp | POST | /v2/apps/{appId}/approve | Adds collaborator approval for a given app | No | Microservice.AppD | Service Swagger (Microservice. |
| apps, beta | ApprovePublishedAppForInstallation | PUT | /v2/published_apps/{appId}/approve_install | Approves a given published app for installation | No | Microservice.AppD | Service Swagger (Microservice. |
| apps, beta | ApprovePublishedAppForUserInstallat | GET | /v2/published_apps/{appId}/approve_install/{r | Approves app installation for a user via a jump li | No | Microservice.AppD | Service Swagger (Microservice. |
| agreementtemplates | ArchiveAgreementTemplate | POST | /v2/agreements/communication-templates/{templ | Archives a specific Agreement Template by ID | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| riskprofiles | ArchiveRiskProfile | POST | /v2/riskprofiles/{riskProfileId}/archive | Archive the Risk Profile | No | Monolith.Atr | Service Swagger (Monolith.Atr) |
| accounts | AssignAccountDocument | POST | /v2/accounts/{accountId}/documents/{documentI | Adds the specified account owner to the specified  | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| documents | AssignAdviserDocument | POST | /v2/advisers/{adviserId}/documents/{documentI | Adds the specified adviser owner to the specified  | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| documents | AssignClientDocument | POST | /v2/clients/{clientId}/documents/{documentId} | Creates a document for a given client and document | No | Monolith.Storage | Service Swagger + Documentatio |
| leads | AssignLeadDocument | POST | /v2/leads/{leadId}/documents/{documentId} | Adds the specified owner to the specified document | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| dashboardpermission | AssignQuicksightDashboardPermission | PUT | /v2/quicksight/dashboards/{dashboardId}/permi | Adds permission for specified user or group to qui | No | Microservice.Quicksight | Service Swagger (Microservice. |
| reportgrouptorole | AssignQuicksightGroupToIoRole | POST | /v2/roles/{roleId}/reportgroups/{reportGroupI | Assign quicksight report group to a role. | No | Microservice.Quicksight | Service Swagger (Microservice. |
| reportgroupsuser | AssignQuicksightGroupUser | POST | /v2/quicksight/reportgroups/{groupId}/users/{ | Adds a quickSight user to a quickSight report grou | No | Microservice.Quicksight | Service Swagger (Microservice. |
| bandingtemplates | BandingTemplateExists | HEAD | /v2/advisers/{adviserId}/bandingtemplates/{ba | Check for the existence of a specific banding temp | Yes | N/A | Public Swagger v2 |
| transactions, beta | BatchCreateClientPlanTransactions | POST | /v2/clients/{clientId}/plans/{planId}/transac | Creates a batch of transactions for a particular c | No | Monolith.Portfolio | Service Swagger + Documentatio |
| transactions, beta | BatchCreateClientTransactions | POST | /v2/clients/{clientId}/transactions | Creates a batch of transactions for different plan | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Mon |
| transactions, beta | BatchCreateTransactions | POST | /v2/transactions | Creates a batch of transactions for different plan | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Mon |
| clientvideo | BulkShareVideosToClients | POST | /v2/clients/media/videos/bulk/share | Creates a client video. | No | Microservice.Content | Service Swagger (Microservice. |
| apps, beta | CertifyPublishedApp | PUT | /v2/published_apps/{appId} | Certifies a given published app | No | Microservice.AppD | Service Swagger (Microservice. |
| changepassword | changepassword | POST | /v2/users/{userId}/changepassword | Change password | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| alerts | ChangeUserAlertSubscription | PUT | /v2/users/{userId}/alertsubscriptions/{alertS | Updates an alert subscription for a user. | No | Microservice.Notification | Service Swagger (Microservice. |
| commissions | ClientCommissionExists | HEAD | /v2/clients/{clientId}/plans/{planId}/commiss | Check to see if commission exists for a given plan | Yes | N/A | Public Swagger v2 |
| documents | ClientDocumentExists | HEAD | /v2/clients/{clientId}/documents/{documentId} | Checks if required client document exists | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| documents | ClientDocumentHideInPortal | DELETE | /v2/clients/{clientId}/documents/{documentId} | Unshares the document with specified document id i | No | Microservice.ClientStorag | Service Swagger + Documentatio |
| documents | ClientDocumentObjectExists | HEAD | /v2/clients/{clientId}/documents/{documentId} | Checks if required client document is uploaded. | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| documents | ClientDocumentShowInPortal | POST | /v2/clients/{clientId}/documents/{documentId} | Shares the document with specified document id in  | No | Microservice.ClientStorag | Service Swagger + Documentatio |
| clients | ClientExists | HEAD | /v2/clients/{clientId} | Checks the client exists. | Yes | Monolith.Crm | Public Swagger v2 + GitHub Mon |
| splits | ClientFeeSplitExists | HEAD | /v2/clients/{clientId}/fees/{feeId}/splits/{s | Checks that the client fee split exists. | Yes | N/A | Public Swagger v2 |
| statuses | ClientFeeStatusExists | HEAD | /v2/clients/{clientId}/fees/{feeId}/statuses/ | Check fee status exists. | Yes | N/A | Public Swagger v2 |
| objectives | ClientObjectiveExists | HEAD | /v2/clients/{clientId}/objectives/{objectiveI | Checks that a given client objective exists. | No | Microservice.Requirement | Service Swagger (Microservice. |
| transactions, beta | ClientPlanTransactionExists | HEAD | /v2/clients/{clientId}/plans/{planId}/transac | Check to see if a transaction exists. | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Mon |
| quotes, beta | ClientQuoteExists | HEAD | /v2/clients/{clientId}/quotes/{quoteId} | Checks that a quote exists for a given client. | Yes | N/A | Public Swagger v2 |
| quotes, beta | ClientQuoteResultsExists | HEAD | /v2/clients/{clientId}/quotes/{quoteId}/resul | Checks that a quote result exists for a client quo | Yes | N/A | Public Swagger v2 |
| advicetemplates | CloneAdviceTemplate | POST | /v2/advice/templates/{templateId} | Clone Advice template. | No | Microservice.Recommend | Service Swagger (Microservice. |
| planapplications | ClonePlanApplication | POST | /v2/plans/{planId}/applications/{applicationI | Clone Plan Application. | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| commissions | CommissionExists | HEAD | /v2/commissions/{commissionId} | Check to see if a commission exists. | Yes | N/A | Public Swagger v2 |
| complete | CompleteClientAgreement | POST | /v2/clients/{clientId}/communication-agreemen | Complete Client Agreement | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| apps, beta | ConfirmAppCollaborator | GET | /v2/apps/{appId}/collaborators/confirm | Verifies a collaborator for a given app | No | Microservice.AppD | Service Swagger (Microservice. |
| accounts | CreateAccount | POST | /v2/accounts | Creates account | No | Microservice.Membership | Service Swagger (Microservice. |
| 2fa | CreateAccount2faAuthenticate | POST | /v2/accounts/{subject}/2fa/authenticate | Verifies that 2fa code is valid and logins | No | Microservice.Membership | Service Swagger (Microservice. |
| 2fa | CreateAccount2faExtmfaAuthenticate | POST | /v2/accounts/{subject}/2fa/extmfa/authenticat | Verifies that 2fa code is valid and logins | No | Microservice.Membership | Service Swagger (Microservice. |
| 2fa | CreateAccount2faPostpone | POST | /v2/accounts/{subject}/2fa/postpone | Postpone 2fa setup for a user account. | No | Microservice.Membership | Service Swagger (Microservice. |
| 2fa | CreateAccount2faRecoverycodesAuthen | POST | /v2/accounts/{subject}/2fa/recoverycodes/auth | Authenticates an user using a recovery code. Used | No | Microservice.Membership | Service Swagger (Microservice. |
| addresses | CreateAccountAddress | POST | /v2/accounts/{accountId}/addresses | Creates a new Address for the given Account. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| passkeys | CreateAccountPasskeysAuthenticate | POST | /v2/accounts/{subject}/passkeys/authenticate | Verifies the user authenticated by FIDO is valid a | No | Microservice.Membership | Service Swagger (Microservice. |
| phones | CreateAccountPhone | POST | /v2/accounts/{subject}/phones | Creates a phone for given account. | No | Microservice.Membership | Service Swagger (Microservice. |
| phones | CreateAccountPhoneMakeprimary | POST | /v2/accounts/{subject}/phones/{phoneId}/makep | Makes the given phone primary for a given account. | No | Microservice.Membership | Service Swagger (Microservice. |
| phones | CreateAccountPhoneMakeverified | POST | /v2/accounts/{subject}/phones/{phoneId}/makev | Verifies a phone for a given account. | No | Microservice.Membership | Service Swagger (Microservice. |
| relationships | CreateAccountRelationship | POST | /v2/accounts/{accountId}/relationships | Creates a new Relationship for the given Account. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| 2fa | CreateAccounts2faRecoverycode | POST | /v2/accounts/{subject}/2fa/recoverycodes | Creates new 2fa recovery codes for an user account | No | Microservice.Membership | Service Swagger (Microservice. |
| 2fa | CreateAccounts2faRegister | POST | /v2/accounts/{subject}/2fa/register | If a verification code is valid, sets up Is2faEnab | No | Microservice.Membership | Service Swagger (Microservice. |
| 2fa | CreateAccounts2faSecret | POST | /v2/accounts/{subject}/2fa/secret | Creates new 2fa shared secret for an user account. | No | Microservice.Membership | Service Swagger (Microservice. |
| activitycategories | CreateActivityCategory | POST | /v2/activities/categories | Creates an activity category | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activitychecklistitems | CreateActivityCheckListItems | POST | /v2/activities/{activityId}/checklists/items | Creates a CheckList Item for an activity and tenan | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activityoutcomes | CreateActivityOutcome | POST | /v2/activities/outcomes | Creates an activity outcome | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activitytypes | CreateActivityType | POST | /v2/activities/types | Creates an activity type. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| advicetemplates | CreateAdviceTemplate | POST | /v2/advice/templates | Create advice template. | No | Microservice.Recommend | Service Swagger (Microservice. |
| advicetemplates | CreateAdviceTemplateStep | POST | /v2/advice/templates/{templateId}/steps | Create advice template step. | No | Microservice.Recommend | Service Swagger (Microservice. |
| advicetemplates | CreateAdviceTemplateStepTransition | POST | /v2/advice/templates/{templateId}/steptransit | Create Advice template step transition. | No | Microservice.Recommend | Service Swagger (Microservice. |
| advisers | CreateAdviser | POST | /v2/advisers | Creates an adviser. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | CreateAdviserAddress | POST | /v2/advisers/{adviserId}/addresses | Creates a new Address for the given Adviser. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| contactdetails | CreateAdviserContactdetail | POST | /v2/advisers/{adviserId}/contactdetails | Creates a new ContactDetail for the given Adviser | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| documents | CreateAdviserDocument | POST | /v2/advisers/{adviserId}/documents | Creates a new document associated with this specif | No | Monolith.Storage | Service Swagger + Documentatio |
| apps, beta | CreateApp | POST | /v2/apps | Creates an app | No | Microservice.AppD | Service Swagger (Microservice. |
| apps, beta | CreateAppCollaborator | POST | /v2/apps/{appId}/collaborators | Creates a collaborator for a given app | No | Microservice.AppD | Service Swagger (Microservice. |
| apps, beta | CreateAppOauthClient | POST | /v2/apps/{appId}/oauth_clients | Creates an oauth client for a given app | No | Microservice.AppD | Service Swagger (Microservice. |
| apps, beta | CreateAppOauthClientSecret | POST | /v2/apps/{appId}/oauth_clients/{clientId}/sec | Creates a secret for a given app and oauth client | No | Microservice.AppD | Service Swagger (Microservice. |
| appointments | CreateAppointment | POST | /v2/activities/appointments | Creates an appointment. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| valuations | CreateAssetValuations | POST | /v2/clients/{clientId}/assets/{assetId}/valua | Creates a valuation on a given client and asset. | Yes | N/A | Public Swagger v2 |
| attitudetorisk | CreateAtrTemplate | POST | /v2/attitudeToRisk/atr_templates | Creates a new ATR template. | Yes | Monolith.Atr | Public Swagger v2 + Documentat |
| data | CreateAuthorDatum | POST | /v2/author/data |  | No | Monolith.AuthorDataProvid | Service Swagger (Monolith.Auth |
| image | CreateAuthorImage | POST | /v2/author/image |  | No | Monolith.AuthorDataProvid | Service Swagger (Monolith.Auth |
| bankaccounts | CreateBankAccount | POST | /v2/clients/{clientId}/recommendations2/{reco | Create a back account for a given proposal and cli | No | Microservice.Recommend | Service Swagger (Microservice. |
| bulk | CreateBulkMessage | POST | /v1/messages/bulk | Creates a bulk message. | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| bulk | CreateBulkMessageAttachment | POST | /v1/messages/bulk/{bulkId}/attachments | Creates a bulk message attachments. | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| bulk | CreateBulkMessageRecipients | POST | /v1/messages/bulk/{bulkId}/recipients | Creates a list of bulk message recipients. | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| bulkvideoshared | CreateBulkVideoShared | POST | /v2/clients/media/videos/bulk/shared | Creates a client video. | No | Microservice.Content | Service Swagger (Microservice. |
| campaigns | CreateCampaign | POST | /v1/campaigns | Creates campaign details | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| opportunities | CreateCampaignChannel | POST | /v2/opportunities/campaignchannels | Creates a new Campaign Channel. | Yes | N/A | Public Swagger v2 |
| execute | CreateCampaignExecute | POST | /v1/campaigns/{campaignId}/execute | Initiate a specified campaign | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| apply | CreateCampaignSegmentsApply | POST | /v1/campaigns/{campaignId}/segments/apply |  | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| recipients | CreateCampaignsRecipient | POST | /v1/campaigns/{campaignId}/recipients |  | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| campaigntemplates | CreateCampaigntemplate | POST | /v1/campaigntemplates | Create a campaign template | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| archive | CreateCampaigntemplateArchive | POST | /v1/campaigntemplates/{templateId}/archive |  | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| opportunities | CreateCampaignType | POST | /v2/opportunities/campaigntypes | Creates a new Campaign Type. | Yes | N/A | Public Swagger v2 |
| cashreceipts | CreateCashReceipts | POST | /v2/cashreceipts | Create an array of cash receipts. | No | Monolith.Commission | Service Swagger (Monolith.Comm |
| categories | CreateCategory | POST | /v1/categories | Create a template category | No | Microservice.Author | Service Swagger (Microservice. |
| changepasswords | CreateChangepassword | POST | /v2/changepassword |  | No | Microservice.Identity | Service Swagger (Microservice. |
| channelsubscriptions | CreateChannelSubscription | POST | /v2/users/{userId}/channels/subscriptions | Creates a channel subscription for a user. | No | Microservice.Notification | Service Swagger (Microservice. |
| checklistitems | CreateCheckListItem | POST | /v2/checklists/items | Creates a CheckList Item. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| clients | CreateClient | POST | /v2/clients | Creates a client. | Yes | N/A | Public Swagger v2 |
| addresses | CreateClientAddress | POST | /v2/clients/{clientId}/addresses | Create an address | Yes | N/A | Public Swagger v2 |
| communication-agreements | CreateClientAgreement | POST | /v2/clients/{clientId}/communication-agreemen | Creates a Client Agreement | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| assets | CreateClientAssets | POST | /v2/clients/{clientId}/assets | Creates the asset for a given client. | Yes | N/A | Public Swagger v2 |
| attitudetorisk | CreateClientAtr | POST | /v2/clients/{clientId}/attitudeToRisk | Submits a client ATR. | Yes | Monolith.Atr | Public Swagger v2 + Documentat |
| attitudetorisk | CreateClientAtrAnswer | POST | /v2/clients/{clientId}/atr | Allows an API consumer to submit an ATR for a give | No | Monolith.Atr | Service Swagger (Monolith.Atr) |
| changes | CreateClientChange | POST | /v1/client/{partyId}/changes | Creates a change log entry for the client. | No | Microservice.ChangeNotifi | Service Swagger (Microservice. |
| contactdetails | CreateClientContactdetails | POST | /v2/clients/{clientId}/contactdetails | Creates a contact detail for a given client. | Yes | N/A | Public Swagger v2 |
| dependants, beta | CreateClientDependant | POST | /v2/clients/{clientId}/dependants | Creates a dependant for a given client. | Yes | N/A | Public Swagger v2 |
| disclosures | CreateClientDisclosure | POST | /v2/clients/{clientId}/disclosures | Creates a disclosure for a given client. | No | Monolith.FactFind | Service Swagger (Monolith.Fact |
| documents | CreateClientDocument | POST | /v2/clients/{clientId}/documents | Creates a document for a given client. | Yes | N/A | Public Swagger v2 |
| dpa | CreateClientDpaPolicyAgreement | POST | /v2/clients/{clientId}/dpa_agreements | Creates a new DPA policy agreement for a client. | Yes | N/A | Public Swagger v2 |
| emails | CreateClientEmail | POST | /v1/clients/{clientId}/emails |  | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| employments | CreateClientEmployment | POST | /v2/clients/{clientId}/employments | Create an employment for a given client. | Yes | N/A | Public Swagger v2 |
| expenditures, beta | CreateClientExpenditure | POST | /v2/clients/{clientId}/expenditures | Creates an expenditure record for a client. | Yes | Monolith.FactFind | Public Swagger v2 + GitHub Mon |
| fees | CreateClientFees | POST | /v2/clients/{clientId}/fees | Create client fee. | Yes | N/A | Public Swagger v2 |
| splits | CreateClientFeeSplit | POST | /v2/clients/{clientId}/fees/{feeId}/splits | Creates a client fee split document. | Yes | N/A | Public Swagger v2 |
| statuses | CreateClientFeeStatus | POST | /v2/clients/{clientId}/fees/{feeId}/statuses | Change client fee status | Yes | N/A | Public Swagger v2 |
| incomes, beta | CreateClientIncome | POST | /v2/clients/{clientId}/incomes | Creates an income record for a client. | Yes | Monolith.FactFind | Public Swagger v2 + GitHub Mon |
| insights | CreateClientInsight | POST | /v2/clients/{clientId}/insights | Create a Client Insight. | No | Microservice.Insight | Service Swagger + Documentatio |
| clientinvestmentpreferenc | CreateClientInvestmentPreferences | POST | /v2/clients/{clientId}/investmentPreferences | Create client investment preference | No | Microservice.Recommend | Service Swagger (Microservice. |
| objectives | CreateClientObjectives | POST | /v2/clients/{clientId}/objectives | Creates a client objective. | No | Microservice.Requirement | Service Swagger (Microservice. |
| opportunities | CreateClientOpportunity | POST | /v2/clients/{clientId}/opportunities | Creates a new Opportunity for the given client. | Yes | N/A | Public Swagger v2 |
| plans | CreateClientOpportunityPlan | POST | /v2/clients/{clientId}/opportunities/{opportu | Updates an opportunity with a plan for a given cli | Yes | N/A | Public Swagger v2 |
| charges | CreateClientPlanCharge | POST | /v2/clients/{clientId}/plans/{planId}/charges | Creates a new charge for a client's plan. | Yes | N/A | Public Swagger v2 |
| fees | CreateClientPlanFee | POST | /v2/clients/{clientId}/plans/{planId}/fees/{f | Links an existing Fee to the given Plan. | Yes | N/A | Public Swagger v2 |
| templates | CreateClientPlanFeeByTemplate | POST | /v2/clients/{clientId}/plans/{planId}/fees/te | Create a client plan fee from a fee model template | Yes | N/A | Public Swagger v2 |
| plans | CreateClientPlans | POST | /v2/clients/{clientId}/plans | Creates a plan for a given client. | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Mon |
| incomes, beta | CreateClientPlanWithdrawalIncome | POST | /v2/clients/{clientId}/plans/{planId}/withdra | Create a withdrawal income for a client. | No | Monolith.FactFind | Service Swagger (Monolith.Fact |
| proofofidentity | CreateClientProofOfIdentity | POST | /v2/clients/{clientId}/proofofidentity | Creates new proof of identity record for a given c | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| quotes, beta | CreateClientQuote | POST | /v2/clients/{clientId}/quotes | Creates a new client quote. | Yes | N/A | Public Swagger v2 |
| quotes, beta | CreateClientQuoteResult | POST | /v2/clients/{clientId}/quotes/{quoteId}/resul | Creates a new client quote result. | Yes | N/A | Public Swagger v2 |
| recommendations | CreateClientRecommendation | POST | /v2/clients/{clientId}/recommendations2 | Creates a client recommendation. | No | Microservice.Recommend | Service Swagger + Documentatio |
| relationships | CreateClientRelationship | POST | /v2/clients/{clientId}/relationships | Creates a relationship for a given client. | Yes | N/A | Public Swagger v2 |
| relationships | CreateClientRelationshipAccess | POST | /v2/clients/{clientId}/relationships/{relatio | Grants access for the Relationship relation to the | Yes | N/A | Public Swagger v2 |
| relationships | CreateClientRelationshipWithRelatio | POST | /v2/clients/{clientId}/relationships/relation | Creates a new relationship and relation for the gi | Yes | N/A | Public Swagger v2 |
| plans | CreateClientServicecasePlan | POST | /v2/clients/{clientId}/servicecases/{serviceC | Creates an association with a service on a plan fo | Yes | N/A | Public Swagger v2 |
| servicecases | CreateClientServicecases | POST | /v2/clients/{clientId}/servicecases | Creates a service case for a given client. | Yes | N/A | Public Swagger v2 |
| clientvideo | CreateClientVideo | POST | /v2/clients/{clientId}/media/videos | Creates a single client video. | No | Microservice.Content | Service Swagger (Microservice. |
| clientvideo | CreateClientVideoInstance | POST | /v2/clients/{clientId}/media/videos/instances | Creates a single client video. | No | Microservice.Content | Service Swagger (Microservice. |
| commons | CreateCommon | POST | /v1/templates/common/{templateIdentifier} | Create instance for specific template | No | Microservice.Workflow | Service Swagger (Microservice. |
| accountrecovery | CreateConfirmation | POST | /forgotpassword/confirmation/{forgotPasswordI |  | No | Microservice.Identity | Service Swagger (Microservice. |
| expenditures, beta | CreateContributionExpenditure | POST | /v2/clients/{clientId}/plans/{planId}/contrib | Creates a client expenditure record linked to a pl | No | Monolith.FactFind | Service Swagger (Monolith.Fact |
| creditnotes | CreateCreditNote | POST | /v2/fees/{feeId}/creditnotes | Create a credit note for a given fee. | Yes | N/A | Public Swagger v2 |
| documents | CreateDocument | POST | /v2/documents | Creates a new document | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| documentbinders | CreateDocumentBinder | POST | /v2/clients/{clientId}/documentbinders | Creates a new document binder | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| documents | CreateDocumentConfiguration | POST | /v2/documents/configurations | Creates a new storage configuration | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| documentfolders | CreateDocumentFolder | POST | /v2/clients/{clientId}/documentfolders | Creates a new document folder. | Yes | N/A | Public Swagger v2 |
| verify | CreateDomainVerify | POST | /v1/domains/verify |  | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| dpa | CreateDPAPolicy | POST | /v2/dpa_policies | Creates a new DPA policy which will become the cur | Yes | N/A | Public Swagger v2 |
| models | CreateDraftPortfolioModel | POST | /v2/models/draft | Creates a draft portfolio model. | Yes | N/A | Public Swagger v2 |
| emails | CreateEmail | POST | /v2/activities/emails | Creates an email. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| preprocess | CreateEsignPreprocess | POST | /v1/esign/preprocess |  | No | Microservice.Author | Service Swagger (Microservice. |
| subscribe | CreateEventSubscribe | POST | /v1/events/subscribe | Add a new subscription for the party based on give | No | Microservice.ChangeNotifi | Service Swagger (Microservice. |
| adjustmentsrules | CreateExpectationAdjustmentRule | POST | /v2/expectations/adjustmentsrules | Creates a new expectation adjustment rule. | No | Microservice.Expectation | Service Swagger (Microservice. |
| expenditures | CreateExpenditureCategoryGroup | POST | /v2/expenditures/refdata/categorygroups | Creates a new Expenditure Category Group. | No | Monolith.FactFind | Service Swagger (Monolith.Fact |
| federation_settings | CreateFederationSettings | PUT | /v2/federation_settings/{domain} | Creates or updates federation settings. | No | Microservice.Identity | Service Swagger (Microservice. |
| programs | CreateFeeModelProgram | POST | /v2/feemodels/programs | Create a fee program model | Yes | N/A | Public Swagger v2 |
| statuses | CreateFeeStatus | POST | /v2/fees/{feeId}/statuses | Change fee status. | Yes | N/A | Public Swagger v2 |
| forecasts | CreateForecast | POST | /v2/forecasts |  | No | Microservice.CashflowEngi | Service Swagger (Microservice. |
| accountrecovery | CreateForgotpassword | POST | /forgotpassword |  | No | Microservice.Identity | Service Swagger (Microservice. |
| funds | CreateFund | POST | /v2/funds | Creates a non-feed fund. | Yes | N/A | Public Swagger v2 |
| fundingsource | CreateFundingSource | POST | /v2/clients/{clientId}/servicecases/{serviceC | Allows an API consumer to create a funding source  | No | Microservice.Recommend | Service Swagger (Microservice. |
| allocations | CreateGoalAllocation | POST | /v2/objectives/{objectiveId}/allocations | Creates Goal Allocation. | No | Microservice.Requirement | Service Swagger (Microservice. |
| goalprojections | CreateGoalprojection | POST | /v2/goalprojections |  | No | Microservice.CashflowEngi | Service Swagger (Microservice. |
| groups | CreateGroup | POST | /v2/groups | Creates a group. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | CreateGroupAddress | POST | /v2/groups/{groupId}/addresses | Creates a new Address for the given Group. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| brands | CreateGroupBrand | POST | /v1/groups/{groupId}/brands | Create brand | No | Microservice.Brand | Service Swagger (Microservice. |
| households | CreateHousehold | POST | /v2/households | Creates a household. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| households | CreateHouseholdGrouping | POST | /v2/households/{householdId}/groupings | Creates a household grouping. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| verify | CreateIdentityVerify | POST | /v1/identities/verify |  | No | Microservice.Email | Service Swagger (Microservice. |
| illustrations | CreateIllustration | POST | /v2/illustrations |  | No | Microservice.ProviderInte | Service Swagger (Microservice. |
| illustrations | CreateIllustration2 | POST | /v2/illustrations2 |  | No | Microservice.ProviderInte | Service Swagger (Microservice. |
| incomestatements, beta | CreateIncomeStatement | POST | /v2/incomestatements | Creates a new income statement. | Yes | N/A | Public Swagger v2 |
| incomestatements, beta | CreateIncomeStatementItems | POST | /v2/incomestatements/{incomeStatementId}/item | Creates income statement items for an income state | Yes | N/A | Public Swagger v2 |
| instances | CreateInstance | POST | /v1/migrate/instances/{instanceId} |  | No | Microservice.Workflow | Service Swagger (Microservice. |
| abort | CreateInstanceAbort | POST | /v1/instances/{instanceId}/abort |  | No | Microservice.Workflow | Service Swagger (Microservice. |
| createinstance | CreateinstanceCommon | POST | /v1/templates/common/{templateIdentifier}/cre | Create instance for specific template | No | Microservice.Workflow | Service Swagger (Microservice. |
| restart | CreateInstanceRestart | POST | /v1/instances/{instanceId}/restart |  | No | Microservice.Workflow | Service Swagger (Microservice. |
| resume | CreateInstanceResume | POST | /v1/instances/{instanceId}/resume |  | No | Microservice.Workflow | Service Swagger (Microservice. |
| unsuspend | CreateInstanceUnsuspend | POST | /v1/instances/{instanceId}/unsuspend |  | No | Microservice.Workflow | Service Swagger (Microservice. |
| addresses | CreateIntroducerAddress | POST | /v2/introducers/{introducerId}/addresses | Creates a new Address for the given Introducer. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| investmentpreferencequest | CreateInvestmentPreferenceQuestion | POST | /v2/investmentpreferences/questions | Create investment preference question. | No | Microservice.Recommend | Service Swagger (Microservice. |
| createinvestor | CreateInvestor | PUT | /v2/provider/{providerId}/investors |  | No | Microservice.ProviderInte | Service Swagger (Microservice. |
| entitlement | CreateIPAddress | POST | /v2/tenants/{tenantId}/IPAddress |  | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| leads | CreateLead | POST | /v2/leads | Create a lead. | Yes | N/A | Public Swagger v2 |
| addresses | CreateLeadAddress | POST | /v2/leads/{leadId}/addresses | Creates a new Address for the given Lead. | Yes | N/A | Public Swagger v2 |
| contactdetails | CreateLeadContactdetails | POST | /v2/leads/{leadId}/contactdetails | Creates contact details for a given lead. | Yes | N/A | Public Swagger v2 |
| objectives | CreateLeadObjective | POST | /v2/leads/{leadId}/objectives | Creates a lead objective. | No | Microservice.Requirement | Service Swagger (Microservice. |
| opportunities | CreateLeadOpportunity | POST | /v2/leads/{leadId}/opportunities | Creates a new Opportunity for the given Lead. | Yes | N/A | Public Swagger v2 |
| quotes | CreateLeadQuote | POST | /v2/leads/{leadId}/quotes | Creates a new lead quote. | No | Microservice.Quotation | Service Swagger (Microservice. |
| quotes | CreateLeadQuoteResult | POST | /v2/leads/{leadId}/quotes/{quoteId}/results | Creates a new lead quote result. | No | Microservice.Quotation | Service Swagger (Microservice. |
| relationships | CreateLeadRelationship | POST | /v2/leads/{leadId}/relationships | Creates a relationship for a given lead. | Yes | N/A | Public Swagger v2 |
| lifeexpectancies | CreateLifeexpectancy | POST | /v2/lifeexpectancy |  | No | Microservice.CashflowEngi | Service Swagger (Microservice. |
| mails | CreateMail | POST | /v1/mail | Send a templated email Attachments are sent as mu | No | Microservice.Email | Service Swagger (Microservice. |
| mandrill | CreateMaileventMandrill | POST | /v1/mailevents/mandrill | Accept callbacks from Mandrill webhook | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| messages | CreateMessage | POST | /v1/messages | Create secure message. | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| actions | CreateMessageAction | POST | /v1/messages/{messageId}/actions | Link action to secure message. | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| recipients | CreateMessageRecipient | POST | /v1/messages/{secureMessageId}/recipients | Creates a recipient for a secure message. | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| reply | CreateMessageReply | POST | /v1/messages/{secureMessageId}/reply | Reply on secure message. | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| revoke | CreateMessageRevoke | POST | /v1/messages/{secureMessageId}/revoke | Revoke a specific message. | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| attachments | CreateMessagesAttachments | POST | /v1/messages/{secureMessageId}/attachments | Upload attachments to a specific secure message. | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| models | CreateModel | POST | /v2/models | Creates a portfolio model. | Yes | N/A | Public Swagger v2 |
| oauthclients | CreateOauthClient | POST | /v2/oauth_clients |  | No | Microservice.Identity | Service Swagger (Microservice. |
| objectivecategories | CreateObjectiveCategory | POST | /v2/objective/categories | Create a objective category. | No | Microservice.Requirement | Service Swagger (Microservice. |
| opportunities | CreateOpportunityCampaign | POST | /v2/opportunities/campaigns | Creates a new Opportunity campaign for a tenant. | Yes | N/A | Public Swagger v2 |
| opportunities | CreateOpportunityProposition | POST | /v2/opportunities/propositions | Creates a new Opportunity proposition for a tenant | Yes | N/A | Public Swagger v2 |
| opportunities | CreateOpportunityStatus | POST | /v2/opportunities/statuses | Creates a new Opportunity Status. | Yes | N/A | Public Swagger v2 |
| opportunities | CreateOpportunityType | POST | /v2/opportunities/types | Creates a new Opportunity Type for a tenant. | Yes | N/A | Public Swagger v2 |
| settings | CreateOrUpdateSettingForClient | PUT | /v2/settings/{key}/clients/{clientId} | Creates or updates a particular setting for the sp | No | Microservice.Config | Service Swagger (Microservice. |
| settings | CreateOrUpdateSettingForGroup | PUT | /v2/settings/{key}/groups/{groupId} | Creates or updates a particular setting for the sp | No | Microservice.Config | Service Swagger (Microservice. |
| settings | CreateOrUpdateSettingForTenant | PUT | /v2/settings/{key}/tenants/{tenantId} | Creates or updates a particular setting for the sp | No | Microservice.Config | Service Swagger (Microservice. |
| personalcontacts | CreatePersonalContact | POST | /v2/clients/{clientId}/personalContacts | Add a new personal contact for a given client | Yes | N/A | Public Swagger v2 |
| addresses | CreatePersonalContactAddress | POST | /v2/clients/{clientId}/personalcontacts/{pers | Add a new address for a given personal contact. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| contactdetails | CreatePersonalContactDetail | POST | /v2/clients/{clientId}/personalcontacts/{pers | Add a new contact detail for a given personal cont | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| relationships | CreatePersonalContactRelationship | POST | /v2/clients/{clientId}/personalcontacts/{pers | Add a new relationship for a given personal contac | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| planapplications | CreatePlanApplication | POST | /v2/plans/{planId}/applications | Creates a new Plan Application. | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| planapplicationdocumentte | CreatePlanApplicationDocTemplate | POST | /v2/applications/doctemplates | Create a new Plan Application Document Template. | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| planapplicationdocument | CreatePlanApplicationDocument | POST | /v2/plans/{planId}/applications/{applicationI | Creates a new Plan Application Document. | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| planapplicationdocumentup | CreatePlanApplicationDocUpload | POST | /v2/applications/docuploads | Create a new Plan Application Document Upload. | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| planapplicationenvelope | CreatePlanApplicationEnvelope | POST | /v2/plans/{planId}/applications/envelopes | Creates plan application envelope. | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| planapplicationmanageddoc | CreatePlanApplicationManagedDocumen | POST | /v2/applications/manageddocuments | Create a new Plan Application Managed Document. | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| planapplicationstatusupda | CreatePlanApplicationStatus | POST | /v2/plans/{planId}/applications/{applicationI | Creates a new Plan Application Status. | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| commissions | CreatePlanCommissions | POST | /v2/clients/{clientId}/plans/{planId}/commiss | Create a commission for a given plan. | Yes | N/A | Public Swagger v2 |
| contacts | CreatePlanContact | POST | /v2/clients/{clientId}/plans/{planId}/contact | Creates a client plan contact | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| contributions | CreatePlanContributions | POST | /v2/clients/{clientId}/plans/{planId}/contrib | Creates a contribution for a given client and plan | Yes | N/A | Public Swagger v2 |
| statuses | CreatePlanFeeStatus | POST | /v2/clients/{clientId}/plans/{planId}/fees/{f | Change plan fee status | Yes | N/A | Public Swagger v2 |
| holdings | CreatePlanHoldings | POST | /v2/clients/{clientId}/plans/{planId}/holding | Creates fund holdings for a given client and plan. | Yes | N/A | Public Swagger v2 |
| splits | CreatePlanSplit | POST | /v2/clients/{clientId}/plans/{planId}/splits | Creates a plan split document. | Yes | N/A | Public Swagger v2 |
| statuses | CreatePlanStatuses | POST | /v2/clients/{clientId}/plans/{planId}/statuse | Creates status history for a given client and plan | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Mon |
| valuations | CreatePlanValuations | POST | /v2/clients/{clientId}/plans/{planId}/valuati | Creates a valuation for a given client and plan. | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Mon |
| withdrawals | CreatePlanWithdrawals | POST | /v2/clients/{clientId}/plans/{planId}/withdra | Creates a withdrawal for a given client and plan. | Yes | N/A | Public Swagger v2 |
| portfolioreport | CreatePortfolioReportRequest | POST | /v2/clients/{clientId}/reports/portfolio |  | No | Monolith.Report | Service Swagger (Monolith.Repo |
| productproviders | CreateProductProvider | POST | /v2/productproviders | Creates a new product provider. | No | Monolith.Crm | Service Swagger + Documentatio |
| addresses | CreateProductProviderAddress | POST | /v2/productproviders/{productProviderId}/addr | Creates a new Address for the given Product provid | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| productproviders | CreateProductproviderLink | POST | /v2/productproviders/{productProviderId}/link | Returns updated ProductProvider resource | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| proposalbeneficiary | CreateProposalBeneficiaries | POST | /v2/clients/{clientId}/recommendations2/{reco | Create a beneficiaries for a given proposal and cl | No | Microservice.Recommend | Service Swagger (Microservice. |
| attitudetorisk | CreateProviderAtrTemplate | POST | /v2/attitudeToRisk/apps/{appId}/atr_templates | Creates a new 3rd party ATR template. | Yes | Monolith.Atr | Public Swagger v2 + Documentat |
| providercodes | CreateProviderCode | POST | /v2/productproviders/{providerId}/codes | Creates an allocated Provider Code issued by a Pro | No | Microservice.ProviderCode | Service Swagger (Microservice. |
| providercodes | CreateProviderCodeConfig | POST | /v2/productproviders/{providerId}/codes/confi | Creates a Provider Code issued by a Provider as a  | No | Microservice.ProviderCode | Service Swagger (Microservice. |
| providercodesconfigattrib | CreateProviderCodeConfigAttribute | POST | /v2/productproviders/codes/config/attributes | Creates a Provider Code config attribute for a ten | No | Microservice.ProviderCode | Service Swagger (Microservice. |
| models, modelprovider, be | CreateProviderModel | POST | /v2/apps/{appId}/models | Creates a new provider model. | Yes | N/A | Public Swagger v2 |
| customquestions | CreateQuestion | POST | /v2/questions | Creates a new question. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| dashboardfavourite | CreateQuicksightDashboardFavourite | POST | /v2/users/{userId}/favourites/dashboards/{das | Adds a dashboard to the user favourites dashboards | No | Microservice.Quicksight | Service Swagger (Microservice. |
| configuration | CreateQuicksightFolderConfiguration | POST | /v2/quicksight/configurations/folders | Creates a quicksight folder configuration. | No | Microservice.Quicksight | Service Swagger (Microservice. |
| reportgroup | CreateQuicksightGroup | POST | /v2/quicksight/reportgroups | Creates a quicksight group. | No | Microservice.Quicksight | Service Swagger (Microservice. |
| configuration | CreateQuicksightGroupConfiguration | POST | /v2/quicksight/configurations/groups | Creates a quicksight group configuration. | No | Microservice.Quicksight | Service Swagger (Microservice. |
| rebalance | CreateRebalance | POST | /v2/rebalances | Post a new rebalance request. | No | Microservice.Recommend | Service Swagger (Microservice. |
| recommendations | CreateRecommendationProposal | POST | /v2/clients/{clientId}/recommendations2/{reco | Creates a recommendation proposal. | No | Microservice.Recommend | Service Swagger + Documentatio |
| reportartifact | CreateReportArtifact | POST | /v2/report/artifacts |  | No | Monolith.Report | Service Swagger (Monolith.Repo |
| reportbranding | CreateReportBranding | POST | /v2/report/branding |  | No | Monolith.Report | Service Swagger (Monolith.Repo |
| reviews | CreateReview | POST | /v1/reviews |  | No | Microservice.Author | Service Swagger (Microservice. |
| complete | CreateReviewComplete | POST | /v1/reviews/{reviewId}/complete | Complete the specified review | No | Microservice.Author | Service Swagger (Microservice. |
| upload | CreateReviewUpload | POST | /v1/reviews/{reviewId}/upload | Upload a modified review document | No | Microservice.Author | Service Swagger (Microservice. |
| riskprofiles | CreateRiskProfile | POST | /v2/riskprofiles | Creates a new Risk Profile. | No | Monolith.Atr | Service Swagger (Monolith.Atr) |
| entitlement | CreateRole | POST | /v2/roles | Creates a role. | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| entitlement | CreateRoleOperation | POST | /v2/roles/{roleId}/operations/{operationId} | Creates a role operation. | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| saves | CreateSave | POST | /v1/plugin/save/{templateVersionId} |  | No | Microservice.Author | Service Swagger (Microservice. |
| serviceactivities | CreateServiceActivity | POST | /v2/clients/{clientId}/service-activities | Creates a service activity for a specific client. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| splits | CreateSplit | POST | /v2/splits | Creates a split document. | Yes | N/A | Public Swagger v2 |
| subscriptions | CreateSubscription | POST | /v1/subscriptions |  | No | Monolith.WebHooks | Service Swagger (Monolith.WebH |
| tasks | CreateTask | POST | /v2/activities/tasks | Creates a task. | No | Monolith.Crm | Service Swagger + Documentatio |
| taskchecklistitems | CreateTaskCheckListItems | POST | /v2/activities/tasks/{taskId}/checklists/item | Create Check list Items and their status for a tas | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tasknotes | CreateTaskNote | POST | /v2/activities/tasks/{taskId}/notes | Creates a task note. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| templates | CreateTemplate | POST | /v1/templates | Create template | No | Microservice.Author | Service Swagger (Microservice. |
| templates | CreateTemplate1 | POST | /v1/migrate/templates/{templateId} |  | No | Microservice.Workflow | Service Swagger (Microservice. |
| templatecategories | CreateTemplatecategory | POST | /v1/templatecategories |  | No | Microservice.Workflow | Service Swagger (Microservice. |
| clone | CreateTemplateClone | POST | /v1/templates/{templateId}/clone | Clone a specified template | No | Microservice.Author | Service Swagger (Microservice. |
| ondemand | CreateTemplateCreateinstanceOndeman | POST | /v1/templates/{templateId}/createinstance/ond | Create instance for specific template | No | Microservice.Workflow | Service Swagger (Microservice. |
| generate | CreateTemplateGenerate | POST | /v1/templates/{templateId}/generate | Generate a document for a specified template using | No | Microservice.Author | Service Swagger (Microservice. |
| publish | CreateTemplatePublish | POST | /v1/templates/{templateId}/publish | Publish template | No | Microservice.Author | Service Swagger (Microservice. |
| restore | CreateTemplateRestore | POST | /v1/templates/{templateId}/restore |  | No | Microservice.Author | Service Swagger (Microservice. |
| movedown | CreateTemplateStepMoveDown | POST | /v1/templates/{templateId}/steps/{stepId}/mov |  | No | Microservice.Workflow | Service Swagger (Microservice. |
| moveup | CreateTemplateStepMoveUp | POST | /v1/templates/{templateId}/steps/{stepId}/mov |  | No | Microservice.Workflow | Service Swagger (Microservice. |
| steps | CreateTemplateSteps | POST | /v1/templates/{templateId}/steps | Create template step | No | Microservice.Workflow | Service Swagger (Microservice. |
| triggers | CreateTemplatesTriggers | POST | /v1/templates/{templateId}/triggers |  | No | Microservice.Workflow | Service Swagger (Microservice. |
| upload | CreateTemplateUpload | POST | /v1/templates/upload | Upload a template exported from another environmen | No | Microservice.Author | Service Swagger (Microservice. |
| versions | CreateTemplateVersion | POST | /v1/templates/{templateId}/versions/{versionI | Upload a modified template version | No | Microservice.Author | Service Swagger (Microservice. |
| data | CreateTemplateVersionDatum | POST | /v1/templates/{templateId}/versions/{versionI |  | No | Microservice.Author | Service Swagger (Microservice. |
| demote | CreateTemplateVersionDemote | POST | /v1/templates/{templateId}/versions/{versionI | Demote template version | No | Microservice.Author | Service Swagger (Microservice. |
| generate | CreateTemplateVersionGenerate | POST | /v1/templates/{templateId}/versions/{versionI | Generate a document for a specified template versi | No | Microservice.Author | Service Swagger (Microservice. |
| promote | CreateTemplateVersionPromote | POST | /v1/templates/{templateId}/versions/{versionI | Promote template version | No | Microservice.Author | Service Swagger (Microservice. |
| withdraw | CreateTemplateWithdraw | POST | /v1/templates/{templateId}/withdraw | Withdraw a published template | No | Microservice.Author | Service Swagger (Microservice. |
| tenants | CreateTenant | POST | /v2/tenants | Creates a new tenant. Only available under system  | No | Monolith.Crm | Service Swagger + Documentatio |
| disclosures | CreateTenantDocumentType | POST | /v2/disclosures/documentTypes | Add a new Document Type for a tenant | No | Monolith.FactFind | Service Swagger (Monolith.Fact |
| recommendations | CreateTenantRecommendationCategory | POST | /v2/recommendations2/categories | Create a recommendation category document. | No | Microservice.Recommend | Service Swagger + Documentatio |
| recommendations | CreateTenantRecommendationSubCatego | POST | /v2/recommendations2/subcategories | Creates a recommendation subcategory. | No | Microservice.Recommend | Service Swagger + Documentatio |
| addresses | CreateTnccoachAddress | POST | /v2/tnc_coaches/{tnc_coachId}/addresses | Creates a new Address for the given TnC Coach. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| plans | CreateTopupPlan | POST | /v2/clients/{clientId}/plans/{planId} | Creates a plan for a given client. | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Mon |
| unmatchedplans | CreateUnmatchedExistingPlan | POST | /v2/plans/unmatched/{planId} | Create an unmatched plan, linking it to an existin | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| unmatchedplans | CreateUnmatchedPlan | POST | /v2/plans/unmatched | Create an unmatched plan. | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| users | CreateUser | POST | /v2/users | Deprecated:    Create a user | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| alerts | CreateUserAlertSubscription | POST | /v2/users/{userId}/alertsubscriptions | Creates a new alert subscription for a user. | No | Microservice.Notification | Service Swagger (Microservice. |
| entitlement | CreateUserDetail | POST | /v2/users | Creates a user. | No | Monolith.Entitlement | Service Swagger + Documentatio |
| emails | CreateUserEmail | POST | /v2/users/{userId}/emails | Creates an email for given user You can add a x-e | No | Microservice.Membership | Service Swagger (Microservice. |
| emails | CreateUserEmailMakeprimary | POST | /v2/users/{userId}/emails/{emailId}/makeprima | Sends a message to make the given email as primary | No | Microservice.Membership | Service Swagger (Microservice. |
| emails | CreateUserEmailVerify | POST | /v2/users/{userId}/emails/{emailId}/verify | Sends email verification for a given user (current | No | Microservice.Membership | Service Swagger (Microservice. |
| entitlement | CreateUserGroup | POST | /v2/users/{userId}/groups | Associate a user to a group. | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| entitlement | CreateUserRole | POST | /v2/users/{userId}/roles/{roleId} | Associates a user to a role. | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| webhooks | CreateWebhook | POST | /hub/webhooks | Creates or updates an existing webhook subscriptio | Yes | N/A | Public Swagger v2 |
| defaultsender | DefaultsenderEmail | GET | /v1/emails/defaultsender |  | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| 2fa | DeleteAccount2fa | DELETE | /v2/accounts/{subject}/2fa | Sets up Is2faEnabled to false, delete shared secre | No | Microservice.Membership | Service Swagger (Microservice. |
| addresses | DeleteAccountAddress | DELETE | /v2/accounts/{accountId}/addresses/{addressId | Deletes an existing Address for the given Account. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| accounts | DeleteAccountDocument | DELETE | /v2/accounts/{accountId}/documents/{documentI | Deletes a file object associated with the specifie | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| phones | DeleteAccountPhone | DELETE | /v2/accounts/{subject}/phones/{phoneId} | Deletes a phone for a given account. | No | Microservice.Membership | Service Swagger (Microservice. |
| relationships | DeleteAccountRelationship | DELETE | /v2/accounts/{accountId}/relationships/{relat | Deletes an existing Relationship for the given Acc | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activitycategories | DeleteActivityCategory | DELETE | /v2/activities/categories/{categoryId} | Deletes a given activity category. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activityoutcomes | DeleteActivityOutcome | DELETE | /v2/activities/outcomes/{outcomeId} | Deletes a given activity outcome. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| advicetemplates | DeleteAdviceTemplate | DELETE | /v2/advice/templates/{templateId} | Delete advice template. | No | Microservice.Recommend | Service Swagger (Microservice. |
| advicetemplates | DeleteAdviceTemplateStep | DELETE | /v2/advice/templates/{templateId}/steps/{step | Delete advice template step. | No | Microservice.Recommend | Service Swagger (Microservice. |
| advicetemplates | DeleteAdviceTemplateStepTransition | DELETE | /v2/advice/templates/{templateId}/steptransit | Delete Advice template step transition. | No | Microservice.Recommend | Service Swagger (Microservice. |
| addresses | DeleteAdviserAddress | DELETE | /v2/advisers/{adviserId}/addresses/{addressId | Deletes an existing Address for the given Adviser. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| contactdetails | DeleteAdviserContactdetail | DELETE | /v2/advisers/{adviserId}/contactdetails/{cont | Deletes an existing ContactDetail for the given Ad | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| documents | DeleteAdviserDocument | DELETE | /v2/advisers/{adviserId}/documents/{documentI | Deletes a file object associated with the specifie | No | Monolith.Storage | Service Swagger + Documentatio |
| alternativeassets | DeleteAlternativeAsset | DELETE | /v2/alternativeassets/{securityId} | Delete an Alternative Asset Security by Security I | No | Microservice.Security | Service Swagger (Microservice. |
| apps, beta | DeleteApp | DELETE | /v2/apps/{appId} | Deletes a given app | No | Microservice.AppD | Service Swagger (Microservice. |
| apps, beta | DeleteAppCollaborator | DELETE | /v2/apps/{appId}/collaborators | Deletes a collaborator for a given app | No | Microservice.AppD | Service Swagger (Microservice. |
| apps, beta | DeleteAppContent | DELETE | /v2/apps/{appId}/content/{key} | Delete content(video, image or icon) for a given a | No | Microservice.AppD | Service Swagger (Microservice. |
| apps, beta | DeleteAppOauthClient | DELETE | /v2/apps/{appId}/oauth_clients/{clientId} | Deletes an oauth client for a given app | No | Microservice.AppD | Service Swagger (Microservice. |
| appointments | DeleteAppointment | DELETE | /v2/activities/appointments/{appointmentId} | Deletes a given appointment. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| reportartifact | DeleteArtifact | DELETE | /v2/report/artifacts/{id} | Deletes a artifact by ID. | No | Monolith.Report | Service Swagger (Monolith.Repo |
| attitudetorisk | DeleteAtrTemplateV2 | DELETE | /v2/attitudeToRisk/atr_templates/{templateId} | Deletes an ATR template. | No | Monolith.Atr | Service Swagger + Documentatio |
| avatars | DeleteAvatar | DELETE | /v2/avatars | Deletes Avatar object for client | No | Microservice.Avatar | Service Swagger (Microservice. |
| bankaccounts | DeleteBankAccount | DELETE | /v2/clients/{clientId}/recommendations2/{reco | Deletes a bank account against a proposal. | No | Microservice.Recommend | Service Swagger (Microservice. |
| bulk | DeleteBulkMessageAttachment | DELETE | /v1/messages/bulk/{bulkId}/attachments/{attac | Deletes the bulk message attachment. | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| bulk | DeleteBulkMessageRecipients | DELETE | /v1/messages/bulk/{bulkId}/recipients | Deletes a list of bulk message recipients. | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| campaigns | DeleteCampaign | DELETE | /v1/campaigns/{campaignId} | Deletes the specified campaign | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| opportunities | DeleteCampaignChannel | DELETE | /v2/opportunities/campaignchannels/{campaignC | Deletes Campaign Channel for a given tenant | Yes | N/A | Public Swagger v2 |
| recipients | DeleteCampaignRecipient | DELETE | /v1/campaigns/{campaignId}/recipients/{recipi | Deletes the specified campaign recipient | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| campaigntemplates | DeleteCampaigntemplate | DELETE | /v1/campaigntemplates/{templateId} | Deletes a campaign template | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| opportunities | DeleteCampaignType | DELETE | /v2/opportunities/campaigntypes/{campaignType | Deletes Campaign Type for a given tenant | Yes | N/A | Public Swagger v2 |
| categories | DeleteCategory | DELETE | /v1/categories/{categoryId} | Delete a template category | No | Microservice.Author | Service Swagger (Microservice. |
| channelsubscriptions | DeleteChannelSubscription | DELETE | /v2/users/{userId}/channels/subscriptions/{su | Deletes a channel subscription for a user. | No | Microservice.Notification | Service Swagger (Microservice. |
| checklistitems | DeleteCheckListItem | DELETE | /v2/checklists/items/{itemId} | Delete a Check list Item. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| clients | DeleteClient | DELETE | /v2/clients/{clientId} | Deletes a given client. | Yes | N/A | Public Swagger v2 |
| addresses | DeleteClientAddress | DELETE | /v2/clients/{clientId}/addresses/{addressId} | Deletes an existing Address for the given Client. | Yes | N/A | Public Swagger v2 |
| assets | DeleteClientAsset | DELETE | /v2/clients/{clientId}/assets/{assetId} | Deletes the asset for a given client and asset. | Yes | N/A | Public Swagger v2 |
| valuations | DeleteClientAssetValuation | DELETE | /v2/clients/{clientId}/assets/{assetId}/valua | Deletes an association on a valuation for a given  | Yes | N/A | Public Swagger v2 |
| attitudetorisk | DeleteClientAtr | DELETE | /v2/clients/{clientId}/attitudeToRisk/{atrId} | Deletes a client's ATR. | Yes | Monolith.Atr | Public Swagger v2 + Documentat |
| beneficiaries | DeleteClientBeneficiaries | DELETE | /v2/clients/{clientId}/beneficiaries | Deletes beneficiary or beneficiaries for a given c | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| contactdetails | DeleteClientContactdetail | DELETE | /v2/clients/{clientId}/contactdetails/{contac | Deletes a contact detail for a given client and co | Yes | N/A | Public Swagger v2 |
| dependants, beta | DeleteClientDependant | DELETE | /v2/clients/{clientId}/dependants/{dependantI | Deletes a dependant for a given client. | Yes | N/A | Public Swagger v2 |
| disclosures | DeleteClientDisclosure | DELETE | /v2/clients/{clientId}/disclosures/{disclosur | Deletes a disclosure for a given client. | No | Monolith.FactFind | Service Swagger (Monolith.Fact |
| documents | DeleteClientDocument | DELETE | /v2/clients/{clientId}/documents/{documentId} | Deletes document's metadata for specified client | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| employments | DeleteClientEmployment | DELETE | /v2/clients/{clientId}/employments/{employmen | Deletes a given employment. | Yes | N/A | Public Swagger v2 |
| expenditures, beta | DeleteClientExpenditure | DELETE | /v2/clients/{clientId}/expenditures/{expendit | Deletes a client's expenditure record. | Yes | Monolith.FactFind | Public Swagger v2 + GitHub Mon |
| fees | DeleteClientFee | DELETE | /v2/clients/{clientId}/fees/{feeId} | Deletes the fee. | Yes | N/A | Public Swagger v2 |
| splits | DeleteClientFeeSplit | DELETE | /v2/clients/{clientId}/fees/{feeId}/splits/{s | Deletes a client fee split document. | Yes | N/A | Public Swagger v2 |
| incomes, beta | DeleteClientIncome | DELETE | /v2/clients/{clientId}/incomes/{incomeId} | Deletes a client's income record. | Yes | Monolith.FactFind | Public Swagger v2 + GitHub Mon |
| objectives | DeleteClientObjective | DELETE | /v2/clients/{clientId}/objectives/{objectiveI | Delete a client objective. | No | Microservice.Requirement | Service Swagger (Microservice. |
| plans | DeleteClientOpportunityPlan | DELETE | /v2/clients/{clientId}/opportunities/{opportu | Deletes an opportunity from a plan for a given cli | Yes | N/A | Public Swagger v2 |
| plans | DeleteClientPlan | DELETE | /v2/clients/{clientId}/plans/{planId} | Deletes the client plan by the given client id and | Yes | N/A | Public Swagger v2 |
| beneficiaries | DeleteClientPlanBeneficiaries | DELETE | /v2/clients/{clientId}/plans/{planId}/benefic | Deletes beneficiary or beneficiaries for a given p | Yes | N/A | Public Swagger v2 |
| charges | DeleteClientPlanCharge | DELETE | /v2/clients/{clientId}/plans/{planId}/charges | Deletes an existing charge for a client's plan. | Yes | N/A | Public Swagger v2 |
| contributions | DeleteClientPlanContribution | DELETE | /v2/clients/{clientId}/plans/{planId}/contrib | Deletes a contribution for a given plan. | Yes | N/A | Public Swagger v2 |
| fees | DeleteClientPlanFee | DELETE | /v2/clients/{clientId}/plans/{planId}/fees/{f | Removes the link between the Fee and the plan, doe | Yes | N/A | Public Swagger v2 |
| fundproposal | DeleteClientPlanFundproposal | DELETE | /v2/clients/{clientId}/plans/{planId}/fundpro | Deletes fund proposals from holdings for a given c | Yes | N/A | Public Swagger v2 |
| splits | DeleteClientPlanSplit | DELETE | /v2/clients/{clientId}/plans/{planId}/splits/ | Removes the association between a plan and service | No | Monolith.Commission | Service Swagger (Monolith.Comm |
| valuations | DeleteClientPlanValuation | DELETE | /v2/clients/{clientId}/plans/{planId}/valuati | Deletes a valuation for a given client and plan. | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| withdrawals | DeleteClientPlanWithdrawal | DELETE | /v2/clients/{clientId}/plans/{planId}/withdra | Deletes a withdrawal for a given client, plan and  | Yes | N/A | Public Swagger v2 |
| proofofidentity | DeleteClientProofOfIdentity | DELETE | /v2/clients/{clientId}/proofofidentity/{id} | Deletes an existing proof of identity record for a | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| recommendations | DeleteClientRecommendation | DELETE | /v2/clients/{clientId}/recommendations2/{reco | Deletes a recommendation. | No | Microservice.Recommend | Service Swagger + Documentatio |
| relationships | DeleteClientRelationship | DELETE | /v2/clients/{clientId}/relationships/{relatio | Deletes a relationship for a given client and rela | Yes | N/A | Public Swagger v2 |
| relationships | DeleteClientRelationshipAccess | DELETE | /v2/clients/{clientId}/relationships/{relatio | Revokes access from the Relationship relation to t | Yes | N/A | Public Swagger v2 |
| servicecases | DeleteClientServicecase | DELETE | /v2/clients/{clientId}/servicecases/{serviceC | Deletes a service case. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| plans | DeleteClientServicecasePlan | DELETE | /v2/clients/{clientId}/servicecases/{serviceC | Deletes an association on a service with a plan fo | Yes | N/A | Public Swagger v2 |
| commons | DeleteCommon | DELETE | /v1/templates/common/{templateIdentifier} | Create instance for specific template | No | Microservice.Workflow | Service Swagger (Microservice. |
| creditnotes | DeleteCreditNote | DELETE | /v2/fees/{feeId}/creditnotes/{creditNoteId} | Delete a credit note for a given fee. | Yes | N/A | Public Swagger v2 |
| currencies | DeleteCurrency | DELETE | /v2/currencies/{securityId} | Delete a Currency Security based on Security Id. | No | Microservice.Security | Service Swagger (Microservice. |
| dpa | DeleteCurrentDPAPolicy | DELETE | /v2/dpa_policies/current | Deletes the current default DPA policy (see notes  | No | Microservice.DPA | Service Swagger (Microservice. |
| documents | DeleteDocument | DELETE | /v2/documents/{documentId} | Deletes document's metadata for specified document | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| dpa | DeleteDPAPolicy | DELETE | /v2/dpa_policies/{policyId} | Deletes an existing DPA policy. Only policies that | Yes | N/A | Public Swagger v2 |
| models | DeleteDraftPortfolioModel | DELETE | /v2/models/draft/{modelId} | Deletes a tenant draft portfolio model. | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| emails | DeleteEmail | DELETE | /v2/activities/emails/{emailId} | Deletes a given email. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| docusignenvelopes | DeleteEnvelope | DELETE | /v2/clients/docusign_envelopes/{envelopeId} | Delete eSignature Envelope | No | Microservice.DocuSign | Service Swagger (Microservice. |
| etfs | DeleteEtf | DELETE | /v2/etfs/{securityId} | Delete an ETF Security based on Security Id. | No | Microservice.Security | Service Swagger (Microservice. |
| adjustmentsrules | DeleteExpectationAdjustmentRule | DELETE | /v2/expectations/adjustmentsrules/{adjustment | Deletes an expectation adjustment rule. | No | Microservice.Expectation | Service Swagger (Microservice. |
| expenditures | DeleteExpenditureCategoryGroup | DELETE | /v2/expenditures/refdata/categorygroups/{cate | Deletes Expenditure Category Group. | No | Monolith.FactFind | Service Swagger (Monolith.Fact |
| federation_settings | DeleteFederationSettings | DELETE | /v2/federation_settings/{domain} | Delete federation settings for domain | No | Microservice.Identity | Service Swagger (Microservice. |
| programs | DeleteFeeModelProgram | DELETE | /v2/feemodels/{feeModelId}/programs/{programI | Delete fee model for a given program | Yes | N/A | Public Swagger v2 |
| fixedincomes | DeleteFixedIncome | DELETE | /v2/fixedincomes/{securityId} | Delete a Fixed Income Security based on Security I | No | Microservice.Security | Service Swagger (Microservice. |
| funds | DeleteFund | DELETE | /v2/funds/{securityId} | Delete a Fund Security based on Security Id. | No | Microservice.Security | Service Swagger (Microservice. |
| fundingsource | DeleteFundingSource | DELETE | /v2/clients/{clientId}/servicecases/{serviceC | Allows an API consumer to delete a funding source  | No | Microservice.Recommend | Service Swagger (Microservice. |
| addresses | DeleteGroupAddress | DELETE | /v2/groups/{groupId}/addresses/{addressId} | Deletes an existing Address for the given Group. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| brands | DeleteGroupBrand | DELETE | /v1/groups/{groupId}/brands/{brandId} | Delete brand | No | Microservice.Brand | Service Swagger (Microservice. |
| households | DeleteHousehold | DELETE | /v2/households/{householdId} | Deletes a household. Any clients associated with t | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| households | DeleteHouseholdGrouping | DELETE | /v2/households/{householdId}/groupings/{house | Deletes a household grouping. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| incomestatements, beta | DeleteIncomeStatement | DELETE | /v2/incomestatements/{incomeStatementId} | Deletes an existing income statement. | Yes | N/A | Public Swagger v2 |
| addresses | DeleteIntroducerAddress | DELETE | /v2/introducers/{introducerId}/addresses/{add | Deletes an existing Address for the given Introduc | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| entitlement | DeleteIPAddress | DELETE | /v2/tenants/{tenantId}/IPAddress/{ipAddressId | Deletes a IP Address. | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| issuers | DeleteIssuer | DELETE | /v2/issuers/{issuerId} | Delete an Issuer based on Issuer Id. | No | Microservice.Security | Service Swagger (Microservice. |
| leads | DeleteLead | DELETE | /v2/leads/{leadId} | Deletes a given lead. | Yes | N/A | Public Swagger v2 |
| addresses | DeleteLeadAddress | DELETE | /v2/leads/{leadId}/addresses/{addressId} | Deletes an existing Address for the given Lead. | Yes | N/A | Public Swagger v2 |
| contactdetails | DeleteLeadContactdetail | DELETE | /v2/leads/{leadId}/contactdetails/{contactDet | Deletes contact details for a given lead. | Yes | N/A | Public Swagger v2 |
| leads | DeleteLeadDocument | DELETE | /v2/leads/{leadId}/documents/{documentId} | Deletes document's metadata for specified lead | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| objectives | DeleteLeadObjective | DELETE | /v2/leads/{leadId}/objectives/{objectiveId} | Delete a lead objective. | No | Microservice.Requirement | Service Swagger (Microservice. |
| relationships | DeleteLeadRelationship | DELETE | /v2/leads/{leadId}/relationships/{relationshi | Deletes a relationship for a given lead and relati | Yes | N/A | Public Swagger v2 |
| marketclosings | DeleteMarketClosings | DELETE | /v2/marketclosings/{closingOn} | Delete a Market Closing based on Closing On date. | No | Microservice.Security | Service Swagger (Microservice. |
| messages | DeleteMessage | DELETE | /v1/messages/{secureMessageId} | Deletes an existing draft secure message. | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| attachments | DeleteMessageAttachment | DELETE | /v1/messages/{secureMessageId}/attachments/{a | Delete an attachment for a specific secure message | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| recipients | DeleteMessageRecipient | DELETE | /v1/messages/{secureMessageId}/recipients/{re | Deletes a recipient for message. | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| oauthclients | DeleteOauthClient | DELETE | /v2/oauth_clients/{clientId} |  | No | Microservice.Identity | Service Swagger (Microservice. |
| objectivecategories | DeleteObjectiveCategory | DELETE | /v2/objective/categories/{categoryId} | Delete a objective category. | No | Microservice.Requirement | Service Swagger (Microservice. |
| opportunities | DeleteOpportunityCampaign | DELETE | /v2/opportunities/campaigns/{opportunityCampa | Deletes an Opportunity campaign. Only Opportunity  | Yes | N/A | Public Swagger v2 |
| opportunities | DeleteOpportunityProposition | DELETE | /v2/opportunities/propositions/{propositionId | Deletes an existing Opportunity proposition for a  | Yes | N/A | Public Swagger v2 |
| opportunities | DeleteOpportunityStatus | DELETE | /v2/opportunities/statuses/{opportunityStatus | Deletes an opportunity status for a given tenant | Yes | N/A | Public Swagger v2 |
| opportunities | DeleteOpportunityType | DELETE | /v2/opportunities/types/{opportunityTypeId} | Deletes an Opportunity type. Only opportunity type | Yes | N/A | Public Swagger v2 |
| outputs | DeleteOutput | DELETE | /v1/output/{outputId} |  | No | Microservice.Author | Service Swagger (Microservice. |
| personalcontacts | DeletePersonalContact | DELETE | /v2/clients/{clientId}/personalContacts/{pers | Delete an existing personal contact | Yes | N/A | Public Swagger v2 |
| addresses | DeletePersonalContactAddress | DELETE | /v2/clients/{clientId}/personalcontacts/{pers | Delete an existing address. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| contactdetails | DeletePersonalContactDetail | DELETE | /v2/clients/{clientId}/personalcontacts/{pers | Delete an existing contact detail for a given pers | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| relationships | DeletePersonalContactRelationship | DELETE | /v2/clients/{clientId}/personalcontacts/{pers | Delete an existing relationship | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| planapplications | DeletePlanApplication | DELETE | /v2/plans/{planId}/applications/{applicationI | Deletes a Plan Application. | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| planapplicationdocumentte | DeletePlanApplicationDocTemplate | DELETE | /v2/applications/doctemplates/{planApplicatio | Delete Plan Application Document Template. | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| planapplicationdocument | DeletePlanApplicationDocument | DELETE | /v2/plans/{planId}/applications/{applicationI | Deletes a Plan Application Document. | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| planapplicationdocumentup | DeletePlanApplicationDocUpload | DELETE | /v2/applications/docuploads/{planApplicationD | Delete Plan Application Document Upload. | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| planapplicationenvelope | DeletePlanApplicationEnvelope | DELETE | /v2/plans/{planId}/applications/envelopes/{en | Delete plan application envelop. | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| planapplicationmanageddoc | DeletePlanApplicationManagedDocumen | DELETE | /v2/applications/manageddocuments/{planApplic | Delete Plan Application Managed Document. | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| commissions | DeletePlanCommissions | DELETE | /v2/clients/{clientId}/plans/{planId}/commiss | Delete a commission for a given plan. | Yes | N/A | Public Swagger v2 |
| contacts | DeletePlanContact | DELETE | /v2/clients/{clientId}/plans/{planId}/contact | Deletes the client plan contact by the given conta | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| splits | DeletePlanSplit | DELETE | /v2/clients/{clientId}/plans/{planId}/splits/ | Deletes a plan split document. | Yes | N/A | Public Swagger v2 |
| addresses | DeleteProductproviderAddress | DELETE | /v2/productproviders/{productProviderId}/addr | Deletes an existing Address for the given Product  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| productproviders | DeleteProductproviderLink | DELETE | /v2/productproviders/{productProviderId}/link | Delete the linked ProductProvider | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| proposalbeneficiary | DeleteProposalBeneficiary | DELETE | /v2/clients/{clientId}/recommendations2/{reco | Delete a beneficiary for a given proposal and clie | No | Microservice.Recommend | Service Swagger (Microservice. |
| providercodes | DeleteProviderCode | DELETE | /v2/productproviders/{providerId}/codes/{prov | Deletes an allocated Provider Code issued by a Pro | No | Microservice.ProviderCode | Service Swagger (Microservice. |
| providercodes | DeleteProviderCodeConfig | DELETE | /v2/productproviders/{providerId}/codes/confi | Deletes a Provider Code issued by a Provider as a  | No | Microservice.ProviderCode | Service Swagger (Microservice. |
| providercodesconfigattrib | DeleteProviderCodeConfigAttribute | DELETE | /v2/productproviders/codes/config/attributes/ | Deletes a Provider Code config attribute for a ten | No | Microservice.ProviderCode | Service Swagger (Microservice. |
| provider configuration | DeleteProviderEndpoints | DELETE | /v2/providers/{providerId}/endpoints/{endpoin | removes endpoint of type for a provider | No | Microservice.ProviderInte | Service Swagger (Microservice. |
| models | DeleteProviderModel | DELETE | /v2/apps/{appId}/models/{modelId} | Returns a provider model. | No | Microservice.iMps | Service Swagger (Microservice. |
| provider tenant configura | DeleteProviderTenant | DELETE | /v2/providers/{providerId}/providerTenants |  | No | Microservice.ProviderInte | Service Swagger (Microservice. |
| apps, beta | DeletePublishedApp | DELETE | /v2/published_apps/{appId} | Deletes a given published app | No | Microservice.AppD | Service Swagger (Microservice. |
| customquestions | DeleteQuestion | DELETE | /v2/questions/{questionId} | Deletes a question. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| configuration | DeleteQuicksightConfiguration | DELETE | /v2/quicksight/configurations | Delete quicksight configuration. | No | Microservice.Quicksight | Service Swagger (Microservice. |
| dashboardfavourite | DeleteQuicksightDashboardFavourite | DELETE | /v2/users/{userId}/favourites/dashboards/{das | Removes a dashboard from the user favourites dashb | No | Microservice.Quicksight | Service Swagger (Microservice. |
| dashboardpermission | DeleteQuicksightDashboardPermission | DELETE | /v2/quicksight/dashboards/{dashboardId}/permi | Deletes permission for specified user or group fro | No | Microservice.Quicksight | Service Swagger (Microservice. |
| configuration | DeleteQuicksightFolderConfiguration | DELETE | /v2/quicksight/configurations/folders/{id} | Deletes a quicksight folder configuration. | No | Microservice.Quicksight | Service Swagger (Microservice. |
| reportgroup | DeleteQuicksightGroup | DELETE | /v2/quicksight/reportgroups/{id} | Deletes a quicksight group. | No | Microservice.Quicksight | Service Swagger (Microservice. |
| configuration | DeleteQuicksightGroupConfiguration | DELETE | /v2/quicksight/configurations/groups/{id} | Deletes a quicksight group configuration. | No | Microservice.Quicksight | Service Swagger (Microservice. |
| reportgrouptorole | DeleteQuicksightGroupToIoRole | DELETE | /v2/roles/{roleId}/reportgroups/{reportGroupI | Deletes a quicksight report group assignment from  | No | Microservice.Quicksight | Service Swagger (Microservice. |
| reportgroupsuser | DeleteQuicksightGroupUser | DELETE | /v2/quicksight/reportgroups/{groupId}/users/{ | Removes a user from a group so that the user is no | No | Microservice.Quicksight | Service Swagger (Microservice. |
| folderpermission | DeleteQuicksightSharedFolderPermiss | DELETE | /v2/quicksight/folders/{folderId}/permissions | Deletes permission for quicksight shared folder to | No | Microservice.Quicksight | Service Swagger (Microservice. |
| recommendations | DeleteRecommendationProposal | DELETE | /v2/clients/{clientId}/recommendations2/{reco | Deletes a recommendation proposal. | No | Microservice.Recommend | Service Swagger + Documentatio |
| reportbranding | DeleteReportBranding | DELETE | /v2/report/branding/{id} | Deletes a a theme by ID. | No | Monolith.Report | Service Swagger (Monolith.Repo |
| reviews | DeleteReview | DELETE | /v1/reviews/{reviewId} |  | No | Microservice.Author | Service Swagger (Microservice. |
| entitlement | DeleteRoleOperation | DELETE | /v2/roles/{roleId}/operations/{operationId} | Deletes a role operation. | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| dividends | DeleteSecurityDividends | DELETE | /v2/securities/{securityId}/dividends |  | No | Microservice.Security | Service Swagger (Microservice. |
| securitygroups | DeleteSecurityGroup | DELETE | /v2/securitygroups/{securityGroupId} | Delete a Security Group by SecurityGroupId. | No | Microservice.Security | Service Swagger (Microservice. |
| poolfactor | DeleteSecurityPoolFactor | DELETE | /v2/securities/{securityId}/poolfactors/{pool | Deletes a security pool factor based on securityId | No | Microservice.Security | Service Swagger (Microservice. |
| prices | DeleteSecurityPrice | DELETE | /v2/securities/{securityId}/prices/{pricedOn} | Deletes a security price based on securityId and p | No | Microservice.Security | Service Swagger (Microservice. |
| settings | DeleteSetting | DELETE | /v1/settings | Delete secure message notification settings | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| settings | DeleteSettingForClient | DELETE | /v2/settings/{key}/clients/{clientId} | Delete a particular setting for the specified clie | No | Microservice.Config | Service Swagger (Microservice. |
| settings | DeleteSettingForGroup | DELETE | /v2/settings/{key}/groups/{groupId} | Delete a particular setting for the specified grou | No | Microservice.Config | Service Swagger (Microservice. |
| settings | DeleteSettingForTenant | DELETE | /v2/settings/{key}/tenants/{tenantId} | Deletes a particular setting for the specified ten | No | Microservice.Config | Service Swagger (Microservice. |
| splits | DeleteSplit | DELETE | /v2/splits/{splitId} | Deletes a split document. | Yes | N/A | Public Swagger v2 |
| stocks | DeleteStock | DELETE | /v2/stocks/{securityId} | Delete a Security based on Security Id. | No | Microservice.Security | Service Swagger (Microservice. |
| subscribes | DeleteSubscribe | DELETE | /v1/events/subscribe/{noun} | Deletes the subscription settings for the party ba | No | Microservice.ChangeNotifi | Service Swagger (Microservice. |
| subscriptions | DeleteSubscription | DELETE | /v1/subscriptions/{subscriptionId} |  | No | Monolith.WebHooks | Service Swagger (Monolith.WebH |
| tasks | DeleteTask | DELETE | /v2/activities/tasks/{taskId} | Deletes a given task. | No | Monolith.Crm | Service Swagger + Documentatio |
| tasknotes | DeleteTaskNote | DELETE | /v2/activities/tasks/{taskId}/notes/{noteId} | Deletes a given task note. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| templates | DeleteTemplate | DELETE | /v1/templates/{templateId} | Delete template | No | Microservice.Author | Service Swagger (Microservice. |
| templatecategories | DeleteTemplatecategory | DELETE | /v1/templatecategories/{templateCategoryId} |  | No | Microservice.Workflow | Service Swagger (Microservice. |
| steps | DeleteTemplateStep | DELETE | /v1/templates/{templateId}/steps/{stepId} | Delete a template step | No | Microservice.Workflow | Service Swagger (Microservice. |
| versions | DeleteTemplateVersion | DELETE | /v1/templates/{templateId}/versions/{versionI | Delete a specified template version | No | Microservice.Author | Service Swagger (Microservice. |
| tenantcategories | DeleteTenantCategory | DELETE | /v2/tenantcategories/{categoryId} |  | No | Microservice.Security | Service Swagger (Microservice. |
| disclosures | DeleteTenantDocumentType | DELETE | /v2/disclosures/documentTypes/{documentTypeId | Delete an existing Document Type for a tenant | No | Monolith.FactFind | Service Swagger (Monolith.Fact |
| recommendations | DeleteTenantRecommendationCategory | DELETE | /v2/recommendations2/categories/{categoryId} | Deletes a recommendation category. | No | Microservice.Recommend | Service Swagger + Documentatio |
| recommendations | DeleteTenantRecommendationSubCatego | DELETE | /v2/recommendations2/subcategories/{subCatego | Deletes a recommendation subcategory. | No | Microservice.Recommend | Service Swagger + Documentatio |
| addresses | DeleteTnccoachAddress | DELETE | /v2/tnc_coaches/{tnc_coachId}/addresses/{addr | Deletes an existing Address for the given TnC Coac | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activitytypes | DeleteType | DELETE | /v2/activities/types/{typeId} | Deletes a given activity type. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| alerts | DeleteUserAlertSubscription | DELETE | /v2/users/{userId}/alertsubscriptions/{alertS | Deletes an existing alert subscription for a user. | No | Microservice.Notification | Service Swagger (Microservice. |
| emails | DeleteUserEmail | DELETE | /v2/users/{userId}/emails/{emailId} | Deletes an email for a given user. | No | Microservice.Membership | Service Swagger (Microservice. |
| entitlement | DeleteUserGroup | DELETE | /v2/users/{userId}/groups/{userGroupId} | Deletes a user group association. | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| entitlement | DeleteUserRole | DELETE | /v2/users/{userId}/roles/{roleId} | Deletes a user role. | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| bulkvaluations | DeleteValuationBatch | DELETE | /v2/valuations/batches/{batchId} | Deletes an existing valuationbatch and undo any re | Yes | N/A | Public Swagger v2 |
| webhooks | DeleteWebhook | DELETE | /hub/webhooks/{id} | Deletes a specific webhook subscription by id (Uns | Yes | N/A | Public Swagger v2 |
| documents | DocumentConfigurationExists | HEAD | /v2/documents/configurations/{id} | Checks that a storage configuration exists by id | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| documents | DocumentExists | HEAD | /v2/documents/{documentId} | Checks if required document exists | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| documents | DocumentObjectExists | HEAD | /v2/documents/{documentId}/object | Checks if required document is uploaded. | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| bulkvaluations | EnqueueValuationBatch | POST | /v2/valuations/batches | Creates a new valuationbatch and enqueues it for i | Yes | N/A | Public Swagger v2 |
| planapplicationenvelope | ESignMultiPlanApplicationEnvelope | POST | /v2/plans/{planId}/applications/envelopes/{en | Electronically sign multi plan application envelop | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| planapplicationdocument | eSignPlanApplicationDocuments | POST | /v2/plans/{planId}/applications/{applicationI | eSign documents for a Plan Application. | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| planapplicationenvelope | ESignSinglePlanApplicationEnvelope | POST | /v2/plans/{planId}/applications/{applicationI | Electronically sign single plan application envelo | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| apps, beta | ExistApp | HEAD | /v2/apps/{appId} | Checks if the app exists | No | Microservice.AppD | Service Swagger (Microservice. |
| apps, beta | ExistInstalledApp | HEAD | /v2/installed_apps/{appId} | Checks if an installed app exists | Yes | N/A | Public Swagger v2 |
| apps, beta | ExistInstalledPreviewApp | HEAD | /v2/apps/{appId}/installation | Checks if a given app is installed in preview | No | Microservice.AppD | Service Swagger (Microservice. |
| apps, beta | ExistInstalledPublishedApp | HEAD | /v2/published_apps/{appId}/installation | Checks if a given published app is installed | No | Microservice.AppD | Service Swagger (Microservice. |
| campaigntemplates | ExistsCampaigntemplate | HEAD | /v1/campaigntemplates/{templateId} |  | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| changes | ExistsClientChange | HEAD | /v1/client/{partyId}/changes/{eventId} | Get the specified event. | No | Microservice.ChangeNotifi | Service Swagger (Microservice. |
| plans | ExistsClientPlan | HEAD | /v2/clients/{clientId}/plans/{planId} | Checks a plan exists for a given client and plan. | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Mon |
| mandrill | ExistsMaileventMandrill | HEAD | /v1/mailevents/mandrill | Allows Mandrill to confirm that the endpoint exist | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| messages | ExistsMessage | HEAD | /v1/messages/{secureMessageId} | Get a specific secure message by id. | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| recipients | ExistsMessageRecipient | HEAD | /v1/messages/{secureMessageId}/recipients/{re | Gets recipient if any, for the specified secure me | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| unreadcount | ExistsMessageUnreadcount | HEAD | /v1/messages/unreadcount | Get the count of unread messages. | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| templatelayouts | ExistsTemplatelayout | HEAD | /v1/templatelayouts/{layoutId} |  | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| entitlement | ExistsUserDetails | HEAD | /v2/users/{userId} | Checks that user exists. | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| entitlement | ExistsUserRole | HEAD | /v2/users/{userId}/roles/{roleId} | Checks that a user role exists. | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| expectation | ExpectationAdjustmentRequest | POST | /v2/expectations/{expectationId}/adjust | Creates a new expectation adjustment for a given e | No | Microservice.Expectation | Service Swagger (Microservice. |
| adjustmentsrules | ExpectationAdjustmentRuleExists | HEAD | /v2/expectations/adjustmentsrules/{adjustment | Checks that an expectation adjustment rule exists. | No | Microservice.Expectation | Service Swagger (Microservice. |
| expectation | ExpectationBreakdownExists | HEAD | /v2/expectations/{expectationId}/breakdowns/{ | Checks that an expectation breakdown record exists | No | Microservice.Expectation | Service Swagger (Microservice. |
| expectation | ExpectationBreakdownExistsForClient | HEAD | /v2/clients/{clientId}/expectations/{expectat | Checks that an expectation breakdown record exists | No | Microservice.Expectation | Service Swagger (Microservice. |
| expectation | ExpectationExists | HEAD | /v2/expectations/{expectationId} | Checks that an expectation record exists. | No | Microservice.Expectation | Service Swagger (Microservice. |
| statuses | FeeStatusExists | HEAD | /v2/fees/{feeId}/statuses/{feeStatusId} | Checks fee status exists. | Yes | N/A | Public Swagger v2 |
| forwardincometo | ForwardIncomeToOperation | POST | /v2/advisers/{adviserId}/forwardincometo | Creates a new event to indicate that income should | Yes | N/A | Public Swagger v2 |
| fundproviders | FundProviderExists | HEAD | /v2/fundproviders/{code} | Check whether a fund provider exists by its code o | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| clientvideo | GenerateClientVideoReport | POST | /v2/clients/{clientId}/media/videos/{videoId} | Generates a client video report | No | Microservice.Content | Service Swagger (Microservice. |
| clientvideo | GenerateClientVideoReport1 | POST | /v2/clients/{clientId}/media/videos/instances | Generates a client video report | No | Microservice.Content | Service Swagger (Microservice. |
| planapplicationdocument | GeneratePlanApplicationDocuments | POST | /v2/plans/{planId}/applications/{applicationI | Generate documents for a Plan Application. | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| illustrations | GenerateQuoteIllustration | POST | /v2/quotes/illustrations/generate |  | No | Microservice.ProviderInte | Service Swagger (Microservice. |
| accounts | GetAccount | GET | /v2/accounts/{subject} | Gets user account | No | Microservice.Membership | Service Swagger (Microservice. |
| addresses | GetAccountAddress | GET | /v2/accounts/{accountId}/addresses/{addressId | Retrieves the Address for the given addressId. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| accounts | GetAccountDocument | GET | /v2/accounts/{accountId}/documents/{documentI | Gets a single account document by id | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| accounts | GetAccountDocumentObject | GET | /v2/accounts/{accountId}/documents/{documentI | Gets a single account document object | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| phones | GetAccountPhone | GET | /v2/accounts/{subject}/phones/{phoneId} | Returns a phone for given account. | No | Microservice.Membership | Service Swagger (Microservice. |
| activitycategories | GetActivityCategory | GET | /v2/activities/categories/{categoryId} | Returns a given activity category. | No | Monolith.Crm | Service Swagger + Documentatio |
| activityoutcomes | GetActivityOutcome | GET | /v2/activities/outcomes/{outcomeId} | Returns a given activity outcome. | No | Monolith.Crm | Service Swagger + Documentatio |
| activitypriorities | GetActivityPriority | GET | /v2/activities/priorities/{priorityId} | Returns a given activity priority. | No | Monolith.Crm | Service Swagger + Documentatio |
| activitytypeevents | GetActivitySystemEvent | GET | /v2/activities/types/events/{id} | Returns a given activity type event. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activitytypes | GetActivityType | GET | /v2/activities/types/{typeId} | Returns a given activity type. | No | Monolith.Crm | Service Swagger + Documentatio |
| getadditionalquestions | GetAdditionalQuestions | POST | /v2/providers/{providerId}/getadditionalquest |  | No | Microservice.ProviderInte | Service Swagger (Microservice. |
| addresses | GetAddress | GET | /v2/addresses/{addressId} | Retrieves the Address for the given addressId. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| advicetemplates | GetAdviceTemplate | GET | /v2/advice/templates/{templateId} | Get advice template. | No | Microservice.Recommend | Service Swagger (Microservice. |
| advicetemplates | GetAdviceTemplateStep | GET | /v2/advice/templates/{templateId}/steps/{step | Get advice template step. | No | Microservice.Recommend | Service Swagger (Microservice. |
| advicetemplates | GetAdviceTemplateStepTransition | GET | /v2/advice/templates/{templateId}/steptransit | Get Advice template step transition. | No | Microservice.Recommend | Service Swagger (Microservice. |
| advisers | GetAdviser | GET | /v2/advisers/{adviserId} | Returns an adviser for a given adviser. | Yes | N/A | Public Swagger v2 |
| addresses | GetAdviserAddress | GET | /v2/advisers/{adviserId}/addresses/{addressId | Retrieves the Address for the given addressId. | Yes | N/A | Public Swagger v2 |
| bandingtemplates | GetAdviserBandingtemplate | GET | /v2/advisers/{adviserId}/bandingtemplates/{ba | Get banding template for adviser by Id. | No | Monolith.Commission | Service Swagger (Monolith.Comm |
| contactdetails | GetAdviserContactdetail | GET | /v2/advisers/{adviserId}/contactdetails/{cont | Returns ContactDetail resource | Yes | N/A | Public Swagger v2 |
| documents | GetAdviserDocument | GET | /v2/advisers/{adviserId}/documents/{documentI | Gets a single adviser document by id | No | Monolith.Storage | Service Swagger + Documentatio |
| documents | GetAdviserDocumentObject | GET | /v2/advisers/{adviserId}/documents/{documentI | Gets a single adviser document object | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| documents | GetAdviserManagedDocument | GET | /v2/advisers/{adviserId}/documents/managed/{k | Retrieve a managed document by key | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| agreementtemplates | GetAgreementTemplate | GET | /v2/agreements/communication-templates/{templ | Retrieves a specific Agreement Template by ID | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| alerts | GetAlertType | GET | /v2/alerttypes/{alertTypeId} | Get an alert type by id. | No | Microservice.Notification | Service Swagger (Microservice. |
| provider configuration | GetAllProviderEndpoints | GET | /v2/providers/endpointTypes | gets all avaiable endpoint types with a collection | No | Microservice.ProviderInte | Service Swagger (Microservice. |
| alternativeassets | GetAlternativeAsset | GET | /v2/alternativeassets/{securityId} | Get an Alternative Asset Security by Security Id. | No | Microservice.Security | Service Swagger (Microservice. |
| apps, beta | GetApp | GET | /v2/apps/{appId} | Returns a given app | No | Microservice.AppD | Service Swagger (Microservice. |
| apps, beta | GetAppClaims | GET | /v2/apps/{appId}/claims | Returns claims for a given app | No | Microservice.AppD | Service Swagger (Microservice. |
| apps, beta | GetAppContent | GET | /v2/apps/{appId}/content | Returns a list of custom content for a given app | No | Microservice.AppD | Service Swagger (Microservice. |
| apps, beta | GetAppMetadata | GET | /v2/apps/{appId}/metadata | Returns metadata for a given app | No | Microservice.AppD | Service Swagger (Microservice. |
| apps, beta | GetAppOauthClient | GET | /v2/apps/{appId}/oauth_clients/{clientId} | Returns an oauth client for a given app | No | Microservice.AppD | Service Swagger (Microservice. |
| appointments | GetAppointment | GET | /v2/activities/appointments/{appointmentId} | Returns a given appointment. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| apps, beta | GetAppSummary | GET | /v2/apps/{appId}/summary | Returns a given app summary | No | Microservice.AppD | Service Swagger (Microservice. |
| assetclasses | GetAssetClass | GET | /v2/assetclasses/{assetClassId} | Get Asset Class based Asset Class Id | No | Microservice.Security | Service Swagger (Microservice. |
| timeseries | GetAssetsTimeSeries | GET | /v2/clients/{clientId}/assets/valuations/time | Returns an asset valuations history for a client a | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| attitudetorisk | GetAtrTemplate | GET | /v2/atr_templates/{atrTemplateId} | Returns an ATR template. | No | Monolith.Atr | Service Swagger (Monolith.Atr) |
| attitudetorisk | GetAtrTemplateV2 | GET | /v2/attitudeToRisk/atr_templates/{templateId} | Retrieves an ATR template. | Yes | Monolith.Atr | Public Swagger v2 + Documentat |
| avatars | GetAvatar | GET | /v2/avatars | Get Avatar url for client | No | Microservice.Avatar | Service Swagger (Microservice. |
| signedurl | GetAvatarSignedurl | GET | /v2/avatars/signedurl | Get Avatar signed url for client for PUT | No | Microservice.Avatar | Service Swagger (Microservice. |
| bandingtemplates | GetBandingTemplate | GET | /v2/advisers/{adviserId}/bandingtemplates/{ba | Returns a single banding template for an adviser. | Yes | N/A | Public Swagger v2 |
| bankaccounts | GetBankAccount | GET | /v2/clients/{clientId}/recommendations2/{reco | Returns a bank account for a given proposal and cl | No | Microservice.Recommend | Service Swagger (Microservice. |
| emailerrorlog | GetBccErrorLog | GET | /v2/emailerrorlog/{errorLogId} | Returns a EntityDocument. | No | Monolith.Bcc | Service Swagger (Monolith.Bcc) |
| session | GetBeginsession | GET | /session/beginsession |  | No | Microservice.Identity | Service Swagger (Microservice. |
| documentbinderconfigs | GetBinderSettings | GET | /v2/DocumentBinderConfig | Get Binder Settings | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| bulk | GetBulkMessage | GET | /v1/messages/bulk/{bulkId} | Gets a bulk message by id. | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| bulkvideoshared | GetBulkVideoShared | GET | /v2/clients/media/videos/bulk/shared/{bulkVid | Returns a given bulk video shared. | No | Microservice.Content | Service Swagger (Microservice. |
| campaigns | GetCampaign | GET | /v1/campaigns/{campaignId} | Get campaign details | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| content | GetCampaignContent | GET | /v1/campaigns/{campaignId}/content | Get campaign details | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| recipients | GetCampaignRecipient | GET | /v1/campaigns/{campaignId}/recipients/{recipi | Retrieve details for a specified campaign recipien | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| report | GetCampaignReport | GET | /v1/campaigns/{campaignId}/report | Get campaign report | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| segments | GetCampaignSegment | GET | /v1/campaigns/{campaignId}/segments |  | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| campaigntemplates | GetCampaigntemplate | GET | /v1/campaigntemplates/{templateId} |  | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| content | GetCampaigntemplateContent | GET | /v1/campaigntemplates/{templateId}/content |  | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| cashreceipts | GetCashReceipt | GET | /v2/cashreceipts/{cashReceiptId} | Get a cash receipt. | No | Monolith.Commission | Service Swagger (Monolith.Comm |
| categories | GetCategory | GET | /v1/categories/{categoryId} | Get a specified category | No | Microservice.Author | Service Swagger (Microservice. |
| cff | GetCffSegment | GET | /v2/cff_segments/{segmentId} | Returns a particular CFF segment. | No | Microservice.CFF | Service Swagger (Microservice. |
| cff | GetCffSegmentCompletion | GET | /v2/clients/{clientId}/cff_segments/{segmentI | Returns completion for a particular segment. | No | Microservice.CFF | Service Swagger (Microservice. |
| cff | GetCffSegmentState | GET | /v2/clients/{clientId}/cff_segments/{segmentI | Returns state for a particular segment. | No | Microservice.CFF | Service Swagger (Microservice. |
| checklistitems | GetCheckListItem | GET | /v2/checklists/items/{itemId} | Get a checklist item. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| classificationcategories | GetClassificationCategory | GET | /v2/classificationcategories/{classificationC | Get Classification Category based Classification C | No | Microservice.Security | Service Swagger (Microservice. |
| clients | GetClient | GET | /v2/clients/{clientId} | Returns a clients for a given client. | Yes | N/A | Public Swagger v2 |
| addresses | GetClientAddress | GET | /v2/clients/{clientId}/addresses/{addressId} | Get a client's address by id. | Yes | N/A | Public Swagger v2 |
| communication-agreements | GetClientAgreementById | GET | /v2/clients/{clientId}/communication-agreemen | Retrieves a specific Client Agreement by ID | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| assets | GetClientAsset | GET | /v2/clients/{clientId}/assets/{assetId} | Returns the asset for a given client and asset. | Yes | N/A | Public Swagger v2 |
| valuations | GetClientAssetValuation | GET | /v2/clients/{clientId}/assets/{assetId}/valua | Returns an association on a valuation for a given  | Yes | N/A | Public Swagger v2 |
| attitudetorisk | GetClientAtr | GET | /v2/clients/{clientId}/attitudeToRisk/{atrId} | Returns an ATR for a client. | Yes | Monolith.Atr | Public Swagger v2 + Documentat |
| attitudetorisk | GetClientAtrAnswer | GET | /v2/clients/{clientId}/atr/{atrAnswerId} | Allows an API consumer to get a single ATR answer  | No | Monolith.Atr | Service Swagger (Monolith.Atr) |
| beneficiaries | GetClientBeneficiary | GET | /v2/clients/{clientId}/beneficiaries/{benefic | Get beneficiary for a given client. Discriminator | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| clientcategories | GetClientCategory | GET | /v2/clientcategories/{clientCategoryId} |  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| changes | GetClientChange | GET | /v1/client/{partyId}/changes/{eventId} | Get the specified event. | No | Microservice.ChangeNotifi | Service Swagger (Microservice. |
| contactdetails | GetClientContactdetail | GET | /v2/clients/{clientId}/contactdetails/{contac | Returns a contact detail for a given client and co | Yes | N/A | Public Swagger v2 |
| dependants, beta | GetClientDependant | GET | /v2/clients/{clientId}/dependants/{dependantI | Returns a dependant for a given client and dependa | Yes | N/A | Public Swagger v2 |
| documents | GetClientDocument | GET | /v2/clients/{clientId}/documents/{documentId} | Returns a document for a given client and document | Yes | N/A | Public Swagger v2 |
| documents | GetClientDocumentObject | GET | /v2/clients/{clientId}/documents/{documentId} | Returns a file object for a given client and docum | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| dpa | GetClientDpaPolicyAgreement | GET | /v2/clients/{clientId}/dpa_agreements/{agreem | Returns a single DPA policy agreement for a client | Yes | N/A | Public Swagger v2 |
| emails | GetClientEmail | GET | /v1/clients/{clientId}/emails/{emailId} |  | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| content | GetClientEmailContent | GET | /v1/clients/{clientId}/emails/{emailId}/conte |  | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| employments | GetClientEmployment | GET | /v2/clients/{clientId}/employments/{employmen | Get an employment for a given client. | Yes | N/A | Public Swagger v2 |
| clientenrollmentsummary | GetClientEnrollmentSummary | GET | /v2/clients/{clientId}/clientenrollmentsummar | Gets client enrollments summary. | No | Microservice.Requirement | Service Swagger (Microservice. |
| expenditures, beta | GetClientExpenditure | GET | /v2/clients/{clientId}/expenditures/{expendit | Retrieves a client's expenditure record. | Yes | Monolith.FactFind | Public Swagger v2 + GitHub Mon |
| fees | GetClientFee | GET | /v2/clients/{clientId}/fees/{feeId} | Get client fee by id. | Yes | N/A | Public Swagger v2 |
| splits | GetClientFeeSplit | GET | /v2/clients/{clientId}/fees/{feeId}/splits/{s | Returns a client fee split document. | Yes | N/A | Public Swagger v2 |
| statuses | GetClientFeeStatus | GET | /v2/clients/{clientId}/fees/{feeId}/statuses/ | Get fee status | Yes | N/A | Public Swagger v2 |
| financialprofile | GetClientFinancialProfile | GET | /v2/clients/{clientId}/financialProfile | Gets financial profile for a given client. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| financialsummarybycategor | GetClientFinancialSummaryByCategory | GET | /v2/clients/{clientId}/financialsummarybycate | Allows an API consumer to get a client portfolio i | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| incomes, beta | GetClientIncome | GET | /v2/clients/{clientId}/incomes/{incomeId} | Returns the income for a given client and income. | Yes | Monolith.FactFind | Public Swagger v2 + GitHub Mon |
| insights | GetClientInsights | GET | /v2/clients/{clientId}/insights | Returns a list of the insights associated with the | No | Microservice.Insight | Service Swagger + Documentatio |
| investmentpreference | GetClientInvestmentPreference | GET | /v2/clients/{clientId}/servicecases/{serviceC | Allows an API consumer to retrieve a client invest | No | Microservice.Recommend | Service Swagger (Microservice. |
| clientinvestmentpreferenc | GetClientInvestmentPreferences | GET | /v2/clients/{clientId}/investmentPreferences/ | Get client investment preference. | No | Microservice.Recommend | Service Swagger (Microservice. |
| clientinvestmentpreferenc | GetClientInvestmentPreferenceUsingO | GET | /v2/clients/{clientId}/objectives/{objectives | Allows an API consumer to retrieve a client invest | No | Microservice.Recommend | Service Swagger (Microservice. |
| marketingpreferences, bet | GetClientMarketingPreferences | GET | /v2/clients/{clientId}/marketing_preferences | Returns client's current marketing preferences. | Yes | N/A | Public Swagger v2 |
| notes, beta | GetClientNotes | GET | /v2/clients/{clientId}/notes | Returns the notes for a given client. | No | Monolith.FactFind | Service Swagger (Monolith.Fact |
| objectives | GetClientObjective | GET | /v2/clients/{clientId}/objectives/{objectiveI | Gets a client objective. | No | Microservice.Requirement | Service Swagger + Documentatio |
| opportunities | GetClientOpportunity | GET | /v2/clients/{clientId}/opportunities/{opportu | Returns opportunity documents for a given client a | Yes | N/A | Public Swagger v2 |
| plans | GetClientPlan | GET | /v2/clients/{clientId}/plans/{planId} | Returns a plan for a given client and plan. | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Mon |
| beneficiaries | GetClientPlanBeneficiary | GET | /v2/clients/{clientId}/plans/{planId}/benefic | Get beneficiary for a given client and plan. Disc | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| charges | GetClientPlanCharge | GET | /v2/clients/{clientId}/plans/{planId}/charges | Returns a single charge for a client's plan. | Yes | N/A | Public Swagger v2 |
| contributions | GetClientPlanContribution | GET | /v2/clients/{clientId}/plans/{planId}/contrib | Returns a contribution for a given client and plan | Yes | N/A | Public Swagger v2 |
| fees | GetClientPlanFee | GET | /v2/clients/{clientId}/plans/{planId}/fees/{f | Gets a Fee for the given plan. | Yes | N/A | Public Swagger v2 |
| fundproposal | GetClientPlanFundproposal | GET | /v2/clients/{clientId}/plans/{planId}/fundpro | Returns a fund proposals from holidings for a give | Yes | N/A | Public Swagger v2 |
| holdings | GetClientPlanHolding | GET | /v2/clients/{clientId}/plans/{planId}/holding | Returns a fund holding for a given client, plan an | Yes | N/A | Public Swagger v2 |
| fundtransactions | GetClientPlanHoldingTransaction | GET | /v2/clients/{clientId}/plans/{planId}/holding | Returns a fund holdings transaction for a given cl | Yes | N/A | Public Swagger v2 |
| splits | GetClientPlanSplit | GET | /v2/clients/{clientId}/plans/{planId}/splits/ | Get plan split. | No | Monolith.Commission | Service Swagger (Monolith.Comm |
| transactions, beta | GetClientPlanTransaction | GET | /v2/clients/{clientId}/plans/{planId}/transac | Gets a single transaction by id. | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Mon |
| valuations | GetClientPlanValuation | GET | /v2/clients/{clientId}/plans/{planId}/valuati | Returns a valuation on a given client, plan and va | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Mon |
| withdrawals | GetClientPlanWithdrawal | GET | /v2/clients/{clientId}/plans/{planId}/withdra | Returns a withdrawal for a given client, plan and  | Yes | N/A | Public Swagger v2 |
| professionalaffiliations | GetClientProfessionalAffiliations | GET | /v2/clients/{clientId}/professionalaffiliatio | Returns a clients professional affiliations. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| proofofidentity | GetClientProofOfIdentity | GET | /v2/clients/{clientId}/proofofidentity/{id} | Returns the proof of identity record for a given c | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| quotes, beta | GetClientQuote | GET | /v2/clients/{clientId}/quotes/{quoteId} | Returns a client quote. | Yes | N/A | Public Swagger v2 |
| quotes, beta | GetClientQuoteResult | GET | /v2/clients/{clientId}/quotes/{quoteId}/resul | Returns a client quote result. | Yes | N/A | Public Swagger v2 |
| quotes, beta | GetClientQuoteResultProductBenefits | GET | /v2/clients/{clientId}/quotes/{quoteId}/resul | This endpoint allows an API user to retrieve produ | Yes | N/A | Public Swagger v2 |
| recommendations | GetClientRecommendation | GET | /v2/clients/{clientId}/recommendations2/{reco | Gets a recommendation. | No | Microservice.Recommend | Service Swagger + Documentatio |
| relationships | GetClientRelationship | GET | /v2/clients/{clientId}/relationships/{relatio | Returns a relationship for a given client and rela | Yes | N/A | Public Swagger v2 |
| requirements | GetClientRequirement | GET | /v2/clients/{clientId}/requirements/{requirem | Gets a requirement. | No | Monolith.Crm | Service Swagger + Documentatio |
| servicecases | GetClientServicecase | GET | /v2/clients/{clientId}/servicecases/{serviceC | Returns a service case for a given client and serv | Yes | N/A | Public Swagger v2 |
| servicehistories | GetClientServiceRecord | GET | /v2/clients/{clientId}/servicehistory/{client | Returns a client service record. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| splittemplates | GetClientSplitTemplate | GET | /v2/clients/{clientId}/splittemplates/{templa | Returns a single split template for an client. | Yes | N/A | Public Swagger v2 |
| clientvideo | GetClientVideo | GET | /v2/clients/{clientId}/media/videos/{videoId} | Returns a given client video | No | Microservice.Content | Service Swagger (Microservice. |
| clientvideo | GetClientVideoInstance | GET | /v2/clients/{clientId}/media/videos/instances | Returns a given client video | No | Microservice.Content | Service Swagger (Microservice. |
| vulnerabilities | GetClientVulnerability | GET | /v2/clients/{clientId}/vulnerabilities/{vulne | Get a single client vulnerability. | Yes | N/A | Public Swagger v2 |
| vulnerabilities | GetClientVulnerabilityCurrent | GET | /v2/clients/{clientId}/vulnerabilities/curren | Get client's current vulnerability. | Yes | N/A | Public Swagger v2 |
| commissions | GetCommission | GET | /v2/commissions/{commissionId} | Get a commission by id. | Yes | N/A | Public Swagger v2 |
| expectation | GetConfiguration | GET | /v2/expectations/configuration | Returns a tenant's configuration settings for expe | No | Microservice.Expectation | Service Swagger (Microservice. |
| accountrecovery | GetConfirmation | GET | /forgotpassword/confirmation/{forgotPasswordI |  | No | Microservice.Identity | Service Swagger (Microservice. |
| countries | GetCountry | GET | /v2/countries/{countryId} | Returns the specified Country resource. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| creditnotes | GetCreditNote | GET | /v2/fees/{feeId}/creditnotes/{creditNoteId} | Get a credit note by identifier for a given fee. | Yes | N/A | Public Swagger v2 |
| currencies | GetCurrency | GET | /v2/currencies/{securityId} | Gets a Currency Security based on Security Id. | No | Microservice.Security | Service Swagger (Microservice. |
| dpa | GetCurrentDPAPolicy | GET | /v2/dpa_policies/current | Returns the current default DPA policy (see notes  | Yes | N/A | Public Swagger v2 |
| provider configuration | getDeclarations | POST | /v2/providerintegrations/getDeclarations |  | No | Microservice.ProviderInte | Service Swagger (Microservice. |
| provider configuration | getDeclarations2 | POST | /v2/providers/{providerId}/getDeclarations |  | No | Microservice.ProviderInte | Service Swagger (Microservice. |
| defaultbranding | GetDefaultBranding | GET | /v2/report/branding/default/{id} | Gets a default  branding configuration | No | Monolith.Report | Service Swagger (Monolith.Repo |
| delivery methods | GetDeliveryMethods | GET | /v2/deliverymethods | Get Delivery Methods. | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| documents | GetDocument | GET | /v2/documents/{documentId} | Gets a single document by id | Yes | N/A | Public Swagger v2 |
| documentbinders | GetDocumentBinder | GET | /v2/clients/{clientId}/documentbinders/{docum | Gets a single document binder | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| documents | GetDocumentConfiguration | GET | /v2/documents/configurations/{id} | Gets a storage configuration by id | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| documentfolders | GetDocumentFolder | GET | /v2/clients/{clientId}/documentfolders/{docum | Gets a single document folder. | Yes | N/A | Public Swagger v2 |
| documents | GetDocumentObject | GET | /v2/documents/{documentId}/object | Gets a single document object | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| docusignenvelopes | GetDocuSignEnvelope | GET | /v2/clients/docusign_envelopes/{envelopeId} | Get eSignature Envelope | No | Microservice.DocuSign | Service Swagger (Microservice. |
| docusignfieldanchors | GetDocuSignFieldAnchors | GET | /v2/docusign_field_anchors | Gets list of field anchors | No | Microservice.DocuSign | Service Swagger (Microservice. |
| dpa | GetDpaPolicy | GET | /v2/dpa_policies/{policyId} | Returns a single DPA policy. | Yes | N/A | Public Swagger v2 |
| settings | GetEffectiveClientSetting | GET | /v2/clients/{clientId}/settings/{key} | Get effective setting for the specified client. | No | Microservice.Config | Service Swagger (Microservice. |
| settings | GetEffectiveClientSettings | GET | /v2/clients/{clientId}/settings | Get all effective settings for the specified clien | No | Microservice.Config | Service Swagger (Microservice. |
| settings | GetEffectiveGroupSetting | GET | /v2/groups/{groupId}/settings/{key} | Get effective setting for the specified group. | No | Microservice.Config | Service Swagger (Microservice. |
| settings | GetEffectiveGroupSettings | GET | /v2/groups/{groupId}/settings | Get all effective settings for the specified group | No | Microservice.Config | Service Swagger (Microservice. |
| emails | GetEmail | GET | /v2/activities/emails/{emailId} | Returns a given email. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| configuration | GetEmailConfiguration | GET | /v1/emails/configuration |  | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| emailtemplatefields | GetEmailtemplatefield | GET | /v1/emailtemplatefields |  | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| etfs | GetEtf | GET | /v2/etfs/{securityId} | Get an ETF Security based on Security Id. | No | Microservice.Security | Service Swagger (Microservice. |
| exchanges | GetExchange | GET | /v2/exchanges/{exchangeCode} | Get an Exchange based on Exchange Code. | No | Microservice.Security | Service Swagger (Microservice. |
| expectation | GetExpectation | GET | /v2/expectations/{expectationId} | Returns a single expectation. | No | Microservice.Expectation | Service Swagger (Microservice. |
| adjustmentsrules | GetExpectationAdjustmentRule | GET | /v2/expectations/adjustmentsrules/{adjustment | Gets an expectation adjustment rule. | No | Microservice.Expectation | Service Swagger (Microservice. |
| expectation | GetExpectationBreakdown | GET | /v2/expectations/{expectationId}/breakdowns/{ | Returns a single expectation breakdown. | No | Microservice.Expectation | Service Swagger (Microservice. |
| expectation | GetExpectationBreakdownByClient | GET | /v2/clients/{clientId}/expectations/{expectat | Returns a list of expectation breakdowns related t | No | Microservice.Expectation | Service Swagger (Microservice. |
| fees | GetFee | GET | /v2/fees/{feeId} | Get fee by id. | Yes | N/A | Public Swagger v2 |
| feemodels | GetFeeModel | GET | /v2/feemodels/{feeModelId} | Get fee model by id. | Yes | N/A | Public Swagger v2 |
| feemodeltemplates | GetFeeModelTemplate | GET | /v2/templates/{templateId} | Allows an api consumer to retrieve a single fee mo | Yes | N/A | Public Swagger v2 |
| statuses | GetFeeStatus | GET | /v2/fees/{feeId}/statuses/{feeStatusId} | Get a fee status | Yes | N/A | Public Swagger v2 |
| fixedincomes | GetFixedIncome | GET | /v2/fixedincomes/{securityId} | Get a Fixed Income Security based on Security Id. | No | Microservice.Security | Service Swagger (Microservice. |
| accountrecovery | GetForgotpassword | GET | /forgotpassword |  | No | Microservice.Identity | Service Swagger (Microservice. |
| funds | GetFund | GET | /v2/funds/{fundId} | Returns a fund/equity for a given fundId/equityId. | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Mon |
| fundbenchmarks | GetFundBenchmark | GET | /v2/fundbenchmarks/{fundBenchmarkId} | Returns a fund benchmark by the given fundBenchmar | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| fundholdingtimeseries | GetFundHoldingTimeSeries | GET | /clients/{clientId}/plans/{planId}/holdings/{ | Returns up to three years of fund holding time ser | Yes | N/A | Public Swagger v2 |
| fundingsource | GetFundingSource | GET | /v2/clients/{clientId}/servicecases/{serviceC | Allows an API consumer to retrieve a single fundin | No | Microservice.Recommend | Service Swagger (Microservice. |
| fundproviders | GetFundprovider | GET | /v2/fundproviders/{code} | Returns fund providers for a given code. | Yes | N/A | Public Swagger v2 |
| fundsectors | GetFundsector | GET | /v2/fundsectors/{code} | Returns fund sectors for a given fund code. | Yes | N/A | Public Swagger v2 |
| allocations | GetGoalAllocation | GET | /v2/objectives/{objectiveId}/allocations/{all | Gets a Goal Allocation. | No | Microservice.Requirement | Service Swagger (Microservice. |
| groups | GetGroup | GET | /v2/groups/{groupId} | Returns the given group. | No | Monolith.Crm | Service Swagger + Documentatio |
| addresses | GetGroupAddress | GET | /v2/groups/{groupId}/addresses/{addressId} | Retrieves the Address for the given addressId. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| brands | GetGroupBrand | GET | /v1/groups/{groupId}/brands/{brandId} | Get a brand by id and groupId. | No | Microservice.Brand | Service Swagger (Microservice. |
| closest | GetGroupBrandClosest | GET | /v1/groups/{groupId}/brands/closest | Get closest brand for specified group | No | Microservice.Brand | Service Swagger (Microservice. |
| groups | GetGroupLineage | GET | /v2/groups/{groupId}/lineage | Returns a given group lineage. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| households | GetHousehold | GET | /v2/households/{householdId} | Retrieves a given household's details. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| households | GetHouseholdGrouping | GET | /v2/households/{householdId}/groupings/{house | Retrieves a given household grouping's details. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| incomestatements, beta | GetIncomeStatement | GET | /v2/incomestatements/{incomeStatementId} | Returns an income statement. | Yes | N/A | Public Swagger v2 |
| incomestatements, beta | GetIncomeStatementItem | GET | /v2/incomestatements/{incomeStatementId}/item | Returns a given item for a given income statement. | Yes | N/A | Public Swagger v2 |
| apps, beta | GetInstalledApp | GET | /v2/installed_apps/{appId} | Returns an installed app | Yes | N/A | Public Swagger v2 |
| apps, beta | GetInstalledAppGroupSettings | GET | /v2/installed_apps/{appId}/group_settings/{gr | Returns group settings for a given installed app a | Yes | N/A | Public Swagger v2 |
| apps | GetInstalledAppGroupSettingsByGroup | GET | /v2/installed_apps/{appId}/group_settings/{gr | Returns group settings for a given installed app a | No | Microservice.AppD | Service Swagger (Microservice. |
| apps, beta | GetInstalledAppUserSettings | GET | /v2/installed_apps/{appId}/user_settings/{use | Returns user settings for a given installed app an | Yes | N/A | Public Swagger v2 |
| instances | GetInstance | GET | /v1/instances/{instanceId} |  | No | Microservice.Workflow | Service Swagger (Microservice. |
| introducers | GetIntroducer | GET | /v2/introducers/{introducerId} | Returns an introducer. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | GetIntroducerAddress | GET | /v2/introducers/{introducerId}/addresses/{add | Retrieves the Address for the given addressId. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| introducerpaymentrules | GetIntroducerPaymentRule | GET | /v2/introducerpaymentrules/{introducerPayment | Returns an Introducer Payment Rule. | Yes | N/A | Public Swagger v2 |
| investmentpreferencequest | GetInvestmentPreferenceQuestion | GET | /v2/investmentpreferences/questions/{question | Get investment preference question. | No | Microservice.Recommend | Service Swagger (Microservice. |
| issuers | GetIssuer | GET | /v2/issuers/{issuerId} | Get an Issuer based on Issuer Id. | No | Microservice.Security | Service Swagger (Microservice. |
| journeytypes | GetJourneyType | GET | /v2/advice/journeytypes/{journeyTypeId} | Get journey type. | No | Microservice.Recommend | Service Swagger (Microservice. |
| jumplinks | GetJumplink | GET | /v2/jumplinks/{jumpLinkId} |  | No | Microservice.Membership | Service Swagger (Microservice. |
| leads | GetLead | GET | /v2/leads/{leadId} | Returns a given lead. | Yes | N/A | Public Swagger v2 |
| addresses | GetLeadAddress | GET | /v2/leads/{leadId}/addresses/{addressId} | Retrieves the Address for the given addressId. | Yes | N/A | Public Swagger v2 |
| contactdetails | GetLeadContactdetail | GET | /v2/leads/{leadId}/contactdetails/{contactDet | Returns a contact detail for a given lead and cont | Yes | N/A | Public Swagger v2 |
| leads | GetLeadDocument | GET | /v2/leads/{leadId}/documents/{documentId} | Gets a single lead document by id | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| leads | GetLeadDocumentObject | GET | /v2/leads/{leadId}/documents/{documentId}/obj | Gets a single lead document object | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| marketingpreferences, bet | GetLeadMarketingPreferences | GET | /v2/leads/{leadId}/marketing_preferences | Returns lead's current marketing preferences. | Yes | N/A | Public Swagger v2 |
| objectives | GetLeadObjective | GET | /v2/leads/{leadId}/objectives/{objectiveId} | Gets a lead objective. | No | Microservice.Requirement | Service Swagger (Microservice. |
| opportunities | GetLeadOpportunity | GET | /v2/leads/{leadId}/opportunities/{opportunity | Returns an opportunity document for a given lead. | Yes | N/A | Public Swagger v2 |
| quotes | GetLeadQuote | GET | /v2/leads/{leadId}/quotes/{quoteId} | Returns a lead quote. | No | Microservice.Quotation | Service Swagger (Microservice. |
| quotes | GetLeadQuoteResult | GET | /v2/leads/{leadId}/quotes/{quoteId}/results/{ | Returns a lead quote result. | No | Microservice.Quotation | Service Swagger (Microservice. |
| relationships | GetLeadRelationship | GET | /v2/leads/{leadId}/relationships/{relationshi | Returns a relationship for a given lead and relati | Yes | N/A | Public Swagger v2 |
| lifecycles, beta | GetLifecycle | GET | /v2/lifecycles/{lifecycleId} | Returns a lifecycle. | Yes | N/A | Public Swagger v2 |
| logins | GetLoginDetails | GET | /v2/user/Login | Checks whether the user is authorised to access ui | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| marketclosings | GetMarketClosings | GET | /v2/marketclosings | Get a Market Closing based on a set of years. | No | Microservice.Security | Service Swagger (Microservice. |
| messages | GetMessage | GET | /v1/messages/{secureMessageId} | Get a specific secure message by id. | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| content | GetMessageAttachmentContent | GET | /v1/messages/{secureMessageId}/attachments/{a | Get the attachment's content of a specific secure  | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| draft | GetMessageDraft | GET | /v1/messages/{secureMessageId}/draft | Get a draft message for specific secure message by | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| recipients | GetMessageRecipient | GET | /v1/messages/{secureMessageId}/recipients/{re | Gets recipient if any, for the specified secure me | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| unreadcount | GetMessageUnreadcount | GET | /v1/messages/unreadcount | Get the count of unread messages. | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| models | GetModel | GET | /v2/models/{modelId} | Returns a portfolio model. | Yes | N/A | Public Swagger v2 |
| nationalities | GetNationality | GET | /v2/nationalities/{nationalityId} | Returns the specified nationality resource. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| oauthclients | GetOauthClient | GET | /v2/oauth_clients/{clientId} |  | No | Microservice.Identity | Service Swagger (Microservice. |
| entitlement | GetOperation | GET | /v2/{application}/operations/{operationId} | Returns an operation for a given application. | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| opportunities | GetOpportunityType | GET | /v2/opportunities/types/{opportunityTypeId} | Returns the requested Opportunity type for a tenan | Yes | N/A | Public Swagger v2 |
| security | GetOptionSecurity | GET | /v1/options/security | Get template security options | No | Microservice.Author | Service Swagger (Microservice. |
| versioning | GetOptionVersioning | GET | /v1/options/versioning | Get template versioning options | No | Microservice.Author | Service Swagger (Microservice. |
| outputs | GetOutput | GET | /v1/output/{outputId} | Get details for a specified output document | No | Microservice.Author | Service Swagger (Microservice. |
| download | GetOutputDownload | GET | /v1/output/{outputId}/download | Download generated document | No | Microservice.Author | Service Swagger (Microservice. |
| passwordpolicy | GetPasswordPolicy | GET | /v2/oauth_clients/{clientId}/passwordpolicy |  | No | Microservice.Identity | Service Swagger (Microservice. |
| money movement | GetPaymentMethods | GET | /v2/moneymovement/paymentmethods |  | No | Microservice.ProviderInte | Service Swagger (Microservice. |
| personalcontacts | GetPersonalContact | GET | /v2/clients/{clientId}/personalContacts/{pers | Get given personal contact for a given client | Yes | N/A | Public Swagger v2 |
| addresses | GetPersonalContactAddress | GET | /v2/clients/{clientId}/personalcontacts/{pers | Get given address for a given personal contact. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| contactdetails | GetPersonalContactDetail | GET | /v2/clients/{clientId}/personalcontacts/{pers | Get given contact detail for a given personal cont | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| relationships | GetPersonalContactRelationship | GET | /v2/clients/{clientId}/personalcontacts/{pers | Get given relationhsip for a given personal contac | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| plans | GetPlan | GET | /v2/plans/{planId} | Get a Plan | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Mon |
| planapplications | GetPlanApplication | GET | /v2/plans/{planId}/applications/{applicationI | Retrieves a single Plan Application. | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| planapplicationenvelope | GetPlanApplicationEnvelope | GET | /v2/plans/{planId}/applications/envelopes/{en | Get plan application envelop. | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| planapplicationdocument | GetPlanApplicationESignStatus | GET | /v2/plans/{planId}/applications/{applicationI | Envelope status of eSign documents for a Plan Appl | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| commissions | GetPlanCommission | GET | /v2/clients/{clientId}/plans/{planId}/commiss | Get a commission by identifier for a given plan. | Yes | N/A | Public Swagger v2 |
| contacts | GetPlanContact | GET | /v2/clients/{clientId}/plans/{planId}/contact | Gets a plan's contact | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| plan delivery method | GetPlanDeliveryMethods | GET | /v2/plans/{planId}/plandeliverymethod | Get Plan Delivery Method. | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| plan delivery method | GetPlanDeliveryMethodsProposed | GET | /v2/plans/{planId}/plandeliverymethod/propose | Get Proposed Plan Delivery Method. | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| fees | GetPlanFees | GET | /v2/plans/{planId}/fees | Gets a collection of fee linked to the given plan. | No | Monolith.Charging | Service Swagger (Monolith.Char |
| statuses | GetPlanFeeStatus | GET | /v2/clients/{clientId}/plans/{planId}/fees/{f | Get fee status. | Yes | N/A | Public Swagger v2 |
| splits | GetPlanSplit | GET | /v2/clients/{clientId}/plans/{planId}/splits/ | Returns a plan split document. | Yes | N/A | Public Swagger v2 |
| statuses | GetPlanStatus | GET | /v2/clients/{clientId}/plans/{planId}/statuse | Retrieves a specific history record | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Mon |
| timeseries | GetPlansTimeSeries | GET | /v2/clients/{clientId}/plans/valuations/times | Returns a plan valuations history for a client as  | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| plantypes | GetPlantype | GET | /v2/plantypes/{name} | Retrieves a plan type by name and default region c | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| plantypes | GetPlanTypeByNameAndRegion | GET | /v2/plantypes/{name}/{regionCode} | Retrieves a plan type by name and region code | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| lifecycles | GetPlanTypeLifecycle | GET | /v2/plantypes/{name}/lifecycles/{lifecycleId} | Retrieves a lifecycle by plan type name and lifecy | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| valuations | GetPlanValuationRawResponse | GET | /v2/clients/{clientId}/plans/{planId}/valuati | Returns the raw valuation response from provider | No | Monolith.ContractEnquiry | Service Swagger (Monolith.Cont |
| plugins | GetPlugin | GET | /v1/plugin | Get latest plugin details | No | Microservice.Author | Service Swagger (Microservice. |
| download | GetPluginDownload | GET | /v1/plugin/download | Download plugin installer | No | Microservice.Author | Service Swagger (Microservice. |
| schema | GetPluginSchema | GET | /v1/plugin/schema | Download data source schema | No | Microservice.Author | Service Swagger (Microservice. |
| portfolioreport | GetPortfolioReportObject | GET | /v2/clients/{clientId}/reports/portfolio/{id} | Gets a object as stream | No | Monolith.Report | Service Swagger (Monolith.Repo |
| portfolioreport | GetPortfolioReportRequest | GET | /v2/clients/{clientId}/reports/portfolio/{id} | Retrieves item by id | No | Monolith.Report | Service Swagger (Monolith.Repo |
| prices | GetPrices | GET | /v2/securities/{securityId}/prices | Get all prices for the passed in securityId. | No | Microservice.Security | Service Swagger (Microservice. |
| productproviders | GetProductprovider | GET | /v2/productproviders/{productProviderId} | Returns a product provider. | Yes | N/A | Public Swagger v2 |
| addresses | GetProductproviderAddress | GET | /v2/productproviders/{productProviderId}/addr | Retrieves the Address for the given addressId. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| providerdocuments | GetProductProviderDocumentCategory | GET | /v2/providerdocuments/categories/{categoryId} | Get a product provider document category. | No | Microservice.ProviderDocu | Service Swagger (Microservice. |
| providerdocuments | GetProductProviderDocumentObject | GET | /v2/clients/{clientId}/plans/{planId}/provide | Get a product provider document object. | No | Microservice.ProviderDocu | Service Swagger (Microservice. |
| productproviders | GetProductProviderHierarchy | GET | /v2/productproviders/{productProviderId}/tena |  | No | Microservice.ProviderInte | Service Swagger (Microservice. |
| programs | GetProgram | GET | /v2/programs/{programId} | Return the program based on the ProgramId | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| proposalbeneficiary | GetProposalBeneficiary | GET | /v2/clients/{clientId}/recommendations2/{reco | Returns a beneficiary for a given proposal and cli | No | Microservice.Recommend | Service Swagger (Microservice. |
| prospectuses | GetProspectus | GET | /v2/prospectuses/{prospectusId} | Get Prospectus based on Prospectus Id. | No | Microservice.Security | Service Swagger (Microservice. |
| attitudetorisk | GetProviderAtrTemplate | GET | /v2/attitudeToRisk/apps/{appId}/atr_templates | Retrieves details of a third party ATR template. | Yes | Monolith.Atr | Public Swagger v2 + Documentat |
| providercodes | GetProviderCode | GET | /v2/productproviders/{providerId}/codes/{prov | Returns a specific allocated Provider Code issued  | No | Microservice.ProviderCode | Service Swagger (Microservice. |
| providercodes | GetProviderCodeConfig | GET | /v2/productproviders/{providerId}/codes/confi | Returns a specific Provider Code issued by a Provi | No | Microservice.ProviderCode | Service Swagger (Microservice. |
| providercodesconfigattrib | GetProviderCodeConfigsAttributes | GET | /v2/productproviders/codes/config/attributes | Returns a list of Provider Code config attributes  | No | Microservice.ProviderCode | Service Swagger (Microservice. |
| disclaimer | GetProviderDisclaimer | GET | /v2/provider/{providerId}/disclaimer |  | No | Microservice.ProviderInte | Service Swagger (Microservice. |
| provider configuration | GetProviderEndpoints | GET | /v2/providers/{providerId}/endpoints | gets a collection of endpoints that are configured | No | Microservice.ProviderInte | Service Swagger (Microservice. |
| models, modelprovider, be | GetProviderModel | GET | /v2/apps/{appId}/models/{modelId} | Returns a provider model. | Yes | N/A | Public Swagger v2 |
| models, modelprovider, be | GetProviderModels | GET | /v2/apps/{appId}/models | Returns a list of provider models. | Yes | N/A | Public Swagger v2 |
| provider tenant configura | GetProviderTenant | GET | /v2/providers/{providerId}/providerTenants |  | No | Microservice.ProviderInte | Service Swagger (Microservice. |
| apps, beta | GetPublishedApp | GET | /v2/published_apps/{appId} | Returns a given published app | No | Microservice.AppD | Service Swagger (Microservice. |
| apps, beta | GetPublishedAppMetadata | GET | /v2/published_apps/{appId}/metadata | Returns metadata for a given published app | No | Microservice.AppD | Service Swagger (Microservice. |
| customquestions | GetQuestion | GET | /v2/questions/{questionId} | Retrieves the details of a question. | Yes | N/A | Public Swagger v2 |
| configuration | GetQuicksightConfiguration | GET | /v2/quicksight/configurations | Get quicksight configuration. | No | Microservice.Quicksight | Service Swagger (Microservice. |
| dashboard | GetQuicksightDashboardEmbedUrl | GET | /v2/quicksight/dashboards/{dashboardId}/embed | Generates a session URL and authorization code tha | No | Microservice.Quicksight | Service Swagger (Microservice. |
| configuration | GetQuicksightFolderConfiguration | GET | /v2/quicksight/configurations/folders/{id} | Gets quicksight folder configuration. | No | Microservice.Quicksight | Service Swagger (Microservice. |
| reportgroup | GetQuicksightGroup | GET | /v2/quicksight/reportgroups/{id} | Gets a quicksight group. | No | Microservice.Quicksight | Service Swagger (Microservice. |
| configuration | GetQuicksightGroupConfiguration | GET | /v2/quicksight/configurations/groups/{id} | Gets quicksight group configuration. | No | Microservice.Quicksight | Service Swagger (Microservice. |
| session | GetQuicksightSessionEmbedUrl | GET | /v2/quicksight/session/embed-url | Generates a session URL and authorization code tha | No | Microservice.Quicksight | Service Swagger (Microservice. |
| folder | GetQuicksightSharedFolder | GET | /v2/quicksight/folders/{folderId} | Gets a quicksight folder. | No | Microservice.Quicksight | Service Swagger (Microservice. |
| quotes | GetQuoteResult | GET | /v2/clients/{clientId}/quotes/results/{quoteR | Returns a quote result for a given identifier. | No | Microservice.Quotation | Service Swagger (Microservice. |
| rebalance | GetRebalance | GET | /v2/rebalances/{id} | Get a rebalance request by Id. | No | Microservice.Recommend | Service Swagger (Microservice. |
| rebalance | GetRebalanceItems | GET | /v2/rebalances/{id}/items | Get a list of rebalance request items for a tenant | No | Microservice.Recommend | Service Swagger (Microservice. |
| rebalance | GetRebalances | GET | /v2/rebalances | Get a list of rebalance requests for a tenant. | No | Microservice.Recommend | Service Swagger (Microservice. |
| rebalance | GetRebalanceSettings | GET | /v2/rebalances/settings | Returns the default settings for rebalances. | No | Microservice.Recommend | Service Swagger (Microservice. |
| recommendations | GetRecommendationProposal | GET | /v2/clients/{clientId}/recommendations2/{reco | Gets a recommendation proposal. | No | Microservice.Recommend | Service Swagger + Documentatio |
| regions | GetRegion | GET | /v2/regions/{regionId} | Get Region by Region Id. | No | Microservice.Security | Service Swagger (Microservice. |
| reportartifact | GetReportArtifact | GET | /v2/report/artifacts/{id} | Get Artifact | No | Monolith.Report | Service Swagger (Monolith.Repo |
| reportbranding | GetReportBranding | GET | /v2/report/branding/{id} | Gets a report branding configuration | No | Monolith.Report | Service Swagger (Monolith.Repo |
| accountrecovery | GetResetpassword | GET | /forgotpassword/resetpassword/{forgotPassword |  | No | Microservice.Identity | Service Swagger (Microservice. |
| reviews | GetReview | GET | /v1/reviews/{reviewId} | Get a specified review | No | Microservice.Author | Service Swagger (Microservice. |
| download | GetReviewDownload | GET | /v1/reviews/{reviewId}/download | Download review document | No | Microservice.Author | Service Swagger (Microservice. |
| riskprofiles | GetRiskProfile | GET | /v2/riskprofiles/{riskProfileId} | Retrieves an Risk Profile. | No | Monolith.Atr | Service Swagger (Monolith.Atr) |
| entitlement | GetRole | GET | /v2/roles/{roleId} | Returns a role. | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| sectors | GetSector | GET | /v2/sectors/{sectorId} | Get Sector based on Sector Id. | No | Microservice.Security | Service Swagger (Microservice. |
| output | GetSecureMessageTrail | POST | /v1/clients/{clientId}/messages/output | Get a secure message trail in pdf file. | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| securities | GetSecurity | GET | /v2/securities/{securityId} | Gets an individual Security based on SecurityId. | No | Microservice.Security | Service Swagger (Microservice. |
| securitygroups | GetSecurityGroup | GET | /v2/securitygroups/{securityGroupId} | Get a Security Group By Security Group Id. | No | Microservice.Security | Service Swagger (Microservice. |
| serviceactivities | GetServiceActivity | GET | /v2/clients/{clientId}/service-activities/{se | Gets a service activity for a specific client. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| serviceactivities | GetServiceActivitySummary | GET | /v2/clients/service-activities/summary | Retrieves summary of service activities across all | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| servicecasecategories | GetServiceCaseCategory | GET | /v2/servicecases/categories/{serviceCaseCateg | Gets a serviceCase category by Id. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| recommendations | GetServiceCaseRecommendation | GET | /v2/servicecases/{serviceCaseId}/recommendati | Returns a service case recommendation. | No | Microservice.Recommend | Service Swagger (Microservice. |
| servicecasestatus | GetServiceCaseStatus | GET | /v2/servicecases/statuses/{serviceCaseStatusI | Returns a single ServiceCase status. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| settings | GetSetting | GET | /v1/settings | Get secure message notification settings | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| settings | GetSettingForClient | GET | /v2/settings/{key}/clients/{clientId} | Get a particular setting for the specified client. | No | Microservice.Config | Service Swagger (Microservice. |
| settings | GetSettingForTenant | GET | /v2/settings/{key}/tenants/{tenantId} | Get a particular setting for the specified tenant. | No | Microservice.Config | Service Swagger (Microservice. |
| settings | GetSettingGroup | GET | /v2/settings/{key}/groups/{groupId} | Get a particular setting for the specified group. | No | Microservice.Config | Service Swagger (Microservice. |
| settings | GetSettingTenantGroup | GET | /v2/settings/{key}/tenants/{tenantId}/groups/ | Get a particular setting for the specified group. | No | Microservice.Config | Service Swagger (Microservice. |
| splits | GetSplit | GET | /v2/splits/{splitId} | Returns a split document. | Yes | N/A | Public Swagger v2 |
| splittemplates | GetSplitTemplate | GET | /v2/advisers/{adviserId}/splittemplates/{temp | Returns a single split template for an adviser. | Yes | N/A | Public Swagger v2 |
| stocks | GetStock | GET | /v2/stocks/{securityId} | Gets a Stock Security based on Security Id. | No | Microservice.Security | Service Swagger (Microservice. |
| subscribes | GetSubscribe | GET | /v1/events/subscribe/{noun} | Get subscription details for the party for the spe | No | Microservice.ChangeNotifi | Service Swagger (Microservice. |
| tasks | GetTask | GET | /v2/activities/tasks/{taskId} | Returns a given task. | No | Monolith.Crm | Service Swagger + Documentatio |
| taskchecklistitems | GetTaskCheckListItems | GET | /v2/activities/tasks/{taskId}/checklists/item | Get Check list check list Items associated with th | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tasknotes | GetTaskNote | GET | /v2/activities/tasks/{taskId}/notes/{noteId} | Returns a given task note. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| templates | GetTemplate | GET | /v1/templates/{templateId} | Get specified template | No | Microservice.Author | Service Swagger (Microservice. |
| templatecategories | GetTemplatecategory | GET | /v1/templatecategories/{templateCategoryId} |  | No | Microservice.Workflow | Service Swagger (Microservice. |
| detailed | GetTemplateDetailed | GET | /v1/templates/{templateId}/detailed | Get template with additional detail on steps - sav | No | Microservice.Workflow | Service Swagger (Microservice. |
| download | GetTemplateDownload | GET | /v1/templates/{templateId}/download | Download the latest version of specified template | No | Microservice.Author | Service Swagger (Microservice. |
| initialise | GetTemplateInitialise | GET | /v1/templates/{templateId}/initialise | Initialise workflow service for specified template | No | Microservice.Workflow | Service Swagger (Microservice. |
| templatelayouts | GetTemplatelayout | GET | /v1/templatelayouts/{layoutId} |  | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| steps | GetTemplateStep | GET | /v1/templates/{templateId}/steps/{stepId} | List template steps | No | Microservice.Workflow | Service Swagger (Microservice. |
| versions | GetTemplateVersion | GET | /v1/templates/{templateId}/versions/{versionI | Get details for specified template version | No | Microservice.Author | Service Swagger (Microservice. |
| download | GetTemplateVersionDownload | GET | /v1/templates/{templateId}/versions/{versionI | Download specified template version | No | Microservice.Author | Service Swagger (Microservice. |
| tenants, beta | GetTenant | GET | /v2/tenants/{tenantId} | Retrieves the tenant resource specified | Yes | N/A | Public Swagger v2 |
| tenant | GetTenantAddress | GET | /v2/tenants/{tenantId}/address | Returns Tenant Address. | No | Monolith.Organization | Service Swagger (Monolith.Orga |
| tenantcategories | GetTenantCategory | GET | /v2/tenantcategories/{tenantCategoryId} |  | No | Microservice.Security | Service Swagger (Microservice. |
| tenant | GetTenantDetail | GET | /v2/tenants/{tenantId} | Returns Tenant Detail. | No | Monolith.Organization | Service Swagger (Monolith.Orga |
| disclosures | GetTenantDocumentType | GET | /v2/disclosures/documentTypes/{documentTypeId | Get Document Type by Id for a tenant | No | Monolith.FactFind | Service Swagger (Monolith.Fact |
| entitlement | GetTenantLicence | GET | /v2/tenants/{tenantId}/licence | Returns tenant licence. | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| attitudetorisk | GetTenantProviderAtrTemplate | GET | /v2/installed_apps/atr_templates/{id} | Retrieves the details of an ATR template for the i | Yes | Monolith.Atr | Public Swagger v2 + Documentat |
| models | GetTenantProviderModel | GET | /v2/installed_apps/models/{modelId} | Returns a provider model. | No | Microservice.iMps | Service Swagger (Microservice. |
| models | GetTenantProviderModels | GET | /v2/installed_apps/models | Returns a list of provider models. | No | Microservice.iMps | Service Swagger (Microservice. |
| recommendations | GetTenantRecommendationCategory | GET | /v2/recommendations2/categories/{categoryId} | Returns a recommendation category document. | No | Microservice.Recommend | Service Swagger + Documentatio |
| recommendations | GetTenantRecommendationSubCategory | GET | /v2/recommendations2/subcategories/{subCatego | Returns a recommendation subcategory document. | No | Microservice.Recommend | Service Swagger + Documentatio |
| tenant | GetTenantStatus | GET | /v2/tenants/{tenantId}/status | Returns Tenant Status. | No | Monolith.Organization | Service Swagger (Monolith.Orga |
| entitlement | GetTenantSupport | GET | /v2/tenants/{tenantId}/support | Returns an tenant support entity for a given tenan | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| tenanttasksetting | GetTenantTaskSetting | GET | /v2/activities/tasks/tenants/{tenantId}/setti | Returns a given tenant task setting. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | GetTnccoachAddress | GET | /v2/tnc_coaches/{tnc_coachId}/addresses/{addr | Retrieves the Address for the given addressId. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| unmatchedplans | GetUnmatchedPlan | GET | /v2/plans/unmatched/{planId} | Get an unmatched plan. | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| users | GetUser | GET | /v2/users/{userId} | Deprecated:   Returns user resource | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| alerts | GetUserAlertSubscription | GET | /v2/users/{userId}/alertsubscriptions/{alertS | Returns an alert subscription for a user by id. | No | Microservice.Notification | Service Swagger (Microservice. |
| entitlement | GetUserDetail | GET | /v2/users/{userId} | Returns a user. | No | Monolith.Entitlement | Service Swagger + Documentatio |
| userdiaryclassifications | GetUserDiaryClassification | GET | /v2/diary/users/{userId}/classifications/{use | Returns a given user diary classification. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| emails | GetUserEmail | GET | /v2/users/{userId}/emails/{emailId} | Returns an email for given user. | No | Microservice.Membership | Service Swagger (Microservice. |
| entitlement | GetUserGroup | GET | /v2/users/{userId}/groups/{userGroupId} | Returns a user group association. | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| plans | GetUserPlansExist | POST | /v2/users/{userId}/plans/exist |  | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| video | GetUserProviderSubscriptions | GET | /v2/users/{userId}/media/video/subscriptions | Returns a list of video provider subscriptions | No | Microservice.Content | Service Swagger (Microservice. |
| entitlement | GetUserRole | GET | /v2/users/{userId}/roles/{roleId} | Returns a user role. | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| bulkvaluations | GetValuationBatch | GET | /v2/valuations/batches/{batchId} | Returns a single valuationbatch | Yes | N/A | Public Swagger v2 |
| accountsecurity | GetVerify | GET | /membership/v2/emails/verify/{token} |  | No | Microservice.Membership | Service Swagger (Microservice. |
| video | GetVideo | GET | /v2/media/videos/{videoId} | Returns a given video. | No | Microservice.Content | Service Swagger (Microservice. |
| webhooks | GetWebhook | GET | /hub/webhooks/{id} | Returns a specific webhook subscription by id. | Yes | N/A | Public Swagger v2 |
| details | GetWidgetMarketingDetails | GET | /v1/widgets/marketing/details | Gets the marketing campaign widget Html template b | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| groups | GroupExists | HEAD | /v2/groups/{groupId} | Checks a given group exists. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activitytypes | HideActivityType | POST | /v2/activities/types/{typeId}/groups/{groupId | Hide an activity type for given group. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| households | HouseholdExists | HEAD | /v2/households/{householdId} | Determines if a given household exists or not. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activate | initiateactivation | POST | /v2/users/{userId}/activate | Creates an activation process for a given user. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| apps, beta | InstallPreviewApp | POST | /v2/apps/{appId}/installation | Installs a given app in preview | No | Microservice.AppD | Service Swagger (Microservice. |
| apps, beta | InstallPublishedApp | POST | /v2/published_apps/{appId}/installation | Installs a given published app | No | Microservice.AppD | Service Swagger (Microservice. |
| introducers | IntroducerExists | HEAD | /v2/introducers/{introducerId} | Checks that the introducer exists. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| introducerpaymentrules | IntroducerPaymentRuleExists | HEAD | /v2/introducerpaymentrules/{introducerPayment | Checks that the introducer payment rules exists. | Yes | N/A | Public Swagger v2 |
| leads | LeadDocumentExists | HEAD | /v2/leads/{leadId}/documents/{documentId} | Checks if required lead document exists | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| leads | LeadDocumentObjectExists | HEAD | /v2/leads/{leadId}/documents/{documentId}/obj | Checks if required lead document is uploaded. | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| leads | LeadExists | HEAD | /v2/leads/{leadId} | Check if the lead exists. | Yes | N/A | Public Swagger v2 |
| objectives | LeadObjectiveExists | HEAD | /v2/leads/{leadId}/objectives/{objectiveId} | Checks that a given lead objective exists | No | Microservice.Requirement | Service Swagger (Microservice. |
| quotes | LeadQuoteExists | HEAD | /v2/leads/{leadId}/quotes/{quoteId} | Checks that a quote exists for a given lead. | No | Microservice.Quotation | Service Swagger (Microservice. |
| quotes | LeadQuoteResultsExists | HEAD | /v2/leads/{leadId}/quotes/{quoteId}/results/{ | Checks that a quote result exists for a lead quote | No | Microservice.Quotation | Service Swagger (Microservice. |
| objectives | LinkClientObjectiveOpportunity | POST | /v2/clients/{clientId}/objectives/{objectiveI | Link opportunity to client objective. | No | Microservice.Requirement | Service Swagger (Microservice. |
| tasks | LinkFeeToTask | POST | /v2/activities/tasks/{taskId}/fees/{feeId}/li | Links the fee to given task | No | Monolith.Charging | Service Swagger (Monolith.Char |
| objectives | LinkLeadObjectiveOpportunity | POST | /v2/leads/{leadId}/objectives/{objectiveId}/o | Link opportunity to lead objective. | No | Microservice.Requirement | Service Swagger (Microservice. |
| 2fa | ListAccount2fasRecoverycodes | GET | /v2/accounts/{subject}/2fa/recoverycodes | Returns 2fa recovery codes for an user account. | No | Microservice.Membership | Service Swagger (Microservice. |
| addresses | ListAccountAddresses | GET | /v2/accounts/{accountId}/addresses | Returns a paged list of Address (AddressCollection | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| accounts | ListAccountDocuments | GET | /v2/accounts/{accountId}/documents | List all account documents | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| phones | ListAccountPhones | GET | /v2/accounts/{subject}/phones | Returns a list of phones for given account. | No | Microservice.Membership | Service Swagger (Microservice. |
| activitychecklistitems | ListActivitiyCheckLists | GET | /v2/activities/{activityId}/checklists/items | List all Check list items for an activity and a te | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activitycategories | ListActivityCategories | GET | /v2/activities/categories | Returns a list of activity categories. | No | Monolith.Crm | Service Swagger + Documentatio |
| activityoutcomes | ListActivityOutcomes | GET | /v2/activities/outcomes | Returns a list of activity outcomes. | No | Monolith.Crm | Service Swagger + Documentatio |
| activitypriorities | ListActivityPriorities | GET | /v2/activities/priorities | Returns a list of activity priorities. | No | Monolith.Crm | Service Swagger + Documentatio |
| activitytypeevents | ListActivitySystemEvents | GET | /v2/activities/types/events | Returns a list of activity type events | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activitytypes | ListActivityTypes | GET | /v2/activities/types | Returns a list of activity types. | No | Monolith.Crm | Service Swagger + Documentatio |
| fundingsource | ListAdviceReferenceData | GET | /v2/advice/referencedata | Allows an API consumer to retrieve advice referenc | No | Microservice.Recommend | Service Swagger (Microservice. |
| advicetemplates | ListAdviceTemplates | GET | /v2/advice/templates | List advice templates | No | Microservice.Recommend | Service Swagger (Microservice. |
| advicetemplates | ListAdviceTemplateSteps | GET | /v2/advice/templates/{templateId}/steps | List advice templates | No | Microservice.Recommend | Service Swagger (Microservice. |
| advicetemplates | ListAdviceTemplateStepTransitions | GET | /v2/advice/templates/{templateId}/steptransit | List advice template step transitions. | No | Microservice.Recommend | Service Swagger (Microservice. |
| addresses | ListAdviserAddresses | GET | /v2/advisers/{adviserId}/addresses | Returns a paged list of Address (AddressCollection | Yes | N/A | Public Swagger v2 |
| bandingtemplates | ListAdviserBandingtemplates | GET | /v2/advisers/{adviserId}/bandingtemplates | Get all banding templates for adviser | No | Monolith.Commission | Service Swagger (Monolith.Comm |
| contactdetails | ListAdviserContactdetails | GET | /v2/advisers/{adviserId}/contactdetails | Returns list of a adviser's contact details | Yes | N/A | Public Swagger v2 |
| documents | ListAdviserDocuments | GET | /v2/advisers/{adviserId}/documents | List all adviser documents | No | Monolith.Storage | Service Swagger + Documentatio |
| providercodes | ListAdviserProviderCodes | GET | /v2/productproviders/{providerId}/advisers/{a | Returns a list of Providers Codes allocated to an  | No | Microservice.ProviderCode | Service Swagger (Microservice. |
| advisers | ListAdvisers | GET | /v2/advisers | Returns a list of advisers. | Yes | N/A | Public Swagger v2 |
| agreementtemplates | ListAgreementTemplates | GET | /v2/agreements/communication-templates | Returns a list of agreement templates. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| alerts | ListAlertTypes | GET | /v2/alerttypes | Get a collection of alert types. | No | Microservice.Notification | Service Swagger (Microservice. |
| clients | ListAllClientsRelatedUser | GET | /v2/users/{userId}/Clients | Returns a list of quick search clients for the use | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| alternativeassets | ListAlternativeAssets | GET | /v2/alternativeassets | Get a List of Alternative Asset Securities. | No | Microservice.Security | Service Swagger (Microservice. |
| apps, beta | ListAppApiKeys | GET | /v2/apps/{appId}/apikeys | Returns API keys for a given app | No | Microservice.AppD | Service Swagger (Microservice. |
| apps, beta | ListAppCollaborators | GET | /v2/apps/{appId}/collaborators | Returns a list of collaborators for a given app | No | Microservice.AppD | Service Swagger (Microservice. |
| apps, beta | ListAppOauthClients | GET | /v2/apps/{appId}/oauth_clients | Returns a list of oauth clients for a given app | No | Microservice.AppD | Service Swagger (Microservice. |
| appointments | ListAppointment | GET | /v2/activities/appointments | Returns a list of appointments. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| apps, beta | ListApps | GET | /v2/apps | Returns a list of apps | No | Microservice.AppD | Service Swagger (Microservice. |
| apps, beta | ListAppSecrets | GET | /v2/apps/{appId}/secrets | Returns secrets for a given app | No | Microservice.AppD | Service Swagger (Microservice. |
| assetclasses | ListAssetClasses | GET | /v2/assetclasses | List Asset Classes based on Asset Class Ids. | No | Microservice.Security | Service Swagger (Microservice. |
| attitudetorisk | ListAtrSystemCategories | GET | /v2/atr/system_categories | Retrieves a list of the ATR system categories. | No | Monolith.Atr | Service Swagger + Documentatio |
| attitudetorisk | ListAtrTemplates | GET | /v2/atr_templates | Returns a list of ATR templates. | No | Monolith.Atr | Service Swagger (Monolith.Atr) |
| attitudetorisk | ListAtrTemplatesV2 | GET | /v2/attitudeToRisk/atr_templates | Retrieves a list of all the ATR templates or those | Yes | Monolith.Atr | Public Swagger v2 + Documentat |
| bandingtemplates | ListBandingTemplates | GET | /v2/advisers/{adviserId}/bandingtemplates | Returns a list of banding templates for an adviser | Yes | N/A | Public Swagger v2 |
| bankaccounts | ListBankAccounts | GET | /v2/clients/{clientId}/recommendations2/{reco | Lists bank accounts for a given proposal and clien | No | Microservice.Recommend | Service Swagger (Microservice. |
| emailerrorlog | ListBccErrorLogs | GET | /v2/emailerrorlog | Returns an EmailErrorLog collection. | No | Monolith.Bcc | Service Swagger (Monolith.Bcc) |
| beneficiaries | ListBeneficiariesForClient | GET | /v2/beneficiaries/clients/{clientId} | List beneficiaries by Client Id. | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| beneficiaries | ListBeneficiariesForPersonalContact | GET | /v2/beneficiaries/personalContacts/{personalC | List beneficiaries by Personal Contact Id. | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| brand | ListBrands | GET | /v1/brands | Get brand for either current user or non-authentic | No | Microservice.Brand | Service Swagger (Microservice. |
| bulk | ListBulkMessageAttachments | GET | /v1/messages/bulk/{bulkId}/attachments | Returns a list of attachments. | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| bulk | ListBulkMessageRecipients | GET | /v1/messages/bulk/{bulkId}/recipients | Returns a list of bulk message recipients. | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| bulk | ListBulkMessages | GET | /v1/messages/bulk | Returns a list of bulk messages. | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| bulkvideoshared | ListBulkVideoShared | GET | /v2/clients/media/videos/bulk/shared | Returns a list of bulk video shared. | No | Microservice.Content | Service Swagger (Microservice. |
| opportunities | ListCampaignChannels | GET | /v2/opportunities/campaignchannels | Returns a list of campaign channel for a given ten | Yes | N/A | Public Swagger v2 |
| recipients | ListCampaignRecipients | GET | /v1/campaigns/{campaignId}/recipients |  | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| campaigns | ListCampaigns | GET | /v1/campaigns | Get all campaign templates for the given tenant | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| recipients | ListCampaignsRecipients | PATCH | /v1/campaigns/{campaignId}/recipients |  | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| campaigntemplates | ListCampaigntemplates | GET | /v1/campaigntemplates |  | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| opportunities | ListCampaignTypes | GET | /v2/opportunities/campaigntypes | Returns a list of campaign types for a given tenan | Yes | N/A | Public Swagger v2 |
| cashreceipts | ListCashReceipts | GET | /v2/cashreceipts | Gets a Collection of Cash Receipts. | No | Monolith.Commission | Service Swagger (Monolith.Comm |
| categories | ListCategories | GET | /v1/categories | List template categories | No | Microservice.Author | Service Swagger (Microservice. |
| cff | ListCffSegments | GET | /v2/cff_segments | Returns CFF profile segments. | No | Microservice.CFF | Service Swagger (Microservice. |
| cff | ListCffSegmentsCompletions | GET | /v2/clients/{clientId}/cff_segments/completio | Returns a collection of completions for the specif | No | Microservice.CFF | Service Swagger (Microservice. |
| channelsubscriptions | ListChannelSubscriptions | GET | /v2/users/{userId}/channels/subscriptions | Lists channel subscriptions for a user. | No | Microservice.Notification | Service Swagger (Microservice. |
| checklistitems | ListCheckListItems | GET | /v2/checklists/items | List all Check list items. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| classificationcategories | ListClassificationCategories | GET | /v2/classificationcategories | List Classification Categories based on Classifica | No | Microservice.Security | Service Swagger (Microservice. |
| addresses | ListClientAddresses | GET | /v2/clients/{clientId}/addresses | Returns a list of addresses for a client | Yes | N/A | Public Swagger v2 |
| assets | ListClientAssets | GET | /v2/clients/{clientId}/assets | Returns a list of assets for the given client. | Yes | N/A | Public Swagger v2 |
| valuations | ListClientAssetValuations | GET | /v2/clients/{clientId}/assets/{assetId}/valua | Returns a list of valuations on a given client and | Yes | N/A | Public Swagger v2 |
| attitudetorisk | ListClientAtrAnswers | GET | /v2/clients/{clientId}/atr | Allows an API consumer to retrieve all the Attitud | No | Monolith.Atr | Service Swagger (Monolith.Atr) |
| attitudetorisk | ListClientAtrs | GET | /v2/clients/{clientId}/attitudeToRisk | Returns a list of the ATRs for a client. | Yes | Monolith.Atr | Public Swagger v2 + Documentat |
| beneficiaries | ListClientBeneficiaries | GET | /v2/clients/{clientId}/beneficiaries | Returns a BeneficiaryCollection, which is a collec | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| clientcategories | ListClientCategories | GET | /v2/clientcategories | Returns a list of client categories. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| changes | ListClientChanges | GET | /v1/client/{partyId}/changes | Return a paged collection of changes. | No | Microservice.ChangeNotifi | Service Swagger (Microservice. |
| contactdetails | ListClientContactdetails | GET | /v2/clients/{clientId}/contactdetails | Returns a list of contact details for a given clie | Yes | N/A | Public Swagger v2 |
| dependants, beta | ListClientDependants | GET | /v2/clients/{clientId}/dependants | Returns a list of dependants for a given client. | Yes | N/A | Public Swagger v2 |
| disclosures | ListClientDisclosures | GET | /v2/clients/{clientId}/disclosures | List disclosures for a given client. | No | Monolith.FactFind | Service Swagger (Monolith.Fact |
| documents | ListClientDocuments | GET | /v2/clients/{clientId}/documents | Returns a list of documents for a given client. | Yes | N/A | Public Swagger v2 |
| documents | ListClientDocumentsByFolder | GET | /v2/clients/{clientId}/documentfolders/{docum | Returns a list of client documents for given folde | Yes | N/A | Public Swagger v2 |
| dpa | ListClientDpaPolicyAgreements | GET | /v2/clients/{clientId}/dpa_agreements | Returns a list of client's DPA policy agreements. | Yes | N/A | Public Swagger v2 |
| attachments | ListClientEmailsAttachments | GET | /v1/clients/{clientId}/emails/{emailId}/attac |  | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| recipients | ListClientEmailsRecipients | GET | /v1/clients/{clientId}/emails/{emailId}/recip |  | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| employments | ListClientEmployments | GET | /v2/clients/{clientId}/employments | Get a list of employments for a given client. | Yes | N/A | Public Swagger v2 |
| expectation | ListClientExpectationsSummary | GET | /v2/clients/{clientId}/expectations/aggregate | Aggregates expectations by fee, commission and pla | No | Microservice.Expectation | Service Swagger (Microservice. |
| expenditures, beta | ListClientExpenditures | GET | /v2/clients/{clientId}/expenditures | Returns a list of expenditure records for a client | Yes | Monolith.FactFind | Public Swagger v2 + GitHub Mon |
| fees | ListClientFees | GET | /v2/clients/{clientId}/fees | Returns a list of fees for a client. | Yes | N/A | Public Swagger v2 |
| splits | ListClientFeeSplits | GET | /v2/clients/{clientId}/fees/{feeId}/splits | Returns a collection of client fee splits | Yes | N/A | Public Swagger v2 |
| statuses | ListClientFeeStatuses | GET | /v2/clients/{clientId}/fees/{feeId}/statuses | Returns fee status history collection. | Yes | N/A | Public Swagger v2 |
| incomes, beta | ListClientIncomes | GET | /v2/clients/{clientId}/incomes | Returns a list of incomes for a given client. | Yes | Monolith.FactFind | Public Swagger v2 + GitHub Mon |
| clients | ListClientInfo | GET | /v2/clients/info | Returns a list of clients information | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| clientinvestmentpreferenc | ListClientInvestmentPreferences | GET | /v2/clients/{clientId}/investmentPreferences | List client investment preferences | No | Microservice.Recommend | Service Swagger (Microservice. |
| messages | ListClientMessages | GET | /v1/clients/{clientId}/messages | Get a list of secure messages for the client. | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| notes | ListClientNotes | GET | /v2/clients/{clientId}/notes | Returns a list of notes for a client. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| objectives | ListClientObjectives | GET | /v2/clients/{clientId}/objectives | Returns a list of client objectives. | No | Microservice.Requirement | Service Swagger + Documentatio |
| opportunities | ListClientOpportunities | GET | /v2/clients/{clientId}/opportunities | Returns list of opportunities for a given client. | Yes | N/A | Public Swagger v2 |
| charges | ListClientPlanCharges | GET | /v2/clients/{clientId}/plans/{planId}/charges | Returns a list of charge for a client's plan. | Yes | N/A | Public Swagger v2 |
| contributions, beta | ListClientPlanContributions | GET | /v2/clients/{clientId}/plans/{planId}/contrib | Returns list of contributions for a given client a | Yes | N/A | Public Swagger v2 |
| fees | ListClientPlanFees | GET | /v2/clients/{clientId}/plans/{planId}/fees | Gets a collection of fee linked to the given plan. | Yes | N/A | Public Swagger v2 |
| holdings | ListClientPlanHoldings | GET | /v2/clients/{clientId}/plans/{planId}/holding | Returns a list of fund holdings for a given client | Yes | N/A | Public Swagger v2 |
| fundtransactions | ListClientPlanHoldingTransactions | GET | /v2/clients/{clientId}/plans/{planId}/holding | Returns a list of fund holdings transactions for a | Yes | N/A | Public Swagger v2 |
| plans | ListClientPlans | GET | /v2/clients/{clientId}/plans | Returns a list of plans for a given client. | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Mon |
| beneficiaries | ListClientPlansBeneficiaries | GET | /v2/clients/{clientId}/plans/{planId}/benefic | Returns a list of beneficiaries for a given client | Yes | N/A | Public Swagger v2 |
| livesassured | ListClientPlansLivesAssured | GET | /v2/clients/{clientId}/plans/{planId}/livesas | Returns a list of Lives Assured for the plan. | Yes | N/A | Public Swagger v2 |
| splits | ListClientPlanSplits | GET | /v2/clients/{clientId}/plans/{planId}/splits | Get splits for a plan. | No | Monolith.Commission | Service Swagger (Monolith.Comm |
| purposes | ListClientPlansPurposes | GET | /v2/clients/{clientId}/plans/{planId}/purpose | Returns a list of purposes for a given client and  | Yes | N/A | Public Swagger v2 |
| statuses | ListClientPlanStatuses | GET | /v2/clients/{clientId}/plans/{planId}/statuse | Returns a list of status histories for a given cli | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Mon |
| transactions, beta | ListClientPlanTransactions | GET | /v2/clients/{clientId}/plans/{planId}/transac | Returns a list of transactions for a client plan. | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Mon |
| summarybycategory | ListClientPlanTransactionSummaryByC | GET | /v2/clients/{clientId}/plans/{planId}/transac | Returns a summary of client plan transactions for  | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| valuations | ListClientPlanValuations | GET | /v2/clients/{clientId}/plans/{planId}/valuati | Returns a list of valuations for a given client an | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Mon |
| withdrawals, beta | ListClientPlanWithdrawals | GET | /v2/clients/{clientId}/plans/{planId}/withdra | Returns a list of withdrawal for a given client an | Yes | N/A | Public Swagger v2 |
| proofofidentity | ListClientProofOfIdentity | GET | /v2/clients/{clientId}/proofofidentity | Returns a list of proof of identity records for a  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| quotes, beta | ListClientQuoteResults | GET | /v2/clients/{clientId}/quotes/{quoteId}/resul | Returns a list of client quote results. | Yes | N/A | Public Swagger v2 |
| quotes, beta | ListClientQuotes | GET | /v2/clients/{clientId}/quotes | Returns a list of quotes. | Yes | N/A | Public Swagger v2 |
| recommendations | ListClientRecommendations | GET | /v2/clients/{clientId}/recommendations2 | Returns a list of client recommendations. | No | Microservice.Recommend | Service Swagger + Documentatio |
| relationships | ListClientRelationships | GET | /v2/clients/{clientId}/relationships | Returns a list of relationships for a given client | Yes | N/A | Public Swagger v2 |
| portfolioreport | ListClientReportBranding | GET | /v2/clients/{clientId}/reports/portfolio/bran | Returns a BrandingDocumentCollection. | No | Monolith.Report | Service Swagger (Monolith.Repo |
| requirements | ListClientRequirements | GET | /v2/clients/{clientId}/requirements | Returns a list of requirements. | No | Monolith.Crm | Service Swagger + Documentatio |
| clients | ListClients | GET | /v2/clients | Returns a list of clients. | Yes | N/A | Public Swagger v2 |
| contributions | ListClientsContributions | GET | /v2/clients/{clientId}/contributions | Gets a collection of client contributions | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| clients | ListClientSegments | GET | /v2/clients/client_segments | Retrieves a list of the available clients' segment | Yes | N/A | Public Swagger v2 |
| serviceactivities | ListClientServiceActivities | GET | /v2/clients/{clientId}/service-activities | List all service activities for a clients | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| servicecases | ListClientServicecases | GET | /v2/clients/{clientId}/servicecases | Returns a list of service cases for a given client | Yes | N/A | Public Swagger v2 |
| servicehistories | ListClientServiceHistory | GET | /v2/clients/{clientId}/servicehistory | Returns a list of client service history. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| clients | ListClientServiceStatuses | GET | /v2/clients/service_statuses | Retrieves a list of the available clients' service | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| shares | ListClientShares | GET | /v2/clients/{clientId}/shares | Returns a list of client notes that have been shar | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| holdings | ListClientsHoldings | GET | /v2/clients/{clientId}/holdings | Returns a list of plan's fund holdings across clie | No | Monolith.Portfolio | Service Swagger + Documentatio |
| splittemplates | ListClientSplitTemplates | GET | /v2/clients/{clientId}/splittemplates | Returns a list of split templates for the given cl | Yes | N/A | Public Swagger v2 |
| recent | ListClientsRecent | GET | /v2/clients/recent | Returns a list of recent clients for the user. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| searches | ListClientsSearch | GET | /v2/clients/search | Returns a list of quick search clients for the use | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| vulnerabilities | ListClientsVulnerabilities | GET | /v2/clients/vulnerabilities/current | Returns a list of current vulnerabilities for clie | Yes | N/A | Public Swagger v2 |
| withdrawals | ListClientsWithdrawals | GET | /v2/clients/{clientId}/withdrawals | Returns list of plan's Withdrawals | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| tags | ListClientTags | GET | /v2/clients/{clientId}/tags | Returns a list of tags for a given client. | Yes | N/A | Public Swagger v2 |
| transactions, beta | ListClientTransactions | GET | /v2/clients/{clientId}/transactions | Returns a list of transactions for a client. | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Mon |
| summarybycategory | ListClientTransactionSummaryByCateg | GET | /v2/clients/{clientId}/transactions/summaryby | Returns a summary of client transactions grouped b | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| timeseries | ListClientTransactionTimeSeries | GET | /v2/clients/{clientId}/transactions/timeserie | Returns a transaction history for a client as a ti | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| valuations | ListClientValuations | GET | /v2/clients/{clientId}/plans/valuations | Returns a list of plan valuations for a given clie | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| clientvideo | ListClientVideoInstances | GET | /v2/clients/{clientId}/media/videos/instances | Returns a list of client videos. | No | Microservice.Content | Service Swagger (Microservice. |
| clientvideo | ListClientVideos | GET | /v2/clients/{clientId}/media/videos | Returns a list of client videos. | No | Microservice.Content | Service Swagger (Microservice. |
| commissions | ListCommissions | GET | /v2/commissions | Returns a list of commissions. | Yes | N/A | Public Swagger v2 |
| countries | ListCountries | GET | /v2/countries | Returns a list of countries. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| creditnotes | ListCreditNotes | GET | /v2/fees/{feeId}/creditnotes | Return a list of credit notes for a given fee. | Yes | N/A | Public Swagger v2 |
| currencies | ListCurrencies | GET | /v2/currencies | Get a List of Currency Securities. A Id or a Curre | No | Microservice.Security | Service Swagger (Microservice. |
| currentprices | ListCurrentPrices | GET | /v2/currentprices | Get all current prices for the passed in securityI | No | Microservice.Security | Service Swagger (Microservice. |
| currentquotes | ListCurrentQuotes | GET | /v2/currentquotes | Get all current prices for the passed in securityI | No | Microservice.Security | Service Swagger (Microservice. |
| entitlement | ListDelegates | GET | /v2/delegate | Lists delegates for a user. | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| dividends | ListDividends | GET | /v2/dividends |  | No | Microservice.Security | Service Swagger (Microservice. |
| documentbinders | ListDocumentBinders | GET | /v2/clients/{clientId}/documentbinders | List all document binders | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| documents | ListDocumentConfigurations | GET | /v2/documents/configurations | Gets list of storage configurations | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| documentfolders | ListDocumentFolders | GET | /v2/clients/{clientId}/documentfolders | Returns a list of document folders. | Yes | N/A | Public Swagger v2 |
| document | ListDocuments | GET | /v2/clients/{clientId}/plans/{planId}/documen | Returns a list of PlanDocument Collection | No | Microservice.ProviderInte | Service Swagger (Microservice. |
| domains | ListDomains | GET | /v1/domains |  | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| dpa | ListDpaPolicies | GET | /v2/dpa_policies | Returns a list of DPA policies. | Yes | N/A | Public Swagger v2 |
| emails | ListEmails | GET | /v2/activities/emails | Returns a list of emails. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| etfs | ListEtfs | GET | /v2/etfs | Get a List of ETF Securities based on Security Ids | No | Microservice.Security | Service Swagger (Microservice. |
| subscribe | ListEventsSubscribe | GET | /v1/events/subscribe | Get a list of subscriptions for the party. | No | Microservice.ChangeNotifi | Service Swagger (Microservice. |
| exchanges | ListExchanges | GET | /v2/exchanges | List Exchanges based on Exchange Codes. | No | Microservice.Security | Service Swagger (Microservice. |
| securities | ListExistingSecurities | POST | /v2/securities/exist | Returns a List of Security Ids and if they exist i | No | Microservice.Security | Service Swagger (Microservice. |
| adjustmentsrules | ListExpectationAdjustmentRules | GET | /v2/expectations/adjustmentsrules | Gets a collection of expectation adjustment rules. | No | Microservice.Expectation | Service Swagger (Microservice. |
| expectation | ListExpectationBreakdowns | GET | /v2/expectations/{expectationId}/breakdowns | Returns a list of expectation breakdowns related t | No | Microservice.Expectation | Service Swagger (Microservice. |
| expectation | ListExpectationBreakdownsByClient | GET | /v2/clients/{clientId}/expectations/{expectat | Returns a list of expectation breakdowns related t | No | Microservice.Expectation | Service Swagger (Microservice. |
| expectation | ListExpectations | GET | /v2/expectations | Returns a list of expectations. | No | Microservice.Expectation | Service Swagger (Microservice. |
| expenditures | ListExpenditureCategories | GET | /v2/expenditures/refdata/categories | Retrieves List of all/matched categories based on  | No | Monolith.FactFind | Service Swagger (Monolith.Fact |
| expenditures | ListExpenditureCategoryGroups | GET | /v2/expenditures/refdata/categorygroups | Returns a list of expenditure category groups. | No | Monolith.FactFind | Service Swagger (Monolith.Fact |
| fees | ListFee | GET | /v2/fees | Returns a list of fees. | Yes | N/A | Public Swagger v2 |
| feemodels | ListFeeModels | GET | /v2/feemodels | Returns a list of fee models. | Yes | N/A | Public Swagger v2 |
| statuses | ListFeeStatuses | GET | /v2/fees/{feeId}/statuses | Returns fee status history collection. | Yes | N/A | Public Swagger v2 |
| fixedincomes | ListFixedIncomes | GET | /v2/fixedincomes | Get a List of Fixed Income Securities based on Sec | No | Microservice.Security | Service Swagger (Microservice. |
| fundbenchmarks | ListFundBenchmarks | GET | /v2/fundbenchmarks | Returns a list of funds benchmarks. | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| fundingsource | ListFundingSource | GET | /v2/clients/{clientId}/servicecases/{serviceC | Allows an API consumer to retrieve a funding sourc | No | Microservice.Recommend | Service Swagger (Microservice. |
| fundprices | ListFundPrices | GET | /v2/funds/{fundId}/prices | Returns a list of fund prices for a given fund. | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Mon |
| fundproviders | ListFundproviders | GET | /v2/fundproviders | Returns a list of fund providers. | Yes | N/A | Public Swagger v2 |
| funds | ListFunds | GET | /v2/funds | Returns a list of funds (feed and non-feed funds)  | Yes | N/A | Public Swagger v2 |
| fundsectors | ListFundsectors | GET | /v2/fundsectors | Returns a list of fund sectors. | Yes | N/A | Public Swagger v2 |
| fundprices | ListFundsPrices | GET | /v2/funds/prices | Returns a list of funds prices | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| plantypes | ListGatedPlanTypes | GET | /v2/plantypes/adviser/{adviserId} | Returns a list of gated plan types based on advise | Yes | N/A | Public Swagger v2 |
| advisers | ListGatedPlanTypesByAdviserId | GET | /v2/advisers/{adviserId}/planTypes | Returns a list of gated plan types based on advise | Yes | N/A | Public Swagger v2 |
| allocations | ListGoalAllocation | GET | /v2/objectives/{objectiveId}/allocations | List goal allocations. | No | Microservice.Requirement | Service Swagger (Microservice. |
| addresses | ListGroupAddresses | GET | /v2/groups/{groupId}/addresses | Returns a paged list of Address (AddressCollection | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| brands | ListGroupBrands | GET | /v1/groups/{groupId}/brands | Lists all brands for the specified group. | No | Microservice.Brand | Service Swagger (Microservice. |
| groups | ListGroups | GET | /v2/groups | Returns a list of groups. | No | Monolith.Crm | Service Swagger + Documentatio |
| households | ListHouseholds | GET | /v2/households | Retrieves a list of households. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| households | ListHouseholdTags | GET | /v2/households/tags | Retrieves a list of the tags associated with house | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| identities | ListIdentities | GET | /v1/identities |  | No | Microservice.Email | Service Swagger (Microservice. |
| incomestatements, beta | ListIncomeStatementItems | GET | /v2/incomestatements/{incomeStatementId}/item | Returns a list of items for a given income stateme | Yes | N/A | Public Swagger v2 |
| incomestatements, beta | ListIncomeStatements | GET | /v2/incomestatements | Returns a list of income statements. | Yes | N/A | Public Swagger v2 |
| apps, beta | ListInstalledAppGroupSettings | GET | /v2/installed_apps/{appId}/group_settings | Returns a list of group settings for a given insta | Yes | N/A | Public Swagger v2 |
| apps, beta | ListInstalledApps | GET | /v2/installed_apps | Returns a list of installed apps | Yes | N/A | Public Swagger v2 |
| apps, beta | ListInstalledAppUserSettings | GET | /v2/installed_apps/{appId}/user_settings | Returns a lists of user settings for a given insta | Yes | N/A | Public Swagger v2 |
| instances | ListInstances | GET | /v1/instances |  | No | Microservice.Workflow | Service Swagger (Microservice. |
| history | ListInstancesHistory | GET | /v1/instances/{instanceId}/history |  | No | Microservice.Workflow | Service Swagger (Microservice. |
| steps | ListInstancesSteps | GET | /v1/instances/{instanceId}/steps |  | No | Microservice.Workflow | Service Swagger (Microservice. |
| addresses | ListIntroducerAddresses | GET | /v2/introducers/{introducerId}/addresses | Returns a paged list of Address (AddressCollection | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| introducerpaymentrules | ListIntroducerPaymentRules | GET | /v2/introducerpaymentrules | Returns a collection of introducer payment rules. | Yes | N/A | Public Swagger v2 |
| introducers | ListIntroducers | GET | /v2/introducers | Returns a list of introducers. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| investmentpreferencequest | ListInvestmentPreferenceQuestions | GET | /v2/investmentpreferences/questions | List investment preference questions | No | Microservice.Recommend | Service Swagger (Microservice. |
| entitlement, beta | ListIPAddresses | GET | /v2/tenants/{tenantId}/IPAddress |  | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| issuers | ListIssuers | GET | /v2/issuers | Get a List of Issuers based on Issuer Ids or Secur | No | Microservice.Security | Service Swagger (Microservice. |
| issuers | ListIssuersByIds | GET | /v2/issuers/byids | Get a List of Issuers based on Issuer Ids. | No | Microservice.Security | Service Swagger (Microservice. |
| issuers | ListIssuersBySourceReferences | GET | /v2/issuers/bysourcereferences | Get a Source Reference based on Source and Source  | No | Microservice.Security | Service Swagger (Microservice. |
| journeytypes | ListJourneyTypes | GET | /v2/advice/journeytypes | List journey types | No | Microservice.Recommend | Service Swagger (Microservice. |
| jumplinks | ListJumplinks | GET | /v2/jumplinks |  | No | Microservice.Membership | Service Swagger (Microservice. |
| addresses | ListLeadAddresses | GET | /v2/leads/{leadId}/addresses | Returns a paged list of Address (AddressCollection | Yes | N/A | Public Swagger v2 |
| contactdetails | ListLeadContactdetails | GET | /v2/leads/{leadId}/contactdetails | Returns a list of contact details for a given lead | Yes | N/A | Public Swagger v2 |
| leads | ListLeadDocuments | GET | /v2/leads/{leadId}/documents | List all lead documents | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| objectives | ListLeadObjectives | GET | /v2/leads/{leadId}/objectives | Returns a list of lead objectives. | No | Microservice.Requirement | Service Swagger (Microservice. |
| opportunities | ListLeadOpportunities | GET | /v2/leads/{leadId}/opportunities | Returns a list of opportunity documents for a give | Yes | N/A | Public Swagger v2 |
| quotes | ListLeadQuoteResults | GET | /v2/leads/{leadId}/quotes/{quoteId}/results | Returns a list of lead quote results. | No | Microservice.Quotation | Service Swagger (Microservice. |
| quotes | ListLeadQuotes | GET | /v2/leads/{leadId}/quotes | Returns a list of quotes. | No | Microservice.Quotation | Service Swagger (Microservice. |
| relationships | ListLeadRelationships | GET | /v2/leads/{leadId}/relationships | Returns a list of relationships for a given lead. | Yes | N/A | Public Swagger v2 |
| leads | ListLeads | GET | /v2/leads | Returns a list of leads. | Yes | N/A | Public Swagger v2 |
| leads | ListLeadStatuses | GET | /v2/leads/statuses | Get a list of leadStatus | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tags | ListLeadTags | GET | /v2/leads/{leadId}/tags | Returns a list of tags for a given lead. | Yes | N/A | Public Swagger v2 |
| legacyapps | ListLegacyApps | GET | /v2/users/{userId}/legacyapps | Returns a list of apps with permission for the use | No | Monolith.Crm | Service Swagger + Documentatio |
| lifecycles, beta | ListLifecycles | GET | /v2/lifecycles | Returns a list of lifecycles. | Yes | N/A | Public Swagger v2 |
| lifecycles | ListLifecycleStatuses | GET | /v2/lifecycles/statuses | Returns a list of available lifecycle statuses | Yes | N/A | Public Swagger v2 |
| lifecycles | ListLifecycleTransitions | GET | /v2/lifecycles/{lifecycleId}/transitions | Returns a list of transitions for a given lifecycl | Yes | N/A | Public Swagger v2 |
| attachments | ListMessageAttachments | GET | /v1/messages/{secureMessageId}/attachments | List attachments for a specific secure messages. | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| recipients | ListMessageRecipients | GET | /v1/messages/{secureMessageId}/recipients | Gets all recipients for the specified oData query  | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| messages | ListMessages | GET | /v1/messages | Get secure messages for the specified filter. | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| instances | ListMigratesInstances | GET | /v1/migrate/instances |  | No | Microservice.Workflow | Service Swagger (Microservice. |
| instancesteps | ListMigratesInstancesteps | GET | /v1/migrate/instancesteps |  | No | Microservice.Workflow | Service Swagger (Microservice. |
| templates | ListMigratesTemplates | GET | /v1/migrate/templates |  | No | Microservice.Workflow | Service Swagger (Microservice. |
| plans | ListModelplans | GET | /v2/modelplans | Gets a collection of modelplans for a tenant | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| models | ListModels | GET | /v2/models | Returns a list of portfolio models. | Yes | N/A | Public Swagger v2 |
| productproviders | ListMultiTiedConfigProductProvider | GET | /v2/productproviders/adviser/{adviserPartyId} | Returns a list of product providers based on multi | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| nationalities | ListNationalities | GET | /v2/nationalities | Returns a list of nationalities. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| notifications | ListNotifications | GET | /v2/user/notifications | Get the user's unread notifications | No | Monolith.ContractEnquiry | Service Swagger (Monolith.Cont |
| oauthclients | ListOauthClients | GET | /v2/oauth_clients |  | No | Microservice.Identity | Service Swagger (Microservice. |
| objectivecategories | ListObjectiveCategory | GET | /v2/objective/categories | List all objective categories. | No | Microservice.Requirement | Service Swagger (Microservice. |
| entitlement | ListOperations | GET | /v2/{application}/operations | Returns a list of operations for a given applicati | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| opportunities | ListOpportunityCampaigns | GET | /v2/opportunities/campaigns | Returns a list of the Opportunity campaigns for a  | Yes | N/A | Public Swagger v2 |
| opportunities | ListOpportunityPropositions | GET | /v2/opportunities/propositions | Returns a list of the opportunity propositions for | Yes | N/A | Public Swagger v2 |
| opportunities | ListOpportunityStatuses | GET | /v2/opportunities/statuses | Returns a list of opportunity statuses for a given | Yes | N/A | Public Swagger v2 |
| opportunities | ListOpportunityTypes | GET | /v2/opportunities/types | Returns a list of the opportunity types for a tena | Yes | N/A | Public Swagger v2 |
| outputs | ListOutputs | GET | /v1/output | List generated documents | No | Microservice.Author | Service Swagger (Microservice. |
| addresses | ListPersonalContactAddresses | GET | /v2/clients/{clientId}/personalcontacts/{pers | List addresses for a given personal contact. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| contactdetails | ListPersonalContactDetails | GET | /v2/clients/{clientId}/personalcontacts/{pers | List contact details for a given personal contact | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| relationships | ListPersonalContactRelationships | GET | /v2/clients/{clientId}/personalcontacts/{pers | List relationships for a given personal contact | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| personalcontacts | ListPersonalContacts | GET | /v2/clients/{clientId}/personalContacts | List personal contacts for a given client. | Yes | N/A | Public Swagger v2 |
| planapplicationdocumentco | ListPlanApplicationDocumentConfigs | POST | /v2/applications/documentconfigs | Gets all the document templates and managed docume | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| planapplicationdocument | ListPlanApplicationDocuments | GET | /v2/plans/{planId}/applications/{applicationI | Returns a list of Plan Application Documents. | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| planapplicationdocumentte | ListPlanApplicationDocumentTemplate | GET | /v2/applications/doctemplates | Returns a list of Plan Application Document Templa | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| planapplicationdocumentup | ListPlanApplicationDocumentUploads | GET | /v2/applications/docuploads | Returns a list of Plan Application Document Upload | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| planapplicationenvelope | ListPlanApplicationEnvelopes | GET | /v2/plans/{planId}/applications/envelopes | Get all plan application envelopes. | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| planapplicationmanageddoc | ListPlanApplicationManagedDocuments | GET | /v2/applications/manageddocuments | Returns a list of Plan Application Managed Documen | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| planapplications | ListPlanApplications | GET | /v2/plans/{planId}/applications | Returns a list of Plan Applications. | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| planapplicationstatusupda | ListPlanApplicationStatusHistory | GET | /v2/plans/{planId}/applications/{applicationI | Returns a list of Plan Application Statuses. | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| commissions | ListPlanCommissions | GET | /v2/clients/{clientId}/plans/{planId}/commiss | Return a list of commissions for a given plan. | Yes | N/A | Public Swagger v2 |
| contacts | ListPlanContacts | GET | /v2/clients/{clientId}/plans/{planId}/contact | Gets a collection of Plan's contacts | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| statuses | ListPlanFeeStatuses | GET | /v2/clients/{clientId}/plans/{planId}/fees/{f | Returns fee status history collection. | Yes | N/A | Public Swagger v2 |
| planpurposes | ListPlanPurposes | GET | /v2/planpurposes | Returns a list of plan purposes for a specific ten | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| recommendations | ListPlanRecommendationProposals | GET | /v2/plans/{planId}/recommendations/proposals | Lists recommendation proposals. | No | Microservice.Recommend | Service Swagger (Microservice. |
| plans | ListPlans | GET | /v2/plans | Gets a Collection of Plans. | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| money movement fees | ListPlanSecurityTransferInstruction | GET | /v2/plans/{planId}/securityTransferInstructio | Gets a collection of security transfer instruction | No | Monolith.Charging | Service Swagger (Monolith.Char |
| splits | ListPlanSplits | GET | /v2/clients/{clientId}/plans/{planId}/splits | Returns a collection of plan splits | Yes | N/A | Public Swagger v2 |
| tags | ListPlanTags | GET | /v2/plans/tags | Gets a collection of Tag Names | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| money movement fees | ListPlanTransferInstructionFees | GET | /v2/plans/{planId}/transferInstructionFees | Gets a collection of transfer instruction fees lin | No | Monolith.Charging | Service Swagger (Monolith.Char |
| lifecycles, beta | ListPlanTypeLifecycles | GET | /v2/plantypes/{name}/lifecycles | Retrieves a list of lifecycles associated with the | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| plantypes | ListPlantypes | GET | /v2/plantypes | Returns a list of plan types. | Yes | N/A | Public Swagger v2 |
| plans | ListPlanUsers | GET | /v2/plans/{planId}/users | Get a collection of plan users. | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| formats | ListPluginsFormats | GET | /v1/plugin/formats | Get formatting configuration | No | Microservice.Author | Service Swagger (Microservice. |
| poolfactor | ListPoolFactor | GET | /v2/poolfactors | Get all pool factors for the passed in securityIds | No | Microservice.Security | Service Swagger (Microservice. |
| addresses | ListProductproviderAddresses | GET | /v2/productproviders/{productProviderId}/addr | Returns a paged list of Address (AddressCollection | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| providerdocuments | ListProductProviderDocumentCategori | GET | /v2/providerdocuments/categories | List product provider document categories. | No | Microservice.ProviderDocu | Service Swagger (Microservice. |
| providerdocuments | ListProductProviderDocuments | GET | /v2/clients/{clientId}/plans/{planId}/provide | List product provider documents. | No | Microservice.ProviderDocu | Service Swagger (Microservice. |
| productproviders | ListProductProviderPrograms | GET | /v2/productproviders/programs | Returns a list of Product Provider Programs. | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| productproviders | ListProductproviders | GET | /v2/productproviders | Returns a list of product providers. | Yes | N/A | Public Swagger v2 |
| advisers | ListProductProvidersByAdviserId | GET | /v2/advisers/{adviserId}/productProviders | Returns a list of product providers based on multi | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| productproviders | ListProductProviderWrapperConfigs | GET | /v2/productproviders/{productProviderId}/wrap | Gets a collection of wrapper configs | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| programs | ListProgramPlansInvalid | GET | /v2/programs/{programId}/plans/invalid | Return plans that have invalid program plantypes | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| programs | ListPrograms | GET | /v2/programs | Get all programs. | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| search | ListPropertyAddressesSearch | GET | /v2/properties/addresses/search | Searches addresses by the specified query. | No | Microservice.PropertyProv | Service Swagger (Microservice. |
| proposalbeneficiary | ListProposalBeneficiaries | GET | /v2/clients/{clientId}/recommendations2/{reco | Lists beneficiaries for a given proposal and clien | No | Microservice.Recommend | Service Swagger (Microservice. |
| prospectuses | ListProspectuses | GET | /v2/prospectuses | List Prospectus based on Prospectus Ids. | No | Microservice.Security | Service Swagger (Microservice. |
| attitudetorisk | ListProviderAtrTemplates | GET | /v2/attitudeToRisk/apps/{appId}/atr_templates | Returns a list of the ATR template details associa | Yes | Monolith.Atr | Public Swagger v2 + Documentat |
| providercodes | ListProviderCodeCombos | GET | /v2/productproviders/{providerId}/codes/combo | Computes and returns the list of Provider Code tha | No | Microservice.ProviderCode | Service Swagger (Microservice. |
| providercodes | ListProviderCodeConfigs | GET | /v2/productproviders/{providerId}/codes/confi | Returns a list of Providers Codes issued by a Prov | No | Microservice.ProviderCode | Service Swagger (Microservice. |
| providercodes | ListProviderCodes | GET | /v2/productproviders/{providerId}/codes | Returns a list of Providers Codes issued by a Prov | No | Microservice.ProviderCode | Service Swagger (Microservice. |
| providercodes | ListProviderCodesSystem | GET | /v2/productproviders/{providerId}/codes/syste | For system reach only. Returns a list of Providers | No | Microservice.ProviderCode | Service Swagger (Microservice. |
| providertemplates | ListProviderTemplates | GET | /v1/provider_templates | List provider templates | No | Microservice.Author | Service Swagger (Microservice. |
| apps, beta | ListPublishedApps | GET | /v2/published_apps | Returns a list of published apps | No | Microservice.AppD | Service Swagger (Microservice. |
| customquestions | ListQuestions | GET | /v2/questions | Retrieves a list of questions associated with the  | Yes | N/A | Public Swagger v2 |
| customquestions | ListQuestionsAnswers | GET | /v2/clients/{clientId}/questions | Returns a list of the answers a client has given t | Yes | N/A | Public Swagger v2 |
| dashboardpermission | ListQuicksightDashboardPermissions | GET | /v2/quicksight/dashboards/{dashboardId}/permi | Lists permissions for quicksight dashboard. | No | Microservice.Quicksight | Service Swagger (Microservice. |
| dashboard | ListQuicksightDashboards | GET | /v2/quicksight/dashboards | Gets a collection of dashboards. | No | Microservice.Quicksight | Service Swagger (Microservice. |
| dashboardfavourite | ListQuicksightDashboardsFavourite | GET | /v2/users/{userId}/favourites/dashboards | Gets a collection of dashboard favourites. | No | Microservice.Quicksight | Service Swagger (Microservice. |
| dashboardusagehistory | ListQuicksightDashboardsUsageHistor | GET | /v2/users/{userId}/dashboards/usage_history | Gets a collection of dashboard usage history. | No | Microservice.Quicksight | Service Swagger (Microservice. |
| configuration | ListQuicksightFolderConfiguration | GET | /v2/quicksight/configurations/folders | Gets a collection of quicksight folder configurati | No | Microservice.Quicksight | Service Swagger (Microservice. |
| configuration | ListQuicksightGroupConfiguration | GET | /v2/quicksight/configurations/groups | Gets list of quicksight group configuration. | No | Microservice.Quicksight | Service Swagger (Microservice. |
| reportgroup | ListQuicksightGroups | GET | /v2/quicksight/reportgroups | Gets a collection of quicksight groups. | No | Microservice.Quicksight | Service Swagger (Microservice. |
| reportgrouptorole | ListQuicksightGroupToIoRole | GET | /v2/roles/{roleId}/reportgroups | Gets a collection of report groups related to a ro | No | Microservice.Quicksight | Service Swagger (Microservice. |
| reportgroupsuser | ListQuicksightGroupUsers | GET | /v2/quicksight/reportgroups/{groupId}/users | Gets a collection of users in a report group. | No | Microservice.Quicksight | Service Swagger (Microservice. |
| folder | ListQuicksightSharedFolder | GET | /v2/quicksight/folders | Gets a collection of folders. | No | Microservice.Quicksight | Service Swagger (Microservice. |
| folderpermission | ListQuicksightSharedFolderPermissio | GET | /v2/quicksight/folders/{folderId}/permissions | Lists permissions for quicksight shared folder | No | Microservice.Quicksight | Service Swagger (Microservice. |
| quotes | ListQuotes | GET | /v2/quotes | Get all prices for the passed in securityIds on th | No | Microservice.Security | Service Swagger (Microservice. |
| quotes | ListQuotesPricedOn | GET | /v2/quotes/{pricedOn} | Get all prices for the passed in securityIds where | No | Microservice.Security | Service Swagger (Microservice. |
| recommendations | ListRecommendationProposals | GET | /v2/clients/{clientId}/recommendations2/{reco | Lists recommendation proposals. | No | Microservice.Recommend | Service Swagger + Documentatio |
| planapplicationrefstatus | ListRefApplicationStatuses | GET | /v2/applications/referencestatus | Returns a list of Application Reference Statuses. | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| refdata | ListRefdata | GET | /v2/incomes/refdata/{type} | Get the list of Reference Data. | No | Monolith.FactFind | Service Swagger (Monolith.Fact |
| regions | ListRegions | GET | /v2/regions | List Regions based Region Ids. | No | Microservice.Security | Service Swagger (Microservice. |
| relationshiptypes | ListRelationshiptypes | GET | /v2/relationshiptypes | Returns a list of relationship types. | Yes | N/A | Public Swagger v2 |
| reportartifact | ListReportArtifact | GET | /v2/report/artifacts | List artifacts. | No | Monolith.Report | Service Swagger (Monolith.Repo |
| reportbranding | ListReportBranding | GET | /v2/report/branding | Returns a ReportBrandingDocumentCollection. | No | Monolith.Report | Service Swagger (Monolith.Repo |
| reviews | ListReviews | GET | /v1/reviews | List reviews | No | Microservice.Author | Service Swagger (Microservice. |
| riskprofiles | ListRiskProfiles | GET | /v2/riskprofiles | Retrieves a list of all the risk profiles or those | No | Monolith.Atr | Service Swagger (Monolith.Atr) |
| entitlement | ListRoleOperations | GET | /v2/roles/{roleId}/operations | Returns a list of role operations. | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| entitlement | ListRoles | GET | /v2/roles | Returns a list of roles. | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| sectors | ListSectors | GET | /v2/sectors | List Sector based on Sector Ids. | No | Microservice.Security | Service Swagger (Microservice. |
| securities | ListSecurities | GET | /v2/securities | Gets a List of Securities based on SecurityIds, Id | No | Microservice.Security | Service Swagger (Microservice. |
| securities | ListSecuritiesByIdentifierSymbols | GET | /v2/securities/byidentifiersymbols | Gets a List Securities based on Identifier Type, I | No | Microservice.Security | Service Swagger (Microservice. |
| securities | ListSecuritiesByIds | GET | /v2/securities/byids | Get a List of Securities based on SecurityIds | No | Microservice.Security | Service Swagger (Microservice. |
| securities | ListSecuritiesBySourceReferences | GET | /v2/securities/bysourcereferences | Gets a List Securities based on Sources and Source | No | Microservice.Security | Service Swagger (Microservice. |
| securities | ListSecuritiesV2 | GET | /v2/securitiesV2 | Gets a List of Securities based on security filter | No | Microservice.Security | Service Swagger (Microservice. |
| dividends | ListSecurityDividends | GET | /v2/securities/{securityId}/dividends |  | No | Microservice.Security | Service Swagger (Microservice. |
| securitygroups | ListSecurityGroupGroupSecurities | GET | /v2/securitygroups/{securityGroupId}/groupsec | Get a Security GroupGroup Securities by filters. | No | Microservice.Security | Service Swagger (Microservice. |
| securitygroups | ListSecurityGroups | GET | /v2/securitygroups | Get a List of Security Groups. | No | Microservice.Security | Service Swagger (Microservice. |
| securitygroups | ListSecurityGroupsSecurities | GET | /v2/securitygroups/securities | Get a Security Group Securities by filters. | No | Microservice.Security | Service Swagger (Microservice. |
| securitytypes | ListSecurityTypes | GET | /v2/securitytypes | Get a List of Security Types. | No | Microservice.Security | Service Swagger (Microservice. |
| serviceactivities | ListServiceActivities | GET | /v2/clients/service-activities | List all service activities for all clients | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| servicecasecategories | ListServiceCaseCategories | GET | /v2/servicecases/categories | List all serviceCases categories. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| recommendations | ListServiceCaseRecommendations | GET | /v2/servicecases/{serviceCaseId}/recommendati | Returns a list of service case recommendations. | No | Microservice.Recommend | Service Swagger (Microservice. |
| servicecasestatus | ListServiceCaseStatuses | GET | /v2/servicecases/statuses | Returns a list of ServiceCase statuses. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| splits | ListSplits | GET | /v2/splits | Returns a collection of splits | Yes | N/A | Public Swagger v2 |
| splittemplates | ListSplitTemplates | GET | /v2/advisers/{adviserId}/splittemplates | Returns a list of split templates for the given ad | Yes | N/A | Public Swagger v2 |
| stocks | ListStocks | GET | /v2/stocks | Delete a Security based on Security Id. | No | Microservice.Security | Service Swagger (Microservice. |
| entitlement, beta | ListSupportIPAddresses | GET | /v2/support/IPAddress | Returns a list of support IP addresses. | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| tags | ListTags | GET | /v2/tags | Returns a list of tags for the client and lead res | Yes | N/A | Public Swagger v2 |
| tasks | ListTask | GET | /v2/activities/tasks | Returns a list of tasks. | No | Monolith.Crm | Service Swagger + Documentatio |
| tasks | ListTaskFees | GET | /v2/activities/tasks/{taskId}/fees | Gets a collection of fees linked to the given task | No | Monolith.Charging | Service Swagger (Monolith.Char |
| tasknotes | ListTaskNotes | GET | /v2/activities/tasks/{taskId}/notes | Returns a list of task notes. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| templatecategories | ListTemplatecategories | GET | /v1/templatecategories | Get all campaign templates for the given tenant | No | Microservice.Workflow | Service Swagger (Microservice. |
| detaileds | ListTemplateDetaileds | GET | /v1/templates/detailed | Get all campaign templates for the given tenant wi | No | Microservice.Workflow | Service Swagger (Microservice. |
| email | ListTemplatelayoutsEmail | GET | /v1/templatelayouts/email |  | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| templates | ListTemplates | GET | /v1/templates | List templates | No | Microservice.Author | Service Swagger (Microservice. |
| roles | ListTemplatesRoles | GET | /v1/templates/{templateId}/roles | List template roles | No | Microservice.Workflow | Service Swagger (Microservice. |
| steps | ListTemplateSteps | GET | /v1/templates/{templateId}/steps | List template steps | No | Microservice.Workflow | Service Swagger (Microservice. |
| triggers | ListTemplatesTriggers | GET | /v1/templates/{templateId}/triggers | List template roles | No | Microservice.Workflow | Service Swagger (Microservice. |
| versions | ListTemplateVersions | GET | /v1/templates/{templateId}/versions | List template versions for a specified template | No | Microservice.Author | Service Swagger (Microservice. |
| prompts | ListTemplateVersionsPrompts | GET | /v1/templates/{templateId}/versions/{versionI |  | No | Microservice.Author | Service Swagger (Microservice. |
| variables | ListTemplateVersionsVariables | GET | /v1/templates/{templateId}/versions/{versionI |  | No | Microservice.Author | Service Swagger (Microservice. |
| tenantcategories | ListTenantCategories | GET | /v2/tenantcategories |  | No | Microservice.Security | Service Swagger (Microservice. |
| tenants | ListTenantDocuments | GET | /v2/tenants | Get a paged list of all tenants. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| disclosures | ListTenantDocumentTypes | GET | /v2/disclosures/documentTypes | List Document Types for a tenant | No | Monolith.FactFind | Service Swagger (Monolith.Fact |
| entitlement | ListTenantLegacyAppLicences | GET | /v2/tenants/{tenantId}/LegacyApplicences | Returns tenant application licences. | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| entitlement | ListTenantPreferenceDetails | GET | /v2/tenants/{tenantId}/preferences | Returns a list of tenant preference details. | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| attitudetorisk | ListTenantProviderAtrTemplates | GET | /v2/installed_apps/atr_templates | Retrieves a list of the ATR templates from the thi | Yes | Monolith.Atr | Public Swagger v2 + Documentat |
| recommendations | ListTenantRecommendationCategories | GET | /v2/recommendations2/categories | Returns a paged collection of recommendation categ | No | Microservice.Recommend | Service Swagger + Documentatio |
| recommendations | ListTenantRecommendationSubCategori | GET | /v2/recommendations2/subcategories | Returns a paged collection of recommendation subca | No | Microservice.Recommend | Service Swagger + Documentatio |
| preferences | ListTenantsPreferences | GET | /v2/tenants/{tenantId}/preferences | List tenant preferences. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| test only | ListTests | GET | /v2/test |  | No | Microservice.MoneyMovemen | Service Swagger (Microservice. |
| timeentries | ListTimeEntries | GET | /v2/time_entries | Returns a list of time entries. | Yes | N/A | Public Swagger v2 |
| addresses | ListTnccoachAddresses | GET | /v2/tnc_coaches/{tnc_coachId}/addresses | Returns a paged list of Address (AddressCollection | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| transfereligibility | ListTransferEligibility | GET | /v2/transfereligibility/provider/{targetProdu | Returns a list of all eligible plan types for a gi | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| unmatchedplans | ListUnmatchedPlans | GET | /v2/plans/unmatched | Gets a Collection of unmatched Plans. | Yes | N/A | Public Swagger v2 |
| entitlement, beta | ListUserActivity | GET | /v2/users/{userId}/activity | Returns a list of user activities. | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| alerts | ListUserAlertSubscriptions | GET | /v2/users/{userId}/alertsubscriptions | Returns a list of alert subscriptions for a user. | No | Microservice.Notification | Service Swagger (Microservice. |
| userdiaryclassifications | ListUserDiaryClassification | GET | /v2/diary/users/{userId}/classifications | Returns a list of user diary classifications. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| emails | ListUserEmails | GET | /v2/users/{userId}/emails | Returns a list of emails for given user. | No | Microservice.Membership | Service Swagger (Microservice. |
| entitlement | ListUserGroups | GET | /v2/users/{userId}/groups | Returns a list of user groups. | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| brands | ListUserMesBrands | GET | /v1/users/me/brands | [DEPRECATED] Find brands for the current user usin | No | Microservice.Brand | Service Swagger (Microservice. |
| plans | ListUserPlans | GET | /v2/users/{userId}/plans | Get a collection of plans for a user. | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| entitlement | ListUserRoles | GET | /v2/users/{userId}/roles | Returns a list of user roles. | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| entitlement, beta | ListUsers | GET | /v2/users | Deprecated: Get a list of users. Some specific fil | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| entitlement, beta | ListUsersDetails | GET | /v2/users | Returns a list of users. | No | Monolith.Entitlement | Service Swagger + Documentatio |
| bulkvaluations | ListValuationBatches | GET | /v2/valuations/batches | Returns a list of valuationbatch | Yes | N/A | Public Swagger v2 |
| bulkvaluations | ListValuationBatchResults | GET | /v2/valuations/batches/{batchId}/results | Returns the results for a single valuationbatch. | Yes | N/A | Public Swagger v2 |
| versions | ListVersions | GET | /v1/versions | List all template versions | No | Microservice.Author | Service Swagger (Microservice. |
| video | ListVideos | GET | /v2/media/videos | Returns a list of videos. | No | Microservice.Content | Service Swagger (Microservice. |
| webhooks | ListWebhooks | GET | /hub/webhooks | Returns the list of webhook subscriptions. | Yes | N/A | Public Swagger v2 |
| withdrawalsubtypes | ListWithdrawalSubTypes | GET | /v2/withdrawalsubtype | Returns a list of withdrawal sub types configurati | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| planapplications | LockPlanApplication | POST | /v2/plans/{planId}/applications/{applicationI | Lock plan Application. | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| operation logging | Logs | GET | /v2/providerintegrations/logs | Retrieve a list of operation log entries for the s | No | Microservice.ProviderInte | Service Swagger (Microservice. |
| clientvideo | MAPlayerClientVideoConfigURI | GET | /v2/clients/{clientId}/media/videos/{videoId} | Returns player configuration | No | Microservice.Content | Service Swagger (Microservice. |
| video | MAPlayerPreviewVideoConfigURI | GET | /v2/media/videos/{videoId}/player | Returns player configuration for previewing a give | No | Microservice.Content | Service Swagger (Microservice. |
| clientvideo | MAPlayerWebhookURI | POST | /v2/clients/{clientId}/media/videos/{videoId} | Posts video player analytics events for a single s | No | Microservice.Content | Service Swagger (Microservice. |
| markasread | MarkasreadMessage | POST | /v1/messages/{secureMessageId}/markasread | Mark a specific message as read. | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| markasunread | MarkasunreadMessage | POST | /v1/messages/{secureMessageId}/markasunread | Mark a specific message as unread. | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| marketing | MarketingWidget | GET | /v1/widgets/marketing |  | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| unmatchedplans | MatchPlan | POST | /v2/plans/unmatched/{planId}/match | Create a Match Plan | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| provider configuration | ModifyProviderEndpoints | PUT | /v2/providers/{providerId}/endpoints | create and update endpoints | No | Microservice.ProviderInte | Service Swagger (Microservice. |
| documents | MoveDocument | POST | /v2/documents/{documentId}/move | Moves the document object to target configuration. | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| update status | PatchAccountStatus | PATCH | /v2/accounts/{accountNumber}/status |  | No | Microservice.ProviderInte | Service Swagger (Microservice. |
| advicetemplates | PatchAdviceTemplate | PATCH | /v2/advice/templates/{templateId} | Patch advice template. | No | Microservice.Recommend | Service Swagger (Microservice. |
| attitudetorisk | PatchAtrTemplate | PATCH | /v2/attitudeToRisk/atr_templates/{templateId} | Updates an existing ATR template. | Yes | Monolith.Atr | Public Swagger v2 + Documentat |
| campaigns | PatchCampaign | PATCH | /v1/campaigns/{campaignId} | Updates campaign details | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| content | PatchCampaignContent | PATCH | /v1/campaigns/{campaignId}/content | Updates campaign details | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| campaigntemplates | PatchCampaigntemplate | PATCH | /v1/campaigntemplates/{templateId} | Updates a campaign template | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| content | PatchCampaigntemplateContent | PATCH | /v1/campaigntemplates/{templateId}/content | Updates a campaign template | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| cashreceipts | PatchCashReceipt | PATCH | /v2/cashreceipts/{cashReceiptId} | Updates a cash receipt for given cashReceipt id. | No | Monolith.Commission | Service Swagger (Monolith.Comm |
| categories | PatchCategory | PATCH | /v1/categories/{categoryId} | Update a template category | No | Microservice.Author | Service Swagger (Microservice. |
| attitudetorisk | PatchClientAtr | PATCH | /v2/clients/{clientId}/attitudeToRisk/{atrId} | Updates an existing client ATR. | Yes | Monolith.Atr | Public Swagger v2 + Documentat |
| financialprofile | PatchClientFinancialProfile | PATCH | /v2/clients/{clientId}/financialProfile | Patch client's financial profile. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| plans | PatchClientPlan | PATCH | /v2/clients/{clientId}/plans/{planId} | Patch update a client plan for given client id and | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Mon |
| recommendations | PatchClientRecommendation | PATCH | /v2/clients/{clientId}/recommendations2/{reco | Allows an API consumer to update a recommendation  | No | Microservice.Recommend | Service Swagger + Documentatio |
| dpa | PatchCurrentDPAPolicy | PATCH | /v2/dpa_policies/current | Updates the current default DPA policy (see notes  | No | Microservice.DPA | Service Swagger (Microservice. |
| dividends | PatchDividends | PATCH | /v2/dividends |  | No | Microservice.Security | Service Swagger (Microservice. |
| dpa | PatchDPAPolicy | PATCH | /v2/dpa_policies/{policyId} | Updates an existing DPA policy. | Yes | N/A | Public Swagger v2 |
| brands | PatchGroupBrand | PATCH | /v1/groups/{groupId}/brands/{brandId} | Update brand | No | Microservice.Brand | Service Swagger (Microservice. |
| households | PatchHousehold | PATCH | /v2/households/{householdId} | Patches an existing household's details. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| illustrations | PatchIllustrationStatus | PATCH | /v2/illustrations/{illustrationId} |  | No | Microservice.ProviderInte | Service Swagger (Microservice. |
| models | PatchModel | PATCH | /v2/models/{modelId} | Patch update a model. | Yes | N/A | Public Swagger v2 |
| update status | PatchMoneyMovementStatus | PATCH | /v2/accounts/{accountNumber}/moneymovements/{ |  | No | Microservice.ProviderInte | Service Swagger (Microservice. |
| oauthclients | PatchOauthClient | PATCH | /v2/oauth_clients/{clientId} |  | No | Microservice.Identity | Service Swagger (Microservice. |
| personalcontacts | PatchPersonalContact | PATCH | /v2/clients/{clientId}/personalContacts/{pers | Patch an existing personal contact | Yes | N/A | Public Swagger v2 |
| plans | PatchPlan | PATCH | /v2/plans/{planId} | Updates a plan for given plan id. | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| planapplications | PatchPlanApplication | PATCH | /v2/plans/{planId}/applications/{applicationI | Patch the plan application. | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| planapplicationenvelope | PatchPlanApplicationEnvelope | PATCH | /v2/plans/{planId}/applications/envelopes/{en | Patch plan application envelope. | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| providercodesconfigattrib | PatchProviderCodeConfigAttribute | PATCH | /v2/productproviders/codes/config/attributes/ | Patches a Provider Code config attribute for a ten | No | Microservice.ProviderCode | Service Swagger (Microservice. |
| recommendations | PatchRecommendationProposal | PATCH | /v2/clients/{clientId}/recommendations2/{reco | Patch a recommendation proposal. | No | Microservice.Recommend | Service Swagger (Microservice. |
| riskprofiles | PatchRiskProfile | PATCH | /v2/riskprofiles/{riskProfileId} | Patch risk profile | No | Monolith.Atr | Service Swagger (Monolith.Atr) |
| update status | PatchSecurityTransferInstructionSta | PATCH | /v2/accounts/{accountNumber}/transfers/{movem |  | No | Microservice.ProviderInte | Service Swagger (Microservice. |
| recommendations | PatchServiceCaseRecommendations | PATCH | /v2/servicecases/{serviceCaseId}/recommendati | Updates a list of recommendation priorities for se | No | Microservice.Recommend | Service Swagger + Documentatio |
| update status | PatchStandingInstructionStatus | PATCH | /v2/accounts/{accountNumber}/banklink/{bankLi |  | No | Microservice.ProviderInte | Service Swagger (Microservice. |
| templates | PatchTemplate | PATCH | /v1/templates/{templateId} | Update template | No | Microservice.Author | Service Swagger (Microservice. |
| templatecategories | PatchTemplatecategory | PATCH | /v1/templatecategories/{templateCategoryId} |  | No | Microservice.Workflow | Service Swagger (Microservice. |
| steps | PatchTemplateStep | PATCH | /v1/templates/{templateId}/steps/{stepId} |  | No | Microservice.Workflow | Service Swagger (Microservice. |
| tenantcategories | PatchTenantCategories | PATCH | /v2/tenantcategories |  | No | Microservice.Security | Service Swagger (Microservice. |
| unmatchedplans | PatchUnmatchedPlan | PATCH | /v2/plans/unmatched/{planId} | Patch update an unmatched plan. | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| operation logging | PlanApplicationLogs | GET | /v2/providerintegrations/planapplicationlogs |  | No | Microservice.ProviderInte | Service Swagger (Microservice. |
| plans | PlanExists | HEAD | /v2/plans/{planId} | Check that plan available for the user | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Mon |
| statuses | PlanFeeStatusExists | HEAD | /v2/clients/{clientId}/plans/{planId}/fees/{f | Check a fee status exists | Yes | N/A | Public Swagger v2 |
| splits | PlanSplitExists | HEAD | /v2/clients/{clientId}/plans/{planId}/splits/ | Checks that the plan split exists. | Yes | N/A | Public Swagger v2 |
| clientvideo | PlayerWebhookURI | POST | /v2/clients/{clientId}/media/videos/instances | Posts video player analytics events for a single s | No | Microservice.Content | Service Swagger (Microservice. |
| agreementtemplates | PostAgreementTemplate | POST | /v2/agreements/communication-templates | Creates an agreement template. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| alternativeassets | PostAlternativeAssets | POST | /v2/alternativeassets | Create Alternative Asset Securities. | No | Microservice.Security | Service Swagger (Microservice. |
| valuations | PostCePlanValuation | POST | /v2/clients/{clientId}/plans/{planId}/valuati | Accepts a request to fetch valuation from provider | No | Monolith.ContractEnquiry | Service Swagger (Monolith.Cont |
| currencies | PostCurrencies | POST | /v2/currencies | Create Currency Securities. | No | Microservice.Security | Service Swagger (Microservice. |
| dividends | PostDividends | POST | /v2/dividends |  | No | Microservice.Security | Service Swagger (Microservice. |
| etfs | PostEtfs | POST | /v2/etfs | Create ETF Securities. | No | Microservice.Security | Service Swagger (Microservice. |
| fixedincomes | PostFixedIncomes | POST | /v2/fixedincomes | Create a Fixed Income Securities. | No | Microservice.Security | Service Swagger (Microservice. |
| funds | PostFunds | POST | /v2/funds | Create Fund Securities. | No | Microservice.Security | Service Swagger (Microservice. |
| issuers | PostIssuers | POST | /v2/issuers | Create an Issuer. | No | Microservice.Security | Service Swagger (Microservice. |
| update status | PostMoneyMovementActivity | POST | /v2/accounts/{accountNumber}/moneymovements/{ |  | No | Microservice.ProviderInte | Service Swagger (Microservice. |
| options | PostOptions | POST | /v2/options | Create Option Securities. | No | Microservice.Security | Service Swagger (Microservice. |
| prices | PostPrices | POST | /v2/prices | Creates any prices that do not exist and return an | No | Microservice.Security | Service Swagger (Microservice. |
| securitygroups | PostSecurityGroups | POST | /v2/securitygroups | Create Security Groups. | No | Microservice.Security | Service Swagger (Microservice. |
| stocks | PostStocks | POST | /v2/stocks | Create Stock Securities. | No | Microservice.Security | Service Swagger (Microservice. |
| tenantcategories | PostTenantCategories | POST | /v2/tenantcategories |  | No | Microservice.Security | Service Swagger (Microservice. |
| docusignevents | ProcessDocuSignEvent | POST | /v2/docusign_events |  | No | Microservice.DocuSign | Service Swagger (Microservice. |
| video | ProcessVideoContentZip | POST | /v2/media/videos/import | Importing content which creates a video record wit | No | Microservice.Content | Service Swagger (Microservice. |
| productproviders | ProductProviderExists | HEAD | /v2/productproviders/{productProviderId} | Check the Product provider is available | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| apps, beta | PublishApp | POST | /v2/apps/{appId}/publish | Creates a published app | No | Microservice.AppD | Service Swagger (Microservice. |
| models | PublishDraftPortfolioModel | POST | /v2/models/draft/{modelId}/publish | Publishes a draft portfolio model. | Yes | N/A | Public Swagger v2 |
| commands | PublishExpectationCommand | POST | /v2/commands/Expectation | Creates a new expectation request to trigger creat | No | Microservice.Expectation | Service Swagger (Microservice. |
| commands | PublishReversalCommand | POST | /v2/commands/Reversal | Creates a new expectation reversal request to trig | No | Microservice.Expectation | Service Swagger (Microservice. |
| commands | PublishTenantExpectationDue | POST | /v2/commands/ExpectationSchedule | Initialize the scheduling process. | No | Microservice.Expectation | Service Swagger (Microservice. |
| update status | PutAccountModel | PUT | /v2/accounts/{accountNumber}/model |  | No | Microservice.ProviderInte | Service Swagger (Microservice. |
| advicetemplates | PutAdviceTemplateStepTransition | PUT | /v2/advice/templates/{templateId}/steptransit | Put Advice template step transition. | No | Microservice.Recommend | Service Swagger (Microservice. |
| agreementtemplates | PutAgreementTemplate | PUT | /v2/agreements/communication-templates/{templ | Updates an agreement template. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| alternativeassets | PutAlternativeAssets | PUT | /v2/alternativeassets | Update Alternative Asset Securities. | No | Microservice.Security | Service Swagger (Microservice. |
| currencies | PutCurrencies | PUT | /v2/currencies | Update Currency Securities. | No | Microservice.Security | Service Swagger (Microservice. |
| etfs | PutEtfs | PUT | /v2/etfs | Update ETF Securities. | No | Microservice.Security | Service Swagger (Microservice. |
| fixedincomes | PutFixedIncomes | PUT | /v2/fixedincomes | Update Fixed Income Securities. | No | Microservice.Security | Service Swagger (Microservice. |
| funds | PutFunds | PUT | /v2/funds | Update Fund Securities. | No | Microservice.Security | Service Swagger (Microservice. |
| issuers | PutIssuers | PUT | /v2/issuers | Update an Issuer | No | Microservice.Security | Service Swagger (Microservice. |
| marketclosings | PutMarketClosings | PUT | /v2/marketclosings | Create or Update a Market Closing. | No | Microservice.Security | Service Swagger (Microservice. |
| update status | PutMoneyMovementInstuction | PUT | /v2/accounts/{accountNumber}/moneymovements |  | No | Microservice.ProviderInte | Service Swagger (Microservice. |
| options | PutOptions | PUT | /v2/options | Update Option Securities. | No | Microservice.Security | Service Swagger (Microservice. |
| poolfactor | PutPoolFactors | PUT | /v2/poolfactors | Creates any poolfactors that do not exist and upda | No | Microservice.Security | Service Swagger (Microservice. |
| prices | PutPrices | PUT | /v2/prices | Creates any prices that do not exist and updates a | No | Microservice.Security | Service Swagger (Microservice. |
| securitygroups | PutSecurityGroups | PUT | /v2/securitygroups/{securityGroupId} | Update a Security Group. | No | Microservice.Security | Service Swagger (Microservice. |
| stocks | PutStocks | PUT | /v2/stocks | Update Stock Securities. | No | Microservice.Security | Service Swagger (Microservice. |
| reportgroup | QuicksightGroupExists | HEAD | /v2/quicksight/reportgroups/{id} | Checks that a quicksight group exists. | No | Microservice.Quicksight | Service Swagger (Microservice. |
| quotes | RecommendClientQuoteResult | POST | /v2/clients/{clientId}/quotes/{quoteId}/resul | Creates a new client recommendation proposal from  | No | Microservice.Quotation | Service Swagger (Microservice. |
| tags | RemoveClientTag | DELETE | /v2/clients/{clientId}/tags/{tagName} | Deletes an existing tag for a given client. | Yes | N/A | Public Swagger v2 |
| apps, beta | RemoveCollaboratorAppApproval | DELETE | /v2/apps/{appId}/approve | Removes collaborator approval for a given app | No | Microservice.AppD | Service Swagger (Microservice. |
| tags | RemoveLeadTag | DELETE | /v2/leads/{leadId}/tags/{tagName} | Deletes an existing tag for a given lead. | Yes | N/A | Public Swagger v2 |
| apps, beta | RemovePublishedAppForInstallation | DELETE | /v2/published_apps/{appId}/approve_install | Removes a given published app for installation | No | Microservice.AppD | Service Swagger (Microservice. |
| bulk | RevokeBulkMessage | POST | /v1/messages/bulk/{bulkId}/revoke | Revokes a bulk message. | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| plan delivery method | SavePlanDeliveryMethod | PUT | /v2/plans/{planId}/plandeliverymethod | Save Plan Delivery Method. | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| plan delivery method | SavePlanDeliveryMethodProposed | PUT | /v2/plans/{planId}/plandeliverymethod/propose | Save Proposed Plan Delivery Method. | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| programs | SavePrograms | PUT | /v2/programs | Insert a new or Update an existing Program for a T | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| planapplicationdocument | SearchPlanApplicationDocuments | GET | /v2/plans/{planId}/applications/documents | Returns a list of Documents. | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| planapplicationssearch | SearchPlanApplications | GET | /v2/applications | Returns a list of plan applications. | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| tasks | SearchTask | GET | /v2/activities/tasks/search | Search for the tasks. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| planapplicationenvelope | SendApplicationEnvelopeNotification | POST | /v2/plans/{planId}/applications/envelopes/{en | Sends the application envelope notification. | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| bulk | SendBulk | POST | /v1/messages/bulk/{bulkId}/send | Starts the processing the bulk message. | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| sendbulk | SendbulkCampaignemails | POST | /v1/campaignemails/sendbulk | Send bulk templated email | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| send | SendClientEmail | POST | /v1/clients/{clientId}/emails/{emailId}/send |  | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| notifications | SendDocuSignEnvelopeNotification | POST | /v2/clients/docusign_envelopes/{envelopeId}/n | Sends envelope notification | No | Microservice.DocuSign | Service Swagger (Microservice. |
| docusignenvelopes | SendESignatureEnvelope | POST | /v2/clients/docusign_envelopes | Send eSignature Envelope to the client | No | Microservice.DocuSign | Service Swagger (Microservice. |
| send | SendMessage | POST | /v1/messages/{secureMessageId}/send | Send secure message to a single recipient. | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| sendraw | SendRawMail | POST | /v1/mail/send_raw |  | No | Microservice.Email | Service Swagger (Microservice. |
| sendtemplate | SendTemplateMail | POST | /v1/mail/send_template | Send a templated email Attachments are sent as mu | No | Microservice.Email | Service Swagger (Microservice. |
| sendtestemail | SendtestemailCampaigns | POST | /v1/campaigns/{campaignId}/sendtestemail | Send a test email for the specified template | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| sendtestemail | SendtestemailCampaigntemplates | POST | /v1/campaigntemplates/{templateId}/sendtestem | Send a test email for the specified template | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| sendtoadviser | SendtoadviserMessage | POST | /v1/messages/{secureMessageId}/sendtoadviser | Send secure message from a customer to an adviser. | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| entitlement | SetAsCurrentUserRole | POST | /v2/users/{userId}/roles/{roleId}/current | Sets the given role to be the user's current/defau | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| quotes, beta | SetClientQuoteStatus | POST | /v2/clients/{clientId}/quotes/{quoteId}/statu | Sets a new status for the client quote. | Yes | N/A | Public Swagger v2 |
| expectation | SetConfiguration | PUT | /v2/expectations/configuration | Creates or Updates a tenant's configuration settin | No | Microservice.Expectation | Service Swagger (Microservice. |
| documents | SetDefaultDocumentConfiguration | POST | /v2/documents/configurations/{id}/default | Sets the default storage configuration | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| quotes | SetLeadQuoteStatus | POST | /v2/leads/{leadId}/quotes/{quoteId}/status/{s | Sets a new status for the lead quote. | No | Microservice.Quotation | Service Swagger (Microservice. |
| activitytypes | ShowActivityType | POST | /v2/activities/types/{typeId}/groups/{groupId | Show an activity type for given group. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| signurl | SignDocuSignEnvelope | GET | /v2/clients/{clientId}/docusign_envelopes/{en | Get sign URL of eSignature Envelope | No | Microservice.DocuSign | Service Swagger (Microservice. |
| splits | SplitExists | HEAD | /v2/splits/{splitId} | Checks that the split exists. | Yes | N/A | Public Swagger v2 |
| webhooks | SubscribeUnsubscribeWebSub | POST | /hub | A WebSub compliant endpoint which creates or updat | Yes | N/A | Public Swagger v2 |
| tenants | TenantExists | HEAD | /v2/tenants/{tenantId} | Checks whether or not a given Tenant exists. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| tenant configuration | TenantFederationExists | HEAD | /v2/tenants/{tenantid}/federation |  | No | Microservice.Federation | Service Swagger (Microservice. |
| riskprofiles | UnarchiveRiskProfile | POST | /v2/riskprofiles/{riskProfileId}/unarchive | Unarchive the Risk Profile | No | Monolith.Atr | Service Swagger (Monolith.Atr) |
| apps, beta | UninstallPreviewApp | DELETE | /v2/apps/{appId}/installation | Uninstalls a given app in preview | No | Microservice.AppD | Service Swagger (Microservice. |
| apps, beta | UninstallPublishedApp | DELETE | /v2/published_apps/{appId}/installation | Uninstalls a given published app | No | Microservice.AppD | Service Swagger (Microservice. |
| objectives | UnlinkClientObjectiveOpportunity | DELETE | /v2/clients/{clientId}/objectives/{objectiveI | Unlink opportunity to client objective. | No | Microservice.Requirement | Service Swagger (Microservice. |
| tasks | UnlinkFeeToTask | POST | /v2/activities/tasks/{taskId}/fees/{feeId}/un | Unlinks the fee to given task | No | Monolith.Charging | Service Swagger (Monolith.Char |
| objectives | UnlinkLeadObjectiveOpportunity | DELETE | /v2/leads/{leadId}/objectives/{objectiveId}/o | Unlink opportunity to lead objective. | No | Microservice.Requirement | Service Swagger (Microservice. |
| planapplications | UnlockPlanApplication | POST | /v2/plans/{planId}/applications/{applicationI | Unlock Plan Application. | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| accounts | UpdateAccount | PUT | /v2/accounts | Updates username | No | Microservice.Membership | Service Swagger (Microservice. |
| addresses | UpdateAccountAddress | PUT | /v2/accounts/{accountId}/addresses/{addressId | Updates an existing Address for the given Account. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| accounts | UpdateAccountDocument | PUT | /v2/accounts/{accountId}/documents/{documentI | Updates the specified account document | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| accounts | UpdateAccountDocumentObject | PUT | /v2/accounts/{accountId}/documents/{documentI | Uploads a file object associated with the specifie | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| relationships | UpdateAccountRelationship | PUT | /v2/accounts/{accountId}/relationships/{relat | Updates an existing Relationship for the given Acc | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activitycategories | UpdateActivityCategory | PUT | /v2/activities/categories/{categoryId} | Updates a given activity category. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activityoutcomes | UpdateActivityOutcome | PUT | /v2/activities/outcomes/{outcomeId} | Updates a given activity outcome. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| activitytypes | UpdateActivityType | PUT | /v2/activities/types/{typeId} | Updates a given activity type. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| advicetemplates | UpdateAdviceTemplateStep | PUT | /v2/advice/templates/{templateId}/steps/{step | Update advice template step | No | Microservice.Recommend | Service Swagger (Microservice. |
| advisers | UpdateAdviser | PUT | /v2/advisers/{adviserId} | Updates the adviser for a given adviser. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | UpdateAdviserAddress | PUT | /v2/advisers/{adviserId}/addresses/{addressId | Updates an existing Address for the given Adviser. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| contactdetails | UpdateAdviserContactdetail | PUT | /v2/advisers/{adviserId}/contactdetails/{cont | Updates an existing ContactDetail for the given Ad | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| documents | UpdateAdviserDocument | PUT | /v2/advisers/{adviserId}/documents/{documentI | Updates the specified adviser document | No | Monolith.Storage | Service Swagger + Documentatio |
| documents | UpdateAdviserDocumentObject | PUT | /v2/advisers/{adviserId}/documents/{documentI | Uploads a file object associated with the specifie | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| apps, beta | UpdateApp | PUT | /v2/apps/{appId} | Updates a given app | No | Microservice.AppD | Service Swagger (Microservice. |
| apps, beta | UpdateAppApiKeys | PUT | /v2/apps/{appId}/apikeys | Updates API keys for a given app | No | Microservice.AppD | Service Swagger (Microservice. |
| apps, beta | UpdateAppClaims | PUT | /v2/apps/{appId}/claims | Updates claims for a given app | No | Microservice.AppD | Service Swagger (Microservice. |
| apps, beta | UpdateAppContent | PUT | /v2/apps/{appId}/content/{key} | Creates content for a given app | No | Microservice.AppD | Service Swagger (Microservice. |
| apps, beta | UpdateAppMetadata | PUT | /v2/apps/{appId}/metadata | Updates metadata for a given app | No | Microservice.AppD | Service Swagger (Microservice. |
| apps, beta | UpdateAppOauthClient | PUT | /v2/apps/{appId}/oauth_clients/{clientId} | Updates an oauth client for a given app | No | Microservice.AppD | Service Swagger (Microservice. |
| appointments | UpdateAppointment | PUT | /v2/activities/appointments/{appointmentId} | Updates a given appointment. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| apps, beta | UpdateAppSecret | PUT | /v2/apps/{appId}/secrets/{key} | Updates a secret for a given app | No | Microservice.AppD | Service Swagger (Microservice. |
| attitudetorisk | UpdateAtrTemplate | PUT | /v2/attitudeToRisk/atr_templates/{templateId} | Updates an existing ATR Template. | Yes | Monolith.Atr | Public Swagger v2 + Documentat |
| bankaccounts | UpdateBankAccount | PUT | /v2/clients/{clientId}/recommendations2/{reco | Updates a recommendation proposal bankaccount. | No | Microservice.Recommend | Service Swagger (Microservice. |
| bulk | UpdateBulkMessage | PUT | /v1/messages/bulk/{bulkId} | Updates an existing bulk message. | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| campaignids | UpdateCampaignCampaignId | PUT | /v1/campaigns/{campaignId}/{status} | Update campaign status | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| opportunities | UpdateCampaignChannel | PUT | /v2/opportunities/campaignchannels/{campaignC | Updates an existing Campaign Channel. | Yes | N/A | Public Swagger v2 |
| segments | UpdateCampaignSegments | PUT | /v1/campaigns/{campaignId}/segments |  | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| opportunities | UpdateCampaignType | PUT | /v2/opportunities/campaigntypes/{campaignType | Updates an existing Campaign Type. | Yes | N/A | Public Swagger v2 |
| cashreceipts | UpdateCashReceipt | PUT | /v2/cashreceipts/{cashReceiptId} | Update a cash receipt. | No | Monolith.Commission | Service Swagger (Monolith.Comm |
| cff | UpdateCffSegmentCompletion | PUT | /v2/clients/{clientId}/cff_segments/{segmentI | Updates completion for a particular CFF segment. | No | Microservice.CFF | Service Swagger (Microservice. |
| cff | UpdateCffSegmentState | PUT | /v2/clients/{clientId}/cff_segments/{segmentI | Updates a state for a particular Cff segment. Plea | No | Microservice.CFF | Service Swagger (Microservice. |
| checklistitems | UpdateCheckListItem | PUT | /v2/checklists/items/{itemId} | Update a check list item. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| clients | UpdateClient | PUT | /v2/clients/{clientId} | Updates a client for a given client. | Yes | Monolith.Crm | Public Swagger v2 + GitHub Mon |
| addresses | UpdateClientAddress | PUT | /v2/clients/{clientId}/addresses/{addressId} | Update an address | Yes | N/A | Public Swagger v2 |
| assets | UpdateClientAsset | PUT | /v2/clients/{clientId}/assets/{assetId} | Updates the asset for a given client and asset. | Yes | N/A | Public Swagger v2 |
| valuations | UpdateClientAssetValuation | PUT | /v2/clients/{clientId}/assets/{assetId}/valua | Updates or creates an association on a valuation f | Yes | N/A | Public Swagger v2 |
| attitudetorisk | UpdateClientAtrAnswerResult | PUT | /v2/clients/{clientId}/atr/{atrAnswerId}/resu | Updates an existing Atr Answer Result for a given  | No | Monolith.Atr | Service Swagger (Monolith.Atr) |
| attitudetorisk | UpdateClientAtrResult | PUT | /v2/clients/{clientId}/attitudeToRisk/{atrId} | Update result for a client atr | Yes | Monolith.Atr | Public Swagger v2 + Documentat |
| beneficiaries | UpdateClientBeneficiaries | PUT | /v2/clients/{clientId}/beneficiaries | Updates Beneficiary collection (add new and update | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| contactdetails | UpdateClientContactdetail | PUT | /v2/clients/{clientId}/contactdetails/{contac | Updates contact details for a given client and con | Yes | N/A | Public Swagger v2 |
| dependants, beta | UpdateClientDependant | PUT | /v2/clients/{clientId}/dependants/{dependantI | Updates a dependant for a given client. | Yes | N/A | Public Swagger v2 |
| disclosures | UpdateClientDisclosure | PUT | /v2/clients/{clientId}/disclosures/{disclosur | Updates a disclosure for a given client. | No | Monolith.FactFind | Service Swagger (Monolith.Fact |
| documents | UpdateClientDocument | PUT | /v2/clients/{clientId}/documents/{documentId} | Updates a document for a given client and document | Yes | N/A | Public Swagger v2 |
| documents | UpdateClientDocumentObject | PUT | /v2/clients/{clientId}/documents/{documentId} | Updates a file object for a given client and docum | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| emails | UpdateClientEmail | PUT | /v1/clients/{clientId}/emails/{emailId} |  | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| content | UpdateClientEmailContent | PUT | /v1/clients/{clientId}/emails/{emailId}/conte |  | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| attachments | UpdateClientEmailsAttachments | PUT | /v1/clients/{clientId}/emails/{emailId}/attac |  | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| recipients | UpdateClientEmailsRecipients | PUT | /v1/clients/{clientId}/emails/{emailId}/recip |  | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| employments | UpdateClientEmployment | PUT | /v2/clients/{clientId}/employments/{employmen | Updates an employment for a given client. | Yes | N/A | Public Swagger v2 |
| expenditures, beta | UpdateClientExpenditure | PUT | /v2/clients/{clientId}/expenditures/{expendit | Updates a client's expenditure record. | Yes | Monolith.FactFind | Public Swagger v2 + GitHub Mon |
| fees | UpdateClientFee | PUT | /v2/clients/{clientId}/fees/{feeId} | Update client fee. | Yes | N/A | Public Swagger v2 |
| fees | UpdateClientFeeDates | PATCH | /v2/clients/{clientId}/fees/{feeId} | Update client fee dates. | Yes | N/A | Public Swagger v2 |
| splits | UpdateClientFeeSplit | PUT | /v2/clients/{clientId}/fees/{feeId}/splits/{s | Updates a client fee split document. | Yes | N/A | Public Swagger v2 |
| financialprofile | UpdateClientFinancialProfile | PUT | /v2/clients/{clientId}/financialProfile | Updates client's financial profile. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| incomes, beta | UpdateClientIncome | PUT | /v2/clients/{clientId}/incomes/{incomeId} | Updates a client's income record. | Yes | Monolith.FactFind | Public Swagger v2 + GitHub Mon |
| investmentpreference | UpdateClientInvestmentPreference | PUT | /v2/clients/{clientId}/servicecases/{serviceC | Links a InvestmentPreference to a service case. | No | Microservice.Recommend | Service Swagger (Microservice. |
| clientinvestmentpreferenc | UpdateClientInvestmentPreferences | PUT | /v2/clients/{clientId}/investmentPreferences/ | Update client investment preference | No | Microservice.Recommend | Service Swagger (Microservice. |
| clientinvestmentpreferenc | UpdateClientInvestmentPreferenceWit | PUT | /v2/clients/{clientId}/objectives/{objectives | Links an investment preference to a objective. | No | Microservice.Recommend | Service Swagger (Microservice. |
| marketingpreferences, bet | UpdateClientMarketingPreferences | PUT | /v2/clients/{clientId}/marketing_preferences | Updates client's marketing preferences. | Yes | N/A | Public Swagger v2 |
| objectives | UpdateClientObjective | PUT | /v2/clients/{clientId}/objectives/{objectiveI | Updates a client objective. | No | Microservice.Requirement | Service Swagger (Microservice. |
| opportunities | UpdateClientOpportunity | PUT | /v2/clients/{clientId}/opportunities/{opportu | Updates an existing Opportunity for the given clie | Yes | N/A | Public Swagger v2 |
| plans, beta | UpdateClientPlan | PUT | /v2/clients/{clientId}/plans/{planId} | Updates a plan for a given client. | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Mon |
| charges | UpdateClientPlanCharge | PUT | /v2/clients/{clientId}/plans/{planId}/charges | Updates an existing charge for a client's plan. | Yes | N/A | Public Swagger v2 |
| contributions | UpdateClientPlanContribution | PUT | /v2/clients/{clientId}/plans/{planId}/contrib | Updates a contribution for a given client and plan | Yes | N/A | Public Swagger v2 |
| fundproposal | UpdateClientPlanFundproposal | PUT | /v2/clients/{clientId}/plans/{planId}/fundpro | Updates or creates a fund proposal for a given cli | Yes | N/A | Public Swagger v2 |
| holdings | UpdateClientPlanHolding | PUT | /v2/clients/{clientId}/plans/{planId}/holding | Updates a fund holding for a given client, plan an | Yes | N/A | Public Swagger v2 |
| beneficiaries | UpdateClientPlansBeneficiaries | PUT | /v2/clients/{clientId}/plans/{planId}/benefic | Updates or creates the beneficiary for a given cli | Yes | N/A | Public Swagger v2 |
| livesassured | UpdateClientPlansLivesAssured | PUT | /v2/clients/{clientId}/plans/{planId}/livesas | Creates or updates the list of Lives Assured for t | Yes | N/A | Public Swagger v2 |
| splits | UpdateClientPlanSplit | PUT | /v2/clients/{clientId}/plans/{planId}/splits/ | Update a plan split. | No | Monolith.Commission | Service Swagger (Monolith.Comm |
| purposes | UpdateClientPlansPurposes | PUT | /v2/clients/{clientId}/plans/{planId}/purpose | Creates or updates the purpose for a given client  | Yes | N/A | Public Swagger v2 |
| transactions, beta | UpdateClientPlanTransaction | PATCH | /v2/clients/{clientId}/plans/{planId}/transac | Updates a client plan transaction. | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Mon |
| valuations | UpdateClientPlanValuation | PUT | /v2/clients/{clientId}/plans/{planId}/valuati | Updates a valuation on a given client, plan and va | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Mon |
| withdrawals | UpdateClientPlanWithdrawal | PUT | /v2/clients/{clientId}/plans/{planId}/withdra | Updates a withdrawal for a given client, plan and  | Yes | N/A | Public Swagger v2 |
| professionalaffiliations | UpdateClientProfessionalAffiliation | PUT | /v2/clients/{clientId}/professionalaffiliatio | Updates client's professional affiliations. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| proofofidentity | UpdateClientProofOfIdentity | PUT | /v2/clients/{clientId}/proofofidentity/{id} | Updates  an existing proof of identity record for  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| quotes, beta | UpdateClientQuoteResultProductBenef | PUT | /v2/clients/{clientId}/quotes/{quoteId}/resul | This endpoint allows an API user to update product | Yes | N/A | Public Swagger v2 |
| relationships | UpdateClientRelationship | PUT | /v2/clients/{clientId}/relationships/{relatio | Updates a relationship for a given client and rela | Yes | N/A | Public Swagger v2 |
| servicecases | UpdateClientServicecase | PUT | /v2/clients/{clientId}/servicecases/{serviceC | Updates a service case for a given client and serv | Yes | N/A | Public Swagger v2 |
| tags | UpdateClientTags | PUT | /v2/clients/{clientId}/tags | Updates/Creates client's tags. | Yes | N/A | Public Swagger v2 |
| clientvideo | UpdateClientVideo | PATCH | /v2/clients/{clientId}/media/videos/{videoId} | Updates a client video. | No | Microservice.Content | Service Swagger (Microservice. |
| clientvideo | UpdateClientVideoInstances | PATCH | /v2/clients/{clientId}/media/videos/instances | Updates a client video. | No | Microservice.Content | Service Swagger (Microservice. |
| vulnerabilities | UpdateClientVulnerabilitiesCurrent | PUT | /v2/clients/{clientId}/vulnerabilities/curren | Update client's current vulnerability. | Yes | N/A | Public Swagger v2 |
| dpa | UpdateCurrentDPAPolicy | PUT | /v2/dpa_policies/current | Updates the current DPA policy (see notes on party | No | Microservice.DPA | Service Swagger (Microservice. |
| defaultbranding | UpdateDefaultBranding | PUT | /v2/report/branding/default/{id} |  | No | Monolith.Report | Service Swagger (Monolith.Repo |
| documents | UpdateDocument | PUT | /v2/documents/{documentId} | Updates the specified document | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| documents | UpdateDocumentConfiguration | PUT | /v2/documents/configurations/{id} | Updates a storage configuration | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| documents | UpdateDocumentObject | PUT | /v2/documents/{documentId}/object | Uploads a file object associated with the specifie | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| docusignenvelopes | UpdateDocuSignEnvelope | PUT | /v2/clients/{clientId}/docusign_envelopes/{en | UpdateAsync eSignature Envelope | No | Microservice.DocuSign | Service Swagger (Microservice. |
| signers | UpdateDocuSignEnvelopeSigners | PUT | /v2/clients/docusign_envelopes/{envelopeId}/s | UpdateAsync Envelope Signers in the third party do | No | Microservice.DocuSign | Service Swagger (Microservice. |
| dpa | UpdateDPAPolicy | PUT | /v2/dpa_policies/{policyId} | Updates an existing DPA policy. | Yes | N/A | Public Swagger v2 |
| models | UpdateDraftPortfolioModel | PUT | /v2/models/draft/{modelId} | Put update a draft portfolio model. | Yes | N/A | Public Swagger v2 |
| emails | UpdateEmail | PUT | /v2/activities/emails/{emailId} | Updates a given email. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| configuration | UpdateEmailConfiguration | PUT | /v1/emails/configuration |  | No | Monolith.Campaign | Service Swagger (Monolith.Camp |
| adjustmentsrules | UpdateExpectationAdjustmentRule | PUT | /v2/expectations/adjustmentsrules/{adjustment | Updates an expectation adjustment rule. | No | Microservice.Expectation | Service Swagger (Microservice. |
| expenditures | UpdateExpenditureCategoryGroup | PUT | /v2/expenditures/refdata/categorygroups/{cate | Updates an existing Expenditure Category Group. | No | Monolith.FactFind | Service Swagger (Monolith.Fact |
| funds | UpdateFund | PUT | /v2/funds/{fundId} | Updates a non-feed fund for a given fund. | Yes | Monolith.Portfolio | Public Swagger v2 + GitHub Mon |
| fundingsource | UpdateFundingSource | PUT | /v2/clients/{clientId}/servicecases/{serviceC | Allows an API consumer to update a funding source  | No | Microservice.Recommend | Service Swagger (Microservice. |
| groups | UpdateGroup | PUT | /v2/groups/{groupId} | Updates a given group. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | UpdateGroupAddress | PUT | /v2/groups/{groupId}/addresses/{addressId} | Updates an existing Address for the given Group. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| groups | UpdateGroupParent | POST | /v2/groups/{groupId}/changeParent | Updates the parent group for a group. System reach | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| households | UpdateHousehold | PUT | /v2/households/{householdId} | Updates a household's details. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| incomestatements, beta | UpdateIncomeStatement | PUT | /v2/incomestatements/{incomeStatementId} | Updates an income statement. | Yes | N/A | Public Swagger v2 |
| incomestatements, beta | UpdateIncomeStatementItem | PUT | /v2/incomestatements/{incomeStatementId}/item | Updates an income statement item for a given incom | Yes | N/A | Public Swagger v2 |
| apps, beta | UpdateInstalledAppGroupSettings | PUT | /v2/installed_apps/{appId}/group_settings/{gr | Updates group settings for a given installed app a | Yes | N/A | Public Swagger v2 |
| apps, beta | UpdateInstalledAppUserSettings | PUT | /v2/installed_apps/{appId}/user_settings/{use | Updates user settings for a given installed app an | Yes | N/A | Public Swagger v2 |
| addresses | UpdateIntroducerAddress | PUT | /v2/introducers/{introducerId}/addresses/{add | Updates an existing Address for the given Introduc | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| investmentpreferencequest | UpdateInvestmentPreferenceQuestion | PUT | /v2/investmentpreferences/questions/{question | Update investment preference question | No | Microservice.Recommend | Service Swagger (Microservice. |
| leads | UpdateLead | PUT | /v2/leads/{leadId} | Updates a given lead. | Yes | N/A | Public Swagger v2 |
| addresses | UpdateLeadAddress | PUT | /v2/leads/{leadId}/addresses/{addressId} | Updates an existing Address for the given Lead. | Yes | N/A | Public Swagger v2 |
| contactdetails | UpdateLeadContactdetail | PUT | /v2/leads/{leadId}/contactdetails/{contactDet | Updates contact details for a given lead. | Yes | N/A | Public Swagger v2 |
| leads | UpdateLeadDocument | PUT | /v2/leads/{leadId}/documents/{documentId} | Updates the specified document | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| leads | UpdateLeadDocumentObject | PUT | /v2/leads/{leadId}/documents/{documentId}/obj | Uploads a file object associated with the specifie | No | Monolith.Storage | Service Swagger (Monolith.Stor |
| marketingpreferences, bet | UpdateLeadMarketingPreferences | PUT | /v2/leads/{leadId}/marketing_preferences | Updates lead's marketing preferences. | Yes | N/A | Public Swagger v2 |
| objectives | UpdateLeadObjective | PUT | /v2/leads/{leadId}/objectives/{objectiveId} | Updates a lead objective. | No | Microservice.Requirement | Service Swagger (Microservice. |
| opportunities | UpdateLeadOpporunity | PUT | /v2/leads/{leadId}/opportunities/{opportunity | Updates an existing Opportunity for the given Lead | Yes | N/A | Public Swagger v2 |
| relationships | UpdateLeadRelationship | PUT | /v2/leads/{leadId}/relationships/{relationshi | Updates a relationship for the given lead and rela | Yes | N/A | Public Swagger v2 |
| tags | UpdateLeadTags | PUT | /v2/leads/{leadId}/tags | Updates/Creates lead's tags. | Yes | N/A | Public Swagger v2 |
| messages | UpdateMessage | PUT | /v1/messages/{secureMessageId} | Updates an existing secure message. | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| objectivecategories | UpdateObjectiveCategory | PUT | /v2/objective/categories/{categoryId} | Update a objective category. | No | Microservice.Requirement | Service Swagger (Microservice. |
| opportunities | UpdateOpportunityCampaign | PUT | /v2/opportunities/campaigns/{opportunityCampa | Updates an Opportunity campaign for a tenant. | Yes | N/A | Public Swagger v2 |
| opportunities | UpdateOpportunityProposition | PUT | /v2/opportunities/propositions/{propositionId | Updates an existing Opportunity proposition for a  | Yes | N/A | Public Swagger v2 |
| opportunities | UpdateOpportunityStatus | PUT | /v2/opportunities/statuses/{opportunityStatus | Updates an existing Opportunity Status. | Yes | N/A | Public Swagger v2 |
| opportunities | UpdateOpportunityType | PUT | /v2/opportunities/types/{opportunityTypeId} | Updates an Opportunity Type for a tenant. | Yes | N/A | Public Swagger v2 |
| security | UpdateOptionSecurity | PUT | /v1/options/security | Update template security options | No | Microservice.Author | Service Swagger (Microservice. |
| versioning | UpdateOptionVersioning | PUT | /v1/options/versioning | Update template versioning options | No | Microservice.Author | Service Swagger (Microservice. |
| notes, beta | UpdateOrCreateClientNotes | PUT | /v2/clients/{clientId}/notes | Updates the notes for a given client. | No | Monolith.FactFind | Service Swagger (Monolith.Fact |
| models | UpdateOrCreatePortfolioModel | PUT | /v2/models | Updates or creates a portfolio model. | Yes | N/A | Public Swagger v2 |
| passwordpolicy | UpdatePasswordPolicy | PUT | /v2/oauth_clients/{clientId}/passwordpolicy |  | No | Microservice.Identity | Service Swagger (Microservice. |
| personalcontacts | UpdatePersonalContact | PUT | /v2/clients/{clientId}/personalContacts/{pers | Update an existing personal contact. | Yes | N/A | Public Swagger v2 |
| addresses | UpdatePersonalContactAddress | PUT | /v2/clients/{clientId}/personalcontacts/{pers | Update an existing address. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| contactdetails | UpdatePersonalContactDetail | PUT | /v2/clients/{clientId}/personalcontacts/{pers | Update an existing contact detail for a given pers | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| relationships | UpdatePersonalContactRelationship | PUT | /v2/clients/{clientId}/personalcontacts/{pers | Update an existing relationship | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| planapplications | UpdatePlanApplication | PUT | /v2/plans/{planId}/applications/{applicationI | Updates Plan Application. | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| planapplications | UpdatePlanApplicationAdditionalQues | PUT | /v2/plans/{planId}/applications/{applicationI | Updates the Additional Questions for a Plan Applic | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| planapplicationdocument | UpdatePlanApplicationDocumentRecipi | PUT | /v2/plans/{planId}/applications/{applicationI | Update plan application document recipients | No | Microservice.PlanApplicat | Service Swagger (Microservice. |
| commissions | UpdatePlanCommissions | PUT | /v2/clients/{clientId}/plans/{planId}/commiss | Update a commission for a given plan. | Yes | N/A | Public Swagger v2 |
| fees | UpdatePlanFees | PUT | /v2/clients/{clientId}/plans/{planId}/fees | Replaces all plan fees | Yes | N/A | Public Swagger v2 |
| money movement fees | UpdatePlanSecurityTransferInstructi | PUT | /v2/plans/{planId}/securityTransferInstructio | Replaces all of the security transfer instruction  | No | Monolith.Charging | Service Swagger (Monolith.Char |
| splits | UpdatePlanSplit | PUT | /v2/clients/{clientId}/plans/{planId}/splits/ | Updates a plan split document. | Yes | N/A | Public Swagger v2 |
| splits | UpdatePlanSplitsFromTemplate | PUT | /v2/clients/{clientId}/plans/{planId}/splits | Create or update plan splits using the split templ | No | Monolith.Commission | Service Swagger (Monolith.Comm |
| money movement fees | UpdatePlanTransferInstructionFees | PUT | /v2/plans/{planId}/transferInstructionFees | Replaces all of the transfer instruction and fee r | No | Monolith.Charging | Service Swagger (Monolith.Char |
| plantype | UpdatePlanType | PUT | /v2/clients/{clientId}/plans/{planId}/plantyp | Change plan to a new type | No | Monolith.Portfolio | Service Swagger (Monolith.Port |
| productproviders | UpdateProductProvider | PUT | /v2/productproviders/{productProviderId} | Updates a product provider. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | UpdateProductproviderAddress | PUT | /v2/productproviders/{productProviderId}/addr | Updates an existing Address for the given Product  | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| productproviders | UpdateProductProviderHierarchy | PUT | /v2/productproviders/{productProviderId}/tena |  | No | Microservice.ProviderInte | Service Swagger (Microservice. |
| proposalbeneficiary | UpdateProposalBeneficiaries | PUT | /v2/clients/{clientId}/recommendations2/{reco | Updates beneficiaries for a given proposal and cli | No | Microservice.Recommend | Service Swagger (Microservice. |
| attitudetorisk | UpdateProvideAtrTemplateAssetModel | PUT | /v2/attitudeToRisk/apps/{appId}/atr_templates | Updates the asset model associated with a third pa | No | Monolith.Atr | Service Swagger (Monolith.Atr) |
| providercodes | UpdateProviderCode | PUT | /v2/productproviders/{providerId}/codes/{prov | Updates an allocated Provider Code issued by a Pro | No | Microservice.ProviderCode | Service Swagger (Microservice. |
| providercodes | UpdateProviderCodeConfig | PUT | /v2/productproviders/{providerId}/codes/confi | Updates a Provider Code issued by a Provider as a  | No | Microservice.ProviderCode | Service Swagger (Microservice. |
| disclaimer | UpdateProviderDisclaimer | PUT | /v2/provider/{providerId}/disclaimer |  | No | Microservice.ProviderInte | Service Swagger (Microservice. |
| provider tenant configura | UpdateProviderTenant | PUT | /v2/providers/{providerId}/providerTenants |  | No | Microservice.ProviderInte | Service Swagger (Microservice. |
| customquestions | UpdateQuestion | PATCH | /v2/questions/{questionId} | Updates one or more details of an existing questio | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| customquestions | UpdateQuestion1 | PUT | /v2/questions/{questionId} | Updates all the details for an existing question. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| customquestions | UpdateQuestionAnswers | PUT | /v2/clients/{clientId}/questions | Updates a client's answers to one or more question | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| configuration | UpdateQuicksightConfiguration | PUT | /v2/quicksight/configurations | Create quicksight configuration. | No | Microservice.Quicksight | Service Swagger (Microservice. |
| configuration | UpdateQuicksightFolderConfiguration | PUT | /v2/quicksight/configurations/folders/{id} | Updates a quicksight folder configuration. | No | Microservice.Quicksight | Service Swagger (Microservice. |
| reportgroup | UpdateQuicksightGroup | PUT | /v2/quicksight/reportgroups/{id} | Updates a quicksight group. | No | Microservice.Quicksight | Service Swagger (Microservice. |
| configuration | UpdateQuicksightGroupConfiguration | PUT | /v2/quicksight/configurations/groups/{id} | Updates a quicksight group configuration. | No | Microservice.Quicksight | Service Swagger (Microservice. |
| folderpermission | UpdateQuicksightSharedFolderPermiss | PUT | /v2/quicksight/folders/{folderId}/permissions | Adds permission for quicksight shared folder to sp | No | Microservice.Quicksight | Service Swagger (Microservice. |
| rebalance | UpdateRebalanceSettings | PUT | /v2/rebalances/settings | Modifies the default settings for rebalances. | No | Microservice.Recommend | Service Swagger (Microservice. |
| recommendations | UpdateRecommendationProposal | PUT | /v2/clients/{clientId}/recommendations2/{reco | Updates a recommendation proposal. | No | Microservice.Recommend | Service Swagger + Documentatio |
| reportbranding | UpdateReportBranding | PUT | /v2/report/branding/{id} |  | No | Monolith.Report | Service Swagger (Monolith.Repo |
| entitlement | UpdateRole | PUT | /v2/roles/{roleId} | Updates a role. | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| serviceactivities | UpdateServiceActivity | PUT | /v2/clients/{clientId}/service-activities/{se | Updates a service activity for a specific client. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| settings | UpdateSetting | PUT | /v1/settings | Creates or update secure message notification sett | No | Microservice.SecureMessag | Service Swagger (Microservice. |
| splits | UpdateSplit | PUT | /v2/splits/{splitId} | Updates a split document. | Yes | N/A | Public Swagger v2 |
| subscribes | UpdateSubscribe | PUT | /v1/events/subscribe/{noun} | Update the subscription settings for the party bas | No | Microservice.ChangeNotifi | Service Swagger (Microservice. |
| tasks | UpdateTask | PUT | /v2/activities/tasks/{taskId} | Updates a given task. | No | Monolith.Crm | Service Swagger + Documentatio |
| tasknotes | UpdateTaskNote | PUT | /v2/activities/tasks/{taskId}/notes/{noteId} | Updates a given task note. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| roles | UpdateTemplatesRoles | PUT | /v1/templates/{templateId}/roles |  | No | Microservice.Workflow | Service Swagger (Microservice. |
| tenant | UpdateTenantAddress | PUT | /v2/tenants/{tenantId}/address | Updates Tenant Address. | No | Monolith.Organization | Service Swagger (Monolith.Orga |
| tenant | UpdateTenantDetail | PUT | /v2/tenants/{tenantId} | Updates Tenant Detail. | No | Monolith.Organization | Service Swagger (Monolith.Orga |
| disclosures | UpdateTenantDocumentType | PUT | /v2/disclosures/documentTypes/{documentTypeId | Update an existing Document Type for a tenant | No | Monolith.FactFind | Service Swagger (Monolith.Fact |
| entitlement | UpdateTenantPreferenceDetail | PUT | /v2/tenants/{tenantId}/preferences/{name} | Update tenant preference detail information. | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| recommendations | UpdateTenantRecommendationCategory | PUT | /v2/recommendations2/categories/{categoryId} | Returns a recommendation category document. | No | Microservice.Recommend | Service Swagger + Documentatio |
| recommendations | UpdateTenantRecommendationSubCatego | PUT | /v2/recommendations2/subcategories/{subCatego | Returns a recommendation subcategory document. | No | Microservice.Recommend | Service Swagger + Documentatio |
| tenant | UpdateTenantStatus | PUT | /v2/tenants/{tenantId}/status | Updates Tenant Status. | No | Monolith.Organization | Service Swagger (Monolith.Orga |
| entitlement | UpdateTenantSupport | PUT | /v2/tenants/{tenantId}/support | Update tenant support information. | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| tenanttasksetting | UpdateTenantTaskSetting | PUT | /v2/activities/tasks/tenants/{tenantId}/setti | Updates a given tenant task setting. | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| addresses | UpdateTnccoachAddress | PUT | /v2/tnc_coaches/{tnc_coachId}/addresses/{addr | Updates an existing Address for the given TnC Coac | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| users | UpdateUser | PUT | /v2/users/{userId} | Deprecated:    Update a user | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| entitlement | UpdateUserDetail | PUT | /v2/users/{userId} | Updates a user. | No | Monolith.Entitlement | Service Swagger + Documentatio |
| entitlement | UpdateUsername | PUT | /v2/users/{userId}/username | Updates username. | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| entitlement | UpdateUserStatus | PUT | /v2/users/{userId}/status | Updates user status. | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| reportartifact | UploadArtifactObject | PUT | /v2/report/artifacts/{id}/object | Upload artifact | No | Monolith.Report | Service Swagger (Monolith.Repo |
| users | UserExists | HEAD | /v2/users/{userId} | Check the user is available | No | Monolith.Crm | Service Swagger (Monolith.Crm) |
| entitlement | ValidateDelegate | HEAD | /v2/delegate/{delegateGuid}/validate | Validates if a delegate is valid for a subject. | No | Monolith.Entitlement | Service Swagger (Monolith.Enti |
| provider configuration | ValidateProvider | HEAD | /v2/providerintegrations |  | No | Microservice.ProviderInte | Service Swagger (Microservice. |
| apps, beta | VerifyAppClaims | POST | /v2/apps/{appId}/claims/verify | Verifies claims for a given app | No | Microservice.AppD | Service Swagger (Microservice. |
| clientvideo | VideoReportCallbackNotificationUrl | POST | /v2/clients/media/videos/report/callback | Downloads client video report | No | Microservice.Content | Service Swagger (Microservice. |

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

| Tags | Operation ID | Method | Endpoint | Service |
|------|--------------|--------|----------|---------|
| documents | AdviserDocumentExists | HEAD | /v2/advisers/{adviserId}/documents/{documentI | Monolith.Storage |
| documents | AdviserDocumentHideInPortal | DELETE | /v2/advisers/{adviserId}/documents/{documentI | Microservice.ClientStorag |
| documents | AdviserDocumentShowInPortal | POST | /v2/advisers/{adviserId}/documents/{documentI | Microservice.ClientStorag |
| documents | AssignClientDocument | POST | /v2/clients/{clientId}/documents/{documentId} | Monolith.Storage |
| transactions, beta | BatchCreateClientPlanTransactions | POST | /v2/clients/{clientId}/plans/{planId}/transac | Monolith.Portfolio |
| documents | ClientDocumentHideInPortal | DELETE | /v2/clients/{clientId}/documents/{documentId} | Microservice.ClientStorag |
| documents | ClientDocumentShowInPortal | POST | /v2/clients/{clientId}/documents/{documentId} | Microservice.ClientStorag |
| documents | CreateAdviserDocument | POST | /v2/advisers/{adviserId}/documents | Monolith.Storage |
| insights | CreateClientInsight | POST | /v2/clients/{clientId}/insights | Microservice.Insight |
| recommendations | CreateClientRecommendation | POST | /v2/clients/{clientId}/recommendations2 | Microservice.Recommend |
| productproviders | CreateProductProvider | POST | /v2/productproviders | Monolith.Crm |
| recommendations | CreateRecommendationProposal | POST | /v2/clients/{clientId}/recommendations2/{reco | Microservice.Recommend |
| tasks | CreateTask | POST | /v2/activities/tasks | Monolith.Crm |
| tenants | CreateTenant | POST | /v2/tenants | Monolith.Crm |
| recommendations | CreateTenantRecommendationCategory | POST | /v2/recommendations2/categories | Microservice.Recommend |
| recommendations | CreateTenantRecommendationSubCategory | POST | /v2/recommendations2/subcategories | Microservice.Recommend |
| entitlement | CreateUserDetail | POST | /v2/users | Monolith.Entitlement |
| documents | DeleteAdviserDocument | DELETE | /v2/advisers/{adviserId}/documents/{documentI | Monolith.Storage |
| attitudetorisk | DeleteAtrTemplateV2 | DELETE | /v2/attitudeToRisk/atr_templates/{templateId} | Monolith.Atr |
| recommendations | DeleteClientRecommendation | DELETE | /v2/clients/{clientId}/recommendations2/{reco | Microservice.Recommend |
| recommendations | DeleteRecommendationProposal | DELETE | /v2/clients/{clientId}/recommendations2/{reco | Microservice.Recommend |
| tasks | DeleteTask | DELETE | /v2/activities/tasks/{taskId} | Monolith.Crm |
| recommendations | DeleteTenantRecommendationCategory | DELETE | /v2/recommendations2/categories/{categoryId} | Microservice.Recommend |
| recommendations | DeleteTenantRecommendationSubCategory | DELETE | /v2/recommendations2/subcategories/{subCatego | Microservice.Recommend |
| activitycategories | GetActivityCategory | GET | /v2/activities/categories/{categoryId} | Monolith.Crm |
| activityoutcomes | GetActivityOutcome | GET | /v2/activities/outcomes/{outcomeId} | Monolith.Crm |
| activitypriorities | GetActivityPriority | GET | /v2/activities/priorities/{priorityId} | Monolith.Crm |
| activitytypes | GetActivityType | GET | /v2/activities/types/{typeId} | Monolith.Crm |
| documents | GetAdviserDocument | GET | /v2/advisers/{adviserId}/documents/{documentI | Monolith.Storage |
| insights | GetClientInsights | GET | /v2/clients/{clientId}/insights | Microservice.Insight |
| objectives | GetClientObjective | GET | /v2/clients/{clientId}/objectives/{objectiveI | Microservice.Requirement |
| recommendations | GetClientRecommendation | GET | /v2/clients/{clientId}/recommendations2/{reco | Microservice.Recommend |
| requirements | GetClientRequirement | GET | /v2/clients/{clientId}/requirements/{requirem | Monolith.Crm |
| groups | GetGroup | GET | /v2/groups/{groupId} | Monolith.Crm |
| recommendations | GetRecommendationProposal | GET | /v2/clients/{clientId}/recommendations2/{reco | Microservice.Recommend |
| tasks | GetTask | GET | /v2/activities/tasks/{taskId} | Monolith.Crm |
| recommendations | GetTenantRecommendationCategory | GET | /v2/recommendations2/categories/{categoryId} | Microservice.Recommend |
| recommendations | GetTenantRecommendationSubCategory | GET | /v2/recommendations2/subcategories/{subCatego | Microservice.Recommend |
| entitlement | GetUserDetail | GET | /v2/users/{userId} | Monolith.Entitlement |
| activitycategories | ListActivityCategories | GET | /v2/activities/categories | Monolith.Crm |
| activityoutcomes | ListActivityOutcomes | GET | /v2/activities/outcomes | Monolith.Crm |
| activitypriorities | ListActivityPriorities | GET | /v2/activities/priorities | Monolith.Crm |
| activitytypes | ListActivityTypes | GET | /v2/activities/types | Monolith.Crm |
| documents | ListAdviserDocuments | GET | /v2/advisers/{adviserId}/documents | Monolith.Storage |
| attitudetorisk | ListAtrSystemCategories | GET | /v2/atr/system_categories | Monolith.Atr |
| objectives | ListClientObjectives | GET | /v2/clients/{clientId}/objectives | Microservice.Requirement |
| recommendations | ListClientRecommendations | GET | /v2/clients/{clientId}/recommendations2 | Microservice.Recommend |
| requirements | ListClientRequirements | GET | /v2/clients/{clientId}/requirements | Monolith.Crm |
| holdings | ListClientsHoldings | GET | /v2/clients/{clientId}/holdings | Monolith.Portfolio |
| groups | ListGroups | GET | /v2/groups | Monolith.Crm |
| legacyapps | ListLegacyApps | GET | /v2/users/{userId}/legacyapps | Monolith.Crm |
| recommendations | ListRecommendationProposals | GET | /v2/clients/{clientId}/recommendations2/{reco | Microservice.Recommend |
| tasks | ListTask | GET | /v2/activities/tasks | Monolith.Crm |
| recommendations | ListTenantRecommendationCategories | GET | /v2/recommendations2/categories | Microservice.Recommend |
| recommendations | ListTenantRecommendationSubCategories | GET | /v2/recommendations2/subcategories | Microservice.Recommend |
| entitlement, beta | ListUsersDetails | GET | /v2/users | Monolith.Entitlement |
| recommendations | PatchClientRecommendation | PATCH | /v2/clients/{clientId}/recommendations2/{reco | Microservice.Recommend |
| recommendations | PatchServiceCaseRecommendations | PATCH | /v2/servicecases/{serviceCaseId}/recommendati | Microservice.Recommend |
| documents | UpdateAdviserDocument | PUT | /v2/advisers/{adviserId}/documents/{documentI | Monolith.Storage |
| recommendations | UpdateRecommendationProposal | PUT | /v2/clients/{clientId}/recommendations2/{reco | Microservice.Recommend |
| tasks | UpdateTask | PUT | /v2/activities/tasks/{taskId} | Monolith.Crm |
| recommendations | UpdateTenantRecommendationCategory | PUT | /v2/recommendations2/categories/{categoryId} | Microservice.Recommend |
| recommendations | UpdateTenantRecommendationSubCategory | PUT | /v2/recommendations2/subcategories/{subCatego | Microservice.Recommend |
| entitlement | UpdateUserDetail | PUT | /v2/users/{userId} | Monolith.Entitlement |

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
