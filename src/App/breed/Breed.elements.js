import { FlexBetweenContainer } from 'shared';
import styled from 'styled-components';

export const BreedInfoContainer = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	gap: 4rem;
	margin-bottom: 3rem;

	@media ${({ theme }) => theme.mediaQueries.below768} {
		flex-direction: column;
		gap: 1rem;
	}
`;

export const BreedInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
`;

export const PropertyWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
`;

export const PropertyName = styled.p`
	font-weight: 700;
	color: black;
`;

export const PropertyValue = styled.p`
	font-weight: 500;
	color: black;
`;

export const StatProperty = styled(PropertyWrapper)`
	justify-content: space-between;
`;

export const StatsBars = styled(FlexBetweenContainer)``;

export const Bar = styled.div`
	background: ${({ theme, filled }) =>
		filled ? theme.colors.dark_brown : theme.colors.light_gray};
	border-radius: 8px;
	width: 3.75rem;
	height: 0.75rem;

	@media ${({ theme }) => theme.mediaQueries.below768} {
		height: 0.5rem;
		width: 2rem;
	}
`;

export const Photos = styled.div`
	display: grid;
	grid-gap: 1.5rem;
	grid-template-columns: repeat(4, 1fr);
	@media ${({ theme }) => theme.mediaQueries.below768} {
		grid-template-columns: repeat(2, 1fr);
	}
`;
