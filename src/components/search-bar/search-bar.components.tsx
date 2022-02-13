import React, { useState } from 'react';

// Import styles
import { SearchBarContainer } from './search-bar.styles';

// Import custom components
import Button from '../button/button.components';
import Input from '../input/input.components';

// Import custom icons
import SearchIcon from '@mui/icons-material/Search';

// Component Props Interface
type Props = {
  searchHint: string;
  canToggle?: boolean;
  onSearchSubmitListener: (input: string) => unknown;
};

// Render Component
const SearchBar: React.FC<Props> = ({ searchHint, canToggle, onSearchSubmitListener }) => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  // Action to submit input
  const onSubmitAction = () => {
    if (searchInput.length > 0) return onSearchSubmitListener(searchInput); // If user has entered input, submit
    if (canToggle) setIsSearching((isSearching) => !isSearching); // If there is no input, show / hide
  };

  // Render the Search Bar and Search Button
  return (
    <SearchBarContainer>
      {/* NO TOGGLE, ALWAYS SHOW SEARCH BAR, ONLY SHOW BUTTON WITH INPUT */}
      {!canToggle && <Input placeholder={searchHint} value={searchInput} onChangeStateDispatch={setSearchInput} />}
      {!canToggle && searchInput.length > 0 && (
        <Button
          variant='text'
          padding='6px'
          margin='0 0 0 12px'
          textColor='textDark'
          hoverTextColor='tertiaryAccent'
          size='medium'
          clickAction={() => onSubmitAction()}
        >
          <SearchIcon fontSize='medium' />
        </Button>
      )}

      {/* CAN TOGGLE, ALWAYS SHOW BUTTON, ONLY SHOW SEARCH BAR WITH TOGGLE BUTTON */}
      {canToggle && isSearching && (
        <Input placeholder={searchHint} value={searchInput} onChangeStateDispatch={setSearchInput} />
      )}
      {canToggle && (
        <Button
          variant='text'
          padding='6px'
          margin='0 0 0 12px'
          textColor='textDark'
          hoverTextColor='tertiaryAccent'
          size='medium'
          clickAction={() => onSubmitAction()}
        >
          <SearchIcon fontSize='medium' />
        </Button>
      )}
    </SearchBarContainer>
  );
};

export default SearchBar;
