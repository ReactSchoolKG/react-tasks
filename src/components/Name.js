import React, { Component } from "react";

class Name extends Component {
	constructor(props) {
		super(props);
		this.props.item.name = this.props.item.name || "Jon";
	}

	render() {
		const viewItems = this.props.item.name;
		return (
			<div>
				<ul>{viewItems}</ul>
			</div>
		);
	}
}

export default Name;
