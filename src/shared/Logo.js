import styled from 'styled-components';

export const Logo = styled.img.attrs((props) => ({
	src:
		props.color === 'white'
			? 'images/CatwikiLogoWhite.svg'
			: 'images/CatwikiLogo.svg',
	alt: 'logo wikicat',
}))`
	display: inline-block;
	margin: 2rem 0;
	width: ${({ width }) => width || '7.5rem'};
`;
