import { RECORDING_TYPES } from './recording.enum';

// Recording Type
export type RecordingMetadataType = {
  videoId: string;
  videoThumbnailSrc: string;
  videoTitle: string;
  videoDescription: string;
  videoLengthSeconds: number;
  videoPostDate: string;
  alreadyWatched?: boolean;
  videoHashtags?: string[];
};

// Action types
interface SetRecordingMetadataAction {
  type: RECORDING_TYPES.SET_CURRENT_RECORDING_METADATA;
  payload: RecordingMetadataType;
}

interface SetDownloadUrlAction {
  type: RECORDING_TYPES.SET_DOWNLOAD_URL;
  payload: string;
}

interface SetBlobUrlAction {
  type: RECORDING_TYPES.SET_BLOB_URL;
  payload: string;
}

interface SetIsPlaying {
  type: RECORDING_TYPES.SET_IS_PLAYING;
  payload: boolean;
}

interface SetIsDraggingTime {
  type: RECORDING_TYPES.SET_IS_DRAGGING_TIME;
  payload: boolean;
}

interface SetIsSkippingTime {
  type: RECORDING_TYPES.SET_IS_SKIPPING_TIME;
  payload: boolean;
}

interface SetCurrentTimeMilliseconds {
  type: RECORDING_TYPES.SET_CURRENT_TIME_MILLISECONDS;
  payload: number;
}

interface SetIsFullscreen {
  type: RECORDING_TYPES.SET_IS_FULLSCREEN;
  payload: boolean;
}

interface SetIsPip {
  type: RECORDING_TYPES.SET_IS_PIP;
  payload: boolean;
}

interface FastforwardTime {
  type: RECORDING_TYPES.FASTFORWARD_TIME;
  payload: number;
}

interface RewindTime {
  type: RECORDING_TYPES.REWIND_TIME;
  payload: number;
}

export type RecordingAction =
  | SetRecordingMetadataAction
  | SetDownloadUrlAction
  | SetBlobUrlAction
  | SetIsPlaying
  | SetIsDraggingTime
  | SetIsSkippingTime
  | SetCurrentTimeMilliseconds
  | SetIsFullscreen
  | SetIsPip
  | FastforwardTime
  | RewindTime;
