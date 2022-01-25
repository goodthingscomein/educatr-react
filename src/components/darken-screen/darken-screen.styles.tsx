import styled, { css } from 'styled-components';

// Darken Screen Container Props
type DarkenScreenContainerProps = {
  displaying?: boolean;
};

const DisplayingStyles = css`
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px); // not firefox...
`;

export const DarkenScreenContainer = styled.div<DarkenScreenContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${(props) => props.displaying && DisplayingStyles};
  transition: 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
