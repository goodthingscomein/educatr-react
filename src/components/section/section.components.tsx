import React from 'react';
import {ColorTypes} from '../../type-declarations/styled';

// Import styles
import {SectionContainer} from './section.styles';

// Component Props Interface
type Props = {
  children?: React.ReactNode;
  backgroundColor?: ColorTypes;
  imgUrl?: string;
  imgDarken?: number;

  // Section Padding
  horizontalPadding?: number;
  verticalPadding?: number;
  hasColumns?: boolean;

  // Hero Section for landing page
  isHeroSection?: boolean;

  // Inset box shadow at top of section
  hasBoxShadow?: boolean;
};

// Render Component
const Section: React.FC<Props> = ({
  children,
  backgroundColor,
  imgUrl,
  imgDarken,

  // Padding
  horizontalPadding,
  verticalPadding,
  hasColumns,

  // Hero section
  isHeroSection,

  // Inset box shadow at top of section
  hasBoxShadow,
}) => (
  <SectionContainer
    backgroundColor={backgroundColor}
    imgUrl={imgUrl}
    imgDarken={imgDarken}
    horizontalPadding={horizontalPadding}
    verticalPadding={verticalPadding}
    hasColumns={hasColumns}
    isHeroSection={isHeroSection}
    hasBoxShadow={hasBoxShadow}
  >
    {children}
  </SectionContainer>
);

export default Section;
