import React from 'react';
import CONSTANTS from './CONSTANTS';

const Minus = ({onUpdate}) => {
    
    return(
        <div className="minus-button button" onClick={() => {
            onUpdate(CONSTANTS.DEC);
        }}>-</div> 
    );
}

export default Minus;