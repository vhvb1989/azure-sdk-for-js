/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { PaloAltoNetworksCloudngfw } = require("@azure/arm-paloaltonetworksngfw");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Get a LocalRulesResource
 *
 * @summary Get a LocalRulesResource
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/preview/2022-08-29-preview/examples/LocalRules_Get_MaximumSet_Gen.json
 */
async function localRulesGetMaximumSetGen() {
  const subscriptionId =
    process.env["PALOALTONETWORKSNGFW_SUBSCRIPTION_ID"] || "2bf4a339-294d-4c25-b0b2-ef649e9f5c27";
  const resourceGroupName = process.env["PALOALTONETWORKSNGFW_RESOURCE_GROUP"] || "firewall-rg";
  const localRulestackName = "lrs1";
  const priority = "1";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential, subscriptionId);
  const result = await client.localRules.get(resourceGroupName, localRulestackName, priority);
  console.log(result);
}

/**
 * This sample demonstrates how to Get a LocalRulesResource
 *
 * @summary Get a LocalRulesResource
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/preview/2022-08-29-preview/examples/LocalRules_Get_MinimumSet_Gen.json
 */
async function localRulesGetMinimumSetGen() {
  const subscriptionId =
    process.env["PALOALTONETWORKSNGFW_SUBSCRIPTION_ID"] || "2bf4a339-294d-4c25-b0b2-ef649e9f5c27";
  const resourceGroupName = process.env["PALOALTONETWORKSNGFW_RESOURCE_GROUP"] || "firewall-rg";
  const localRulestackName = "lrs1";
  const priority = "1";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential, subscriptionId);
  const result = await client.localRules.get(resourceGroupName, localRulestackName, priority);
  console.log(result);
}

async function main() {
  localRulesGetMaximumSetGen();
  localRulesGetMinimumSetGen();
}

main().catch(console.error);
