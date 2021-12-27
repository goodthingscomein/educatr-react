import React from 'react';

// Import styles
import { SolidButton, OutlineButton, TextButton } from './button.styles';

// Component Props Interface
type Props = {
	children?: React.ReactNode;
	variant: 'solid' | 'outline' | 'text';
	color: 'primary' | 'textDark' | 'accent' | 'white' | 'black';
};

// Render Component
const Button: React.FC<Props> = ({ children, variant, color }) => {
	switch (variant) {
		case 'solid':
			return <SolidButton color={color}>{children}</SolidButton>;
		case 'outline':
			return <OutlineButton color={color}>{children}</OutlineButton>;
		case 'text':
			return <TextButton color={color}>{children}</TextButton>;
	}
};

export default Button;
