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

export const ButtonsGroupContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const DrawerContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

// // Notes Drawer Button props

// export const NotesDrawerButton = styled.a`
//   width: 100%;
//   height: 48px;
//   padding: 0 20px;
//   border-bottom: 1px solid ${(props) => props.theme.themeColors.borderColor};
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

export const ContentContainer = styled.div`
  height: 100%;
  flex: 1 0 0;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const BreadcrumbsTopBarContainer = styled.div`
  flex: 0 0 0;
  padding: 0 40px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.themeColors.primary};
`;

export const NotesContentContainer = styled.div`
  width: 100%;
  flex: 1 0 0;
  padding: 24px 40px;
  background-color: ${(props) => props.theme.themeColors.white};
  display: flex;
  flex-direction: column;
  overflow: scroll;
  scrollbar-width: thin;
`;

export const NotesHeaderContainer = styled.div`
  width: 100%;
  flex: 0 0 100px;
  padding: 0 40px;
  border-bottom: 1px solid ${(props) => props.theme.themeColors.borderColor};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;
