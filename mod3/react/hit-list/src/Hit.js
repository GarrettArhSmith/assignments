import React, { Component } from 'react';

class Hit extends Component {
    render() {
        const backgroundImg = {
            background: `url(${this.props.img}) no-repeat center`,
            backgroundSize: "cover"
        }
        return (
            <div className="card" style={backgroundImg}>
                <div className="label">
                    <h3>{this.props.name}</h3>
                </div>
            </div>
        );
    }
}

export default Hit;