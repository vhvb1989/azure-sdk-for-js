/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CreateAndAssociatePLFilter } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MicrosoftElastic } from "../microsoftElastic";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import { CreateAndAssociatePLFilterCreateOptionalParams } from "../models";

/** Class containing CreateAndAssociatePLFilter operations. */
export class CreateAndAssociatePLFilterImpl
  implements CreateAndAssociatePLFilter {
  private readonly client: MicrosoftElastic;

  /**
   * Initialize a new instance of the class CreateAndAssociatePLFilter class.
   * @param client Reference to the service client
   */
  constructor(client: MicrosoftElastic) {
    this.client = client;
  }

  /**
   * Create and Associate private link traffic filter for the given deployment.
   * @param resourceGroupName The name of the resource group to which the Elastic resource belongs.
   * @param monitorName Monitor resource name
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    monitorName: string,
    options?: CreateAndAssociatePLFilterCreateOptionalParams
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
      args: { resourceGroupName, monitorName, options },
      spec: createOperationSpec
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
   * Create and Associate private link traffic filter for the given deployment.
   * @param resourceGroupName The name of the resource group to which the Elastic resource belongs.
   * @param monitorName Monitor resource name
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    monitorName: string,
    options?: CreateAndAssociatePLFilterCreateOptionalParams
  ): Promise<void> {
    const poller = await this.beginCreate(
      resourceGroupName,
      monitorName,
      options
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Elastic/monitors/{monitorName}/createAndAssociatePLFilter",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.name,
    Parameters.privateEndpointGuid,
    Parameters.privateEndpointName
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.monitorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
