import React, { useContext } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Context } from '../../../Context'
import styled from 'styled-components'
import './Focused.css'
import Save from './Save/Save'
import Hourly from './Hourly/Hourly'
import FiveDay from './FiveDay/FiveDay'
import TenDay from './TenDay/TenDay'

const FocusedContent = styled.div`
    margin-top: 1rem;
    @media(min-width: 480px) {
    }
    @media(min-width: 768px) {
        margin-top: 0;
        padding-right: 3%;
    }
    @media(min-width: 1024px) {
        padding-right: 5rem;
    }
    @media(min-width: 1200px) {
        padding-right: 10rem;
    }
`

const Placeholder = styled.h1`
    margin-top: 2rem;
    @media(min-width: 768px) {
        margin-top: 0;
    }
`

function Focused(props) {
    const {weatherData, unit, convertToF, loading, searched} = useContext(Context)
    const { place_name, current } = weatherData
    
    const temps = {
        temp: unit === "c" ? Math.round(10*current?.temp)/10 : convertToF(current?.temp),
        feels_like: unit === "c" ? Math.round(10*current?.feels_like)/10 : convertToF(current?.feels_like)
    }
    
    return (
        !searched ? <Placeholder>No Data</Placeholder> :
        loading ? <Placeholder>Loading...</Placeholder> :
        <FocusedContent>
            <span>
                <h2 style={{display:"inline"}}>{place_name}</h2>
                <Save />
                <h1 className="temp">{temps.temp}°</h1>
                <h4 style={{color:"gray"}}>Feels like <span className="appTemp">{temps.feels_like}°</span></h4>
                <h3 className="weatherDesc">{current?.weather[0].description}</h3>
            </span>
            <img 
                className="focusedImg"
                src={`http://openweathermap.org/img/wn/${current?.weather[0].icon}@2x.png`} 
            />
            <ul className="tabs">
                <Link exact to="/"><li>Hourly</li></Link>
                <Link to="5day"><li>5 Day</li></Link>
                <Link to="10day"><li>10 Day</li></Link>
            </ul>


            <Switch>
                <Route exact path="/"><Hourly /></Route>
                <Route path="/5day"><FiveDay /></Route>
                <Route path="/10day"><TenDay /></Route>
            </Switch>
        </FocusedContent>
    );
}

export default Focused;