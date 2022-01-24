import React from 'react';
import CopyText from '../copy-text/copy-text.components';

// Import development data
import days from '../../data/days.data';

// Import styles
import { CalendarDayItem, EventGridContainer } from './month-grid-item.styles';

// Import custom components
import CalendarEventSimple from '../calendar-event-simple/calendar-event-simple.components';

// Component Props Interface
type Props = {
  date: any;
  index: number;
};

// Render Component
const MonthGridItem: React.FC<Props> = ({ date, index }) => (
  <CalendarDayItem isToday={date.day === 27 && date.month === 1}>
    {index < 7 && (
      <CopyText size={'x-small'} color='textDark' fontWeight={400}>
        {days[index].substring(0, 3)}
      </CopyText>
    )}
    <CopyText size={'x-small'} color={date.month === 1 ? 'textDark' : 'textLight'}>
      {date.day}
    </CopyText>
    <EventGridContainer>
      <CalendarEventSimple color={'filterRed'} time={'11:30am'} />
      <CalendarEventSimple color={'filterOrange'} time={'12:00pm'} />
      <CalendarEventSimple color={'filterOrange'} time={'12:30pm'} />
      <CalendarEventSimple color={'filterGreen'} time={'1:30pm'} />
    </EventGridContainer>
  </CalendarDayItem>
);

export default MonthGridItem;
