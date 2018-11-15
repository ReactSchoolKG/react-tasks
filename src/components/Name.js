import React, { Component } from "react";

class Name extends Component {
	constructor(props) {
		super(props);
		this.props.item.name = this.props.item.name || "Jon";
	}

	render() {
		return (
			<div>
				<ul>{this.props.item.show && this.props.item.name}</ul>
			</div>
		);
	}
}

export default Name;
