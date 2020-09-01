import db from '../../config/fbConfig';

const initialState = {
	allCakes: [],
};

const GET_CAKES = 'GET_CAKES'

const getDataAction = (data) => {
	return {
		type: GET_CAKES,
		payload: data
	}
}

export const getCakes = () => {
	return (dispatch) => {
		const cakesRef = db.collection('cakes');
		const cakesList = [];
		cakesRef.get().then((collection) => {
			collection.forEach((doc) => {
				if (doc.exists) {
					cakesList.push(doc.data());
				}
			});
			dispatch(getDataAction(cakesList));
		});
	};
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_CAKES:
			return { 
				...state,
				allCakes: action.payload 
			};
		default:
			return state;
	}
};
