import React, { Component} from 'react';
import  Example from './example';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.state = {
      counter: 0,
      items: [
        {
          name: 'Stas',
          show: true
        },
        {
          name: 'Andrian',
          show: true
        },
        {
          name: 'Olga',
          show: false
        },
        {
          name: 'Nazar',
          show: true
        },
        {
          show: true
        }
      ]
    };
  }
  render () {
    console.log('Example in render');
    return (<div className="example">
      Component Example
      <div>
        <List items={this.state.items}>
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
      {this.state.value}
      <input type='text' value ={this.state.value}
      onchange={this._handle()}/>
    </div>);
  }

  _handleClick = e => {
    this.setState({
      counter: this.state.counter + 1
    });
  }
}

export default Example;