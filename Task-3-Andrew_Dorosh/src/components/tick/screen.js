import React from 'react';

const Screen = ({item, color, handler}) => {
    
    return(
        <li  style={ {color: color} } onClick={ handler(item) }>{item}</li>
    )
}

export default Screen;