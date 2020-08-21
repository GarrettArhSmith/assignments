import React, { Component } from 'react';

class Name extends Component {
    render() {
        return (
            <li>
                {this.props.name}
            </li>
        );
    }
}

export default Name;