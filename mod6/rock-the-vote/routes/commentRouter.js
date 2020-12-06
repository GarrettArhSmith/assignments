const express = require('express')
const commentRouter = express.Router()
const Comment = require('../models/comment')

//GET ALL FROM ISSUE
commentRouter.get("/:issueId", (req, res, next) => {
    Comment.find({ issue: req.params.issueId })
        .populate("user")
        .exec((err, comments) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(comments)
        })
})

//GET ALL FROM USER
commentRouter.get("/user", (req, res, next) => {
    Comment.find(
        { user: req.user._id },
        (err, comments) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(comments)
        }
    )
})

//ADD NEW COMMENT
commentRouter.post("/:issueId", (req, res, next) => {
    req.body.user = req.user._id
    console.log(req.params.issueId)
    req.body.issue = req.params.issueId
    console.log(req.body)
    const newComment = new Comment(req.body)
    newComment.save((err, comment) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(comment)
    })
})

//EDIT COMMENT


//DELETE COMMENT

module.exports = commentRouter