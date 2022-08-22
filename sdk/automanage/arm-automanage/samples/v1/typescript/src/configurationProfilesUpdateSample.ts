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
  ConfigurationProfileUpdate,
  AutomanageClient
} from "@azure/arm-automanage";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Updates a configuration profile
 *
 * @summary Updates a configuration profile
 * x-ms-original-file: specification/automanage/resource-manager/Microsoft.Automanage/stable/2022-05-04/examples/updateConfigurationProfile.json
 */
async function updateConfigurationProfile() {
  const subscriptionId = "mySubscriptionId";
  const configurationProfileName = "customConfigurationProfile";
  const resourceGroupName = "myResourceGroupName";
  const parameters: ConfigurationProfileUpdate = {
    properties: {
      configuration: {
        "Antimalware/Enable": false,
        "AzureSecurityCenter/Enable": true,
        "Backup/Enable": false,
        "BootDiagnostics/Enable": true,
        "ChangeTrackingAndInventory/Enable": true,
        "GuestConfiguration/Enable": true,
        "LogAnalytics/Enable": true,
        "UpdateManagement/Enable": true,
        "VMInsights/Enable": true
      }
    },
    tags: { organization: "Administration" }
  };
  const credential = new DefaultAzureCredential();
  const client = new AutomanageClient(credential, subscriptionId);
  const result = await client.configurationProfiles.update(
    configurationProfileName,
    resourceGroupName,
    parameters
  );
  console.log(result);
}

updateConfigurationProfile().catch(console.error);
