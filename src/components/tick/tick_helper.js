import React from "react";

const Value = ({ item, deleteMe, color}) => <h4 ><span onClick={deleteMe} style={{'color':color, cursor: "pointer"}}>{item}</span></h4>;

export default Value;
