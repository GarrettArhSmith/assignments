import React from 'react';
import './App.css';

import Square from './components/Square'

class App extends React.Component {
constructor() {
  super()
  this.state = {
    colors: ["white", "white", "white", "white"]
  }

  this.handleClick = this.handleClick.bind(this)
}

handleClick(e) {
  let newColor
  let newArr
  switch (e.target.textContent) {
    case "Black / White": 
      newColor = this.state.colors[0] === "white" ? "black" : "white"
      this.setState({colors: [newColor, newColor, newColor, newColor]})
      break;
    case "Top Purple": 
      newColor = "purple"
      this.setState(prevState => {
        newArr = prevState.colors.slice()
        newArr[0] = newColor
        newArr[1] = newColor
        return {
          colors: newArr
        }
      })
      break;
    case "Bottom Left Blue": 
      newColor = "blue"
      this.setState(prevState => {
        newArr = prevState.colors.slice()
        newArr[2] = newColor
        return {colors: newArr}
      })
      break;
    case "Bottom Right Blue": 
      newColor = "blue"
      this.setState(prevState => {
        newArr = prevState.colors.slice()
        newArr[3] = newColor
        return {colors: newArr}
      })
      break;
    case "Top Left": 
      newColor = this.state.colors[0] === "red" ? "orange" : "red"
      this.setState(prevState => {
        newArr = prevState.colors.slice()
        newArr[0] = newColor
        return {colors: newArr}
      })
      break;
    case "Top Right": 
      newColor = this.state.colors[1] === "green" ? "lime" : "green"
      this.setState(prevState => {
        newArr = prevState.colors.slice()
        newArr[1] = newColor
        return {colors: newArr}
      })
      break;
    case "Bottom Left": 
      newColor = this.state.colors[2] === "orange" ? "yellow" : "orange"
      this.setState(prevState => {
        newArr = prevState.colors.slice()
        newArr[2] = newColor
        return {colors: newArr}
      })
      break;
    case "Bottom Right": 
      newColor = this.state.colors[3] === "navy" ? "blue" : "navy"
      this.setState(prevState => {
        newArr = prevState.colors.slice()
        newArr[3] = newColor
        return {colors: newArr}
      })
      break;
  }
}

  render() {
    return (
      <div className="app">
        <span className="buttons">
          <button onClick={this.handleClick}>Black / White</button>
          <button onClick={this.handleClick}>Top Purple</button>
          <button onClick={this.handleClick}>Bottom Left Blue</button>
          <button onClick={this.handleClick}>Bottom Right Blue</button>
          <button onClick={this.handleClick}>Top Left</button>
          <button onClick={this.handleClick}>Top Right</button>
          <button onClick={this.handleClick}>Bottom Left</button>
          <button onClick={this.handleClick}>Bottom Right</button>
        </span>
        <div className="squares">
          {this.state.colors.map(color => <Square color={color} />)}
        </div>
      </div>
    )
  }
}

export default App;
