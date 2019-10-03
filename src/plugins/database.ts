import mongoose, { ConnectionOptions } from 'mongoose'
import { FastifyInstance } from 'fastify'

const databasePlugin = async (instance: FastifyInstance) => {
    const config: ConnectionOptions = { useNewUrlParser: true }
    const connect = await mongoose.connect(process.env.DB_URI || '', config)
    instance.addHook('onClose', () => connect.disconnect())
    instance.decorate('conn', connect)
    console.log('Database connected');
}

export default databasePlugin