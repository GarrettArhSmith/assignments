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
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto auto auto;
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

const Header = styled.span`
    grid-column: 1 / 3;
`

const Title = styled.h2`
    display: inline;
`

const Info = styled.span`
    grid-row: 2 / 3;
`

const Temp = styled.h1`
    color: royalblue;
    font-size: 4em;
    @media(min-width: 768px) {
        font-size: 5em;
    }
`

const Icon = styled.img`
    grid-row: 2 / 3;
`

const Tabs = styled.ul`
    list-style-type: none;
    padding-left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-column: 1 / 3;
    grid-row: 3 / 4;
`

const SLink = styled(Link)`
    text-decoration: none;
    color: #404040;
    font-weight: bold;
    transition: 0.2s ease;
    &:hover {
        transform: scale(1.1);
    }
`

const Placeholder = styled.h1`
    width: 50%;
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
            <Header>
                <Title>{place_name}</Title>
                <Save />
            </Header>
            <Info>
                <Temp>{temps.temp}°</Temp>
                <h4 style={{color:"gray"}}>Feels like <span className="appTemp">{temps.feels_like}°</span></h4>
                <h3 className="weatherDesc">{current?.weather[0].description}</h3>
            </Info>
            <Icon 
                className="focusedImg"
                src={`http://openweathermap.org/img/wn/${current?.weather[0].icon}@2x.png`} 
            />
            <Tabs>
                <SLink exact to="/"><li>Hourly</li></SLink>
                {/* <SLink to="5day"><li>5 Day</li></SLink>
                <SLink to="10day"><li>10 Day</li></SLink> */}
            </Tabs>


            <Switch>
                <Route exact path="/"><Hourly /></Route>
                <Route path="/5day"><FiveDay /></Route>
                <Route path="/10day"><TenDay /></Route>
            </Switch>
        </FocusedContent>
    );
}

export default Focused;