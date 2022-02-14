import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import utils
import secondsToTimeFormat from '../../utils/secondsToTimeFormat';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { setRecordingsNavigationUrl } from '../../redux/navigation/navigation.actions';
import { setVideoMetadata } from '../../redux/video-metadata/video-metadata.actions';
import { setDownloadUrl, setBlobUrl } from '../../redux/video-stream/video-stream.actions';
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
import { VideoMetadataState } from '../../redux/video-metadata/video-metadata.reducer';

// Component Props Interface
type Props = {
  video: VideoMetadataState;
  videoId: string; // Existing ID of video already playing

  // Recordings drawer button url
  setRecordingsNavigationUrl: typeof setRecordingsNavigationUrl;

  // Set the current recording metadata
  setVideoMetadata: typeof setVideoMetadata;
};

// Render Component
const RecordingCard: React.FC<Props> = ({
  video, // Associated recording metadata
  videoId,
  setRecordingsNavigationUrl,
  setVideoMetadata,
}) => {
  // Navigate url
  const navigate = useNavigate();

  const recordingsNavigation = (url: string) => {
    navigate(url);
    setRecordingsNavigationUrl(url); // set the nav url

    // If we have clicked on a new video
    if (video.videoId !== videoId) {
      // set the current recording to play metadata
      setVideoMetadata(video);
      // Reset the current playing video
      setDownloadUrl('');
      setBlobUrl('');
    }
  };

  return (
    <RecordingCardContainer>
      <Thumbnail
        src={video.videoThumbnailSrc}
        onClick={() => recordingsNavigation(`/recordings/${video.videoId}/discussion`)}
      >
        <ThumbnailTimestamp>{secondsToTimeFormat(video.videoLengthSeconds)}</ThumbnailTimestamp>
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
            {video.videoTitle.substring(0, 115)}
            {video.videoTitle.length >= 115 && '...'}
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
              {video.videoPostDate}
            </CopyText>
            {video.alreadyWatched && (
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
  videoId: state.videoMetadata.videoId,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setRecordingsNavigationUrl: (newUrl: string) => dispatch(setRecordingsNavigationUrl(newUrl)),
  setVideoMetadata: (video: VideoMetadataState) => dispatch(setVideoMetadata(video)),
  setDownloadUrl: (url: string) => dispatch(setDownloadUrl(url)),
  setBlobUrl: (url: string) => dispatch(setBlobUrl(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecordingCard);
