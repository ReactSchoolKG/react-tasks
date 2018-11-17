import React, { Component } from 'react';

import './App.css';
import IntervalTick from './components/tick/intervalTick';

class App extends Component {
  render() {
    return (
      <div className="App">
        <IntervalTick/>
      </div>
    );
  }
}

export default App;