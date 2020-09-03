import db, { storage } from '../../config/fbConfig';

const initialState = {
	allCakes: [],
};

const GET_CAKES = 'GET_CAKES';

const getDataAction = (data) => {
	return {
		type: GET_CAKES,
		payload: data,
	};
};

const getImageUrls = (id) => {
	return storage
		.ref(`/${id}`)
		.listAll()
		.then((data) => {
			return Promise.all(data.items.map((item) => item.getDownloadURL()));
		});
};

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
			Promise.all(
				cakesList.map((cake) => {
					return getImageUrls(cake.id).then((urlArray) => ({ ...cake, urlArray }));
				}),
			).then((filledCakesList) => {
				dispatch(getDataAction(filledCakesList));
			});
		});
	};
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_CAKES:
			return {
				...state,
				allCakes: action.payload,
			};
		default:
			return state;
	}
};
