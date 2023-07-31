/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { JobsExecutions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ContainerAppsAPIClient } from "../containerAppsAPIClient";
import {
  JobExecution,
  JobsExecutionsListNextOptionalParams,
  JobsExecutionsListOptionalParams,
  JobsExecutionsListResponse,
  JobsExecutionsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing JobsExecutions operations. */
export class JobsExecutionsImpl implements JobsExecutions {
  private readonly client: ContainerAppsAPIClient;

  /**
   * Initialize a new instance of the class JobsExecutions class.
   * @param client Reference to the service client
   */
  constructor(client: ContainerAppsAPIClient) {
    this.client = client;
  }

  /**
   * Get a Container Apps Job's executions
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName Name of the Container Apps Job.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    jobName: string,
    options?: JobsExecutionsListOptionalParams
  ): PagedAsyncIterableIterator<JobExecution> {
    const iter = this.listPagingAll(resourceGroupName, jobName, options);
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
        return this.listPagingPage(
          resourceGroupName,
          jobName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    jobName: string,
    options?: JobsExecutionsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<JobExecution[]> {
    let result: JobsExecutionsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, jobName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        jobName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    jobName: string,
    options?: JobsExecutionsListOptionalParams
  ): AsyncIterableIterator<JobExecution> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      jobName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get a Container Apps Job's executions
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName Name of the Container Apps Job.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    jobName: string,
    options?: JobsExecutionsListOptionalParams
  ): Promise<JobsExecutionsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, jobName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName Name of the Container Apps Job.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    jobName: string,
    nextLink: string,
    options?: JobsExecutionsListNextOptionalParams
  ): Promise<JobsExecutionsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, jobName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/jobs/{jobName}/executions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ContainerAppJobExecutions
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ContainerAppJobExecutions
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.jobName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
