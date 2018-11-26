import React, { Component } from 'react';
import Clock from "./Components/HOC/Clock";
import WithTimer from "./Components/HOC/WithTimer";
import './App.css';

const ClockWithTimer = WithTimer(Clock);

class App extends Component{

  render(){
    return (
      <div className="App">
        <ClockWithTimer/>
        <ClockWithTimer/>
      </div>
    );
  }
}

export default App;
