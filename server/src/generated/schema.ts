import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  MainGateStatus: MainGateStatus;
  MainGateStatusEvent: ResolverTypeWrapper<MainGateStatusEvent>;
  MultiDayWeather: ResolverTypeWrapper<MultiDayWeather>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  SensorListUpdate: ResolverTypeWrapper<SensorListUpdate>;
  SingleDayTemperature: ResolverTypeWrapper<SingleDayTemperature>;
  SingleDayWeather: ResolverTypeWrapper<SingleDayWeather>;
  SmallGateStatus: SmallGateStatus;
  SmallGateStatusEvent: ResolverTypeWrapper<SmallGateStatusEvent>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Float: Scalars['Float']['output'];
  Int: Scalars['Int']['output'];
  MainGateStatusEvent: MainGateStatusEvent;
  MultiDayWeather: MultiDayWeather;
  Mutation: {};
  Query: {};
  SensorListUpdate: SensorListUpdate;
  SingleDayTemperature: SingleDayTemperature;
  SingleDayWeather: SingleDayWeather;
  SmallGateStatusEvent: SmallGateStatusEvent;
  String: Scalars['String']['output'];
  Subscription: {};
};

export type MainGateStatusEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['MainGateStatusEvent'] = ResolversParentTypes['MainGateStatusEvent']> = {
  status?: Resolver<ResolversTypes['MainGateStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MultiDayWeatherResolvers<ContextType = any, ParentType extends ResolversParentTypes['MultiDayWeather'] = ResolversParentTypes['MultiDayWeather']> = {
  temperature?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  weatherCode?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  mainGate?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationMainGateArgs, 'toggle'>>;
  smallGate?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationSmallGateArgs, 'toggle'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  multiDayWeather?: Resolver<Array<ResolversTypes['MultiDayWeather']>, ParentType, ContextType, RequireFields<QueryMultiDayWeatherArgs, 'city'>>;
  singleDayWeather?: Resolver<Maybe<ResolversTypes['SingleDayWeather']>, ParentType, ContextType, RequireFields<QuerySingleDayWeatherArgs, 'city'>>;
};

export type SensorListUpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['SensorListUpdate'] = ResolversParentTypes['SensorListUpdate']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SingleDayTemperatureResolvers<ContextType = any, ParentType extends ResolversParentTypes['SingleDayTemperature'] = ResolversParentTypes['SingleDayTemperature']> = {
  max?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  min?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SingleDayWeatherResolvers<ContextType = any, ParentType extends ResolversParentTypes['SingleDayWeather'] = ResolversParentTypes['SingleDayWeather']> = {
  temperature?: Resolver<ResolversTypes['SingleDayTemperature'], ParentType, ContextType>;
  weatherCode?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SmallGateStatusEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['SmallGateStatusEvent'] = ResolversParentTypes['SmallGateStatusEvent']> = {
  status?: Resolver<ResolversTypes['SmallGateStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  mainGateStatus?: SubscriptionResolver<ResolversTypes['MainGateStatusEvent'], "mainGateStatus", ParentType, ContextType>;
  sensorListUpdates?: SubscriptionResolver<Array<ResolversTypes['SensorListUpdate']>, "sensorListUpdates", ParentType, ContextType>;
  smallGateStatus?: SubscriptionResolver<ResolversTypes['SmallGateStatusEvent'], "smallGateStatus", ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  MainGateStatusEvent?: MainGateStatusEventResolvers<ContextType>;
  MultiDayWeather?: MultiDayWeatherResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SensorListUpdate?: SensorListUpdateResolvers<ContextType>;
  SingleDayTemperature?: SingleDayTemperatureResolvers<ContextType>;
  SingleDayWeather?: SingleDayWeatherResolvers<ContextType>;
  SmallGateStatusEvent?: SmallGateStatusEventResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
};

