/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Lists active security admin rules in a network manager.
 *
 * @summary Lists active security admin rules in a network manager.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-09-01/examples/NetworkManagerActiveSecurityAdminRulesList.json
 */
async function listActiveSecurityAdminRules() {
  const subscriptionId =
    process.env["NETWORK_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "myResourceGroup";
  const networkManagerName = "testNetworkManager";
  const parameters = {
    regions: ["westus"],
    skipToken: "fakeSkipTokenCode",
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.listActiveSecurityAdminRules(
    resourceGroupName,
    networkManagerName,
    parameters
  );
  console.log(result);
}

async function main() {
  listActiveSecurityAdminRules();
}

main().catch(console.error);
