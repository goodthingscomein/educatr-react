import React, { useState, useEffect } from 'react';

// Import utils
import clampNumber from '../../utils/clampNumber';
import secondsToTimeFormat from '../../utils/secondsToTimeFormat';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { setDownloadUrl, setBlobUrl } from '../../redux/video-stream/video-stream.actions';
import {
  setGlobalIsPlaying,
  setGlobalCurrentTimeMilliseconds,
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
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import PipIcon from '@mui/icons-material/PictureInPicture';
import SettingsIcon from '@mui/icons-material/Settings';

// Component Props Interface
type Props = {
  // If we are displaying the overlay or not
  isDisplaying?: boolean;

  // Recording metadata
  videoLengthSeconds: number;

  // Set download / blob url
  setDownloadUrl: typeof setDownloadUrl;
  setBlobUrl: typeof setBlobUrl;

  // Set recording playback
  setGlobalIsPlaying: typeof setGlobalIsPlaying;
  setGlobalCurrentTimeMilliseconds: typeof setGlobalCurrentTimeMilliseconds;
};

// Render Component
const VideoOverlay: React.FC<Props> = ({
  // If we are displaying the overlay or not
  isDisplaying,

  // Video metadata
  videoLengthSeconds,
}) => {
  // Playback management state
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDraggingTime, setIsDraggingTime] = useState(false);
  const [isSkippingTime, setIsSkippingTime] = useState(false);
  const [currentTimeMilliseconds, setCurrentTimeMilliseconds] = useState(0);
  const [currentVolume, setCurrentVolume] = useState(10);

  // Get the video component
  const video: HTMLVideoElement | null = document.getElementById('video') as HTMLVideoElement;
  const videoContainer: HTMLDivElement = document.getElementById('video-container') as HTMLDivElement;

  // Manage the playback state of the main video
  if (video && videoContainer) {
    // Play video
    if (isPlaying && !isDraggingTime && !isSkippingTime) {
      video.play();
      video.ontimeupdate = () => setCurrentTimeMilliseconds(Math.floor(video.currentTime * 1000)); // used to update the slider
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
    setCurrentVolume(parseInt(event.currentTarget.value));
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
    if (!isPipEnabled()) return console.warn('Picture in Picture is not enabled on this browser');
    if (!video) return console.warn('Video element not found');
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
            clickAction={() =>
              setCurrentTimeMilliseconds((currentTimeMilliseconds) =>
                clampNumber(currentTimeMilliseconds - 15 * 1000, 0, videoLengthSeconds * 1000)
              )
            }
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
            clickAction={() =>
              setCurrentTimeMilliseconds((currentTimeMilliseconds) =>
                clampNumber(currentTimeMilliseconds + 15 * 1000, 0, videoLengthSeconds * 1000)
              )
            }
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
            clickAction={() => setCurrentVolume(0)}
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
  videoLengthSeconds: state.videoMetadata.videoLengthSeconds,
  // Video playback
  globalIsPlaying: state.videoPlayback.globalIsPlaying,
  globalCurrentTimeMilliseconds: state.videoPlayback.globalCurrentTimeMilliseconds,
  globalCurrentVolume: state.videoPlayback.globalCurrentVolume,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  // Recording urls
  setDownloadUrl: (url: string) => dispatch(setDownloadUrl(url)),
  setBlobUrl: (url: string) => dispatch(setBlobUrl(url)),
  // Recording playback
  setGlobalIsPlaying: (isPlaying: boolean) => dispatch(setGlobalIsPlaying(isPlaying)),
  setGlobalCurrentTimeMilliseconds: (ms: number) => dispatch(setGlobalCurrentTimeMilliseconds(ms)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoOverlay);
