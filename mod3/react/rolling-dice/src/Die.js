import React from 'react'

class Die extends React.Component {
    constructor() {
        super()
        this.state = {
            isSelected: false
        }
        this.select = this.select.bind(this)
    }

    select(e) {
        this.setState(prevState => {
            return {isSelected: !prevState.isSelected}
        })
        this.props.select(e)
    }

    render() {
        let die
        switch (this.props.roll) {
            case 1: die = "⚀"
                break;
            case 2: die = "⚁"
                break;
            case 3: die = "⚂"
                break;
            case 4: die = "⚃"
                break;
            case 5: die = "⚄"
                break;
            case 6: die = "⚅"
                break;
        }
        return (
            <div className="die" onClick={this.select}>
                <h1 
                    style={{color: this.state.isSelected ? "steelblue" : "black"}}
                    id={this.props.id}
                >{die}</h1>
            </div>
        )
    }
}

export default Die