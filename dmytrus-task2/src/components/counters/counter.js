import React, { Component } from 'react';
import  Plus from './plus'
import  Minus from './minus'
import TYPES from './constants';


class counter extends Component {
constructor(props) {
    super(props);
    this.state = {
        count: 0,
        inputValue: 1
    };
    }
    render() {
        return <div>
            {this.state.count}
            <input type="number" onChange={this._handleInput}/>
            <Plus onUpdate={this._handleCounter}/>
            <Minus onUpdate={this._handleCounter}/>
            </div>       
    }
            ComponentDidMount() {
                console.log('mount');
        }

            ComponentDidUpdate() {
                console.log('update');
        }

    _handleCounter = (type, value  = 1) => e => {
        let {count, inputValue} = this.state;
        let counter = (count + (type ===TYPES.INC ? inputValue : -inputValue));
        this.setState({
        count: counter >=0 ? counter: 0
        })
    }
    _handleInput = (e) => {
        this.setState({
            inputValue: parseInt(e.target.value)
        });
    }
}
export default counter;