/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ApiManagementClient } from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets the entity state (Etag) version of the backend specified by its identifier.
 *
 * @summary Gets the entity state (Etag) version of the backend specified by its identifier.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementHeadBackend.json
 */
async function apiManagementHeadBackend() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const backendId = "sfbackend";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.backend.getEntityTag(
    resourceGroupName,
    serviceName,
    backendId
  );
  console.log(result);
}

apiManagementHeadBackend().catch(console.error);
