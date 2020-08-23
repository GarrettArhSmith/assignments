import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Hit from './Hit'


class App extends Component {
  state = {
    loading: true,
    hits: []
  }

  componentDidMount() {
    axios.get("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
      .then(response => this.setState({loading: false, hits: response.data}))
      .catch(error => console.log(error))
  }

  render() {
    const content = (
      this.state.loading ?
      <h1>Loading...</h1> : 
      this.state.hits.map(hit => <Hit name={hit.name} img={hit.image} />)
    )
    return (
      <div className="app">
        <header>
          <img src="https://bit.ly/3j7TJiW"/>
          <h1>Don Corleone's Hit List</h1>
        </header>
        <main>
          {content}
        </main>
      </div>
    );
  }
}

export default App;