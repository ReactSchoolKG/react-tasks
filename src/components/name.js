import React, { Component} from 'react';

/*class Name extends Component {
  render(){
    const newName = `Hi, ${this.props.item.name || this.props.name}`;
    return this.props.item.show && <li>{ newName }</li>;
  }
}

Name.defaultProps = {
  name:'John'
};*/

const Name = ({ item }) => {
  const newName = `Hi, ${item.name || 'John'}`;
  return item.show && <li>{ newName }</li>;
};

export default Name;