import styled from 'styled-components';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { FlexBetweenContainer, Typography } from 'shared';

export const HeroAndMostSearched = styled.main`
	border-radius: 24px;
	overflow: hidden;
	margin-bottom: 4rem;
`;

export const Hero = styled.section`
	padding: 5rem 3.5rem;
	background: url('images/HeroImagelg.png') no-repeat center center / cover;
`;

export const HeroContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2rem;
	width: max(200px, 65%);
`;

export const MostSearchedBreeds = styled.section`
	background-color: ${({ theme }) => theme.colors.platinum};
	padding: 2rem 3.5rem;
`;

export const TextWithLine = styled(Typography)`
	&::before {
		content: '';
		position: absolute;
		top: ${({ top, distance }) => top && distance};
		bottom: ${({ bottom, distance }) => bottom && distance};
		width: 4.5rem;
		height: 3px;
		border-radius: 70px;
		background-color: ${({ theme }) => theme.colors.very_dark_brown};
	}
`;

export const Arrow = styled(FaLongArrowAltRight)`
	color: ${({ theme }) => theme.colors.dark_opacity};
	margin-left: 0.8rem;
`;

export const Cats = styled.section`
	/* display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	gap: 2rem; */

	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 2rem;

	@media ${({ theme }) => theme.mediaQueries.below768} {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: repeat(2, 1fr);
	}
`;

export const Cat = styled.div`
	width: 15vw;
`;

export const ShouldHaveCat = styled(FlexBetweenContainer)`
	gap: 1.5rem;

	& > * {
		width: 45%;
	}
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${({ gap }) => gap || '2.5rem'};
`;

export const CatGrid = styled.div`
	display: grid;
	grid-gap: 1rem;
	grid-template-rows: repeat(3, auto);
	grid-template-columns: repeat(5, auto);

	& > img:first-child {
		//  row start, column start, row end, column end
		grid-area: 1/1/2/4;
	}

	& > img:nth-child(2) {
		grid-area: 2/2/4/4;
	}

	& > img:last-child {
		grid-area: 1/4/3/6;
	}
`;
