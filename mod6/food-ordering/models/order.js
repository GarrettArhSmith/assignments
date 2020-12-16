const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    dateCreated: {
        type: Date,
        default: Date.now
    },
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    items: {
        type: [String],
        // type: [Schema.Types.ObjectId],
        // ref: "Item",
        validate: {
            validator: function(array) {
                return array.length > 0;
            },
            message: "You need to add at least 1 item to order!"
        },
        required: true
    }
})

module.exports = mongoose.model("Order", orderSchema)