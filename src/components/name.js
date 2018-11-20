import React from "react";

const Name = ({ item: { name = "John", show } }) => {
  const newName = `Hi, ${name}`;
  return show && <li>{newName}</li>;
};

export default Name;
