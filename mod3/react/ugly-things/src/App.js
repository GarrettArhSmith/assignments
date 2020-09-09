import React, { Component } from 'react';
import './App.css';

import Form from './components/Form'
import UglyThing from './components/UglyThing'

import { ContextConsumer } from './components/Context'



class App extends Component {
  render() {
    return (
      <ContextConsumer>
        {context => (
          <div className="app">
            <Form context={context} />
            <div className="uglyThings">
              {context.uglyThings.map((thing, i) => (
                <UglyThing 
                  key={i}
                  id={i}
                  title={thing.title} 
                  imgUrl={thing.imgUrl} 
                  desc={thing.desc} 
                  edit={context.edit}
                  delete={context.delete}
                />
              ))}
            </div>
          </div>
        )}
      </ContextConsumer>
    );
  }
}

export default App;