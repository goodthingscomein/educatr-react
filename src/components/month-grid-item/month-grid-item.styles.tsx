import styled, { css } from 'styled-components';

// Grid Item Props
type GridItemProps = {
  isToday?: boolean;
};

const IsTodayStyles = css`
  border: 2px solid ${(props) => props.theme.themeColors.secondaryAccent};
`;

const StandardBorderStyles = css`
  border: 1px solid ${(props) => props.theme.themeColors.borderColor};
`;

export const CalendarDayItem = styled.div<GridItemProps>`
  padding: 4px;
  ${(props) => (props.isToday ? IsTodayStyles : StandardBorderStyles)};
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  overflow-y: hidden;
`;

export const EventGridContainer = styled.div`
  margin-top: 8px;
  height: 100%;
  width: 100%;
  display: grid;
  gap: 2px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(4, minmax(0, 1fr));
  min-height: 0;
  min-width: 0;
  overflow: hidden;
`;
