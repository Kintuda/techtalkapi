import mongoose, { Document, Schema, mongo } from 'mongoose'
import bcrypt from 'bcryptjs'

export interface Iuser extends Document {
    name: string
    adress?: string
    email: string
    password: string
    cpfCnpj: string
}

const User: Schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Required field!']
    },
    adress: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Required field!'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Required field!']
    },
    cpfCnpj: {
        type: String,
        required: [true, 'Required field!']
    }
})

User.pre<Iuser>('save', function (next) {
    if (this.isNew || this.isModified('password')) {
        this.password = bcrypt.hashSync(this.password, 10)
    }
    next()
})

export default mongoose.model<Iuser>('user', User)