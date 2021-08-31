import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineSearch } from 'react-icons/ai';
import toast from 'react-hot-toast';

import { useForm } from 'hooks/useForm';
import { theme } from 'styles/themes';
import {
	FlexBetweenContainer,
	Input,
	Logo,
	Typography,
	CatImage,
} from 'shared';
import {
	BreedList,
	Cat,
	CatGrid,
	Cats,
	Hero,
	HeroAndMostSearched,
	HeroContent,
	MostSearchedBreeds,
	Option,
	ShouldHaveCat,
	TextContainer,
	TextWithLine,
} from './Home.elements';
import { ArrowLink } from './ArrowLink';
import { mapBreedOptions, sliceBreeds } from 'helpers/index';
import { setActiveBreed } from 'actions/breeds';

export const Home = () => {
	const { breedData } = useSelector((state) => state.breeds);
	const dispatch = useDispatch();

	const history = useHistory();

	const [{ breedSearch }, handleInputChange] = useForm({
		breedSearch: '',
	});

	const [options, setOptions] = useState([]);
	const [mostSearched, setMostSearched] = useState([]);

	useEffect(() => {
		// Conseguimos las opciones para el input
		const options = mapBreedOptions(breedData);
		setOptions(options);

		// Obtenemos 4 breeds para MostSearchedBreeds
		setMostSearched(sliceBreeds(breedData, 4));
	}, [breedData]);

	const handleSearch = (e) => {
		e.preventDefault();

		const lowerCasedTrimedBread = breedSearch.toLowerCase().trim();

		const existsBreed = breedData.some(
			(breed) => breed.name.toLowerCase() === lowerCasedTrimedBread
		);

		if (!existsBreed) {
			toast.error("That breed doesn't exist");
			return;
		}

		const breed = breedData.find(
			(breed) => breed.name.toLowerCase() === lowerCasedTrimedBread
		);

		history.push(`/breeds/${breed.id}`);
	};

	const handleCatClick = (breed) => {
		history.push(`/breeds/${breed.id}`);
		dispatch(setActiveBreed(breed));
	};

	return (
		<>
			<HeroAndMostSearched>
				<Hero>
					<HeroContent>
						<Logo color="white" width="15rem" margin="0" />

						<Typography color="#fff" as="h3">
							Get to know more about your cat breed
						</Typography>

						<form onSubmit={handleSearch}>
							<Input
								name="breedSearch"
								value={breedSearch}
								onChange={handleInputChange}
								on
								placeholder="Enter your breed"
								Icon={AiOutlineSearch}
							/>
							<BreedList>
								{options.map(({ name, id }) => (
									<Option key={id} value={name} />
								))}
							</BreedList>
						</form>
					</HeroContent>
				</Hero>

				<MostSearchedBreeds>
					<TextWithLine mb="2.5rem" distance="-0.62rem" bottom>
						Most Searched Breeds
					</TextWithLine>

					<FlexBetweenContainer mb="2rem" gap="1.5rem">
						<Typography fz={theme.fz['600']} fw="700" as="h3">
							66+ Breeds For you to discover
						</Typography>

						<ArrowLink text="See more" align="center" />
					</FlexBetweenContainer>

					<Cats>
						{mostSearched.map((breed) => (
							<Cat key={breed.id} onClick={() => handleCatClick(breed)}>
								<CatImage src={breed.image.url} height="15vw" mb=".75rem" />
								<Typography fz={theme.fz['200']} fw="600">
									{breed.name}
								</Typography>
							</Cat>
						))}
					</Cats>
				</MostSearchedBreeds>
			</HeroAndMostSearched>

			<ShouldHaveCat as="section">
				<TextContainer>
					<TextWithLine
						distance="-0.62rem"
						top
						fz={theme.fz['700']}
						fw="700"
						as="h2"
					>
						Why should you have a cat?
					</TextWithLine>

					<Typography>
						Having a cat around you can actually trigger the release of calming
						chemicals in your body which lower your stress and anxiety leves
					</Typography>

					<ArrowLink text="View all breeds" />
				</TextContainer>

				<CatGrid>
					<CatImage src="images/image-1.png" />
					<CatImage src="images/image-3.png" />
					<CatImage src="images/image-2.png" />
				</CatGrid>
			</ShouldHaveCat>
		</>
	);
};
