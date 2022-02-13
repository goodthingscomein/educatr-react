import React from 'react';
import { ColorTypes } from '../../type-declarations/styled';

// Import styles
import { GradientBackgroundContainer } from './gradient-container.styles';

// Component Props Interface
type Props = {
  children?: React.ReactNode;
  gradientColor1: ColorTypes;
  gradientColor2: ColorTypes;
  gradientColor3: ColorTypes;
};

// Render Component
const GradientContainer: React.FC<Props> = ({ children, gradientColor1, gradientColor2, gradientColor3 }) => (
  <GradientBackgroundContainer
    gradientColor1={gradientColor1}
    gradientColor2={gradientColor2}
    gradientColor3={gradientColor3}
  >
    {children}
  </GradientBackgroundContainer>
);

export default GradientContainer;
