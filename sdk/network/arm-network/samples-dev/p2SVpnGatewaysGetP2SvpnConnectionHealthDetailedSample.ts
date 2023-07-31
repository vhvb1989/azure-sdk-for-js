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
  P2SVpnConnectionHealthRequest,
  NetworkManagementClient
} from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets the sas url to get the connection health detail of P2S clients of the virtual wan P2SVpnGateway in the specified resource group.
 *
 * @summary Gets the sas url to get the connection health detail of P2S clients of the virtual wan P2SVpnGateway in the specified resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-02-01/examples/P2SVpnGatewayGetConnectionHealthDetailed.json
 */
async function p2SVpnGatewayGetConnectionHealthDetailed() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["NETWORK_RESOURCE_GROUP"] || "p2s-vpn-gateway-test";
  const gatewayName = "p2svpngateway";
  const request: P2SVpnConnectionHealthRequest = {
    outputBlobSasUrl:
      "https://blobcortextesturl.blob.core.windows.net/folderforconfig/p2sconnectionhealths?sp=rw&se=2018-01-10T03%3A42%3A04Z&sv=2017-04-17&sig=WvXrT5bDmDFfgHs%2Brz%2BjAu123eRCNE9BO0eQYcPDT7pY%3D&sr=b",
    vpnUserNamesFilter: ["vpnUser1", "vpnUser2"]
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.p2SVpnGateways.beginGetP2SVpnConnectionHealthDetailedAndWait(
    resourceGroupName,
    gatewayName,
    request
  );
  console.log(result);
}

async function main() {
  p2SVpnGatewayGetConnectionHealthDetailed();
}

main().catch(console.error);
