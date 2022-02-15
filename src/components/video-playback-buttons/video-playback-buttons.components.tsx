import React from 'react';

// Import styles
import { ButtonsGroupContainer } from './video-playback-buttons.styles';

// Import custom components
import Button from '../button/button.components';
import Icon from '../icon/icon-components';

// Import custom icons
import PlayIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipForwardIcon from '@mui/icons-material/FastForward';
import SkipBackIcon from '@mui/icons-material/FastRewind';

// Component Props Interface
type Props = {
  isPlaying: boolean;
  rewindButtonAction: () => unknown;
  playPauseButtonAction: () => unknown;
  fastForwardButtonAction: () => unknown;
};

// Render Component
const VideoPlaybackButtons: React.FC<Props> = ({
  isPlaying,
  playPauseButtonAction,
  rewindButtonAction,
  fastForwardButtonAction,
}) => (
  <ButtonsGroupContainer>
    {/* REWIND BUTTON */}
    <Button
      variant='text'
      size='small'
      textColor='white'
      hoverTextColor='lightGrey'
      padding='0'
      clickAction={() => rewindButtonAction()}
    >
      <Icon padding='12px'>
        <SkipBackIcon />
      </Icon>
    </Button>
    {/* PLAY / PAUSE BUTTON */}
    <Button
      variant='text'
      size='x-large'
      textColor='white'
      hoverTextColor='lightGrey'
      padding='0'
      margin='0 8px'
      clickAction={() => playPauseButtonAction()}
    >
      <Icon padding='12px'>{isPlaying ? <PauseIcon fontSize='large' /> : <PlayIcon fontSize='large' />}</Icon>
    </Button>
    {/* FASTFORWARD BUTTON */}
    <Button
      variant='text'
      size='small'
      textColor='white'
      hoverTextColor='lightGrey'
      padding='0'
      margin='0 24px 0 0'
      clickAction={() => fastForwardButtonAction()}
    >
      <Icon padding='12px'>
        <SkipForwardIcon />
      </Icon>
    </Button>
  </ButtonsGroupContainer>
);

export default VideoPlaybackButtons;
