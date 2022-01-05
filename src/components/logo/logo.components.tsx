import React from 'react';

// Import styles
import {LogoLink, LogoTextColor} from './logo.styles';

// Import custom components
import HeadingText from '../heading/heading.components';
import {ColorTypes} from '../../type-declarations/styled';

// Component Props Interface
type Props = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  firstColor: ColorTypes;
  secondColor: ColorTypes;
  href?: string;
};

// Render Component
const Logo: React.FC<Props> = ({variant, firstColor, secondColor, href}) => (
  <LogoLink href={href}>
    <HeadingText variant={variant} color='black'>
      <LogoTextColor color={firstColor}>data</LogoTextColor>
      <LogoTextColor color={secondColor}>fluence</LogoTextColor>
    </HeadingText>
  </LogoLink>
);

export default Logo;
