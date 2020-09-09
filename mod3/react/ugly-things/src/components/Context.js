import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext()

class ContextProvider extends Component {
    state = {
        uglyThings: []
    }

    handleSubmit = (title, imgUrl, desc) => {
        this.setState(({uglyThings}) => ({uglyThings: [...uglyThings, {title, imgUrl, desc}]}))
    }

    edit = e => {
        console.log(e.target.parentNode.id)
    }

    delete = () => {
        console.log("delete")
    }

    render() {
        return (
            <Provider 
                value={{
                    uglyThings: this.state.uglyThings,
                    handleSubmit: this.handleSubmit,
                    edit: this.edit,
                    delete: this.delete
            }}>
                {this.props.children}
            </Provider>
        );
    }
}

export {ContextProvider, Consumer as ContextConsumer};