import styled from 'styled-components';

export const BottomBarContainer = styled.div`
  flex: 0 0 0;
  display: flex;
  flex-direction: row;
  padding: 20px 40px;
  background-color: ${(props) => props.theme.themeColors.lightGrey};
  border-top: 1px solid ${(props) => props.theme.themeColors.borderColor};
  align-items: flex-end;
`;

export const InputFieldContainer = styled.div`
  align-self: center;
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
