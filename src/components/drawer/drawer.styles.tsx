import styled from 'styled-components';

// Drawer Container Props
type DrawerContainerProps = {
  isDrawerOpen?: boolean;
  padding?: string;
};

export const DrawerContainer = styled.div<DrawerContainerProps>`
  position: fixed;
  margin: 0;
  z-index: 11;
  padding: ${(props) => props.padding || 0};
  height: 100vh;
  width: ${(props) => (props.isDrawerOpen ? props.theme.drawer.drawerOpenWidth : props.theme.drawer.drawerClosedWidth)};
  background-color: ${(props) => props.theme.themeColors.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  box-shadow: 4px 0 6px ${(props) => props.theme.themeColors.shadow};
  transition: 0.2s;
`;
