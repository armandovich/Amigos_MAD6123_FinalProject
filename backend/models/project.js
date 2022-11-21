const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    status: {
        required: true,
        type: String
    },
    task_number: {
        require: false,
        type: Number
    },
    total_cost: {
        require: false,
        type: Number
    },
    start_date: {
        require: true,
        type: Date
    },
    start_date: {
        require: true,
        type: Date
    }
})

module.exports = mongoose.model('projects', dataSchema)