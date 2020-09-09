import React, { Component } from 'react';

class UglyThing extends Component {
    render() {
        console.log(this.props.edit)
        return (
            <div className="uglyThing">
                <span className="actions" id={this.props.id}>
                    <button className="edit" onClick={this.props.edit}>✎</button>
                    <button className="delete">✖</button>
                </span>
                <img src={this.props.imgUrl}/>
                <h1>{this.props.title}</h1>
                <p>{this.props.desc}</p>
            </div>
        );
    }
}

export default UglyThing;