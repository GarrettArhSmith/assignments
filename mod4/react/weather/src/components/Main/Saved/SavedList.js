import React, { useContext } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import './SavedList.css'
import { Context } from '../../../Context'
import styled from 'styled-components'

import Saved from './Saved';

const Container = styled.div`
    background-color: #fefefe;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    padding: 0.5rem;
    @media(min-width: 768px) {
        margin-right: 2rem;
    }
`

const Title = styled.h3`
    margin: 0 0 0.5rem 0;
    white-space: nowrap;
`

const SaveList = styled.ul`
    padding: 0.5rem;
    display: flex;
    align-items: center;
    list-style-type: none;
    ${'' /* grid-gap: 1rem; */}
    width: calc(100vw - 4rem);
    max-height: 20vh;
    overflow: scroll;
    @media(min-width: 480px) {
    }
    @media(min-width: 768px) {
        height: 200px;
        max-width: 200px;
        ${'' /* border-right: 1px solid #eee; */}
        flex-direction: column;
    }
    @media(min-width: 1024px) {
    }
    @media(min-width: 1200px) {
    }
`

function SavedList(props) {
    const {saved} = useContext(Context)

    return (
        <Container>
            <Title>Saved Locations ({saved.length})</Title>
            <SaveList>
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