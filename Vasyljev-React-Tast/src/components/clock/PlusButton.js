import React from 'react';
import CONSTANTS from './CONSTANTS';

const Plus = ({onUpdate}) => {
       
    return(<div className="plus-button button" onClick={() => {
        onUpdate(CONSTANTS.INC);
    }}>+</div>);
}

export default Plus;