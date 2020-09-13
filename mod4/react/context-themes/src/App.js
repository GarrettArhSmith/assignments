import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'

import { ThemeConsumer } from './components/ThemeContext'



class App extends Component {
  render() {
    return (
      <>
        <Header />
        <ThemeConsumer>
          {context => (
            <main className={context.theme}>
              <h1 className={context.theme}>Hello {context.theme[0].toUpperCase() + context.theme.slice(1)}!</h1>
              <button onClick={context.toggleTheme} className={context.theme}>Toggle Theme</button>
            </main>
          )}
        </ThemeConsumer>
        <Footer />
      </>
    );
  }
}

export default App;