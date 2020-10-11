const express = require('express')
const app = express()
const { v4: uuid } = require('uuid');

app.use(express.json())

const users = [
    {name: "Garrett Smith", age:23, _id: uuid()},
    {name: "Garrett Smith", age:23, _id: uuid()},
    {name: "Garrett Smith", age:23, _id: uuid()},
    {name: "Garrett Smith", age:23, _id: uuid()},
    {name: "Garrett Smith", age:23, _id: uuid()},
    {name: "Garrett Smith", age:23, _id: uuid()}
]


app.get("/bounty", (req, resp) => {
    resp.send(users )
})
app.post("/bounty", (req, res) => {
    const newUser = req.body
    newUser._id = uuid()
    users.push(newUser)
    res.send(`Successfully added ${newUser.name} to the database!`)
})
//etc.


app.listen(9000, () => {
    console.log("The server is running on Port 9000!")
})