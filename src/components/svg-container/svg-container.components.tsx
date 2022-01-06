import React from 'react';

// Import styles
import { SvgStylesContainer } from './svg-container.styles';

// Component Props Interface
type Props = {
	children?: JSX.Element | JSX.Element[];
	posTranslate?: string;
	scalePercent?: number;
};

// Render Component
const SvgContainer: React.FC<Props> = ({ children, posTranslate, scalePercent }) => (
	<SvgStylesContainer posTranslate={posTranslate} scalePercent={scalePercent}>
		{children}
	</SvgStylesContainer>
);

export default SvgContainer;
