import React from 'react';
import PropTypes from 'prop-types';

const Name = (props) => {
	const newName = `Hi, ${props.name}, show: ${props.visible}`;
	return <p>{newName}</p>;
};

Name.propTypes = {
	name: PropTypes.string.isRequired,
	visible: PropTypes.bool.isRequired
};

Name.defaultProps = {
	name: `John Doe`
};

export default Name;
