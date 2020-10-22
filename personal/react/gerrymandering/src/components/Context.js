import React, { useState } from 'react';
const Context = React.createContext()

function ContextProvider(props) {
    const [dimensions, setDimensions] = useState("2")
    const [totals, setTotals] = useState({
        blue: 0,
        red: 0
    })

    const rand = Math.random()
    const [chance, setChance] = useState(rand <= 0.1 ? 0.1 : rand)

    return (
        <Context.Provider value={{
                dimensions, setDimensions, 
                chance, setChance,
                totals, setTotals
            }}>
            {props.children}
        </Context.Provider>
    );
}

export { ContextProvider, Context };