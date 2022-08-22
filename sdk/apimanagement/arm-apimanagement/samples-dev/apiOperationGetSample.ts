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
 * This sample demonstrates how to Gets the details of the API Operation specified by its identifier.
 *
 * @summary Gets the details of the API Operation specified by its identifier.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementGetApiOperation.json
 */
async function apiManagementGetApiOperation() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const apiId = "57d2ef278aa04f0888cba3f3";
  const operationId = "57d2ef278aa04f0ad01d6cdc";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.apiOperation.get(
    resourceGroupName,
    serviceName,
    apiId,
    operationId
  );
  console.log(result);
}

apiManagementGetApiOperation().catch(console.error);

/**
 * This sample demonstrates how to Gets the details of the API Operation specified by its identifier.
 *
 * @summary Gets the details of the API Operation specified by its identifier.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementGetApiOperationPetStore.json
 */
async function apiManagementGetApiOperationPetStore() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const apiId = "swagger-petstore";
  const operationId = "loginUser";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.apiOperation.get(
    resourceGroupName,
    serviceName,
    apiId,
    operationId
  );
  console.log(result);
}

apiManagementGetApiOperationPetStore().catch(console.error);
