import React, { Component, Suspense } from 'react';
import './App.css';
// import Example from './components/example';
// import Counter from './components/counter/counter';
// import Tick from "./components/tick/tick";
import Clock from "./components/hoc/clock";
import WithClock from "./components/hoc/withClock";

const WrappedComp = WithClock (Clock);

class App extends Component { 
  render() {
    return (
        <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
           <WrappedComp></WrappedComp>
           <WrappedComp></WrappedComp> 
          {/* <Clock></Clock> */}
          {/* <Tick/> */}
          {/* <Example />        */}
          {/* <Counter/> */}
          </Suspense>
        </div>
    );
  }
}


export default App;
