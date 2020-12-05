import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserProvider'
import { ImArrowUp, ImArrowDown } from 'react-icons/im'

import axios from 'axios'
const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function Vote(props) {
    const { vote: { addVote, deleteVote }, user } = useContext(UserContext)
    const { _id, votes:{ upVotes, downVotes } } = props

    const [upVoters, setUpVoters] = useState(upVotes)
    const [downVoters, setDownVoters] = useState(downVotes)

    // function checkVoted(issueId) {
    //     userAxios.get(`/api/vote/${issueId}`)
    //         .then(res => {
    //             setUpVoters(res.data.upVoters)
    //             setDownVoters(res.data.downVoters)
    //         })
    //         .catch(err => console.log(err.response.data.errMsg))
    // }

    function getOneIssue(issueId) {
        userAxios.get(`/api/issue/${issueId}`)
            .then(res => {
                console.log("ran")
                setUpVoters(res.data.upVoters)
                setDownVoters(res.data.downVoters)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function handleVote(e) {
        const selected = e.currentTarget.classList[0]

        if(upVoters?.includes(user._id)) {
            selected === "up" ?
            deleteVote(_id, selected) :
            addVote(_id, selected)
        }
        else if(downVoters?.includes(user._id)) {
            selected === "down" ?
            deleteVote(_id, selected) :
            addVote(_id, selected)
        }
        else {
            addVote(_id, selected)
        }
        getOneIssue(_id)
    }

    return (
        <div className="votes">
            <button 
                className="up vote" 
                onClick={(handleVote)}
                style={{color: upVoters?.includes(user._id) ? "forestgreen" : "gray"}}
            ><ImArrowUp /></button>

            <p>{(upVoters ? upVoters.length : 0) - (downVoters ? downVoters.length : 0)}</p>

            <button 
                className="down vote" 
                onClick={handleVote}
                style={{color: downVoters?.includes(user._id) ? "maroon" : "gray"}}
            ><ImArrowDown /></button>
        </div>
    );
}

export default Vote;