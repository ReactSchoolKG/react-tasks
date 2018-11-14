import React from 'react';

const Name = ({ item }) => {
  const defaultProps = 'Name';
  const newName = `Hi, ${item.name ? item.name : defaultProps}`;
  return item.show && <li className="list-item">{ newName }</li>;
};

export default Name;
