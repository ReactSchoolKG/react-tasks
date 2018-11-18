import React from 'react';

const TickHelper = ({indexOfList, item, deleteFunction, color}) => {
  return <li key={indexOfList} onClick={deleteFunction()} style={{color: color}}>{item}</li>;

};

export default TickHelper;