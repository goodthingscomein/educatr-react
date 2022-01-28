import React from 'react';

// Import development data
import dates from '../../data/dates.data';
import days from '../../data/days.data';

// Import styles
import { GridContainer, GridItem } from './calendar-compact.styles';

// Import custom components
import Button from '../button/button.components';
import CopyText from '../copy-text/copy-text.components';
import HorizontalDiv from '../horizontal-div/horizontal-div.components';
import VerticalDiv from '../vertical-div/vertical-div.components';

// Import custom icons
import LeftArrowIcon from '@mui/icons-material/ArrowBackIosNew';
import RightArrowIcon from '@mui/icons-material/ArrowForwardIos';

// Render Component
const CalendarViewCompact: React.FC = () => (
  <VerticalDiv
    backgroundColor='transparent'
    css={`
      height: fit-content;
      margin-bottom: 24px;
    `}
  >
    {/* TITLE + NAV BUTTONS */}
    <HorizontalDiv
      backgroundColor='transparent'
      justifyContent='space-between'
      alignItems='center'
      css={`
        height: fit-content;
      `}
    >
      {/* TITLE */}
      <CopyText size='medium' fontWeight={700} color='textDark'>
        January 2022
      </CopyText>
      {/* NAV BUTTONS */}
      <HorizontalDiv
        backgroundColor='transparent'
        css={`
          height: fit-content;
          width: fit-content;
        `}
      >
        <Button
          variant='text'
          size='small'
          textColor='textDark'
          hoverTextColor='primaryAccent'
          padding='0'
          margin='0 36px'
        >
          <LeftArrowIcon fontSize='small' />
        </Button>
        <Button variant='text' size='small' textColor='textDark' hoverTextColor='primaryAccent' padding='0'>
          <RightArrowIcon fontSize='small' />
        </Button>
      </HorizontalDiv>
    </HorizontalDiv>
    <GridContainer>
      {/* Days in grid */}
      {days.map((day) => {
        return (
          <GridItem>
            <CopyText size='small' color='textLight'>
              {day.charAt(0)}
            </CopyText>
          </GridItem>
        );
      })}
      {/* Dates in grid (MUST BE AUTO) */}
      {dates.map((date) => {
        return (
          <GridItem canHover selected={date.day === 27 && date.month === 1}>
            {date.day === 27 && date.month === 1 ? (
              <CopyText size='small' color='white' fontWeight={700}>
                {date.day}
              </CopyText>
            ) : (
              <CopyText size='small' color={date.month !== 1 ? 'textLight' : 'textDark'}>
                {date.day}
              </CopyText>
            )}
          </GridItem>
        );
      })}
    </GridContainer>
  </VerticalDiv>
);

export default CalendarViewCompact;
