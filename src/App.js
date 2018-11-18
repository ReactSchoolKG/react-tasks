import React, { Component } from 'react';
import TickTock from './components/tick/ticktock';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TickTock />
      </div>
    );
  }
}

export default App;