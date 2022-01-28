import styled from 'styled-components';
import { FilterColorTypes } from '../../type-declarations/styled';

// Calendar Events Props
type CalendarEventContainerProps = {
  color: FilterColorTypes;
  startMinute: number;
  totalMinutes: number;
};

export const CalendarEventContainer = styled.a<CalendarEventContainerProps>`
  position: absolute;
  height: ${(props) => (props.totalMinutes / 60) * 50}px;
  top: ${(props) => (props.startMinute / 60) * 50}px;
  left: 0;
  background-color: ${(props) => props.theme.getColor(props.color)};
  color: ${(props) => props.theme.themeColors.white};
  flex-shrink: 0;
  margin: 0 2px;
  width: calc(100% - 4px);
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 4px 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  user-select: none;
  cursor: pointer;
`;
