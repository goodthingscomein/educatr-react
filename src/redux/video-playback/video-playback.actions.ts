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
export const setGlobalCurrentTimeMs = (ms: number) =>
  ({
    type: VIDEO_PLAYBACK_TYPES.SET_GLOBAL_CURRENT_TIME_MS,
    payload: ms,
  } as VideoPlaybackAction);

export const setGlobalCurrentVolume = (currentVolume: number) =>
  ({
    type: VIDEO_PLAYBACK_TYPES.SET_GLOBAL_CURRENT_VOLUME,
    payload: currentVolume,
  } as VideoPlaybackAction);

export const setGlobalIsMuted = (isMuted: boolean) =>
  ({
    type: VIDEO_PLAYBACK_TYPES.SET_GLOBAL_IS_MUTED,
    payload: isMuted,
  } as VideoPlaybackAction);

export const setPlaybackRefreshed = (playbackRefreshed: boolean) =>
  ({
    type: VIDEO_PLAYBACK_TYPES.SET_PLAYBACK_REFRESHED,
    payload: playbackRefreshed,
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
