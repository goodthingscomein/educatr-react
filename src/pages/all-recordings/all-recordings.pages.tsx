import React from 'react';

// Import development data
import allVideos from '../../data/videos.data';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { setRecordingsNavigationUrl } from '../../redux/navigation/navigation.actions';
import { Dispatch } from 'redux';
import { Action } from '../../redux/all-actions.types';

// Import styles
import { PageContainer, ContentContainer } from './all-recordings.styles';

// Import custom components
import { NavigationTabType } from '../../components/tabbed-navigation/tabbed-navigation.components';
import SubPageHeader from '../../components/sub-page-header/sub-page-header.components';
import CardCollection from '../../components/card-collection/card-collection.components';
import RecordingCard from '../../components/recording-card/recording-card.components';

type Props = {
  // Drawer button nav url management
  setRecordingsNavigationUrl: typeof setRecordingsNavigationUrl;
};

// Render Component
const AllRecordingsPage: React.FC<Props> = ({ setRecordingsNavigationUrl }) => {
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
        navigationDispatch={setRecordingsNavigationUrl}
      />
      <ContentContainer>
        <CardCollection numberOfColumns={3} numberOfCards={allVideos.length}>
          {allVideos.map((video, index) => {
            return <RecordingCard key={index} video={video} />;
          })}
        </CardCollection>
      </ContentContainer>
    </PageContainer>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setRecordingsNavigationUrl: (newUrl: string) => dispatch(setRecordingsNavigationUrl(newUrl)),
});

export default connect(null, mapDispatchToProps)(AllRecordingsPage);
