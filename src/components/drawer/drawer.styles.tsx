import styled from 'styled-components';

// Drawer Container Props
type DrawerContainerProps = {
	isDrawerOpen?: boolean;
	padding?: string;
};

export const DrawerContainer = styled.div<DrawerContainerProps>`
	position: relative;
	margin: 0;
	padding: ${(props) => props.padding || 0};
	height: 100vh;
	width: ${(props) => (props.isDrawerOpen ? '280px' : '80px')};
	background-color: ${(props) => props.theme.themeColors.textDark};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	box-shadow: 4px 0 6px rgba(0, 0, 0, 0.4);
`;
