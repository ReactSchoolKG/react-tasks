import React, {Component} from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0            
        };
    }

    render() {
        const clockStep = this.props.step ? this.props.step : 1;
        return (<div className="time">
                    <h1>{this.state.counter}</h1>
                    <p>Step - {clockStep}</p>
                </div>);
    }

    componentDidMount() {
        setInterval(() => {
            let newValue = this.state.counter + this.props.step;                         
            this.setState({
                counter: newValue
            });
        }, 1000);
    }

    componentDidUpdate() {
        if(this.state.counter>10) {
            console.log("Yes");
            this.setState({
                counter: 0
            });
        }
    }
    
    
}

export default Clock;