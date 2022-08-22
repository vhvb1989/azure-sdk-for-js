/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import {
  PipelineRequest,
  PipelineResponse,
  SendRequest
} from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  AccountFiltersImpl,
  OperationsImpl,
  MediaservicesImpl,
  PrivateLinkResourcesImpl,
  PrivateEndpointConnectionsImpl,
  LocationsImpl,
  MediaServicesOperationStatusesImpl,
  MediaServicesOperationResultsImpl,
  AssetsImpl,
  AssetFiltersImpl,
  TracksImpl,
  OperationStatusesImpl,
  OperationResultsImpl,
  ContentKeyPoliciesImpl,
  TransformsImpl,
  JobsImpl,
  StreamingPoliciesImpl,
  StreamingLocatorsImpl,
  LiveEventsImpl,
  LiveOutputsImpl,
  StreamingEndpointsImpl
} from "./operations";
import {
  AccountFilters,
  Operations,
  Mediaservices,
  PrivateLinkResources,
  PrivateEndpointConnections,
  Locations,
  MediaServicesOperationStatuses,
  MediaServicesOperationResults,
  Assets,
  AssetFilters,
  Tracks,
  OperationStatuses,
  OperationResults,
  ContentKeyPolicies,
  Transforms,
  Jobs,
  StreamingPolicies,
  StreamingLocators,
  LiveEvents,
  LiveOutputs,
  StreamingEndpoints
} from "./operationsInterfaces";
import { AzureMediaServicesOptionalParams } from "./models";

export class AzureMediaServices extends coreClient.ServiceClient {
  $host: string;
  subscriptionId: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the AzureMediaServices class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The unique identifier for a Microsoft Azure subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: AzureMediaServicesOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: AzureMediaServicesOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-mediaservices/12.1.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    if (!options.credentialScopes) {
      options.credentialScopes = ["https://management.azure.com/.default"];
    }
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com"
    };
    super(optionsWithDefaults);

    let bearerTokenAuthenticationPolicyFound: boolean = false;
    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
    }
    if (
      !options ||
      !options.pipeline ||
      options.pipeline.getOrderedPolicies().length == 0 ||
      !bearerTokenAuthenticationPolicyFound
    ) {
      this.pipeline.removePolicy({
        name: coreRestPipeline.bearerTokenAuthenticationPolicyName
      });
      this.pipeline.addPolicy(
        coreRestPipeline.bearerTokenAuthenticationPolicy({
          credential: credentials,
          scopes: `${optionsWithDefaults.credentialScopes}`,
          challengeCallbacks: {
            authorizeRequestOnChallenge:
              coreClient.authorizeRequestOnClaimChallenge
          }
        })
      );
    }
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2021-11-01";
    this.accountFilters = new AccountFiltersImpl(this);
    this.operations = new OperationsImpl(this);
    this.mediaservices = new MediaservicesImpl(this);
    this.privateLinkResources = new PrivateLinkResourcesImpl(this);
    this.privateEndpointConnections = new PrivateEndpointConnectionsImpl(this);
    this.locations = new LocationsImpl(this);
    this.mediaServicesOperationStatuses = new MediaServicesOperationStatusesImpl(
      this
    );
    this.mediaServicesOperationResults = new MediaServicesOperationResultsImpl(
      this
    );
    this.assets = new AssetsImpl(this);
    this.assetFilters = new AssetFiltersImpl(this);
    this.tracks = new TracksImpl(this);
    this.operationStatuses = new OperationStatusesImpl(this);
    this.operationResults = new OperationResultsImpl(this);
    this.contentKeyPolicies = new ContentKeyPoliciesImpl(this);
    this.transforms = new TransformsImpl(this);
    this.jobs = new JobsImpl(this);
    this.streamingPolicies = new StreamingPoliciesImpl(this);
    this.streamingLocators = new StreamingLocatorsImpl(this);
    this.liveEvents = new LiveEventsImpl(this);
    this.liveOutputs = new LiveOutputsImpl(this);
    this.streamingEndpoints = new StreamingEndpointsImpl(this);
    this.addCustomApiVersionPolicy(options.apiVersion);
  }

  /** A function that adds a policy that sets the api-version (or equivalent) to reflect the library version. */
  private addCustomApiVersionPolicy(apiVersion?: string) {
    if (!apiVersion) {
      return;
    }
    const apiVersionPolicy = {
      name: "CustomApiVersionPolicy",
      async sendRequest(
        request: PipelineRequest,
        next: SendRequest
      ): Promise<PipelineResponse> {
        const param = request.url.split("?");
        if (param.length > 1) {
          const newParams = param[1].split("&").map((item) => {
            if (item.indexOf("api-version") > -1) {
              return "api-version=" + apiVersion;
            } else {
              return item;
            }
          });
          request.url = param[0] + "?" + newParams.join("&");
        }
        return next(request);
      }
    };
    this.pipeline.addPolicy(apiVersionPolicy);
  }

  accountFilters: AccountFilters;
  operations: Operations;
  mediaservices: Mediaservices;
  privateLinkResources: PrivateLinkResources;
  privateEndpointConnections: PrivateEndpointConnections;
  locations: Locations;
  mediaServicesOperationStatuses: MediaServicesOperationStatuses;
  mediaServicesOperationResults: MediaServicesOperationResults;
  assets: Assets;
  assetFilters: AssetFilters;
  tracks: Tracks;
  operationStatuses: OperationStatuses;
  operationResults: OperationResults;
  contentKeyPolicies: ContentKeyPolicies;
  transforms: Transforms;
  jobs: Jobs;
  streamingPolicies: StreamingPolicies;
  streamingLocators: StreamingLocators;
  liveEvents: LiveEvents;
  liveOutputs: LiveOutputs;
  streamingEndpoints: StreamingEndpoints;
}
