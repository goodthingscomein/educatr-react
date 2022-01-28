import React from 'react';

// Import development data
import recordingsCollections from '../../../../data/recordings.data';

// Import custom components
import RecordingCollection from '../../../../components/recordings-collection/recording-collection.components';
import Divider from '../../../../components/divider/divider.components';

// Render Component
const RecordingsSubPage: React.FC = () => (
  <>
    {recordingsCollections.map((collection, index) => {
      return (
        <>
          <RecordingCollection
            title={collection.collectionTitle}
            recordings={collection.recordings}
            numberOfColumns={3}
          />
          {recordingsCollections.length !== index + 1 && <Divider color='dark' margin='40px' />}
        </>
      );
    })}
  </>
);

export default RecordingsSubPage;
