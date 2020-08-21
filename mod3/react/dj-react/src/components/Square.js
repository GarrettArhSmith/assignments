import React from "react"

class Square extends React.Component {
    render() {
        const style = {
            backgroundColor: this.props.color
        }
        return (
            <div className="square" style={style}></div>
        )
    }
}

export default Square