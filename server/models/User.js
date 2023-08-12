const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        String,
    }
})

module.exports = mongoose.model('User', UserSchema)