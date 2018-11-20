import React from 'react';

const Name = ({ name, show }) => {
  const newName = `Hi, ${name}`;
  return show && <li>{ newName }</li>;
};

// class Name extends React.Component  {
//     render() {
//         const newName = `Hi, ${this.props.name}`;
//         return this.props.show && <li>{ newName }</li>;
//     }
//   }

Name.defaultProps = {
    name: 'Lesia'
  };

export default Name;