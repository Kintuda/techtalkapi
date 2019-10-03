import { FastifyRequest, FastifyReply } from "fastify";
import { ServerResponse } from "http";
import User from './user'
import bcript from 'bcryptjs'
import createToken from "../lib/jwt";

const registerController = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
    const { body } = req
    const user = await User.create(body)
    return reply.code(201).send(user)
}


const loginController = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
        return reply.status(401).send({ message: 'Missing Authorization Header' });
    }

    const base64Credentials = req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [email, password] = credentials.split(':');

    const user = await User.findOne({ email })
    if (!user) {
        return reply.code(401).send({ message: 'Email ou senha incorreta' })
    }

    const match = await bcript.compare(password, user.password)

    if (!match) {
        return reply.code(401).send({ message: 'Email ou senha incorreta' })
    }

    const jwt = createToken(user)

    return reply.status(200).send(jwt)

}


export { registerController, loginController }