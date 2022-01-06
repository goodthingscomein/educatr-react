import React from 'react';
import { ColorTypes } from '../../type-declarations/styled';

// Import styles
import { SectionContainer } from './section.styles';

// Component Props Interface
type Props = {
	children?: React.ReactNode;

	// Standard background color
	backgroundColor?: ColorTypes;

	// Image background
	imgUrl?: string;
	imgDarken?: number;

	// Gradient background color
	hasGradientBackground?: boolean;
	gradientColor1?: ColorTypes;
	gradientColor2?: ColorTypes;
	gradientColor3?: ColorTypes;

	// Section Padding
	padding?: string;
	hasColumns?: boolean;
	minHeight?: string;

	// Hero Section for landing page
	isHeroSection?: boolean;

	// Inset box shadow at top of section
	hasBoxShadow?: boolean;
};

// Render Component
const Section: React.FC<Props> = ({
	children,

	// Standard background
	backgroundColor,

	// Background image
	imgUrl,
	imgDarken,

	// Background gradient
	hasGradientBackground,
	gradientColor1,
	gradientColor2,
	gradientColor3,

	// Padding
	padding,
	hasColumns,
	minHeight,

	// Hero section
	isHeroSection,
}) => (
	<SectionContainer
		backgroundColor={backgroundColor}
		imgUrl={imgUrl}
		imgDarken={imgDarken}
		hasGradientBackground={hasGradientBackground}
		gradientColor1={gradientColor1}
		gradientColor2={gradientColor2}
		gradientColor3={gradientColor3}
		padding={padding}
		hasColumns={hasColumns}
		minHeight={minHeight}
		isHeroSection={isHeroSection}>
		{children}
	</SectionContainer>
);

export default Section;
