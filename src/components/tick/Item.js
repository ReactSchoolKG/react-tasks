import React from 'react';

class Item extends React.PureComponent {
	render() {
		const { item, handleDeleteElement, color } = this.props;
		return (
			<p onClick={handleDeleteElement} style={{ color }}>
				{item}
			</p>
		);
	}
}

export default Item;
