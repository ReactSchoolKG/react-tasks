import React, { Component } from 'react';
import Name from "./Name";
import '../styles/style.css';

import items from "../constants/items";

class Example extends Component {

  state = {
    counter : 0,
    value : ""
  };

  render(){
    return <div className="example">
      <ul className="list">
        {items.map((item, index) => <Name key={index} name={item.name} show={item.show}/>)}
      </ul>
      <h1>Counter</h1>
      <div>
        {this.state.counter}
        <button className="buttons" onClick={() => this._handleClick(true)}>+</button>
        <button className="buttons" onClick={() => this._handleClick(false)}>-</button>
        {this.state.value}
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
      </div>
    </div>;
  }

  handleChange =(e)=>
  {
    this.setState({value: e.target.value});
  };

  _handleClick = (flag) => {
    flag === true ?
    this.setState({
      counter : this.state.counter + 1,
    }) :
    this.setState({
      counter : this.state.counter > 0 ? this.state.counter - 1 : this.state.counter,
    })
  };

}

export default Example;