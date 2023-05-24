// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CommunicationIdentifier,
  CommunicationUserIdentifier,
  PhoneNumberIdentifier,
} from "@azure/communication-common";
import { CallConnectionStateModel } from "../generated/src";

export {
  CallConnectionStateModel,
  CallRejectReason,
  KnownCallRejectReason,
} from "../generated/src/models/index";

/** Properties of a call connection */
export interface CallConnectionProperties {
  /** The call connection id. */
  callConnectionId?: string;
  /** The server call id. */
  serverCallId?: string;
  /**
   * The source caller Id, a phone number, that's shown to the PSTN participant being invited.
   * Required only when calling a PSTN callee.
   */
  sourceCallerIdNumber?: PhoneNumberIdentifier;
  /** Display name of the call if dialing out to a pstn number. */
  sourceDisplayName?: string;
  /** Source identity. */
  sourceIdentity?: CommunicationIdentifier;
  /** The targets of the call. */
  targetParticipants?: CommunicationIdentifier[];
  /** The state of the call connection. */
  callConnectionState?: CallConnectionStateModel;
  /** The callback URL. */
  callbackUrl?: string;
  /** The correlation ID. */
  correlationId?: string;
  /** Identity of the answering entity. Only populated when identity is provided in the request. */
  answeredByIdentifier?: CommunicationUserIdentifier;
}

/** Contract model of an ACS call participant */
export interface CallParticipant {
  /** Communication identifier of the participant */
  identifier?: CommunicationIdentifier;
  /** Is participant muted */
  isMuted?: boolean;
}

/** The locator used for joining or taking action on a call. */
export interface CallLocator {
  id: string;
  kind: CallLocatorType;
}

/** The PlaySource model. */
export interface PlaySource {
  playSourceId?: string;
}

/** The FileSource model. */
export interface FileSource extends PlaySource {
  url: string;
  readonly kind: "fileSource";
}

/** A Dtmf Tone. */
export enum DtmfTone {
  /** Zero */
  Zero = "zero",
  /** One */
  One = "one",
  /** Two */
  Two = "two",
  /** Three */
  Three = "three",
  /** Four */
  Four = "four",
  /** Five */
  Five = "five",
  /** Six */
  Six = "six",
  /** Seven */
  Seven = "seven",
  /** Eight */
  Eight = "eight",
  /** Nine */
  Nine = "nine",
  /** A */
  A = "a",
  /** B */
  B = "b",
  /** C */
  C = "c",
  /** D */
  D = "d",
  /** Pound */
  Pound = "pound",
  /** Asterisk */
  Asterisk = "asterisk",
}

/** The type of the recognition that the service accepts. */
export enum RecognizeInputType {
  /** Dtmf */
  Dtmf = "dtmf",
}

/** Call invitee details. */
export interface CallInvite {
  /** The Target's PhoneNumberIdentifier or CommunicationUserIdentifier. */
  readonly targetParticipant: PhoneNumberIdentifier | CommunicationUserIdentifier;
  /** Caller's phone number identifier. */
  readonly sourceCallIdNumber?: PhoneNumberIdentifier;
  sourceDisplayName?: string;
}

/** The locator type of a call. */
export type CallLocatorType = "serverCallLocator" | "groupCallLocator";

/** The content type of a call recording. */
export type RecordingContent = "audio" | "audioVideo";

/** The channel type of a call recording. */
export type RecordingChannel = "mixed" | "unmixed";

/** The format type of a call recording. */
export type RecordingFormat = "mp3" | "mp4" | "wav";

/** Channel affinity for a participant */
export interface ChannelAffinity {
  /** Channel number to which bitstream from a particular participant will be written. */
  channel?: number;
  /**
   * The identifier for the participant whose bitstream will be written to the channel
   * represented by the channel number.
   */
  targetParticipant: CommunicationIdentifier;
}
