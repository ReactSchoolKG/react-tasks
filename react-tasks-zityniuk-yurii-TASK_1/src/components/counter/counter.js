import React, { Component } from 'react';
import Minus from "./minus";
import Plus from "./plus";
import TYPES from "./const"

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter:0,
            inputValue:1,
        };
    }

    render(){
    return (<div>
                <input type="number" onChange={this._handlInput}/> 
                <Minus onUpdate={this._handleCounter}></Minus>
                    {this.state.counter}
                <Plus onUpdate={this._handleCounter}></Plus>
            </div>) 
    }

    componentDidMount() {
        console.log("Did Mount")
      }
    componentDidUpdate(){
        console.log("did update")
    }


    _handleCounter = (type, value = 1 )=> e =>{  
        const  inputValue = this.state.inputValue;                                              //переглянути
        let counter = this.state.counter + (type === TYPES.INC ? inputValue: -inputValue);
        counter < 0 ? this.setState({ counter:0 }) : this.setState({ counter });
    }

    _handlInput = (e) => {
        this.setState({
            inputValue:parseInt(e.target.value)
        })
    }

}


export default Counter;