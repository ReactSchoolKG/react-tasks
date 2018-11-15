import React from 'react';

class Name extends React.Component {
	render() {
		return this.props.visible && `Hi, ${this.props.name}`;
	}
}

Name.defaultProps = {
	name: `John Dou`
};

export default Name;
