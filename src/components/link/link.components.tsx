import React from 'react';
import {ColorTypes, FontSizes} from '../../type-declarations/styled';

// Import styles
import {LinkText} from './link.styles';

// Component Props Interface
type Props = {
  children: string;

  // Text decoration
  color: ColorTypes;
  hoverColor?: ColorTypes;
  underlineEffect?: 'never' | 'hover' | 'always';
  fontSize?: FontSizes;
  fontWeight?: 300 | 400 | 700;

  // Margin
  horizontalMargin?: number;
  verticalMargin?: number;

  // Function
  href?: string;
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
  horizontalMargin,
  verticalMargin,
  href,
  clickAction,
}) => (
  <LinkText
    color={color}
    hoverColor={hoverColor || color}
    underlineEffect={underlineEffect}
    fontSize={fontSize}
    fontWeight={fontWeight}
    horizontalMargin={horizontalMargin}
    verticalMargin={verticalMargin}
    href={href}
    onClick={clickAction ? () => clickAction() : undefined}
  >
    {children}
  </LinkText>
);

export default Link;
