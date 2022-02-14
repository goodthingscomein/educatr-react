import { VIDEO_PLAYBACK_TYPES } from './video-playback.enum';
import { VideoPlaybackAction } from './video-playback.types';
import { clampVolume } from './video-playback.utils';

export interface VideoPlaybackState {
  globalIsPlaying: boolean;
  globalCurrentTimeMilliseconds: number;
  globalCurrentVolume: number;
}

const DEFAULT_STATE = {
  globalIsPlaying: false,
  globalCurrentTimeMilliseconds: 0,
  globalCurrentVolume: 20,
} as VideoPlaybackState;

const videoPlaybackReducer = (
  state: VideoPlaybackState = DEFAULT_STATE,
  action: VideoPlaybackAction
): VideoPlaybackState => {
  switch (action.type) {
    case VIDEO_PLAYBACK_TYPES.SET_GLOBAL_IS_PLAYING:
      return {
        ...state,
        globalIsPlaying: action.payload,
      };
    case VIDEO_PLAYBACK_TYPES.SET_GLOBAL_CURRENT_TIME_MILLISECONDS:
      return {
        ...state,
        globalCurrentTimeMilliseconds: action.payload,
      };
    case VIDEO_PLAYBACK_TYPES.SET_GLOBAL_CURRENT_VOLUME:
      return {
        ...state,
        globalCurrentVolume: clampVolume(action.payload),
      };
    case VIDEO_PLAYBACK_TYPES.SET_VIDEO_PLAYBACK_STATE:
      return {
        ...state,
        ...action.payload,
      };
    case VIDEO_PLAYBACK_TYPES.RESET_VIDEO_PLAYBACK_STATE:
      return {
        ...state,
        ...DEFAULT_STATE,
      };
    default:
      return state;
  }
};

export default videoPlaybackReducer;
