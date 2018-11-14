import React, { Component } from "react";
import Name from "./Name";

class List extends Component {
	render() {
		const viewItems = this.props.item.map((i, index) => (
			<Name item={i} key={index} />
		));
		return (
			<div>
				<ul>{viewItems}</ul>
			</div>
		);
	}
}

export default List;
