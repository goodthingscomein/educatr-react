import styled from 'styled-components';
import {ColorTypes, FontSizes, FontWeight} from '../../type-declarations/styled';

// Button Props
type ButtonContainerProps = {
  size: FontSizes;
  fontWeight?: FontWeight;

  backgroundColor: ColorTypes;
  hoverBackgroundColor: ColorTypes;

  outlineColor: ColorTypes;
  hoverOutlineColor: ColorTypes;

  textColor: ColorTypes;
  hoverTextColor: ColorTypes;

  maxWidth?: boolean;

  verticalPadding?: number;
  horizontalPadding?: number;
};

// Render Button
export const ButtonContainer = styled.a<ButtonContainerProps>`
  // Standard CSS properties
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.verticalPadding ?? 8}px ${(props) => props.horizontalPadding ?? 24}px;
  outline: none;
  text-decoration: none;
  font-weight: ${(props) => props.fontWeight ?? 400};
  transition: 0.1s;
  user-select: none;
  cursor: pointer;
  width: ${(props) => (props.maxWidth ? '100%' : 'fit-content')};

  // Font size based on button size
  font-size: ${(props) => props.theme.getFontSize(props.size)};

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
`;
