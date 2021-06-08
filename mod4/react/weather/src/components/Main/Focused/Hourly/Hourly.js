import React, { useContext } from 'react';
import './Hourly.css'
import { Context } from '../../../../Context'
import styled from 'styled-components'
import { BiWind } from 'react-icons/bi'
import { GiHeavyRain } from 'react-icons/gi'

const Hour = styled.li`
    display: grid;
    grid-template-columns: 20% 28% 9% 23% 20%;
    ${'' /* justify-content: space-between; */}
    padding: 0.5rem 1rem;
    font-weight: 400 !important;
    border-radius: 5px;
    place-items: center;
    white-space: nowrap;
    &:nth-child(odd) {
        background: #eee;
    }
    @media(min-width: 480px) {
        grid-template-columns: 15% 25% 25% 20% 15%;
    }
    @media(min-width: 768px) {
        grid-template-columns: 15% 25% 25% 20% 15%;
    }
    @media(min-width: 1024px) {
    }
    @media(min-width: 1200px) {
    }
`

const Temp = styled.p`
    font-weight: bold;
    font-size: 1.3em;
`

const Time = styled.p`
    justify-self: left;
`

const Weather = styled.div`
    display: flex;
    align-items: center;
    text-transform: capitalize;
    @media(min-width: 480px) {
    }
    @media(min-width: 768px) {
    }
    @media(min-width: 1024px) {
        justify-self: left;
    }
    @media(min-width: 1200px) {
    }
`
const Desc = styled.p`
    display: none;
    @media(min-width: 480px) {
    }
    @media(min-width: 768px) {
    }
    @media(min-width: 1024px) {
        display: block;
    }
    @media(min-width: 1200px) {
    }
`

const HourlyImg = styled.img`
    width: 30px;
    height: 30px;
`

const Rain = styled.p`
    ${'' /* justify-self: right; */}
`

const Wind = styled.p`
    justify-self: right;
`

function Hourly(props) {
    const { weatherData, convertToF, unit } = useContext(Context)

    const formatTime  = timeStamp => {
        const time = new Date(timeStamp * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        if(time[0] === "0") return time.slice(1)
        else return time
    }

    return (
        <div className="tabContent">
            <h1>Hourly <span className="secondary">(next 48 hours)</span></h1>
            <ul className="hours">
                {weatherData.hourly?.map(hour => {
                    const { id, temp, weather, wind_speed, pop } = hour
                    const hourlyTemp = unit === "c" ? Math.round(10*temp)/10 : convertToF(hour?.temp)
                    return (<Hour key={id}>
                        <Time>{formatTime(hour.dt)}</Time>
                        <Temp>{`${hourlyTemp}°`}</Temp>
                        <Weather>
                            <HourlyImg 
                                src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                                style={{marginRight: 5}}
                            />
                            <Desc>{weather[0].description}</Desc>
                        </Weather>
                        <Rain>
                            <GiHeavyRain style={{color: "royalblue", marginRight: 5}} />
                            {`${Math.round(10*(pop*100)/10)}%`}
                        </Rain>
                        <Wind>
                            <BiWind style={{color: "royalblue", marginRight: 5}} />
                            {`${Math.round(wind_speed)}MPH`}
                        </Wind>
                    </Hour>)
                })}
            </ul>
        </div>
    );
}

export default Hourly;