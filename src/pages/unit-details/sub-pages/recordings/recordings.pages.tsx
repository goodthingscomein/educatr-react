import React from 'react';

// Import development data
import videoCollections from '../../../../data/videos-grouped.data';

// Import custom components
import CardCollection from '../../../../components/card-collection/card-collection.components';
import RecordingCard from '../../../../components/recording-card/recording-card.components';

// Render Component
const RecordingsSubPage: React.FC = () => (
  <>
    {videoCollections.map((collection, index) => {
      return (
        <CardCollection
          heading={collection.collectionTitle}
          numberOfColumns={3}
          numberOfCards={collection.videos.length}
          hasDivider={videoCollections.length !== index + 1}
        >
          {collection.videos.map((video, index) => {
            return <RecordingCard key={index} video={video} />;
          })}
        </CardCollection>
      );
    })}
  </>
);

export default RecordingsSubPage;
