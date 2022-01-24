import React from 'react';

// Import styles
import { GridContainer, GridItem } from './calendar-view-compact.styles';

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
      {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((value) => {
        return <GridItem lightText>{value}</GridItem>;
      })}
      {/* Dates in grid (MUST BE AUTO) */}
      {[
        { day: 27, month: 12 },
        { day: 28, month: 12 },
        { day: 29, month: 12 },
        { day: 30, month: 12 },
        { day: 31, month: 12 },
        { day: 1, month: 1 },
        { day: 2, month: 1 },
        { day: 3, month: 1 },
        { day: 4, month: 1 },
        { day: 5, month: 1 },
        { day: 6, month: 1 },
        { day: 7, month: 1 },
        { day: 8, month: 1 },
        { day: 9, month: 1 },
        { day: 10, month: 1 },
        { day: 11, month: 1 },
        { day: 12, month: 1 },
        { day: 13, month: 1 },
        { day: 14, month: 1 },
        { day: 15, month: 1 },
        { day: 16, month: 1 },
        { day: 17, month: 1 },
        { day: 18, month: 1 },
        { day: 19, month: 1 },
        { day: 20, month: 1 },
        { day: 21, month: 1 },
        { day: 22, month: 1 },
        { day: 23, month: 1 },
        { day: 24, month: 1 },
        { day: 25, month: 1 },
        { day: 26, month: 1 },
        { day: 27, month: 1 },
        { day: 28, month: 1 },
        { day: 29, month: 1 },
        { day: 30, month: 1 },
        { day: 31, month: 1 },
        { day: 1, month: 2 },
        { day: 2, month: 2 },
        { day: 3, month: 2 },
        { day: 4, month: 2 },
        { day: 5, month: 2 },
        { day: 6, month: 2 },
      ].map((date) => {
        return (
          <GridItem canHover lightText={date.month !== 1} selected={date.day === 27 && date.month === 1}>
            {date.day}
          </GridItem>
        );
      })}
    </GridContainer>
  </VerticalDiv>
);

export default CalendarViewCompact;
