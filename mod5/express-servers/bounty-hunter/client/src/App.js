import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Bounty from './components/Bounty'
import BountyForm from './components/BountyForm';

function App(props) {
  const [bounties, setBounties] = useState([])

  function getBounties() {
    axios.get("/bounties")
      .then(res => setBounties(res.data))
      .catch(err => console.log(err))
  }

  function addBounty(newBounty) {
    axios.post("/bounties", newBounty)
        .then(res => setBounties(prevBounties => ([...prevBounties, res.data])))
        .catch(err => console.log(err))
  }

  function deleteBounty(bountyId) {
    axios.delete(`/bounties/${bountyId}`)
      .then(res => {
        setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  function editBounty(updates, bountyId) {    
    axios.put(`/bounties/${bountyId}`, updates)
      .then(res => setBounties(prevBounties => (
          prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data)
        )))
      .catch(err => {
        console.log(updates, bountyId)
        console.log(err)
      })
  }

  useEffect(() => {
    getBounties()
  }, [])

  console.log(bounties)
  return (
    <div>
      <BountyForm submit={addBounty} />
      {bounties?.map(bounty => 
          <Bounty 
            key={bounty._id} 
            deleteBounty={deleteBounty}
            editBounty={editBounty}
            {...bounty} 
          />
      )}
    </div>
  );
}

export default App;