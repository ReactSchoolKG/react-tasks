import React, {Component} from 'react';
import Plus from './PlusButton';
import Minus from './MinusButton';
import CONSTANTS from './CONSTANTS';

function HOCClock(Clock) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                step: 1
            }

        }
        render() {
            return(
                <div className="hoc-wrap">
                    <Minus onUpdate={this._changeStep}/>
                    <Clock step={this.state.step}/>
                    <Plus onUpdate={this._changeStep}/>
                </div>                
            );
        }

        _changeStep = (value) => {            
            let newStep = this.state.step + (value === CONSTANTS.INC ? +1 : - 1);
            if(newStep <= 1) {
                this.setState({
                    step: 1
                });
                console.log(newStep);
            } else {
                this.setState({
                    step: newStep
                });
                console.log(newStep);
            }
            
        }
        
        componentDidUpdate() {
            
        }
    }
}

export default HOCClock;