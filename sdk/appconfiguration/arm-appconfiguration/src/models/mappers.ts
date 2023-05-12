/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const ConfigurationStoreListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConfigurationStoreListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ConfigurationStore"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceIdentity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceIdentity",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      userAssignedIdentities: {
        serializedName: "userAssignedIdentities",
        type: {
          name: "Dictionary",
          value: { type: { name: "Composite", className: "UserIdentity" } }
        }
      },
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tenantId: {
        serializedName: "tenantId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UserIdentity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UserIdentity",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      clientId: {
        serializedName: "clientId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EncryptionProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EncryptionProperties",
    modelProperties: {
      keyVaultProperties: {
        serializedName: "keyVaultProperties",
        type: {
          name: "Composite",
          className: "KeyVaultProperties"
        }
      }
    }
  }
};

export const KeyVaultProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyVaultProperties",
    modelProperties: {
      keyIdentifier: {
        serializedName: "keyIdentifier",
        type: {
          name: "String"
        }
      },
      identityClientId: {
        serializedName: "identityClientId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateEndpointConnectionReference: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnectionReference",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      privateEndpoint: {
        serializedName: "properties.privateEndpoint",
        type: {
          name: "Composite",
          className: "PrivateEndpoint"
        }
      },
      privateLinkServiceConnectionState: {
        serializedName: "properties.privateLinkServiceConnectionState",
        type: {
          name: "Composite",
          className: "PrivateLinkServiceConnectionState"
        }
      }
    }
  }
};

export const PrivateEndpoint: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpoint",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkServiceConnectionState: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkServiceConnectionState",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      actionsRequired: {
        serializedName: "actionsRequired",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Sku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Sku",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SystemData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdBy: {
        serializedName: "createdBy",
        type: {
          name: "String"
        }
      },
      createdByType: {
        serializedName: "createdByType",
        type: {
          name: "String"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        type: {
          name: "String"
        }
      },
      lastModifiedByType: {
        serializedName: "lastModifiedByType",
        type: {
          name: "String"
        }
      },
      lastModifiedAt: {
        serializedName: "lastModifiedAt",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const Resource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDetails"
        }
      }
    }
  }
};

export const ErrorDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorDetails",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      additionalInfo: {
        serializedName: "additionalInfo",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorAdditionalInfo"
            }
          }
        }
      }
    }
  }
};

export const ErrorAdditionalInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorAdditionalInfo",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      info: {
        serializedName: "info",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ConfigurationStoreUpdateParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConfigurationStoreUpdateParameters",
    modelProperties: {
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ResourceIdentity"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      encryption: {
        serializedName: "properties.encryption",
        type: {
          name: "Composite",
          className: "EncryptionProperties"
        }
      },
      disableLocalAuth: {
        serializedName: "properties.disableLocalAuth",
        type: {
          name: "Boolean"
        }
      },
      publicNetworkAccess: {
        serializedName: "properties.publicNetworkAccess",
        type: {
          name: "String"
        }
      },
      enablePurgeProtection: {
        serializedName: "properties.enablePurgeProtection",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const CheckNameAvailabilityParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityParameters",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NameAvailabilityStatus: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NameAvailabilityStatus",
    modelProperties: {
      nameAvailable: {
        serializedName: "nameAvailable",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      reason: {
        serializedName: "reason",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApiKeyListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApiKeyListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ApiKey"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApiKey: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApiKey",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      connectionString: {
        serializedName: "connectionString",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "lastModified",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      readOnly: {
        serializedName: "readOnly",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const RegenerateKeyParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RegenerateKeyParameters",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationDefinitionListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDefinitionListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationDefinition"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationDefinition: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDefinition",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      isDataAction: {
        serializedName: "isDataAction",
        type: {
          name: "Boolean"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDefinitionDisplay"
        }
      },
      origin: {
        serializedName: "origin",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "OperationProperties"
        }
      }
    }
  }
};

export const OperationDefinitionDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDefinitionDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationProperties",
    modelProperties: {
      serviceSpecification: {
        serializedName: "serviceSpecification",
        type: {
          name: "Composite",
          className: "ServiceSpecification"
        }
      }
    }
  }
};

