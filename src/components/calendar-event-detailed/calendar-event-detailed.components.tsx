import React from 'react';
import { FilterColorTypes } from '../../type-declarations/styled';
import CopyText from '../copy-text/copy-text.components';
import HorizontalDiv from '../horizontal-div/horizontal-div.components';

// Import styles
import { CalendarEventContainer } from './calendar-event-detailed.styles';

// Import custom components

// Component Props Interface
type Props = {
  color: FilterColorTypes;
  startTime: string;
  title: string;
};

// Render Component
const CalendarEvent: React.FC<Props> = ({ color, startTime, title }) => (
  <CalendarEventContainer color={color}>
    <HorizontalDiv
      backgroundColor='transparent'
      alignItems='center'
      css={`
        width: fit-content;
        margin-right: 8px;
      `}
    >
      <CopyText size='x-small' color='white' fontWeight={300}>
        {startTime}
      </CopyText>
    </HorizontalDiv>
    <CopyText size='x-small' color='white' fontWeight={700}>
      {title}
    </CopyText>
  </CalendarEventContainer>
);

export default CalendarEvent;
