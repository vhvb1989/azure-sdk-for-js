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
 * This sample demonstrates how to Return information about a script cmdlet resource in a specific package on a private cloud
 *
 * @summary Return information about a script cmdlet resource in a specific package on a private cloud
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2021-12-01/examples/ScriptCmdlets_Get.json
 */
async function scriptCmdletsGet() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "group1";
  const privateCloudName = "{privateCloudName}";
  const scriptPackageName = "{scriptPackageName}";
  const scriptCmdletName = "New-ExternalSsoDomain";
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.scriptCmdlets.get(
    resourceGroupName,
    privateCloudName,
    scriptPackageName,
    scriptCmdletName
  );
  console.log(result);
}

scriptCmdletsGet().catch(console.error);
