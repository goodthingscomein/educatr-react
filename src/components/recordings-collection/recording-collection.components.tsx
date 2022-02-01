import React from 'react';

// Import styles
import { RecordingsCardGridContainer } from './recording-collection.styles';

// Import custom components
import RecordingCard from '../../components/recording-card/recording-card.components';

// Import typing
import { RecordingMetadataType } from '../../redux/recording/recording.types';

// Component Props Interface
type Props = {
  recordings: RecordingMetadataType[];
  numberOfColumns: number;
};

// Render Component
const RecordingsCollection: React.FC<Props> = ({ recordings, numberOfColumns }) => (
  <RecordingsCardGridContainer
    numberOfColumns={numberOfColumns}
    numberOfRows={Math.ceil(recordings.length / numberOfColumns)}
  >
    {recordings.map((recording, index) => {
      return <RecordingCard key={index} recording={recording} />;
    })}
  </RecordingsCardGridContainer>
);

export default RecordingsCollection;
