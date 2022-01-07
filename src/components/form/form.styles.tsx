import styled from 'styled-components';

export const FormContainer = styled.form`
	background-color: ${(props) => props.theme.themeColors.transparent};
	margin: 0;
	padding: 0;
	min-width: 100%;
	min-height: 100%;
	display: flex;
	flex-direction: column;
`;
