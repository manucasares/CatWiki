import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { TextContainer } from 'App/home/Home.elements';
import { Spinner, Typography } from 'shared';
import { theme } from 'styles/themes';
import { ListItemImage, TopTenItem, TopTenList } from './Breeds.elements';

export const Breeds = () => {
	const { breedData } = useSelector((state) => state.breeds);
	const { loading } = useSelector((state) => state.ui);

	if (loading) {
		return <Spinner />;
	}

	return (
		<main className="animate__animated animate__fadeIn">
			<Typography as="h2" fw="700" fz={theme.fz['500']} mb="3rem">
				All breeds
			</Typography>

			<TopTenList>
				{breedData.map((breed, idx) => (
					<TopTenItem key={breed.id} gap="2.5rem">
						<ListItemImage src={breed.image?.url} width="15vw" />

						<TextContainer gap="1.3rem" as="h3">
							<Typography fw="700" fz={theme.fz['500']}>
								{idx + 1}. {breed.name}
							</Typography>

							<Typography>{breed.description}</Typography>
						</TextContainer>
					</TopTenItem>
				))}
			</TopTenList>
		</main>
	);
};
