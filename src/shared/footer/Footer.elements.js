import styled from 'styled-components';
import { Container } from 'shared/Container';

export const FooterContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	gap: 2rem;
	align-items: center;
	background: black;
	// Footer always bottom
	margin-top: auto;
	border-radius: 2.625rem 2.625rem 0 0;
	padding: 2rem 2.5rem;

	@media ${({ theme }) => theme.mediaQueries.below768} {
		flex-direction: column;
		padding: 0.85 1.2rem;
	}
`;

export const User = styled.a.attrs(() => ({
	href: 'https://github.com/manucasares',
	target: '_blank',
	rel: 'noopener noreferrer',
}))`
	text-decoration: underline;
	font-weight: 700;
`;
