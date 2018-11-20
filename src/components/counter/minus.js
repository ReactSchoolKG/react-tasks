import React from "react";
import TYPES from "./TYPES";

const Minus = ({item}) => {
	return <button onClick={item(TYPES.DEC)}> - </button>
}

export default Minus