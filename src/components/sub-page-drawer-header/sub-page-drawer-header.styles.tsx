import styled from 'styled-components';

export const DrawerHeaderContainer = styled.div`
  flex: 0 0 0;
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid ${(props) => props.theme.themeColors.darken};
`;
