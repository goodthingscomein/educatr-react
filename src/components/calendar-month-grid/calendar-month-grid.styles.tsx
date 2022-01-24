import styled from 'styled-components';

export const CalendarContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  grid-template-rows: repeat(6, minmax(0, 1fr));
  min-height: 0;
  min-width: 0;
`;
