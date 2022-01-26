import styled, { css } from 'styled-components';

// Darken Screen Container Props
type DarkenScreenContainerProps = {
  displaying?: boolean;
};

const DisplayingStyles = css`
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px); // not firefox...
  pointer-events: auto;
`;

export const DarkenScreenContainer = styled.div<DarkenScreenContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: background-color 0.2s, backdrop-filter 0.2s;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  pointer-events: none;
  ${(props) => props.displaying && DisplayingStyles};
`;
