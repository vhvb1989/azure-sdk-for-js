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
  StorageAppliancePatchParameters,
  StorageAppliancesUpdateOptionalParams,
  NetworkCloud
} from "@azure/arm-networkcloud";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update properties of the provided storage appliance, or update tags associated with the storage appliance Properties and tag updates can be done independently.
 *
 * @summary Update properties of the provided storage appliance, or update tags associated with the storage appliance Properties and tag updates can be done independently.
 * x-ms-original-file: specification/networkcloud/resource-manager/Microsoft.NetworkCloud/preview/2023-05-01-preview/examples/StorageAppliances_Patch.json
 */
async function patchStorageAppliance() {
  const subscriptionId =
    process.env["NETWORKCLOUD_SUBSCRIPTION_ID"] ||
    "123e4567-e89b-12d3-a456-426655440000";
  const resourceGroupName =
    process.env["NETWORKCLOUD_RESOURCE_GROUP"] || "resourceGroupName";
  const storageApplianceName = "storageApplianceName";
  const storageApplianceUpdateParameters: StorageAppliancePatchParameters = {
    serialNumber: "BM1219XXX",
    tags: { key1: "myvalue1", key2: "myvalue2" }
  };
  const options: StorageAppliancesUpdateOptionalParams = {
    storageApplianceUpdateParameters
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkCloud(credential, subscriptionId);
  const result = await client.storageAppliances.beginUpdateAndWait(
    resourceGroupName,
    storageApplianceName,
    options
  );
  console.log(result);
}

async function main() {
  patchStorageAppliance();
}

main().catch(console.error);
