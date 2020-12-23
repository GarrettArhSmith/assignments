import React from 'react';
import { Link } from 'react-router-dom'

function Restaurant(props) {
    const { name, description, _id } = props

    return (
        <Link to={`/restaurant/${_id}`}>
            <div className="restaurant">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </Link>
    );
}

export default Restaurant;