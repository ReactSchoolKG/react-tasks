import React, { Component } from 'react';

class Clock extends Component{
    constructor(props) {
        super(props)
        this.state = {
            tick: 0,
            ticker: 0 
        };
    }
    render() {
        return (
            <div>
                <h1>{this.state.tick}</h1>
            </div>
        );
    }
    _tickCounter = e => {
        this.setState({
            tick: this.state.tick + Number(this.props.count),
            ticker: this.state.ticker+1
        })
    }
    componentDidMount() {
        this.timerID = setInterval(this._tickCounter, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.ticker === 10){
            this.setState({
                tick:0,
                ticker:0
            });
            this.props.changer();
        }
    }
}

export default Clock;