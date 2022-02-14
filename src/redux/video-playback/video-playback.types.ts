import { VIDEO_PLAYBACK_TYPES } from './video-playback.enum';
import { VideoPlaybackState } from './video-playback.reducer';

// All Actions
interface SetGlobalIsPlayingAction {
  type: VIDEO_PLAYBACK_TYPES.SET_GLOBAL_IS_PLAYING;
  payload: boolean;
}

interface SetGlobalCurrentTimeMillisecondsAction {
  type: VIDEO_PLAYBACK_TYPES.SET_GLOBAL_CURRENT_TIME_MILLISECONDS;
  payload: number;
}

interface SetGlobalCurrentVolumeAction {
  type: VIDEO_PLAYBACK_TYPES.SET_GLOBAL_CURRENT_VOLUME;
  payload: number;
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
  | SetGlobalCurrentTimeMillisecondsAction
  | SetGlobalCurrentVolumeAction
  | SetVideoPlaybackStateAction
  | ResetVideoPlaybackStateAction;
