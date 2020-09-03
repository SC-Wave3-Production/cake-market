import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Cards({ allCakes }) {
	return (
		<Grid container spacing={3}>
			{allCakes.map((item) => {
				return (
					<Grid item key={item.id} xs={4}>
						<Link className="card-link" to={`/item/${item.id}`}>
							<img className="grid-img" alt={item.name} src={item.urlArray[0]} />
							<Typography>{item.name}</Typography>
							<Typography>{item.price} UAH /KG</Typography>
						</Link>
					</Grid>
				);
			})}
		</Grid>
	);
}
