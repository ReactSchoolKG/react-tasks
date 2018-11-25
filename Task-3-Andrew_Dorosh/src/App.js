import React, { Component } from 'react';
import hoc from './components/hoc/clock';
import Timer from './components/hoc/withTimer';

import './App.css';
const EnhancedComponent = hoc(Timer);
class App extends Component {
  
  render() {
    
    return (
      <div className="App">
        <EnhancedComponent />
      </div>
    );
  }
}

export default App;