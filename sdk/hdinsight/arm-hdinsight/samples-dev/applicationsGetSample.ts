/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { HDInsightManagementClient } from "@azure/arm-hdinsight";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets properties of the specified application.
 *
 * @summary Gets properties of the specified application.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/stable/2021-06-01/examples/GetApplicationInProgress.json
 */
async function getApplicationOnHdInsightClusterCreationInProgress() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const clusterName = "cluster1";
  const applicationName = "app";
  const credential = new DefaultAzureCredential();
  const client = new HDInsightManagementClient(credential, subscriptionId);
  const result = await client.applications.get(
    resourceGroupName,
    clusterName,
    applicationName
  );
  console.log(result);
}

getApplicationOnHdInsightClusterCreationInProgress().catch(console.error);

/**
 * This sample demonstrates how to Gets properties of the specified application.
 *
 * @summary Gets properties of the specified application.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/stable/2021-06-01/examples/GetApplicationCreated.json
 */
async function getApplicationOnHdInsightClusterSuccessfullyCreated() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const clusterName = "cluster1";
  const applicationName = "app";
  const credential = new DefaultAzureCredential();
  const client = new HDInsightManagementClient(credential, subscriptionId);
  const result = await client.applications.get(
    resourceGroupName,
    clusterName,
    applicationName
  );
  console.log(result);
}

getApplicationOnHdInsightClusterSuccessfullyCreated().catch(console.error);
