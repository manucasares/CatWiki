import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';

import { setActiveBreed } from 'actions/breeds';
import { CatImage, Spinner, Typography } from 'shared';
import { theme } from 'styles/themes';
import { BreedInfo, BreedInfoContainer } from './Breed.elements';
import { OtherPhotos } from './OtherPhotos';
import { Property } from './Property';
import { Stat } from './Stat';
import { searchActiveCatImages } from 'helpers';

export const Breed = () => {
	const { active, breedData } = useSelector((state) => state.breeds);
	const { loading } = useSelector((state) => state.ui);
	const dispatch = useDispatch();

	const { pathname } = useLocation();
	const history = useHistory();

	const [images, setImages] = useState([]);

	const isActiveEmpty = !Object.keys(active).length;

	useEffect(() => {
		// Si ya tenemos raza no la buscamos

		// FIXME: Entra acá y por eso no pasa a buscar las fotos.
		if (images.length || loading) {
			return;
		}

		// Extraemos query de la url
		const pathnameSplitted = pathname.split('/');
		const urlQuery = pathnameSplitted[pathnameSplitted.length - 1];

		// Buscamos la raza por id
		const breed = breedData.find(
			(breed) => breed.id === urlQuery.toLowerCase()
		);

		// Si no existe retornamos a home
		if (!breed) {
			history.push('/home');
			toast.error('Breed not found...');
			return;
		}

		(async () => {
			// Buscamos imágenes de active cat
			const images = await searchActiveCatImages(breed.id);
			setImages(images);
		})();

		dispatch(setActiveBreed(breed));
	}, [breedData, loading, dispatch, history, pathname, isActiveEmpty, images]);

	if (loading || isActiveEmpty) {
		return <Spinner />;
	}

	// Stats de active
	const {
		adaptability,
		affection_level,
		child_friendly,
		grooming,
		intelligence,
		health_issues,
		social_needs,
		stranger_friendly,
		life_span,
		origin,
		temperament,
		description,
		name,
		image,
	} = active;

	return (
		<main className="animate__animated animate__fadeIn">
			<BreedInfoContainer>
				<CatImage width="30vw" height="30vw" src={image.url} />

				<BreedInfo>
					<Typography fw="700" fz={theme.fz['600']}>
						{name}
					</Typography>

					<Typography>{description}</Typography>

					<Property name="Temperament" value={temperament} />
					<Property name="Origin" value={origin} />
					<Property name="Life span" value={life_span} />

					<Stat name="Adaptability" points={adaptability} />
					<Stat name="Affection level" points={affection_level} />
					<Stat name="Child Friendly" points={child_friendly} />
					<Stat name="Grooming" points={grooming} />
					<Stat name="Intelligence" points={intelligence} />
					<Stat name="Health issues" points={health_issues} />
					<Stat name="Social needs" points={social_needs} />
					<Stat name="Stranger friendly" points={stranger_friendly} />
				</BreedInfo>
			</BreedInfoContainer>

			<OtherPhotos images={images} />
		</main>
	);
};
