/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Cards({ allCakes }) {
	return (
		<div className="bg-red-200">
			<div className="flex justify-between flex-wrap w-2/3 m-auto">
				{allCakes.map((item) => {
					return (
						<div
							key={item.id}
							className="m-1 max-w-xs bg-red-500 p-1 rounded text-center text-gray-800"
						>
							<Link className="card-link" to={`/item/${item.id}`}>
								<img
									className="grid-img rounded-lg"
									alt={item.name}
									src={item.urlArray[0]}
								/>
								<p className="font-serif text-xs italic mt-2">Baker Street</p>
								<p className="font-bold">{item.name}</p>
								<p className="text-gray-700">{item.price} UAH /KG</p>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
}
