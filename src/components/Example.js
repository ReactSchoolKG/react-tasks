import React, { Component } from "react";
import List from "./List";

class Example extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      items: [
        {
          name: "stas",
          show: true
        },
        {
          name: "victor",
          show: false
        },
        {
          show: true
        },
        {
          name: "andrii",
          show: true
        }
      ]
    };
  }

  submit = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  submits = () => {
    if (this.state.counter === 0) {
      return false;
    } else {
      this.setState({
        counter: this.state.counter - 1
      });
    }
  };
  render() {
    return (
      <div>
        Component Example
        <List item={this.state.items} />
        <h1>Counter</h1>
        <div>{this.state.counter}</div>
        <button type="submit" onClick={this.submit}>
          +
        </button>
        <button type="submit" onClick={this.submits}>
          -
        </button>
      </div>
    );
  }
}

export default Example;
