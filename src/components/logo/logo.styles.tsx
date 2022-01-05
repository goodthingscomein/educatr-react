import styled from 'styled-components';
import {ColorTypes} from '../../type-declarations/styled';

// To add props
interface LogoTextColorProps {
  color: ColorTypes;
}

export const LogoLink = styled.a`
  margin: 0;
  padding: 0;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const LogoTextColor = styled.span<LogoTextColorProps>`
  color: ${(props) => props.theme.getColor(props.color)};
  text-transform: uppercase;
  font-weight: 700;
`;
