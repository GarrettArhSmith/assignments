import React from 'react';

function Issue(props) {
    const { title, description, user } = props

    function findUser() {
        // maybe idk?
    }

    return (
        <div>
            <h3>{title}</h3>
            <h5>Posted by {user}</h5>
            <p>{description}</p>
        </div>
    );
}

export default Issue;