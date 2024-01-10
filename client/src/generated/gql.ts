/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation AuthenticateCalendar($userId: String!, $code: String!) {\n    calendar {\n      authenticate(userId: $userId, code: $code)\n    }\n  }\n": types.AuthenticateCalendarDocument,
    "\n  query Calendar($userId: String!) {\n    calendar: calendar {\n      events(userId: $userId) {\n        name\n        start {\n          dateTime\n          timeZone\n        }\n      }\n    }\n  }\n": types.CalendarDocument,
    "\n  query CalendarLogin($userId: String!) {\n    calendar {\n      authentication {\n        loginStatus(userId: $userId)\n        loginUrl(userId: $userId)\n      }\n    }\n  }\n": types.CalendarLoginDocument,
    "\n  subscription MainGateStatus {\n    mainGateStatus {\n      status\n    }\n  }\n": types.MainGateStatusDocument,
    "\n  subscription SmallGateStatus {\n    smallGateStatus {\n      status\n    }\n  }\n": types.SmallGateStatusDocument,
    "\n  mutation OpenMainGate($toggle: Boolean!) {\n    mainGate(toggle: $toggle)\n  }\n": types.OpenMainGateDocument,
    "\n  mutation OpenSmallGate($toggle: Boolean!) {\n    smallGate(toggle: $toggle)\n  }\n": types.OpenSmallGateDocument,
    "\n  subscription SensorListUpdates {\n    sensorListUpdates {\n      name\n      value\n    }\n  }\n": types.SensorListUpdatesDocument,
    "\n  query AirQuality($latitude: String!, $longitude: String!) {\n    airQuality(latitude: $latitude, longitude: $longitude) {\n      PM25 {\n        pollutionType\n        data {\n          value\n          alertThreshold\n        }\n      }\n      PM10 {\n        pollutionType\n        data {\n          value\n          alertThreshold\n        }\n      }\n    }\n  }\n": types.AirQualityDocument,
    "\n  query Weather($latitude: String!, $longitude: String!) {\n    singleDayWeather(latitude: $latitude, longitude: $longitude) {\n      weatherCode\n      temperature {\n        max\n        min\n      }\n    }\n    multiDayWeather(latitude: $latitude, longitude: $longitude) {\n      weatherCode\n      temperature\n    }\n  }\n": types.WeatherDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AuthenticateCalendar($userId: String!, $code: String!) {\n    calendar {\n      authenticate(userId: $userId, code: $code)\n    }\n  }\n"): (typeof documents)["\n  mutation AuthenticateCalendar($userId: String!, $code: String!) {\n    calendar {\n      authenticate(userId: $userId, code: $code)\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Calendar($userId: String!) {\n    calendar: calendar {\n      events(userId: $userId) {\n        name\n        start {\n          dateTime\n          timeZone\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Calendar($userId: String!) {\n    calendar: calendar {\n      events(userId: $userId) {\n        name\n        start {\n          dateTime\n          timeZone\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CalendarLogin($userId: String!) {\n    calendar {\n      authentication {\n        loginStatus(userId: $userId)\n        loginUrl(userId: $userId)\n      }\n    }\n  }\n"): (typeof documents)["\n  query CalendarLogin($userId: String!) {\n    calendar {\n      authentication {\n        loginStatus(userId: $userId)\n        loginUrl(userId: $userId)\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription MainGateStatus {\n    mainGateStatus {\n      status\n    }\n  }\n"): (typeof documents)["\n  subscription MainGateStatus {\n    mainGateStatus {\n      status\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription SmallGateStatus {\n    smallGateStatus {\n      status\n    }\n  }\n"): (typeof documents)["\n  subscription SmallGateStatus {\n    smallGateStatus {\n      status\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation OpenMainGate($toggle: Boolean!) {\n    mainGate(toggle: $toggle)\n  }\n"): (typeof documents)["\n  mutation OpenMainGate($toggle: Boolean!) {\n    mainGate(toggle: $toggle)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation OpenSmallGate($toggle: Boolean!) {\n    smallGate(toggle: $toggle)\n  }\n"): (typeof documents)["\n  mutation OpenSmallGate($toggle: Boolean!) {\n    smallGate(toggle: $toggle)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription SensorListUpdates {\n    sensorListUpdates {\n      name\n      value\n    }\n  }\n"): (typeof documents)["\n  subscription SensorListUpdates {\n    sensorListUpdates {\n      name\n      value\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AirQuality($latitude: String!, $longitude: String!) {\n    airQuality(latitude: $latitude, longitude: $longitude) {\n      PM25 {\n        pollutionType\n        data {\n          value\n          alertThreshold\n        }\n      }\n      PM10 {\n        pollutionType\n        data {\n          value\n          alertThreshold\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query AirQuality($latitude: String!, $longitude: String!) {\n    airQuality(latitude: $latitude, longitude: $longitude) {\n      PM25 {\n        pollutionType\n        data {\n          value\n          alertThreshold\n        }\n      }\n      PM10 {\n        pollutionType\n        data {\n          value\n          alertThreshold\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Weather($latitude: String!, $longitude: String!) {\n    singleDayWeather(latitude: $latitude, longitude: $longitude) {\n      weatherCode\n      temperature {\n        max\n        min\n      }\n    }\n    multiDayWeather(latitude: $latitude, longitude: $longitude) {\n      weatherCode\n      temperature\n    }\n  }\n"): (typeof documents)["\n  query Weather($latitude: String!, $longitude: String!) {\n    singleDayWeather(latitude: $latitude, longitude: $longitude) {\n      weatherCode\n      temperature {\n        max\n        min\n      }\n    }\n    multiDayWeather(latitude: $latitude, longitude: $longitude) {\n      weatherCode\n      temperature\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;