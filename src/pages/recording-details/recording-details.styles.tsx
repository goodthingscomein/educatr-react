import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
`;

export const AppBarContainer = styled.div`
  flex: 0 0 60px;
  padding: 0;
  background-color: ${(props) => props.theme.themeColors.textDark};
  border-bottom: 1px solid ${(props) => props.theme.themeColors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainVideoContainer = styled.div`
  width: 100%;
  max-height: calc(85vh);
  background-color: ${(props) => props.theme.themeColors.textDark};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackButtonContainer = styled.div`
  padding: 0 12px;
  margin-right: 12px;
  border-right: 1px solid ${(props) => props.theme.themeColors.lighten};
  display: flex;
  justify-content: center;
  align-items: center;
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
  scrollbar-width: thin;
`;

export const AppBarSectionContainer = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
  align-items: center;
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0 10%;
  background-color: ${(props) => props.theme.themeColors.textDark};
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
  padding: 0 40px;
  border-bottom: 1px solid ${(props) => props.theme.themeColors.borderColor};
  display: flex;
`;

export const OverviewContentContainer = styled.div`
  width: 100%;
  flex: 0 0 0;
  height: fit-content;
  padding: 20px 40px 40px;
`;

export const OverviewUnderHeadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const RatingButtonsContainer = styled.div`
  display: flex;
`;

export const SubContentContainer = styled.div`
  width: 100%;
  flex: 0 0 0;
  height: fit-content;
  padding: 20px 40px 40px;
`;

export const HashtagsContainer = styled.div`
  display: flex;
  user-select: none;
`;
