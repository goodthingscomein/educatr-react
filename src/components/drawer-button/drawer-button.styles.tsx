import styled from 'styled-components';
import { ColorTypes, FontSizes, FontWeight } from '../../type-declarations/styled';

// Drawer Button Container Props
type DrawerButtonContainerProps = {
	textColor: ColorTypes;
	hoverTextColor: ColorTypes;
	size?: FontSizes;
	fontWeight?: FontWeight;
	isDrawerOpen: boolean;
};

export const DrawerButtonContainer = styled.a<DrawerButtonContainerProps>`
	width: 100%;
	padding: 12px 30px;
	color: ${(props) => props.theme.getColor(props.textColor)};
	font-size: ${(props) => props.theme.getFontSize(props.size || 'medium')};
	font-weight: ${(props) => props.fontWeight || 400};
	background-color: ${(props) => props.theme.themeColors.transparent};
	border: none;
	display: flex;
	justify-content: ${(props) => (props.isDrawerOpen ? 'flex-start' : 'center')};
	align-items: center;
	transition: 0.2s;

	:hover {
		color: ${(props) => props.theme.getColor(props.hoverTextColor)};
		background-color: rgba(255, 255, 255, 0.1);
	}
`;
