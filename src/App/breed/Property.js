import React from 'react';

import { PropertyName, PropertyValue, PropertyWrapper } from './Breed.elements';

export const Property = ({ name = '', value = '' }) => {
	return (
		<PropertyWrapper>
			<PropertyName>{name}:</PropertyName>
			<PropertyValue>{value}</PropertyValue>
		</PropertyWrapper>
	);
};
