import React, { useState } from 'react';

// Import development data
import allRecordings from '../../data/recordings.data';

// Import styles
import { PageContainer, ContentContainer } from './all-recordings.styles';

// Import custom components
import RecordingsCollection from '../../components/recordings-collection/recording-collection.components';
import { NavigationTabType } from '../../components/tabbed-navigation/tabbed-navigation.components';
import SubPageHeader from '../../components/sub-page-header/sub-page-header.components';

// Render Component
const AllRecordingsPage: React.FC = () => {
  // The tabbed navigation items
  const allRecordingsNavigationTabs: NavigationTabType[] = [
    {
      label: 'Recent Recordings',
      to: 'recent',
      urlRegexMatch: /recent$/g,
    },
    {
      label: 'Already Watched',
      to: 'watched',
      urlRegexMatch: /watched$/g,
    },
    {
      label: 'Favourites',
      to: 'favourites',
      urlRegexMatch: /favourites$/g,
    },
    {
      label: 'All Recordings',
      to: 'all',
      urlRegexMatch: /all$/g,
    },
  ];

  // Render page
  return (
    <PageContainer>
      <SubPageHeader
        heading={'Recordings'}
        navigationTabs={allRecordingsNavigationTabs}
        searchHint='Search all recordings...'
        onSearchSubmitListener={(input) => console.log(input)}
        rootUrl='/recordings'
      />
      <ContentContainer>
        <RecordingsCollection recordings={allRecordings} numberOfColumns={3}></RecordingsCollection>
      </ContentContainer>
    </PageContainer>
  );
};

export default AllRecordingsPage;
