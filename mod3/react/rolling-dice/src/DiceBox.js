import React from 'react'

import Die from './Die'

class DiceBox extends React.Component {
    render() {
        return (
            <div className="diceBox">
                {this.props.rolls.map((roll, i) => <Die roll={roll} id={i} select={this.props.select} />)}
            </div>
        )
    }
}

export default DiceBox