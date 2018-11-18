import React from 'react';
import TYPES from './const'
const Plus = ({onUpdate})=>{
    return <button onClick={onUpdate(TYPES.INC)}>+</button>;
}
export default Plus;