import React from 'react';

import Plus from './Plus';
import Subtract from './Subtract';

import TYPES from './Constans';

class Counter extends React.Component {
	constructor() {
		super();

		this.state = {
			counter: 0,
			value: 0
		};
		console.log('Counter constructor');
	}

	componentDidMount() {
		console.log('Counter mount');
	}

	componentDidUpdate() {
		console.log('Counter update');
	}

	handlePlusSubtract = (type, value = this.state.value) => (e) => {
		if (type === TYPES.INC) {
			this.setState({
				counter: this.state.counter + value
			});
		} else if (type === TYPES.DEC) {
			if (this.state.counter - value >= 0) {
				this.setState({
					counter: this.state.counter - value
				});
			}
		}
	};

	handleInput = (event) => {
		this.setState({
			value: Number(event.target.value)
		});
	};

	render() {
		console.log('Counter render');
		return (
			<React.Fragment>
				<p>{this.state.counter}</p>
				<input type="number" value={this.state.value} onChange={this.handleInput} />
				<Plus onPlus={this.handlePlusSubtract} values={this.state.value} />
				<Subtract onSubtract={this.handlePlusSubtract} values={this.state.value} />
			</React.Fragment>
		);
	}
}

export default Counter;
