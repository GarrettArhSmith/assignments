import React, { useState, useContext } from 'react';
import { Context } from '../../../Context'
import './Search.css';
import { BiSearch } from 'react-icons/bi'

const axios = require('axios').default;


function Search(props) {
    const context = useContext(Context)

    const [input, setInput] = useState("")

    function handleChange(e) {
        const { value } = e.target
        setInput(value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        context.setLoading(true)
        if(/[a-zA-Z]/.test(input)) {
            axios.get(`https://api.weatherbit.io/v2.0/current?city=
            ${input.replace(" ", "")}&key=f65362e501524bfa8919d00596e2674f`)
                .then(response => context.handleSubmit(response.data.data[0]))
                .catch(error => console.log(error))
        } else if (/[0-9]/.test(input)) {
            axios.get(`https://api.weatherbit.io/v2.0/current?postal_code=
            ${input}&key=f65362e501524bfa8919d00596e2674f`)
                .then(response => context.handleSubmit(response.data.data[0]))
                .catch(error => console.log(error))
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="search" 
                name="location" 
                onChange={handleChange} 
                value={input}
            />
            <button><BiSearch /></button>
        </form>
    );
}

export default Search;