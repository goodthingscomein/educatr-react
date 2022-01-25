import styled, { css } from 'styled-components';

export const ViewButtonsContainer = styled.div`
  width: 12rem;
  min-width: 12rem;
  height: 32px;
  margin-right: 20px;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: minmax(0, 1fr);
  border: 1px solid ${(props) => props.theme.themeColors.borderColor};
`;

// Calendar View Button Props
type CalendarViewButtonProps = {
  selected?: boolean;
};

const SelectedStyles = css`
  background-color: ${(props) => props.theme.themeColors.secondaryAccent};
`;

const HoverStyles = css`
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.themeColors.darken};
  }
`;

export const ViewButton = styled.a<CalendarViewButtonProps>`
  margin: 0;
  padding: 0 8px;
  background-color: ${(props) => props.theme.themeColors.transparent};
  ${(props) => (props.selected ? SelectedStyles : HoverStyles)};
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${(props) => props.theme.themeColors.borderColor};
  &:last-child {
    border: none;
  }
  user-select: none;
`;
