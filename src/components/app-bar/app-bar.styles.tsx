import styled from 'styled-components';

// To add props
interface AppBarContainerProps {
	color: 'primary' | 'textDark' | 'transparent';
}

export const AppBarContainer = styled.div<AppBarContainerProps>`
	width: 100%;
	height: ${(props) => props.theme.appBar.appBarHeight};
	background-color: ${(props) => {
		switch (props.color) {
			case 'primary':
				return props.theme.colors.primary;
			case 'textDark':
				return props.theme.colors.textDark;
			case 'transparent':
				return props.theme.colors.transparent;
		}
	}};

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0 40px;
`;
