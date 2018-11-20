import React, { Component } from 'react';
// import Example from './components/example';

import './App.css';
import Clock from "./components/hoc/clock";
import withTimer from './components/hoc/hoc';

const Wrapped = withTimer(Clock);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrapped />
        <Wrapped />
      </div>
    );
  }
}

export default App;