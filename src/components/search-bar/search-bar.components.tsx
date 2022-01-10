import React, { useState } from 'react';

// Import styles
import { SearchBarContainer } from './search-bar.styles';

// Component Props Interface
type Props = {
	children?: React.ReactNode;
};

// Render Component
const SearchBar: React.FC<Props> = ({ children }) => {
	// const [searchBarInput, setSearchBarInput] = useState
	return <SearchBarContainer type='text' autoComplete='off' placeholder='Search..' />;
};
export default SearchBar;
