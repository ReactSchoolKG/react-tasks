import React from "react";
import TYPES from "../counter/const"

function WithClock(InpComp){
    return class extends React.Component{
        constructor(props){
            super(props)
            this.state ={
                step: 1,
                tougle: true,
           }
        }
        componentDidMount() {
            console.log("Component WithClock did Mount");
            this.timerWithClock = setInterval(() => this._resetCounter(), 10000);
        }
   
        componentWillUnmount(){
            clearInterval(this.timerWithClock);
        }

        _resetCounter(){
            this.setState({
                tougle: this.state.tougle === false ? true : false,
                step:1,
            });
            // console.log(this.state.tougle)
        }
        render(){
            return (
            <>
            <button onClick={this._handleClick(TYPES.INC)}>+</button>
            <button onClick={this._handleClick(TYPES.DEC)}>-</button>
            <InpComp tougle = {this.state.tougle} step={this.state.step}></InpComp>
            </>
            )}

    _handleClick = (type)=> e =>{
        let step = +this.state.step;
        
        this.setState({
            step: type === "+" ? step + 1: step - 1,
        })
    }
        
    }
}

export default WithClock;