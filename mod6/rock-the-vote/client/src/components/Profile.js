import React, { useContext } from 'react';
import { UserContext } from '../context/UserProvider'
import Issue from './Issue'

function Profile(props) {
    const { user: { username }, userIssues } = useContext(UserContext)

    return (
        <div>
            <h1>{username}'s Profile</h1>
            {userIssues.map(issue => <Issue key={issue._id} {...issue} />)}
        </div>
    );
}

export default Profile;