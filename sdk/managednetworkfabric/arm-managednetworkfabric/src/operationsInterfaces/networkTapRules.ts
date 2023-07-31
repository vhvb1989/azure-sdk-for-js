/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  NetworkTapRule,
  NetworkTapRulesListByResourceGroupOptionalParams,
  NetworkTapRulesListBySubscriptionOptionalParams,
  NetworkTapRulesCreateOptionalParams,
  NetworkTapRulesCreateResponse,
  NetworkTapRulesGetOptionalParams,
  NetworkTapRulesGetResponse,
  NetworkTapRulePatch,
  NetworkTapRulesUpdateOptionalParams,
  NetworkTapRulesUpdateResponse,
  NetworkTapRulesDeleteOptionalParams,
  NetworkTapRulesDeleteResponse,
  UpdateAdministrativeState,
  NetworkTapRulesUpdateAdministrativeStateOptionalParams,
  NetworkTapRulesUpdateAdministrativeStateResponse,
  NetworkTapRulesResyncOptionalParams,
  NetworkTapRulesResyncResponse,
  NetworkTapRulesValidateConfigurationOptionalParams,
  NetworkTapRulesValidateConfigurationResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a NetworkTapRules. */
export interface NetworkTapRules {
  /**
   * List all the Network Tap Rule resources in the given resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: NetworkTapRulesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<NetworkTapRule>;
  /**
   * List all the Network Tap Rule resources in the given subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: NetworkTapRulesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<NetworkTapRule>;
  /**
   * Create Network Tap Rule resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapRuleName Name of the Network Tap Rule.
   * @param body Request payload.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    networkTapRuleName: string,
    body: NetworkTapRule,
    options?: NetworkTapRulesCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkTapRulesCreateResponse>,
      NetworkTapRulesCreateResponse
    >
  >;
  /**
   * Create Network Tap Rule resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapRuleName Name of the Network Tap Rule.
   * @param body Request payload.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    networkTapRuleName: string,
    body: NetworkTapRule,
    options?: NetworkTapRulesCreateOptionalParams
  ): Promise<NetworkTapRulesCreateResponse>;
  /**
   * Get Network Tap Rule resource details.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapRuleName Name of the Network Tap Rule.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    networkTapRuleName: string,
    options?: NetworkTapRulesGetOptionalParams
  ): Promise<NetworkTapRulesGetResponse>;
  /**
   * Update certain properties of the Network Tap Rule resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapRuleName Name of the Network Tap Rule.
   * @param body Network Tap Rule properties to update.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    networkTapRuleName: string,
    body: NetworkTapRulePatch,
    options?: NetworkTapRulesUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkTapRulesUpdateResponse>,
      NetworkTapRulesUpdateResponse
    >
  >;
  /**
   * Update certain properties of the Network Tap Rule resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapRuleName Name of the Network Tap Rule.
   * @param body Network Tap Rule properties to update.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    networkTapRuleName: string,
    body: NetworkTapRulePatch,
    options?: NetworkTapRulesUpdateOptionalParams
  ): Promise<NetworkTapRulesUpdateResponse>;
  /**
   * Delete Network Tap Rule resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapRuleName Name of the Network Tap Rule.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    networkTapRuleName: string,
    options?: NetworkTapRulesDeleteOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkTapRulesDeleteResponse>,
      NetworkTapRulesDeleteResponse
    >
  >;
  /**
   * Delete Network Tap Rule resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapRuleName Name of the Network Tap Rule.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    networkTapRuleName: string,
    options?: NetworkTapRulesDeleteOptionalParams
  ): Promise<NetworkTapRulesDeleteResponse>;
  /**
   * Implements the operation to the underlying resources.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapRuleName Name of the Network Tap Rule.
   * @param body Request payload.
   * @param options The options parameters.
   */
  beginUpdateAdministrativeState(
    resourceGroupName: string,
    networkTapRuleName: string,
    body: UpdateAdministrativeState,
    options?: NetworkTapRulesUpdateAdministrativeStateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkTapRulesUpdateAdministrativeStateResponse>,
      NetworkTapRulesUpdateAdministrativeStateResponse
    >
  >;
  /**
   * Implements the operation to the underlying resources.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapRuleName Name of the Network Tap Rule.
   * @param body Request payload.
   * @param options The options parameters.
   */
  beginUpdateAdministrativeStateAndWait(
    resourceGroupName: string,
    networkTapRuleName: string,
    body: UpdateAdministrativeState,
    options?: NetworkTapRulesUpdateAdministrativeStateOptionalParams
  ): Promise<NetworkTapRulesUpdateAdministrativeStateResponse>;
  /**
   * Implements the operation to the underlying resources.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapRuleName Name of the Network Tap Rule.
   * @param options The options parameters.
   */
  beginResync(
    resourceGroupName: string,
    networkTapRuleName: string,
    options?: NetworkTapRulesResyncOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkTapRulesResyncResponse>,
      NetworkTapRulesResyncResponse
    >
  >;
  /**
   * Implements the operation to the underlying resources.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapRuleName Name of the Network Tap Rule.
   * @param options The options parameters.
   */
  beginResyncAndWait(
    resourceGroupName: string,
    networkTapRuleName: string,
    options?: NetworkTapRulesResyncOptionalParams
  ): Promise<NetworkTapRulesResyncResponse>;
  /**
   * Implements the operation to the underlying resources.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapRuleName Name of the Network Tap Rule.
   * @param options The options parameters.
   */
  beginValidateConfiguration(
    resourceGroupName: string,
    networkTapRuleName: string,
    options?: NetworkTapRulesValidateConfigurationOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkTapRulesValidateConfigurationResponse>,
      NetworkTapRulesValidateConfigurationResponse
    >
  >;
  /**
   * Implements the operation to the underlying resources.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkTapRuleName Name of the Network Tap Rule.
   * @param options The options parameters.
   */
  beginValidateConfigurationAndWait(
    resourceGroupName: string,
    networkTapRuleName: string,
    options?: NetworkTapRulesValidateConfigurationOptionalParams
  ): Promise<NetworkTapRulesValidateConfigurationResponse>;
}
