const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory')

inventoryRouter.get("/", (req, res, next) => {
    Inventory.find((err, products) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(products)
    })
})

inventoryRouter.get("/:productId", (req, res, next) => {
    Inventory.findOne(
        { _id: req.params.productId },
        (err, product) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(product)
    })
})

inventoryRouter.post("/", (req, res, next) => {
    const newProduct = new Inventory(req.body)
    newProduct.save((err, savedProduct) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedProduct)
    })
})

inventoryRouter.delete("/:productId", (req, res, next) => {
    Inventory.findOneAndDelete(
        { _id: req.params.productId },
        (err, deletedProduct) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedProduct.name}`)
    })
})

inventoryRouter.put("/:productId", (req, res, next) => {
    Inventory.findOneAndUpdate(
        { _id: req.params.productId },
        req.body,
        { new: true },
        (err, updatedProduct) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedProduct)
    })
})

module.exports = inventoryRouter