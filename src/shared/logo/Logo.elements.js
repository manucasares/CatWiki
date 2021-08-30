import styled from 'styled-components';

export const LogoImg = styled.img.attrs((props) => ({
	src:
		props.color === 'white'
			? 'https://res.cloudinary.com/dalpbowt0/image/upload/v1630366290/React-Image-Uploader/ixkwlo2ifvrxgkgahtho.svg'
			: 'https://res.cloudinary.com/dalpbowt0/image/upload/v1630366252/React-Image-Uploader/rdn9etl8x8yxiddeo67f.svg',
	alt: 'logo wikicat',
}))`
	display: inline-block;
	margin: ${({ margin }) => margin || '2rem 0'};
	width: ${({ width }) => width || '7.5rem'};
`;
