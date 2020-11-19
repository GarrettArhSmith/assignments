const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(
    'monogodb://localhost:27017/rock-the-vote',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
    () => console.log("Connected to the Rock The Vote DB")
)

app.use("/auth", require('./routes/authRouter'))
app.use("/api", expressJwt())
app.use("/api/issue", require('./routes/issueRouter'))

app.use((err, req, res, next) => {
    console.log(err)
    if(error.name === "UnauthorizedError") {
        res.status(err.status)

    }
    return res.send({ errMsg: error.message })
})

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})