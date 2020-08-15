import React from 'react'

function Card(props) {
    const bgColor = {
        backgroundColor: ""
    }
    switch (props.timeToGo) {
        case "Spring": bgColor.backgroundColor = "#a0dbac"
            break;
        case "Winter": bgColor.backgroundColor = "#9ecce8"
            break;
        case "Fall": bgColor.backgroundColor = "#e89e9e"
            break;
        case "Summer": bgColor.backgroundColor = "#e8c29e"
            break;
    }
    return (
        <div className="card" style={bgColor}>
            <h3>{props.place} - {"$".repeat(props.price / 500) + props.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</h3>
            <p>{props.timeToGo} is the best time to go.</p>
        </div>
    )
}

export default Card