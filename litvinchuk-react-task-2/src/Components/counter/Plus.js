import React from 'react';
import TYPES from './constants';

const Plus = ({onUpdate ,value}) => {
  return <button onClick={onUpdate(TYPES.INC, value)}>+</button>;
};

export default Plus;