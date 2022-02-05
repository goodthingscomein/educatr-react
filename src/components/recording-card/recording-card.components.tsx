import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { setRecordingsNavigationUrl } from '../../redux/navigation/navigation.actions';
import { setCurrentRecordingMetadata, setDownloadUrl, setBlobUrl } from '../../redux/recording/recording.actions';
import { State } from '../../redux/root-reducer';
import { Dispatch } from 'redux';
import { Action } from '../../redux/all-actions.types';

// Import styles
import {
  RecordingCardContainer,
  Thumbnail,
  ThumbnailHoverButton,
  ThumbnailTimestamp,
  CardTextContainer,
} from './recording-card.styles';

// Import custom components
import CopyText from '../copy-text/copy-text.components';
import Margin from '../margin/margin.components';
import VerticalDiv from '../vertical-div/vertical-div.components';
import HorizontalDiv from '../horizontal-div/horizontal-div.components';

// Import custom icons
import PlayIcon from '@mui/icons-material/PlayArrow';

// Import types
import { RecordingMetadataType } from '../../redux/recording/recording.types';

// Component Props Interface
type Props = {
  recording: RecordingMetadataType;
  id: string; // Existing ID of video already playing

  // Recordings drawer button url
  setRecordingsNavigationUrl: typeof setRecordingsNavigationUrl;

  // Set the current recording metadata
  setCurrentRecordingMetadata: typeof setCurrentRecordingMetadata;
};

// Render Component
const RecordingCard: React.FC<Props> = ({
  recording, // Associated recording metadata
  id,
  setRecordingsNavigationUrl,
  setCurrentRecordingMetadata,
}) => {
  // Navigate url
  const navigate = useNavigate();

  const recordingsNavigation = (url: string) => {
    navigate(url);
    setRecordingsNavigationUrl(url); // set the nav url

    // If we have clicked on a new video
    if (recording.id !== id) {
      // set the current recording to play metadata
      setCurrentRecordingMetadata(recording);
      // Reset the current playing video
      setDownloadUrl('');
      setBlobUrl('');
    }
  };

  // Calculate the timestamp
  const hrs = Math.floor(recording.length / 3600);
  const mins = Math.floor(recording.length / 60) - hrs * 60;
  const secs = Math.floor(recording.length % 60);

  return (
    <RecordingCardContainer>
      <Thumbnail
        src={recording.thumbnailSrc}
        onClick={() => recordingsNavigation(`/recordings/${recording.id}/discussion`)}
      >
        <ThumbnailTimestamp>
          {hrs > 0 && `${hrs}:`}
          {mins < 10 && hrs > 0 ? `0${mins}:` : `${mins}:`}
          {secs < 10 ? `0${secs}` : secs}
        </ThumbnailTimestamp>
        <ThumbnailHoverButton>
          <PlayIcon fontSize='inherit' />
        </ThumbnailHoverButton>
      </Thumbnail>
      <CardTextContainer>
        {/* Title + blurb */}
        <VerticalDiv
          backgroundColor='transparent'
          justifyContent='flex-start'
          alignItems='flex-start'
          css={`
            width: 100%;
            flex: 1 0 0;
          `}
        >
          <CopyText size='medium' color='textDark' fontWeight={700}>
            {recording.title.substring(0, 115)}
            {recording.title.length >= 115 && '...'}
          </CopyText>
          <Margin width='100%' height='' />
          <HorizontalDiv
            backgroundColor='transparent'
            justifyContent='space-between'
            css={`
              width: 100%;
              flex: 1 0 0;
              margin-top: 4px;
            `}
          >
            <CopyText size='small' color='textDark' fontWeight={300}>
              {recording.date}
            </CopyText>
            {recording.alreadyWatched && (
              <CopyText size='small' color='textDark' fontWeight={300}>
                Already watched
              </CopyText>
            )}
          </HorizontalDiv>
        </VerticalDiv>
      </CardTextContainer>
    </RecordingCardContainer>
  );
};

const mapStateToProps = (state: State) => ({
  // Recording metadata
  id: state.recording.id,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setRecordingsNavigationUrl: (newUrl: string) => dispatch(setRecordingsNavigationUrl(newUrl)),
  setCurrentRecordingMetadata: (recording: RecordingMetadataType) => dispatch(setCurrentRecordingMetadata(recording)),
  setDownloadUrl: (url: string) => dispatch(setDownloadUrl(url)),
  setBlobUrl: (url: string) => dispatch(setBlobUrl(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecordingCard);
