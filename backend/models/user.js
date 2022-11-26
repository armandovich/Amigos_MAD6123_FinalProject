import mongoose from 'mongoose'

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    admin: {
        require: true,
        type: Boolean
    }
})

export default mongoose.model('users', dataSchema)