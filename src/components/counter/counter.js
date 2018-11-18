import React, { Component} from 'react';
import Plus from "./plus";
import Minus from "./minus";
import TYPES from './const';


class Counter extends Component{
    constructor(props) {
        super(props);
        this.state = {
          counter: 0,
          inputValue: 0
        };
      }
      render(){
          return(
            <div className="counter">
                { this.state.counter }
                <input type = "number" onChange = {this._handleInput} value = {this.state.inputValue}/>
                <Plus onUpdate = {this._handleCounter}/>
                <Minus onUpdate = {this._handleCounter}/>
            </div>
          )
      }
      componentDidMount(){
          console.log('mount');
      }
      componentDidUpdate(){
          console.log('update')
      }
      _handleCounter = (type, value = this.state.inputValue || 1) => e =>{
        let counter = this.state.counter +
            (type === TYPES.INC? value: -value);
            if(counter>=0){
            this.setState({
                counter
            })
        }
      }
      _handleInput = (e)=>{
        this.setState({
            inputValue: parseInt(e.target.value)
        })
      }
}

export default Counter;