import styled from 'styled-components';

export const CatImage = styled.img.attrs((props) => ({
	src: props.src,
	alt: props.alt || 'cat',
}))`
	position: relative;
	display: inline-block;
	object-fit: cover;
	border-radius: 24px;
	width: ${({ width }) => width || '100%'};
	height: ${({ height }) => height || 'auto'};
	margin-bottom: ${({ mb }) => mb || '0rem'};
`;
