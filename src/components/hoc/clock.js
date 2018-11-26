import React, {Component} from 'react';

class Clock extends Component{
    constructor (props){
        super(props);
        this.state = {
            tick:0
        };
    }
    render(){
        return(
            <div>
                <h1>{this.state.tick}</h1>
            </div>
        )
    }

    _handlerIncrement = ()=>{
        this.setState({
            tick: this.state.tick + this.props.step
        })
    }

    _handlerResetTick = ()=>{
        this.setState({
            tick:0
        })
        this.props.reset()
    }

    componentDidMount(){
        setInterval(this._handlerIncrement,1000);
        setInterval(this.props.incrementTimer,1000)
    }

    componentDidUpdate(){
        if(this.props.timer>=10){
            this._handlerResetTick();
        }
    }
}

export default Clock;