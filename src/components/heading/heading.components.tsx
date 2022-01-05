import React from 'react';
import {ColorTypes} from '../../type-declarations/styled';

import {H1, H2, H3, H4, H5, H6} from './heading.styles';

// Component Props Interface
type Props = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; // Type of heading
  color: ColorTypes;
  children: React.ReactNode;
};

// Render Component
const HeadingText: React.FC<Props> = ({variant, color, children}) => {
  switch (variant) {
    case 'h1':
      return <H1 color={color}>{children}</H1>;
    case 'h2':
      return <H2 color={color}>{children}</H2>;
    case 'h3':
      return <H3 color={color}>{children}</H3>;
    case 'h4':
      return <H4 color={color}>{children}</H4>;
    case 'h5':
      return <H5 color={color}>{children}</H5>;
    case 'h6':
      return <H6 color={color}>{children}</H6>;
  }
};

export default HeadingText;
