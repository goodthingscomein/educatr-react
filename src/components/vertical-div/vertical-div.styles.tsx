import styled from 'styled-components';
import { ColorTypes } from '../../type-declarations/styled';

// Import shared styling
import { SharedStyleProps, SharedCssStyles } from '../component-styles';

// Side Nav Container Props
interface VerticalContainerProps extends SharedStyleProps {
	backgroundColor: ColorTypes;
	width?: string;
	height?: string;
	padding?: string;
	margin?: string;
	justifyContent?: string;
	alignItems?: string;
}

export const VerticalContainer = styled.div<VerticalContainerProps>`
	background-color: ${(props) => props.theme.getColor(props.backgroundColor)};
	display: flex;
	flex-direction: column;
	justify-content: ${(props) => props.justifyContent || 'flex-start'};
	align-items: ${(props) => props.alignItems || 'center'};
	${SharedCssStyles};
`;
