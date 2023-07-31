/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  GenerateDetailedCostReportOperationResultsGetOptionalParams,
  GenerateDetailedCostReportOperationResultsGetResponse
} from "../models";

/** Interface representing a GenerateDetailedCostReportOperationResults. */
export interface GenerateDetailedCostReportOperationResults {
  /**
   * Gets the result of the specified operation. The link with this operationId is provided as a response
   * header of the initial request.
   * @param operationId The target operation Id.
   * @param scope The ARM Resource ID for subscription, resource group, billing account, or other billing
   *              scopes. For details, see https://aka.ms/costmgmt/scopes.
   * @param options The options parameters.
   */
  beginGet(
    operationId: string,
    scope: string,
    options?: GenerateDetailedCostReportOperationResultsGetOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<GenerateDetailedCostReportOperationResultsGetResponse>,
      GenerateDetailedCostReportOperationResultsGetResponse
    >
  >;
  /**
   * Gets the result of the specified operation. The link with this operationId is provided as a response
   * header of the initial request.
   * @param operationId The target operation Id.
   * @param scope The ARM Resource ID for subscription, resource group, billing account, or other billing
   *              scopes. For details, see https://aka.ms/costmgmt/scopes.
   * @param options The options parameters.
   */
  beginGetAndWait(
    operationId: string,
    scope: string,
    options?: GenerateDetailedCostReportOperationResultsGetOptionalParams
  ): Promise<GenerateDetailedCostReportOperationResultsGetResponse>;
}
