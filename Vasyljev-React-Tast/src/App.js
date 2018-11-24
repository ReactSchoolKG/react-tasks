import React, { Component } from 'react';
// import Example from './components/example';
// import Counter from './components/counter/counter'
// import Tick from './components/tick/tick';
import Clock from './components/clock/Clock'
import HOCCLock from './components/clock/HOCClock'

import './App.css';

class App extends Component {
  
  render() {
    const NewClock = HOCCLock(Clock);
    return (
      <div className="App">
        {/* <Example /> */}
        {/* <Counter/> */}
        {/* <Tick/> */}
        <NewClock/>
      </div>
    );
  }
}

export default App;