import React, { Component } from 'react';
import Name from './name';

class List extends Component {
	render() {
		const { items } = this.props;
		console.log('List in render');
		return (
			<div className="list">
				Component List
				{this.props.children}
				<div>
					Items:
					<ul>
						{items.map((element, index) => {
							return (
								<li key={index}>
									<Name
										name={element.name}
										visible={element.show}
									/>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}

export default List;
