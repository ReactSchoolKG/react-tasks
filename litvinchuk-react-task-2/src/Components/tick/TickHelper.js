import React from 'react';

const TickHelper = ({indexOfList, item, deleteFunction, color}) => {
  if(color === "Червоний"){
    color = "red";
  }
  else if(color === "Зелений"){
    color = "green";
  }
  else if(color === "Чорний"){
    color = "black";
  }
  return <li key={indexOfList} onClick={deleteFunction()} style={{color: color}}>{item}</li>;

};

export default TickHelper;