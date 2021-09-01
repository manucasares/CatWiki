import styled from 'styled-components';
import { CatImage } from 'shared';

export const TopTenList = styled.main`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export const TopTenItem = styled.article`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	gap: 2.5rem;

	@media ${({ theme }) => theme.mediaQueries.below768} {
		flex-direction: column-reverse;
	}
`;

export const ListItemImage = styled(CatImage)`
	width: clamp(150px, 15vw, 350px);
	height: clamp(150px, 15vw, 350px);
`;
