import React from 'react';

// Import styles
import { HeaderContainer } from './all-recordings-header.styles';

// Import custom components
import Button from '../button/button.components';
import HeadingText from '../heading/heading.components';
import HorizontalDiv from '../horizontal-div/horizontal-div.components';
import Link from '../link/link.components';
import Input from '../input/input.components';

// Import custom icons
import SearchIcon from '@mui/icons-material/Search';
import OptionsIcon from '@mui/icons-material/MoreVert';

// Import types for state management
import { RecordingsFilterTypes } from '../../pages/all-recordings/all-recordings.pages';

// Component props
type Props = {
  // Filtering of units
  recordingsFilter: RecordingsFilterTypes;
  setRecordingsFilter: React.Dispatch<React.SetStateAction<RecordingsFilterTypes>>;

  // Search bar to filter units
  isSearching: boolean;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

// Render Component
const AllRecordingsHeader: React.FC<Props> = ({
  recordingsFilter,
  setRecordingsFilter,
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
            color={recordingsFilter === 'new' ? 'primary' : 'textDark'}
            hoverColor='primary'
            underlineEffect='always'
            margin='0 16px 0 0'
            clickAction={() => setRecordingsFilter('new')}
          >
            New Recordings
          </Link>
          <Link
            color={recordingsFilter === 'watched' ? 'primary' : 'textDark'}
            hoverColor='primary'
            underlineEffect='always'
            margin='0 16px 0 0'
            clickAction={() => setRecordingsFilter('watched')}
          >
            Already Watched
          </Link>
          <Link
            color={recordingsFilter === 'all' ? 'primary' : 'textDark'}
            hoverColor='primary'
            underlineEffect='always'
            margin='0 16px 0 0'
            clickAction={() => setRecordingsFilter('all')}
          >
            All Recordings
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
            <Input placeholder='Search recordings...' value={searchValue} onChangeStateDispatch={setSearchValue} />
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
      </HorizontalDiv>
      <HeadingText variant='h3' color='textDark'>
        Recordings
      </HeadingText>
    </HeaderContainer>
  );
};

export default AllRecordingsHeader;
