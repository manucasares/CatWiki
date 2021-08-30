import React from 'react';

import { Typography } from 'shared';
import { theme } from 'styles/themes';
import { ArrowLinkContainer } from './ArrowLink.elements';
import { Arrow } from './Home.elements';

export const ArrowLink = ({ text, align }) => {
	return (
		<ArrowLinkContainer>
			<Typography
				color={theme.colors.dark_opacity}
				fw="700"
				fz={theme.fz['200']}
				align={align || 'left'}
			>
				{text}
			</Typography>
			<Arrow />
		</ArrowLinkContainer>
	);
};
