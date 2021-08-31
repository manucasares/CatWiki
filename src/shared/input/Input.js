import React from 'react';

import { InputContainer, InputElement } from './Input.elements';

export const Input = ({ Icon, onChange, value, name }) => {
	return (
		<InputContainer>
			<InputElement
				onChange={onChange}
				value={value}
				name={name}
				placeholder="Enter your breed"
			/>

			{Icon && <Icon />}
		</InputContainer>
	);
};
