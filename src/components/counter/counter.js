import React, { Component } from "react";
import Plus from "./plus";
import Minus from "./minus";
import TYPES from "./constants";

class Counter extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      counter: 0,
      inputValue: 1
    };
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <br />
        <input type="number" onChange={this._handleInput} value={this.state.value}/>
        <Plus onUpdate={this._handleCounter} />
        <Minus onUpdate={this._handleCounter} />
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevState, prevProps) {
    console.log("componentDidUpdate");
  }

  _handleCounter = (type, value = 1) => e => {
      const {counter, inputValue} = this.state;
    let newValue = counter + (type === TYPES.INC ? inputValue : -inputValue);

    if (newValue >= 0) {
      this.setState({
        counter: newValue
      });
      console.log(value);
    }
  };

  _handleInput = (e) => {
    this.setState({
      inputValue: +e.target.value
    });
  };
}

export default Counter;
