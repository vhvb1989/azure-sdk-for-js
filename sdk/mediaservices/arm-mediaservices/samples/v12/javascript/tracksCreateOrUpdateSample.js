/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureMediaServices } = require("@azure/arm-mediaservices");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or update a Track in the asset
 *
 * @summary Create or update a Track in the asset
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/stable/2021-11-01/examples/asset-tracks-create.json
 */
async function createsATrack() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "contoso";
  const accountName = "contosomedia";
  const assetName = "ClimbingMountRainer";
  const trackName = "text3";
  const parameters = {
    track: {
      odataType: "#Microsoft.Media.TextTrack",
      displayName: "A new track",
      fileName: "text3.ttml",
      playerVisibility: "Visible",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.tracks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    accountName,
    assetName,
    trackName,
    parameters
  );
  console.log(result);
}

createsATrack().catch(console.error);
