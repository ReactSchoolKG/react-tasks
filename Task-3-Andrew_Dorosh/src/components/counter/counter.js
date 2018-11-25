import React, { Component } from 'react';

import Plus from './plus';
import Minus from './minus';
import TYPES from '../constants';


class Counter extends Component {
    constructor(){
        super();

        this.state = {
            counter: 0,
            value: 0
        };
        // this.plusHandler = this.plusHandler.bind(this);
        // this.minusHandler = this.minusHandler.bind(this);
    }


    counterHundler = (type, value = 1) => e =>{
        let num = value == -1 && this.state.counter == 0 ? 0 : value;
        // num = value == -1 ? this.state.value*-1 : this.state.value;
        // num =  num < 0 ? 0 : num;
        this.setState({
            counter:  this.state.counter + num
            
        })
    }

    inputHandler = (e) => {
        this.setState({
            value:  parseInt(e.target.value)
            
        })
    }


    // plusHandler(){
    //     this.setState({
    //         counter: this.state.counter +1
    //     })
    // }

    // minusHandler(){
    //     this.setState({
    //         counter: this.state.counter - 1
    //     })
    // }
    render() {
      return(
          <div>
            <h1>{ this.state.counter }</h1>
            <input type='text' onChange={this.inputHandler} value={this.state.value}></input>

            <Plus handler={ this.counterHundler }/>
            <Minus handler={ this.counterHundler }/>      
          </div>
      );
    }
}
export default Counter;
  