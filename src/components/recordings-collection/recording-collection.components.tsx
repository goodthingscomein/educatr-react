import React from 'react';

// Import styles
import { RecordingsCardGridContainer } from './recording-collection.styles';

// Import custom components
import RecordingCard from '../../components/recording-card/recording-card.components';

// Import typing
import { RecordingDataType } from '../../data/recordings-grouped.data';

// Component Props Interface
type Props = {
  recordings: RecordingDataType[];
  numberOfColumns: number;
};

// Render Component
const RecordingsCollection: React.FC<Props> = ({ recordings, numberOfColumns }) => (
  <RecordingsCardGridContainer
    numberOfColumns={numberOfColumns}
    numberOfRows={Math.ceil(recordings.length / numberOfColumns)}
  >
    {recordings.map((recording, index) => {
      return (
        <RecordingCard
          key={index}
          recordingId={recording.recordingId}
          thumbnailImgSrc={recording.thumbnailImgSrc}
          recordingLength={recording.recordingLength}
          title={recording.title}
          date={recording.date}
          alreadyWatched={recording.alreadyWatched}
        />
      );
    })}
  </RecordingsCardGridContainer>
);

export default RecordingsCollection;
