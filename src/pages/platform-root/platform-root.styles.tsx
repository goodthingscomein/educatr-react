import styled from 'styled-components';

export const PlatformRootPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ContentPaddingContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: ${(props) => props.theme.appBar.appBarHeight};
  padding-left: 60px;
`;

export const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
