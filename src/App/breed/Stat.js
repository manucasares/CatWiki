import React from 'react';

import { Bar, PropertyName, StatProperty, StatsBars } from './Breed.elements';

const barsArr = [1, 2, 3, 4, 5];

export const Stat = ({ name = '', points = 1 }) => {
	return (
		<StatProperty>
			<PropertyName>{name}:</PropertyName>
			<StatsBars>
				{barsArr.map((bar, idx) => (
					<Bar key={bar} filled={idx + 1 <= points} />
				))}
			</StatsBars>
		</StatProperty>
	);
};
