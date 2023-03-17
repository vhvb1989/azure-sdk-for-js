/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

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

/** Interface representing a CallRecording. */
export interface CallRecording {
  /**
   * Start recording the call.
   * @param startCallRecording The request body of start call recording request.
   * @param options The options parameters.
   */
  startRecording(
    startCallRecording: StartCallRecordingRequest,
    options?: CallRecordingStartRecordingOptionalParams
  ): Promise<CallRecordingStartRecordingResponse>;
  /**
   * Get call recording properties.
   * @param recordingId The recording id.
   * @param options The options parameters.
   */
  getRecordingProperties(
    recordingId: string,
    options?: CallRecordingGetRecordingPropertiesOptionalParams
  ): Promise<CallRecordingGetRecordingPropertiesResponse>;
  /**
   * Stop recording the call.
   * @param recordingId The recording id.
   * @param options The options parameters.
   */
  stopRecording(
    recordingId: string,
    options?: CallRecordingStopRecordingOptionalParams
  ): Promise<void>;
  /**
   * Pause recording the call.
   * @param recordingId The recording id.
   * @param options The options parameters.
   */
  pauseRecording(
    recordingId: string,
    options?: CallRecordingPauseRecordingOptionalParams
  ): Promise<void>;
  /**
   * Resume recording the call.
   * @param recordingId The recording id.
   * @param options The options parameters.
   */
  resumeRecording(
    recordingId: string,
    options?: CallRecordingResumeRecordingOptionalParams
  ): Promise<void>;
}
