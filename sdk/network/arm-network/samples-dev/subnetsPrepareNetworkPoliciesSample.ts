/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  PrepareNetworkPoliciesRequest,
  NetworkManagementClient
} from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Prepares a subnet by applying network intent policies.
 *
 * @summary Prepares a subnet by applying network intent policies.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-01-01/examples/SubnetPrepareNetworkPolicies.json
 */
async function prepareNetworkPolicies() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const virtualNetworkName = "test-vnet";
  const subnetName = "subnet1";
  const prepareNetworkPoliciesRequestParameters: PrepareNetworkPoliciesRequest = {
    serviceName: "Microsoft.Sql/managedInstances"
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.subnets.beginPrepareNetworkPoliciesAndWait(
    resourceGroupName,
    virtualNetworkName,
    subnetName,
    prepareNetworkPoliciesRequestParameters
  );
  console.log(result);
}

prepareNetworkPolicies().catch(console.error);
