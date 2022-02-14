import { VIDEO_PLAYBACK_TYPES } from './video-playback.enum';
import { VideoPlaybackAction } from './video-playback.types';
import { clampVolume } from './video-playback.utils';

export interface VideoPlaybackState {
  globalIsPlaying: boolean;
  globalCurrentTimeMs: number;
  globalCurrentVolume: number;
  globalIsMuted: boolean;
  playbackRefreshed?: boolean;
}

const INITIAL_STATE = {
  globalIsPlaying: false,
  globalCurrentTimeMs: 0,
  globalCurrentVolume: 20,
  globalIsMuted: false,
  playbackRefreshed: true,
} as VideoPlaybackState;

const DEFAULT_STATE = {
  globalIsPlaying: false,
  globalCurrentTimeMs: 0,
  playbackRefreshed: true,
} as VideoPlaybackState;

const videoPlaybackReducer = (
  state: VideoPlaybackState = INITIAL_STATE,
  action: VideoPlaybackAction
): VideoPlaybackState => {
  switch (action.type) {
    case VIDEO_PLAYBACK_TYPES.SET_GLOBAL_IS_PLAYING: {
      if (!state.playbackRefreshed) {
        return {
          ...state,
          globalIsPlaying: action.payload,
        };
      }
      return state;
    }
    case VIDEO_PLAYBACK_TYPES.SET_GLOBAL_CURRENT_TIME_MS: {
      if (!state.playbackRefreshed) {
        return {
          ...state,
          globalCurrentTimeMs: action.payload,
        };
      }
      return state;
    }
    case VIDEO_PLAYBACK_TYPES.SET_GLOBAL_CURRENT_VOLUME: {
      if (!state.playbackRefreshed) {
        return {
          ...state,
          globalCurrentVolume: clampVolume(action.payload),
        };
      }
      return state;
    }
    case VIDEO_PLAYBACK_TYPES.SET_GLOBAL_IS_MUTED: {
      if (!state.playbackRefreshed) {
        return {
          ...state,
          globalIsMuted: action.payload,
        };
      }
      return state;
    }
    case VIDEO_PLAYBACK_TYPES.SET_PLAYBACK_REFRESHED:
      return {
        ...state,
        playbackRefreshed: action.payload,
      };
    case VIDEO_PLAYBACK_TYPES.SET_VIDEO_PLAYBACK_STATE:
      if (!state.playbackRefreshed) {
        return {
          ...state,
          ...action.payload,
        };
      }
      return state;
    case VIDEO_PLAYBACK_TYPES.RESET_VIDEO_PLAYBACK_STATE: {
      return {
        ...state,
        ...DEFAULT_STATE,
      };
    }
    default:
      return state;
  }
};

export default videoPlaybackReducer;
