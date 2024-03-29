import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  overflow: hidden;
`;

export const Drawer = styled.div`
  flex: 0 0 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  border-right: 1px solid ${(props) => props.theme.themeColors.borderColor};
`;

export const DrawerHeader = styled.div`
  flex: 0 0 0;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid ${(props) => props.theme.themeColors.darken};
`;

export const DrawerContent = styled.div`
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: auto;
  scrollbar-width: thin;
`;

export const ButtonsGroupContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ContentContainer = styled.div`
  height: 100%;
  flex: 1 0 0;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const MessagesContainer = styled.div`
  flex: 1 1 0;
  width: 100%;
  overflow-y: scroll;
  scrollbar-width: thin;
  padding: 12px 80px 12px 24px;
  display: flex;
  flex-direction: column-reverse;
  background-color: ${(props) => props.theme.themeColors.white};
`;
