import React from 'react';

// Import development data
import recordingsCollections from '../../../../data/recordings-grouped.data';

// Import custom components
import RecordingsCollectionGrouped from '../../../../components/recordings-collection-grouped/recording-collection-grouped.components';
import Divider from '../../../../components/divider/divider.components';

// Render Component
const RecordingsSubPage: React.FC = () => (
  <>
    {recordingsCollections.map((collection, index) => {
      return (
        <>
          <RecordingsCollectionGrouped
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
