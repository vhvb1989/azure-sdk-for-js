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
 * This sample demonstrates how to Lists the collection of Certificate Authorities for the specified Gateway entity.
 *
 * @summary Lists the collection of Certificate Authorities for the specified Gateway entity.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementListGatewayCertificateAuthorities.json
 */
async function apiManagementListGatewaycertificateAuthorities() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceName = "apimService1";
  const gatewayId = "gw1";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.gatewayCertificateAuthority.listByService(
    resourceGroupName,
    serviceName,
    gatewayId
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

apiManagementListGatewaycertificateAuthorities().catch(console.error);
