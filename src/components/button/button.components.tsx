import React from 'react';
import { ColorTypes, FontSizes, FontWeight } from '../../type-declarations/styled';

// Import styles
import { ButtonContainer } from './button.styles';

// All typings of different button types
interface ButtonSharedProps {
  size: FontSizes;
  fontWeight?: FontWeight;
  textColor: ColorTypes;
  hoverTextColor?: ColorTypes;

  entireWidth?: boolean;
  minWidth?: string;

  // Padding
  padding?: string;
  margin?: string;

  // Actions
  clickAction?: () => unknown;
}

interface SolidButtonProps extends ButtonSharedProps {
  variant: 'solid';
  backgroundColor: ColorTypes;
  hoverBackgroundColor?: ColorTypes;
  outlineColor?: ColorTypes;
  hoverOutlineColor?: ColorTypes;
}
interface OutlineButtonProps extends ButtonSharedProps {
  variant: 'outline';
  outlineColor?: ColorTypes;
  hoverOutlineColor?: ColorTypes;
}
interface TextButtonProps extends ButtonSharedProps {
  variant: 'text';
}

// Component Props Interface
type Props = SolidButtonProps | OutlineButtonProps | TextButtonProps;

// Render Component
const Button: React.FC<Props> = ({ children, clickAction, ...otherProps }) => {
  switch (otherProps.variant) {
    /*
      Solid styled button
    */
    case 'solid':
      return (
        <ButtonContainer
          /*
            Button Styling
          */
          size={otherProps.size}
          entireWidth={otherProps.entireWidth}
          minWidth={otherProps.minWidth}
          fontWeight={otherProps.fontWeight}
          backgroundColor={otherProps.backgroundColor}
          hoverBackgroundColor={otherProps.hoverBackgroundColor || otherProps.backgroundColor}
          outlineColor={otherProps.outlineColor || 'transparent'}
          hoverOutlineColor={otherProps.hoverOutlineColor || otherProps.outlineColor || 'transparent'}
          textColor={otherProps.textColor}
          hoverTextColor={otherProps.hoverTextColor || otherProps.textColor}
          /*
            Padding
          */
          padding={otherProps.padding}
          margin={otherProps.margin}
          /*
            On Click Functionality
          */
          onClick={clickAction ? () => clickAction() : undefined}
        >
          {children}
        </ButtonContainer>
      );
    /*
      Outlined styled button
    */
    case 'outline':
      return (
        <ButtonContainer
          /*
            Button Styling
          */
          size={otherProps.size}
          entireWidth={otherProps.entireWidth}
          minWidth={otherProps.minWidth}
          fontWeight={otherProps.fontWeight}
          backgroundColor='transparent'
          hoverBackgroundColor='transparent'
          outlineColor={otherProps.outlineColor || 'transparent'}
          hoverOutlineColor={otherProps.hoverOutlineColor || otherProps.outlineColor || 'transparent'}
          textColor={otherProps.textColor}
          hoverTextColor={otherProps.hoverTextColor || otherProps.textColor}
          /*
            Padding
          */
          padding={otherProps.padding}
          margin={otherProps.margin}
          /*
            On Click Functionality
          */
          onClick={clickAction ? () => clickAction() : undefined}
        >
          {children}
        </ButtonContainer>
      );
    /*
      Text styled button
    */
    case 'text':
      return (
        <ButtonContainer
          /*
            Button Styling
          */
          size={otherProps.size}
          entireWidth={otherProps.entireWidth}
          minWidth={otherProps.minWidth}
          fontWeight={otherProps.fontWeight}
          backgroundColor='transparent'
          hoverBackgroundColor='transparent'
          outlineColor='transparent'
          hoverOutlineColor='transparent'
          textColor={otherProps.textColor}
          hoverTextColor={otherProps.hoverTextColor || otherProps.textColor}
          /*
            Padding
          */
          padding={otherProps.padding}
          margin={otherProps.margin}
          /*
            On Click Functionality
          */
          onClick={clickAction ? () => clickAction() : undefined}
        >
          {children}
        </ButtonContainer>
      );
  }
};

export default Button;
