import styled from 'styled-components';

// Top Bar props
type TopBarContainerProps = {
  backgroundColor: 'white' | 'textDark' | 'primary' | 'primaryAccent';
};

export const TopBarContainer = styled.div<TopBarContainerProps>`
  width: 100%;
  height: 60px;
  flex: 0 0 60px;
  padding: 0 40px;
  background-color: ${(props) => props.theme.getColor(props.backgroundColor)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