export const ServiceSpecification: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServiceSpecification",
    modelProperties: {
      logSpecifications: {
        serializedName: "logSpecifications",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LogSpecification"
            }
          }
        }
      },
      metricSpecifications: {
        serializedName: "metricSpecifications",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MetricSpecification"
            }
          }
        }
      }
    }
  }
};

export const LogSpecification: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LogSpecification",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      blobDuration: {
        serializedName: "blobDuration",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MetricSpecification: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetricSpecification",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      displayDescription: {
        serializedName: "displayDescription",
        type: {
          name: "String"
        }
      },
      unit: {
        serializedName: "unit",
        type: {
          name: "String"
        }
      },
      aggregationType: {
        serializedName: "aggregationType",
        type: {
          name: "String"
        }
      },
      internalMetricName: {
        serializedName: "internalMetricName",
        type: {
          name: "String"
        }
      },
      dimensions: {
        serializedName: "dimensions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MetricDimension"
            }
          }
        }
      },
      fillGapWithZero: {
        serializedName: "fillGapWithZero",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const MetricDimension: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetricDimension",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      internalName: {
        serializedName: "internalName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateEndpointConnectionListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnectionListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointConnection"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateEndpointConnection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnection",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      privateEndpoint: {
        serializedName: "properties.privateEndpoint",
        type: {
          name: "Composite",
          className: "PrivateEndpoint"
        }
      },
      privateLinkServiceConnectionState: {
        serializedName: "properties.privateLinkServiceConnectionState",
        type: {
          name: "Composite",
          className: "PrivateLinkServiceConnectionState"
        }
      }
    }
  }
};

export const PrivateLinkResourceListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkResourceListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateLinkResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkResource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      groupId: {
        serializedName: "properties.groupId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      requiredMembers: {
        serializedName: "properties.requiredMembers",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      requiredZoneNames: {
        serializedName: "properties.requiredZoneNames",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const KeyValue: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyValue",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      key: {
        serializedName: "properties.key",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      label: {
        serializedName: "properties.label",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "properties.value",
        type: {
          name: "String"
        }
      },
      contentType: {
        serializedName: "properties.contentType",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "properties.eTag",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      lastModified: {
        serializedName: "properties.lastModified",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      locked: {
        serializedName: "properties.locked",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      tags: {
        serializedName: "properties.tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const DeletedConfigurationStoreListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeletedConfigurationStoreListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DeletedConfigurationStore"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DeletedConfigurationStore: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeletedConfigurationStore",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      configurationStoreId: {
        serializedName: "properties.configurationStoreId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "properties.location",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      deletionDate: {
        serializedName: "properties.deletionDate",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      scheduledPurgeDate: {
        serializedName: "properties.scheduledPurgeDate",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      tags: {
        serializedName: "properties.tags",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      purgeProtectionEnabled: {
        serializedName: "properties.purgeProtectionEnabled",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ReplicaListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ReplicaListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Replica"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Replica: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Replica",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      endpoint: {
        serializedName: "properties.endpoint",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const KeyValueListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyValueListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "KeyValue"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TrackedResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConfigurationStore: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConfigurationStore",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ResourceIdentity"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      creationDate: {
        serializedName: "properties.creationDate",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      endpoint: {
        serializedName: "properties.endpoint",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      encryption: {
        serializedName: "properties.encryption",
        type: {
          name: "Composite",
          className: "EncryptionProperties"
        }
      },
      privateEndpointConnections: {
        serializedName: "properties.privateEndpointConnections",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointConnectionReference"
            }
          }
        }
      },
      publicNetworkAccess: {
        serializedName: "properties.publicNetworkAccess",
        type: {
          name: "String"
        }
      },
      disableLocalAuth: {
        defaultValue: false,
        serializedName: "properties.disableLocalAuth",
        type: {
          name: "Boolean"
        }
      },
      softDeleteRetentionInDays: {
        defaultValue: 7,
        serializedName: "properties.softDeleteRetentionInDays",
        type: {
          name: "Number"
        }
      },
      enablePurgeProtection: {
        defaultValue: false,
        serializedName: "properties.enablePurgeProtection",
        type: {
          name: "Boolean"
        }
      },
      createMode: {
        serializedName: "properties.createMode",
        type: {
          name: "Enum",
          allowedValues: ["Recover", "Default"]
        }
      }
    }
  }
};

export const ReplicasDeleteHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ReplicasDeleteHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      }
    }
  }
};
