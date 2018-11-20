import React from "react";
import TYPES from "./TYPES";

const Plus = ({item}) => {
	return <button onClick={item(TYPES.INC)}> + </button>
}

export default Plus