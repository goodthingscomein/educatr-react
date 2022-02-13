import styled from 'styled-components';

export const PlatformRootPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background-color: ${(props) => props.theme.themeColors.lightGrey};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ContentPaddingContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: ${(props) => props.theme.appBar.appBarHeight};
  padding-left: ${(props) => props.theme.drawer.drawerClosedWidth};
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
