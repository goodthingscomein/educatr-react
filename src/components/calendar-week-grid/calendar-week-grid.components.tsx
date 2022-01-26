import React from 'react';

// Import development data
import dates from '../../data/dates.data';
import days from '../../data/days.data';
import times from '../../data/times.data';

// Import styles
import {
  HeaderGridContainer,
  HeaderGridItem,
  CalendarContainer,
  TimeGridContainer,
  TimeGridItem,
  TimeText,
  CalendarGridContainer,
  GridItem,
} from './calendar-week-grid.styles';

// Import custom components
import CopyText from '../copy-text/copy-text.components';
import CalendarEventDetailed from '../calendar-event-detailed/calendar-event-detailed.components';
import Margin from '../margin/margin.components';

// Render Component
const CalendarWeekGrid: React.FC = () => {
  const allGridSquares = Array.from({ length: times.length * days.length }, (v, i) => i);

  return (
    <>
      <HeaderGridContainer>
        <HeaderGridItem>
          <CopyText size='x-small' color='textLight'>
            GMT+11
          </CopyText>
        </HeaderGridItem>
        {days.map((day, index) => {
          return (
            <HeaderGridItem>
              <CopyText size='x-small' color='textLight'>
                {day}
              </CopyText>
              <Margin height='2px' width='100%' />
              <CopyText size='medium' color='textDark' fontWeight={700}>
                {dates[index].day}
              </CopyText>
            </HeaderGridItem>
          );
        })}
      </HeaderGridContainer>
      <CalendarContainer>
        {/* Grid with all of the times down the left side */}
        <TimeGridContainer>
          {times.map((time) => {
            return (
              <TimeGridItem>
                <TimeText>
                  <CopyText size='x-small' color='textLight'>
                    {time % 12 === 0 ? 12 : time % 12} {time < 12 || time === 24 ? 'am' : 'pm'}
                  </CopyText>
                </TimeText>
              </TimeGridItem>
            );
          })}
        </TimeGridContainer>
        {/* Grid with all of the squares to hold the events of the calendar */}
        <CalendarGridContainer>
          {allGridSquares.map((index) => {
            return (
              <GridItem>
                {/** The Day */}
                {/* <CopyText size='small' color='textLight'>
                  {days[index % 7]}
                </CopyText> */}

                {/** The time */}
                {/* <CopyText size='small' color='textLight'>
                  {times[Math.floor(index / 7)] % 12 === 0 ? 12 : times[Math.floor(index / 7)] % 12}{' '}
                  {times[Math.floor(index / 7)] < 12 || times[Math.floor(index / 7)] === 24 ? 'am' : 'pm'}
                </CopyText> */}

                {/* Here we have a calendar event */}
                <CalendarEventDetailed
                  color={'filterYellow'}
                  startMinute={30}
                  totalMinutes={30}
                  title={'Meeting with Jai Carey'}
                />
              </GridItem>
            );
          })}
        </CalendarGridContainer>
      </CalendarContainer>
    </>
  );
};

export default CalendarWeekGrid;
