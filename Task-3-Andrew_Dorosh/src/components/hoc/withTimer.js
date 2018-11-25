import React, { Component } from 'react';

class Timer extends Component {
    constructor(props){
        super(props)

        this.state = {
            counter: 0,
            step: this.props.step
        }
    }

        incrementTick = () => {
            if(this.state.counter >= 10){
                this.setState((state) => ({
                    counter: 0
                }));
                this.props.clearStep();
            }else {
                this.setState((state) => ({
                    counter: state.counter + state.step
                }))
            } 
        }

        componentDidMount(){
            this.timerId = setInterval(()=> {
                this.incrementTick();
            },1000);
        }
    
        componentWillUnmount() {
            clearInterval(this.timerId);
            console.log('unmount');
        }

        componentDidUpdate(nextProps, nextState){
            if(nextProps.step !== this.state.step){
                this.setState((state) => ({
                    step: nextProps.step
                }))
            }
        }

    render(){
        return (
            <div>
                <h1>{this.state.counter}</h1>
            </div>
        )
    }
}

export default Timer;