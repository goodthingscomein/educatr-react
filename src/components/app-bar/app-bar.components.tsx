import * as React from 'react';
import { ColorTypes } from '../../type-declarations/styled';

// Import styles
import { AppBarRelativeContainer, AppBarContainer } from './app-bar.styles';

// Props to be passed into component
type Props = {
	children?: React.ReactNode;
	color: ColorTypes;
	padding?: string;
};

const AppBar: React.FC<Props> = ({ children, color, padding }) => {
	return (
		<AppBarRelativeContainer>
			<AppBarContainer color={color} padding={padding}>
				{children}
			</AppBarContainer>
		</AppBarRelativeContainer>
	);
};

export default AppBar;
