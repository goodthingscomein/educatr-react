import React from 'react';

// Import styles
import { DrawerHeader } from './calendar-drawer-header.styles';

// Import custom components
import Button from '../button/button.components';
import HeadingText from '../heading/heading.components';
import Margin from '../margin/margin.components';
import HorizontalDiv from '../horizontal-div/horizontal-div.components';
import CopyText from '../copy-text/copy-text.components';

// Import custom icons
import AddIcon from '@mui/icons-material/Add';

// Render Component
const CalendarDrawerHeader: React.FC = () => (
  <DrawerHeader>
    <HeadingText variant='h5' color='textDark'>
      Calendar
    </HeadingText>
    <Margin height={20} />
    <Button
      variant='solid'
      size='large'
      backgroundColor='primaryAccent'
      hoverBackgroundColor='secondaryAccent'
      textColor='white'
      entireWidth
      padding='8px 12px'
    >
      <HorizontalDiv
        backgroundColor='transparent'
        justifyContent='flex-start'
        alignItems='center'
        css={`
          padding: 0 12px;
        `}
      >
        <HorizontalDiv
          backgroundColor='transparent'
          justifyContent='center'
          alignItems='center'
          css={`
            width: fit-content;
            padding: 0 20px 0 0;
          `}
        >
          <AddIcon fontSize='large' />
        </HorizontalDiv>
        <CopyText size={'large'} color={'white'}>
          Create
        </CopyText>
      </HorizontalDiv>
    </Button>
  </DrawerHeader>
);

export default CalendarDrawerHeader;
