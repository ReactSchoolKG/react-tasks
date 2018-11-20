import React, { Component } from 'react';

class Clock extends Component {
  constructor () {
    super();
    this.state = {
      counter: 0
    };
  }
  render () {
    return <h1>
        {
          this.state.counter
        }
      </h1>
  }

  componentDidMount () {
    this.interval = setInterval(this._clock, 1000);
  }

  componentWillUnmount () {
    clearInterval(this.interval);
  }

  _clock = () => {
    console.log(this.props.value);
    this.setState({
      counter: this.state.counter + this.props.value
    })
  }
}

export default Clock;
