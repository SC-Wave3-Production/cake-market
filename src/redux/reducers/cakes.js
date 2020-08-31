import db from '../../config/fbConfig';

const initialState = {
	allCakes: [],
};

export const getCakes = (amount = 1) => {
	return (dispatch) => {
		const cakesRef = db.collection('cakes');
		const cakesList = [];
		cakesRef.get().then((collection) => {
			collection.forEach((doc) => {
				if (doc.exists) {
					cakesList.push(doc.data());
				}
			});
			dispatch({ type: 'GET_CAKES', payload: cakesList });
		});
	};
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'GET_CAKES':
			return { allCakes: action.payload };
		default:
			return state;
	}
};
