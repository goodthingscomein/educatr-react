import styled from 'styled-components';

export const CardContainer = styled.div`
  height: fit-content;
  padding: 40px;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.themeColors.white};
`;
