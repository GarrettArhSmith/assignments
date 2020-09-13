import React from 'react';
import './App.css';

import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* Main content will be shown with router here */}
      <Footer />
    </div>
  );
}

export default App;
