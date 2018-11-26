import React from 'react';

function withTimer (WrappedComponent){
    return class extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                tick:1,
                timer:0
            };
        }
        render(){
            return(
                <div>
                    <WrappedComponent step = {this.state.tick} 
                                    timer = {this.state.timer} 
                                    incrementTimer = {this._handlerIncrementTimer}
                                    reset = {this._handlerResetTimer}/>
                    <button onClick={this._handlerChange}>+</button>
                    <button onClick={this._handlerChange}>-</button>   
                </div>
            )
        }
        
        _handlerChange=(event)=>{
            if(event.target.innerText==='+'){
                this.setState({
                    tick:this.state.tick+1
                })
            }
            else{
                this.setState({
                    tick:this.state.tick-1
                })
            }
        }

        _handlerIncrementTimer = ()=>{
            this.setState({
                timer: this.state.timer + 1
            })
        }

        _handlerResetTimer = ()=>{
            this.setState({
                timer:0,
                tick:1
            })
        }

    } 
}

export default withTimer;