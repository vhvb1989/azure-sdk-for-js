/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Catalogs } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DevCenterClient } from "../devCenterClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  Catalog,
  CatalogsListByDevCenterNextOptionalParams,
  CatalogsListByDevCenterOptionalParams,
  CatalogsListByDevCenterResponse,
  CatalogsGetOptionalParams,
  CatalogsGetResponse,
  CatalogsCreateOrUpdateOptionalParams,
  CatalogsCreateOrUpdateResponse,
  CatalogUpdate,
  CatalogsUpdateOptionalParams,
  CatalogsUpdateResponse,
  CatalogsDeleteOptionalParams,
  CatalogsSyncOptionalParams,
  CatalogsListByDevCenterNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Catalogs operations. */
export class CatalogsImpl implements Catalogs {
  private readonly client: DevCenterClient;

  /**
   * Initialize a new instance of the class Catalogs class.
   * @param client Reference to the service client
   */
  constructor(client: DevCenterClient) {
    this.client = client;
  }

  /**
   * Lists catalogs for a devcenter.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param devCenterName The name of the devcenter.
   * @param options The options parameters.
   */
  public listByDevCenter(
    resourceGroupName: string,
    devCenterName: string,
    options?: CatalogsListByDevCenterOptionalParams
  ): PagedAsyncIterableIterator<Catalog> {
    const iter = this.listByDevCenterPagingAll(
      resourceGroupName,
      devCenterName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByDevCenterPagingPage(
          resourceGroupName,
          devCenterName,
          options
        );
      }
    };
  }

  private async *listByDevCenterPagingPage(
    resourceGroupName: string,
    devCenterName: string,
    options?: CatalogsListByDevCenterOptionalParams
  ): AsyncIterableIterator<Catalog[]> {
    let result = await this._listByDevCenter(
      resourceGroupName,
      devCenterName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByDevCenterNext(
        resourceGroupName,
        devCenterName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByDevCenterPagingAll(
    resourceGroupName: string,
    devCenterName: string,
    options?: CatalogsListByDevCenterOptionalParams
  ): AsyncIterableIterator<Catalog> {
    for await (const page of this.listByDevCenterPagingPage(
      resourceGroupName,
      devCenterName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists catalogs for a devcenter.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param devCenterName The name of the devcenter.
   * @param options The options parameters.
   */
  private _listByDevCenter(
    resourceGroupName: string,
    devCenterName: string,
    options?: CatalogsListByDevCenterOptionalParams
  ): Promise<CatalogsListByDevCenterResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, devCenterName, options },
      listByDevCenterOperationSpec
    );
  }

  /**
   * Gets a catalog
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param devCenterName The name of the devcenter.
   * @param catalogName The name of the Catalog.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    devCenterName: string,
    catalogName: string,
    options?: CatalogsGetOptionalParams
  ): Promise<CatalogsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, devCenterName, catalogName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a catalog.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param devCenterName The name of the devcenter.
   * @param catalogName The name of the Catalog.
   * @param body Represents a catalog.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    devCenterName: string,
    catalogName: string,
    body: Catalog,
    options?: CatalogsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<CatalogsCreateOrUpdateResponse>,
      CatalogsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<CatalogsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
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

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, devCenterName, catalogName, body, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a catalog.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param devCenterName The name of the devcenter.
   * @param catalogName The name of the Catalog.
   * @param body Represents a catalog.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    devCenterName: string,
    catalogName: string,
    body: Catalog,
    options?: CatalogsCreateOrUpdateOptionalParams
  ): Promise<CatalogsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      devCenterName,
      catalogName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Partially updates a catalog.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param devCenterName The name of the devcenter.
   * @param catalogName The name of the Catalog.
   * @param body Updatable catalog properties.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    devCenterName: string,
    catalogName: string,
    body: CatalogUpdate,
    options?: CatalogsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<CatalogsUpdateResponse>,
      CatalogsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<CatalogsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
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

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, devCenterName, catalogName, body, options },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Partially updates a catalog.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param devCenterName The name of the devcenter.
   * @param catalogName The name of the Catalog.
   * @param body Updatable catalog properties.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    devCenterName: string,
    catalogName: string,
    body: CatalogUpdate,
    options?: CatalogsUpdateOptionalParams
  ): Promise<CatalogsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      devCenterName,
      catalogName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a catalog resource.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param devCenterName The name of the devcenter.
   * @param catalogName The name of the Catalog.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    devCenterName: string,
    catalogName: string,
    options?: CatalogsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
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

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, devCenterName, catalogName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a catalog resource.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param devCenterName The name of the devcenter.
   * @param catalogName The name of the Catalog.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    devCenterName: string,
    catalogName: string,
    options?: CatalogsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      devCenterName,
      catalogName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Syncs templates for a template source.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param devCenterName The name of the devcenter.
   * @param catalogName The name of the Catalog.
   * @param options The options parameters.
   */
  async beginSync(
    resourceGroupName: string,
    devCenterName: string,
    catalogName: string,
    options?: CatalogsSyncOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
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

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, devCenterName, catalogName, options },
      syncOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Syncs templates for a template source.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param devCenterName The name of the devcenter.
   * @param catalogName The name of the Catalog.
   * @param options The options parameters.
   */
  async beginSyncAndWait(
    resourceGroupName: string,
    devCenterName: string,
    catalogName: string,
    options?: CatalogsSyncOptionalParams
  ): Promise<void> {
    const poller = await this.beginSync(
      resourceGroupName,
      devCenterName,
      catalogName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByDevCenterNext
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param devCenterName The name of the devcenter.
   * @param nextLink The nextLink from the previous successful call to the ListByDevCenter method.
   * @param options The options parameters.
   */
  private _listByDevCenterNext(
    resourceGroupName: string,
    devCenterName: string,
    nextLink: string,
    options?: CatalogsListByDevCenterNextOptionalParams
  ): Promise<CatalogsListByDevCenterNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, devCenterName, nextLink, options },
      listByDevCenterNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByDevCenterOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CatalogListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.devCenterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Catalog
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
    Parameters.devCenterName,
    Parameters.catalogName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Catalog
    },
    201: {
      bodyMapper: Mappers.Catalog
    },
    202: {
      bodyMapper: Mappers.Catalog
    },
    204: {
      bodyMapper: Mappers.Catalog
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.body6,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.devCenterName,
    Parameters.catalogName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Catalog
    },
    201: {
      bodyMapper: Mappers.Catalog
    },
    202: {
      bodyMapper: Mappers.Catalog
    },
    204: {
      bodyMapper: Mappers.Catalog
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.body7,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.devCenterName,
    Parameters.catalogName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}",
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
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.devCenterName,
    Parameters.catalogName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const syncOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/catalogs/{catalogName}/sync",
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
    Parameters.devCenterName,
    Parameters.catalogName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByDevCenterNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CatalogListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.devCenterName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
