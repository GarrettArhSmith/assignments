import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <h3>{props.title}</h3>
        </div>
    );
}

export default Card;