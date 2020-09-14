import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCakes } from './redux/reducers/cakes';
import Cards from './components/Cards';
import CakeDetails from './components/CakeDetails';

import './App.css';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCakes());
	}, [dispatch]);

	const { allCakes } = useSelector((state) => {
		return state.cakes;
	});

	return (
		<div className="title">
			<Switch>
				<Route exact path="/">
					<Cards allCakes={allCakes} />
				</Route>
				<Route exact path="/cart">
					<div>cart here</div>
				</Route>
				<Route path="/item/:itemId">
					<CakeDetails />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
