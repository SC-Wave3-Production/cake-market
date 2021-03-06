import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCakes } from './redux/reducers/cakes';
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
			{allCakes.map((item) => {
				return (
					<div key={item.id}>
						<h1>{item.name}</h1>
						<span>{item.description}</span>
						<img alt={item.name} src={item.urlArray[0]} />
					</div>
				);
			})}
		</div>
	);
}

export default App;
