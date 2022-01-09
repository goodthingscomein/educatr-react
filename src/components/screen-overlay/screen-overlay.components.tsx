import React from 'react';

// Import styles
import { ScreenOverlayContainer } from './screen-overlay.styles';

// Component Props Interface
type Props = {
	children?: React.ReactNode;
	backgroundDarken?: number;
};

// Render Component
const ScreenOverlay: React.FC<Props> = ({ children, backgroundDarken }) => (
	<ScreenOverlayContainer backgroundColor={`rgba(0, 0, 0, ${backgroundDarken})`}>{children}</ScreenOverlayContainer>
);

export default ScreenOverlay;
