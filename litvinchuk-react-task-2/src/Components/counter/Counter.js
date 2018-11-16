import React, { Component } from 'react';
import Plus from './Plus';
import Minus from './Minus';
import TYPES from './constants';

class Counter extends Component {

  constructor(props){
    console.log("constructor");
    super(props);
    this.state = {
      counter : 0,
      value : 1
    };
  }

  componentDidMount = ()=>{
    console.log("componentDidMount");
  };

  componentDidUpdate = ()=>{
    console.log("componentDidUpdate");
  };

  _handleCounter = (type, value = 1) => (e) => {
    let counter = this.state.counter;
    if(type === TYPES.INC && counter + value >= 0){
      this.setState({counter : parseInt(counter + value)});
    }
    else if(type === TYPES.DEC && counter - value >= 0){
      this.setState({counter : parseInt(counter - value)});
    }
    else{
      this.setState({counter : 0});
    }
  };

  render(){
    console.log("render");
    return <div>
      <div>{this.state.counter}</div>
      <div>
        <input type="number" value={this.state.value} onChange={(e)=>{this.setState({value : e.target.value})}}/>
        <Plus onUpdate={this._handleCounter} value={this.state.value}/>
        <Minus onUpdate={this._handleCounter} value={this.state.value}/>
      </div>
    </div>
  }

}

export default Counter;