import styled from 'styled-components';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Typography } from 'shared';

export const HomeContainer = styled.main`
	border-radius: 24px;
	overflow: hidden;
`;

export const Hero = styled.section`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2rem;
	padding: 5rem 3.5rem;
	background: url('images/HeroImagelg.png') no-repeat center center / cover;

	& > * {
		margin: 0;
	}
`;

export const MostSearchedBreeds = styled.section`
	background-color: ${({ theme }) => theme.colors.platinum};
	padding: 2rem 3.5rem;
`;

export const TextWithLine = styled(Typography)`
	&::before {
		content: '';
		position: absolute;
		bottom: -10px;
		width: 4.5rem;
		height: 3px;
		border-radius: 70px;
		background-color: ${({ theme }) => theme.colors.very_dark_brown};
	}
`;

export const Arrow = styled(FaLongArrowAltRight)`
	color: ${({ theme }) => theme.colors.dark_opacity};
	right: -25px;
`;

export const Cats = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;
`;

export const Cat = styled.div`
	width: 15vw;
	/* max-width: 23%; */
`;

export const CatImage = styled.div`
	background: url(${({ src }) => src}) no-repeat center center / cover;
	border-radius: 24px;
	height: 15vw;
	margin-bottom: 0.75rem;
`;
