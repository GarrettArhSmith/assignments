const express = require('express')
const app = express()
const { v4: uuid } = require('uuid');

app.use(express.json())

const bounties = [
    {fName: "Jack", lName: "Smith", living: true, bountyAmount: 500, type: "Jedi", _id: uuid()},
    {fName: "Garrett", lName: "Smith", living: true, bountyAmount: 500, type: "Jedi", _id: uuid()},
    {fName: "Garrett", lName: "Smith", living: true, bountyAmount: 500, type: "Jedi", _id: uuid()},
    {fName: "Garrett", lName: "Smith", living: true, bountyAmount: 500, type: "Jedi", _id: uuid()},
    {fName: "Garrett", lName: "Smith", living: true, bountyAmount: 500, type: "Jedi", _id: uuid()},
    {fName: "Garrett", lName: "Smith", living: true, bountyAmount: 500, type: "Jedi", _id: uuid()}
]


app.get("/bounties", (req, res) => {
    res.send(bounties)
})
app.get("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    res.send(bounties.find(bounty => bounty._id === bountyId))
})

app.post("/bounties", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid()
    bounties.push(newBounty)
    res.send(`Successfully created a $${newBounty.bountyAmount} bounty for ${newBounty.fName} ${newBounty.lName}!`)
})

app.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    let targetBounty;
    bounties.map((bounty, i) => {
        if (bounty._id === bountyId) {
            targetBounty = bounty
            bounties.splice(i, 1)
        }
    })
    res.send(`Successfully removed the bounty for ${targetBounty.fName} ${targetBounty.lName}!`)
})

app.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const changes = req.body
    const target = bounties.find(bounty => bounty._id === bountyId)
    Object.assign(target, changes)
    res.send(`Successfully updated bounty!`)

})
//etc.


app.listen(9000, () => {
    console.log("The server is running on Port 9000!")
})