import React from 'react';
const AddComponent = props => (

<ul>
{
    props.items.map((item, index) => <li key={index}>{item}</li>)
}
</ul>
);

export default MyComponent;