// спочатку сторонні ліби 
// потім - свої
import React, { Component } from 'react';

class Name extends Component{
    render(){
        const NewName = `Hi ${this.props.name}`;
        console.log(NewName);
        return this.props.item.show ? (<li>{NewName}</li>) : ""
    }
}

Name.defaultProps = {
    name: 'Manson',
  };

export default Name;
