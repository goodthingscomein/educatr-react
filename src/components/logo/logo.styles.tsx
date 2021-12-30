import styled from 'styled-components';

// To add props
interface LogoTextColorProps {
  color: 'primary' | 'textDark' | 'white' | 'black';
}

export const LogoTextColor = styled.span<LogoTextColorProps>`
  color: ${(props) => props.theme.getColor(props.color)};
  text-transform: uppercase;
  font-weight: 700;
`;
