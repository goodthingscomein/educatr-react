import React from 'react';

// Import utils
import secondsToTimeFormat from '../../utils/secondsToTimeFormat';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import {
  setDownloadUrl,
  setBlobUrl,
  setIsPlaying,
  setIsDraggingTime,
  setCurrentTimeMilliseconds,
  setIsFullscreen,
  setIsPip,
  fastforwardTime,
  rewindTime,
} from '../../redux/recording/recording.actions';
import { State } from '../../redux/root-reducer';
import { Dispatch } from 'redux';
import { Action } from '../../redux/all-actions.types';

// Import styles
import {
  VideoButtonsContainer,
  VideoInteractionContainer,
  VideoInteractionItemsRowContainer,
  VideoMiddleButtonsContainer,
  VideoSliderContainer,
  VideoTimeSlider,
} from './main-video-overlay.styles';

// Import custom components
import Icon from '../icon/icon-components';
import Margin from '../margin/margin.components';
import CopyText from '../copy-text/copy-text.components';
import Button from '../button/button.components';

// Import custom icons
import CloseIcon from '@mui/icons-material/Close';
import PlayIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipForwardIcon from '@mui/icons-material/FastForward';
import SkipBackIcon from '@mui/icons-material/FastRewind';
import VolumeIcon from '@mui/icons-material/VolumeUp';
import MuteIcon from '@mui/icons-material/VolumeOff';
import FullscreenIcon from '@mui/icons-material/FitScreenOutlined';
import PipIcon from '@mui/icons-material/PictureInPicture';
import HideVideoIcon from '@mui/icons-material/KeyboardArrowDown';

// Component Props Interface
type Props = {
  // Recording metadata
  videoId: string;
  videoLengthSeconds: number;

  // Recording playback
  isPlaying: boolean;
  isDraggingTime: boolean;
  currentTimeMilliseconds: number;
  isFullScreen: boolean;
  isPip: boolean;

  // Set download / blob url
  setDownloadUrl: typeof setDownloadUrl;
  setBlobUrl: typeof setBlobUrl;

  // Set recording playback
  setIsPlaying: typeof setIsPlaying;
  setIsDraggingTime: typeof setIsDraggingTime;
  setCurrentTimeMilliseconds: typeof setCurrentTimeMilliseconds;
  setIsFullscreen: typeof setIsFullscreen;
  setIsPip: typeof setIsPip;
  fastforwardTime: typeof fastforwardTime;
  rewindTime: typeof rewindTime;
};

