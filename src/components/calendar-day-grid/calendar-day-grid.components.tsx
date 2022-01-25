import React from 'react';

// Import development data
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
} from './calendar-day-grid.styles';

// Import custom components
import CopyText from '../copy-text/copy-text.components';

// Render Component
const CalendarWeekGrid: React.FC = () => {
  return (
    <>
      <HeaderGridContainer>
        <HeaderGridItem>
          <CopyText size='x-small' color='textLight'>
            GMT+11
          </CopyText>
        </HeaderGridItem>
        <HeaderGridItem>
          <CopyText size='small' color='textLight'>
            Saturday
          </CopyText>
          <CopyText size='x-large' color='textDark' fontWeight={700}>
            27
          </CopyText>
        </HeaderGridItem>
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
          {times.map((hour) => {
            return (
              <GridItem>
                {/* Here we have a calendar event */}
                {/* <CalendarEventDetailed
                  color={'filterYellow'}
                  startMinute={30}
                  totalMinutes={30}
                  title={'Meeting with Jai Carey'}
                /> */}
              </GridItem>
            );
          })}
        </CalendarGridContainer>
      </CalendarContainer>
    </>
  );
};

export default CalendarWeekGrid;
