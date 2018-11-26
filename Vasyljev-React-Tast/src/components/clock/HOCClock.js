import React, {Component} from 'react';
import Plus from './PlusButton';
import Minus from './MinusButton';
import CONSTANTS from './CONSTANTS';
import UpdateCheckbox from './UpdateCheckbox'

function HOCClock(Clock) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                step: 1,
                count: 0,
                update: false
            }

        }
        render() {
            return(
                <div className="hoc-wrap">
                    <Minus onUpdate={this._changeStep}/>
                    <Clock step={this.state.step} update={this.state.update}/>
                    <Plus onUpdate={this._changeStep}/>
                    <UpdateCheckbox update={this.state.update} onUpdate={this._changeUpdate}/>
                </div>                
            );
        }

        _changeStep = (value) => {            
            let newStep = this.state.step + (value === CONSTANTS.INC ? +1 : - 1);
            if(newStep <= 1) {
                this.setState({
                    step: 1
                });
            } else {
                this.setState({
                    step: newStep
                });
            }
            
        }

        _changeUpdate = (event) => {
            if(event.target.checked === true) {
                this.setState({
                    update: true
                });
            } else {
                this.setState({
                    update: false
                });
            }
        }

        componentDidMount() {            
            setInterval(() => {                
                let countHOC = this.state.count + this.state.step;
                this.setState({
                    count: countHOC
                });
            }, 1000);
        }
        
        componentDidUpdate() {
            if(this.state.update === true) {
                if(this.state.count > 10) {
                    this.setState({
                        count: 0,
                        step: 1
                    });
                }
            }
            
        }
    }
}

export default HOCClock;