/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { TagsResource, IotHubClient } from "@azure/arm-iothub";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update an existing IoT Hub tags. to update other fields use the CreateOrUpdate method
 *
 * @summary Update an existing IoT Hub tags. to update other fields use the CreateOrUpdate method
 * x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/preview/2022-11-15-preview/examples/iothub_patch.json
 */
async function iotHubResourceUpdate() {
  const subscriptionId =
    process.env["IOTHUB_SUBSCRIPTION_ID"] ||
    "91d12660-3dec-467a-be2a-213b5544ddc0";
  const resourceGroupName =
    process.env["IOTHUB_RESOURCE_GROUP"] || "myResourceGroup";
  const resourceName = "myHub";
  const iotHubTags: TagsResource = { tags: { foo: "bar" } };
  const credential = new DefaultAzureCredential();
  const client = new IotHubClient(credential, subscriptionId);
  const result = await client.iotHubResource.beginUpdateAndWait(
    resourceGroupName,
    resourceName,
    iotHubTags
  );
  console.log(result);
}

async function main() {
  iotHubResourceUpdate();
}

main().catch(console.error);
