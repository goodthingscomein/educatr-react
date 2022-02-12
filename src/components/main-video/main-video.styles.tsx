import styled from 'styled-components';

// Video container props
type VideoContainerProps = {
  isDisplayingCursor?: boolean;
};

export const VideoContainer = styled.div<VideoContainerProps>`
  position: relative;
  width: 100%;
  background-color: ${(props) => props.theme.themeColors.textDark};
  cursor: ${(props) => (props.isDisplayingCursor ? 'pointer' : 'none')};
`;

export const Video = styled.video`
  width: 100%;
`;
