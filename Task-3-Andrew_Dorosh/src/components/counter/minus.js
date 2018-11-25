import React, { Component } from 'react';
import TYPES from '../constants';
const Minus = ({handler}) => {
    return(
        <button onClick={handler(TYPES.DEC, -1)}>-</button>
    )
}

export default Minus;