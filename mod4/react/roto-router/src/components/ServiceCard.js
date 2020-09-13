import React from 'react';

function ServiceCard(props) {
    return (
        <div className="serviceCard">
            <div className="serviceImg">
                <img src={props.imgUrl} alt={props.title}/>
            </div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <a href="#">EXPLORE THIS SERVICE</a>
        </div>
    );
}

export default ServiceCard;