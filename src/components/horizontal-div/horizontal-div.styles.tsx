import styled from 'styled-components';
import { ColorTypes } from '../../type-declarations/styled';

// Import shared styling
import { SharedStyleProps, SharedCssStyles } from '../component-styles';

// Props
interface HorizontalContainerProps extends SharedStyleProps {
	backgroundColor: ColorTypes;
	width?: string;
	height?: string;
	padding?: string;
	margin?: string;
	justifyContent?: string;
	alignItems?: string;
}

export const HorizontalContainer = styled.div<HorizontalContainerProps>`
	width: ${(props) => props.width || 'fit-content'};
	height: ${(props) => props.height || 'fit-content'};
	padding: ${(props) => props.padding || 0};
	margin: ${(props) => props.margin || 0};
	background-color: ${(props) => props.theme.getColor(props.backgroundColor)};
	display: flex;
	flex-direction: row;
	justify-content: ${(props) => props.justifyContent || 'flex-start'};
	align-items: ${(props) => props.alignItems || 'center'};
	${SharedCssStyles}
`;
