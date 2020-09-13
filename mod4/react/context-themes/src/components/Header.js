import React, { Component } from 'react';

import { ThemeConsumer } from './ThemeContext'

class Header extends Component {
    render() {
        return (
            <ThemeConsumer>
                {context => (
                    <header className={context.theme}>
                        <h1>Header</h1>
                    </header>
                )}
            </ThemeConsumer>
        );
    }
}

export default Header;