import React from 'react';
import { FilterColorTypes } from '../../type-declarations/styled';

// Import styles
import { CalendarEventContainer } from './calendar-event-simple.styles';

// Import custom components
import CopyText from '../copy-text/copy-text.components';

// Component Props Interface
type Props = {
  color: FilterColorTypes;
  time: string;
  clickAction?: () => unknown;
};

// Render Component
const CalendarEvent: React.FC<Props> = ({ color, time, clickAction }) => (
  <CalendarEventContainer
    color={color}
    onClick={
      clickAction
        ? (event) => {
            event.stopPropagation();
            clickAction();
          }
        : undefined
    }
  >
    <CopyText size='x-small' color='white' fontWeight={400}>
      {time}
    </CopyText>
  </CalendarEventContainer>
);

export default CalendarEvent;
