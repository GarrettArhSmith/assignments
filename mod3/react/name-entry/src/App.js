import React, { Component } from 'react';
import './App.css';

import Name from './Name'

class App extends Component {
state = {
  name: "",
  names: []
}

handleChange = (e) => {
  const {name, value} = e.target
  this.setState({[name]: value})
}

handleSubmit = (e) => {
  e.preventDefault()
  this.setState(({name, names}) => ({names: [...names, name]}))
}

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        <h1>{this.state.name}</h1>
        <button>Add Name</button>
      </form>
        <ol>
          {this.state.names.map(name => <Name name={name} />)}
        </ol>
      </div>
    );
  }
}

export default App;