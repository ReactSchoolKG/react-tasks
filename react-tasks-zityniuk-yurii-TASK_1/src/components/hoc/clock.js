import React from "react";

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter:0,
        }
    }
    
    render(){
        return (<>
            <h1>{this.state.counter}</h1>
        </>)
    }


    componentDidMount() {
        console.log("Component Clock did Mount");
        this.timerClock = setInterval(() => this._tick(), 1000);
    }
    
    componentDidUpdate(prevProps){
        if(prevProps.tougle !== this.props.tougle){
            this.setState({
                counter:0,
            })
        }
    }

    componentWillUnmount(){ 
        clearInterval(this.timerClock);
    }

    _tick(){
        this.setState({
            counter: this.state.counter + this.props.step,
        });
    }

}

export default Clock;

