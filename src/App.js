import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink, Redirect } from 'react-router-dom';

import Error404 from './components/Error404';
import Home from './components/Home';
import Example from './components/example/Example';
import Counter from './components/counter/Counter';
import Timer from './components/tick/Timer';

import './App.css';

class App extends Component {
	render() {
		return (
			<>
				<BrowserRouter>
					<>
						<header className="header">
							<div className="flex-container">
								<NavLink className="header__item" to="/">
									Home
								</NavLink>
								<NavLink className="header__item" to="/example">
									4 Task: Example
								</NavLink>
								<NavLink className="header__item" to="/counter">
									Counter
								</NavLink>
								<NavLink className="header__item" to="/tick">
									5 Task: Tick
								</NavLink>
							</div>
						</header>
						<Switch>
							<Route path="/404" component={Error404} />

							<Route path="/example" component={Example} />
							<Route path="/counter" component={Counter} />
							<Route path="/tick" component={Timer} />
							<Route path="/" exact component={Home} />

							<Redirect from="*" to="/404" />
						</Switch>
					</>
				</BrowserRouter>
			</>
		);
	}
}

export default App;
