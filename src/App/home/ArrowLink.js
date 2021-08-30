import React from 'react';

import { Typography } from 'shared';
import { theme } from 'styles/themes';
import { ArrowLinkContainer } from './ArrowLink.elements';
import { Arrow } from './Home.elements';

export const ArrowLink = ({ text }) => {
	return (
		<ArrowLinkContainer>
			<Typography
				color={theme.colors.dark_opacity}
				fw="700"
				fz={theme.fz['200']}
			>
				{text}
			</Typography>
			<Arrow />
		</ArrowLinkContainer>
	);
};
