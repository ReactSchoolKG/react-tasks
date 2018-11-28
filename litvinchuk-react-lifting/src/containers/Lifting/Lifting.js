import React, { Component } from 'react';

import ListOfNumbers from "../../components/ListOfNumbers"

class Lifting extends Component {

  constructor(){
    super();
    this.state = {
      leftList : [1,2,3,4,5],
      rightList : [6,7,8,9,10]
    }
  }

  _pushToRightList = (key) => () => {
    let currentList = this.state.leftList;
    if(currentList.length > 1){
      let listForPush = this.state.rightList;
      let temp = currentList.splice(key,1);
      listForPush.push(temp);
      this.setState({leftList: currentList, rightList: listForPush});
    }
  };

  _pushToLeftList = (key) => () => {
    let currentList = this.state.rightList;
    if(currentList.length > 1){
      let listForPush = this.state.leftList;
      let temp = currentList.splice(key,1);
      listForPush.push(temp);
      this.setState({rightList: currentList, leftList: listForPush});
    }
  };

  render () {
    return <div className="containerOfLists">
      <ListOfNumbers numbers={this.state.leftList} click={this._pushToRightList}/>
      <div className="verticalLine"> </div>
      <ListOfNumbers numbers={this.state.rightList}  click={this._pushToLeftList}/>
    </div>
  }
}

export default Lifting;
