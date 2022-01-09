import React from 'react';

// Import styles
import { DividerContainer } from './divider.styles';

// Component Props Interface
type Props = {
	color: 'light' | 'dark';
	margin?: string;
};

// Render Component
const Divider: React.FC<Props> = ({ color, margin }) => <DividerContainer color={color} margin={margin} />;

export default Divider;
