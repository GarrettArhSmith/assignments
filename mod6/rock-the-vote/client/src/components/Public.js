import React, { useContext } from 'react';
import { UserContext } from '../context/UserProvider'
import IssueForm from './IssueForm'
import Issue from './Issue'

function Public(props) {
    const { user: { username }, issues } = useContext(UserContext)
    console.log(issues)
    
    return (
        <div>
            <h1>Public</h1>
            <h3>Welcome, {username}!</h3>
            <IssueForm />
            {issues.reverse().map(issue => <Issue key={issue._id} {...issue} />)}
        </div>
    );
}

export default Public;