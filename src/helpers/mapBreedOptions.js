export const mapBreedOptions = (breeds) => {
	return breeds.map(({ id, name }) => ({
		id,
		name,
	}));
};
