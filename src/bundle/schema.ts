import { RouteSchema } from 'fastify'

const schema: RouteSchema = {
    body: {
        required: [
            'name', 'adress', 'email', 'password', 'cpfCnpj'
        ],
        properties: {
            name: { type: 'string' },
            adress: { type: 'string' },
            email: { type: 'string' },
            password: { type: 'string' },
            cpfCnpj: { type: 'string' }
        }
    },
    response: {
        '2xx': {
            type: 'object',
            properties: {
                _id: { type: 'string' },
                name: { type: 'string' },
                adress: { type: 'string' },
                email: { type: 'string' },
                password: { type: 'string' },
                cpfCnpj: { type: 'string' }
            }
        }
    }
}

export default schema