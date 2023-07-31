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
  UpdateAdministrativeState,
  AzureNetworkFabricManagementServiceAPI
} from "@azure/arm-managednetworkfabric";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Updates the Infra Management BFD Configuration of the underlying resources in the given Network Fabric instance.
 *
 * @summary Updates the Infra Management BFD Configuration of the underlying resources in the given Network Fabric instance.
 * x-ms-original-file: specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/stable/2023-06-15/examples/NetworkFabrics_UpdateInfraManagementBfdConfiguration_MaximumSet_Gen.json
 */
async function networkFabricsUpdateInfraManagementBfdConfigurationMaximumSetGen() {
  const subscriptionId =
    process.env["MANAGEDNETWORKFABRIC_SUBSCRIPTION_ID"] ||
    "1234ABCD-0A1B-1234-5678-123456ABCDEF";
  const resourceGroupName =
    process.env["MANAGEDNETWORKFABRIC_RESOURCE_GROUP"] || "example-rg";
  const networkFabricName = "example-fabric";
  const body: UpdateAdministrativeState = {
    resourceIds: [""],
    state: "Enable"
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureNetworkFabricManagementServiceAPI(
    credential,
    subscriptionId
  );
  const result = await client.networkFabrics.beginUpdateInfraManagementBfdConfigurationAndWait(
    resourceGroupName,
    networkFabricName,
    body
  );
  console.log(result);
}

async function main() {
  networkFabricsUpdateInfraManagementBfdConfigurationMaximumSetGen();
}

main().catch(console.error);
