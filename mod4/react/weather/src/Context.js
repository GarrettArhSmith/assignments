import React, { useState } from 'react';
const Context = React.createContext()


function ContextProvider(props) {
    const [weatherData, setWeatherData] = useState({})
    const [loading, setLoading] = useState(false)
    const [searched, setSearched] = useState(false)
    const [unit, setUnit] = useState("f")
    const [saved, setSaved] = useState([])

    function handleSubmit(response) {
        !searched && setSearched(true)
        setWeatherData(response)
        setLoading(false)
    }

    function changeUnit(val) {
        setUnit(val)
    }

    function convertToF(temp) {
        return Math.round((Number(temp) * (9/5) + 32) * 10) / 10
    }

    function saveCity(data) {
        setSaved(prevSaved => [...prevSaved, data])
    }
    function delCity(data) {
        setSaved(prevSaved => prevSaved.filter(place => (
            place.place_name !== data.place_name
        )))
    }

    return (
        <Context.Provider value={{
            weatherData,
            handleSubmit,
            changeUnit,
            unit,
            convertToF,
            loading,
            setLoading,
            searched,
            saved,
            saveCity,
            delCity
        }}>
            {props.children}
        </Context.Provider>
    );
}

export {ContextProvider, Context};