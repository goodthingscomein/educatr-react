import styled, { css } from 'styled-components';

// Darken Screen Container Props
type DarkenScreenContainerProps = {
  displaying?: boolean;
};

const DisplayingStyles = css`
  background-color: ${(props) => props.theme.themeColors.darkShadow};
  pointer-events: auto;
`;

export const DarkenScreenContainer = styled.div<DarkenScreenContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.2s;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  pointer-events: none;
  ${(props) => props.displaying && DisplayingStyles};
`;
