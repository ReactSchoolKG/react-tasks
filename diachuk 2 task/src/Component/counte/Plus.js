import React from 'react';
import TYPES from './Constans';


const Plus = ({onUpdate ,value}) => {
    return <button onClick={onUpdate(TYPES.INC, Number(value))}>+</button>;
};

export default Plus;