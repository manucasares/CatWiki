import styled from 'styled-components';

export const InputContainer = styled.span`
	position: relative;
	max-width: 85%;

	& > svg {
		position: absolute;
		top: 50%;
		right: 0.95rem;
		transform: translateY(-50%);

		@media ${({ theme }) => theme.mediaQueries.below768} {
			display: none;
		}
	}
`;

export const InputElement = styled.input.attrs(
	({ type, placeholder, value, onChange, name }) => ({
		type: type || 'text',
		placeholder: placeholder,
		value: value,
		onChange: onChange,
		name: name,
	})
)`
	display: block;
	background: '#fff';
	border: none;
	padding: 1.2rem 0.95rem;
	border-radius: 59px;
	max-width: 100%;
	outline: none;

	&::placeholder {
		color: ${({ theme }) => theme.colors.dark};
	}
`;
