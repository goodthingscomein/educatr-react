import styled from 'styled-components';

// App bar container props
interface AppBarContainerProps {
  horizontalMargin?: number;
}

export const AppBarContainer = styled.div<AppBarContainerProps>`
  display: flex;
  flex-direction: row;
  margin: 0 ${(props) => props.horizontalMargin || 0}px;
`;
