import styled, { css } from 'styled-components';

export const GridContainer = styled.div`
  width: 100%;
  height: width;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(7, 30px);
  grid-template-rows: repeat(7, 30px);
  gap: 2px;
  justify-content: center;
  align-content: center;
`;

// Grid Item Props
type GridItemProps = {
  selected?: boolean;
  canHover?: boolean;
};

const SelectedStyles = css`
  color: ${(props) => props.theme.themeColors.white};
  background-color: ${(props) => props.theme.themeColors.secondaryAccent};
`;

const HoverStyles = css`
  :hover {
    background-color: ${(props) => props.theme.themeColors.darken};
  }
`;

export const GridItem = styled.a<GridItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  background-color: ${(props) => props.theme.themeColors.transparent};
  border-radius: ${(props) => props.theme.borderRadius};
  cursor: pointer;
  ${(props) => (props.canHover && !props.selected ? HoverStyles : '')};
  ${(props) => (props.selected ? SelectedStyles : '')};
`;
