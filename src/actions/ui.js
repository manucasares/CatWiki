import { types } from '../types/types';

export const setLoading = (boolean) => ({
	type: types.setLoading,
	payload: boolean,
});
