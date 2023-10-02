# IoT Dashboard - Server

## Description

This is the backend of the web application that's used to display and interact with custom smart home system.

## Technologies used & features

TypeScript, Express.js, Apollo, GraphQL, MQTT, Zod, custom cache manager

## Directory structure

This project directory structure is domain driven, where the domains are directories in `api`. External APIs interact with outside world, while internal ones - are confined to MQTT broker.

```
src
│   server.ts
│   resolvers.ts
│   typeDefs.ts
└── api
│   └── internal
|      └──└── internal.resolver.ts
│      └──└── internal.schema.graphql
│      └──└── handlers
│      └──└──└── internal.handler.ts
│   └── external
|      └──└── external.configConsts.ts
|      └──└── external.dataSources.ts
|      └──└── external.externalMappings.ts
|      └──└── external.externalSchema.ts
│      └──└── external.resolver.ts
│      └──└── external.schema.graphql
│      └──└── external.types.ts
└── mqtt
└── utils
└── generated (Apollo GraphQL - Codegen)
```

### Bundling

Schemas for GraphQL are generated using a tool `@graphql-tools/merge` - it automatically detects all resolver & schema files in `api`. MQTT is initialized in `mqtt`, and the source of truth regarding topics, subscriptions is there as well.

## Running

`npm install`

`npm run start` starts development server
`npm run build` creates production ready package
`npm run genCodegen` generates schemas for Apollo GraphQL

## TODO

- Add Calendar API integration (OAuth2 issues)
- Add air quality API integration
- Dockerise
- Add simple authentication
