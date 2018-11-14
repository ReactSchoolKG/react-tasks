import React, { Component} from 'react';
import List from "./list";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  render () {
    console.log('Example in render');
    return (<div className="example">
      Component Example
      <div>
        <List>
          <h2>
            Information from Example
          </h2>
          <h3>
            Test
          </h3>
        </List>
      </div>
      <h1>Counter</h1>
      <div>
        { this.state.counter }
        <button onClick={this._handleClick} >+</button>
      </div>
    </div>);
  }

  _handleClick = e => {
    this.setState({
      counter: this.state.counter + 1
    });
  }
}

export default Example;
