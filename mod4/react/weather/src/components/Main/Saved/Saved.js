import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../Context'
import './Saved.css'
import styled from 'styled-components'
const axios = require('axios').default;


const SavedPlace = styled.li`
    margin: 0.5rem;
    padding: 0.5rem;
    min-height: 7rem;
    max-height: 7rem;
    width: 10rem;
    border-radius: 5px;
    box-shadow: 0 0 8px rgba(0,0,0,0.2);
    background-color: white;
    transition: 0.1s ease;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    &:hover {
        background-color: #4c8ecc;
        cursor: pointer;
        color: whitesmoke;
        transform: scale(1.03);
    }
    @media(min-width: 768px) {
        min-height: 7rem;
        max-height: 15rem;
        width: 100%;
    }
`

const Name = styled.h2`
    font-size: 1em;
    grid-column: 1 / 3;
    @media(min-width: 768px) {
        font-size: 1.1em;
    }
    @media(min-width: 1024px) {
        font-size: 1.2em;
    }
    @media(min-width: 1200px) {
        font-size: 1.3em;
    }
`
const Temp = styled.h1`
    color: royalblue;
    font-size: 1.5em;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    @media(min-width: 768px) {
        font-size: 1.8em;
    }
    @media(min-width: 1024px) {
        font-size: 2.1em;
    }
    @media(min-width: 1200px) {
        font-size: 2.4em;
    }
`
const Icon = styled.img`
    width: 50px;
    @media(min-width: 768px) {
        width: 65px;
    }
    @media(min-width: 1024px) {
        width: 80px;
    }
    @media(min-width: 1200px) {
        width: 95px;
    }
`
const Weather = styled.span`
    grid-column: 2 / 3;
    grid-row: 2 / 3;
`


const weatherKey = process.env.REACT_APP_WEATHER_API_KEY

function Saved(props) {
    const {weatherData, unit, convertToF} = useContext(Context)
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&units=metric&appid=${weatherKey}`)
            .then(response => setData(response.data))
            .catch(error => console.log(error))
    }, [weatherData])


    return (
        <SavedPlace>
            <Name>{props.placeName.substring(0, 26)}{props.placeName.length > 27 ? "..." : ""}</Name>
            <Temp className="temp">{unit === "c" ? Math.round(10*data?.current?.temp)/10 : convertToF(data?.current?.temp)}°</Temp>
            <Weather>
                <Icon 
                    src={`http://openweathermap.org/img/wn/${data?.current?.weather[0].icon}@2x.png`} 
                    alt="weather"
                />
            </Weather>
        </SavedPlace>
    );
}

export default Saved;