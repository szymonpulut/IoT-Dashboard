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

export type CalendarAuthenticationQuery = {
  __typename?: 'CalendarAuthenticationQuery';
  loginStatus: Scalars['Boolean']['output'];
  loginUrl: Scalars['String']['output'];
};


export type CalendarAuthenticationQueryLoginStatusArgs = {
  userId: Scalars['String']['input'];
};


export type CalendarAuthenticationQueryLoginUrlArgs = {
  userId: Scalars['String']['input'];
};

export type CalendarMutation = {
  __typename?: 'CalendarMutation';
  authenticate: Scalars['Boolean']['output'];
};


export type CalendarMutationAuthenticateArgs = {
  code: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type CalendarQueryType = {
  __typename?: 'CalendarQueryType';
  authentication: CalendarAuthenticationQuery;
  events: Array<Event>;
};


export type CalendarQueryTypeEventsArgs = {
  userId: Scalars['String']['input'];
};

export type Event = {
  __typename?: 'Event';
  name: Scalars['String']['output'];
  start: EventTime;
};

export type EventTime = {
  __typename?: 'EventTime';
  dateTime: Scalars['String']['output'];
  timeZone: Scalars['String']['output'];
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
  calendar: CalendarMutation;
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
  calendar: CalendarQueryType;
  multiDayWeather: Array<MultiDayWeather>;
  singleDayWeather: SingleDayWeather;
};


export type QueryAirQualityArgs = {
  latitude: Scalars['String']['input'];
  longitude: Scalars['String']['input'];
};


export type QueryMultiDayWeatherArgs = {
  dayCount?: InputMaybe<Scalars['Int']['input']>;
  latitude: Scalars['String']['input'];
  longitude: Scalars['String']['input'];
};


export type QuerySingleDayWeatherArgs = {
  latitude: Scalars['String']['input'];
  longitude: Scalars['String']['input'];
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

export type AuthenticateCalendarMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  code: Scalars['String']['input'];
}>;


export type AuthenticateCalendarMutation = { __typename?: 'Mutation', calendar: { __typename?: 'CalendarMutation', authenticate: boolean } };

export type CalendarQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type CalendarQuery = { __typename?: 'Query', calendar: { __typename?: 'CalendarQueryType', events: Array<{ __typename?: 'Event', name: string, start: { __typename?: 'EventTime', dateTime: string, timeZone: string } }> } };

export type CalendarLoginQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type CalendarLoginQuery = { __typename?: 'Query', calendar: { __typename?: 'CalendarQueryType', authentication: { __typename?: 'CalendarAuthenticationQuery', loginStatus: boolean, loginUrl: string } } };

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
  longitude: Scalars['String']['input'];
}>;


export type AirQualityQuery = { __typename?: 'Query', airQuality: { __typename?: 'AirQuality', PM25: { __typename?: 'AirQualityData', pollutionType: string, data: { __typename?: 'AirQualityPollutionData', value: number, alertThreshold: string } }, PM10: { __typename?: 'AirQualityData', pollutionType: string, data: { __typename?: 'AirQualityPollutionData', value: number, alertThreshold: string } } } };

export type WeatherQueryVariables = Exact<{
  latitude: Scalars['String']['input'];
  longitude: Scalars['String']['input'];
}>;


export type WeatherQuery = { __typename?: 'Query', singleDayWeather: { __typename?: 'SingleDayWeather', weatherCode: number, temperature: { __typename?: 'SingleDayTemperature', max: number, min: number } }, multiDayWeather: Array<{ __typename?: 'MultiDayWeather', weatherCode: number, temperature: number }> };


export const AuthenticateCalendarDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AuthenticateCalendar"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"calendar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}]}]}}]}}]} as unknown as DocumentNode<AuthenticateCalendarMutation, AuthenticateCalendarMutationVariables>;
export const CalendarDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Calendar"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"calendar"},"name":{"kind":"Name","value":"calendar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"start"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateTime"}},{"kind":"Field","name":{"kind":"Name","value":"timeZone"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CalendarQuery, CalendarQueryVariables>;
export const CalendarLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CalendarLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"calendar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authentication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]},{"kind":"Field","name":{"kind":"Name","value":"loginUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}]}}]}}]}}]} as unknown as DocumentNode<CalendarLoginQuery, CalendarLoginQueryVariables>;
export const MainGateStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"MainGateStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mainGateStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<MainGateStatusSubscription, MainGateStatusSubscriptionVariables>;
export const SmallGateStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"SmallGateStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"smallGateStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<SmallGateStatusSubscription, SmallGateStatusSubscriptionVariables>;
export const OpenMainGateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"OpenMainGate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"toggle"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mainGate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"toggle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"toggle"}}}]}]}}]} as unknown as DocumentNode<OpenMainGateMutation, OpenMainGateMutationVariables>;
export const OpenSmallGateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"OpenSmallGate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"toggle"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"smallGate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"toggle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"toggle"}}}]}]}}]} as unknown as DocumentNode<OpenSmallGateMutation, OpenSmallGateMutationVariables>;
export const SensorListUpdatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"SensorListUpdates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sensorListUpdates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<SensorListUpdatesSubscription, SensorListUpdatesSubscriptionVariables>;
export const AirQualityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AirQuality"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"latitude"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"longitude"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"airQuality"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"latitude"},"value":{"kind":"Variable","name":{"kind":"Name","value":"latitude"}}},{"kind":"Argument","name":{"kind":"Name","value":"longitude"},"value":{"kind":"Variable","name":{"kind":"Name","value":"longitude"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"PM25"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pollutionType"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"alertThreshold"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"PM10"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pollutionType"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"alertThreshold"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AirQualityQuery, AirQualityQueryVariables>;
export const WeatherDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Weather"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"latitude"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"longitude"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"singleDayWeather"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"latitude"},"value":{"kind":"Variable","name":{"kind":"Name","value":"latitude"}}},{"kind":"Argument","name":{"kind":"Name","value":"longitude"},"value":{"kind":"Variable","name":{"kind":"Name","value":"longitude"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"weatherCode"}},{"kind":"Field","name":{"kind":"Name","value":"temperature"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"multiDayWeather"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"latitude"},"value":{"kind":"Variable","name":{"kind":"Name","value":"latitude"}}},{"kind":"Argument","name":{"kind":"Name","value":"longitude"},"value":{"kind":"Variable","name":{"kind":"Name","value":"longitude"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"weatherCode"}},{"kind":"Field","name":{"kind":"Name","value":"temperature"}}]}}]}}]} as unknown as DocumentNode<WeatherQuery, WeatherQueryVariables>;