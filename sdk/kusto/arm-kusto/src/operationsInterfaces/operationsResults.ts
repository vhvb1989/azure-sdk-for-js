/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationsResultsGetOptionalParams,
  OperationsResultsGetResponse
} from "../models";

/** Interface representing a OperationsResults. */
export interface OperationsResults {
  /**
   * Returns operation results.
   * @param location The name of Azure region.
   * @param operationId The ID of an ongoing async operation.
   * @param options The options parameters.
   */
  get(
    location: string,
    operationId: string,
    options?: OperationsResultsGetOptionalParams
  ): Promise<OperationsResultsGetResponse>;
}
