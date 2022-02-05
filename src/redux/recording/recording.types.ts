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

export type RecordingAction = SetRecordingMetadataAction | SetDownloadUrlAction | SetBlobUrlAction;
