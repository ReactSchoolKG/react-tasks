import React from 'react';

const Name = ({ item }) => {
  const newName = `Hi, ${item.name}`;
  return item.show && <li>{ newName }</li>;
};

export default Name;
