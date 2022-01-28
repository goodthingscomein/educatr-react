import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
`;

export const DrawerContainer = styled.div`
  flex: 0 0 480px;
`;

export const MainContainer = styled.div`
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow-y: scroll;
  scrollbar-width: none;
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0 10%;
  background-color: ${(props) => props.theme.themeColors.black};
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
`;

export const AllContentContainer = styled.div`
  width: 100%;
  flex: 1 0 0;
  height: fit-content;
  background-color: ${(props) => props.theme.themeColors.white};
`;

export const ContentSelectionBar = styled.div`
  width: 100%;
  flex: 0 0 0;
  padding: 40px 40px 0;
  display: flex;
  box-shadow: 0 4px 6px ${(props) => props.theme.themeColors.shadow};
`;

export const ContentContainer = styled.div`
  width: 100%;
  flex: 0 0 0;
  height: fit-content;
  padding: 40px;
`;
