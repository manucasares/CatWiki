import React from 'react';

import { InputContainer, InputElement } from './Input.elements';

export const Input = ({ Icon }) => {
	return (
		<InputContainer>
			<InputElement placeholder="Enter your breed" />

			{Icon && <Icon />}
		</InputContainer>
	);
};
