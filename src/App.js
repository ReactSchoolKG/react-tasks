import React, { Component } from 'react';

import './App.css';
import IntervalTick from './components/tick/intervalTick';
import withTimer from './components/HOC/withTimer';
import Clock from './components/HOC/clock';
const UpdatedClock = withTimer(Clock);
class App extends Component {
  render() {
    return (
      <div className="App">
        <UpdatedClock/>
        <UpdatedClock/>
      </div>
    );
  }
}

export default App;