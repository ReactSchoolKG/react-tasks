import React from 'react';

import Item from './Item';

class Timer extends React.PureComponent {
	constructor() {
		super();

		this.state = {
			items: [],
			tick: 0,
			value: 'black'
		};
	}

	componentDidMount() {
		this.tickMethod = setInterval(() => {
			this.tick();
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.tickMethod);
	}

	tick() {
		this.setState({
			tick: this.state.tick + 1
		});
		if (this.state.tick % 5 === 0) {
			const snapshotArray = this.state.items.slice();
			snapshotArray.push(this.state.tick);
			this.setState({ items: snapshotArray });
		}
	}

	handleDeleteElement = (event) => {
		const currentElement = event.target.textContent;
		const snapshotArray = this.state.items.slice();
		const index = snapshotArray.indexOf(parseInt(currentElement, 10));
		snapshotArray.splice(index, 1);
		this.setState({
			items: snapshotArray
		});
	};

	handleChangeOption = (event) => {
		this.setState({ value: event.target.value });
	};

	render() {
		return (
			<>
				<h2>Timer:</h2>
				<h3>{this.state.tick}</h3>
				<hr />
				<h3>Items:</h3>
				<form>
					<select value={this.state.value} onChange={this.handleChangeOption}>
						<option value="black">Black</option>
						<option value="red">Red</option>
						<option value="green">Green</option>
					</select>
				</form>
				<ul>
					{this.state.items.map((item) => {
						return (
							<li key={item}>
								<Item
									item={item}
									handleDeleteElement={this.handleDeleteElement}
									color={this.state.value}
								/>
							</li>
						);
					})}
				</ul>
			</>
		);
	}
}

export default Timer;
