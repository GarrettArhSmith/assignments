import React, { Component } from 'react';


class Form extends Component {
    state = {
        title: "",
        imgUrl: "",
        desc: "",
        id: 0
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        e.preventDefault()
        const { title, imgUrl, desc, id } = this.state
        this.props.context.handleSubmit(title, imgUrl, desc, id)
        this.setState(({id}) => ({title: "", imgUrl: "", desc: "", id: id + 1}))
    }

    render() {
        const { title, imgUrl, desc } = this.state
        return (
            <form className="addThing" onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    name="title"
                    placeholder="Title..."
                    value={title}
                    onChange={this.handleChange}
                />
                <input 
                    type="text"
                    name="imgUrl"
                    placeholder="Img Url..."
                    value={imgUrl}
                    onChange={this.handleChange}
                />
                <input 
                    type="text"
                    name="desc"
                    placeholder="Description..."
                    value={desc}
                    onChange={this.handleChange}
                />
                <button>SUBMIT</button>
            </form>
        );
    }
}

export default Form;