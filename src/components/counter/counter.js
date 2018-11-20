import React, { Component } from 'react';
import Plus from "./plus";
import Minus from "./minus";

import TYPES from './constants';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      inputValue: 1
    };
  }

  render () {
    return <div className="container">
      <h1>
        {
          this.state.counter
        }
      </h1>
      <input type="number" onChange={this._handleInput} value={this.state.inputValue} />
      <Plus onUpdate={this._handleCounter}/>
      <Minus onUpdate={this._handleCounter}/>
    </div>
  }

  componentDidMount() {
    console.log('mount')
  }

  componentDidUpdate() {
    console.log('update')
  }

  _handleCounter = (type, value = 1) => e => {
    const { counter, inputValue } = this.state;
    let newValue = counter +
        (type === TYPES.INC ? inputValue : -inputValue)
    this.setState({
      counter: newValue
    })
  };

  _handleInput = e => {
    this.setState({
      inputValue: parseInt(e.target.value)
    })
  }
}

export default Counter;
