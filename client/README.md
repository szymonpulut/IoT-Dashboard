# IoT Dashboard - Client

## Description

This is the frontend of the web application that's used to display and interact with custom smart home system.

## Technologies used & features

Vite, TypeScript, React, styled-components, Apollo Client, GraphQL, WebSockets

## Directory structure

This project directory structure is domain driven, where the domains are `components`.

```
src
│   App.tsx
│   index.css
│   main.tsx
│
└── components
│   └── Name
|      └──└── Name.component.tsx
│         └── queries
│         └──└── useQuery.query.ts
│         └── hooks
│         └──└── useHook.hook.ts
│         └── utils
│         └──└── tool.util.ts
└── contexts
└── hooks
└── utils
└── themes
└── generated (Apollo GraphQL - Codegen)
```

## Running

`npm install`

`npm run dev` starts development server
`npm run build` creates production ready package
`npm run codegen` generates schemas for Apollo GraphQL

## TODO

- Rework `@` import alias - it should point to `src/`
- Dockerise
