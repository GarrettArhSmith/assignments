import React, { useState } from 'react';

function AddBountyForm(props) {
    const { fName, lName, living, bountyAmount, type, _id } = props
    console.log(`living: ${living}`)
    const initInputs = {
        fName: fName || "",
        lName: lName || "",
        living: living === undefined && true,
        bountyAmount: bountyAmount || 0,
        type: type || ""
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { type, name, value, checked } = e.target
        if(type === "checkbox") setInputs(prevInputs => ({...prevInputs, [name]: checked}))
        else setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }


    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, _id)
        _id && props.toggleEdit()
        setInputs(initInputs)
    }
console.log(inputs)
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="fName" value={inputs.fName} onChange={handleChange} />
            <input type="text" name="lName" value={inputs.lName} onChange={handleChange} />
            <input type="checkbox" name="living" checked={inputs.living} onChange={handleChange} />
            <input type="number" name="bountyAmount" value={inputs.bountyAmount} onChange={handleChange} />
            <select name="type" value={inputs.type} onChange={handleChange}>
                <option> - Choose Side - </option>
                <option value="Jedi">Jedi</option>
                <option value="Sith">Sith</option>
            </select>
            <button>Submit</button>
        </form>
    );
}

export default AddBountyForm; 