import styled from 'styled-components';

export const SearchBarContainer = styled.input`
	width: 100%;
	height: fit-content;
	background-color: ${(props) => props.theme.themeColors.white};
	color: ${(props) => props.theme.themeColors.textDark};
	::placeholder {
		color: ${(props) => props.theme.themeColors.textLight};
	}
`;
