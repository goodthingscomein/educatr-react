import styled, { css } from 'styled-components';

// Top Bar props
type TopBarContainerProps = {
  backgroundColor: 'white' | 'textDark' | 'primary' | 'primaryAccent';
  hasShadow?: boolean;
};

const ShadowStyles = css`
  box-shadow: 0 2px 8px ${(props) => props.theme.themeColors.shadow};
`;

export const TopBarContainer = styled.div<TopBarContainerProps>`
  width: 100%;
  height: 60px;
  flex: 0 0 60px;
  padding: 0 40px;
  background-color: ${(props) => props.theme.getColor(props.backgroundColor)};
  ${(props) => props.hasShadow && ShadowStyles}
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;
