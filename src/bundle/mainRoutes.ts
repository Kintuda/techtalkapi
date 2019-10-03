import fastify, { FastifyInstance } from 'fastify'
import { loginController, registerController } from './mainControllers'
import schema from './schema'

const createRoutes = async (instance: FastifyInstance) => {
    instance.route({
        url: '/login',
        method: 'GET',
        handler: loginController
    })

    instance.route({
        url: '/register',
        method: 'POST',
        schema: schema,
        handler: registerController
    })
}

export default createRoutes