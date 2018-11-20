import React, { Component } from 'react';
import Tick from './components/tick/tick_main';

import './App.css';

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