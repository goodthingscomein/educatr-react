import { PLAYBACK_MINIPLAYER_TYPES } from './playback-miniplayer.enum';
import { PlaybackMiniplayerAction } from './playback-miniplayer.types';

// Set if showing the playback bar
export const setIsShowingPlaybackBar = (isShowing: boolean) =>
  ({
    type: PLAYBACK_MINIPLAYER_TYPES.SET_IS_SHOWING_PLAYBACK_BAR,
    payload: isShowing,
  } as PlaybackMiniplayerAction);

// Set if showing the miniplayer
export const setIsShowingMiniplayer = (isShowing: boolean) =>
  ({
    type: PLAYBACK_MINIPLAYER_TYPES.SET_IS_SHOWING_MINIPLAYER,
    payload: isShowing,
  } as PlaybackMiniplayerAction);
