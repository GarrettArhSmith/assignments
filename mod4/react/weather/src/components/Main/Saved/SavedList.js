import React, { useState, useContext } from 'react';
// import { Switch, Route, Link } from 'react-router-dom'
import './SavedList.css'
import { Context } from '../../../Context'
import styled from 'styled-components'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'

import Saved from './Saved';

const Container = styled.div`
    background-color: #fefefe;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    padding: 0.5rem;
    @media(min-width: 768px) {
        margin-right: 2rem;
        ${'' /* width: ${props => props.toggled ? 'auto' : '100px'}; */}
    }
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0.5rem;
`

const Title = styled.h3`
    margin: 0 0 0.5rem 0;
    white-space: nowrap;
    @media(min-width: 768px) {
        ${'' /* display: ${props => props.toggled ? 'auto' : 'none'}; */}
    }
`

const SaveList = styled.ul`
    padding: 0.5rem;
    display: ${props => props.toggled ? 'flex' : 'none'};
    align-items: center;
    list-style-type: none;
    ${'' /* grid-gap: 1rem; */}
    width: calc(100vw - 4rem);
    max-height: 20vh;
    overflow: scroll;
    @media(min-width: 480px) {
    }
    @media(min-width: 768px) {
        max-height: 100%;
        width: 100%;
        ${'' /* border-right: 1px solid #eee; */}
        flex-direction: column;
    }
    @media(min-width: 1024px) {
    }
    @media(min-width: 1200px) {
    }
`

const Icon = styled.span`
    font-size: 1.2em;
    font-weight: bold;
    transition: 0.2s ease;
    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
    @media(min-width: 768px) {
        display: none;
    }
`

function SavedList(props) {
    const {saved} = useContext(Context)
    const [toggled, setToggled] = useState(true)

    return (
        <Container toggled={toggled}>
            <Header>
                <Title toggled={toggled}>Saved Locations ({saved.length})</Title>
                {!toggled && <Icon><AiOutlineDown onClick={() => setToggled(prev => !prev)} /></Icon>}
                {toggled && <Icon><AiOutlineUp onClick={() => setToggled(prev => !prev)} /></Icon>}
            </Header>
            <SaveList toggled={toggled}>
                {saved.map((place, i) => <Saved 
                        key={place.place_name + i} 
                        placeName={place.place_name} 
                        lat={place.lat}
                        lon={place.lon}
                    />
                )}
            </SaveList>
        </Container>
    );
}

export default SavedList;