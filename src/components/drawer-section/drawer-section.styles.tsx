import styled from 'styled-components';
import { ColorTypes } from '../../type-declarations/styled';

// Drawer Section Container Props
type DrawerSectionContainerProps = {
	backgroundColor: ColorTypes;
	padding?: string;
	flexDirection?: string;
	justifyContent?: string;
	alignItems?: string;
};

export const DrawerSectionContainer = styled.div<DrawerSectionContainerProps>`
	width: 100%;
	height: fit-content;
	background-color: ${(props) => props.theme.getColor(props.backgroundColor)};
	display: flex;
	margin: 0;
	padding: ${(props) => props.padding || '0'};
	flex-direction: ${(props) => props.flexDirection || 'column'};
	justify-content: ${(props) => props.justifyContent || 'center'};
	align-items: ${(props) => props.alignItems || 'center'};
`;
