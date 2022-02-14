import styled from 'styled-components';

// Video container props
type VideoContainerProps = {
  isDisplayingCursor?: boolean;
};

export const VideoAndOverlayContainer = styled.div<VideoContainerProps>`
  position: relative;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.themeColors.textDark};
  cursor: ${(props) => (props.isDisplayingCursor ? 'pointer' : 'none')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VideoContainer = styled.video`
  height: 100%;
  width: 100%;
`;
