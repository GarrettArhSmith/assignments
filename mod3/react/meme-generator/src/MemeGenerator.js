import React, { Component } from 'react';
const axios = require('axios').default;

class MemeGenerator extends Component {
    state ={
        topText: "",
        bottomText: "",
        randImg: "http://i.imgflip.com/1bij.jpg",
        allMemeImgs: []
    }

    componentDidMount() {
        axios.get("https://api.imgflip.com/get_memes")
            .then(response => this.setState(({allMemeImgs: response.data.data.memes})))
            .catch(error => console.log(error))
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        e.preventDefault()
        const randImg = this.state.allMemeImgs[Math.floor(Math.random() * this.state.allMemeImgs.length)].url
        this.setState({randImg: randImg})
    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="topText"
                        placeholder="Top Text..."
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text..."
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randImg}/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        );
    }
}

export default MemeGenerator;