import React from 'react';
import { Grid, Typography } from '@material-ui/core'

export default function Cards(props) {
    return (
        <Grid container spacing={3}>
			{props.allCakes.map((item) => {
				return (
					<Grid item key={item.id} xs={3}>
						<img className='grid-img' alt={item.name} src={item.urlArray[0]} />
                        <Typography>{item.name}</Typography>
                        <Typography>{item.price} UAH /KG</Typography>
					</Grid>
				);
			})}
		</Grid>
    )
}