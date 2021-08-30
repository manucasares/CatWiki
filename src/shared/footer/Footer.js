import React from 'react';

import { Logo } from 'shared/logo/Logo';
import { Typography } from 'shared/Typography';
import { theme } from 'styles/themes';
import { FooterContainer, User } from './Footer.elements';

export const Footer = () => {
	return (
		<FooterContainer as="footer">
			<Logo color="white" width="10rem" margin="0" />
			<Typography color="white" fz={theme.fz['200']} align="center">
				© created by <User>Manuel Casares</User> - devChallenge.io 2021
			</Typography>
		</FooterContainer>
	);
};
