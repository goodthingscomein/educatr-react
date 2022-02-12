import React, { useState, useEffect, useRef } from 'react';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { State } from '../../redux/root-reducer';

// Import styles
import { VideoContainer, Video } from './main-video.styles';

// Import custom components
import MainVideoOverlay from '../main-video-overlay/main-video-overlay.components';

// Component Props Interface
type Props = {
  videoThumbnailSrc: string;
  videoBlobUrl: string;
};

// Render Component
const MainVideo: React.FC<Props> = ({ videoThumbnailSrc, videoBlobUrl }) => {
  const [mouseDragValue, setMouseDragValue] = useState(0);
  const mouseDragValueRef = useRef(mouseDragValue);
  mouseDragValueRef.current = mouseDragValue;

  const [isDisplayingOverlay, setIsDisplayingOverlay] = useState(false);
  const [isDisplayingCursor, setIsDisplayingCursor] = useState(true);

  // These functions are used to stop the displaying of the overlay is the mouse has stopped moving
  const stopDisplayingOverlay = (currentMouseDragValue: number) => {
    console.log(mouseDragValueRef.current);
    if (currentMouseDragValue === mouseDragValueRef.current) setIsDisplayingOverlay(false);
  };
  const stopDisplayingCursor = (currentMouseDragValue: number) => {
    if (currentMouseDragValue === mouseDragValueRef.current) setIsDisplayingCursor(false);
  };

  // Use effect is used to update the DOM using setTimer (OTHERWISE THE DOM WILL NOT UPDATE)
  useEffect(() => {
    // Set a new timeout for the overlay and the cursor
    setTimeout(stopDisplayingOverlay, 2000, mouseDragValue);
    setTimeout(stopDisplayingCursor, 5000, mouseDragValue);
  }, [mouseDragValue]);

  // Stop displaying timeout function attached to mouse move event
  const startVideoOverlayTimers = () => {
    // Show the overlay, cursor, and update the mouse moved counter
    setIsDisplayingOverlay(true);
    setIsDisplayingCursor(true);
    setMouseDragValue(mouseDragValue + 1);
  };

  // Render the video component
  return (
    <VideoContainer
      id='main-video-container'
      onMouseMove={() => startVideoOverlayTimers()}
      isDisplayingCursor={isDisplayingCursor}
    >
      {videoBlobUrl && (
        <>
          <Video id='main-video' preload='auto' poster={videoThumbnailSrc}>
            <source src={videoBlobUrl} type='video/mp4' />
            HTML5 videos not supported with this browser.
          </Video>
          {/* MAIN VIDEO OVERLAY BUTTONS */}
          <MainVideoOverlay isDisplaying={isDisplayingOverlay} />
        </>
      )}
    </VideoContainer>
  );
};

const mapStateToProps = (state: State) => ({
  videoThumbnailSrc: state.recording.videoThumbnailSrc,
  videoBlobUrl: state.recording.videoBlobUrl,
});

export default connect(mapStateToProps)(MainVideo);
