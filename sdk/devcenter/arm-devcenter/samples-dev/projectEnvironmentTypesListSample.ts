/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DevCenterClient } from "@azure/arm-devcenter";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Lists environment types for a project.
 *
 * @summary Lists environment types for a project.
 * x-ms-original-file: specification/devcenter/resource-manager/Microsoft.DevCenter/preview/2022-08-01-preview/examples/ProjectEnvironmentTypes_List.json
 */
async function projectEnvironmentTypesList() {
  const subscriptionId = "{subscriptionId}";
  const resourceGroupName = "rg1";
  const projectName = "ContosoProj";
  const credential = new DefaultAzureCredential();
  const client = new DevCenterClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.projectEnvironmentTypes.list(
    resourceGroupName,
    projectName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

projectEnvironmentTypesList().catch(console.error);
