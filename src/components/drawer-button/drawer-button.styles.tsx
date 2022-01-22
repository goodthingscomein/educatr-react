import styled, { css } from 'styled-components';
import { ColorTypes, FontSizes, FontWeight } from '../../type-declarations/styled';

// Drawer Button Container Props
type DrawerButtonContainerProps = {
	textColor: ColorTypes;
	hoverTextColor: ColorTypes;
	size?: FontSizes;
	fontWeight?: FontWeight;
	selected?: boolean;
	isDrawerOpen: boolean;
};

const SelectedStyles = css<DrawerButtonContainerProps>`
	color: ${(props) => props.theme.getColor(props.hoverTextColor)};
	background-color: ${(props) => props.theme.themeColors.darken};
`;

const HoverStyles = css<DrawerButtonContainerProps>`
	:hover {
		color: ${(props) => props.theme.getColor(props.hoverTextColor)};
		background-color: ${(props) => props.theme.themeColors.lighten};
	}
`;

export const DrawerButtonContainer = styled.a<DrawerButtonContainerProps>`
	width: 100%;
	padding: 12px 30px;
	color: ${(props) => props.theme.getColor(props.textColor)};
	font-size: ${(props) => props.theme.getFontSize(props.size || 'medium')};
	font-weight: ${(props) => props.fontWeight || 400};
	background-color: ${(props) => props.theme.themeColors.transparent};
	text-decoration: none;
	border: none;
	display: flex;
	justify-content: ${(props) => (props.isDrawerOpen ? 'flex-start' : 'center')};
	align-items: center;
	transition: 0.2s;

	${(props) => (props.selected ? SelectedStyles : HoverStyles)}
`;
