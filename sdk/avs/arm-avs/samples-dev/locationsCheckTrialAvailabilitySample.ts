/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureVMwareSolutionAPI } from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Return trial status for subscription by region
 *
 * @summary Return trial status for subscription by region
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2021-12-01/examples/Locations_CheckTrialAvailability.json
 */
async function locationsCheckTrialAvailability() {
  const subscriptionId = "{subscription-id}";
  const location = "eastus";
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.locations.checkTrialAvailability(location);
  console.log(result);
}

locationsCheckTrialAvailability().catch(console.error);
