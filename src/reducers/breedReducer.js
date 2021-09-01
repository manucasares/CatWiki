import { types } from '../types/types';

const initialState = {
	breedData: [],
	active: {},
};

export const breedReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.setBreedsData:
			return {
				...state,
				breedData: action.payload,
			};

		case types.setActiveBreed:
			// console.log(action.payload);
			return {
				...state,
				active: action.payload,
			};
		default:
			return state;
	}
};
