import { MINIPLAYER_VIEW_TYPES } from './miniplayer-view.enum';

// Action types
interface SetIsShowingPlaybackBar {
  type: MINIPLAYER_VIEW_TYPES.SET_IS_SHOWING_PLAYBACK_BAR;
  payload: boolean;
}

interface SetIsShowingMiniplayer {
  type: MINIPLAYER_VIEW_TYPES.SET_IS_SHOWING_MINIPLAYER;
  payload: boolean;
}

export type MiniplayerViewAction = SetIsShowingPlaybackBar | SetIsShowingMiniplayer;
