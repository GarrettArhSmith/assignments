import React, { useContext } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import { Context } from '../../../Context'
import './Focused.css'
import Save from './Save/Save'
import Today from './Today/Today'
import Hourly from './Hourly/Hourly'
import FiveDay from './FiveDay/FiveDay'
import TenDay from './TenDay/TenDay'


function Focused(props) {
    const {weatherData, unit, convertToF, loading, searched} = useContext(Context)
    
    const temps = {
        temp: unit === "c" ? weatherData.temp : convertToF(weatherData.temp),
        appTemp: unit === "c" ? weatherData.app_temp : convertToF(weatherData.app_temp)
    }
    
    return (
        !searched ? <h1>No Data</h1> :
        loading ? <h1 className="loading">Loading...</h1> :
        <div className="focused">
            <span>
                <h2 style={{display:"inline"}}>{weatherData.city_name}, {weatherData.state_code}</h2>
                <Save />
                <p>as of {weatherData.ob_time}</p>
                <h1 className="temp">{temps.temp}°</h1>
                <h4 style={{color:"gray"}}>Feels like <span className="appTemp">{temps.appTemp}°</span></h4>
                <h3>{weatherData.weather?.description}</h3>
            </span>
            <img 
                src={`https://www.weatherbit.io/static/img/icons/${weatherData?.weather?.icon}.png`} 
                alt={weatherData.weather?.description}
            />
            <ul>
                <Link to="/"><li>Today</li></Link>
                <Link to="hourly"><li>Hourly</li></Link>
                <Link to="5day"><li>5 Day</li></Link>
                <Link to="10day"><li>10 Day</li></Link>
            </ul>


            <Switch>
                <Route exact path="/"><Today /></Route>
                <Route path="/hourly"><Hourly /></Route>
                <Route path="/5day"><FiveDay /></Route>
                <Route path="/10day"><TenDay /></Route>
            </Switch>
        </div>
    );
}

export default Focused;