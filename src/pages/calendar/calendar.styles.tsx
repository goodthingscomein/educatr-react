import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
`;

export const DrawerContentContainer = styled.div`
  flex: 1 0 0;
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  scrollbar-width: thin;
`;

export const ButtonsGroupContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ContentContainer = styled.div`
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  background-color: ${(props) => props.theme.themeColors.white};
`;
