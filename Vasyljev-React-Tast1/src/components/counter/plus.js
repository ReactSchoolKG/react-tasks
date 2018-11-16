import React from 'react';
import CONSTANT from './constant';

const Plus = ({onUpdate}) => {
    return (<button onClick={onUpdate(CONSTANT.INC)}>+</button>);
}

export default Plus;