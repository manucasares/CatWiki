import styled from 'styled-components';
import { FlexBetweenContainer } from 'shared/position/FlexBetween';

export const FooterContainer = styled(FlexBetweenContainer)`
	background: black;
	margin-top: 3rem;
	border-radius: 2.625rem 2.625rem 0 0;
	padding: 0.85rem 2.5rem;

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
