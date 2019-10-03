import jwt from 'jsonwebtoken'
import { Iuser } from '../bundle/user'

interface Token {
    token: string,
    expiresIn: number
}

const createToken = (user: Iuser): Token => {
    const expiresIn: number = 3600
    const token = jwt.sign({ _id: user._id }, 'foobar', { expiresIn })
    return { expiresIn, token }
}

export default createToken