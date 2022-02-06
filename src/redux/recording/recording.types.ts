import { RECORDING_TYPES } from './recording.enum';

// Recording Type
export type RecordingMetadataType = {
  id: string;
  thumbnailSrc: string;
  title: string;
  description: string;
  length: number;
  date: string;
  alreadyWatched?: boolean;
  hashtags?: string[];
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

interface SetCurrentTimeSeconds {
  type: RECORDING_TYPES.SET_CURRENT_TIME_SECONDS;
  payload: number;
}

interface SetIsInFullscreen {
  type: RECORDING_TYPES.SET_IS_IN_FULLSCREEN;
  payload: boolean;
}

interface SetIsInPip {
  type: RECORDING_TYPES.SET_IS_IN_PIP;
  payload: boolean;
}

export type RecordingAction =
  | SetRecordingMetadataAction
  | SetDownloadUrlAction
  | SetBlobUrlAction
  | SetIsPlaying
  | SetCurrentTimeSeconds
  | SetIsInFullscreen
  | SetIsInPip;
