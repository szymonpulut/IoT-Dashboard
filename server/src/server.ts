import { createServer as createHttpServer } from 'node:http'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware as apolloMiddleware } from '@apollo/server/express4'
import { makeExecutableSchema } from '@graphql-tools/schema'
import cors from 'cors'
import express from 'express'
import fs from 'fs'
import { print } from 'graphql'
import { useServer as useWsServer } from 'graphql-ws/lib/use/ws'
import { WebSocketServer } from 'ws'

import 'dotenv/config'

import messageReceived from './mqtt/mqtt.messageReceived.js'
import { topics } from './mqtt/mqtt.topics.js'
import resolvers from './resolvers.js'
import typeDefs from './typeDefs.js'

import { mqttClient } from '@/mqtt/mqttClient.js'

const HTTP_PORT = process.env.HTTP_PORT

// MQTT
mqttClient.on('connect', () => {
  console.log('Connected to MQTT broker')
  mqttClient.subscribe(topics)
})

mqttClient.on('error', (error) => console.log(error))

mqttClient.on('message', messageReceived)

// GraphQL / Apollo
const printedTypeDefs = print(typeDefs)
fs.writeFileSync('joinedSchema.graphql', printedTypeDefs)

const schema = makeExecutableSchema({ typeDefs, resolvers })

// Express.js
const app = express()
app.use(cors())
app.use(express.json())

const apolloServer = new ApolloServer({
  schema,
})
await apolloServer.start()

app.use('/graphql', apolloMiddleware(apolloServer))

const httpServer = createHttpServer(app)
const wsServer = new WebSocketServer({ server: httpServer, path: '/graphql' })
useWsServer({ schema }, wsServer)

httpServer.listen({ port: HTTP_PORT }, () => {
  console.log(`Server running on port ${HTTP_PORT}`)
  console.log(`GraphQL endpoint: http://localhost:${HTTP_PORT}/graphql`)
})
