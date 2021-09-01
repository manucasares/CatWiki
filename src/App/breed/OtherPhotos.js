import React from 'react';

import { CatImage, Typography } from 'shared';
import { theme } from 'styles/themes';
import { Photos } from './Breed.elements';

export const OtherPhotos = ({ images }) => {
	return (
		<section>
			<Typography fz={theme.fz['500']} fw="600" mb="2rem">
				Other photos
			</Typography>

			<Photos>
				{images.map((img) => (
					<CatImage key={img} src={img} />
				))}
			</Photos>
		</section>
	);
};
