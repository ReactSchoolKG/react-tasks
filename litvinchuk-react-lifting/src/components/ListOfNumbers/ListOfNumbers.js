import React, { Component } from 'react';

class ListOfNumbers extends Component {

  render () {
    return <div>
      {this.props.numbers.map((item,key)=> {
        return <li key={key} onClick={this.props.click(key)}>{item}</li>
      })}
    </div>
  }
}

export default ListOfNumbers;
