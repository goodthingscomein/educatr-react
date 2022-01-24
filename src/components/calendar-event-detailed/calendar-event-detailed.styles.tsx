import styled from 'styled-components';
import { FilterColorTypes } from '../../type-declarations/styled';

// Calendar Events Props
type CalendarEventContainerProps = {
  color: FilterColorTypes;
};

export const CalendarEventContainer = styled.a<CalendarEventContainerProps>`
  background-color: ${(props) => props.theme.getColor(props.color)};
  color: ${(props) => props.theme.themeColors.white};
  flex-shrink: 0;
  width: 100%;
  border-radius: 4px;
  padding: 4px 12px;
  margin: 2px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
`;
