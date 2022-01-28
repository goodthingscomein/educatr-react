import styled from 'styled-components';

export const HeaderContainer = styled.div`
  flex: 0 0 160px;
  padding: 0 10%;
  background-color: ${(props) => props.theme.themeColors.white};
  display: flex;
  flex-direction: column-reverse;
  box-shadow: 0 4px 6px ${(props) => props.theme.themeColors.shadow};
  z-index: 1;
`;
