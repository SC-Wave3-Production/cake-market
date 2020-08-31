import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCakes } from './redux/reducers/cakes';
import './App.css';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCakes());
	});

	let { allCakes } = useSelector((state) => {
		return state.cakes;
	});

	allCakes = allCakes || [];
	let i = 0;
	return (
		<div className="title">
			{allCakes.map((item) => {
				return (
					<div key={i++}>
						<h1>{item.name}</h1>
						<span>{item.description}</span>
					</div>
				);
			})}
		</div>
	);
}

export default App;
