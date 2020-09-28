import React, { useContext } from 'react';
import './Save.css'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Context } from '../../../../Context'

function Save(props) {
    const {saveCity, delCity, weatherData, saved} = useContext(Context)
    
    function isSaved() {
        return saved.find(city => (
            city.city_name === weatherData.city_name &&
            city.state_code === weatherData.state_code
        )) !== undefined
    }

    return (
        isSaved() ?
        <MdFavorite className="save" onClick={() => delCity(weatherData)} /> :
        <MdFavoriteBorder className="save" onClick={() => saveCity(weatherData)} />
    )
}

export default Save;