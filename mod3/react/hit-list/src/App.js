import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Hit from './Hit'


class App extends Component {
  state = {
    hits: []
  }

  componentDidMount() {
    axios.get("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
      .then(response => this.setState({hits: response.data}))
  }

  render() {
    return (
      <div className="app">
        <header>
          <img src="https://bit.ly/3j7TJiW"/>
          <h1>Don Corleone's Hit List</h1>
        </header>
        <main>
          {this.state.hits.map(hit => <Hit name={hit.name} img={hit.image} />)}
        </main>
      </div>
    );
  }
}

export default App;