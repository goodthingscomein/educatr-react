import styled from 'styled-components';

export const HeaderGridContainer = styled.div`
  width: 100%;
  height: 80px;
  display: grid;
  grid-template-columns: 60px minmax(0, 1fr);
  grid-template-rows: auto;
  min-height: 0;
  min-width: 0;
  z-index: 1;
`;

export const HeaderGridItem = styled.div`
  margin: 0;
  padding: 2px 8px;
  display: flex;
  flex-direction: column-reverse;
  border-left: 1px solid ${(props) => props.theme.themeColors.borderColor};
  border-bottom: 1px solid ${(props) => props.theme.themeColors.borderColor};
  background-color: ${(props) => props.theme.themeColors.white};
  &:first-child {
    border-left: none;
  }
`;

// Contains the entire calender (broken into time grid and actual grid)
export const CalendarContainer = styled.div`
  width: 100%;
  display: flex;
  overflow-y: scroll;
  scrollbar-width: none;
`;

// Inside of the calendar container, is a grid of all of the times down the left side
export const TimeGridContainer = styled.div`
  width: 60px;
  display: grid;
  grid-template-columns: 60px;
  grid-template-rows: repeat(24, 50px);
  min-height: 0;
  min-width: 0;
`;

export const TimeGridItem = styled.div`
  position: relative;
  margin: 0;
  padding: 4px;
  border-bottom: 1px solid ${(props) => props.theme.themeColors.borderColor};
  display: flex;
  flex-direction: column-reverse;
`;

export const TimeText = styled.div`
  position: absolute;
  bottom: -12px;
  left: 0;
  height: 20px;
  width: 50px;
  background-color: ${(props) => props.theme.themeColors.white};
  padding: 0 8px;
`;

// Inside of the calendar container, is a grid of all of squares of the calendar
export const CalendarGridContainer = styled.div`
  flex: 1 0 0;
  display: grid;
  grid-template-rows: repeat(24, 50px);
  min-height: 0;
  min-width: 0;
`;

export const GridItem = styled.a`
  position: relative;
  margin: 0;
  padding: 4px;
  border-left: 1px solid ${(props) => props.theme.themeColors.borderColor};
  border-bottom: 1px solid ${(props) => props.theme.themeColors.borderColor};
  display: flex;
  flex-direction: column;
`;
