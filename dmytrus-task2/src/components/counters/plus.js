import React from 'react';
import TYPES from './constants';

const Plus = ({onUpdate}) => {
    return (<button onClick={onUpdate(TYPES.INC)}>+</button>);
}
export default Plus;