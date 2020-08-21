import React from 'react';
import './App.css';

import DiceBox from './DiceBox'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      rolls: [],
      selected: [],
    }
    this.roll = this.roll.bind(this)
    this.select = this.select.bind(this)
  }

  select(e) {
    const id = Number(e.target.id)
    this.setState(prevState => {
      let newSelected = prevState.selected.slice()
      if (!prevState.selected.includes(id)) {
        newSelected.push(id)
        newSelected.sort()
      }else {
        newSelected.splice(newSelected.indexOf(id), 1)
      }
      return {selected: newSelected}
    })
  }

  roll() {
    const rollsArr = []
    for (let i = 0; i < 5; i++) {
      const roll = this.state.selected.includes(i) ? this.state.rolls[i] : Math.floor(Math.random() * 6) + 1
      rollsArr.push(roll)
      this.setState({rolls: rollsArr})
    }
  }

  render() {
    return (
      <div className="app">
        <div className="buttonContainer"><button onClick={this.roll}>Roll Dice</button></div>
        <DiceBox rolls={this.state.rolls} select={this.select}/>
      </div>
    )
  }
}

export default App;
