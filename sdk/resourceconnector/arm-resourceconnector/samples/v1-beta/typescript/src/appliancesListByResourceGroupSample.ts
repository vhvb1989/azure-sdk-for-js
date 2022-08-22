/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ResourceConnectorManagementClient } from "@azure/arm-resourceconnector";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets a list of Appliances in the specified subscription and resource group. The operation returns properties of each Appliance.
 *
 * @summary Gets a list of Appliances in the specified subscription and resource group. The operation returns properties of each Appliance.
 * x-ms-original-file: specification/resourceconnector/resource-manager/Microsoft.ResourceConnector/preview/2022-04-15-preview/examples/AppliancesListByResourceGroup.json
 */
async function listAppliancesByResourceGroup() {
  const subscriptionId = "11111111-2222-3333-4444-555555555555";
  const resourceGroupName = "testresourcegroup";
  const credential = new DefaultAzureCredential();
  const client = new ResourceConnectorManagementClient(
    credential,
    subscriptionId
  );
  const resArray = new Array();
  for await (let item of client.appliances.listByResourceGroup(
    resourceGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listAppliancesByResourceGroup().catch(console.error);
