import styled from 'styled-components';
import {ColorTypes} from '../../type-declarations/styled';

// Button Props
type ButtonContainerProps = {
  size: 'small' | 'medium' | 'large';

  backgroundColor: ColorTypes;
  hoverBackgroundColor: ColorTypes;
  activeBackgroundColor: ColorTypes;

  outlineColor: ColorTypes;
  hoverOutlineColor: ColorTypes;
  activeOutlineColor: ColorTypes;

  textColor: ColorTypes;
  hoverTextColor: ColorTypes;
  activeTextColor: ColorTypes;
};

// Render Button
export const ButtonContainer = styled.a<ButtonContainerProps>`
  // Standard CSS properties
  padding: 6px 12px;
  outline: none;
  text-decoration: none;
  font-weight: 700;
  border-radius: 0.6em;

  // Font size based on button size
  font-size: ${(props) => {
    switch (props.size) {
      case 'small':
        return 70;
      case 'medium':
        return 85;
      case 'large':
        return 100;
    }
  }}%;

  // Transitions
  transition: color 0.1s, background-color 0.1s, border 0.1s;

  // Default colors
  color: ${(props) => props.theme.getColor(props.textColor)};
  background-color: ${(props) => props.theme.getColor(props.backgroundColor)};
  border: 2px solid ${(props) => props.theme.getColor(props.outlineColor)};

  // Hover effects
  :hover {
    color: ${(props) => props.theme.getColor(props.hoverTextColor)};
    background-color: ${(props) => props.theme.getColor(props.hoverBackgroundColor)};
    border: 2px solid ${(props) => props.theme.getColor(props.hoverOutlineColor)};
  }

  // Active effect
  :active {
    transition: color 0s, background-color 0s, border 0s;
    color: ${(props) => props.theme.getColor(props.activeTextColor)};
    background-color: ${(props) => props.theme.getColor(props.activeBackgroundColor)};
    border: 2px solid ${(props) => props.theme.getColor(props.activeOutlineColor)};
  }
  cursor: pointer;
`;
