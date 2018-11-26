import React, { Component } from 'react';
import "../../styles/TimerStyle.css"

class Clock extends Component {

  constructor(props){
    super(props);
    this. state = {
      value : 0,
    };
  }

  componentDidMount = () => {
    setInterval(this._clock,1000);
    setInterval(this._clearTimer,10000);
  };

  render(){
    return <div id="h5Container">
      <h5>Value : {this.state.value}   </h5>
      <h5>Step : {this.props.timerStep}</h5>
    </div>
  }

  _clock = () => {
    let value = this.state.value + this.props.timerStep;
    this.setState({value : value});
  };

  _clearTimer = () => {
    this.props.setDefaultStep();
    let value = 0;
    this.setState({value : value});
  }

}

export default Clock;

