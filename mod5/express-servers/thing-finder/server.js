const express = require('express')
const app = express()
const { v4: uuid } = require('uuid');


app.use(express.json())



const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: uuid()
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
        _id: uuid()
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id: uuid()
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: uuid()
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: uuid()
    },{
        name: "soup",
        type: "food",
        price: 300,
        _id: uuid()
    },{
        name: "flour",
        type: "food",
        price: 100,
        _id: uuid()
    }
]



app.route("/inventory")
    .get((req, res) => {
        res.send(inventoryItems)
    })

app.route("/inventory/type")
    .get((req, res) => {
        const itemType = req.query.type
         res.send(inventoryItems.filter(item => item.type === itemType))
    })

app.route("/inventory/:itemId")
    .get((req, res) => {
        const itemId = req.params.itemId
        res.send(inventoryItems.find(item => item._id === itemId))
    })



app.listen(9000, () => {
    console.log("Server running on port 9000!")
})