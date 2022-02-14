import { VIDEO_PLAYBACK_TYPES } from './video-playback.enum';
import { VideoPlaybackState } from './video-playback.reducer';

// All Actions
interface SetGlobalIsPlayingAction {
  type: VIDEO_PLAYBACK_TYPES.SET_GLOBAL_IS_PLAYING;
  payload: boolean;
}

interface SetGlobalCurrentTimeMsAction {
  type: VIDEO_PLAYBACK_TYPES.SET_GLOBAL_CURRENT_TIME_MS;
  payload: number;
}

interface SetGlobalCurrentVolumeAction {
  type: VIDEO_PLAYBACK_TYPES.SET_GLOBAL_CURRENT_VOLUME;
  payload: number;
}

interface SetGlobalIsMutedAction {
  type: VIDEO_PLAYBACK_TYPES.SET_GLOBAL_IS_MUTED;
  payload: boolean;
}

interface SetPlaybackRefreshedAction {
  type: VIDEO_PLAYBACK_TYPES.SET_PLAYBACK_REFRESHED;
  payload: boolean;
}

interface SetVideoPlaybackStateAction {
  type: VIDEO_PLAYBACK_TYPES.SET_VIDEO_PLAYBACK_STATE;
  payload: VideoPlaybackState;
}

interface ResetVideoPlaybackStateAction {
  type: VIDEO_PLAYBACK_TYPES.RESET_VIDEO_PLAYBACK_STATE;
}

export type VideoPlaybackAction =
  | SetGlobalIsPlayingAction
  | SetGlobalCurrentTimeMsAction
  | SetGlobalCurrentVolumeAction
  | SetGlobalIsMutedAction
  | SetPlaybackRefreshedAction
  | SetVideoPlaybackStateAction
  | ResetVideoPlaybackStateAction;
