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

    function getSaved() {
        const getSaved = JSON.parse(localStorage.getItem('saved'))
        setSaved(getSaved)
    }

    function saveCity(data) {
        const getSaved = JSON.parse(localStorage.getItem('saved'))
        localStorage.setItem('saved', JSON.stringify([...getSaved ? getSaved : [], data]))
        const newSaved = JSON.parse(localStorage.getItem('saved')) 
        setSaved(newSaved ? newSaved : [])
    }
    function delCity(data) {
        const getSaved = JSON.parse(localStorage.getItem('saved'))
        const filteredSaved = getSaved.filter(place => place.place_name !== data.place_name)
        localStorage.setItem('saved', JSON.stringify(filteredSaved))
        const newSaved = JSON.parse(localStorage.getItem('saved'))
        setSaved(newSaved ? newSaved : [])
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
            delCity,
            getSaved
        }}>
            {props.children}
        </Context.Provider>
    );
}

export {ContextProvider, Context};