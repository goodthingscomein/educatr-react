import styled, { css } from 'styled-components';

// Drawer Button Container Props
type DrawerButtonContainerProps = {
  isSelected?: boolean;
};

const SelectedStyles = css<DrawerButtonContainerProps>`
  color: ${(props) => props.theme.themeColors.primaryAccent};
  background-color: ${(props) => props.theme.themeColors.darken};
`;

const HoverStyles = css<DrawerButtonContainerProps>`
  :hover {
    color: ${(props) => props.theme.themeColors.primaryAccent};
    background-color: ${(props) => props.theme.themeColors.lighten};
    cursor: pointer;
  }
`;

export const DrawerButtonContainer = styled.a<DrawerButtonContainerProps>`
  width: 100%;
  padding: 6px 20px;
  color: ${(props) => props.theme.themeColors.white};
  font-size: ${(props) => props.theme.getFontSize('medium')};
  font-weight: 300;
  text-decoration: none;
  border: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: 0.2s;
  white-space: nowrap;

  ${(props) => (props.isSelected ? SelectedStyles : HoverStyles)}
`;
