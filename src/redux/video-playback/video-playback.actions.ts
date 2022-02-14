import { VIDEO_PLAYBACK_TYPES } from './video-playback.enum';
import { VideoPlaybackState } from './video-playback.reducer';
import { VideoPlaybackAction } from './video-playback.types';

// Set the current video
export const setGlobalIsPlaying = (isPlaying: boolean) =>
  ({
    type: VIDEO_PLAYBACK_TYPES.SET_GLOBAL_IS_PLAYING,
    payload: isPlaying,
  } as VideoPlaybackAction);

// Set the download and blob urls
export const setGlobalCurrentTimeMilliseconds = (timeMilliseconds: number) =>
  ({
    type: VIDEO_PLAYBACK_TYPES.SET_GLOBAL_CURRENT_TIME_MILLISECONDS,
    payload: timeMilliseconds,
  } as VideoPlaybackAction);

export const setGlobalCurrentVolume = (currentVolume: number) =>
  ({
    type: VIDEO_PLAYBACK_TYPES.SET_GLOBAL_CURRENT_VOLUME,
    payload: currentVolume,
  } as VideoPlaybackAction);

export const setVideoPlaybackState = (playbackState: VideoPlaybackState) =>
  ({
    type: VIDEO_PLAYBACK_TYPES.SET_VIDEO_PLAYBACK_STATE,
    payload: playbackState,
  } as VideoPlaybackAction);

export const resetVideoPlaybackState = () =>
  ({
    type: VIDEO_PLAYBACK_TYPES.RESET_VIDEO_PLAYBACK_STATE,
  } as VideoPlaybackAction);
