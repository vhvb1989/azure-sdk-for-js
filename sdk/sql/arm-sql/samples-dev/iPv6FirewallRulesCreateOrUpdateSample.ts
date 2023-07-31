/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { IPv6FirewallRule, SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates an IPv6 firewall rule.
 *
 * @summary Creates or updates an IPv6 firewall rule.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2022-11-01-preview/examples/IPv6FirewallRuleCreate.json
 */
async function createAnIPv6FirewallRuleMaxOrMin() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "firewallrulecrudtest-12";
  const serverName = "firewallrulecrudtest-6285";
  const firewallRuleName = "firewallrulecrudtest-5370";
  const parameters: IPv6FirewallRule = {
    endIPv6Address: "0000:0000:0000:0000:0000:ffff:0000:0003",
    startIPv6Address: "0000:0000:0000:0000:0000:ffff:0000:0003"
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.iPv6FirewallRules.createOrUpdate(
    resourceGroupName,
    serverName,
    firewallRuleName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates an IPv6 firewall rule.
 *
 * @summary Creates or updates an IPv6 firewall rule.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2022-11-01-preview/examples/IPv6FirewallRuleUpdate.json
 */
async function updateAnIPv6FirewallRuleMaxOrMin() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "firewallrulecrudtest-12";
  const serverName = "firewallrulecrudtest-6285";
  const firewallRuleName = "firewallrulecrudtest-3927";
  const parameters: IPv6FirewallRule = {
    endIPv6Address: "0000:0000:0000:0000:0000:ffff:0000:0001",
    startIPv6Address: "0000:0000:0000:0000:0000:ffff:0000:0001"
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.iPv6FirewallRules.createOrUpdate(
    resourceGroupName,
    serverName,
    firewallRuleName,
    parameters
  );
  console.log(result);
}

async function main() {
  createAnIPv6FirewallRuleMaxOrMin();
  updateAnIPv6FirewallRuleMaxOrMin();
}

main().catch(console.error);
