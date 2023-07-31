/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  MarkDevicesShippedRequest as MarkDevicesShippedRequestMapper,
  JobResource as JobResourceMapper,
  JobResourceUpdateParameter as JobResourceUpdateParameterMapper,
  ShipmentPickUpRequest as ShipmentPickUpRequestMapper,
  CancellationReason as CancellationReasonMapper,
  MitigateJobRequest as MitigateJobRequestMapper,
  AvailableSkuRequest as AvailableSkuRequestMapper,
  ValidateAddress as ValidateAddressMapper,
  ValidationRequest as ValidationRequestMapper,
  RegionConfigurationRequest as RegionConfigurationRequestMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-12-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const skipToken: OperationQueryParameter = {
  parameterPath: ["options", "skipToken"],
  mapper: {
    serializedName: "$skipToken",
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const markDevicesShippedRequest: OperationParameter = {
  parameterPath: "markDevicesShippedRequest",
  mapper: MarkDevicesShippedRequestMapper
};

export const jobName: OperationURLParameter = {
  parameterPath: "jobName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\.]+$"),
      MaxLength: 24,
      MinLength: 3
    },
    serializedName: "jobName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const expand: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};

export const jobResource: OperationParameter = {
  parameterPath: "jobResource",
  mapper: JobResourceMapper
};

export const jobResourceUpdateParameter: OperationParameter = {
  parameterPath: "jobResourceUpdateParameter",
  mapper: JobResourceUpdateParameterMapper
};

export const ifMatch: OperationParameter = {
  parameterPath: ["options", "ifMatch"],
  mapper: {
    serializedName: "If-Match",
    type: {
      name: "String"
    }
  }
};

export const shipmentPickUpRequest: OperationParameter = {
  parameterPath: "shipmentPickUpRequest",
  mapper: ShipmentPickUpRequestMapper
};

export const cancellationReason: OperationParameter = {
  parameterPath: "cancellationReason",
  mapper: CancellationReasonMapper
};

export const mitigateJobRequest: OperationParameter = {
  parameterPath: "mitigateJobRequest",
  mapper: MitigateJobRequestMapper
};

export const availableSkuRequest: OperationParameter = {
  parameterPath: "availableSkuRequest",
  mapper: AvailableSkuRequestMapper
};

export const location: OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    serializedName: "location",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const validateAddress: OperationParameter = {
  parameterPath: "validateAddress",
  mapper: ValidateAddressMapper
};

export const validationRequest: OperationParameter = {
  parameterPath: "validationRequest",
  mapper: ValidationRequestMapper
};

export const regionConfigurationRequest: OperationParameter = {
  parameterPath: "regionConfigurationRequest",
  mapper: RegionConfigurationRequestMapper
};
