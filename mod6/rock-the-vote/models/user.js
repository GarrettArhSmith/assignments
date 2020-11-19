const mongoose = require('mongoose')
const Schema = mongoose.Schema()

const userSchema = {
    username: {
        type: String,
        required: true,
        lowercsase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    memberSince: {
        type: Date,
        default: Date.now
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}

module.exports = mongoose.model("User", userSchema)