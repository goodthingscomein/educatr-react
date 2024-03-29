import React, { useState, useRef, useEffect } from 'react';

// Import utils
import secondsToTimeFormat from '../../utils/secondsToTimeFormat';
import skipTime from '../../utils/skipTime';

// Import Connect Redux
import { connect } from 'react-redux';
import { setVideoPlaybackState } from '../../redux/video-playback/video-playback.actions';
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
import { VideoPlaybackState } from '../../redux/video-playback/video-playback.reducer';

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
import VideoPlaybackButtons from '../video-playback-buttons/video-playback-buttons.components';

// Component Props Interface
type Props = {
  // Passed in props
  isDisplaying?: boolean;
  showShadow?: boolean;

  // Recording metadata
  videoId: string;
  videoLengthMs: number;

  // Video playback
  globalIsPlaying: boolean;
  globalCurrentTimeMs: number;
  globalCurrentVolume: number;
  globalIsMuted: boolean;
  setVideoPlaybackState: typeof setVideoPlaybackState;
};

// Render Component
const VideoOverlay: React.FC<Props> = ({
  // Passed in props
  isDisplaying,
  showShadow,

  // Video metadata
  videoLengthMs,

  // Global video playback values
  globalIsPlaying,
  globalCurrentTimeMs,
  globalCurrentVolume,
  globalIsMuted,
  setVideoPlaybackState,
}) => {
  // Has loaded hook
  const [hasLoadedGlobalState, setHasLoadedGlobalState] = useState(false);
  const [hasAssignedGlobalState, setHasAssignedGlobalState] = useState(false);

  // Local video playback state
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTimeMs, setCurrentTimeMs] = useState(0);
  const [currentVolume, setCurrentVolume] = useState(20);
  const [isMuted, setIsMuted] = useState(false);

  // Use Refs to update the global playback state in the use effect hook
  const isPlayingRef = useRef(isPlaying);
  isPlayingRef.current = isPlaying;
  const currentTimeMsRef = useRef(currentTimeMs);
  currentTimeMsRef.current = currentTimeMs;
  const currentVolumeRef = useRef(currentVolume);
  currentVolumeRef.current = currentVolume;
  const isMutedRef = useRef(isMuted);
  isMutedRef.current = isMuted;

  // Local state for other aspects of the video / overlay
  const [isDraggingTime, setIsDraggingTime] = useState(false);
  const [isSkippingTime, setIsSkippingTime] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(document.fullscreenElement);

  // On component dismount | Set the Redux global video playback values
  useEffect(() => {
    // Get the video component for the
    const video: HTMLVideoElement | null = document.getElementById('video') as HTMLVideoElement;
    const videoContainer: HTMLDivElement = document.getElementById('video-container') as HTMLDivElement;

    // Event listen functions
    const setVideoCurrentTimeEvent = () => setCurrentTimeMs(Math.floor(video.currentTime * 1000));
    const setVideoFullscreenEvent = () => toggleFullscreen();
    const setIsFullscreenEvent = () => setIsFullscreen(document.fullscreenElement);

    // Subscribe to video event listeners
    if (video && videoContainer) {
      video.addEventListener('timeupdate', setVideoCurrentTimeEvent);
      videoContainer.addEventListener('dblclick', setVideoFullscreenEvent);
      document.addEventListener('fullscreenchange', setIsFullscreenEvent);

      video.currentTime = currentTimeMs / 1000;
    }

    // Gets the global playback state
    if (!hasLoadedGlobalState) setHasLoadedGlobalState(true);

    // Syncs the video (switching between main video & miniplayer)
    if (hasLoadedGlobalState && !hasAssignedGlobalState) {
      setIsPlaying(globalIsPlaying);
      setCurrentTimeMs(globalCurrentTimeMs);
      setCurrentVolume(globalCurrentVolume);
      setIsMuted(globalIsMuted);
      setHasAssignedGlobalState(true);
    }

    return () => {
      // If global state has already loaded and we are on the same video
      if (hasLoadedGlobalState && hasAssignedGlobalState) {
        setVideoPlaybackState({
          globalIsPlaying: isPlayingRef.current,
          globalCurrentTimeMs: currentTimeMsRef.current,
          globalCurrentVolume: currentVolumeRef.current,
          globalIsMuted: isMutedRef.current,
        });
      }
      if (video && videoContainer) {
        video.removeEventListener('timeupdate', setVideoCurrentTimeEvent);
        videoContainer.removeEventListener('dblclick', setVideoFullscreenEvent);
        document.removeEventListener('fullscreenchange', setIsFullscreenEvent);
      }
    };
  }, [hasLoadedGlobalState, hasAssignedGlobalState]);

  // Get the video component for the
  const video: HTMLVideoElement | null = document.getElementById('video') as HTMLVideoElement;
  const videoContainer: HTMLDivElement = document.getElementById('video-container') as HTMLDivElement;

  // Manage the playback state of the main video
  if (video && videoContainer) {
    // Play video
    if (isPlaying && !isDraggingTime && !isSkippingTime) {
      video.play();
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
    <VideoInteractionContainer isDisplaying={isDisplaying} showShadow={showShadow}>
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
          <VideoPlaybackButtons
            isPlaying={isPlaying}
            rewindButtonAction={() => {
              setIsSkippingTime(true);
              setCurrentTimeMs((currentTimeMs) => skipTime(-15000, currentTimeMs, videoLengthMs));
            }}
            playPauseButtonAction={() => setIsPlaying((isPlaying) => !isPlaying)}
            fastForwardButtonAction={() => {
              setIsSkippingTime(true);
              setCurrentTimeMs((currentTimeMs) => skipTime(15000, currentTimeMs, videoLengthMs));
            }}
          />
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
            <Icon padding='12px'>{isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}</Icon>
          </Button>
        </VideoButtonsContainer>
      </VideoInteractionItemsRowContainer>
      {/* MIDDLE BUTTONS */}
      <VideoInteractionItemsRowContainer>
        <VideoMiddleButtonsContainer></VideoMiddleButtonsContainer>
      </VideoInteractionItemsRowContainer>
    </VideoInteractionContainer>
  );
};

const mapStateToProps = (state: State) => ({
  // Video metadata
  videoId: state.videoMetadata.videoId,
  videoLengthMs: state.videoMetadata.videoLengthMs,
  // Video playback
  globalIsPlaying: state.videoPlayback.globalIsPlaying,
  globalCurrentTimeMs: state.videoPlayback.globalCurrentTimeMs,
  globalCurrentVolume: state.videoPlayback.globalCurrentVolume,
  globalIsMuted: state.videoPlayback.globalIsMuted,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  // Recording playback
  setVideoPlaybackState: (playbackState: VideoPlaybackState) => dispatch(setVideoPlaybackState(playbackState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoOverlay);
