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
    const items = [
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
    ];
    console.log('Example in render');
    return (<div className="example">
      Component Example
      <div>
        <List items={items}>

        </List>
      </div>
      <h1>Counter</h1>
      <div>
        { this.state.counter }
        <button onClick={this._handleClickPlus} >+</button>
        <button onClick={this._handleClickMinus} >-</button>
      </div>
    </div>);
  }

  _handleClickPlus = e => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  _handleClickMinus = e => {
    this.setState({
      counter: this.state.counter > 0 ? this.state.counter - 1 : 0
    });
  }
}

export default Example;
