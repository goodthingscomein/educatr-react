import React from 'react';
import { ColorTypes, FontSizes, SocialColorTypes, FontWeight } from '../../type-declarations/styled';

// Import styles
import { LinkText } from './link.styles';

// Component Props Interface
type Props = {
  children: React.ReactNode;

  // Text decoration
  color: ColorTypes;
  hoverColor?: ColorTypes | SocialColorTypes;
  underlineEffect?: 'never' | 'hover' | 'always';
  fontSize?: FontSizes;
  fontWeight?: FontWeight;

  // Margin
  margin?: string;

  // Function
  clickAction?: () => unknown;
};

// Render Component
const Link: React.FC<Props> = ({
  children,
  color,
  hoverColor,
  underlineEffect,
  fontSize,
  fontWeight,
  margin,
  clickAction,
}) => (
  <LinkText
    color={color}
    hoverColor={hoverColor || color}
    underlineEffect={underlineEffect}
    fontSize={fontSize}
    fontWeight={fontWeight}
    margin={margin}
    onClick={
      clickAction
        ? (event) => {
            event.stopPropagation();
            clickAction();
          }
        : undefined
    }
  >
    {children}
  </LinkText>
);

export default Link;
