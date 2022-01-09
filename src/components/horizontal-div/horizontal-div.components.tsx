import React from 'react';
import { ColorTypes } from '../../type-declarations/styled';

// Import styles
import { HorizontalContainer } from './horizontal-div.styles';

// Component Props Interface
type Props = {
	children?: React.ReactNode;
	backgroundColor: ColorTypes;
	justifyContent?: string;
	alignItems?: string;
	css?: string;
};

// Render Component
const HorizontalDiv: React.FC<Props> = ({ children, backgroundColor, justifyContent, alignItems, css }) => (
	<HorizontalContainer
		backgroundColor={backgroundColor}
		justifyContent={justifyContent}
		alignItems={alignItems}
		css={css}>
		{children}
	</HorizontalContainer>
);

export default HorizontalDiv;
