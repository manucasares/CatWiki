import styled from 'styled-components';

export const HomeContainer = styled.main`
	border-radius: 24px;
	overflow: hidden;
`;

export const Hero = styled.section`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2rem;
	padding: 5rem 3rem;
	background: url('images/HeroImagelg.png') no-repeat center center / cover;

	& > * {
		margin: 0;
	}
`;
