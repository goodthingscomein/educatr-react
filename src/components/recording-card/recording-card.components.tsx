import React from 'react';
import { useNavigate } from 'react-router-dom';

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
  recordingUrl: string;
  thumbnailImgSrc: string;
  recordingLength: number;
  title: string;
  date: string;
  alreadyWatched?: boolean;
};

// Render Component
const RecordingCard: React.FC<Props> = ({
  recordingUrl,
  thumbnailImgSrc,
  recordingLength,
  title,
  date,
  alreadyWatched,
}) => {
  // Navigate url
  const navigate = useNavigate();

  // Calculate the timestamp
  const hrs = Math.floor(recordingLength / 3600);
  const mins = Math.floor(recordingLength / 60) - hrs * 60;
  const secs = Math.floor(recordingLength % 60);

  return (
    <RecordingCardContainer>
      <Thumbnail src={thumbnailImgSrc} onClick={() => navigate(recordingUrl)}>
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

export default RecordingCard;
