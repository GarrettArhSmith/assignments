import React from 'react';
import './App.css';
import vacationSpots from './vacationSpots';
import Card from './Card'

function App() {
  return (
    <div>
      {vacationSpots.map(spot => <Card place={spot.place} price={spot.price} timeToGo={spot.timeToGo}/>)}
    </div>
  );
}

export default App;
