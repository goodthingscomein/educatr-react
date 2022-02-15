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

export const VideoEntireOverlayContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  pointer-events: none;
`;

export const VideoTitleContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 8px 20px;
  background: linear-gradient(
    ${(props) => props.theme.themeColors.black} 0%,
    ${(props) => props.theme.themeColors.transparent} 100%
  );
  pointer-events: auto;
`;
