import React from 'react';

// Import styles
import { RecordingsCardGridContainer } from './recording-collection-grouped.styles';

// Import custom components
import HeadingText from '../heading/heading.components';
import Margin from '../margin/margin.components';
import RecordingCard from '../recording-card/recording-card.components';

// Import typing
import { RecordingDataType } from '../../data/recordings-grouped.data';

// Component Props Interface
type Props = {
  title: string;
  recordings: RecordingDataType[];
  numberOfColumns: number;
};

// Render Component
const RecordingsCollectionGrouped: React.FC<Props> = ({ title, recordings, numberOfColumns }) => (
  <>
    <HeadingText variant='h4' color='textDark'>
      {title.substring(0, 50)}
      {title.length >= 50 && '...'}
    </HeadingText>
    <Margin width='100%' height='20px' />
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
  </>
);

export default RecordingsCollectionGrouped;
