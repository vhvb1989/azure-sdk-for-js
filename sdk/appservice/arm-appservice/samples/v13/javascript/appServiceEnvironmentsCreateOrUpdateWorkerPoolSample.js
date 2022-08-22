/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Description for Create or update a worker pool.
 *
 * @summary Description for Create or update a worker pool.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/AppServiceEnvironments_CreateOrUpdateWorkerPool.json
 */
async function getPropertiesOfAWorkerPool() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "test-rg";
  const name = "test-ase";
  const workerPoolName = "0";
  const workerPoolEnvelope = {
    workerCount: 3,
    workerSize: "Small",
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.appServiceEnvironments.beginCreateOrUpdateWorkerPoolAndWait(
    resourceGroupName,
    name,
    workerPoolName,
    workerPoolEnvelope
  );
  console.log(result);
}

getPropertiesOfAWorkerPool().catch(console.error);
