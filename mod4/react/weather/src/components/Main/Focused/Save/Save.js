import React, { useContext, useEffect } from 'react';
import './Save.css'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Context } from '../../../../Context'
// import styled from 'styled-components'

function Save(props) {
    const {saveCity, delCity, weatherData, saved, getSaved} = useContext(Context)
    
    function isSaved() {
        return saved?.find(place => (
            place.place_name === weatherData.place_name
        )) !== undefined
    }

    useEffect(() => {
        getSaved()
    }, [])

    return (
        isSaved() ?
        <MdFavorite className="save" onClick={() => delCity(weatherData)} /> :
        <MdFavoriteBorder className="save" onClick={() => saveCity(weatherData)} />
    )
}

export default Save;