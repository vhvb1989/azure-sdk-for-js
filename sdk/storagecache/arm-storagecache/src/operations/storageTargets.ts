/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { StorageTargets } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageCacheManagementClient } from "../storageCacheManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  StorageTarget,
  StorageTargetsListByCacheNextOptionalParams,
  StorageTargetsListByCacheOptionalParams,
  StorageTargetsListByCacheResponse,
  StorageTargetsDnsRefreshOptionalParams,
  StorageTargetsDeleteOptionalParams,
  StorageTargetsGetOptionalParams,
  StorageTargetsGetResponse,
  StorageTargetsCreateOrUpdateOptionalParams,
  StorageTargetsCreateOrUpdateResponse,
  StorageTargetsRestoreDefaultsOptionalParams,
  StorageTargetsListByCacheNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing StorageTargets operations. */
export class StorageTargetsImpl implements StorageTargets {
  private readonly client: StorageCacheManagementClient;

  /**
   * Initialize a new instance of the class StorageTargets class.
   * @param client Reference to the service client
   */
  constructor(client: StorageCacheManagementClient) {
    this.client = client;
  }

  /**
   * Returns a list of Storage Targets for the specified cache.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cacheName Name of cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param options The options parameters.
   */
  public listByCache(
    resourceGroupName: string,
    cacheName: string,
    options?: StorageTargetsListByCacheOptionalParams
  ): PagedAsyncIterableIterator<StorageTarget> {
    const iter = this.listByCachePagingAll(
      resourceGroupName,
      cacheName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByCachePagingPage(
          resourceGroupName,
          cacheName,
          options,
          settings
        );
      }
    };
  }

  private async *listByCachePagingPage(
    resourceGroupName: string,
    cacheName: string,
    options?: StorageTargetsListByCacheOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<StorageTarget[]> {
    let result: StorageTargetsListByCacheResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByCache(resourceGroupName, cacheName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByCacheNext(
        resourceGroupName,
        cacheName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByCachePagingAll(
    resourceGroupName: string,
    cacheName: string,
    options?: StorageTargetsListByCacheOptionalParams
  ): AsyncIterableIterator<StorageTarget> {
    for await (const page of this.listByCachePagingPage(
      resourceGroupName,
      cacheName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Tells a storage target to refresh its DNS information.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cacheName Name of cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param storageTargetName Name of Storage Target.
   * @param options The options parameters.
   */
  async beginDnsRefresh(
    resourceGroupName: string,
    cacheName: string,
    storageTargetName: string,
    options?: StorageTargetsDnsRefreshOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, cacheName, storageTargetName, options },
      spec: dnsRefreshOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Tells a storage target to refresh its DNS information.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cacheName Name of cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param storageTargetName Name of Storage Target.
   * @param options The options parameters.
   */
  async beginDnsRefreshAndWait(
    resourceGroupName: string,
    cacheName: string,
    storageTargetName: string,
    options?: StorageTargetsDnsRefreshOptionalParams
  ): Promise<void> {
    const poller = await this.beginDnsRefresh(
      resourceGroupName,
      cacheName,
      storageTargetName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Returns a list of Storage Targets for the specified cache.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cacheName Name of cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param options The options parameters.
   */
  private _listByCache(
    resourceGroupName: string,
    cacheName: string,
    options?: StorageTargetsListByCacheOptionalParams
  ): Promise<StorageTargetsListByCacheResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, cacheName, options },
      listByCacheOperationSpec
    );
  }

  /**
   * Removes a Storage Target from a cache. This operation is allowed at any time, but if the cache is
   * down or unhealthy, the actual removal of the Storage Target may be delayed until the cache is
   * healthy again. Note that if the cache has data to flush to the Storage Target, the data will be
   * flushed before the Storage Target will be deleted.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cacheName Name of cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param storageTargetName Name of Storage Target.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    cacheName: string,
    storageTargetName: string,
    options?: StorageTargetsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, cacheName, storageTargetName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Removes a Storage Target from a cache. This operation is allowed at any time, but if the cache is
   * down or unhealthy, the actual removal of the Storage Target may be delayed until the cache is
   * healthy again. Note that if the cache has data to flush to the Storage Target, the data will be
   * flushed before the Storage Target will be deleted.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cacheName Name of cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param storageTargetName Name of Storage Target.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    cacheName: string,
    storageTargetName: string,
    options?: StorageTargetsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      cacheName,
      storageTargetName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Returns a Storage Target from a cache.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cacheName Name of cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param storageTargetName Name of Storage Target.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    cacheName: string,
    storageTargetName: string,
    options?: StorageTargetsGetOptionalParams
  ): Promise<StorageTargetsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, cacheName, storageTargetName, options },
      getOperationSpec
    );
  }

  /**
   * Create or update a Storage Target. This operation is allowed at any time, but if the cache is down
   * or unhealthy, the actual creation/modification of the Storage Target may be delayed until the cache
   * is healthy again.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cacheName Name of cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param storageTargetName Name of Storage Target.
   * @param storagetarget Object containing the definition of a Storage Target.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    cacheName: string,
    storageTargetName: string,
    storagetarget: StorageTarget,
    options?: StorageTargetsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<StorageTargetsCreateOrUpdateResponse>,
      StorageTargetsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<StorageTargetsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        cacheName,
        storageTargetName,
        storagetarget,
        options
      },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      StorageTargetsCreateOrUpdateResponse,
      OperationState<StorageTargetsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update a Storage Target. This operation is allowed at any time, but if the cache is down
   * or unhealthy, the actual creation/modification of the Storage Target may be delayed until the cache
   * is healthy again.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cacheName Name of cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param storageTargetName Name of Storage Target.
   * @param storagetarget Object containing the definition of a Storage Target.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    cacheName: string,
    storageTargetName: string,
    storagetarget: StorageTarget,
    options?: StorageTargetsCreateOrUpdateOptionalParams
  ): Promise<StorageTargetsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      cacheName,
      storageTargetName,
      storagetarget,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Tells a storage target to restore its settings to their default values.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cacheName Name of cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param storageTargetName Name of Storage Target.
   * @param options The options parameters.
   */
  async beginRestoreDefaults(
    resourceGroupName: string,
    cacheName: string,
    storageTargetName: string,
    options?: StorageTargetsRestoreDefaultsOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, cacheName, storageTargetName, options },
      spec: restoreDefaultsOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Tells a storage target to restore its settings to their default values.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cacheName Name of cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param storageTargetName Name of Storage Target.
   * @param options The options parameters.
   */
  async beginRestoreDefaultsAndWait(
    resourceGroupName: string,
    cacheName: string,
    storageTargetName: string,
    options?: StorageTargetsRestoreDefaultsOptionalParams
  ): Promise<void> {
    const poller = await this.beginRestoreDefaults(
      resourceGroupName,
      cacheName,
      storageTargetName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByCacheNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cacheName Name of cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param nextLink The nextLink from the previous successful call to the ListByCache method.
   * @param options The options parameters.
   */
  private _listByCacheNext(
    resourceGroupName: string,
    cacheName: string,
    nextLink: string,
    options?: StorageTargetsListByCacheNextOptionalParams
  ): Promise<StorageTargetsListByCacheNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, cacheName, nextLink, options },
      listByCacheNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const dnsRefreshOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets/{storageTargetName}/dnsRefresh",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.cacheName,
    Parameters.storageTargetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByCacheOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageTargetsResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.cacheName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets/{storageTargetName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.force],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.cacheName,
    Parameters.storageTargetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets/{storageTargetName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageTarget
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.cacheName,
    Parameters.storageTargetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets/{storageTargetName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.StorageTarget
    },
    201: {
      bodyMapper: Mappers.StorageTarget
    },
    202: {
      bodyMapper: Mappers.StorageTarget
    },
    204: {
      bodyMapper: Mappers.StorageTarget
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.storagetarget,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.cacheName,
    Parameters.storageTargetName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const restoreDefaultsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets/{storageTargetName}/restoreDefaults",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.cacheName,
    Parameters.storageTargetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByCacheNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageTargetsResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.cacheName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
