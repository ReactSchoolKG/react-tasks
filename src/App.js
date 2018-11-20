import React, { Component } from "react";
import Counter from "./components/counter/counter";
import Time from "./components/tick/Time";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        Component App
        <Counter />
        <Time />
      </div>
    );
  }
}

export default App;