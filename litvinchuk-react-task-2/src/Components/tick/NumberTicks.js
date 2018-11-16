import React, { Component } from 'react';
import TickHelper from './TickHelper';

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
    document.getElementsByClassName("counter")[0].innerText =  this.state.tick;
    setInterval(this._showTicks,60000);
  };

  componentDidUpdate = () => {
    let tick = this.state.tick;
    tick % 5 === 0 && this.state.items.push(tick);
  };

  render(){
    return <div>
      <h1 className="counter"> </h1>
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
        <option value={"Червоний"}>Червоний</option>
        <option value={"Чорний"}>Чорний</option>
        <option value={"Зелений"}>Зелений</option>
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

  _showTicks = () => {
    document.getElementsByClassName("counter")[0].innerText =  this.state.tick;
  };

}

export default NumberTicks;

