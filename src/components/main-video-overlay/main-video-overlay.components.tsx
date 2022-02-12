import React, { useState } from 'react';

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
  setIsSkippingTime,
  setCurrentTimeMilliseconds,
  setVolume,
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
  VideoTimeSlider,
  VideoVolumeSlider,
} from './main-video-overlay.styles';

// Import custom components
import Icon from '../icon/icon-components';
import Margin from '../margin/margin.components';
import CopyText from '../copy-text/copy-text.components';
import Button from '../button/button.components';

// Import custom icons
import PlayIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipForwardIcon from '@mui/icons-material/FastForward';
import SkipBackIcon from '@mui/icons-material/FastRewind';
import VolumeIcon from '@mui/icons-material/VolumeUp';
import MuteIcon from '@mui/icons-material/VolumeOff';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import PipIcon from '@mui/icons-material/PictureInPicture';
import SettingsIcon from '@mui/icons-material/Settings';

// Component Props Interface
type Props = {
  // If we are displaying the overlay or not
  isDisplaying?: boolean;

  // Recording metadata
  videoLengthSeconds: number;

  // Recording playback
  isPlaying: boolean;
  isDraggingTime: boolean;
  isSkippingTime: boolean;
  currentTimeMilliseconds: number;
  currentVolume: number;

  // Set download / blob url
  setDownloadUrl: typeof setDownloadUrl;
  setBlobUrl: typeof setBlobUrl;

  // Set recording playback
  setIsPlaying: typeof setIsPlaying;
  setIsDraggingTime: typeof setIsDraggingTime;
  setIsSkippingTime: typeof setIsSkippingTime;
  setCurrentTimeMilliseconds: typeof setCurrentTimeMilliseconds;
  setVolume: typeof setVolume;
  fastforwardTime: typeof fastforwardTime;
  rewindTime: typeof rewindTime;
};

// Render Component
const MainVideoOverlay: React.FC<Props> = ({
  // If we are displaying the overlay or not
  isDisplaying,

  // Video metadata
  videoLengthSeconds,

  // Playback state
  isPlaying,
  isDraggingTime,
  isSkippingTime,
  currentTimeMilliseconds,
  currentVolume,

  // Playback actions
  setIsPlaying,
  setIsDraggingTime,
  setIsSkippingTime,
  setCurrentTimeMilliseconds,
  setVolume,
  // Fastforward / rewind time
  fastforwardTime,
  rewindTime,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Video playback manager
  // Get the video component
  const video: HTMLVideoElement | null = document.getElementById('main-video') as HTMLVideoElement;
  const videoContainer: HTMLDivElement = document.getElementById('main-video-container') as HTMLDivElement;

  // Manage the playback state of the main video
  if (video && videoContainer) {
    // Play video
    if (isPlaying && !isDraggingTime && !isSkippingTime) {
      video.play();
      video.ontimeupdate = () => setCurrentTimeMilliseconds(Math.floor(video.currentTime * 1000));
    }
    // Pause video
    else {
      video.pause();
      video.currentTime = currentTimeMilliseconds / 1000;
      // Stop pause if we are just skipping time
      if (isSkippingTime) setIsSkippingTime(false);
    }

    // Double click to open in fullscreen
    videoContainer.addEventListener('dblclick', () => {
      toggleFullscreen();
    });
  }

  // Drag time slider
  const dragTimeSlide: React.FormEventHandler<HTMLInputElement> = (event) => {
    if (!isDraggingTime) setIsDraggingTime(true);
    setCurrentTimeMilliseconds(parseInt(event.currentTarget.value));
  };

  // Drag volume slider
  const dragVolumeSlide: React.FormEventHandler<HTMLInputElement> = (event) => {
    setVolume(parseInt(event.currentTarget.value));
  };

  const getFullscreenElement = () => document.fullscreenElement;

  // Fullscreen button
  const toggleFullscreen = () => {
    if (!video) return console.warn('Video element not found');
    if (!videoContainer) return console.warn('Video container element not found');
    if (!getFullscreenElement()) {
      videoContainer.requestFullscreen().catch((err) => console.error(err));
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Render the overlay
  return (
    <VideoInteractionContainer isDisplaying={isDisplaying}>
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
      <Margin height='8px' />
      {/* OVERLAY BOTTOM BUTTONS */}
      <VideoInteractionItemsRowContainer>
        {/* LEFT SIDE */}
        <VideoButtonsContainer>
          {/* REWIND BUTTON */}
          <Button
            variant='text'
            size='small'
            textColor='white'
            hoverTextColor='lightGrey'
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
            hoverTextColor='lightGrey'
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
            hoverTextColor='lightGrey'
            padding='0'
            margin='0 24px 0 0'
            clickAction={() => fastforwardTime(15)}
          >
            <Icon padding='12px'>
              <SkipForwardIcon />
            </Icon>
          </Button>
          {/* MUTE BUTTON */}
          <Button
            variant='text'
            size='small'
            textColor='white'
            hoverTextColor='lightGrey'
            padding='0'
            clickAction={() => setVolume(0)}
          >
            <Icon padding='12px'>{currentVolume === 0 ? <MuteIcon /> : <VolumeIcon />}</Icon>
          </Button>
          {/* VOLUME SLIDER */}
          <VideoVolumeSlider type='range' min={0} max={10} value={currentVolume} onInput={(e) => dragVolumeSlide(e)} />
        </VideoButtonsContainer>
        {/* RIGHT SIDE */}
        <VideoButtonsContainer>
          <Button variant='text' size='small' textColor='white' hoverTextColor='lightGrey' padding='0'>
            <Icon padding='12px'>
              <SettingsIcon />
            </Icon>
          </Button>
          <Button
            variant='text'
            size='small'
            textColor='white'
            hoverTextColor='lightGrey'
            padding='0'
            margin='0 0 0 12px'
          >
            <Icon padding='12px'>
              <PipIcon />
            </Icon>
          </Button>
          <Button
            variant='text'
            size='small'
            textColor='white'
            hoverTextColor='lightGrey'
            padding='0'
            margin='0 0 0 12px'
            clickAction={() => toggleFullscreen()}
          >
            <Icon padding='12px'>{isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}</Icon>
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
  videoLengthSeconds: state.recording.videoLengthSeconds,
  isPlaying: state.recording.isPlaying,
  isDraggingTime: state.recording.isDraggingTime,
  isSkippingTime: state.recording.isSkippingTime,
  currentTimeMilliseconds: state.recording.currentTimeMilliseconds,
  currentVolume: state.recording.currentVolume,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  // Recording urls
  setDownloadUrl: (url: string) => dispatch(setDownloadUrl(url)),
  setBlobUrl: (url: string) => dispatch(setBlobUrl(url)),
  // Recording playback
  setIsPlaying: (isPlaying: boolean) => dispatch(setIsPlaying(isPlaying)),
  setIsDraggingTime: (isDraggingTime: boolean) => dispatch(setIsDraggingTime(isDraggingTime)),
  setIsSkippingTime: (isSkippingTime: boolean) => dispatch(setIsSkippingTime(isSkippingTime)),
  setCurrentTimeMilliseconds: (ms: number) => dispatch(setCurrentTimeMilliseconds(ms)),
  setVolume: (newVolume: number) => dispatch(setVolume(newVolume)),
  fastforwardTime: (seconds: number) => dispatch(fastforwardTime(seconds)),
  rewindTime: (seconds: number) => dispatch(rewindTime(seconds)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainVideoOverlay);
