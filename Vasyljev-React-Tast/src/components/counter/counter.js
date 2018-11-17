import React, {Component} from 'react';
import Plus from './plus';
import Minus from './minus';
import CONSTANT from './constant'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            value: 1
        };
    }

    render() {
        const counter = this.state.counter;
        return (<div className="counter-block">
                    {counter}
                    <Plus onUpdate={this._handleCounter}/>
                    <Minus onUpdate={this._handleCounter}/>
                    <input type="number" onChange={this._handleInput}/>
                </div>
        );
    }

    _handleCounter = (type, value = this.state.value) => () => {
        let counter = this.state.counter + (type === CONSTANT.INC ? +value : - +value);
        if(counter < 0) {
            this.setState({
                counter: 0
            });
        } else {
            this.setState({
                counter 
            });
        }
        
    }

    _handleInput = (e) => {
        this.setState({
            value: e.target.value
        });
    }
}

export default Counter;