/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Cards({ allCakes }) {
	return (
		<div>
			{allCakes.map((item) => {
				return (
					<div className="bg-green-600">
						<Link className="card-link" to={`/item/${item.id}`}>
							<img className="grid-img" alt={item.name} src={item.urlArray[0]} />
							<p>{item.name}</p>
							<p>{item.price} UAH /KG</p>
						</Link>
					</div>
				);
			})}
		</div>
	);
}
