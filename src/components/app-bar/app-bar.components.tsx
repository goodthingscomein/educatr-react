import * as React from 'react';

// Import styles
import { AppBarContainer } from './app-bar.styles';

// Props to be passed into component
type Props = {
	children?: React.ReactNode;
	color: 'primary' | 'textDark' | 'transparent';
};

const AppBar: React.FC<Props> = ({ children, color }) => {
	return <AppBarContainer color={color}>{children}</AppBarContainer>;
};

export default AppBar;
