import React, { Component } from 'react';

class Badge extends Component {
    render() {
        const bgColor = {backgroundColor: this.props.favColor}
        return (
            <div className="badge card">
                <div className="header" style={bgColor}>
                    <span>Badge:</span>
                </div>
                <div className="badgeContent">
                    <p><span className="label">Name: </span>{`${this.props.firstName} ${this.props.lastName}`}</p>
                    <p><span className="label">Phone: </span>{this.props.phone}</p>
                    <p><span className="label">Place of Birth: </span>{this.props.birthPlace}</p>
                    <p><span className="label">Email: </span>{this.props.email}</p>
                    <div><p>{this.props.bio}</p></div>
                </div>
            </div>
        );
    }
}

export default Badge;