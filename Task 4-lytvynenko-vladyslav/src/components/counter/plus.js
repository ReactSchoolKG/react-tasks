import React from 'react';
import TYPES from './constant';

const Plus = ({onUpdate}) => {
return <button onClick={onUpdate(TYPES.INC)}>+</button>;
};

export default Plus;
