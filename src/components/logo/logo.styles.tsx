import styled from 'styled-components';

// To add props
interface LogoTextColorProps {
	color: 'primary' | 'textDark' | 'white' | 'black';
}

export const LogoTextColor = styled.span<LogoTextColorProps>`
	color: ${(props) => {
		switch (props.color) {
			case 'primary':
				return props.theme.colors.primary;
			case 'textDark':
				return props.theme.colors.textDark;
			case 'white':
				return props.theme.colors.white;
			case 'black':
				return props.theme.colors.black;
		}
	}};
	text-transform: uppercase;
	font-weight: 700;
`;
