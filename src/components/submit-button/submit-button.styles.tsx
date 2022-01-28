import styled from 'styled-components';
import { ColorTypes, FontSizes, FontWeight } from '../../type-declarations/styled';

// Submit Button Props
type SubmitButtonContainerProps = {
  size: FontSizes;
  fontWeight?: FontWeight;

  backgroundColor: ColorTypes;
  hoverBackgroundColor: ColorTypes;

  textColor: ColorTypes;
  hoverTextColor: ColorTypes;

  padding?: string;
};

export const SubmitButtonContainer = styled.button<SubmitButtonContainerProps>`
  // Standard CSS properties
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: ${(props) => props.padding ?? '8px 24px'};
  outline: none;
  text-decoration: none;
  font-weight: ${(props) => props.fontWeight ?? 400};
  transition: 0.1s;
  user-select: none;
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  cursor: pointer;
  min-width: 100%;

  // Font size based on button size
  font-size: ${(props) => props.theme.getFontSize(props.size)};

  // Default colors
  color: ${(props) => props.theme.getColor(props.textColor)};
  background-color: ${(props) => props.theme.getColor(props.backgroundColor)};

  // Hover effects
  :hover {
    color: ${(props) => props.theme.getColor(props.hoverTextColor)};
    background-color: ${(props) => props.theme.getColor(props.hoverBackgroundColor)};
  }
`;
