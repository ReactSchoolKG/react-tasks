import React from 'react';

const Subtract = (props) => {
	return (
		<button type="button" onClick={props.onSubtract('-', props.values)}>
			-
		</button>
	);
};

export default Subtract;
