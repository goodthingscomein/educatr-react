import React from 'react';
import { ColorTypes } from '../../type-declarations/styled';

// Import styles
import { VerticalContainer } from './vertical-div.styles';

// Component Props Interface
type Props = {
	children?: React.ReactNode;
	backgroundColor: ColorTypes;
	width?: string;
	height?: string;
	padding?: string;
	margin?: string;
	justifyContent?: string;
	alignItems?: string;
	css?: string;
};

// Render Component
const VerticalDiv: React.FC<Props> = ({
	children,
	backgroundColor,
	width,
	height,
	padding,
	margin,
	justifyContent,
	alignItems,
	css,
}) => (
	<VerticalContainer
		backgroundColor={backgroundColor}
		width={width}
		height={height}
		padding={padding}
		margin={margin}
		justifyContent={justifyContent}
		alignItems={alignItems}
		css={css}>
		{children}
	</VerticalContainer>
);

export default VerticalDiv;
