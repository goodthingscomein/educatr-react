import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { setRecordingsNavigationUrl } from '../../redux/navigation/navigation.actions';
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

// Component Props Interface
type Props = {
  recordingId: string;
  thumbnailImgSrc: string;
  recordingLength: number;
  title: string;
  date: string;
  alreadyWatched?: boolean;

  // Recordings drawer button url
  setRecordingsNavigationUrl: typeof setRecordingsNavigationUrl;
};

// Render Component
const RecordingCard: React.FC<Props> = ({
  recordingId,
  thumbnailImgSrc,
  recordingLength,
  title,
  date,
  alreadyWatched,

  // Recordings drawer button url
  setRecordingsNavigationUrl,
}) => {
  // Navigate url
  const navigate = useNavigate();

  const recordingsNavigation = (url: string) => {
    navigate(url);
    setRecordingsNavigationUrl(url);
  };

  // Calculate the timestamp
  const hrs = Math.floor(recordingLength / 3600);
  const mins = Math.floor(recordingLength / 60) - hrs * 60;
  const secs = Math.floor(recordingLength % 60);

  return (
    <RecordingCardContainer>
      <Thumbnail src={thumbnailImgSrc} onClick={() => recordingsNavigation(`/recordings/${recordingId}`)}>
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
            {title.substring(0, 115)}
            {title.length >= 115 && '...'}
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
              {date}
            </CopyText>
            {alreadyWatched && (
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

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setRecordingsNavigationUrl: (newUrl: string) => dispatch(setRecordingsNavigationUrl(newUrl)),
});

export default connect(null, mapDispatchToProps)(RecordingCard);
