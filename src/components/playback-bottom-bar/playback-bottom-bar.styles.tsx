import styled from 'styled-components';

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
