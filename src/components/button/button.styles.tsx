import styled, { css } from 'styled-components';

// To add props
interface ButtonProps {
	color: 'primary' | 'textDark' | 'accent' | 'white' | 'black';
}

// All button styles
const ButtonStyles = css`
	padding: 0.7em 1.4em;
	border: none;
	outline: none;
	text-decoration: none;
	border-radius: 0.6em;
	:active {
		box-shadow: inset 0 0.6em 2em -0.3em rgba(0, 0, 0, 0.15), inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
	}
	cursor: pointer;
`;

// Solid button
export const SolidButton = styled.button<ButtonProps>`
	// Import standard button styles
	${ButtonStyles}

	// Create variable of the selected color
  --selected-color: ${(props) => {
		switch (props.color) {
			case 'primary':
				return props.theme.colors.primary;
			case 'textDark':
				return props.theme.colors.textDark;
			case 'accent':
				return props.theme.colors.accent;
			case 'white':
				return props.theme.colors.white;
			case 'black':
				return props.theme.colors.black;
		}
	}};

	// Color of the text (inverted)
	color: ${(props) => {
		switch (props.color) {
			case 'primary':
				return props.theme.colors.white;
			case 'textDark':
				return props.theme.colors.white;
			case 'accent':
				return props.theme.colors.white;
			case 'white':
				return props.theme.colors.textDark;
			case 'black':
				return props.theme.colors.white;
		}
	}};

	// Custom button styles
	background-color: var(--selected-color);
	box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17), inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
		inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
`;

export const OutlineButton = styled.button<ButtonProps>`
	// Import standard button styles
	${ButtonStyles}

	// Create variable of the selected color
  --selected-color: ${(props) => {
		switch (props.color) {
			case 'primary':
				return props.theme.colors.primary;
			case 'textDark':
				return props.theme.colors.textDark;
			case 'accent':
				return props.theme.colors.accent;
			case 'white':
				return props.theme.colors.white;
			case 'black':
				return props.theme.colors.black;
		}
	}};

	// Color of the text
	color: var(--selected-color);

	// Custom button styles
	background-color: ${(props) => props.theme.colors.transparent};
	border: 3px solid var(--selected-color);
`;

export const TextButton = styled.button<ButtonProps>`
	// Import standard button styles
	${ButtonStyles}

	// Create variable of the selected color
  --selected-color: ${(props) => {
		switch (props.color) {
			case 'primary':
				return props.theme.colors.primary;
			case 'textDark':
				return props.theme.colors.textDark;
			case 'accent':
				return props.theme.colors.accent;
			case 'white':
				return props.theme.colors.white;
			case 'black':
				return props.theme.colors.black;
		}
	}};

	// Color of the text
	color: var(--selected-color);

	// Custom button styles
	background-color: ${(props) => props.theme.colors.transparent};
	border: none;
`;
