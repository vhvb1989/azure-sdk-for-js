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
 * This sample demonstrates how to Get a global reach connection by name in a private cloud
 *
 * @summary Get a global reach connection by name in a private cloud
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2021-12-01/examples/GlobalReachConnections_Get.json
 */
async function globalReachConnectionsGet() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "group1";
  const privateCloudName = "cloud1";
  const globalReachConnectionName = "connection1";
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.globalReachConnections.get(
    resourceGroupName,
    privateCloudName,
    globalReachConnectionName
  );
  console.log(result);
}

globalReachConnectionsGet().catch(console.error);
