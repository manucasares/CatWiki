import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { theme } from 'styles/themes';
import { FlexBetweenContainer, Input, Logo, Typography } from 'shared';
import {
	Arrow,
	Cat,
	CatImage,
	Cats,
	Hero,
	HomeContainer,
	MostSearchedBreeds,
	TextWithLine,
} from './Home.elements';

const temporaryCatImages = [
	{
		id: 1,
		src: 'images/image-2.png',
		breed: 'Bengal',
	},
	{
		id: 2,
		src: 'images/image-2.png',
		breed: 'Savannah',
	},
	{
		id: 3,
		src: 'images/image-2.png',
		breed: 'Norwegian Forest Cat',
	},
	{
		id: 4,
		src: 'images/image-2.png',
		breed: 'Selkirk Rex',
	},
];

export const Home = () => {
	return (
		<HomeContainer>
			<Hero>
				<Logo color="white" width="15rem" />

				<Typography color="#fff" as="h3">
					Get to know more about your cat breed
				</Typography>

				<Input placeholder="Enter your breed" Icon={AiOutlineSearch} />
			</Hero>

			<MostSearchedBreeds>
				<TextWithLine mb="2.5rem">Most Searched Breeds</TextWithLine>

				<FlexBetweenContainer mb="2rem">
					<Typography fz={theme.fz['600']} fw="700" as="h3">
						66+ Breeds For you to discover
					</Typography>

					<FlexBetweenContainer gap=".5rem">
						<Typography
							color={theme.colors.dark_opacity}
							fw="700"
							fz={theme.fz['200']}
						>
							SEE MORE
						</Typography>
						<Arrow />
					</FlexBetweenContainer>
				</FlexBetweenContainer>

				<Cats>
					{temporaryCatImages.map((cat) => (
						<Cat key={cat.id}>
							<CatImage src={cat.src} />
							<Typography fz={theme.fz['200']} fw="600">
								{cat.breed}
							</Typography>
						</Cat>
					))}
				</Cats>
			</MostSearchedBreeds>
		</HomeContainer>
	);
};
