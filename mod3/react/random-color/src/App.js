import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    loading: true,
    color: ""
  }

  newColor = () => {
    axios.get(`http://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(response => this.setState({loading: false, color: `#${response.data.new_color}`}))
      .catch(error => console.log(error))
  }
  
  componentDidMount() {
    this.newColor()
  }

  render() {
    return (
      <div className="box" onClick={this.newColor} style={{backgroundColor: this.state.color}}>
        <h1>{this.state.loading && "..."}</h1>
      </div>
    );
  }
}

export default App;