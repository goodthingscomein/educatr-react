import React from 'react';
import CopyText from '../copy-text/copy-text.components';

// Import development data
import days from '../../data/days.data';

// Import styles
import { GridItemContainer, LabelTextContainer, EventGridContainer } from './month-grid-item.styles';

// Component Props Interface
type Props = {
  children?: React.ReactNode;
  date: any;
  index: number;
};

// Render Component
const MonthGridItem: React.FC<Props> = ({ children, date, index }) => (
  <GridItemContainer isToday={date.day === 27 && date.month === 1}>
    <LabelTextContainer>
      <CopyText
        size={'small'}
        color={date.month === 1 ? 'textDark' : 'textLight'}
        fontWeight={date.month === 1 ? 700 : 300}
      >
        {date.month === 1 ? <>{date.day}</> : <i>{date.day}</i>}
      </CopyText>
      {index < 7 && (
        <CopyText size={'x-small'} color='textDark'>
          {days[index].substring(0, 3)}
        </CopyText>
      )}
      <div /> {/* Empty div used to centre the day text */}
    </LabelTextContainer>

    <EventGridContainer>{children}</EventGridContainer>
  </GridItemContainer>
);

export default MonthGridItem;
