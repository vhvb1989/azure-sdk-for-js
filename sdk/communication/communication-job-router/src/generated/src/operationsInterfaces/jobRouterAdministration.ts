/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import {
  ClassificationPolicyItem,
  JobRouterAdministrationListClassificationPoliciesOptionalParams,
  DistributionPolicyItem,
  JobRouterAdministrationListDistributionPoliciesOptionalParams,
  ExceptionPolicyItem,
  JobRouterAdministrationListExceptionPoliciesOptionalParams,
  JobQueueItem,
  JobRouterAdministrationListQueuesOptionalParams,
  ClassificationPolicy,
  JobRouterAdministrationUpsertClassificationPolicyOptionalParams,
  JobRouterAdministrationUpsertClassificationPolicyResponse,
  JobRouterAdministrationGetClassificationPolicyOptionalParams,
  JobRouterAdministrationGetClassificationPolicyResponse,
  JobRouterAdministrationDeleteClassificationPolicyOptionalParams,
  DistributionPolicy,
  JobRouterAdministrationUpsertDistributionPolicyOptionalParams,
  JobRouterAdministrationUpsertDistributionPolicyResponse,
  JobRouterAdministrationGetDistributionPolicyOptionalParams,
  JobRouterAdministrationGetDistributionPolicyResponse,
  JobRouterAdministrationDeleteDistributionPolicyOptionalParams,
  ExceptionPolicy,
  JobRouterAdministrationUpsertExceptionPolicyOptionalParams,
  JobRouterAdministrationUpsertExceptionPolicyResponse,
  JobRouterAdministrationGetExceptionPolicyOptionalParams,
  JobRouterAdministrationGetExceptionPolicyResponse,
  JobRouterAdministrationDeleteExceptionPolicyOptionalParams,
  JobQueue,
  JobRouterAdministrationUpsertQueueOptionalParams,
  JobRouterAdministrationUpsertQueueResponse,
  JobRouterAdministrationGetQueueOptionalParams,
  JobRouterAdministrationGetQueueResponse,
  JobRouterAdministrationDeleteQueueOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a JobRouterAdministration. */
export interface JobRouterAdministration {
  /**
   * Retrieves existing classification policies
   * @param options The options parameters.
   */
  listClassificationPolicies(
    options?: JobRouterAdministrationListClassificationPoliciesOptionalParams
  ): PagedAsyncIterableIterator<ClassificationPolicyItem>;
  /**
   * Retrieves existing distribution policies
   * @param options The options parameters.
   */
  listDistributionPolicies(
    options?: JobRouterAdministrationListDistributionPoliciesOptionalParams
  ): PagedAsyncIterableIterator<DistributionPolicyItem>;
  /**
   * Retrieves existing exception policies
   * @param options The options parameters.
   */
  listExceptionPolicies(
    options?: JobRouterAdministrationListExceptionPoliciesOptionalParams
  ): PagedAsyncIterableIterator<ExceptionPolicyItem>;
  /**
   * Retrieves existing queues
   * @param options The options parameters.
   */
  listQueues(
    options?: JobRouterAdministrationListQueuesOptionalParams
  ): PagedAsyncIterableIterator<JobQueueItem>;
  /**
   * Creates or updates a classification policy.
   * @param id Id of the classification policy
   * @param patch Model of classification policy properties to be patched. See also:
   *              https://datatracker.ietf.org/doc/html/rfc7386
   * @param options The options parameters.
   */
  upsertClassificationPolicy(
    id: string,
    patch: ClassificationPolicy,
    options?: JobRouterAdministrationUpsertClassificationPolicyOptionalParams
  ): Promise<JobRouterAdministrationUpsertClassificationPolicyResponse>;
  /**
   * Retrieves an existing classification policy by Id
   * @param id Id of the classification policy
   * @param options The options parameters.
   */
  getClassificationPolicy(
    id: string,
    options?: JobRouterAdministrationGetClassificationPolicyOptionalParams
  ): Promise<JobRouterAdministrationGetClassificationPolicyResponse>;
  /**
   * Delete a classification policy by Id
   * @param id Id of the classification policy
   * @param options The options parameters.
   */
  deleteClassificationPolicy(
    id: string,
    options?: JobRouterAdministrationDeleteClassificationPolicyOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Creates or updates a distribution policy.
   * @param id Id of the distribution policy
   * @param patch Model of distribution policy properties to be patched. See also:
   *              https://datatracker.ietf.org/doc/html/rfc7386
   * @param options The options parameters.
   */
  upsertDistributionPolicy(
    id: string,
    patch: DistributionPolicy,
    options?: JobRouterAdministrationUpsertDistributionPolicyOptionalParams
  ): Promise<JobRouterAdministrationUpsertDistributionPolicyResponse>;
  /**
   * Retrieves an existing distribution policy by Id
   * @param id Id of the distribution policy
   * @param options The options parameters.
   */
  getDistributionPolicy(
    id: string,
    options?: JobRouterAdministrationGetDistributionPolicyOptionalParams
  ): Promise<JobRouterAdministrationGetDistributionPolicyResponse>;
  /**
   * Delete a distribution policy by Id
   * @param id Id of the distribution policy
   * @param options The options parameters.
   */
  deleteDistributionPolicy(
    id: string,
    options?: JobRouterAdministrationDeleteDistributionPolicyOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Creates or updates a exception policy.
   * @param id Id of the exception policy
   * @param patch Model of exception policy properties to be patched. See also:
   *              https://datatracker.ietf.org/doc/html/rfc7386
   * @param options The options parameters.
   */
  upsertExceptionPolicy(
    id: string,
    patch: ExceptionPolicy,
    options?: JobRouterAdministrationUpsertExceptionPolicyOptionalParams
  ): Promise<JobRouterAdministrationUpsertExceptionPolicyResponse>;
  /**
   * Retrieves an existing exception policy by Id
   * @param id Id of the exception policy to retrieve
   * @param options The options parameters.
   */
  getExceptionPolicy(
    id: string,
    options?: JobRouterAdministrationGetExceptionPolicyOptionalParams
  ): Promise<JobRouterAdministrationGetExceptionPolicyResponse>;
  /**
   * Deletes a exception policy by Id
   * @param id Id of the exception policy to delete
   * @param options The options parameters.
   */
  deleteExceptionPolicy(
    id: string,
    options?: JobRouterAdministrationDeleteExceptionPolicyOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Creates or updates a queue.
   * @param id Id of the queue
   * @param patch Model of queue properties to be patched. See also:
   *              https://datatracker.ietf.org/doc/html/rfc7386
   * @param options The options parameters.
   */
  upsertQueue(
    id: string,
    patch: JobQueue,
    options?: JobRouterAdministrationUpsertQueueOptionalParams
  ): Promise<JobRouterAdministrationUpsertQueueResponse>;
  /**
   * Retrieves an existing queue by Id
   * @param id Id of the queue to retrieve
   * @param options The options parameters.
   */
  getQueue(
    id: string,
    options?: JobRouterAdministrationGetQueueOptionalParams
  ): Promise<JobRouterAdministrationGetQueueResponse>;
  /**
   * Deletes a queue by Id
   * @param id Id of the queue to delete
   * @param options The options parameters.
   */
  deleteQueue(
    id: string,
    options?: JobRouterAdministrationDeleteQueueOptionalParams
  ): Promise<coreHttp.RestResponse>;
}
