import React from "react"

import Pet from './Pet'

function Friend(props) {
    return (
        <div className="friend">
            <div><h2 className="title">Name: </h2><p className="value">{props.name}</p></div>
            <div><h2 className="title">Age: </h2><p className="value">{props.age}</p></div>
            <h2>Pets:</h2>
            <ul className="pets">
                {props.pets.map(pet => <Pet name={pet.name} breed={pet.breed}/>)}
            </ul>
        </div>
    )
}

export default Friend