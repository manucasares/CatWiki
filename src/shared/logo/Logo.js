import React from 'react';
import { Link } from 'react-router-dom';

import { LogoImg } from './Logo.elements';

export const Logo = ({ color, margin }) => {
	return (
		<Link to="/home">
			<LogoImg color={color} margin={margin} />
		</Link>
	);
};
