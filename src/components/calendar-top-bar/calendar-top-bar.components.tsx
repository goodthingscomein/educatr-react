import React, { useState } from 'react';

// Import styles
import { TopBarContainer } from './calendar-top-bar.styles';

// Import custom components
import Button from '../button/button.components';
import HorizontalDiv from '../horizontal-div/horizontal-div.components';
import CopyText from '../copy-text/copy-text.components';
import Input from '../input/input.components';
import CalendarViewButtons from '../calendar-view-buttons/calendar-view-buttons.components';

// Import custom icons
import LeftArrowIcon from '@mui/icons-material/ArrowBackIosNew';
import RightArrowIcon from '@mui/icons-material/ArrowForwardIos';
import SearchIcon from '@mui/icons-material/Search';
import OptionsIcon from '@mui/icons-material/MoreVert';

// Render Component
const CalendarTopBar: React.FC = () => {
  // State for search bar
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  // Render components
  return (
    <TopBarContainer>
      {/* Left side */}
      <HorizontalDiv
        backgroundColor='transparent'
        css={`
          width: fit-content;
        `}
      >
        {/* TODAY BUTTON */}
        <Button
          variant='solid'
          size='medium'
          backgroundColor='primary'
          hoverBackgroundColor='secondary'
          textColor='white'
          padding='4px 16px'
        >
          Today
        </Button>
        {/* LEFT NAV BUTTON */}
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
        {/* MONTH YEAR TITLE */}
        <CopyText size='medium' color='textDark'>
          January 2022
        </CopyText>
        {/* RIGHT NAV BUTTON */}
        <Button
          variant='text'
          size='small'
          textColor='textDark'
          hoverTextColor='primaryAccent'
          padding='0'
          margin='0 36px'
        >
          <RightArrowIcon fontSize='small' />
        </Button>
      </HorizontalDiv>
      {/* Right side */}
      <HorizontalDiv
        backgroundColor='transparent'
        css={`
          width: fit-content;
        `}
      >
        {/* Calendar View Buttons */}
        <CalendarViewButtons />
        {/* Search bar */}
        {isSearching ? (
          <Input placeholder='Search calendar...' value={searchValue} onChangeStateDispatch={setSearchValue} />
        ) : (
          ''
        )}
        {/* Search button */}
        <Button
          variant='text'
          padding='18px'
          textColor='textDark'
          hoverTextColor='primaryAccent'
          size='medium'
          clickAction={() => setIsSearching(!isSearching)}
        >
          <SearchIcon fontSize='medium' />
        </Button>
        <Button variant='text' padding='18px' textColor='textDark' hoverTextColor='primaryAccent' size='medium'>
          <OptionsIcon fontSize='medium' />
        </Button>
      </HorizontalDiv>
    </TopBarContainer>
  );
};

export default CalendarTopBar;
