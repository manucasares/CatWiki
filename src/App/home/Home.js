import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { theme } from 'styles/themes';
import {
	FlexBetweenContainer,
	Input,
	Logo,
	Typography,
	CatImage,
} from 'shared';
import {
	Cat,
	CatGrid,
	Cats,
	Hero,
	HeroAndMostSearched,
	HeroContent,
	MostSearchedBreeds,
	ShouldHaveCat,
	TextContainer,
	TextWithLine,
} from './Home.elements';

import { ArrowLink } from './ArrowLink';

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
		<>
			<HeroAndMostSearched>
				<Hero>
					<HeroContent>
						<Logo color="white" width="15rem" margin="0" />

						<Typography color="#fff" as="h3">
							Get to know more about your cat breed
						</Typography>

						<Input placeholder="Enter your breed" Icon={AiOutlineSearch} />
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
						{temporaryCatImages.map((cat) => (
							<Cat key={cat.id}>
								<CatImage src={cat.src} height="15vw" mb=".75rem" />
								<Typography fz={theme.fz['200']} fw="600">
									{cat.breed}
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

					<ArrowLink text="Read more" />
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
