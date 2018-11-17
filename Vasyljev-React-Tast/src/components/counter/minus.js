import React from 'react';
import CONSTANT from './constant'

const Minus = ({onUpdate}) => {
    return (<button onClick={onUpdate(CONSTANT.DEC)}>-</button>);
}

export default Minus;