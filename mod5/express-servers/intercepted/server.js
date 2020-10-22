const express = require('express')
const app = express()
const mw = require('./middleware')


app.use(mw.addProp)


app.get("/", (req, res) => {
    res.send({name: "Garrett", age: 23})
})



app.listen(9000, () => {
    console.log("The server is listening on Port 9000!")
})