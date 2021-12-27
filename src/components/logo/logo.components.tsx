import React from 'react';

// Import styles
import { LogoTextColor } from './logo.styles';

// Import custom components
import HeadingText from '../heading/heading.components';

// Component Props Interface
type Props = {
	variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	firstColor: 'primary' | 'textDark' | 'white' | 'black';
	secondColor: 'primary' | 'textDark' | 'white' | 'black';
};

// Render Component
const Logo: React.FC<Props> = ({ variant, firstColor, secondColor }) => (
	<HeadingText variant={variant} color='black'>
		<LogoTextColor color={firstColor}>data</LogoTextColor>
		<LogoTextColor color={secondColor}>fluence</LogoTextColor>
	</HeadingText>
);

export default Logo;
