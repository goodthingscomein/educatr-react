import styled from 'styled-components';

export const DrawerHeader = styled.div`
  flex: 0 0 0;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid ${(props) => props.theme.themeColors.darken};
`;
