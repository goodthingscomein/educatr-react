import { RECORDING_TYPES } from './recording.enum';
import { RecordingMetadataType, RecordingAction } from './recording.types';

// Set the current video
export const setCurrentRecordingMetadata = (recording: RecordingMetadataType) =>
  ({
    type: RECORDING_TYPES.SET_CURRENT_RECORDING_METADATA,
    payload: recording,
  } as RecordingAction);

// Set the download and blob urls
export const setDownloadUrl = (url: string) =>
  ({
    type: RECORDING_TYPES.SET_DOWNLOAD_URL,
    payload: url,
  } as RecordingAction);

export const setBlobUrl = (url: string) =>
  ({
    type: RECORDING_TYPES.SET_BLOB_URL,
    payload: url,
  } as RecordingAction);

// Set the video playback values
export const setIsPlaying = (isPlaying: boolean) =>
  ({
    type: RECORDING_TYPES.SET_IS_PLAYING,
    payload: isPlaying,
  } as RecordingAction);

export const setIsDraggingTime = (isDraggingTime: boolean) =>
  ({
    type: RECORDING_TYPES.SET_IS_DRAGGING_TIME,
    payload: isDraggingTime,
  } as RecordingAction);

export const setIsSkippingTime = (isSkippingTime: boolean) =>
  ({
    type: RECORDING_TYPES.SET_IS_SKIPPING_TIME,
    payload: isSkippingTime,
  } as RecordingAction);

export const setCurrentTimeMilliseconds = (currentTimeMilliseconds: number) =>
  ({
    type: RECORDING_TYPES.SET_CURRENT_TIME_MILLISECONDS,
    payload: currentTimeMilliseconds,
  } as RecordingAction);

export const setIsFullscreen = (isInFullscreen: boolean) =>
  ({
    type: RECORDING_TYPES.SET_IS_FULLSCREEN,
    payload: isInFullscreen,
  } as RecordingAction);

export const setIsPip = (isInPip: boolean) =>
  ({
    type: RECORDING_TYPES.SET_IS_PIP,
    payload: isInPip,
  } as RecordingAction);

// Fastforward / rewind time of video
export const fastforwardTime = (seconds: number) =>
  ({
    type: RECORDING_TYPES.FASTFORWARD_TIME,
    payload: seconds,
  } as RecordingAction);

export const rewindTime = (seconds: number) =>
  ({
    type: RECORDING_TYPES.REWIND_TIME,
    payload: seconds,
  } as RecordingAction);
