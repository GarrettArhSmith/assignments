import React, { useState } from 'react';
import BountyForm from './BountyForm'

function Bounty(props) {
    const { editBounty, deleteBounty, fName, lName, living, bountyAmount, type, _id } = props
    const [isEditing, setIsEditing] = useState(false)

    function toggleEdit() {
        setIsEditing(prevIsEditing => !prevIsEditing)
    }

    return (
        isEditing ?
            <BountyForm 
                submit={editBounty}
                fName={fName}
                lName={lName}
                living={living}
                bountyAmount={bountyAmount}
                type={type}
                _id={_id}
                toggleEdit={toggleEdit}
            />
        :
        <div>
            <h1>{fName} {lName} - ${bountyAmount}</h1>
            <p>Type: {type}</p>
            {living ? <p style={{color: "green"}}>Alive</p> : <p style={{color: "red"}}>Dead</p>}
            <button onClick={() => deleteBounty(_id)}>Delete</button>
            <button onClick={toggleEdit}>Edit</button>
        </div>
    );
}

export default Bounty;