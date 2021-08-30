import styled from 'styled-components';

export const CatImage = styled.img.attrs((props) => ({
	src: props.src,
	alt: props.alt || 'cat',
}))`
	display: inline-block;
	width: 100%;
	object-fit: cover;
	border-radius: 24px;
	height: ${({ height }) => height || 'auto'};
	margin-bottom: ${({ mb }) => mb || '0rem'};
`;
