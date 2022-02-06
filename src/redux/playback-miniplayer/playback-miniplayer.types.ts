import { PLAYBACK_MINIPLAYER_TYPES } from './playback-miniplayer.enum';

// Action types
interface SetIsShowingPlaybackBar {
  type: PLAYBACK_MINIPLAYER_TYPES.SET_IS_SHOWING_PLAYBACK_BAR;
  payload: boolean;
}

interface SetIsShowingMiniplayer {
  type: PLAYBACK_MINIPLAYER_TYPES.SET_IS_SHOWING_MINIPLAYER;
  payload: boolean;
}

export type PlaybackMiniplayerAction = SetIsShowingPlaybackBar | SetIsShowingMiniplayer;
