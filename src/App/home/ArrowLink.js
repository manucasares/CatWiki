import React from 'react';
import { useHistory } from 'react-router-dom';

import { Typography } from 'shared';
import { theme } from 'styles/themes';
import { ArrowLinkContainer } from './ArrowLink.elements';
import { Arrow } from './Home.elements';

export const ArrowLink = ({ text, align, to = '/topten' }) => {
	const history = useHistory();

	return (
		<ArrowLinkContainer onClick={() => history.push(`${to}`)}>
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
