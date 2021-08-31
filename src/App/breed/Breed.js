import React from 'react';

import { CatImage, Typography } from 'shared';
import { theme } from 'styles/themes';
import { BreedInfo, BreedInfoContainer } from './Breed.elements';
import { OtherPhotos } from './OtherPhotos';
import { Property } from './Property';
import { Stat } from './Stat';

export const Breed = () => {
	return (
		<>
			<BreedInfoContainer>
				<CatImage
					width="30vw"
					height="30vw"
					src="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/01_%C2%BFQu%C3%A9-puedo-hacer-si-mi-gato-est%C3%A1-triste-.png?itok=w67Nhubc"
				/>

				<BreedInfo>
					<Typography fw="700" fz={theme.fz['600']}>
						Bengal
					</Typography>

					<Typography>
						Bengals are a lot of fun to live with, but they're definitely not
						the cat for everyone, or for first-time cat owners. Extremely
						intelligent, curious and active, they demand a lot of interaction
						and woe betide the owner who doesn't provide it.
					</Typography>

					<Property
						name="Temperament"
						value="Alert, Agile, Energetic, Demanding, Intelligent"
					/>
					<Property name="Origin" value="United States" />
					<Property name="Life span" value="12 - 15 years" />

					<Stat name="Adaptability" points={5} />
					<Stat name="Affection level" points={5} />
					<Stat name="Child Friendly" points={4} />
					<Stat name="Grooming" points={1} />
					<Stat name="Intelligence" points={5} />
					<Stat name="Health issues" points={3} />
					<Stat name="Social needs" points={5} />
					<Stat name="Stranger friendly" points={3} />
				</BreedInfo>
			</BreedInfoContainer>

			<OtherPhotos />
		</>
	);
};
