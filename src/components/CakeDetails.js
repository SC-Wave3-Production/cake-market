import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function CakeDetails(props) {
	const { itemId } = useParams();
	const currentCake = useSelector((state) => {
		let result = state.cakes.allCakes.find((cake) => cake.id === +itemId);
		if (typeof result === 'undefined') {
			result = { name: 'loading...', description: 'loading...', urlArray: [] };
		}
		return result;
	});
	return (
		<div>
			<p>{currentCake.name}</p>
			<p>{currentCake.description}</p>
			<p>{currentCake.price}</p>
			<img src={currentCake.urlArray[0]} alt="cake" />
		</div>
	);
}
