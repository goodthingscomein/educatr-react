import styled from 'styled-components';

export const InputContainer = styled.input`
	width: 100%;
	padding: 4px 12px;
	border: 1px solid ${(props) => props.theme.themeColors.borderColor};
	color: ${(props) => props.theme.themeColors.textDark};
	box-shadow: 0 2px 4px 0 ${(props) => props.theme.themeColors.shadow};
	outline: none;

	::placeholder {
		color: ${(props) => props.theme.themeColors.textLight};
		opacity: 1;
	}
`;
