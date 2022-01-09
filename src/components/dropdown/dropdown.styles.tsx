import styled from 'styled-components';
import { ColorTypes } from '../../type-declarations/styled';

// Import shared styling
import { SharedStyleProps, SharedCssStyles } from '../component-styles';

// Props
interface DropdownContainerProps extends SharedStyleProps {
	backgroundColor: ColorTypes;
}

export const DropdownRelativePosition = styled.div`
	position: relative;
	width: 0;
	height: 0;
`;

export const DropdownAbsoluteContainer = styled.div<DropdownContainerProps>`
	position: absolute;
	background-color: ${(props) => props.theme.getColor(props.backgroundColor)};
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	z-index: 998;
	${SharedCssStyles};
	width: fit-content;
	height: fit-content;
`;
