const express = require('express')

module.exports = {
    addProp: (req, res, next) => {
        console.log(req.user)
        req.user = {name: "Garrett", age: 23}
        console.log(req.user)
        next()
    }
}