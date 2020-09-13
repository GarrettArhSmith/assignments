import React, { Component } from 'react';

const {Provider, Consumer} = React.createContext()

class ThemeProvider extends Component {
    state = {
        theme: "light"
    }

    toggleTheme = () => {
        this.setState(({theme}) => ({theme: theme === "light" ? "dark" : "light"}))
    }

    render() {
        return (
            <Provider value={{theme: this.state.theme, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </Provider>
        );
    }
}

export {ThemeProvider, Consumer as ThemeConsumer};