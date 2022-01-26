import styled from 'styled-components';
import { ColorTypes, FontSizes, FontWeight, SocialColorTypes } from '../../type-declarations/styled';

// Link props
interface LinkTextProps {
  color: ColorTypes;
  hoverColor: ColorTypes | SocialColorTypes;
  underlineEffect?: 'never' | 'hover' | 'always';
  fontSize?: FontSizes;
  fontWeight?: FontWeight;

  // Padding
  margin?: string;
  verticalMargin?: number;
}

export const LinkText = styled.a<LinkTextProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin || '0 0'};
  padding: 0;
  color: ${(props) => props.theme.getColor(props.color)};
  text-decoration: none;
  font-size: ${(props) => props.theme.getFontSize(props.fontSize || 'medium')};
  font-weight: ${(props) => props.fontWeight || 400};
  border: 2px solid ${(props) => props.theme.themeColors.transparent};
  border-bottom-color: ${(props) =>
    props.underlineEffect === 'always' ? props.theme.getColor(props.color) : props.theme.themeColors.transparent};
  cursor: pointer;
  width: fit-content;
  white-space: nowrap;
  user-select: none;

  // Hover effects
  :hover {
    color: ${(props) => props.theme.getColor(props.hoverColor)};
    border-bottom-color: ${(props) =>
      props.underlineEffect === 'hover' || props.underlineEffect === 'always'
        ? props.theme.getColor(props.hoverColor)
        : props.theme.themeColors.transparent};
  }
`;
