import React from 'react';

const ListItem = (props) => {
    
    let arr = props.items;
    return arr.map((item, i) => {
        if(!(item % 5)) {
            return (<li key={i} value={item} onClick={props.func} className="tick-list-item" style={{color: props.color}}>{item}</li>)
        }
    });
    
}

export default ListItem;