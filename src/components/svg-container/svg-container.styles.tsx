import styled from 'styled-components';

// SVG Styles Container Props
interface SvgStylesContainerProps {
	posTranslate?: string;
	scalePercent?: number;
}

export const SvgStylesContainer = styled.div<SvgStylesContainerProps>`
	min-width: 100%;
	min-height: 100%;
	position: relative;
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: visible;

	svg {
		transform: scale(${(props) => props.scalePercent || 100}%) translate(${(props) => props.posTranslate || 0});
		position: absolute;
		top: 0;
		left: 0;
		z-index: 999;
	}
`;
