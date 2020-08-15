import React from "react"

function Pet(props) {
    return (
        <li className="pet">
            <h4>{props.name}</h4>
            <p>{props.breed}</p>
        </li>
    )
}

export default Pet