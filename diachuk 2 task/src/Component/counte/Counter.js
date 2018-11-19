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
            value : ""
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
        if(type === TYPES.INC){
            this.setState({counter : counter + value});
        }
        else if(type === TYPES.DEC && counter - value >= 0){
            this.setState({counter : counter - value});
        }
    };

    render(){
        console.log("render");
        return <div>
            <div>{this.state.counter}</div>
            <div>
                <input onChange={(e)=>{this.setState({value : e.target.value})}}/>
                <Plus onUpdate={this._handleCounter} value={this.state.value}/>
                <Minus onUpdate={this._handleCounter} value={this.state.value}/>
            </div>
        </div>
    }

}

export default Counter;






