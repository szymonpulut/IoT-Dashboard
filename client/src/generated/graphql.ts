/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AirQuality = {
  __typename?: 'AirQuality';
  PM10: AirQualityData;
  PM25: AirQualityData;
};

export type AirQualityData = {
  __typename?: 'AirQualityData';
  data: AirQualityPollutionData;
  pollutionType: Scalars['String']['output'];
};

export type AirQualityPollutionData = {
  __typename?: 'AirQualityPollutionData';
  alertThreshold: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export enum MainGateStatus {
  Closed = 'CLOSED',
  Open = 'OPEN',
  PartiallyOpen = 'PARTIALLY_OPEN',
  Unknown = 'UNKNOWN'
}

export type MainGateStatusEvent = {
  __typename?: 'MainGateStatusEvent';
  status: MainGateStatus;
};

export type MultiDayWeather = {
  __typename?: 'MultiDayWeather';
  temperature: Scalars['Float']['output'];
  weatherCode: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  mainGate: Scalars['Boolean']['output'];
  smallGate: Scalars['Boolean']['output'];
};


export type MutationMainGateArgs = {
  toggle: Scalars['Boolean']['input'];
};


export type MutationSmallGateArgs = {
  toggle: Scalars['Boolean']['input'];
};

export type Query = {
  __typename?: 'Query';
  airQuality: AirQuality;
  multiDayWeather: Array<MultiDayWeather>;
  singleDayWeather?: Maybe<SingleDayWeather>;
};


export type QueryAirQualityArgs = {
  latitude: Scalars['String']['input'];
  longtitude: Scalars['String']['input'];
};


export type QueryMultiDayWeatherArgs = {
  city: Scalars['String']['input'];
  dayCount?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySingleDayWeatherArgs = {
  city: Scalars['String']['input'];
};

export type SensorListUpdate = {
  __typename?: 'SensorListUpdate';
  name: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type SingleDayTemperature = {
  __typename?: 'SingleDayTemperature';
  max: Scalars['Float']['output'];
  min: Scalars['Float']['output'];
};

export type SingleDayWeather = {
  __typename?: 'SingleDayWeather';
  temperature: SingleDayTemperature;
  weatherCode: Scalars['Int']['output'];
};

export enum SmallGateStatus {
  Closed = 'CLOSED',
  Open = 'OPEN',
  Unknown = 'UNKNOWN'
}

export type SmallGateStatusEvent = {
  __typename?: 'SmallGateStatusEvent';
  status: SmallGateStatus;
};

export type Subscription = {
  __typename?: 'Subscription';
  mainGateStatus: MainGateStatusEvent;
  sensorListUpdates: Array<SensorListUpdate>;
  smallGateStatus: SmallGateStatusEvent;
};

export type MainGateStatusSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type MainGateStatusSubscription = { __typename?: 'Subscription', mainGateStatus: { __typename?: 'MainGateStatusEvent', status: MainGateStatus } };

export type SmallGateStatusSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SmallGateStatusSubscription = { __typename?: 'Subscription', smallGateStatus: { __typename?: 'SmallGateStatusEvent', status: SmallGateStatus } };

export type OpenMainGateMutationVariables = Exact<{
  toggle: Scalars['Boolean']['input'];
}>;


export type OpenMainGateMutation = { __typename?: 'Mutation', mainGate: boolean };

export type OpenSmallGateMutationVariables = Exact<{
  toggle: Scalars['Boolean']['input'];
}>;


export type OpenSmallGateMutation = { __typename?: 'Mutation', smallGate: boolean };

export type SensorListUpdatesSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SensorListUpdatesSubscription = { __typename?: 'Subscription', sensorListUpdates: Array<{ __typename?: 'SensorListUpdate', name: string, value: number }> };

export type AirQualityQueryVariables = Exact<{
  latitude: Scalars['String']['input'];
  longtitude: Scalars['String']['input'];
}>;


export type AirQualityQuery = { __typename?: 'Query', airQuality: { __typename?: 'AirQuality', PM25: { __typename?: 'AirQualityData', pollutionType: string, data: { __typename?: 'AirQualityPollutionData', value: number, alertThreshold: string } }, PM10: { __typename?: 'AirQualityData', pollutionType: string, data: { __typename?: 'AirQualityPollutionData', value: number, alertThreshold: string } } } };

export type WeatherQueryVariables = Exact<{
  city: Scalars['String']['input'];
}>;


export type WeatherQuery = { __typename?: 'Query', singleDayWeather?: { __typename?: 'SingleDayWeather', weatherCode: number, temperature: { __typename?: 'SingleDayTemperature', max: number, min: number } } | null, multiDayWeather: Array<{ __typename?: 'MultiDayWeather', weatherCode: number, temperature: number }> };


export const MainGateStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"MainGateStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mainGateStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<MainGateStatusSubscription, MainGateStatusSubscriptionVariables>;
export const SmallGateStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"SmallGateStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"smallGateStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<SmallGateStatusSubscription, SmallGateStatusSubscriptionVariables>;
export const OpenMainGateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"OpenMainGate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"toggle"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mainGate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"toggle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"toggle"}}}]}]}}]} as unknown as DocumentNode<OpenMainGateMutation, OpenMainGateMutationVariables>;
export const OpenSmallGateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"OpenSmallGate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"toggle"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"smallGate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"toggle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"toggle"}}}]}]}}]} as unknown as DocumentNode<OpenSmallGateMutation, OpenSmallGateMutationVariables>;
export const SensorListUpdatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"SensorListUpdates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sensorListUpdates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<SensorListUpdatesSubscription, SensorListUpdatesSubscriptionVariables>;
export const AirQualityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AirQuality"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"latitude"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"longtitude"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"airQuality"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"latitude"},"value":{"kind":"Variable","name":{"kind":"Name","value":"latitude"}}},{"kind":"Argument","name":{"kind":"Name","value":"longtitude"},"value":{"kind":"Variable","name":{"kind":"Name","value":"longtitude"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"PM25"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pollutionType"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"alertThreshold"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"PM10"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pollutionType"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"alertThreshold"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AirQualityQuery, AirQualityQueryVariables>;
export const WeatherDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Weather"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"city"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"singleDayWeather"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"city"},"value":{"kind":"Variable","name":{"kind":"Name","value":"city"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"weatherCode"}},{"kind":"Field","name":{"kind":"Name","value":"temperature"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"multiDayWeather"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"city"},"value":{"kind":"Variable","name":{"kind":"Name","value":"city"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"weatherCode"}},{"kind":"Field","name":{"kind":"Name","value":"temperature"}}]}}]}}]} as unknown as DocumentNode<WeatherQuery, WeatherQueryVariables>;