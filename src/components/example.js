import React, { Component} from 'react';
import List from "./list";

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
    name:undefined,
    show:true
  }
];
class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      newvalue:' '
    };
  }
  render () {
    console.log('Example in render');
    return (<div className="example">
      Component Example
      <div>
        <List items ={items}>
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
        <button onClick={this._handleClickPlus} >+</button>
        <button onClick={this._handleClickMinus} >-</button>
        <input type="text" value = {this.state.newvalue} onChange = {this._handlerChangeInput}/>
        <br/>
        {this.state.newvalue}
      </div>
    </div>);
  }

  _handleClickPlus = e => {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  _handleClickMinus = e => {
    if(this.state.counter>0){
      this.setState({
        counter: this.state.counter - 1
      });
    }
  }
  _handlerChangeInput = e =>{
    this.setState({
      newvalue: e.target.value
    });
  }
}

export default Example;
