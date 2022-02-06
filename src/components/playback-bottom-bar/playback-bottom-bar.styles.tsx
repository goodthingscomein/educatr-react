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

export const MiniplayerInteractionItemsRowContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MiniplayerInteractionContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 12px 12px 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.themeColors.darkShadow};
  opacity: 0;
  transition: 0.2s linear 0.5s;
  :hover {
    opacity: 1;
  }
  :hover ${MiniplayerInteractionItemsRowContainer} {
    display: flex;
  }
`;

export const MiniplayerButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MiniplayerMiddleButtonsContainer = styled.div`
  width: 100%;
  font-size: 300%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MiniplayerSliderContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

export const MiniplayerTimeSlider = styled.input`
  overflow: hidden;
  display: block;
  appearance: none;
  width: 100%;
  height: 12px;
  background: ${(props) => props.theme.themeColors.transparent};
  outline: none;
  opacity: 0.7;
  margin: 0;
  cursor: pointer;

  :hover {
    opacity: 1;
  }

  :focus {
    outline: none;
  }

  // Firefox
  &::-moz-range-track,
  &::-moz-range-progress {
    width: 100%;
    height: 12px;
    background: ${(props) => props.theme.themeColors.white};
  }
  &::-moz-range-progress {
    background: ${(props) => props.theme.themeColors.primary};
  }

  // Turn off the slider
  &::-webkit-slider-thumb {
    appearance: none;
    background-color: ${(props) => props.theme.themeColors.transparent};
    outline: none;
    border: none;
  }
  // Firefox
  &::-moz-range-thumb {
    appearance: none;
    background-color: ${(props) => props.theme.themeColors.transparent};
    outline: none;
    border: none;
  }
  // Edge
  &::-ms-thumb {
    appearance: none;
    background-color: ${(props) => props.theme.themeColors.transparent};
    outline: none;
    border: none;
  }
`;

////
////
////
////
////
////
////
////

/*
  Playback bar
*/
export const BarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: ${(props) => props.theme.drawer.drawerClosedWidth};
  height: 50px;
  width: calc(100% - ${(props) => props.theme.drawer.drawerClosedWidth});
  background-color: ${(props) => props.theme.themeColors.textDark};
  z-index: 2;
`;

export const BarPaddingContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 4px 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ShowBarButton = styled.a`
  position: fixed;
  bottom: 0;
  left: ${(props) => props.theme.drawer.drawerClosedWidth};
  height: 50px;
  width: 24px;
  font-size: 80%;
  color: ${(props) => props.theme.themeColors.white};
  background-color: ${(props) => props.theme.themeColors.textDark};
  border-radius: 0 ${(props) => props.theme.borderRadius} ${(props) => props.theme.borderRadius} 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  :hover {
    color: ${(props) => props.theme.themeColors.primaryAccent};
  }
`;

export const HideBarButton = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 24px;
  font-size: 80%;
  color: ${(props) => props.theme.themeColors.white};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    color: ${(props) => props.theme.themeColors.primaryAccent};
  }
`;

export const CloseBarButton = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50px;
  font-size: 80%;
  color: ${(props) => props.theme.themeColors.white};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    color: ${(props) => props.theme.themeColors.primaryAccent};
  }
`;

export const PlaybackButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;
