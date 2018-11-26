import React from 'react';
import TYPES from './constants';

const Minus = ({onUpdate ,value}) => {
  return <button onClick={onUpdate(TYPES.DEC, value)}>-</button>;
};

export default Minus;