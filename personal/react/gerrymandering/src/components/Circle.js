import React, { useContext } from 'react';
import { Context } from './Context'

function Circle(props) {
    const {chance, totals, setTotals} = useContext(Context) 

    const color = Math.random() >= 0.5 ? "lightcoral" : "lightblue"

    function handleClick(e) {
        console.log(color)
    }

    return (
        <div 
            className="circle" 
            style={{backgroundColor: color}}
            onClick={handleClick}
        >
        </div>
    );
}

export default Circle;