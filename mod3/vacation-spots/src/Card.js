import React from 'react'

function Card(props) {
    return (
        <div className="card">
            <h3>{props.place} - {props.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</h3>
            <p>{props.timeToGo} is the best time to go.</p>
        </div>
    )
}

export default Card