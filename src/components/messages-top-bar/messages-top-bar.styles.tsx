import styled from 'styled-components';

export const TopBarContainer = styled.div`
  flex: 0 0 70px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.themeColors.white};
  padding: 10px 40px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: fit-content;
  justify-content: center;
  align-items: center;
`;
