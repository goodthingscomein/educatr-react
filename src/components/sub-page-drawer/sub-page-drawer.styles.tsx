import styled from 'styled-components';

export const DrawerContainer = styled.div`
  flex: 0 0 320px;
  background-color: ${(props) => props.theme.themeColors.transparent};
  border-right: 1px solid ${(props) => props.theme.themeColors.borderColor};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;
