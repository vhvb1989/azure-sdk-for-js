/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CallRecording } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CallAutomationApiClient } from "../callAutomationApiClient";
import {
  StartCallRecordingRequest,
  CallRecordingStartRecordingOptionalParams,
  CallRecordingStartRecordingResponse,
  CallRecordingGetRecordingPropertiesOptionalParams,
  CallRecordingGetRecordingPropertiesResponse,
  CallRecordingStopRecordingOptionalParams,
  CallRecordingPauseRecordingOptionalParams,
  CallRecordingResumeRecordingOptionalParams
} from "../models";

/** Class containing CallRecording operations. */
export class CallRecordingImpl implements CallRecording {
  private readonly client: CallAutomationApiClient;

  /**
   * Initialize a new instance of the class CallRecording class.
   * @param client Reference to the service client
   */
  constructor(client: CallAutomationApiClient) {
    this.client = client;
  }

  /**
   * Start recording the call.
   * @param startCallRecording The request body of start call recording request.
   * @param options The options parameters.
   */
  startRecording(
    startCallRecording: StartCallRecordingRequest,
    options?: CallRecordingStartRecordingOptionalParams
  ): Promise<CallRecordingStartRecordingResponse> {
    return this.client.sendOperationRequest(
      { startCallRecording, options },
      startRecordingOperationSpec
    );
  }

  /**
   * Get call recording properties.
   * @param recordingId The recording id.
   * @param options The options parameters.
   */
  getRecordingProperties(
    recordingId: string,
    options?: CallRecordingGetRecordingPropertiesOptionalParams
  ): Promise<CallRecordingGetRecordingPropertiesResponse> {
    return this.client.sendOperationRequest(
      { recordingId, options },
      getRecordingPropertiesOperationSpec
    );
  }

  /**
   * Stop recording the call.
   * @param recordingId The recording id.
   * @param options The options parameters.
   */
  stopRecording(
    recordingId: string,
    options?: CallRecordingStopRecordingOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { recordingId, options },
      stopRecordingOperationSpec
    );
  }

  /**
   * Pause recording the call.
   * @param recordingId The recording id.
   * @param options The options parameters.
   */
  pauseRecording(
    recordingId: string,
    options?: CallRecordingPauseRecordingOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { recordingId, options },
      pauseRecordingOperationSpec
    );
  }

  /**
   * Resume recording the call.
   * @param recordingId The recording id.
   * @param options The options parameters.
   */
  resumeRecording(
    recordingId: string,
    options?: CallRecordingResumeRecordingOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { recordingId, options },
      resumeRecordingOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const startRecordingOperationSpec: coreClient.OperationSpec = {
  path: "/calling/recordings",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.RecordingStateResponse
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  requestBody: Parameters.startCallRecording,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.repeatabilityRequestID,
    Parameters.repeatabilityFirstSent
  ],
  mediaType: "json",
  serializer
};
const getRecordingPropertiesOperationSpec: coreClient.OperationSpec = {
  path: "/calling/recordings/{recordingId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecordingStateResponse
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.recordingId],
  headerParameters: [Parameters.accept],
  serializer
};
const stopRecordingOperationSpec: coreClient.OperationSpec = {
  path: "/calling/recordings/{recordingId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.recordingId],
  headerParameters: [Parameters.accept],
  serializer
};
const pauseRecordingOperationSpec: coreClient.OperationSpec = {
  path: "/calling/recordings/{recordingId}:pause",
  httpMethod: "POST",
  responses: {
    202: {},
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.recordingId],
  headerParameters: [Parameters.accept],
  serializer
};
const resumeRecordingOperationSpec: coreClient.OperationSpec = {
  path: "/calling/recordings/{recordingId}:resume",
  httpMethod: "POST",
  responses: {
    202: {},
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.recordingId],
  headerParameters: [Parameters.accept],
  serializer
};
