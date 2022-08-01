const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title: {
        type: String,
        required
    },
    reps: {
        type: Number,
        required
    },
    load: {
        type: Number,
        required
    }
}, {timestamps: true})

module.exports = mongoose.model('Workout',schema)