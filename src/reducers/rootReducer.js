import { combineReducers } from 'redux';

import { breedReducer } from './breedReducer';
import { uiReducer } from './uiReducer';

export const rootReducer = combineReducers({
	breeds: breedReducer,
	ui: uiReducer,
});
