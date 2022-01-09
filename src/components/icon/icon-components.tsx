import React from 'react';

// Import styles
import { IconContainer } from './icon-styles';

// Component Props Interface
type Props = {
	children?: React.ReactNode;
	padding?: string;
	margin?: string;
};

// Render Component
const Icon: React.FC<Props> = ({ children, padding, margin }) => (
	<IconContainer padding={padding} margin={margin}>
		{children}
	</IconContainer>
);

export default Icon;
