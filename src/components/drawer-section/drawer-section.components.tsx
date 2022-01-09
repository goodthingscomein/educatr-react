import React from 'react';
import { ColorTypes } from '../../type-declarations/styled';

// Import styles
import { DrawerSectionContainer } from './drawer-section.styles';

// Component Props Interface
type Props = {
	children?: React.ReactNode;
	backgroundColor: ColorTypes;
	padding?: string;
	flexDirection?: string;
	justifyContent?: string;
	alignItems?: string;
};

// Render Component
const DrawerSection: React.FC<Props> = ({
	children,
	backgroundColor,
	padding,
	flexDirection,
	justifyContent,
	alignItems,
}) => (
	<DrawerSectionContainer
		backgroundColor={backgroundColor}
		padding={padding}
		flexDirection={flexDirection}
		justifyContent={justifyContent}
		alignItems={alignItems}>
		{children}
	</DrawerSectionContainer>
);

export default DrawerSection;
