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
  Channel,
  ChannelsListByPartnerNamespaceOptionalParams,
  ChannelsGetOptionalParams,
  ChannelsGetResponse,
  ChannelsCreateOrUpdateOptionalParams,
  ChannelsCreateOrUpdateResponse,
  ChannelsDeleteOptionalParams,
  ChannelUpdateParameters,
  ChannelsUpdateOptionalParams,
  ChannelsGetFullUrlOptionalParams,
  ChannelsGetFullUrlResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Channels. */
export interface Channels {
  /**
   * List all the channels in a partner namespace.
   * @param resourceGroupName The name of the resource group within the partners subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param options The options parameters.
   */
  listByPartnerNamespace(
    resourceGroupName: string,
    partnerNamespaceName: string,
    options?: ChannelsListByPartnerNamespaceOptionalParams
  ): PagedAsyncIterableIterator<Channel>;
  /**
   * Get properties of a channel.
   * @param resourceGroupName The name of the resource group within the partners subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param channelName Name of the channel.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    partnerNamespaceName: string,
    channelName: string,
    options?: ChannelsGetOptionalParams
  ): Promise<ChannelsGetResponse>;
  /**
   * Synchronously creates or updates a new channel with the specified parameters.
   * @param resourceGroupName The name of the resource group within the partners subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param channelName Name of the channel.
   * @param channelInfo Channel information.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    partnerNamespaceName: string,
    channelName: string,
    channelInfo: Channel,
    options?: ChannelsCreateOrUpdateOptionalParams
  ): Promise<ChannelsCreateOrUpdateResponse>;
  /**
   * Delete an existing channel.
   * @param resourceGroupName The name of the resource group within the partners subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param channelName Name of the channel.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    partnerNamespaceName: string,
    channelName: string,
    options?: ChannelsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete an existing channel.
   * @param resourceGroupName The name of the resource group within the partners subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param channelName Name of the channel.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    partnerNamespaceName: string,
    channelName: string,
    options?: ChannelsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Synchronously updates a channel with the specified parameters.
   * @param resourceGroupName The name of the resource group within the partners subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param channelName Name of the channel.
   * @param channelUpdateParameters Channel update information.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    partnerNamespaceName: string,
    channelName: string,
    channelUpdateParameters: ChannelUpdateParameters,
    options?: ChannelsUpdateOptionalParams
  ): Promise<void>;
  /**
   * Get the full endpoint URL of a partner destination channel.
   * @param resourceGroupName The name of the resource group within the partners subscription.
   * @param partnerNamespaceName Name of the partner namespace.
   * @param channelName Name of the Channel.
   * @param options The options parameters.
   */
  getFullUrl(
    resourceGroupName: string,
    partnerNamespaceName: string,
    channelName: string,
    options?: ChannelsGetFullUrlOptionalParams
  ): Promise<ChannelsGetFullUrlResponse>;
}
