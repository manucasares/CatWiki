import { combineReducers } from 'redux';

import { breedReducer } from './breedReducer';

export const rootReducer = combineReducers({
	breeds: breedReducer,
});
