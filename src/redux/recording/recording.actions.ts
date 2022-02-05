import { RECORDING_TYPES } from './recording.enum';
import { RecordingMetadataType, RecordingAction } from './recording.types';

// Set the current video
export const setCurrentRecordingMetadata = (recording: RecordingMetadataType) =>
  ({
    type: RECORDING_TYPES.SET_CURRENT_RECORDING_METADATA,
    payload: recording,
  } as RecordingAction);

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
