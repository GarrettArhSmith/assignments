const mongoose = require('mongoose')
const Schema = mongoose.Schema()

const issueSchema = {
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        required: true,
        default: 0
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}

module.exports = mongoose.model("Issue", issueSchema)