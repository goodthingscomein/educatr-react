import React from 'react';
import { FilterColorTypes } from '../../type-declarations/styled';
import CopyText from '../copy-text/copy-text.components';

// Import styles
import { CalendarEventContainer } from './calendar-event-simple.styles';

// Import custom components

// Component Props Interface
type Props = {
  color: FilterColorTypes;
  time: string;
};

// Render Component
const CalendarEvent: React.FC<Props> = ({ color, time }) => (
  <CalendarEventContainer color={color}>
    <CopyText size='x-small' color='white' fontWeight={400}>
      {time}
    </CopyText>
  </CalendarEventContainer>
);

export default CalendarEvent;
