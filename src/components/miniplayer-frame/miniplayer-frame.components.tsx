import React, { useState } from 'react';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { setGlobalCurrentTimeMilliseconds } from '../../redux/video-playback/video-playback.actions';
import { State } from '../../redux/root-reducer';
import { Dispatch } from 'redux';
import { Action } from '../../redux/all-actions.types';

// Import styles
import { MiniplayerFrame } from './miniplayer-frame.styles';

// Import custom components
import Video from '../video/video.components';

// Component Props Interface
type Props = {
  // Playback state
  globalIsPlaying: boolean;
  globalCurrentTimeMilliseconds: number;

  // Playback actions
  setGlobalCurrentTimeMilliseconds: typeof setGlobalCurrentTimeMilliseconds;

  // Blob url
  videoBlobUrl: string;

  // Playbar / miniplayer state
  isShowingPlaybackBar: boolean;
  isShowingMiniplayer: boolean;
};

// Render Component
const Miniplayer: React.FC<Props> = ({
  globalIsPlaying,
  globalCurrentTimeMilliseconds,
  setGlobalCurrentTimeMilliseconds,
  videoBlobUrl,
  isShowingPlaybackBar,
  isShowingMiniplayer,
}) => {
  const video: HTMLVideoElement | null = document.getElementById('miniplayer-video') as HTMLVideoElement;

  return (
    <MiniplayerFrame isDisplaying={isShowingPlaybackBar && isShowingMiniplayer}>
      {/* VIDEO */}
      {videoBlobUrl && <Video />}
    </MiniplayerFrame>
  );
};

const mapStateToProps = (state: State) => ({
  // Video metadata
  globalIsPlaying: state.videoPlayback.globalIsPlaying,
  globalCurrentTimeMilliseconds: state.videoPlayback.globalCurrentTimeMilliseconds,
  // Video stream
  videoBlobUrl: state.videoStream.videoBlobUrl,
  // Miniplayer view
  isShowingPlaybackBar: state.miniplayerView.isShowingPlaybackBar,
  isShowingMiniplayer: state.miniplayerView.isShowingMiniplayer,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  // Recording playback
  setGlobalCurrentTimeMilliseconds: (ms: number) => dispatch(setGlobalCurrentTimeMilliseconds(ms)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Miniplayer);
