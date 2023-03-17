/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  AcsVerificationGetVerificationsOptionalParams,
  AcsVerificationGetVerificationsResponse,
  AcsVerificationRequestVerificationOptionalParams,
  AcsVerificationRequestVerificationResponse,
  AcsVerificationVerifyIdentityOptionalParams,
  AcsVerificationVerifyIdentityResponse,
  AcsVerificationDeleteVerificationOptionalParams,
  AcsVerificationGetVerificationConstantsOptionalParams,
  AcsVerificationGetVerificationConstantsResponse
} from "../models";

/** Interface representing a AcsVerificationOperations. */
export interface AcsVerificationOperations {
  /**
   * Gets the array of verified phone numbers for the current resource.
   * @param options The options parameters.
   */
  getVerifications(
    options?: AcsVerificationGetVerificationsOptionalParams
  ): Promise<AcsVerificationGetVerificationsResponse>;
  /**
   * Request the identity for the verification.
   * @param options The options parameters.
   */
  requestVerification(
    options?: AcsVerificationRequestVerificationOptionalParams
  ): Promise<AcsVerificationRequestVerificationResponse>;
  /**
   * Verify that the user received the correct verification code.
   * @param verificationId Verification Id. Must be a valid GUID
   * @param options The options parameters.
   */
  verifyIdentity(
    verificationId: string,
    options?: AcsVerificationVerifyIdentityOptionalParams
  ): Promise<AcsVerificationVerifyIdentityResponse>;
  /**
   * Deleting a verification.
   * @param verificationId Verification Id. Must be a valid GUID
   * @param options The options parameters.
   */
  deleteVerification(
    verificationId: string,
    options?: AcsVerificationDeleteVerificationOptionalParams
  ): Promise<void>;
  /**
   * Getting all the constants for the resource.
   * @param options The options parameters.
   */
  getVerificationConstants(
    options?: AcsVerificationGetVerificationConstantsOptionalParams
  ): Promise<AcsVerificationGetVerificationConstantsResponse>;
}
