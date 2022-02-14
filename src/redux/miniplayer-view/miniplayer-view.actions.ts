import { MINIPLAYER_VIEW_TYPES } from './miniplayer-view.enum';
import { MiniplayerViewAction } from './miniplayer-view.types';

// Set if showing the playback bar
export const setIsShowingPlaybackBar = (isShowing: boolean) =>
  ({
    type: MINIPLAYER_VIEW_TYPES.SET_IS_SHOWING_PLAYBACK_BAR,
    payload: isShowing,
  } as MiniplayerViewAction);

// Set if showing the miniplayer
export const setIsShowingMiniplayer = (isShowing: boolean) =>
  ({
    type: MINIPLAYER_VIEW_TYPES.SET_IS_SHOWING_MINIPLAYER,
    payload: isShowing,
  } as MiniplayerViewAction);
