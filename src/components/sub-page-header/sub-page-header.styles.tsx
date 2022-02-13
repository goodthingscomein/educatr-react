import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0 10%;
  background-color: ${(props) => props.theme.themeColors.white};
  box-shadow: 0 4px 6px ${(props) => props.theme.themeColors.shadow};
  flex: 0 0 140px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 1;
`;

export const BottomRowContainer = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RightSideButtonsContainer = styled.div`
  display: flex;
`;

export const BackButtonContainer = styled.div`
  position: absolute;
  top: 0;
  left: 2rem;
  transform: translateY(50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;
