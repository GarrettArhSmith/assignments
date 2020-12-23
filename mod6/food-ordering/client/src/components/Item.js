import React from 'react';

function Item(props) {
    return (
        <div>
            <h3>{props.name} - ${props.price}</h3>
            <p>{props.description}</p>
        </div>
    );
}

export default Item;