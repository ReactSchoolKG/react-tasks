import React, { Component} from 'react';
import List from "./list";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.items = [
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
        show:true
      }
    ];
  }
  render () {
    

    console.log('Example in render');
    return (<div className="example">
      Component Example
      <div>
        <List items={this.items}>
          <h2>
            Information from Example
          </h2>
          <h3>
            Test
          </h3>
        </List>
      </div>
      <h1>Counter</h1>
      <div className="button-block">
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
    const counter = this.state.counter;
    if(counter === 0) {
    } else {
      this.setState({
        counter: this.state.counter - 1
      });
    }
   
  }
}

export default Example;
