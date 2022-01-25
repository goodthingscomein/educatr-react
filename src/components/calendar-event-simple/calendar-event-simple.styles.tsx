import styled from 'styled-components';
import { FilterColorTypes } from '../../type-declarations/styled';

// Calendar Events Props
type CalendarEventContainerProps = {
  color: FilterColorTypes;
};

export const CalendarEventContainer = styled.a<CalendarEventContainerProps>`
  background-color: ${(props) => props.theme.getColor(props.color)};
  color: ${(props) => props.theme.themeColors.white};
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 2;
  cursor: pointer;
`;
