import React, { Component } from 'react';


class Form extends Component {
    state = {
        title: "",
        imgUrl: "",
        desc: ""
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        e.preventDefault()
        const { title, imgUrl, desc } = this.state
        this.props.context.handleSubmit(title, imgUrl, desc)
        this.setState({title: "", imgUrl: "", desc: ""})
    }

    render() {
        const { title, imgUrl, desc } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    name="title"
                    placeholder="Title..."
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <input 
                    type="text"
                    name="imgUrl"
                    placeholder="Img Url..."
                    value={this.state.imgUrl}
                    onChange={this.handleChange}
                />
                <input 
                    type="text"
                    name="desc"
                    placeholder="Description..."
                    value={this.state.desc}
                    onChange={this.handleChange}
                />
                <button>SUBMIT</button>
            </form>
        );
    }
}

export default Form;