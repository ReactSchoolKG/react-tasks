import React, { Component } from 'react';
import withTimer from './components/hoc/withTimer'
import Clock from './components/hoc/clock'
import './App.css';
const WrappedClock = withTimer(Clock);
class App extends Component {
  render() {
    return (
      <div className="App">
          <WrappedClock/>
          <WrappedClock/>
      </div>
    );
  }
}

export default App;