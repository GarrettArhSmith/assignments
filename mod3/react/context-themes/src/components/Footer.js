import React, { Component } from 'react';

import { ThemeConsumer } from './ThemeContext'

class Footer extends Component {
    render() {
        return (
            <ThemeConsumer>
                {context => (
                    <footer className={context.theme}>
                        <h1>Footer</h1>
                    </footer>
                )}
            </ThemeConsumer>
        );
    }
}

export default Footer;