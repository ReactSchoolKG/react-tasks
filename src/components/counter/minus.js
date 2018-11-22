import React, { Component } from 'react';
import TYPES from './TYPES';

const Minus = ({onUpdate}) => {
    return (
        <div>
            <button onClick={onUpdate(TYPES.DEC)}>-</button>
        </div>
    );
}

export default Minus;