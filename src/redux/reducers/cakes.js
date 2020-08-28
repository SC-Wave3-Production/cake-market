const initialState = {
	allCakes: [
		{
			name: 'МЕРИ-БЕРИ',
			price: 520,
			weight: [1, 2, 5],
			quantity: 10,
			description:
				'Самый популярный торт, состоящий из очень сочного бисквита с ягодами малины и черники, легкого клубничного крема и крема на основе крем-сыра',
		},
	],
};

export default (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
