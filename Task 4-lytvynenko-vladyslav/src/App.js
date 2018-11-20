import React, { Component } from 'react';


import './App.css';
import Tick from './components/tick/tick';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tick/>
      </div>
    );
  }
}

export default App;
