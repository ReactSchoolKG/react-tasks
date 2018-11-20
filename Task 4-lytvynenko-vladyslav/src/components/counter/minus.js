import React from 'react';
import TYPES from './constant';

const Minus = ({onUpdate}) => {
return <button onClick={onUpdate(TYPES.DEC)}>-</button>
};

export default Minus;
