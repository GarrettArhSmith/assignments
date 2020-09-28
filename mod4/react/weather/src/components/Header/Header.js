import React from 'react';
import './Header.css'
import { TiWeatherPartlySunny } from 'react-icons/ti'

import Search from './Search/Search'
import UnitChanger from './UnitChanger/UnitChanger';

function Header(props) {
    return (
        <header>
            <h1 className="logo">
                <TiWeatherPartlySunny 
                    style={{color:"orange", fontSize:"1.2em", position:"relative", top:7, marginRight:5}} 
                />
                Weather
            </h1>
            <Search />
            <UnitChanger />
        </header>
    );
}

export default Header;