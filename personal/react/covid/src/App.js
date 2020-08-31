import React, { Component } from 'react';
import './App.css';
import { Select } from 'antd';
import "antd/dist/antd.css";
import StatsCard from './StatsCard';


const { Option } = Select

const axios = require('axios').default;

class App extends Component {
  state = {
    loading: true,
    data: [],
    selectedCountry: "United States of America"
  }

  componentDidMount() {
    axios.get("https://api.covid19api.com/summary")
      .then(response => this.setState({loading: false, data:response.data}))
      .catch(error => console.log(error))
  }

  render() {
    const {Global, Countries} = this.state.data
    const {loading, selectedCountry} = this.state
    return (
      <div className="app">
        
          <StatsCard title="Global" loading={loading} data={Global} />
          
          <StatsCard 
            title={selectedCountry} 
            loading={loading}
            data={Countries?.filter(country => country.Country === selectedCountry)[0]} 
          >
            <Select showSearch className="countrySelect" defaultValue={selectedCountry}
              onChange={value => this.setState({selectedCountry: value})}
            >
              {Countries?.map(country => <Option key={country.Country} value={country.Country}>{country.Country}</Option>)}
            </Select>
          </StatsCard>
        
      </div>
    );
  }
}

export default App;
