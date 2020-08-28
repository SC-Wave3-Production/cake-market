import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
	const { allCakes } = useSelector((state) => state.cakes);

	return (
		<div className="title">
			<h1>{allCakes[0].name}</h1>
			<span>{allCakes[0].description}</span>
		</div>
	);
}

export default App;
