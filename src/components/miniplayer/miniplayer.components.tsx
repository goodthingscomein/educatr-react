import React, { useState } from 'react';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { setCurrentTimeMilliseconds, setIsSkippingTime } from '../../redux/recording/recording.actions';
import { State } from '../../redux/root-reducer';
import { Dispatch } from 'redux';
import { Action } from '../../redux/all-actions.types';

// Import styles
import { MiniplayerFrame, MiniplayerVideo } from './miniplayer.styles';

// Import custom components
import MiniplayerOverlay from '../miniplayer-overlay/miniplayer-overlay.components';

// Component Props Interface
type Props = {
  // Playback state
  isPlaying: boolean;
  isDraggingTime: boolean;
  isSkippingTime: boolean;
  currentTimeMilliseconds: number;

  // Playback actions
  setCurrentTimeMilliseconds: typeof setCurrentTimeMilliseconds;
  setIsSkippingTime: typeof setIsSkippingTime;

  // Blob url for the miniplayer video
  videoBlobUrl: string;

  // Playbar / miniplayer state
  isShowingPlaybackBar: boolean;
  isShowingMiniplayer: boolean;
};

// Render Component
const Miniplayer: React.FC<Props> = ({
  isPlaying,
  isDraggingTime,
  isSkippingTime,
  currentTimeMilliseconds,
  setCurrentTimeMilliseconds,
  setIsSkippingTime,
  videoBlobUrl,
  isShowingPlaybackBar,
  isShowingMiniplayer,
}) => {
  const video: HTMLVideoElement | null = document.getElementById('miniplayer-video') as HTMLVideoElement;

  // Manage the playback state of the miniplayer video
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

  return (
    <MiniplayerFrame isDisplaying={isShowingPlaybackBar && isShowingMiniplayer}>
      {/* VIDEO */}
      {videoBlobUrl && (
        <>
          <MiniplayerVideo id='miniplayer-video'>
            <source src={videoBlobUrl} type='video/mp4' />
          </MiniplayerVideo>
          {/* BUTTONS ON MINIPLAYER */}
          <MiniplayerOverlay />
        </>
      )}
    </MiniplayerFrame>
  );
};

const mapStateToProps = (state: State) => ({
  isPlaying: state.recording.isPlaying,
  isDraggingTime: state.recording.isDraggingTime,
  isSkippingTime: state.recording.isSkippingTime,
  currentTimeMilliseconds: state.recording.currentTimeMilliseconds,
  // playing url
  videoBlobUrl: state.recording.videoBlobUrl,
  isShowingPlaybackBar: state.playbackMiniplayer.isShowingPlaybackBar,
  isShowingMiniplayer: state.playbackMiniplayer.isShowingMiniplayer,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  // Recording playback
  setCurrentTimeMilliseconds: (ms: number) => dispatch(setCurrentTimeMilliseconds(ms)),
  setIsSkippingTime: (isSkipping: boolean) => dispatch(setIsSkippingTime(isSkipping)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Miniplayer);
