import styled from 'styled-components';

// Margin props
interface MarginProps {
  height?: number;
}

export const MarginContainer = styled.div<MarginProps>`
  width: 100%;
  margin: 0;
  padding: 0;
  height: ${(props) => props.height ?? 24}px;
  background-color: ${(props) => props.theme.colors.transparent};
`;
