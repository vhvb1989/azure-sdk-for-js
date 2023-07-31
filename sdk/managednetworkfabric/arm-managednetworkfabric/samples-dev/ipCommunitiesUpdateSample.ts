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
  IpCommunityPatch,
  AzureNetworkFabricManagementServiceAPI
} from "@azure/arm-managednetworkfabric";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to API to update certain properties of the IP Community resource.
 *
 * @summary API to update certain properties of the IP Community resource.
 * x-ms-original-file: specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/stable/2023-06-15/examples/IpCommunities_Update_MaximumSet_Gen.json
 */
async function ipCommunitiesUpdateMaximumSetGen() {
  const subscriptionId =
    process.env["MANAGEDNETWORKFABRIC_SUBSCRIPTION_ID"] ||
    "1234ABCD-0A1B-1234-5678-123456ABCDEF";
  const resourceGroupName =
    process.env["MANAGEDNETWORKFABRIC_RESOURCE_GROUP"] || "example-rg";
  const ipCommunityName = "example-ipcommunity";
  const body: IpCommunityPatch = {
    ipCommunityRules: [
      {
        action: "Permit",
        communityMembers: ["1:1"],
        sequenceNumber: 4155123341,
        wellKnownCommunities: ["Internet"]
      }
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureNetworkFabricManagementServiceAPI(
    credential,
    subscriptionId
  );
  const result = await client.ipCommunities.beginUpdateAndWait(
    resourceGroupName,
    ipCommunityName,
    body
  );
  console.log(result);
}

async function main() {
  ipCommunitiesUpdateMaximumSetGen();
}

main().catch(console.error);
