const express = require('express')
const app = express()
const { v4: uuid } = require('uuid');
const morgan = require('morgan')

app.use(express.json())
app.use(morgan('dev'))

const bounties = [
    {fName: "Jack", lName: "Smith", living: true, bountyAmount: 500, type: "Jedi", _id: uuid()},
    {fName: "Garrett", lName: "Smith", living: true, bountyAmount: 500, type: "Jedi", _id: uuid()},
    {fName: "Garrett", lName: "Smith", living: false, bountyAmount: 500, type: "Jedi", _id: uuid()},
    {fName: "Garrett", lName: "Smith", living: true, bountyAmount: 500, type: "Jedi", _id: uuid()},
    {fName: "Garrett", lName: "Smith", living: true, bountyAmount: 500, type: "Jedi", _id: uuid()},
    {fName: "Garrett", lName: "Smith", living: true, bountyAmount: 500, type: "Jedi", _id: uuid()}
]


app.get("/bounties", (req, res) => {
    res.status(200).send(bounties)
})
app.get("/bounties/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    res.status(200).send(bounties.find(bounty => bounty._id === bountyId))
})

app.post("/bounties", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid()
    bounties.push(newBounty)
    res.status(201).send(newBounty)
})

app.delete("/bounties/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    let targetBounty;
    bounties.map((bounty, i) => {
        if (bounty._id === bountyId) {
            targetBounty = bounty
            bounties.splice(i, 1)
        }
    })
    res.status(200).send(`Successfully removed the bounty for ${targetBounty.fName} ${targetBounty.lName}!`)
})

app.put("/bounties/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const changes = req.body
    const target = bounties.find(bounty => bounty._id === bountyId)
    res.status(201).send(Object.assign(target, changes))

})
//etc.


app.listen(9000, () => {
    console.log("The server is running on Port 9000!")
})