import styled from 'styled-components';

export const FlexBetweenContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: ${({ gap }) => gap};
	margin-bottom: ${({ mb }) => mb};
`;
