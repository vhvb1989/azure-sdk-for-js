// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzurePluginContext } from "../../identity/src/plugins/provider";
import { IdentityPlugin } from "@azure/identity";
import { NativeBrokerPlugin } from "@azure/msal-node-extensions";

export const cachePersistencePlugin: IdentityPlugin = (context) => {
  const { nativeBrokerPluginControl } = context as AzurePluginContext;

  nativeBrokerPluginControl.setNativeBroker(async () => new NativeBrokerPlugin());
};
