import React, { Component } from 'react';
import TYPES from './TYPES';

const Plus = ({onUpdate}) => {
    return (
        <div>
            <button onClick={onUpdate(TYPES.INC)}>+</button>
        </div>
    );

}

export default Plus;