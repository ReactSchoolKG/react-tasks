import React, { Component } from 'react';
// import Example from './components/example';
import Counter from './components/counter/counter'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Example /> */}
        <Counter/>
      </div>
    );
  }
}

export default App;