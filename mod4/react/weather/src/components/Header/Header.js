import React from 'react';
import { TiWeatherPartlySunny } from 'react-icons/ti'
import styled from 'styled-components'

import Search from './Search/Search'
import UnitChanger from './UnitChanger/UnitChanger';

const AppBar = styled.header`
    height: 20vh;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto 39px;
    place-items: center;
    width: 100vw;
    padding: 0 1rem;
    @media(min-width: 480px) {
    }
    @media(min-width: 768px) {
        height: 10vh;
        grid-template-columns: 1fr 2fr 1fr;
    }
    @media(min-width: 1024px) {
    }
    @media(min-width: 1200px) {
    }
`

const Logo = styled.h1`
    color: royalblue;
    font-family: 'Rubik', sans-serif;
    white-space: nowrap;
`

function Header(props) {
    return (
        <AppBar>
            <Logo>
                <TiWeatherPartlySunny 
                    style={{color:"orange", fontSize:"1.2em", position:"relative", top:7, marginRight:5}} 
                />
                Weather
            </Logo>
            <Search />
            <UnitChanger />
        </AppBar>
    );
}

export default Header;