import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import axios from 'axios'
import Issue from './Issue';
import CommentForm from './CommentForm'

const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function IssuePage(props) {
    const { issueId } = useParams()
    const [issue, setIssue] = useState(false)

    function getOneIssue() {
        userAxios.get(`/api/issue/${issueId}`)
            .then(res => setIssue(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }
    
    useEffect(() => {
        getOneIssue()
    }, [])

    return (
        <div>
            {issue && <Issue {...issue} />}
            <CommentForm />
        </div>
    );
}

export default IssuePage;