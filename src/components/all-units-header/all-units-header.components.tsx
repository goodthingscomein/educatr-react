import React from 'react';

// Import styles
import { HeaderContainer } from './all-units-header.styles';

// Import custom components
import Button from '../button/button.components';
import HeadingText from '../heading-text/heading-text.components';
import HorizontalDiv from '../horizontal-div/horizontal-div.components';
import Link from '../link/link.components';
import Input from '../input/input.components';

// Import custom icons
import SearchIcon from '@mui/icons-material/Search';
import OptionsIcon from '@mui/icons-material/MoreVert';

// Import types for state management
import { UnitsFilterTypes } from '../../pages/all-units/all-units.pages';

// Component props
type Props = {
  // Filtering of units
  unitsFilter: UnitsFilterTypes;
  setUnitsFilter: React.Dispatch<React.SetStateAction<UnitsFilterTypes>>;

  // Search bar to filter units
  isSearching: boolean;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

// Render Component
const AllUnitsHeader: React.FC<Props> = ({
  unitsFilter,
  setUnitsFilter,
  isSearching,
  setIsSearching,
  searchValue,
  setSearchValue,
}) => {
  // Render component
  return (
    <HeaderContainer>
      <HorizontalDiv
        backgroundColor='transparent'
        justifyContent='space-between'
        alignItems='flex-end'
        css={`
          width: 100%;
          height: fit-content;
        `}
      >
        <HorizontalDiv
          backgroundColor='transparent'
          css={`
            width: fit-content;
            height: fit-content;
          `}
        >
          {/* LINKS TO CHANGE UNIT FITLERS */}
          <Link
            color={unitsFilter === 'current' ? 'tertiaryAccent' : 'textDark'}
            hoverColor='tertiaryAccent'
            underlineEffect='always'
            margin='0 16px 0 0'
            clickAction={() => setUnitsFilter('current')}
          >
            Current Units
          </Link>
          <Link
            color={unitsFilter === 'completed' ? 'tertiaryAccent' : 'textDark'}
            hoverColor='tertiaryAccent'
            underlineEffect='always'
            margin='0 16px 0 0'
            clickAction={() => setUnitsFilter('completed')}
          >
            Completed Units
          </Link>
          <Link
            color={unitsFilter === 'upcoming' ? 'tertiaryAccent' : 'textDark'}
            hoverColor='tertiaryAccent'
            underlineEffect='always'
            margin='0 16px 0 0'
            clickAction={() => setUnitsFilter('upcoming')}
          >
            Upcoming Units
          </Link>
          <Link
            color={unitsFilter === 'all' ? 'tertiaryAccent' : 'textDark'}
            hoverColor='tertiaryAccent'
            underlineEffect='always'
            margin='0 16px 0 0'
            clickAction={() => setUnitsFilter('all')}
          >
            All Units
          </Link>
        </HorizontalDiv>
        <HorizontalDiv
          backgroundColor='transparent'
          css={`
            width: fit-content;
            height: fit-content;
          `}
        >
          {/* OPTIONS AND SEARCH */}
          {/* Search bar */}
          {isSearching ? (
            <Input placeholder='Search units...' value={searchValue} onChangeStateDispatch={setSearchValue} />
          ) : (
            ''
          )}
          {/* Search button */}
          <Button
            variant='text'
            padding='18px'
            textColor='textDark'
            hoverTextColor='tertiaryAccent'
            size='medium'
            clickAction={() => setIsSearching(!isSearching)}
          >
            <SearchIcon fontSize='medium' />
          </Button>
          <Button variant='text' padding='18px' textColor='textDark' hoverTextColor='tertiaryAccent' size='medium'>
            <OptionsIcon fontSize='medium' />
          </Button>
        </HorizontalDiv>
      </HorizontalDiv>
      <HeadingText variant='h3' color='textDark'>
        Your Units
      </HeadingText>
    </HeaderContainer>
  );
};

export default AllUnitsHeader;
