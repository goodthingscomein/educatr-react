import React, { useState } from 'react';
import { FilterColorTypes } from '../../type-declarations/styled';

// Import styles
import { FilterOption, CheckBox, FilterOptionsButton } from './calendar-filters.styles';

// Import custom components
import Button from '../button/button.components';
import CopyText from '../copy-text/copy-text.components';
import HorizontalDiv from '../horizontal-div/horizontal-div.components';
import VerticalDiv from '../vertical-div/vertical-div.components';
import Margin from '../margin/margin.components';

// Import custom icons
import LeftArrowIcon from '@mui/icons-material/KeyboardArrowLeft';
import DownArrowIcon from '@mui/icons-material/KeyboardArrowDown';
import TickIcon from '@mui/icons-material/Done';
import OptionsIcon from '@mui/icons-material/MoreVert';

type FilterOptions = {
  color: FilterColorTypes;
  label: string;
  selected: boolean;
  dispatch: () => void;
};

// Render Component
const CalendarFilters: React.FC = () => {
  // State to manage is we are displaying the filters or not
  const [isVisible, setIsVisible] = useState(true);

  // State for the selecting of each box
  const [isRedSelected, setIsRedSelected] = useState(true);
  const [isOrangeSelected, setIsOrangeSelected] = useState(true);
  const [isYellowSelected, setIsYellowSelected] = useState(true);
  const [isGreenSelected, setIsGreenSelected] = useState(true);
  const [isBlueSelected, setIsBlueSelected] = useState(true);
  const [isPurpleSelected, setIsPurpleSelected] = useState(true);
  const [isPinkSelected, setIsPinkSelected] = useState(true);

  const colors: FilterOptions[] = [
    { color: 'filterRed', label: 'Red', selected: isRedSelected, dispatch: () => setIsRedSelected(!isRedSelected) },
    {
      color: 'filterOrange',
      label: 'Orange',
      selected: isOrangeSelected,
      dispatch: () => setIsOrangeSelected(!isOrangeSelected),
    },
    {
      color: 'filterYellow',
      label: 'Yellow',
      selected: isYellowSelected,
      dispatch: () => setIsYellowSelected(!isYellowSelected),
    },
    {
      color: 'filterGreen',
      label: 'Green',
      selected: isGreenSelected,
      dispatch: () => setIsGreenSelected(!isGreenSelected),
    },
    {
      color: 'filterBlue',
      label: 'Blue',
      selected: isBlueSelected,
      dispatch: () => setIsBlueSelected(!isBlueSelected),
    },
    {
      color: 'filterPurple',
      label: 'Purple',
      selected: isPurpleSelected,
      dispatch: () => setIsPurpleSelected(!isPurpleSelected),
    },
    {
      color: 'filterPink',
      label: 'Pink',
      selected: isPinkSelected,
      dispatch: () => setIsPinkSelected(!isPinkSelected),
    },
  ];

  return (
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
          Filters
        </CopyText>
        {/* HIDE BUTTONS */}
        <Button
          variant='text'
          size='small'
          textColor='textDark'
          hoverTextColor='primaryAccent'
          padding='0'
          clickAction={() => setIsVisible(!isVisible)}
        >
          {isVisible ? <DownArrowIcon fontSize='small' /> : <LeftArrowIcon fontSize='small' />}
        </Button>
      </HorizontalDiv>
      {/* Show the filters */}
      {isVisible ? (
        <>
          <Margin height={20} />
          {/* Filter buttons */}
          {colors.map((options: FilterOptions) => {
            return (
              <FilterOption>
                <CheckBox color={options.color} selected={options.selected} onClick={() => options.dispatch()}>
                  <TickIcon fontSize='small' />
                </CheckBox>
                {options.label}
                <FilterOptionsButton>
                  <OptionsIcon fontSize='small' />
                </FilterOptionsButton>
              </FilterOption>
            );
          })}
        </>
      ) : (
        ''
      )}
    </VerticalDiv>
  );
};

export default CalendarFilters;
