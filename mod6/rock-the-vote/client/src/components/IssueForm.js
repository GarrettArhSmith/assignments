import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserProvider'

function IssueForm(props) {
    const { addIssue } = useContext(UserContext)

    const initInputs = {
        title: "",
        description: ""
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        addIssue(inputs)
    }

    return (
        <form type="submit" onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input 
                type="text"
                name="title"
                value={inputs.title}
                onChange={handleChange}
            />
            <label htmlFor="description">Description</label>
            <input 
                type="text"
                name="description"
                value={inputs.description}
                onChange={handleChange}
            />
            <button>Create Issue</button>
        </form>
    );
}

export default IssueForm;