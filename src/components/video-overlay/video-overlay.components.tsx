import React, { useState } from 'react';

// Import utils
import secondsToTimeFormat from '../../utils/secondsToTimeFormat';

// Import Connect Redux
import { connect } from 'react-redux';
//Redux actions
import {
  setGlobalIsPlaying,
  setGlobalCurrentTimeMs,
  setGlobalCurrentVolume,
  setGlobalIsMuted,
} from '../../redux/video-playback/video-playback.actions';
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
} from './video-overlay.styles';

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
// import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import PipIcon from '@mui/icons-material/PictureInPicture';
import SettingsIcon from '@mui/icons-material/Settings';
import skipTime from '../../utils/skipTime';

// Component Props Interface
type Props = {
  // If we are displaying the overlay or not
  isDisplaying?: boolean;

  // Recording metadata
  videoLengthMs: number;

  // Video playback
  globalIsPlaying: boolean;
  globalCurrentTimeMs: number;
  globalCurrentVolume: number;
  globalIsMuted: boolean;
  setGlobalIsPlaying: typeof setGlobalIsPlaying;
  setGlobalCurrentTimeMs: typeof setGlobalCurrentTimeMs;
  setGlobalCurrentVolume: typeof setGlobalCurrentVolume;
  setGlobalIsMuted: typeof setGlobalIsMuted;
};

// Render Component
const VideoOverlay: React.FC<Props> = ({
  // If we are displaying the overlay or not
  isDisplaying,

  // Video metadata
  videoLengthMs,

  // Global video playback values
  globalIsPlaying,
  globalCurrentTimeMs,
  globalCurrentVolume,
  globalIsMuted,
}) => {
  // Local video playback state
  const [isPlaying, setIsPlaying] = useState(globalIsPlaying);
  const [isDraggingTime, setIsDraggingTime] = useState(false);
  const [isSkippingTime, setIsSkippingTime] = useState(false);
  const [currentTimeMs, setCurrentTimeMs] = useState(globalCurrentTimeMs);
  const [currentVolume, setCurrentVolume] = useState(globalCurrentVolume);
  const [isMuted, setIsMuted] = useState(globalIsMuted);

  // Get the video component
  const video: HTMLVideoElement | null = document.getElementById('video') as HTMLVideoElement;
  const videoContainer: HTMLDivElement = document.getElementById('video-container') as HTMLDivElement;

  // Manage the playback state of the main video
  if (video && videoContainer) {
    // Play video
    if (isPlaying && !isDraggingTime && !isSkippingTime) {
      video.play();
      video.ontimeupdate = () => setCurrentTimeMs(Math.floor(video.currentTime * 1000)); // used to update the slider
    }
    // Pause video
    else {
      video.pause();
      video.currentTime = currentTimeMs / 1000;
      // Stop pause if we are just skipping time
      if (isSkippingTime) setIsSkippingTime(false);
    }

    // Adjust the volume of the video
    isMuted ? (video.volume = 0) : (video.volume = currentVolume / 20);

    // Double click to open in fullscreen
    videoContainer.addEventListener('dblclick', () => {
      toggleFullscreen();
    });
  }

  // Drag time slider
  const dragTimeSlide: React.FormEventHandler<HTMLInputElement> = (event) => {
    if (!isDraggingTime) setIsDraggingTime(true);
    setCurrentTimeMs(parseInt(event.currentTarget.value));
  };

  // Drag volume slider
  const dragVolumeSlide: React.FormEventHandler<HTMLInputElement> = (event) => {
    setCurrentVolume(parseInt(event.currentTarget.value));
    setIsMuted(false); // Unmute
  };

  /*
    Fullscreen Actions and variables
  */
  const getFullscreenElement = () => document.fullscreenElement;
  // Fullscreen button
  const toggleFullscreen = () => {
    if (!video) return console.warn('Video element not found');
    if (!videoContainer) return console.warn('Video container element not found');
    if (!getFullscreenElement()) {
      videoContainer.requestFullscreen().catch((err) => console.error(err));
    } else {
      document.exitFullscreen();
    }
  };

  /*
    PIP Actions and variables
  */
  const isPipEnabled = () => document.pictureInPictureEnabled;
  const getPipElement = () => document.pictureInPictureElement;
  // PIP button
  const togglePip = () => {
    if (!video) return console.warn('Video element not found');
    if (!isPipEnabled()) return console.warn('Picture in Picture is not enabled on this browser');
    if (!getPipElement()) {
      video.requestPictureInPicture().catch((err) => console.error(err));
    } else {
      document.exitPictureInPicture();
    }
  };

  // Render the overlay
  return (
    <VideoInteractionContainer isDisplaying={isDisplaying}>
      {/* TIMESTAMP */}
      <CopyText size='x-small' color='white'>
        {secondsToTimeFormat(Math.floor(currentTimeMs / 1000))} /{' '}
        {secondsToTimeFormat(Math.floor(videoLengthMs / 1000))}
      </CopyText>
      <Margin height='4px' />
      {/* VIDEO SLIDER */}
      <VideoTimeSlider
        type='range'
        min={0}
        max={Math.floor(videoLengthMs)}
        value={currentTimeMs}
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
            clickAction={() => {
              setIsSkippingTime(true);
              setCurrentTimeMs((currentTimeMs) => skipTime(-15000, currentTimeMs, videoLengthMs));
            }}
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
            clickAction={() => {
              setIsSkippingTime(true);
              setCurrentTimeMs((currentTimeMs) => skipTime(15000, currentTimeMs, videoLengthMs));
            }}
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
            clickAction={() => setIsMuted((isMuted) => !isMuted)}
          >
            <Icon padding='12px'>{currentVolume === 0 || isMuted ? <MuteIcon /> : <VolumeIcon />}</Icon>
          </Button>
          {/* VOLUME SLIDER */}
          <VideoVolumeSlider
            type='range'
            min={0}
            max={20}
            value={isMuted ? 0 : currentVolume}
            onInput={(e) => dragVolumeSlide(e)}
          />
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
            clickAction={() => togglePip()}
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
            {/* <Icon padding='12px'>{isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}</Icon> */}
            <Icon padding='12px'>
              <FullscreenIcon />
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
  // Video metadata
  videoLengthMs: state.videoMetadata.videoLengthMs,
  // Video playback
  globalIsPlaying: state.videoPlayback.globalIsPlaying,
  globalCurrentTimeMs: state.videoPlayback.globalCurrentTimeMs,
  globalCurrentVolume: state.videoPlayback.globalCurrentVolume,
  globalIsMuted: state.videoPlayback.globalIsMuted,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  // Recording playback
  setGlobalIsPlaying: (isPlaying: boolean) => dispatch(setGlobalIsPlaying(isPlaying)),
  setGlobalCurrentTimeMs: (ms: number) => dispatch(setGlobalCurrentTimeMs(ms)),
  setGlobalCurrentVolume: (volume: number) => dispatch(setGlobalCurrentVolume(volume)),
  setGlobalIsMuted: (isMuted: boolean) => dispatch(setGlobalIsMuted(isMuted)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoOverlay);
