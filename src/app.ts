import fastify, { FastifyInstance } from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'
import routes from './bundle/mainRoutes'
import databasePlugin from './plugins/database'
const app: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({ logger: console.log })
import { options } from './lib/swagger'

app.register(require('fastify-swagger'), options)
app.register(databasePlugin)
app.register(routes)

export default app