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
  FollowerDatabaseDefinition,
  KustoManagementClient
} from "@azure/arm-kusto";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Detaches all followers of a database owned by this cluster.
 *
 * @summary Detaches all followers of a database owned by this cluster.
 * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2023-05-02/examples/KustoClusterDetachFollowerDatabases.json
 */
async function kustoClusterDetachFollowerDatabases() {
  const subscriptionId =
    process.env["KUSTO_SUBSCRIPTION_ID"] ||
    "12345678-1234-1234-1234-123456789098";
  const resourceGroupName =
    process.env["KUSTO_RESOURCE_GROUP"] || "kustorptest";
  const clusterName = "kustoCluster";
  const followerDatabaseToRemove: FollowerDatabaseDefinition = {
    attachedDatabaseConfigurationName: "attachedDatabaseConfigurationsTest",
    clusterResourceId:
      "/subscriptions/12345678-1234-1234-1234-123456789098/resourceGroups/kustorptest/providers/Microsoft.Kusto/clusters/kustoCluster2"
  };
  const credential = new DefaultAzureCredential();
  const client = new KustoManagementClient(credential, subscriptionId);
  const result = await client.clusters.beginDetachFollowerDatabasesAndWait(
    resourceGroupName,
    clusterName,
    followerDatabaseToRemove
  );
  console.log(result);
}

async function main() {
  kustoClusterDetachFollowerDatabases();
}

main().catch(console.error);
