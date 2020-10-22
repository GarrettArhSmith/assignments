import React, { useContext } from 'react';
import { Context } from './Context'

function Circle(props) {
    const {chance, totals, setTotals} = useContext(Context) 

    const color = Math.random() >= chance ? "lightcoral" : "lightblue"

    if(color === "lightcoral") setTotals(prevTotals => ({...prevTotals, red: prevTotals.red + 1}))
    if(color === "lightblue") setTotals(prevTotals => ({...prevTotals, blue: prevTotals.blue + 1}))

    console.log(totals.red)

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