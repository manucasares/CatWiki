import { types } from '../types/types';

const initialState = {
	loading: true,
};

export const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.setLoading:
			return {
				...state,
				loading: action.payload,
			};

		default:
			return state;
	}
};
