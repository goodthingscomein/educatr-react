import { MINIPLAYER_VIEW_TYPES } from './miniplayer-view.enum';
import { MiniplayerViewAction } from './miniplayer-view.types';

interface MiniplayerViewState {
  isShowingPlaybackBar: boolean;
  isShowingMiniplayer: boolean;
}

const DEFAULT_STATE = {
  isShowingPlaybackBar: true,
  isShowingMiniplayer: true,
} as MiniplayerViewState;

const playbackMiniplayerReducer = (
  state: MiniplayerViewState = DEFAULT_STATE,
  action: MiniplayerViewAction
): MiniplayerViewState => {
  switch (action.type) {
    case MINIPLAYER_VIEW_TYPES.SET_IS_SHOWING_PLAYBACK_BAR:
      return {
        ...state,
        isShowingPlaybackBar: action.payload,
      };
    case MINIPLAYER_VIEW_TYPES.SET_IS_SHOWING_MINIPLAYER:
      return {
        ...state,
        isShowingMiniplayer: action.payload,
      };
    default:
      return state;
  }
};

export default playbackMiniplayerReducer;
