import styled from 'styled-components';

export const TopBarContainer = styled.div`
  flex: 0 0 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  border-bottom: 1px solid ${(props) => props.theme.themeColors.borderColor};
`;
