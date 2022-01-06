import styled from 'styled-components';
import { ColorTypes } from '../../type-declarations/styled';

// Bottom Shape Container Props
interface CardContainerProps {
	shapeColor: ColorTypes;
}

export const BottomShapeContainer = styled.div<CardContainerProps>`
	position: absolute;
	z-index: 999;
	bottom: 0;
	left: 0;
	width: 100%;
	overflow: hidden;
	line-height: 0;
	transform: rotate(180deg);

	svg {
		position: relative;
		display: block;
		width: calc(100% + 1.3px);
		height: 100px;
	}

	path {
		fill: ${(props) => props.theme.getColor(props.shapeColor)};
	}
`;
