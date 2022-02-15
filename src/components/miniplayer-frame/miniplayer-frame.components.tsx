import React from 'react';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Required Redux Actions
import { State } from '../../redux/root-reducer';

// Import styles
import { MiniplayerFrame } from './miniplayer-frame.styles';

// Import custom components
import Video from '../video/video.components';

// Component Props Interface
type Props = {
  // Blob url
  videoBlobUrl: string;

  // Playbar / miniplayer state
  isShowingPlaybackBar: boolean;
  isShowingMiniplayer: boolean;
};

// Render Component
const Miniplayer: React.FC<Props> = ({ videoBlobUrl, isShowingPlaybackBar, isShowingMiniplayer }) => {
  return (
    <MiniplayerFrame isDisplaying={isShowingPlaybackBar && isShowingMiniplayer}>
      {/* VIDEO */}
      {videoBlobUrl && <Video showTitleOverlayButton />}
    </MiniplayerFrame>
  );
};

const mapStateToProps = (state: State) => ({
  // Video stream
  videoBlobUrl: state.videoStream.videoBlobUrl,
  // Miniplayer view
  isShowingPlaybackBar: state.miniplayerView.isShowingPlaybackBar,
  isShowingMiniplayer: state.miniplayerView.isShowingMiniplayer,
});

export default connect(mapStateToProps)(Miniplayer);
