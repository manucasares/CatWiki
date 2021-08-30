import React from 'react';

import { CatImage, Typography } from 'shared';
import { theme } from 'styles/themes';
import { Photos } from './Breed.elements';

const fakePhotos = [
	{
		id: 1,
		src: 'images/image-1.png',
	},
	{
		id: 2,
		src: 'images/image-1.png',
	},
	{
		id: 3,
		src: 'images/image-1.png',
	},
	{
		id: 4,
		src: 'images/image-1.png',
	},
	{
		id: 5,
		src: 'images/image-1.png',
	},
	{
		id: 6,
		src: 'images/image-1.png',
	},
	{
		id: 7,
		src: 'images/image-1.png',
	},
	{
		id: 8,
		src: 'images/image-1.png',
	},
];

export const OtherPhotos = () => {
	return (
		<section>
			<Typography fz={theme.fz['500']} fw="600" mb="2rem">
				Other photos
			</Typography>

			<Photos>
				{fakePhotos.map((photo) => (
					<CatImage
						key={photo.id}
						src={
							'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/01_%C2%BFQu%C3%A9-puedo-hacer-si-mi-gato-est%C3%A1-triste-.png?itok=w67Nhubc'
						}
					/>
				))}
			</Photos>
		</section>
	);
};
