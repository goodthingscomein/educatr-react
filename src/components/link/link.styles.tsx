import styled, {css} from 'styled-components';
import {ColorTypes, FontSizes, FontWeight} from '../../type-declarations/styled';

// Link props
interface LinkTextProps {
  color: ColorTypes;
  hoverColor: ColorTypes;
  underlineEffect?: 'never' | 'hover' | 'always';
  fontSize?: FontSizes;
  fontWeight?: FontWeight;

  // Padding
  horizontalMargin?: number;
  verticalMargin?: number;
}

// Underline CSS styles
const UnderlineStyles = css<LinkTextProps>`
  border-bottom: 2px solid;
  ${(props) => (props.underlineEffect === 'never' ? 'border: none' : '')};
`;

export const LinkText = styled.a<LinkTextProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.verticalMargin || 0}px ${(props) => props.horizontalMargin || 0}px;
  padding: 0;
  color: ${(props) => props.theme.getColor(props.color)};
  text-decoration: none;
  font-size: ${(props) => props.theme.getFontSize(props.fontSize || 'medium')};
  font-weight: ${(props) => props.fontWeight || 400};
  ${UnderlineStyles};
  border-color: ${(props) =>
    props.underlineEffect === 'always' ? props.theme.getColor(props.color) : props.theme.colors.transparent};
  cursor: pointer;
  width: fit-content;

  // Hover effects
  :hover {
    color: ${(props) => props.theme.getColor(props.hoverColor)};
    border-color: ${(props) => props.theme.getColor(props.hoverColor)};
  }
`;
