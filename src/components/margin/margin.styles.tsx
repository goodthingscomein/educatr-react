import styled from 'styled-components';

// Margin props
interface MarginProps {
  width?: string;
  height?: string;
}

export const MarginContainer = styled.div<MarginProps>`
  margin: 0;
  padding: 0;
  width: ${(props) => props.width || 0};
  height: ${(props) => props.height || 0};
  background-color: ${(props) => props.theme.themeColors.transparent};
`;
