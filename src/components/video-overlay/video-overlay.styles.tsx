import styled, { css } from 'styled-components';

// Overlay props
type VideoInteractionContainerProps = {
  isDisplaying?: boolean;
  showShadow?: boolean;
};

const ShadowBackgroundStyles = css`
  background: linear-gradient(
    ${(props) => props.theme.themeColors.transparent} 0%,
    ${(props) => props.theme.themeColors.black} 100%
  );
`;

export const VideoInteractionContainer = styled.div<VideoInteractionContainerProps>`
  width: 100%;
  padding: 20px 20px 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  ${(props) => props.showShadow && ShadowBackgroundStyles}
  cursor: pointer;
  pointer-events: auto;
  transition: opacity ease-out 0.2s;
  opacity: ${(props) => (props.isDisplaying ? 1 : 0)};

  :hover {
    opacity: 1;
  }
`;

export const VideoInteractionItemsRowContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const VideoButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const VideoMiddleButtonsContainer = styled.div`
  width: 100%;
  font-size: 460%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VideoSliderContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

export const VideoTimeSlider = styled.input`
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

export const VideoVolumeSlider = styled.input`
  overflow: hidden;
  display: block;
  appearance: none;
  width: 80px;
  height: 4px;
  background: ${(props) => props.theme.themeColors.transparent};
  outline: none;
  margin-left: 4px;
  cursor: pointer;

  // Change the track colors
  // Firefox
  &::-moz-range-track,
  &::-moz-range-progress {
    width: 100%;
    height: 4px;
    background: ${(props) => props.theme.themeColors.white}40;
  }
  &::-moz-range-progress {
    background: ${(props) => props.theme.themeColors.white};
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
