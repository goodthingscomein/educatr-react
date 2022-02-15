import styled from 'styled-components';

type DrawerButtonProps = {
  selected?: boolean;
};

export const DrawerButton = styled.a<DrawerButtonProps>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 20px;
  user-select: none;
  background-color: ${(props) =>
    props.selected ? props.theme.themeColors.darken : props.theme.themeColors.transparent};
  :hover {
    background-color: ${(props) => props.theme.themeColors.darken};
  }
  // border
  border-bottom: 1px solid ${(props) => props.theme.themeColors.darken};
  &:last-child {
    border: none;
  }
`;
