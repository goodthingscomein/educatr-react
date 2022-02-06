import { PLAYBACK_MINIPLAYER_TYPES } from './playback-miniplayer.enum';
import { PlaybackMiniplayerAction } from './playback-miniplayer.types';

interface PlaybackMiniplayerState {
  isShowingPlaybackBar: boolean;
  isShowingMiniplayer: boolean;
}

const INITIAL_STATE = {
  isShowingPlaybackBar: true,
  isShowingMiniplayer: true,
} as PlaybackMiniplayerState;

const playbackMiniplayerReducer = (
  state: PlaybackMiniplayerState = INITIAL_STATE,
  action: PlaybackMiniplayerAction
) => {
  switch (action.type) {
    case PLAYBACK_MINIPLAYER_TYPES.SET_IS_SHOWING_PLAYBACK_BAR:
      return {
        ...state,
        isShowingPlaybackBar: action.payload,
      };
    case PLAYBACK_MINIPLAYER_TYPES.SET_IS_SHOWING_MINIPLAYER:
      return {
        ...state,
        isShowingMiniplayer: action.payload,
      };
    default:
      return state;
  }
};

export default playbackMiniplayerReducer;
