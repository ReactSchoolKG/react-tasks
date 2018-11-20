import React, { Component } from "react";
import List from "./list";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      value: ""
    };
    this.items = [
      {
        name: "Stas",
        show: true
      },
      {
        name: "Andrian",
        show: true
      },
      {
        name: "Olga",
        show: false
      },
      {
        name: "Nazar",
        show: true
      },
      {
        show: true
      }
    ];
  }
  render() {
    console.log("Example in render");
    return (
      <div className="example">
        Component Example
        <div>
          <List items={this.items}>
            <h2>Information from Example</h2>
            <h3>Test</h3>
          </List>
        </div>
        <h1>Counter</h1>
        <div>
          {this.state.counter}
          <button onClick={this._handleClickPlus}>+</button>
          <br />
          <button onClick={this._handleClickMinus}>-</button>
          <br />
          <input type="text" value={this.state.value} onChange={this._inputHandler}/>
          <br/>
          {this.state.value}
        </div>
      </div>
    );
  }

_inputHandler = e => {
  this.setState({
    value: e.target.value
  })
}

  _handleClickPlus = e => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  _handleClickMinus = e => {
    this.setState({
      counter: this.state.counter ? this.state.counter - 1 : 0
    });
  };
}

export default Example;
