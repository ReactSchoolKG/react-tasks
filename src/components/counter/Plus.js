import React from 'react';

const Plus = (props) => {
	return (
		<button type="button" onClick={props.onPlus('+', props.values)}>
			+
		</button>
	);
};

export default Plus;
