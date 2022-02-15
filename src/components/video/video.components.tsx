import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// Import Connect Redux
import { connect } from 'react-redux';
import { setRecordingsNavigationUrl } from '../../redux/navigation/navigation.actions';
import { State } from '../../redux/root-reducer';
import { Dispatch } from 'redux';
import { Action } from '../../redux/all-actions.types';

// Import styles
import {
  VideoAndOverlayContainer,
  VideoEntireOverlayContainer,
  VideoTitleContainer,
  VideoContainer,
} from './video.styles';

// Import custom components
import VideoOverlay from '../video-overlay/video-overlay.components';
import Link from '../link/link.components';

// Component Props Interface
type Props = {
  // Passed props
  showTitleOverlayButton?: boolean;

  // Video metadata
  videoId: string;
  videoTitle: string;
  videoThumbnailSrc: string;

  // Video stream
  videoBlobUrl: string;

  // Set the recording drawer button URL
  setRecordingsNavigationUrl: typeof setRecordingsNavigationUrl;
};

// Render Component
const Video: React.FC<Props> = ({
  showTitleOverlayButton,
  videoId,
  videoTitle,
  videoThumbnailSrc,
  videoBlobUrl,
  setRecordingsNavigationUrl,
}) => {
  // Mouse drag state to show / hide the overlay
  const [mouseDragValue, setMouseDragValue] = useState(0);
  const mouseDragValueRef = useRef(mouseDragValue);
  mouseDragValueRef.current = mouseDragValue;

  // State used to determine if showing the overlay + cursor
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
    const overlayTimer = setTimeout(stopDisplayingOverlay, 1000, mouseDragValue);
    const cursorTimer = setTimeout(stopDisplayingCursor, 3000, mouseDragValue);

    // On dismount, clear the timers to stop memory leak
    return () => {
      clearTimeout(overlayTimer);
      clearTimeout(cursorTimer);
    };
  }, [mouseDragValue]);

  // Stop displaying timeout function attached to mouse move event
  const startMouseMoveTimers = () => {
    setIsDisplayingOverlay(true); // display overlay
    setIsDisplayingCursor(true); // display cursor
    setMouseDragValue(mouseDragValue + 1); // update the mouse move counter
  };

  const navigate = useNavigate();
  const recordingDetailsUrl = `/recordings/${videoId}/discussion`;

  const titleClickAction = () => {
    setRecordingsNavigationUrl(recordingDetailsUrl);
    navigate(recordingDetailsUrl);
  };

  // Render the video component
  return (
    <VideoAndOverlayContainer
      id='video-container'
      onMouseMove={() => startMouseMoveTimers()}
      isDisplayingCursor={isDisplayingCursor}
    >
      {videoBlobUrl && (
        <>
          <VideoContainer id='video' preload='auto' poster={videoThumbnailSrc}>
            <source src={videoBlobUrl} type='video/mp4' />
            HTML5 videos not supported with this browser.
          </VideoContainer>
          {/* MAIN VIDEO OVERLAY BUTTONS */}
          <VideoEntireOverlayContainer>
            <VideoTitleContainer>
              {showTitleOverlayButton && (
                <Link color='white' hoverColor='primaryAccent' clickAction={() => titleClickAction()}>
                  {videoTitle.substring(0, 50)} {videoTitle.length >= 50 && '...'}
                </Link>
              )}
            </VideoTitleContainer>
            <VideoOverlay isDisplaying={isDisplayingOverlay} showShadow />
          </VideoEntireOverlayContainer>
        </>
      )}
    </VideoAndOverlayContainer>
  );
};

const mapStateToProps = (state: State) => ({
  // Video metadata
  videoId: state.videoMetadata.videoId,
  videoTitle: state.videoMetadata.videoTitle,
  videoThumbnailSrc: state.videoMetadata.videoThumbnailSrc,
  // Video stream
  videoBlobUrl: state.videoStream.videoBlobUrl,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  // Set recording drawer button url
  setRecordingsNavigationUrl: (url: string) => dispatch(setRecordingsNavigationUrl(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Video);
