import React from 'react';
import {ColorTypes} from '../../type-declarations/styled';

// Import styles
import {ButtonContainer} from './button.styles';

// All typings of different button types
interface ButtonSharedProps {
  size: 'small' | 'medium' | 'large';
  textColor: ColorTypes;
  hoverTextColor: ColorTypes;
  activeTextColor: ColorTypes;
}

interface SolidButtonProps extends ButtonSharedProps {
  variant: 'solid';
  size: 'small' | 'medium' | 'large';
  backgroundColor: ColorTypes;
  hoverBackgroundColor: ColorTypes;
  activeBackgroundColor: ColorTypes;
  outlineColor: ColorTypes;
  hoverOutlineColor: ColorTypes;
  activeOutlineColor: ColorTypes;
}
interface OutlineButtonProps extends ButtonSharedProps {
  variant: 'outline';
  size: 'small' | 'medium' | 'large';
  outlineColor: ColorTypes;
  hoverOutlineColor: ColorTypes;
  activeOutlineColor: ColorTypes;
}
interface TextButtonProps extends ButtonSharedProps {
  variant: 'text';
  size: 'small' | 'medium' | 'large';
}

// Component Props Interface
type Props = SolidButtonProps | OutlineButtonProps | TextButtonProps;

// Render Component
const Button: React.FC<Props> = ({children, ...otherProps}) => {
  switch (otherProps.variant) {
    case 'solid':
      return (
        <ButtonContainer
          // Button visuals
          size={otherProps.size}
          backgroundColor={otherProps.backgroundColor}
          hoverBackgroundColor={otherProps.hoverBackgroundColor}
          activeBackgroundColor={otherProps.activeBackgroundColor}
          outlineColor={otherProps.outlineColor}
          hoverOutlineColor={otherProps.hoverOutlineColor}
          activeOutlineColor={otherProps.activeOutlineColor}
          textColor={otherProps.textColor}
          hoverTextColor={otherProps.hoverTextColor}
          activeTextColor={otherProps.activeTextColor}
        >
          {children}
        </ButtonContainer>
      );
    case 'outline':
      return (
        <ButtonContainer
          size={otherProps.size}
          backgroundColor='transparent'
          hoverBackgroundColor='transparent'
          activeBackgroundColor='transparent'
          outlineColor={otherProps.outlineColor}
          hoverOutlineColor={otherProps.hoverOutlineColor}
          activeOutlineColor={otherProps.activeOutlineColor}
          textColor={otherProps.textColor}
          hoverTextColor={otherProps.hoverTextColor}
          activeTextColor={otherProps.activeTextColor}
        >
          {children}
        </ButtonContainer>
      );
    case 'text':
      return (
        <ButtonContainer
          size={otherProps.size}
          backgroundColor='transparent'
          hoverBackgroundColor='transparent'
          activeBackgroundColor='transparent'
          outlineColor='transparent'
          hoverOutlineColor='transparent'
          activeOutlineColor='transparent'
          textColor={otherProps.textColor}
          hoverTextColor={otherProps.hoverTextColor}
          activeTextColor={otherProps.activeTextColor}
        >
          {children}
        </ButtonContainer>
      );
  }
};

export default Button;
