import React, { Component } from 'react';
import NumberTicks from "./Components/tick/NumberTicks";

import './App.css';

class App extends Component{

  render(){
    return (
      <div className="App">
        <NumberTicks/>
      </div>
    );
  }
}

export default App;
