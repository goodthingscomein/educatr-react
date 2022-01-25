import React from 'react';
import { FilterColorTypes } from '../../type-declarations/styled';
import CopyText from '../copy-text/copy-text.components';

// Import styles
import { CalendarEventContainer } from './calendar-event-detailed.styles';

// Import custom components

// Component Props Interface
type Props = {
  color: FilterColorTypes;
  startMinute: number;
  totalMinutes: number;
  title: string;
  titleVisibleLength?: number;
  clickAction?: () => unknown;
};

// Render Component
const CalendarEventDetailed: React.FC<Props> = ({
  color,
  startMinute,
  totalMinutes,
  title,
  titleVisibleLength,
  clickAction,
}) => (
  <CalendarEventContainer
    color={color}
    startMinute={startMinute}
    totalMinutes={totalMinutes}
    onClick={clickAction ? () => clickAction() : undefined}
  >
    <CopyText size='x-small' color='white' fontWeight={700}>
      {title.substring(0, titleVisibleLength || 25)}
      {title.length >= 25 ? '...' : ''}
    </CopyText>
  </CalendarEventContainer>
);

export default CalendarEventDetailed;
