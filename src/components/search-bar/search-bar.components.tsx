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
  hasLightTheme?: boolean;
  searchHint: string;
  canToggle?: boolean;
  onSearchSubmitListener: (input: string) => unknown;
};

// Render Component
const SearchBar: React.FC<Props> = ({ hasLightTheme, searchHint, canToggle, onSearchSubmitListener }) => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  // Action to submit input
  const onSubmitAction = () => {
    if (searchInput.length > 0) return onSearchSubmitListener(searchInput); // If user has entered input, submit
    if (canToggle) setIsSearching((isSearching) => !isSearching); // If there is no input, show / hide
  };

  // JSX components to render
  const searchBar = <Input placeholder={searchHint} value={searchInput} onChangeStateDispatch={setSearchInput} />;
  const searchButton = (
    <Button
      variant='text'
      padding='6px'
      margin='0 0 0 12px'
      textColor={hasLightTheme ? 'white' : 'textDark'}
      hoverTextColor={hasLightTheme ? 'primaryAccent' : 'tertiaryAccent'}
      size='medium'
      clickAction={() => onSubmitAction()}
    >
      <SearchIcon fontSize='medium' />
    </Button>
  );

  // Render the Search Bar and Search Button
  return (
    <SearchBarContainer>
      {/* NO TOGGLE, ALWAYS SHOW SEARCH BAR, ONLY SHOW BUTTON WITH INPUT */}
      {!canToggle ? searchBar : ''}
      {!canToggle && searchInput.length > 0 ? searchButton : ''}

      {/* CAN TOGGLE, ALWAYS SHOW BUTTON, ONLY SHOW SEARCH BAR WITH TOGGLE BUTTON */}
      {canToggle && isSearching ? searchBar : ''}
      {canToggle ? searchButton : ''}
    </SearchBarContainer>
  );
};

export default SearchBar;