// Render Component
const MainVideoOverlay: React.FC<Props> = ({
  // Video metadata
  videoId,
  videoLengthSeconds,

  // Playback state
  isPlaying,
  isDraggingTime,
  currentTimeMilliseconds,
  isFullScreen,
  isPip,

  // Video link actions
  setDownloadUrl,
  setBlobUrl,

  // Playback actions
  setIsPlaying,
  setIsDraggingTime,
  setCurrentTimeMilliseconds,
  setIsFullscreen,
  setIsPip,
  // Fastforward / rewind time
  fastforwardTime,
  rewindTime,
}) => {
  // Drag time slider
  const dragTimeSlide: React.FormEventHandler<HTMLInputElement> = (event) => {
    if (!isDraggingTime) setIsDraggingTime(true);
    setCurrentTimeMilliseconds(parseInt(event.currentTarget.value));
  };

  // Render the overlay
  return (
    <VideoInteractionContainer>
      {/* TIMESTAMP */}
      <CopyText size='x-small' color='white'>
        {secondsToTimeFormat(Math.floor(currentTimeMilliseconds / 1000))} /{' '}
        {secondsToTimeFormat(Math.floor(videoLengthSeconds))}
      </CopyText>
      <Margin height='4px' />
      {/* VIDEO SLIDER */}
      <VideoTimeSlider
        type='range'
        min={0}
        max={Math.floor(videoLengthSeconds * 1000)}
        value={currentTimeMilliseconds}
        onInput={(e) => dragTimeSlide(e)}
        onClick={() => setIsDraggingTime(false)}
      />
      {/* OVERLAY BOTTOM BUTTONS */}
      <VideoInteractionItemsRowContainer>
        {/* LEFT SIDE */}
        <VideoButtonsContainer>
          {/* REWIND BUTTON */}
          <Button
            variant='text'
            size='small'
            textColor='white'
            hoverTextColor='primary'
            padding='0'
            clickAction={() => rewindTime(15)}
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
            hoverTextColor='primary'
            padding='0'
            margin='0 8px'
            clickAction={() => setIsPlaying(!isPlaying)}
          >
            <Icon padding='12px'>{isPlaying ? <PauseIcon fontSize='large' /> : <PlayIcon fontSize='large' />}</Icon>
          </Button>
          {/* FASTFORWARD BUTTON */}
          <Button
            variant='text'
            size='small'
            textColor='white'
            hoverTextColor='primary'
            padding='0'
            margin='0 12px 0 0'
            clickAction={() => fastforwardTime(15)}
          >
            <Icon padding='12px'>
              <SkipForwardIcon />
            </Icon>
          </Button>
          {/* MUTE BUTTON */}
          <Button variant='text' size='small' textColor='white' hoverTextColor='primary' padding='0'>
            <Icon padding='12px'>
              <Icon padding='12px'>{isPlaying ? <MuteIcon /> : <VolumeIcon />}</Icon>
            </Icon>
          </Button>
        </VideoButtonsContainer>
        <VideoButtonsContainer>
          <Button
            variant='text'
            size='small'
            textColor='white'
            hoverTextColor='primary'
            padding='0'
            margin='0 12px 0 0'
          >
            <Icon padding='12px'>
              <FullscreenIcon fontSize='medium' />
            </Icon>
          </Button>
          <Button variant='text' size='small' textColor='white' hoverTextColor='primary' padding='0'>
            <Icon padding='12px'>
              <PipIcon />
            </Icon>
          </Button>
        </VideoButtonsContainer>
        {/* TOP RIGHT BUTTONS */}
        <VideoButtonsContainer>
          <Button variant='text' size='small' textColor='white' hoverTextColor='primary' padding='0'>
            <Icon padding='12px'>
              <HideVideoIcon />
            </Icon>
          </Button>
          <Button
            variant='text'
            size='small'
            textColor='white'
            hoverTextColor='primary'
            padding='0'
            margin='0 0 0 12px'
          >
            <Icon padding='12px'>
              <CloseIcon />
            </Icon>
          </Button>
        </VideoButtonsContainer>
      </VideoInteractionItemsRowContainer>
      {/* MIDDLE BUTTONS */}
      <VideoInteractionItemsRowContainer>
        <VideoMiddleButtonsContainer></VideoMiddleButtonsContainer>
      </VideoInteractionItemsRowContainer>
      <VideoInteractionItemsRowContainer></VideoInteractionItemsRowContainer>
    </VideoInteractionContainer>
  );
};

const mapStateToProps = (state: State) => ({
  videoId: state.recording.videoId,
  videoLengthSeconds: state.recording.videoLengthSeconds,
  isPlaying: state.recording.isPlaying,
  isDraggingTime: state.recording.isDraggingTime,
  currentTimeMilliseconds: state.recording.currentTimeMilliseconds,
  isFullScreen: state.recording.isFullScreen,
  isPip: state.recording.isPip,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  // Recording urls
  setDownloadUrl: (url: string) => dispatch(setDownloadUrl(url)),
  setBlobUrl: (url: string) => dispatch(setBlobUrl(url)),
  // Recording playback
  setIsPlaying: (isPlaying: boolean) => dispatch(setIsPlaying(isPlaying)),
  setIsDraggingTime: (isDraggingTime: boolean) => dispatch(setIsDraggingTime(isDraggingTime)),
  setCurrentTimeMilliseconds: (ms: number) => dispatch(setCurrentTimeMilliseconds(ms)),
  setIsFullscreen: (isFullscreen: boolean) => dispatch(setIsFullscreen(isFullscreen)),
  setIsPip: (isPip: boolean) => dispatch(setIsPip(isPip)),
  fastforwardTime: (seconds: number) => dispatch(fastforwardTime(seconds)),
  rewindTime: (seconds: number) => dispatch(rewindTime(seconds)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainVideoOverlay);
