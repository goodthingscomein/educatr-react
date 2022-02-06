import React from 'react';

// Import Connect Redux
import { connect } from 'react-redux';

// Import Playback Miniplayer Actions
import {
  setIsShowingPlaybackBar,
  setIsShowingMiniplayer,
} from '../../redux/playback-miniplayer/playback-miniplayer.actions';
// Import recording url actions
import { setDownloadUrl, setBlobUrl } from '../../redux/recording/recording.actions';
import { State } from '../../redux/root-reducer';
import { Dispatch } from 'redux';
import { Action } from '../../redux/all-actions.types';

// Import styles
import {
  BarContainer,
  BarPaddingContainer,
  HideBarButton,
  ShowBarButton,
  CloseBarButton,
  PlaybackButtonsContainer,
  ShowHideMiniplayerBarButton,
} from './playback-bottom-bar.styles';

// Import custom components
import Miniplayer from '../miniplayer/miniplayer.components';

// Import custom icons
import ShowBarIcon from '@mui/icons-material/ArrowForwardIos';
import HideBarIcon from '@mui/icons-material/ArrowBackIosNew';
import CloseIcon from '@mui/icons-material/Close';
import ShowMiniplayerIcon from '@mui/icons-material/KeyboardArrowUp';
import HideMiniplayerIcon from '@mui/icons-material/KeyboardArrowDown';

// Component Props Interface
type Props = {
  // Playbar state
  isShowingPlaybackBar: boolean;
  setIsShowingPlaybackBar: typeof setIsShowingPlaybackBar;

  // Miniplayer state
  isShowingMiniplayer: boolean;
  setIsShowingMiniplayer: typeof setIsShowingMiniplayer;

  // Recording urls state
  setDownloadUrl: typeof setDownloadUrl;
  setBlobUrl: typeof setBlobUrl;
};

// Render Component
const PlaybackBottomBar: React.FC<Props> = ({
  // Playback bar
  isShowingPlaybackBar,
  setIsShowingPlaybackBar,
  // Miniplayer
  isShowingMiniplayer,
  setIsShowingMiniplayer,
  // Recording urls
  setDownloadUrl,
  setBlobUrl,
}) => {
  // Close button
  const closePlaybackBarMiniplayer = () => {
    // Set is showing playback bar and miniplayer to true for when it is next opened
    setIsShowingPlaybackBar(false);
    setIsShowingMiniplayer(true);
    // Turn off the
    setDownloadUrl('');
    setBlobUrl('');
  };

  // Render the playback bar
  return (
    <>
      {isShowingPlaybackBar ? ( // Display the whole bar
        <BarContainer>
          <BarPaddingContainer>
            {/* LEFT SIDE HIDE BUTTON */}
            <HideBarButton onClick={() => setIsShowingPlaybackBar(false)}>
              <HideBarIcon fontSize='inherit' />
            </HideBarButton>
            {/* CENTER BUTTONS TO MANAGE THE MINIPLAYER */}
            <PlaybackButtonsContainer></PlaybackButtonsContainer>
            {/* RIGHT SIDE BUTTONS */}

            {!isShowingMiniplayer ? (
              <ShowHideMiniplayerBarButton onClick={() => setIsShowingMiniplayer(true)}>
                <ShowMiniplayerIcon />
              </ShowHideMiniplayerBarButton>
            ) : (
              <ShowHideMiniplayerBarButton onClick={() => setIsShowingMiniplayer(false)}>
                <HideMiniplayerIcon />
              </ShowHideMiniplayerBarButton>
            )}

            <CloseBarButton onClick={() => closePlaybackBarMiniplayer()}>
              <CloseIcon fontSize='medium' />
            </CloseBarButton>
          </BarPaddingContainer>
        </BarContainer>
      ) : (
        // Display the show button
        <ShowBarButton onClick={() => setIsShowingPlaybackBar(true)}>
          <ShowBarIcon fontSize='inherit' />
        </ShowBarButton>
      )}

      {/* VIDEO MINIPLAYER */}
      <Miniplayer />
    </>
  );
};

const mapStateToProps = (state: State) => ({
  isShowingPlaybackBar: state.playbackMiniplayer.isShowingPlaybackBar,
  isShowingMiniplayer: state.playbackMiniplayer.isShowingMiniplayer,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  // Playback / miniplayer
  setIsShowingPlaybackBar: (isShowing: boolean) => dispatch(setIsShowingPlaybackBar(isShowing)),
  setIsShowingMiniplayer: (isShowing: boolean) => dispatch(setIsShowingMiniplayer(isShowing)),
  // Recording urls
  setDownloadUrl: (url: string) => dispatch(setDownloadUrl(url)),
  setBlobUrl: (url: string) => dispatch(setBlobUrl(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaybackBottomBar);
