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
  ClusterResizeParameters,
  HDInsightManagementClient
} from "@azure/arm-hdinsight";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Resizes the specified HDInsight cluster to the specified size.
 *
 * @summary Resizes the specified HDInsight cluster to the specified size.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/stable/2021-06-01/examples/ResizeLinuxHadoopCluster.json
 */
async function resizeTheWorkerNodesForAHadoopOnLinuxCluster() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const clusterName = "cluster1";
  const roleName = "workernode";
  const parameters: ClusterResizeParameters = { targetInstanceCount: 10 };
  const credential = new DefaultAzureCredential();
  const client = new HDInsightManagementClient(credential, subscriptionId);
  const result = await client.clusters.beginResizeAndWait(
    resourceGroupName,
    clusterName,
    roleName,
    parameters
  );
  console.log(result);
}

resizeTheWorkerNodesForAHadoopOnLinuxCluster().catch(console.error);
