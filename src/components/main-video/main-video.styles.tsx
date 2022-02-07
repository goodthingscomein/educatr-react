import styled from 'styled-components';

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
