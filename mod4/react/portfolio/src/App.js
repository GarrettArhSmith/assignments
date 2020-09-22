import React from 'react';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
