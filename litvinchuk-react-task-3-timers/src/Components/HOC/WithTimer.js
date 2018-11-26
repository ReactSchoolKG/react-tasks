import React , {Component} from 'react'
import "../../styles/TimerStyle.css"

function WithTimer(WrappedComponent){
  return class extends Component {

    constructor(){
      super();
      this.state = {
        step : 1,
        stepInputText : "",
      };
    }

    _handleStep = (flag) => e => {
      let fStep = 0;
      flag === true ? fStep = 1 : fStep = -1;
      this.setState({step : this.state.step + fStep});
      console.log(this.state.step);
    };

    _setStep = (value) => () => {
      this.setState({step : Number(value)});
    };

    _defaultStep = () => {
      this.setState({step : 1});
    };

    render() {
      return (
        <div id="border">
          <button onClick={this._handleStep(true)}>+</button>
          <button onClick={this._handleStep(false)}>-</button>
          <div id="inputs">
              <h6>Введіть значення кроку , який хочете встановити </h6>
              <input type="number" onChange={(e)=>{this.setState({stepInputText : e.target.value})}}/>
              <button onClick={this._setStep(this.state.stepInputText)}>OK</button>
          </div>

          <WrappedComponent timerStep={this.state.step} timerClearInterval={this.state.clearInterval} setDefaultStep={this._defaultStep}/>
        </div>);
    }
  }
}

export default WithTimer;