import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../Context'
import './Saved.css'
const axios = require('axios').default;


function Saved(props) {
    const {weatherData, unit, convertToF} = useContext(Context)
    const [data, setData] = useState({})
    console.log(`${props?.cityName.replace(/ /g, "")},${props.stateCode}`)

    useEffect(() => {
        axios.get(`https://api.weatherbit.io/v2.0/current?city=
        ${props.cityName.replace(/ /g, "")},${props.stateCode}&key=f65362e501524bfa8919d00596e2674f`)
            .then(response => setData(response.data.data[0]))
            .catch(error => console.log(error))
    }, [weatherData])

    return (
        <li className="saved">
            <span>
                <h2>{props.cityName}, {props.stateCode}</h2>
                <h1 className="temp">{unit === "c" ? data.temp : convertToF(data.temp)}°</h1>
                <h3>{data.weather?.description}</h3>
            </span>
            <img 
                src={`https://www.weatherbit.io/static/img/icons/${data?.weather?.icon}.png`} 
                alt="weather"
            />
        </li>
    );
}

export default Saved;