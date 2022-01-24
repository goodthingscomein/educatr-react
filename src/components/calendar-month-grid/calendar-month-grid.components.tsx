import React from 'react';

// Import development data
import dates from '../../data/dates.data';

// Import styles
import { CalendarContainer } from './calendar-month-grid.styles';

// Import custom components
import MonthGridItem from '../month-grid-item/month-grid-item.components';

// Render Component
const Calendar: React.FC = () => {
  return (
    <CalendarContainer>
      {dates.map((date, index) => {
        return <MonthGridItem date={date} index={index} />;
      })}
    </CalendarContainer>
  );
};

export default Calendar;
