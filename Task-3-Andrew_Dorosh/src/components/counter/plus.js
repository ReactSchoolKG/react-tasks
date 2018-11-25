import React, { Component } from 'react';
import TYPES from '../constants';
const Plus = ({handler}) => {
    return(
        <button onClick={handler(TYPES.INC)}>+</button>
    )

    
}

export default Plus;