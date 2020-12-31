const express = require('express')
const orderItemRouter = express.Router()
const OrderItem = require('../models/orderItem')

const checkRestaurantRole = function(req, res, next) {
    if(!req.user.roles.includes("restaurant")) {
        res.status(403)
        return next(new Error("You need to be a restaurant owner to do that!"))
    }
    return next()
}
const checkAdminRole = function(req, res, next) {
    if(!req.user.roles.includes("admin")) {
        res.status(403)
        return next(new Error("You need to be an admin to do that!"))
    }
    return next()
}

//GET ALL BY USER
orderItemRouter.get("/:userId", (req, res, next) => {
    OrderItem.find({ user: req.user._id })
        .exec((err, orderItems) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(orderItems)
        })
})

module.exports = orderItemRouter