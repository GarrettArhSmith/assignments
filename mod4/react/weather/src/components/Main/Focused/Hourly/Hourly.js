import React, { useEffect, useState, useContext } from 'react';
import './Hourly.css'
import Hour from './Hour/Hour'
import { Context } from '../../../../Context'
const axios = require('axios').default;

function Hourly(props) {
    const {weatherData} = useContext(Context)
    const [data, setData] = useState([])

    useEffect(() => {
        console.log(`https://api.weatherbit.io/v2.0/forecast/hourly?city=${weatherData?.city_name},${weatherData?.state_code}&key=f65362e501524bfa8919d00596e2674f&hours=48`)
        axios.get(`https://api.weatherbit.io/v2.0/forecast/hourly?city=${weatherData?.city_name},${weatherData?.state_code}&key=f65362e501524bfa8919d00596e2674f&hours=48`)
            .then(response => setData(response.data.data))
            .catch(error => console.log(error))
    }, [weatherData])

    console.log(data)

    return (
        <div className="tabContent">
            <h1>Hourly <span className="secondary">(next 48 hours)</span></h1>
            <ul className="hours">
                {data?.map((hour, i) => i < 48 && <Hour 
                    key={hour.datetime}
                    data={hour}
                />)}
            </ul>
        </div>
    );
}

export default Hourly;