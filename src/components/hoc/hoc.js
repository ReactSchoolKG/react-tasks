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
        <WrappedComponent value={this.state.value} />
      </div>
    }

    _handleChange = num => () => {
      this.setState({
        value: this.state.value + num
      })
    };
  }
}

export default withTimer;
