import React, { Component } from 'react';
import People from "./components/People"
import Form from "./components/Form"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Hi! from app</p>
        <People/>
        <Form name="Brad"/>

      </div>
    )
  };
}

export default App;
