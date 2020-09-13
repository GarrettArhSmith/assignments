import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext()

class ContextProvider extends Component {
    state = {
        uglyThings: []
    }

    handleSubmit = (title, imgUrl, desc, id) => {
        this.setState(({uglyThings}) => ({uglyThings: [...uglyThings, {title, imgUrl, desc, id}]}))
    }

    saveEdit = (clickedId, title, desc, imgUrl) => {
        this.setState(({uglyThings}) => ({uglyThings: uglyThings.map(thing => {
                return thing?.id === clickedId ? ({...thing, title, desc, imgUrl}) : thing
            })})
        )
    }

    delete = e => {
        const clickedId = Number(e?.target.parentNode.id)
        this.setState(({uglyThings}) => ({uglyThings: uglyThings.filter(thing => thing.id !== clickedId)}))
    }

    render() {
        return (
            <Provider 
                value={{
                    uglyThings: this.state.uglyThings,
                    handleSubmit: this.handleSubmit,
                    saveEdit: this.saveEdit,
                    delete: this.delete
            }}>
                {this.props.children}
            </Provider>
        );
    }
}

export {ContextProvider, Consumer as ContextConsumer};