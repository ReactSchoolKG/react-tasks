import React, { Component } from 'react';
import Name from './Name';

class List extends Component {
	render() {
		const { items } = this.props;
		return (
			<div className="list">
				<ul>
					{items.map((element, index) => {
						return (
							element.show && (
								<li key={index}>
									<Name name={element.name} visible={element.show} />
								</li>
							)
						);
					})}
				</ul>
			</div>
		);
	}
}

export default List;
