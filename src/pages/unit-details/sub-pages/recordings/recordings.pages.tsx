import React from 'react';

// Import development data
import recordingsCollections from '../../../../data/recordings-grouped.data';

// Import custom components
import CardCollection from '../../../../components/card-collection/card-collection.components';
import RecordingCard from '../../../../components/recording-card/recording-card.components';

// Render Component
const RecordingsSubPage: React.FC = () => (
  <>
    {recordingsCollections.map((collection, index) => {
      return (
        <CardCollection
          heading={collection.collectionTitle}
          numberOfColumns={3}
          numberOfCards={collection.recordings.length}
          hasDivider={recordingsCollections.length !== index + 1}
        >
          {collection.recordings.map((recording, index) => {
            return <RecordingCard key={index} recording={recording} />;
          })}
        </CardCollection>
      );
    })}
  </>
);

export default RecordingsSubPage;
