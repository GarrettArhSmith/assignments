import React, { useState, useContext, useRef, useEffect } from 'react';
import { Context } from '../../../Context'
import './Search.css';
import { BiSearch } from 'react-icons/bi'
import styled from 'styled-components'
require('dotenv').config()

const SearchForm = styled.form`
    width: 100%;
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    display: grid;
    grid-template-columns: 1fr auto;
    margin-top: 1rem;
    align-self: flex-end;
    @media(min-width: 480px) {
    }
    @media(min-width: 768px) {
        width: 50vw;
        margin: 0 1rem;
        grid-column: 2 / 3;
        grid-row: 1 / 2;
        margin-top: 1rem;
    }
    @media(min-width: 1024px) {
    }
    @media(min-width: 1200px) {
    }
`

const SearchBar = styled.input`
    border: none;
    background-color: transparent;
    font-size: 1.5em;
    color: gray;
    padding: 0 10px;
    &:focus {
        outline: none;
    }
`

const OptionsContainer = styled.div`
    position: absolute;
    top: 20vh;
    width: calc(100% - 2rem);
    display: flex;
    flex-direction: column;
    font-size: 1em;
    border-radius: 5px;
    overflow: hidden;
    filter: drop-shadow(0 1px 3px rgba(0,0,0,0.1));
    @media(min-width: 768px) {
        width: 50vw;
        top: 55px;
    }
`

const Option = styled.div`
    background: white;
    transition: 0.1s ease;
    padding: 0.2rem 0.5rem;
    border-top: 1px solid #f5f5f5;
    &:nth-child(even) {
        background: #fefefe;
    }
    &:hover {
        background: #f2f2f2;
        cursor: pointer;
    }
`


const axios = require('axios').default;
const weatherKey = process.env.REACT_APP_WEATHER_API_KEY
const geoCodeKey = process.env.REACT_APP_GEOCODE_API_KEY

function Search(props) {
    const context = useContext(Context)
    const wrapperRef = useRef(null)

    const [input, setInput] = useState("")

    const [select, setSelect] = useState("")
    const [options, setOptions] = useState([])
    const [displayOptions, setDisplayOptions] = useState(false)

    function handleChange(e) {
        const { value } = e.target
        if(e.target.name === "search") {
            setInput(value)
            axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${input}.json?access_token=${geoCodeKey}`)
                .then(res => {
                    setOptions(res.data.features)
                    setSelect(res.data.features[0])
                })
                .catch(err => console.log(err))
        }
        if(e.target.name === "options") {
            setSelect(value)
        }
    }

    function handleSelectOption(value) {
        setSelect(value)
        setInput(value.place_name)
        handleSubmit(null, value)
    }

    function handleSubmit(e, value) {
        e && e.preventDefault()
        setInput(value ? value.place_name : select.place_name)
        setDisplayOptions(false)
        context.setLoading(true)
        axios.get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${value ? value.center[1] : select.center[1]}&lon=${value ? value.center[0] : select.center[0]}&units=metric&appid=${weatherKey}`)
                .then(res => {
                    context.handleSubmit({...res.data, place_name: value ? value.place_name : select.place_name})
                })
                .catch(error => console.log(error))
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOff)

        return () => {
            document.removeEventListener('mousedown', handleClickOff)
        }
    }, [])

    function handleClickOff(e) {
        const { current: wrap } = wrapperRef
        if(wrap && !wrap.contains(e.target)) {
            setDisplayOptions(false)
        }
    }

    return (
        <SearchForm onSubmit={handleSubmit} ref={wrapperRef}>
            <SearchBar 
                type="search" 
                name="search" 
                onChange={handleChange} 
                value={input}
                autoComplete="off"
                onClick={() => setDisplayOptions(true)}
            />
            <button><BiSearch /></button>
            {displayOptions && <OptionsContainer>
                {options.map(option => (
                    <Option
                        key={option.id}
                        onClick={() => handleSelectOption(option)}
                    >
                        {option.place_name}
                    </Option>
                ))}
            </OptionsContainer>}
        </SearchForm>
    );
}

export default Search;