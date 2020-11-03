const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = {
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    living: {
        type: Boolean,
        required: true
    },
    bountyAmount: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: ['Sith', 'Jedi'],
        required: true
    }
}

module.exports = mongoose.model("Bounty", bountySchema)