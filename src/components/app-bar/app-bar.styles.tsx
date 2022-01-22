import styled from 'styled-components';
import { ColorTypes } from '../../type-declarations/styled';

// To add props
interface AppBarContainerProps {
	color: ColorTypes;
	padding?: string;
	justifyContent?: string;
}

export const AppBarContainer = styled.div<AppBarContainerProps>`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 5;
	width: 100%;
	height: ${(props) => props.theme.appBar.appBarHeight};
	background-color: ${(props) => props.theme.getColor(props.color)};
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: ${(props) => props.justifyContent || 'space-between'};
	padding: ${(props) => props.padding || '0 40px'};
`;
