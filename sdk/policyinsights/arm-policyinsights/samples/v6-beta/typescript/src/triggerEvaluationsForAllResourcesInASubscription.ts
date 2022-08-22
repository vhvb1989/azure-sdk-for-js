/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Triggers a policy evaluation scan for all the resources under the subscription
 *
 * @summary Triggers a policy evaluation scan for all the resources under the subscription
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2019-10-01/examples/PolicyStates_TriggerSubscriptionEvaluation.json
 */
import { PolicyInsightsClient } from "@azure/arm-policyinsights";
import { DefaultAzureCredential } from "@azure/identity";

async function triggerEvaluationsForAllResourcesInASubscription() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const subscriptionId2 = "fffedd8f-ffff-fffd-fffd-fffed2f84852";
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential, subscriptionId);
  const result = await client.policyStates.beginTriggerSubscriptionEvaluationAndWait(
    subscriptionId2
  );
  console.log(result);
}

triggerEvaluationsForAllResourcesInASubscription().catch(console.error);
