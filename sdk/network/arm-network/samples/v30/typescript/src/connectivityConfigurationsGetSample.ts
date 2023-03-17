/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets a Network Connectivity Configuration, specified by the resource group, network manager name, and connectivity Configuration name
 *
 * @summary Gets a Network Connectivity Configuration, specified by the resource group, network manager name, and connectivity Configuration name
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-09-01/examples/NetworkManagerConnectivityConfigurationGet.json
 */
async function connectivityConfigurationsGet() {
  const subscriptionId =
    process.env["NETWORK_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["NETWORK_RESOURCE_GROUP"] || "myResourceGroup";
  const networkManagerName = "testNetworkManager";
  const configurationName = "myTestConnectivityConfig";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.connectivityConfigurations.get(
    resourceGroupName,
    networkManagerName,
    configurationName
  );
  console.log(result);
}

async function main() {
  connectivityConfigurationsGet();
}

main().catch(console.error);
