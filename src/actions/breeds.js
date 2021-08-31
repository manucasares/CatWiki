import { types } from 'types/types';

export const setBreedsData = (data) => ({
	type: types.setBreedsData,
	payload: data,
});

export const setActiveBreed = (breed) => ({
	type: types.setActiveBreed,
	payload: breed,
});
