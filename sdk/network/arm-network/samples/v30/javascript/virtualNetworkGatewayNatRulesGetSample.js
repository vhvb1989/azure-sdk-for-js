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
 * This sample demonstrates how to Retrieves the details of a nat rule.
 *
 * @summary Retrieves the details of a nat rule.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-09-01/examples/VirtualNetworkGatewayNatRuleGet.json
 */
async function virtualNetworkGatewayNatRuleGet() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const virtualNetworkGatewayName = "gateway1";
  const natRuleName = "natRule1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualNetworkGatewayNatRules.get(
    resourceGroupName,
    virtualNetworkGatewayName,
    natRuleName
  );
  console.log(result);
}

async function main() {
  virtualNetworkGatewayNatRuleGet();
}

main().catch(console.error);
