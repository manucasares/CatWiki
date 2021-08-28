import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { Input, Logo, Typography } from 'shared';
import { Hero, HomeContainer } from './Home.elements';

export const Home = () => {
	return (
		<HomeContainer>
			<Hero>
				<Logo color="white" width="15rem" />

				<Typography color="#fff">
					Get to know more about your cat breed
				</Typography>

				<Input placeholder="Enter your breed" Icon={AiOutlineSearch} />
			</Hero>
		</HomeContainer>
	);
};
