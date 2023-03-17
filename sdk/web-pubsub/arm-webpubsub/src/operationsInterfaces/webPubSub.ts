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
  WebPubSubResource,
  WebPubSubListBySubscriptionOptionalParams,
  WebPubSubListByResourceGroupOptionalParams,
  NameAvailabilityParameters,
  WebPubSubCheckNameAvailabilityOptionalParams,
  WebPubSubCheckNameAvailabilityResponse,
  WebPubSubGetOptionalParams,
  WebPubSubGetResponse,
  WebPubSubCreateOrUpdateOptionalParams,
  WebPubSubCreateOrUpdateResponse,
  WebPubSubDeleteOptionalParams,
  WebPubSubUpdateOptionalParams,
  WebPubSubUpdateResponse,
  WebPubSubListKeysOptionalParams,
  WebPubSubListKeysResponse,
  RegenerateKeyParameters,
  WebPubSubRegenerateKeyOptionalParams,
  WebPubSubRegenerateKeyResponse,
  WebPubSubRestartOptionalParams,
  WebPubSubListSkusOptionalParams,
  WebPubSubListSkusResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a WebPubSub. */
export interface WebPubSub {
  /**
   * Handles requests to list all resources in a subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: WebPubSubListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<WebPubSubResource>;
  /**
   * Handles requests to list all resources in a resource group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: WebPubSubListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<WebPubSubResource>;
  /**
   * Checks that the resource name is valid and is not already in use.
   * @param location the region
   * @param parameters Parameters supplied to the operation.
   * @param options The options parameters.
   */
  checkNameAvailability(
    location: string,
    parameters: NameAvailabilityParameters,
    options?: WebPubSubCheckNameAvailabilityOptionalParams
  ): Promise<WebPubSubCheckNameAvailabilityResponse>;
  /**
   * Get the resource and its properties.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubGetOptionalParams
  ): Promise<WebPubSubGetResponse>;
  /**
   * Create or update a resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param parameters Parameters for the create or update operation
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    parameters: WebPubSubResource,
    options?: WebPubSubCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<WebPubSubCreateOrUpdateResponse>,
      WebPubSubCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update a resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param parameters Parameters for the create or update operation
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    resourceName: string,
    parameters: WebPubSubResource,
    options?: WebPubSubCreateOrUpdateOptionalParams
  ): Promise<WebPubSubCreateOrUpdateResponse>;
  /**
   * Operation to delete a resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Operation to delete a resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubDeleteOptionalParams
  ): Promise<void>;
  /**
   * Operation to update an exiting resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param parameters Parameters for the update operation
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    resourceName: string,
    parameters: WebPubSubResource,
    options?: WebPubSubUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<WebPubSubUpdateResponse>,
      WebPubSubUpdateResponse
    >
  >;
  /**
   * Operation to update an exiting resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param parameters Parameters for the update operation
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    resourceName: string,
    parameters: WebPubSubResource,
    options?: WebPubSubUpdateOptionalParams
  ): Promise<WebPubSubUpdateResponse>;
  /**
   * Get the access keys of the resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  listKeys(
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubListKeysOptionalParams
  ): Promise<WebPubSubListKeysResponse>;
  /**
   * Regenerate the access key for the resource. PrimaryKey and SecondaryKey cannot be regenerated at the
   * same time.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param parameters Parameter that describes the Regenerate Key Operation.
   * @param options The options parameters.
   */
  beginRegenerateKey(
    resourceGroupName: string,
    resourceName: string,
    parameters: RegenerateKeyParameters,
    options?: WebPubSubRegenerateKeyOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<WebPubSubRegenerateKeyResponse>,
      WebPubSubRegenerateKeyResponse
    >
  >;
  /**
   * Regenerate the access key for the resource. PrimaryKey and SecondaryKey cannot be regenerated at the
   * same time.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param parameters Parameter that describes the Regenerate Key Operation.
   * @param options The options parameters.
   */
  beginRegenerateKeyAndWait(
    resourceGroupName: string,
    resourceName: string,
    parameters: RegenerateKeyParameters,
    options?: WebPubSubRegenerateKeyOptionalParams
  ): Promise<WebPubSubRegenerateKeyResponse>;
  /**
   * Operation to restart a resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  beginRestart(
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubRestartOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Operation to restart a resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  beginRestartAndWait(
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubRestartOptionalParams
  ): Promise<void>;
  /**
   * List all available skus of the resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  listSkus(
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubListSkusOptionalParams
  ): Promise<WebPubSubListSkusResponse>;
}
