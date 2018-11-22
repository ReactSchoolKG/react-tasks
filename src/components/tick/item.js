import React from 'react'

const Items = ({ onUpdate , itemDelete , colorSL }) => {
    let items = onUpdate.map((i, index) => <li key={index} onClick={itemDelete} style={{color:colorSL}}>{i}</li>);
    return (
        <div>
            Itmes:
            <ul>
                {items}
            </ul>
        </div>
    );
}

export default Items;