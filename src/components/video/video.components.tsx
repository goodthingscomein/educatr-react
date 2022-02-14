import React, { useState, useEffect, useRef } from 'react';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { State } from '../../redux/root-reducer';

// Import styles
import { VideoAndOverlayContainer, VideoContainer } from './video.styles';

// Import custom components
import MainVideoOverlay from '../video-overlay/video-overlay.components';

// Component Props Interface
type Props = {
  videoThumbnailSrc: string;
  videoBlobUrl: string;
};

// Render Component
const Video: React.FC<Props> = ({ videoThumbnailSrc, videoBlobUrl }) => {
  // Mouse drag state to show / hide the overlay
  const [mouseDragValue, setMouseDragValue] = useState(0);
  const mouseDragValueRef = useRef(mouseDragValue);
  mouseDragValueRef.current = mouseDragValue;

  const [isDisplayingOverlay, setIsDisplayingOverlay] = useState(false);
  const [isDisplayingCursor, setIsDisplayingCursor] = useState(true);

  // Functions to stop displaying overlay + cursor if mouse not moving
  const stopDisplayingOverlay = (currentMouseDragValue: number) => {
    if (currentMouseDragValue === mouseDragValueRef.current) setIsDisplayingOverlay(false);
  };
  const stopDisplayingCursor = (currentMouseDragValue: number) => {
    if (currentMouseDragValue === mouseDragValueRef.current) setIsDisplayingCursor(false);
  };

  // Update the DOM when the timer stops to hide the overlay / mouse
  useEffect(() => {
    // Set a new timeout for the overlay and the cursor
    setTimeout(stopDisplayingOverlay, 1000, mouseDragValue);
    setTimeout(stopDisplayingCursor, 3000, mouseDragValue);
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
    <VideoAndOverlayContainer
      id='video-container'
      onMouseMove={() => startVideoOverlayTimers()}
      isDisplayingCursor={isDisplayingCursor}
    >
      {videoBlobUrl && (
        <>
          <VideoContainer id='video' preload='auto' poster={videoThumbnailSrc}>
            <source src={videoBlobUrl} type='video/mp4' />
            HTML5 videos not supported with this browser.
          </VideoContainer>
          {/* MAIN VIDEO OVERLAY BUTTONS */}
          <MainVideoOverlay isDisplaying={isDisplayingOverlay} />
        </>
      )}
    </VideoAndOverlayContainer>
  );
};

const mapStateToProps = (state: State) => ({
  // Video metadata
  videoThumbnailSrc: state.videoMetadata.videoThumbnailSrc,
  // Video stream
  videoBlobUrl: state.videoStream.videoBlobUrl,
});

export default connect(mapStateToProps)(Video);
