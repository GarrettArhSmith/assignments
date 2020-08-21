import React, { Component } from 'react';
import './App.css';
import Badge from './Badge'

class App extends Component {
state = {
  firstName: "",
  lastName: "",
  email: "",
  birthPlace: "",
  phone: "",
  bio: "",
  favColor: "",
  badges: []
}

handleChange = (e) => {
  const {name, value} = e.target
  this.setState({[name]: value})
}

handleSubmit = (e) => {
  e.preventDefault()
  this.setState(({firstName, lastName, email, birthPlace, phone, favColor, bio, badges}) => {
    const newBadge = {firstName, lastName, email, birthPlace, phone, favColor, bio}
    return {
      firstName: "",
      lastName: "",
      email: "",
      birthPlace: "",
      phone: "",
      bio: "",
      favColor: "",
      badges: [...badges, newBadge]
    }
  })
}

  render() {
    return (
      <div className="app">
        <form onSubmit={this.handleSubmit} className="card">
          <input 
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            minLength="3"
            onChange={this.handleChange}
          />
          <input 
            type="text"
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
            minLength="3"
            onChange={this.handleChange}
          />
          <input 
            type="email"
            name="email"
            value={this.state.email}
            placeholder="Email"
            minLength="3"
            onChange={this.handleChange}
          />
          <input 
            type="text"
            name="birthPlace"
            value={this.state.birthPlace}
            placeholder="Place of Birth"
            minLength="3"
            onChange={this.handleChange}
          />
          <input 
            type="tel"
            name="phone"
            value={this.state.phone.replace(/\D/g, "")}
            placeholder="Phone"
            minLength="3"
            onChange={this.handleChange}
          />
          <label>
            <input 
              type="color"
              name="favColor"
              value={this.state.favColor}
              placeholder="Favorite Color"
              onChange={this.handleChange}
            />Favorite Color
          </label>

          <textarea 
            name="bio" 
            value={this.state.bio}
            placeholder="Tell us about yourself" 
            onChange={this.handleChange}>
          </textarea>
          <button 
            disabled={Object.entries(this.state).slice(0, 6).filter(entry => entry[1].length < 3).length > 0}
          >Submit</button>
        </form>

        {this.state.badges.map(badge => <Badge 
          firstName={badge.firstName}
          lastName={badge.lastName}
          email={badge.email}
          birthPlace={badge.birthPlace}
          phone={badge.phone}
          bio={badge.bio}
          favColor={badge.favColor}
        />)}
      </div>
    );
  }
}

export default App;