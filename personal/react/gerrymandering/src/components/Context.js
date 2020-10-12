import React, { useState } from 'react';
const Context = React.createContext()

function ContextProvider(props) {
    const [dimensions, setDimensions] = useState("2")

    return (
        <Context.Provider value={{dimensions, setDimensions}}>
            {props.children}
        </Context.Provider>
    );
}

export { ContextProvider, Context };