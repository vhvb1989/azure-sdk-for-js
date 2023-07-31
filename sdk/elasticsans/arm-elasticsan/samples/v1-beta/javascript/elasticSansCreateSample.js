/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ElasticSanManagement } = require("@azure/arm-elasticsan");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Create ElasticSan.
 *
 * @summary Create ElasticSan.
 * x-ms-original-file: specification/elasticsan/resource-manager/Microsoft.ElasticSan/preview/2022-12-01-preview/examples/ElasticSans_Create_MaximumSet_Gen.json
 */
async function elasticSansCreateMaximumSetGen() {
  const subscriptionId = process.env["ELASTICSANS_SUBSCRIPTION_ID"] || "subscriptionid";
  const resourceGroupName = process.env["ELASTICSANS_RESOURCE_GROUP"] || "resourcegroupname";
  const elasticSanName = "elasticsanname";
  const parameters = {
    availabilityZones: ["1"],
    baseSizeTiB: 5,
    extendedCapacitySizeTiB: 25,
    location: "South Central US",
    sku: { name: "Premium_LRS", tier: "Premium" },
    tags: { key9316: "ihndtieqibtob" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ElasticSanManagement(credential, subscriptionId);
  const result = await client.elasticSans.beginCreateAndWait(
    resourceGroupName,
    elasticSanName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create ElasticSan.
 *
 * @summary Create ElasticSan.
 * x-ms-original-file: specification/elasticsan/resource-manager/Microsoft.ElasticSan/preview/2022-12-01-preview/examples/ElasticSans_Create_MinimumSet_Gen.json
 */
async function elasticSansCreateMinimumSetGen() {
  const subscriptionId = process.env["ELASTICSANS_SUBSCRIPTION_ID"] || "subscriptionid";
  const resourceGroupName = process.env["ELASTICSANS_RESOURCE_GROUP"] || "resourcegroupname";
  const elasticSanName = "elasticsanname";
  const parameters = {
    baseSizeTiB: 5,
    extendedCapacitySizeTiB: 25,
    location: "South Central US",
    sku: { name: "Premium_LRS" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ElasticSanManagement(credential, subscriptionId);
  const result = await client.elasticSans.beginCreateAndWait(
    resourceGroupName,
    elasticSanName,
    parameters
  );
  console.log(result);
}

async function main() {
  elasticSansCreateMaximumSetGen();
  elasticSansCreateMinimumSetGen();
}

main().catch(console.error);
