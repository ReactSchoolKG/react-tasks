import React, { Component } from 'react';
import TickHelper from './TickHelper';
import COLORS from './ConstantColors';

import './TickStyle.css';

class NumberTicks extends Component {

  constructor(props){
    super(props);
    this.state = {
      tick : 0,
      items : [],
    };
  }

  componentDidMount = () => {
    setInterval(this._updateTickState,1000);
  };

  componentDidUpdate = () => {
    let tick = this.state.tick;
    tick % 5 === 0 && this.state.items.push(tick);
  };

  render(){
    return <div>
      <h1 id="counter">{this.state.tick}</h1>
      <ul id="listOfItems">
        {this.state.items.map((item, index) => <TickHelper
          key={index}
          indexOfList={index}
          item={item}
          deleteFunction={this._deleteFunction}
          color={document.getElementById("select").value}
        />)}
      </ul>
      <select id="select">
        <option value={COLORS.RED}>Червоний</option>
        <option value={COLORS.BLACK}>Чорний</option>
        <option value={COLORS.GREEN}>Зелений</option>
      </select>
    </div>
  }

  _updateTickState = () => {
    let tick = this.state.tick + 1;
    this.setState({tick : tick});
  };

  _deleteFunction = () => (e) => {
    e.preventDefault();
    e.target.parentNode.removeChild(e.target);
  };

}

export default NumberTicks;

