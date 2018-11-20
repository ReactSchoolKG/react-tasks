import React, { Component } from "react";
import Plus from "./plus";
import Minus from "./minus";
import TYPES from "./TYPES";

class Counter extends Component {
	constructor() {
		super();
		this.state = {
			counter: 0,
			inputValue: 1
		};
	}

	Handler = (type, value = this.state.inputValue) => e => {
		if ((this.state.counter - this.state.inputValue) < 0 && type === TYPES.DEC) {
			return null;
		} else {
			let counter =
				this.state.counter + (type === TYPES.INC ? value : -value);
			this.setState({
				counter
			});
		}
	};

	handleInput = (e) => {
		this.setState({
			inputValue: parseInt(e.target.value)
		})
	}

	render() {
		return (
			<div>
				Component counter
				<h1>{this.state.counter}</h1>
				<input type="number" onChange={this.handleInput} value={this.state.inputValue} />
				<div>
				
					<Plus item={this.Handler} />
					<Minus item={this.Handler} />
				</div>
			</div>
		);
	}
}

export default Counter;
