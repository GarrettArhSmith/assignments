const express = require('express')
const app = express()
const { v4: uuid } = require('uuid');


const todos = [
    {
        name: "The name",
        description: "The description of the todo",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuid()
    }
]

app.use(express.json())

let todoId

app.use("/:todoId", (req, res, next) => {
    todoId = req.params.todoId
    next()
})



app.route("/")
    .get((req, res) => {
        res.send(todos)
    })
    .post((req, res) => {
        const newTodo = req.body
        newTodo._id = uuid()
        todos.push(newTodo)
        res.send(newTodo)
    })


app.route("/:todoId")
    .get((req, res) => {
        res.send(todos.find(todo => todo._id === todoId))
    })
    .put((req, res) => {
        const target = todos.find(todo => todo._id === todoId)
        const changes = req.body
        Object.assign(target, changes)
        res.send("Updated!")
    })
    .delete((req, res) => {
        todos.splice(todos.indexOf(todo => todo._id === todoId), 1)
        res.send("Deleted!")
    })


app.listen(9000, () => {
    console.log("Server is running on port 9000!")
})