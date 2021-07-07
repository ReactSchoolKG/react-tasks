import React from 'react';
import TYPES from './Constans';

const Minus = ({onUpdate ,value}) => {
    return <button onClick={onUpdate(TYPES.DEC, Number(value))}>-</button>;
};

export default Minus;