import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserProvider'
import IssueForm from './IssueForm'
import Issue from './Issue'

function Public(props) {
    const { user: { username }, allIssues, getAllIssues } = useContext(UserContext)

    useEffect (() => {
        getAllIssues()
        console.log("USE EFFECT RAN!")
    }, [])

    return (
        <div>
            <h1>Public</h1>
            <h3>Welcome, {username}!</h3>
            <IssueForm />
            <div className="issueList">
                {[...allIssues].reverse().map(issue => <Issue key={issue._id} {...issue} />)}
            </div>
        </div>
    );
}

export default Public;