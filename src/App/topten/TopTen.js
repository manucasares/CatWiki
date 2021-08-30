import React from 'react';

import { TextContainer } from 'App/home/Home.elements';
import { Typography } from 'shared';
import { theme } from 'styles/themes';
import { ListItemImage, TopTenItem, TopTenList } from './Topten.elements';

const fakeListItems = [
	{
		id: 0,
		breed: 'Bengal',
		img: 'images/image-1.png',
		desc: "Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it. ",
	},
	{
		id: 1,
		breed: 'Chartreux',
		img: 'images/image-1.png',
		desc: 'The Chartreux is generally silent but communicative. Short play sessions, mixed with naps and meals are their perfect day. Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly, sleep on your bed and snuggle with you if you’re not feeling well.',
	},
	{
		id: 2,
		breed: 'Khao Manee',
		img: 'images/image-1.png',
		desc: 'The Khao Manee is highly intelligent, with an extrovert and inquisitive nature, however they are also very calm and relaxed, making them an idea lap cat.',
	},
];

export const TopTen = () => {
	return (
		<>
			<Typography as="h2" fw="700" fz={theme.fz['500']} mb="3rem">
				Top 10 most searched breeds
			</Typography>

			<TopTenList>
				{fakeListItems.map((item, idx) => (
					<TopTenItem key={item.id} gap="2.5rem">
						<ListItemImage src={item.img} width="15vw" backOverlay />

						<TextContainer gap="1.3rem" as="h3">
							<Typography fw="700" fz={theme.fz['500']}>
								{idx + 1}. {item.breed}
							</Typography>

							<Typography>{item.desc}</Typography>
						</TextContainer>
					</TopTenItem>
				))}
			</TopTenList>
		</>
	);
};
