import styled from 'styled-components';

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
  height: 8px;
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

  // Change the track colors
  // Firefox
  &::-moz-range-track,
  &::-moz-range-progress {
    width: 100%;
    height: 8px;
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
