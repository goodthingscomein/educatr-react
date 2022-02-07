import React from 'react';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { setCurrentTimeMilliseconds, setIsSkippingTime } from '../../redux/recording/recording.actions';
import { State } from '../../redux/root-reducer';
import { Dispatch } from 'redux';
import { Action } from '../../redux/all-actions.types';

// Import styles
import { VideoContainer, Video } from './main-video.styles';

// Import custom components
import MainVideoOverlay from '../main-video-overlay/main-video-overlay.components';

// Component Props Interface
type Props = {
  // Video metadata
  videoThumbnailSrc: string;

  // Video playback state
  isPlaying: boolean;
  isDraggingTime: boolean;
  isSkippingTime: boolean;
  currentTimeMilliseconds: number;

  // Video playback actions
  setCurrentTimeMilliseconds: typeof setCurrentTimeMilliseconds;
  setIsSkippingTime: typeof setIsSkippingTime;

  // Video urls
  videoBlobUrl: string;
};

// Render Component
const MainVideo: React.FC<Props> = ({
  videoThumbnailSrc,
  isPlaying,
  isDraggingTime,
  isSkippingTime,
  currentTimeMilliseconds,
  setCurrentTimeMilliseconds,
  setIsSkippingTime,
  videoBlobUrl,
}) => {
  // Get the video component
  const video: HTMLVideoElement | null = document.getElementById('main-video') as HTMLVideoElement;

  // Manage the playback state of the main video
  if (video) {
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
  }

  // Render the video component
  return (
    <VideoContainer>
      {videoBlobUrl && (
        <>
          <Video id='main-video' preload='auto' poster={videoThumbnailSrc}>
            <source src={videoBlobUrl} type='video/mp4' />
            HTML5 videos not supported with this browser.
          </Video>
          {/* MAIN VIDEO OVERLAY BUTTONS */}
          <MainVideoOverlay />
        </>
      )}
    </VideoContainer>
  );
};

const mapStateToProps = (state: State) => ({
  // Video metadata
  videoThumbnailSrc: state.recording.videoThumbnailSrc,

  // Video playback details
  isPlaying: state.recording.isPlaying,
  isDraggingTime: state.recording.isDraggingTime,
  isSkippingTime: state.recording.isSkippingTime,
  currentTimeMilliseconds: state.recording.currentTimeMilliseconds,

  // Video urls
  videoBlobUrl: state.recording.videoBlobUrl,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  // Recording playback
  setCurrentTimeMilliseconds: (ms: number) => dispatch(setCurrentTimeMilliseconds(ms)),
  setIsSkippingTime: (isSkipping: boolean) => dispatch(setIsSkippingTime(isSkipping)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainVideo);
