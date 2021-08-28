import styled from 'styled-components';

export const InputContainer = styled.span`
	position: relative;

	& > svg {
		position: absolute;
		top: 50%;
		right: 0.95rem;
		transform: translateY(-50%);
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
	background: '#fff';
	border: none;
	padding: 1.2rem 0.95rem;
	border-radius: 59px;
	min-width: 300px;
	width: 43%;
	outline: none;

	&::placeholder {
		color: ${({ theme }) => theme.colors.dark};
	}
`;
