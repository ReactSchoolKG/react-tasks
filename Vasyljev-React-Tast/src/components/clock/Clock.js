import React, {Component} from 'react';
import CONSTANTS from './CONSTANTS';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0            
        };
    }

    render() {
        return (<div className="time">
                    <h1>{this.state.counter}</h1>
                    <p>Step - {this.props.step}</p>
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

    }
    
    
}

export default Clock;