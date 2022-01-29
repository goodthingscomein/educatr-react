import React, { useState } from 'react';

// Import development data
import allRecordings from '../../data/recordings.data';

// Import styles
import { PageContainer, ContentContainer } from './all-recordings.styles';

// Import custom components
import AllRecordingsHeader from '../../components/all-recordings-header/all-recordings-header.components';
import RecordingsCollection from '../../components/recordings-collection/recording-collection.components';

export type RecordingsFilterTypes = 'new' | 'watched' | 'favourite' | 'all';

// Render Component
const AllRecordingsPage: React.FC = () => {
  // State for the filtering of the units
  const [recordingsFilter, setRecordingsFilter] = useState<RecordingsFilterTypes>('new');

  // State for search bar
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  // Render page
  return (
    <PageContainer>
      <AllRecordingsHeader
        recordingsFilter={recordingsFilter}
        setRecordingsFilter={setRecordingsFilter}
        isSearching={isSearching}
        setIsSearching={setIsSearching}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <ContentContainer>
        <RecordingsCollection recordings={allRecordings} numberOfColumns={3}></RecordingsCollection>
      </ContentContainer>
    </PageContainer>
  );
};

export default AllRecordingsPage;
