import React, { Component } from 'react';

import List from './List';

class Example extends Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: 0,
			items: [],
			value: ''
		};

		this.handlePlus = this.handlePlus.bind(this);
		this.handleMinus = this.handleMinus.bind(this);
	}

	componentDidMount() {
		const items = [
			{
				name: 'Stas',
				show: true
			},
			{
				name: 'Andrian',
				show: true
			},
			{
				name: 'Olga',
				show: false
			},
			{
				name: 'Nazar',
				show: true
			},
			{
				show: true
			}
		];

		this.setState({
			items
		});
	}

	handlePlus = (event) => {
		this.setState({
			counter: this.state.counter + 1
		});
	};

	handleMinus = (event) => {
		this.setState({
			counter: this.state.counter > 0 ? this.state.counter - 1 : 0
		});
	};

	handleChange = (event) => {
		this.setState({ value: event.target.value });
	};

	render() {
		return (
			<React.Fragment>
				<div>
					<List items={this.state.items}>
						<h2>Information from Example</h2>
						<h3>Test</h3>
					</List>
				</div>
				<h2>Counter</h2>
				<span>{this.state.counter}</span>
				<button type="button" onClick={this.handlePlus}>
					+
				</button>
				<button type="button" onClick={this.handleMinus}>
					-
				</button>
				<input type="text" value={this.state.value} onChange={this.handleChange} />
				<br />
				<p>{this.state.value}</p>
			</React.Fragment>
		);
	}
}

export default Example;
