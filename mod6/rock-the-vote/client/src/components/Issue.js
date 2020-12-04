import React from 'react';
import Votes from './Votes'

function Issue(props) {
    const { title, description, _id, user: { username }, upVoters, downVoters } = props

    return (
        <div className="issue">
            <div className="issueContent">
                <h3>{title}</h3>
                <h5>Posted by {username}</h5>
                <p>{description}</p>
            </div>
            <Votes _id={_id} votes={{upVotes: upVoters, downVotes: downVoters}} />
        </div>
    );
}

export default Issue;