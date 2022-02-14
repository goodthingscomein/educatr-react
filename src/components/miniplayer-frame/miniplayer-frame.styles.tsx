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
  bottom: calc(50px);
  height: fit-content;
  width: 480px;
  border: 2px solid ${(props) => props.theme.themeColors.textDark};
  border-bottom: none;
  display: ${(props) => (props.isDisplaying ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
