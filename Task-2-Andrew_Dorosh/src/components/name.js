import React, { Component } from 'react';


class Name extends Component {

  render() {
    console.log(this.props.item)
    let { show, name } = this.props.item;
    name = name || this.props.name;
    const newName = `Hi, ${name}`;
    return (
      show && <li>{ newName }</li>
    );
  }
}

Name.defaultProps = {
  name: 'Default name'
}




export default Name;