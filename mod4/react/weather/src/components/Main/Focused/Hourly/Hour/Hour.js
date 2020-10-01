import React, { useContext } from 'react';
import './Hour.css'
import { Context } from '../../../../../Context'

function Hour(props) {
    const {unit, convertToF} = useContext(Context)

    const mTime = props.data.timestamp_local.slice(11, 13)
    function convertTime(time) {
        const sTime = mTime > 12 ? `${mTime - 12}PM` : `${mTime}AM`
        
        if(sTime[0] === "0") {
            if(sTime.slice(1) === "0AM") return "12AM"
            return sTime.slice(1)
        }
        return sTime
    }
    
    return (
        <li className="hour">
            <p className="time">{convertTime(mTime)}</p>
            <h2 className="temp">
                {unit === "c" ? props.data.temp : convertToF(props.data.temp)}°
            </h2>
            <span>
                <img src={`https://www.weatherbit.io/static/img/icons/${props.data?.weather?.icon}.png`} alt="weather"/>
                <p>{props.data.weather.description}</p>
            </span>
        </li>
    );
}

export default Hour;