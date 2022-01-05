import styled from 'styled-components';
import {ColorTypes, FontSizes, FontWeight} from '../../type-declarations/styled';

// Heading props
interface CopyTextProps {
  size: FontSizes;
  fontWeight: FontWeight;
  color: ColorTypes;
}

export const CopyTextStyles = styled.p<CopyTextProps>`
  text-decoration: none;
  margin: 0;
  color: ${(props) => props.theme.getColor(props.color)};
  font-size: ${(props) => props.theme.getFontSize(props.size)};
  font-weight: ${(props) => props.fontWeight};
  line-height: 120%;
`;
