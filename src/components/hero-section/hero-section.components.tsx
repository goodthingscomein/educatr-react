import React from 'react';
import {ColorTypes} from '../../type-declarations/styled';

// Import styles
import {HeroContainer} from './hero-section.styles';

// Component Props Interface
type Props = {
  children?: React.ReactNode;
  backgroundColor?: ColorTypes;
  imgUrl?: string;
  imgDarken?: number;
};

// Render Component
const HeroSection: React.FC<Props> = ({children, backgroundColor, imgUrl, imgDarken}) => (
  <HeroContainer backgroundColor={backgroundColor} imgUrl={imgUrl} imgDarken={imgDarken}>
    {children}
  </HeroContainer>
);

export default HeroSection;
