import styled from 'styled-components';

export const ArrowLinkContainer = styled.div`
	display: flex;
	cursor: pointer;
	& > p {
		position: relative;
		text-transform: uppercase;
	}

	& > p::before {
		content: '';
		position: absolute;
		bottom: -5px;
		width: 100%;
		height: 2px;
		transition: all ${({ theme }) => theme.transition.regular} ease;
	}

	&:hover p::before {
		background-color: ${({ theme }) => theme.colors.dark_opacity};
	}

	& > svg {
		transition: transform 0.3s ease;
	}

	&:hover > svg {
		transform: translateX(55%);
	}
`;
