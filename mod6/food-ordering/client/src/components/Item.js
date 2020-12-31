import React from 'react';

function Item(props) {
    return (
        <div className="item">
            <h4>{props.name} - ${props.price}</h4>
            <p>{props.description}</p>
        </div>
    );
}

export default Item;