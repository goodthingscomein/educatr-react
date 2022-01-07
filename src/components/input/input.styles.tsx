import styled from 'styled-components';

// Input field props
interface InputFieldProps {
	hasError?: boolean;
}

export const InputFieldContainer = styled.div`
	position: relative;
	display: inline-block;
	width: 100%;
	margin-bottom: 80px;
`;

export const InputField = styled.input<InputFieldProps>`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 2.6rem 5rem 1.5rem 1.4rem;
	background-color: ${(props) => props.theme.themeColors.transparent};
	color: ${(props) => props.theme.themeColors.textDark};
	font-size: ${(props) => props.theme.getFontSize('large')};
	/* border-radius: 12px; */
	border: 2px solid rgba(0, 0, 0, 0.3);
	outline: none;
	box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
	margin: 0;
	transition: 0.2s;
	:focus {
		border: 2px solid ${(props) => props.theme.themeColors.primary};
	}
`;

export const InputFieldLabel = styled.label<InputFieldProps>`
	position: absolute;
	left: 1rem;
	top: 0.5rem;
	padding: 0 0.5rem;
	color: ${(props) => props.theme.themeColors.textLight};
	font-size: ${(props) => props.theme.getFontSize('small')};
	cursor: text;
`;

export const PasswordHiddenToggleButton = styled.a`
	position: absolute;
	z-index: 998;
	height: 4.1rem;
	width: 4rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.themeColors.transparent};
	border-left: 2px solid rgba(0, 0, 0, 0.2);
	top: 0.1rem;
	right: 0.1rem;
	cursor: pointer;
	transition: 0.15s;
	:hover {
		background-color: ${(props) => props.theme.themeColors.lightGrey};
	}
`;

export const PasswordHiddenImageContainer = styled.img`
	position: relative;
	z-index: 999;
	height: 100%;
	width: 100%;
	background-color: ${(props) => props.theme.themeColors.transparent};
	border-left: 2px solid rgba(0, 0, 0, 0.2);
	top: 0.1rem;
	right: 0.1rem;
	cursor: pointer;
	transition: 0.15s;
	:hover {
		background-color: ${(props) => props.theme.themeColors.lightGrey};
	}
`;
