import React, { useState } from 'react';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions

import { State } from '../../redux/root-reducer';
import { Dispatch } from 'redux';
import { Action } from '../../redux/all-actions.types';

// Import styles
import { MiniplayerFrame, MiniplayerVideo } from './miniplayer.styles';

// Import custom components
import MiniplayerOverlay from '../miniplayer-overlay/miniplayer-overlay.components';

// Component Props Interface
type Props = {
  // Blob url for miniplayer video
  blobUrl: string;

  // Playbar state
  isShowingPlaybackBar: boolean;

  // Miniplayer state
  isShowingMiniplayer: boolean;
};

// Render Component
const Miniplayer: React.FC<Props> = ({ blobUrl, isShowingPlaybackBar, isShowingMiniplayer }) => (
  <MiniplayerFrame isDisplaying={isShowingPlaybackBar && isShowingMiniplayer}>
    {/* VIDEO */}
    {blobUrl && (
      <>
        <MiniplayerVideo>
          <source src={blobUrl} type='video/mp4' />
        </MiniplayerVideo>
        {/* BUTTONS ON MINIPLAYER */}
        <MiniplayerOverlay />
      </>
    )}
  </MiniplayerFrame>
);

const mapStateToProps = (state: State) => ({
  blobUrl: state.recording.blobUrl,
  isShowingPlaybackBar: state.playbackMiniplayer.isShowingPlaybackBar,
  isShowingMiniplayer: state.playbackMiniplayer.isShowingMiniplayer,
});

export default connect(mapStateToProps)(Miniplayer);
