import React from 'react';

const UpdateCheckbox = (props) => {
    return(
        <label>
            <input type="checkbox" onChange={props.onUpdate}/> Update after 10
        </label>
    );
}

export default UpdateCheckbox;