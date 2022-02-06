import styled from 'styled-components';

/*
  Miniplayer
*/
type MiniplayerFrameProps = {
  isDisplaying?: boolean;
};

export const MiniplayerFrame = styled.div<MiniplayerFrameProps>`
  position: fixed;
  right: 24px;
  /* right: 400px; */
  bottom: calc(50px);
  height: fit-content;
  width: fit-content;
  border: 2px solid ${(props) => props.theme.themeColors.textDark};
  border-bottom: none;
  display: ${(props) => (props.isDisplaying ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

export const MiniplayerVideo = styled.video`
  width: 480px;
  height: auto;
`;
