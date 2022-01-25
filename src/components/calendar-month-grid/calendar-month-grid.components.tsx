import React from 'react';

// Import development data
import dates from '../../data/dates.data';

// Import styles
import { CalendarContainer } from './calendar-month-grid.styles';

// Import custom components
import MonthGridItem from '../month-grid-item/month-grid-item.components';
import CalendarEventSimple from '../calendar-event-simple/calendar-event-simple.components';

// Render Component
const Calendar: React.FC = () => {
  return (
    <CalendarContainer>
      {dates.map((date, index) => {
        return (
          <MonthGridItem date={date} index={index}>
            <CalendarEventSimple color={'filterRed'} time={'11:30am'} clickAction={() => console.log('clicked red')} />
            <CalendarEventSimple
              color={'filterOrange'}
              time={'12:00pm'}
              clickAction={() => console.log('clicked orange')}
            />
            <CalendarEventSimple
              color={'filterOrange'}
              time={'12:30pm'}
              clickAction={() => console.log('clicked orange')}
            />
            <CalendarEventSimple
              color={'filterGreen'}
              time={'1:30pm'}
              clickAction={() => console.log('clicked green')}
            />
          </MonthGridItem>
        );
      })}
    </CalendarContainer>
  );
};

export default Calendar;
