import React, { Component } from 'react';

function withTimer (WrappedComponent) {
  return class extends Component {
    constructor () {
      super();
      this.state =  {
        value: 1
      }
    }

    render () {
      return <div>
        <button onClick={this._handleChange(1)}>+</button>
        <button onClick={this._handleChange(-1)}>-</button>
        <WrappedComponent value={this.state.value} reset={this.state.reset} />
      </div>
    }

    componentDidMount () {
      this.interval = setInterval(this._handleReset, 10000);
    }

    componentWillUnmount () {
      clearInterval(this.interval);
    }

    _handleChange = num => () => {
      this.setState({
        value: this.state.value + num
      })
    };

    _handleReset = () => {
      this.setState({
        value: 1,
        reset: true
      }, () => {
        this.setState({
          reset: false
        })
      })
    }
  }
}

export default withTimer;
