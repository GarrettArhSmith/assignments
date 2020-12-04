const express = require('express')
const voteRouter = express.Router()
const Issue = require('../models/issue')


//CHECK IF VOTED
// voteRouter.get("/:issueId", (req, res, next) => {
//     Issue.findOne(
//     {
//         _id: req.params.issueId,
//         $or: [
//             { upVoters: { $in: [req.user._id] } },
//             { downVoters: { $in: [req.user._id] } }
//         ]
//     },
//     (err, issue) => {
//         if(err) {
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(issue)
//     })
// })

//ADD UPVOTE
voteRouter.put("/up/add/:issueId", (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId },
        { $addToSet: { upVoters: req.user._id },
          $pull: { downVoters: req.user._id } },
        { new: true },
        (err, upVotedIssue) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(upVotedIssue)
        }
    )
})

//ADD DOWNVOTE
voteRouter.put("/down/add/:issueId", (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId },
        { $addToSet: { downVoters: req.user._id },
          $pull: { upVoters: req.user._id } },
        { new: true },
        (err, downVotedIssue) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(downVotedIssue)
        }
    )
})

//DELETE UPVOTE
voteRouter.put("/up/delete/:issueId", (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId },
        { $pull: { upVoters: req.user._id } },
        { new: true },
        (err, issue) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(issue)
        }
    )
})

//DELETE DOWNVOTE
voteRouter.put("/down/delete/:issueId", (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId },
        { $pull: { downVoters: req.user._id } },
        { new: true },
        (err, issue) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(issue)
        }
    )
})

module.exports = voteRouter