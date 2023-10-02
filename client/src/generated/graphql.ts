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

export type Event = {
  __typename?: 'Event';
  date: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type EventList = {
  __typename?: 'EventList';
  events: Array<Event>;
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
  weather: Scalars['String']['output'];
  weatherCode: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  mainGate: Scalars['Boolean']['output'];
  smallGate?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationMainGateArgs = {
  toggle: Scalars['Boolean']['input'];
};


export type MutationSmallGateArgs = {
  toggle: Scalars['Boolean']['input'];
};

export type Query = {
  __typename?: 'Query';
  calendar: EventList;
  multiDayWeather: Array<MultiDayWeather>;
  singleDayWeather?: Maybe<SingleDayWeather>;
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
  weather: Scalars['String']['output'];
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

export type CalendarQueryVariables = Exact<{ [key: string]: never; }>;


export type CalendarQuery = { __typename?: 'Query', calendar: { __typename?: 'EventList', events: Array<{ __typename?: 'Event', name: string, date: string }> } };

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


export type OpenSmallGateMutation = { __typename?: 'Mutation', smallGate?: boolean | null };

export type SensorListUpdatesSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SensorListUpdatesSubscription = { __typename?: 'Subscription', sensorListUpdates: Array<{ __typename?: 'SensorListUpdate', name: string, value: number }> };

export type WeatherQueryVariables = Exact<{
  city: Scalars['String']['input'];
}>;


export type WeatherQuery = { __typename?: 'Query', singleDayWeather?: { __typename?: 'SingleDayWeather', weatherCode: number, temperature: { __typename?: 'SingleDayTemperature', max: number, min: number } } | null, multiDayWeather: Array<{ __typename?: 'MultiDayWeather', weatherCode: number, temperature: number }> };


export const CalendarDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Calendar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"calendar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]}}]}}]} as unknown as DocumentNode<CalendarQuery, CalendarQueryVariables>;
export const MainGateStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"MainGateStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mainGateStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<MainGateStatusSubscription, MainGateStatusSubscriptionVariables>;
export const SmallGateStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"SmallGateStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"smallGateStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<SmallGateStatusSubscription, SmallGateStatusSubscriptionVariables>;
export const OpenMainGateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"OpenMainGate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"toggle"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mainGate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"toggle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"toggle"}}}]}]}}]} as unknown as DocumentNode<OpenMainGateMutation, OpenMainGateMutationVariables>;
export const OpenSmallGateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"OpenSmallGate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"toggle"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"smallGate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"toggle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"toggle"}}}]}]}}]} as unknown as DocumentNode<OpenSmallGateMutation, OpenSmallGateMutationVariables>;
export const SensorListUpdatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"SensorListUpdates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sensorListUpdates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<SensorListUpdatesSubscription, SensorListUpdatesSubscriptionVariables>;
export const WeatherDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Weather"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"city"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"singleDayWeather"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"city"},"value":{"kind":"Variable","name":{"kind":"Name","value":"city"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"weatherCode"}},{"kind":"Field","name":{"kind":"Name","value":"temperature"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"multiDayWeather"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"city"},"value":{"kind":"Variable","name":{"kind":"Name","value":"city"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"weatherCode"}},{"kind":"Field","name":{"kind":"Name","value":"temperature"}}]}}]}}]} as unknown as DocumentNode<WeatherQuery, WeatherQueryVariables>;